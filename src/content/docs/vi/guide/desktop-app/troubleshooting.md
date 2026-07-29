---
title: Xử lý sự cố ứng dụng Desktop
description: Xử lý thường gặp khi cài đặt, đăng nhập và tác vụ thất bại.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 100
---

Khi xử lý sự cố, lần theo thứ tự nguyên nhân dễ xảy ra và dễ xử lý nhất.

| Triệu chứng | Thử trước |
|---|---|
| Không cài / không mở được | Đối chiếu yêu cầu hệ thống và gói cài chính thức; khởi động lại rồi thử |
| Không đăng nhập được | Kiểm tra mạng, quyền tài khoản, SSO; xóa phiên rồi đăng nhập lại |
| Không thấy tệp dự án | Xác nhận đã thêm đúng thư mục và quyền tệp hệ thống |
| Tác vụ mãi chờ phê duyệt | Quay lại view tác vụ xử lý yêu cầu chờ phê duyệt |
| Thay đổi không như kỳ vọng | Thắt chặt ràng buộc, mở thread mới, kiểm tra ngữ cảnh |

Vẫn thất bại: [https://developers.openai.com/codex](https://developers.openai.com/codex) và [Mục lục xử lý sự cố](/guide/reference/troubleshooting/).

## Hiểu nhầm thường gặp

### 1. Vừa lỗi đã nghĩa là dùng sai nghiêm trọng?

Nhiều vấn đề chỉ là:

- Chưa chọn đúng đường dẫn
- Chưa phê quyền
- Tác vụ đang chờ bạn xác nhận
- Ngữ cảnh hội thoại đã rối

### 2. «Không thấy tệp» nên nghi gì trước?

Ưu tiên nghi thư mục dự án và quyền — đừng nghi năng lực mô hình trước.

### 3. «Thay đổi không như kỳ vọng» cứu thế nào?

Thu hẹp phạm vi vấn đề trước:

- Nói lại phạm vi
- Chỉ rõ chỗ nào sai
- Khi cần thì mở thread mới

Xử lý sự cố hãy xếp nguyên nhân phổ biến và dễ sửa trước — không cần nghĩ phức tạp ngay từ đầu.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App  
**Căn cứ kiểm chứng:** Tài liệu trợ giúp ứng dụng desktop hiện tại của OpenAI vẫn phủ các hành vi cơ bản về cài đặt, đăng nhập, truy cập dự án và ủy quyền tệp local; trang này dùng khung phân luồng theo triệu chứng tới cài đặt, đăng nhập, quyền, tác vụ chờ phê duyệt và phạm vi ngữ cảnh — là lối vào xử lý sự cố ổn định.  
**Kiểm chứng gần nhất:** 2026-07-26
