---
title: Tổng quan SDK
description: "Khởi tạo Tác vụ Codex trong ứng dụng qua SDK chính thức — khái niệm xác thực, phiên và xử lý lỗi."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

SDK (tên và ngôn ngữ lấy theo [tài liệu chính thức](https://developers.openai.com/codex)) cho phép bạn tạo Tác vụ, polling trạng thái, lấy kết quả trong **dịch vụ của chính bạn**, thay vì chỉ dựa vào TUI terminal.

Nếu lần đầu thấy «SDK», hãy hiểu đó là bộ công cụ để chương trình gọi Codex, không phải giao diện để người bấm từng bước.

Nói cách khác, nó phù hợp khi «hệ thống của bạn gọi Codex». Nếu chỉ tạm giao một Tác vụ, thường chưa cần SDK.

## Trang này sẽ nói gì

- Khi nào dùng SDK thay vì CLI `exec`
- Xác thực và cô lập tenant
- Cách phối hợp với Webhook và hàng đợi

Tổng quan nền tảng: [Nền tảng dành cho nhà phát triển](/guide/developer-platform/)

## SDK vs CLI

| | SDK | CLI `exec` |
|---|---|---|
| Vị trí tích hợp | Backend, công cụ nội bộ | Shell, GitHub Actions |
| Quản lý trạng thái | Code của bạn chịu trách nhiệm | Mã thoát tiến trình |
| Phù hợp | Sản phẩm đa tenant, UI tùy chỉnh | Pipeline đơn giản |

Nhiều đội **CI dùng CLI, sản phẩm dùng SDK**.

## Hiểu nhầm thường gặp

### 1. SDK và CLI khác nhau thế nào

Có thể hiểu đại khái như sau:

- **CLI**: người hoặc script gọi trong terminal
- **SDK**: bạn viết code, nhúng năng lực Codex vào dịch vụ của mình

### 2. Tôi có nên học SDK trước không

Thường thì không.

Nếu chỉ muốn học dùng Codex trước, lối vào cục bộ và chế độ tương tác CLI thường phù hợp hơn làm bước đầu.

### 3. Khi nào SDK mới đáng dùng

Ví dụ khi bạn bắt đầu cần:

- Khởi tạo Tác vụ Codex trong sản phẩm nội bộ
- Tự quản lý trạng thái và kết quả Tác vụ
- Làm UI, quyền và quy trình tùy chỉnh

SDK phù hợp «nối hệ thống cho chương trình», không phù hợp làm lối vào chính lần đầu dùng Codex.

## Khái niệm cốt lõi (độc lập ngôn ngữ)

1. **Xác thực**: API key tổ chức hoặc OAuth ủy quyền — tuân theo scope tối thiểu
2. **Tác vụ / Thread**: mỗi yêu cầu người dùng có ID theo dõi được
3. **Chiến lược công cụ**: máy chủ chỉ định Sandbox và Phê duyệt, thống nhất với client
4. **Kết quả**: lịch sử tin nhắn, Diff tệp, URL artifact (tùy API)
5. **Lỗi**: phân biệt có thể thử lại (429) và không thử lại (400)

Chỉ mục lỗi: [Tham chiếu lỗi và thông báo](/guide/reference/error-reference/)

## Checklist tích hợp tối thiểu

- [ ] Thử trên staging với repo chỉ đọc
- [ ] Làm sạch log; không ghi đầy đủ Prompt người dùng nếu có PII
- [ ] Timeout và hủy: người dùng rời trang thì dừng được Tác vụ
- [ ] Ghim phiên bản SDK và model ID

## Nối với CI/CD

SDK kích hoạt Cloud hoặc remote runner, hoặc CI gọi ngược dịch vụ của bạn để cập nhật trạng thái PR. Mẫu ví dụ xem [Tự động hóa review mã](/guide/developer-platform/ci-cd/code-review-automation/).

## Lỗi thường gặp

- Dùng session cookie trên trình duyệt người dùng làm API key
- Không giới hạn đồng thời, đỉnh lưu lượng làm hết quota
- Tự động merge PR do SDK tạo ra

## Nguồn tham chiếu
- OpenAI Codex SDK reference
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** API  
**Cơ sở kiểm chứng:** Đã đối chiếu với mô tả công khai hiện tại của OpenAI Developers về Codex API/mô hình và use case nền tảng nhà phát triển, cùng các chương nền tảng, CI/CD và chế độ không tương tác đã kiểm chứng trong sổ tay này; trang chỉ xác nhận nguyên tắc phân công ổn định rằng SDK phù hợp tích hợp theo chương trình, quản lý trạng thái và UI tùy chỉnh.  
**Kiểm chứng gần nhất:** 2026-07-26
