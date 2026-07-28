---
title: CLI
description: Hướng dẫn tối thiểu dùng được cho lối vào dòng lệnh.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 11
---

CLI phù hợp người dùng terminal và tích hợp script, CI.

Lần đầu thấy «CLI», có thể hiểu là lối vào cộng tác với Codex trực tiếp trong terminal, không qua giao diện đồ họa.

Nó nghiêng về các tình huống:

- Người quen dòng lệnh
- Người muốn kết hợp với script
- Người cần nối CI / tự động hóa

Với người mới hoàn toàn chưa quen terminal, CLI không phải trạm đầu bắt buộc; nhưng nếu bạn đã biết cơ bản `cd`, `ls`, chạy lệnh trong thư mục dự án, nó sẽ rất hiệu quả.

- [Cài đặt và cập nhật](/guide/cli/installation-and-updates/)
- [Chế độ tương tác](/guide/cli/interactive-mode/)
- [Chế độ không tương tác](/guide/cli/non-interactive-mode/)
- [Cấu hình CLI](/guide/cli/configuration/)
- [Lệnh và lối tắt](/guide/cli/commands-and-shortcuts/)
- [Phê duyệt và Sandbox](/guide/cli/approvals-and-sandbox/)
- [Xử lý sự cố](/guide/cli/troubleshooting/)

Tham chiếu lệnh đầy đủ: [Tham chiếu lệnh CLI](/guide/reference/commands/).

## Lần đầu dùng — phân rõ gì trước

Giai đoạn đầu hãy phân rõ hai chế độ:

1. **Chế độ tương tác**: như trò chuyện trực tiếp với Codex trong terminal
2. **Chế độ không tương tác**: coi Codex như lệnh nối vào script hoặc CI

Nếu chỉ thử lần đầu, thường dùng chế độ tương tác thuận tay hơn. Khi cần tự động hóa rồi hãy xem chế độ không tương tác.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI  
**Căn cứ kiểm chứng:** Tài liệu nhập môn CLI hiện tại trên OpenAI Help Center vẫn mô tả Codex CLI là lối vào terminal, và phân biệt dùng tương tác với quy trình dòng lệnh tự động hóa hơn; trang này chỉ là điều hướng chương CLI, tóm tắt hai cách dùng tương tác và không tương tác, không gắn tham số hay lệnh cài cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
