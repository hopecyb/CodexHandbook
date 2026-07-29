---
title: Tổng quan Webhook
description: "Dùng HTTP callback để nối trạng thái Tác vụ Codex vào hệ thống nội bộ — sự kiện, chữ ký và idempotent."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

**Webhook** cho phép bạn, khi trạng thái Tác vụ Codex hoặc Cloud thay đổi, gửi HTTP callback tới dịch vụ của mình để cập nhật ticket, thông báo Slack hoặc bàn Phê duyệt nội bộ. Chương này là lối vào tích hợp sự kiện của [nền tảng nhà phát triển](/guide/developer-platform/).

## Trang này sẽ nói gì

- Lựa chọn giữa Webhook và polling SDK
- Sự kiện và trường payload thường gặp (khái niệm)
- Xác minh chữ ký, replay và idempotent

## Hiểu trước nó đang làm gì

Nếu lần đầu gặp Webhook, hãy hiểu: mỗi khi trạng thái Tác vụ đổi, Codex chủ động báo hệ thống của bạn, thay vì bạn cứ hỏi đi hỏi lại «xong chưa».

Nó phù hợp khi «Tác vụ vừa kết thúc, còn hành động hệ thống khác cần nối tiếp».

:::note
Đường dẫn Webhook, tên sự kiện và thuật toán chữ ký lấy theo [tài liệu API chính thức](https://developers.openai.com/codex).
:::

## Hiểu nhầm thường gặp

### Webhook không phải câu trả lời mặc định cho mọi tự động hóa

Nếu chỉ chạy một lần `codex exec` và xem mã thoát là đủ, thường không cần Webhook.

Webhook phù hợp hơn với:

- Tác vụ dài
- Điều phối nhiều bước
- Sau khi Tác vụ kết thúc còn phải thông báo hoặc kích hoạt hệ thống khác

### Nhận callback chưa nghĩa là tin ngay được

Nhiều người mới coi Webhook là «tin chính thức, dùng trực tiếp được».

Nhưng nếu không xác minh chữ ký, idempotent và xử lý timeout, có thể bị request giả, gửi trùng hoặc dao động hệ thống kéo ra vấn đề.

## Khi nào dùng Webhook

| Phù hợp | Không phù hợp |
|---|---|
| Thông báo nội bộ khi Tác vụ hoàn thành | Cần stream từng chữ thời gian thực mạnh |
| Tích hợp bus sự kiện sẵn có | Cron đơn giản chỉ cần mã thoát `exec` |
| Điều phối nhiều bước (xong → kích hoạt deploy) | Không có endpoint public và không muốn dùng hàng đợi |

Pipeline đơn giản có thể chỉ dùng [Script và pipeline](/guide/developer-platform/non-interactive/scripts-and-pipelines/); dịch vụ đa tenant sản phẩm hóa thường kết hợp **SDK + Webhook**.

## Sự kiện điển hình (khái niệm)

| Sự kiện | Công dụng |
|---|---|
| `task.completed` | Lấy kết quả, cập nhật trạng thái PR |
| `task.failed` | Cảnh báo, hàng đợi thử lại |
| `task.needs_approval` | Đẩy tới UI Phê duyệt của người |
| `review.posted` | Đồng bộ kết luận review mã |

Payload nên có: `task_id`, trạng thái, timestamp, định danh repo/dự án; **tránh** đặt Prompt đầy đủ trong webhook body nếu có PII.

## Yêu cầu tối thiểu phía nhận

1. Endpoint **HTTPS**, xác minh header chữ ký chính thức (ví dụ `X-Signature` + HMAC)
2. **Idempotent**: cùng `event_id` chỉ xử lý một lần
3. **2xx nhanh**: logic nặng đưa hàng đợi bất đồng bộ
4. **Làm sạch log**: không ghi khóa bí mật và toàn bộ đầu vào người dùng

Minh họa (giả mã):

```python
def handle(request):
    verify_signature(request.headers, request.body)
    event = parse_json(request.body)
    if already_processed(event["id"]):
        return 200
    enqueue(process_codex_event, event)
    return 200
```

## Quan hệ với CI

- Trong CI, `codex exec` thường **không cần** webhook; mã thoát là đủ
- Tác vụ Cloud dài, Phê duyệt trên mobile phù hợp hơn để webhook đẩy vào hệ thống nội bộ

## Lỗi thường gặp

- Không xác minh chữ ký, callback giả
- Xử lý vượt timeout nền tảng gây gửi trùng
- Trong handler webhook chạy đồng bộ lần Codex thứ hai
- Phơi URL webhook trên frontend client

## Cách phán có nên dùng không

Nếu chưa chắc cảnh hiện tại có cần Webhook, hỏi trước:

1. Tôi có cần được chủ động báo khi trạng thái Tác vụ đổi không
2. Sau Tác vụ, có bước hệ thống tiếp theo cần tự động nối không
3. Tôi đã có backend nhận HTTP callback an toàn chưa

Càng nhiều câu «có», Webhook càng có ý nghĩa.

## Ranh giới bảo mật

- Xem [Mô hình mối đe dọa](/guide/team-enterprise/security/threat-model/) và [Sử dụng chấp nhận được](/guide/team-enterprise/governance/acceptable-use/)
- Đưa rotate webhook secret vào lịch vận hành

## Checklist nghiệm thu

- [ ] Xác minh chữ ký thất bại trả 4xx
- [ ] Đã có bảng idempotent hoặc dedupe key
- [ ] Worker bất đồng bộ và DLQ (dead letter) đã cấu hình
- [ ] Thống nhất với quy ước trường [đầu ra có cấu trúc](/guide/developer-platform/non-interactive/structured-output/)

Webhook phù hợp nối thay đổi trạng thái Tác vụ vào hệ thống khác; đồng thời hãy làm tốt trước xác minh chữ ký, idempotent và xử lý bất đồng bộ.

## Nguồn tham chiếu
- Tài liệu sự kiện OpenAI Codex / Cloud API
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** API / Cloud  
**Cơ sở kiểm chứng:** Đã đối chiếu với mô tả công khai hiện tại của OpenAI Developers về nền tảng nhà phát triển và tích hợp hướng sự kiện, cùng các trang nhóm Webhooks, CI/CD, đầu ra có cấu trúc và ranh giới bảo mật đội đã kiểm chứng trong sổ tay; trang chỉ xác nhận nguyên tắc tích hợp ổn định rằng Webhook phù hợp thông báo trạng thái, phía nhận nên xác minh chữ ký, idempotent và xử lý bất đồng bộ.  
**Kiểm chứng gần nhất:** 2026-07-26
