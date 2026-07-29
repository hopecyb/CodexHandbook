---
title: Xử lý sự cố CLI
description: Lần theo xác thực, quyền và lệnh thất bại.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Khi CLI lỗi, thông báo có thể đều giống lỗi terminal, nhưng nguyên nhân phía sau chưa chắc cùng loại.

Khi xử lý sự cố CLI, phán trước vấn đề thuộc loại «chưa cài xong / chưa đăng nhập / không có quyền / vào sai thư mục».

| Triệu chứng | Thử trước |
|---|---|
| command not found | Kiểm cài đặt và PATH |
| Xác thực thất bại | Đăng nhập lại; kiểm chính sách tổ chức |
| Từ chối quyền | Xem chế độ phê duyệt và cài đặt Sandbox |
| Sửa tệp ở thư mục sai | Xác nhận thư mục làm việc hiện tại |

## Phân 4 loại trước

- **Không tìm thấy lệnh**: thường là cài đặt hoặc `PATH`
- **Lệnh chạy được nhưng vào không được**: thường là xác thực
- **Vào được nhưng làm không được việc**: thường là quyền hoặc Sandbox
- **Làm việc sai**: thường là thư mục hoặc ngữ cảnh sai

## Hiểu nhầm thường gặp

### 1. Mọi lỗi CLI đều phải đi nghiên cứu cùng một nhật ký

Phân vấn đề vào hạng lớn trước thường nhanh hơn lao vào chi tiết lỗi ngay.

### 2. Từ chối quyền nghĩa là chương trình hỏng

Nhiều khi không hỏng — mà phê duyệt, Sandbox hoặc chính sách đang hoạt động bình thường.

### 3. Lệnh đã chạy nghĩa là thư mục ổn

Cũng không đúng.

Nhiều vấn đề CLI không phải lệnh không chạy được, mà bạn chạy trong kho sai hoặc thư mục làm việc sai.

## Thứ tự lần theo

1. Xác nhận lệnh có tồn tại không
2. Xác nhận trạng thái đăng nhập
3. Xem chế độ quyền hiện tại và hạn chế Sandbox
4. Cuối cùng xác nhận thư mục làm việc hiện tại có phải dự án bạn nghĩ không

Khi xử lý sự cố CLI, phân rõ đây là vấn đề cài đặt, đăng nhập, quyền hay thư mục thì lần theo thường suôn hơn.

Giải thích chính thức: [Tài liệu OpenAI Codex](https://developers.openai.com/codex).

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI  
**Căn cứ kiểm chứng:** Tài liệu nhập môn và cấu hình CLI hiện tại trên OpenAI Help Center vẫn phủ các nguồn vấn đề phổ biến về cài đặt, xác thực, quyền/Sandbox và thư mục làm việc; trang này dùng phương pháp phân theo triệu chứng thành bốn loại cài đặt, đăng nhập, quyền, thư mục — là khung phân luồng sự cố ổn định.  
**Kiểm chứng gần nhất:** 2026-07-26
