---
title: Loại sự kiện Hook
description: Điểm kích hoạt Hook trên chuỗi thực thi Codex — để kiểm tra, nhật ký và chặn đúng giai đoạn.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ở đây nói về: cùng một kiểm tra nên kích hoạt khi nào.

**Sự kiện Hook** là thời điểm hệ thống gọi logic bạn cấu hình tại nút cố định. Hiểu loại sự kiện mới đưa"kiểm toán, kiểm tra"trong [Tổng quan Hooks](/skills/hooks/hooks-overview/) xuống cấu hình mà không kéo chậm mỗi lần gọi công cụ.

## Nội dung

- Giai đoạn sự kiện thường gặp và kịch bản phù hợp
- Phân công giữa sự kiện và [quy tắc lệnh](/guide/customization/rules/command-rules/)
- Chiến lược hiệu năng và thất bại khi cấu hình

## Một nguyên tắc quyết định

Đừng bắt đầu bằng"Hook này có làm được không".  
Hãy hỏi trước: bạn muốn chặn trước khi việc xảy ra, hay ghi nhận sau khi việc xảy ra?

Nhiều Hook đặt sai chỗ vì chọn sai thời điểm kích hoạt.

:::note
**Tên sự kiện và trường lấy [tài liệu Hooks chính thức](https://developers.openai.com/codex) làm chuẩn.** Bảng dưới là nhóm khái niệm; sau khi nâng cấp CLI hãy đối chiếu `--help` và release notes.
:::

## Nhóm sự kiện (khái niệm)

| Giai đoạn | Sự kiện điển hình (tên khái niệm) | Phù hợp làm gì |
|---|---|---|
| Phiên | `session.start` / `session.end` | Kiểm tra môi trường, tổng hợp thay đổi, ghi chú cuối kiểm toán |
| Trước công cụ | `tool.call.before` / `pre_tool_use` | Chặn lệnh nguy hiểm, quét mẫu khóa |
| Sau công cụ | `tool.call.after` / `post_tool_use` | Nhật ký có cấu trúc, metric, lưu trữ đã ẩn danh |
| Prompt | `user_prompt.submit` | Quét chính sách tiêm, giới hạn độ dài |
| Artifact | `artifact.create` | Header giấy phép, whitelist loại file |
| Tích hợp | `pr.before_create`(nếu hỗ trợ) | Số issue, định dạng changelog |

Cùng một logic đừng gắn nhiều sự kiện chạy lặp — chọn điểm **chặn sớm nhất**.

## Hiểu các giai đoạn thế nào

- **Loại phiên**: khi Tác vụ lần này bắt đầu hoặc kết thúc
- **Trước công cụ**: lệnh hoặc công cụ chưa thật sự chạy
- **Sau công cụ**: hành động đã xảy ra — có thể ghi, tóm tắt, kiểm lại
- **Loại Prompt**: nội dung người dùng vừa gửi
- **Loại artifact**: file hoặc kết quả vừa sinh

Hiểu ở tầng này trước, chưa cần cứng nhớ tên sự kiện.

## Quan hệ với engine quy tắc

```text
Prompt người dùng →(tùy chọn)prompt Hook
    → model đề xuất gọi công cụ
    → engine quy tắc allow/deny
    →(tùy chọn)pre_tool Hook → thực thi → post_tool Hook
```

- **Quy tắc**: khai báo, nhanh, phù hợp mẫu lệnh đã biết
- **Hook**: script mệnh lệnh, phù hợp chính sách phức tạp và hệ thống ngoài

## Hiểu lầm thường gặp

### 1. Chỉ cần kiểm ra được thì gắn trước hay sau cũng gần giống

Khác nhiều.

Nếu muốn"ngăn side effect xảy ra", hãy gắn càng sớm càng tốt.  
Nếu hành động đã xong mới phát hiện ở `post_tool`, thường đã muộn.

### 2. Sự kiện càng nhiều càng chi tiết thì cấu hình càng chuyên nghiệp

Khi cấu hình nên theo"ít mà trúng"— gắn đúng logic tại một điểm phù hợp nhất trước.

### 3. Loại sự kiện Hook chỉ là chi tiết kỹ thuật

Nó ảnh hưởng trực tiếp:

- Rủi ro có kịp chặn không
- Nhật ký có hữu ích không
- Tương tác tổng thể có chậm đi không

## Chiến lược thất bại

| Chiến lược | Khi nào dùng |
|---|---|
| `block` | Vi phạm bảo mật, yêu cầu tuân thủ cứng |
| `warn` | Phong cách, kiểm tra gợi ý |
| `log` | Chỉ quan sát, không chặn |

Khi Hook hết thời gian hoặc crash nên **an toàn theo mặc định**: môi trường production nghiêng về block hoặc fail closed, và ghi lỗi để điều tra.

## Chưa chắc gắn đâu thì nghĩ thế này

Nếu chưa chắc gắn sự kiện nào, có thể theo quy tắc đơn giản:

- Muốn ngăn hành động nguy hiểm: ưu tiên sự kiện trước
- Muốn ghi đã xảy ra gì: ưu tiên sự kiện sau
- Muốn kiểm đầu phiên hoặc tổng kết cuối: xem sự kiện phiên

Bộ phán đoán này đủ cho hầu hết kịch bản cấu hình.

## Ý tưởng cấu hình tối thiểu

1. Chọn một sự kiện (gợi ý bắt đầu từ nhật ký chỉ đọc `post_tool`)
2. Script nhận payload JSON qua stdin (tên công cụ, tóm tắt tham số, thư mục làm việc)
3. Mã thoát `0` thì qua; khác `0` theo chiến lược block/warn
4. Unit test: chạy script với fixture JSON cố định

Hãy nghĩ rõ muốn chặn gì hay ghi gì trước, rồi quyết Hook nên gắn sự kiện nào.

Ví dụ đầy đủ: [Ví dụ cấu hình Hook](/skills/hooks/hooks-examples/).

## Lỗi thường gặp

- Ở `post_tool` làm việc chặn vốn thuộc `pre_tool` (side effect đã xảy ra)
- Trong Hook gọi LLM hoặc mạng chậm, kéo sập tương tác
- Payload sự kiện chứa khóa rồi ghi nhật ký plaintext
- Hook chưa quản lý phiên bản, môi trường đồng nghiệp lệch

## Ranh giới bảo mật

- Quyền script Hook nên ≤ Quyền Agent đang được giám sát
- Xem [use case Hook nhóm](/skills/hooks/hooks-overview/#use-case-nhóm-khuyến-nghị) và [mô hình đe dọa](/guide/team-enterprise/security/threat-model/)

## Checklist nghiệm thu

- [ ] Nói được 1 sự kiện nhóm dùng nhiều nhất và lý do
- [ ] Khi thất bại có thông báo lỗi đọc được
- [ ] Script có unit test hoặc fixture
- [ ] Cấu hình đưa vào code review

## Nguồn tham chiếu
- Tham chiếu OpenAI Codex Hooks
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI / App(tùy phiên bản)  
**Ghi chú tái Kiểm chứng:** Cốt lõi trang này là nhóm sự kiện Hook, payload và chiến lược thất bại — đều là chi tiết triển khai biến động cao; tài liệu công khai chính thức hiện có chưa đủ để chuẩn hóa ổn định vào 2026-07-26.  
**Kiểm chứng gần nhất:** 2026-07-26
