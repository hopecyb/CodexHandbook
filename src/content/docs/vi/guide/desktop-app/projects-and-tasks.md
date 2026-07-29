---
title: Dự án và tác vụ
description: Quản lý dự án và tác vụ trong App.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Hai từ «dự án» và «tác vụ» nghe đơn giản, nhưng lần đầu dùng dễ lẫn. Dự án là bộ tệp hoặc kho bạn đang xử lý; tác vụ là việc cụ thể bạn nhờ Codex làm lần này.

Ví dụ:

- Kho tài liệu của bạn -> dự án
- «Viết lại thuật ngữ trang chủ cho dễ hiểu hơn» -> tác vụ

Bộ khái niệm này quan trọng vì trong ứng dụng Desktop luôn có hai tầng cùng lúc:

- Bạn đang làm việc trong dự án nào
- Lần này bạn muốn nó làm gì cụ thể

## Dự án

- Thêm thư mục luyện tập hoặc thư mục gốc kho
- Một lúc tập trung một dự án để giảm trộn ngữ cảnh

«Dự án» có thể xem như **sân làm việc** của lần cộng tác này.  
Sân sai thì nhiều vấn đề sau đó sẽ lệch theo.

## Tác vụ

- Khởi động tác vụ bằng Prompt đầy đủ
- Quan sát kế hoạch và lời gọi công cụ
- Phê duyệt hoặc từ chối khi cần

«Tác vụ» chính là **ủy thác cụ thể** bạn đưa ra lần này.  
Ủy thác càng rõ, Codex càng ít phải vừa làm vừa đoán.

Đối chiếu khái niệm: [Thread, tác vụ và dự án](/guide/foundations/threads-tasks-and-projects/)

## Hiểu nhầm thường gặp

### 1. Vì sao phải chọn dự án trước, không hỏi thẳng được?

Vì Codex cần biết lần này nó đang làm việc trên bộ tệp / kho nào.

Chọn sai dự án thì các câu hỏi kiểu «sao nó không thấy tệp» hoặc «sao lại sửa chỗ khác» sẽ nhiều hơn.

### 2. Một dự án có thể có nhiều tác vụ không?

Có.  
Cách ổn định hơn:

- Trong cùng một dự án
- Mỗi lần một tác vụ rõ ràng
- Xong rồi mới mở cái tiếp theo

Như vậy ít bị trộn ngữ cảnh hơn.

### 3. Ban đầu nên nói tác vụ thế nào?

Cố mang đủ ba loại thông tin:

- Mục tiêu
- Phạm vi hạn chế
- Thế nào là xong

### 4. Một nhu cầu lớn có nên nhét vào một tác vụ?

Nếu việc vốn trải rộng, cách ổn định hơn:

- Giữ nguyên một dự án
- Tách thành nhiều tác vụ
- Mỗi tác vụ chỉ giải một mục tiêu rõ

## Thứ tự thường dùng

Lần đầu làm việc trong ứng dụng Desktop, có thể theo thứ tự:

1. Xác nhận đã chọn đúng dự án
2. Xác nhận mục tiêu tác vụ chỉ nói một việc chính
3. Bổ sung phạm vi hạn chế và tiêu chí hoàn thành
4. Sau khi bắt đầu, tập trung xem kế hoạch, lời gọi công cụ và kết quả thay đổi

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App  
**Căn cứ kiểm chứng:** Tài liệu Help Center hiện tại về ứng dụng desktop vẫn phân biệt rõ dự án / ngữ cảnh dự án với phiên chat/work/codex cụ thể, và nêu có thể mở thư mục hoặc dự án local trong ứng dụng desktop để bắt đầu; trang này chỉ giải thích phân tầng khái niệm «dự án là sân làm việc, tác vụ là ủy thác lần này».  
**Kiểm chứng gần nhất:** 2026-07-26
