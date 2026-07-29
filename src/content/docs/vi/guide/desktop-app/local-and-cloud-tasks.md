---
title: Tác vụ local và Cloud
description: Chuyển giữa thực thi local và Cloud trong App.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Ở đây nói về việc trong ứng dụng Desktop, tác vụ chạy trên máy bạn hay môi trường từ xa.

Trong App, chọn nơi chạy tác vụ:

- **Local**: tệp và môi trường trên máy, lặp nhanh
- **Cloud**: môi trường đám mây, phù hợp kết nối kho từ xa và tác vụ dài

Khái niệm: [Local và Cloud](/guide/foundations/local-vs-cloud/) · Tổng quan: [Web và Cloud](/guide/web-and-cloud/)

Trước khi chuyển, xác nhận: khóa bí mật có nên xuất hiện trong môi trường đó không, chính sách mạng có cho phép không.

## Hiểu nhầm thường gặp

### 1. Tôi đang ở Desktop App — vì sao còn phân local và Cloud?

Vì App chỉ là lối vào, không có nghĩa mọi tác vụ đều chạy trên máy bạn.

### 2. Mặc định nên chọn cái nào?

Phần lớn trường hợp chọn local trước, chủ yếu vì:

- Tệp nằm trên máy bạn
- Kết quả dễ kiểm tra hơn
- Lỗi dễ rút lại hơn

### 3. Khi nào mới cân nhắc Cloud?

Các tình huống thường gặp:

- Tác vụ rất dài
- Cần kết nối môi trường kho từ xa
- Cần môi trường thống nhất
- Không muốn chiếm tài nguyên máy local

Trong Desktop App, nếu local làm được thì thường dùng local; khi tác vụ dài hơn, nghiêng về từ xa, hoặc cần môi trường thống nhất thì mới cân nhắc Cloud.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App  
**Căn cứ kiểm chứng:** OpenAI Help Center hiện tại — *ChatGPT Work and Codex* và *Using Codex with your ChatGPT plan* — đều phân biệt rõ local workflows và cloud tasks; trang này chỉ tóm tắt trong ngữ cảnh Desktop App nguyên tắc chọn «local phù hợp lặp nhanh, Cloud phù hợp kho từ xa và tác vụ dài».  
**Kiểm chứng gần nhất:** 2026-07-26
