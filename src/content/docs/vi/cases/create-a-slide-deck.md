---
title: Tạo slide
description: Case tạo Artifact từ dàn ý đến bài thuyết trình có thể trình bày.
locale: vi
source_locale: zh-CN
source_revision: 42c7a26
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Tạo slide

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Người sáng tạo nội dung |
| Client | App |
| Thời gian ước tính | 1–2 giờ |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Theo chủ đề, tạo bài thuyết trình cấu trúc rõ (Markdown/HTML/PPT… tùy khả năng môi trường).

**Tiêu chí thành công:** Số trang khớp dàn ý, mỗi trang nói rõ được điểm chính, không bịa số liệu.

## 2. Prompt đề xuất

```text
Chủ đề: 【chủ đề thuyết trình】
Đối tượng: 【nền tảng người nghe】
Thời lượng: 【số phút】
Trước hết đưa chương mục và tiêu đề mỗi trang + 3 điểm chính; chưa tạo tệp cuối.
Sau khi xác nhận, xuất ra thư mục slides/, định dạng: 【mdx/html/pptx】.
Ràng buộc: Số liệu phải ghi nguồn hoặc ghi «ví dụ»; không gửi yêu cầu mạng ra ngoài trừ khi được phê duyệt.
```

## 3. Kiểm chứng

- Đọc từng trang xem có nói xong trong một phút không
- Đối chiếu nguồn biểu đồ và số liệu

## 4. Liên quan

- [Khả năng thuyết trình](/vi/guide/files-and-artifacts/presentations/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Use cases Codex hiện tại trên OpenAI Developers vẫn gồm “Generate slide decks”, mô tả thao tác tệp pptx kết hợp sinh ảnh để tự động làm bài thuyết trình; nội dung trang này giữ ở lớp quy trình ổn định “dàn ý trước, rồi xuất theo môi trường, số liệu phải ghi nguồn hoặc ghi ví dụ”.  
**Kiểm chứng gần nhất:** 2026-07-26
