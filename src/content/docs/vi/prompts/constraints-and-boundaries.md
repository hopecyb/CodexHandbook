---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Trang này chỉ mô tả cách viết ràng buộc và ranh giới; liên kết nội bộ đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi."
  checkedAt: "2026-07-26"
title: Định nghĩa ràng buộc
description: Giới hạn phạm vi được sửa, phong cách và điều cấm.
locale: vi
source_locale: zh-CN
source_revision: "0ca4700"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---

Nhiều tác vụ thất bại không phải vì hoàn toàn không nêu mục tiêu, mà vì **ranh giới không rõ**.

Bạn nói «giúp tôi sửa trang này», Codex có thể hiểu thành:

- Chỉ sửa nội dung chữ
- Có thể sửa kiểu hiển thị tiện tay
- Có thể đụng thành phần giao diện
- Có thể thêm thư viện phụ thuộc

Trong khi bạn muốn có thể chỉ là «chỉ sửa đoạn nội dung chữ này, không được đụng cấu trúc».

Ràng buộc trả lời: việc này dừng ở đâu, tuyệt đối không được đụng gì.

## Nội dung

Nó chủ yếu giúp tránh:

- Sửa thừa tiện tay
- Thao tác vượt quyền
- Đụng lớp bạn không định cho đụng
- Trông như xong nhưng cái giá quá lớn

## Ràng buộc thường dùng

Ràng buộc trả lời: «Những việc nào tuyệt đối không được làm?»

- Chỉ sửa tệp/thư mục đã liệt kê
- Không đổi hợp đồng API / không đổi cơ sở dữ liệu
- Không thêm thư viện phụ thuộc mới
- Không phát yêu cầu mạng
- Giữ cấu hình công cụ format hiện có

## Phân biệt «mục tiêu» và «ràng buộc»

- **Mục tiêu**: bạn muốn nó làm thành gì
- **Ràng buộc**: khi làm việc đó, không được vượt những đường nào

Ví dụ:

```text
Mục tiêu: Sửa nội dung chữ Hero trang chủ cho rõ hơn
Ràng buộc: Không đổi bố cục, không thêm thư viện phụ thuộc, không đổi hành vi CTA
```

Khi thiếu ràng buộc, Codex rất dễ hiểu «làm rõ hơn» thành một nhiệm vụ cải tiến lớn hơn.

## Hiểu lầm thường gặp

### 1. Ràng buộc có làm kết quả kém đi không

Nhiều khi ràng buộc rõ lại khiến kết quả sát nhu cầu thật hơn, vì ít đi đường vòng.

### 2. «Đừng sửa quá nhiều» đã tính là ràng buộc

Cách nói đó quá mơ hồ.

Hữu ích hơn là:

- Chỉ sửa `src/content/docs/...`
- Không sửa thành phần giao diện
- Không sửa API
- Không cài thư viện phụ thuộc

### 3. Chỉ tác vụ rủi ro cao mới cần ràng buộc

Tác vụ nhỏ cũng cần, vì lúc đó dễ nói yêu cầu mơ hồ một câu và để nó tự mở rộng.

## Một cách viết đủ dùng

Nếu tạm chưa biết viết thế nào, dùng khung này trước:

```text
Ràng buộc:
- Chỉ sửa 【thư mục/tệp】
- Không sửa 【thành phần giao diện / API / cơ sở dữ liệu / cấu hình】
- Không thêm thư viện phụ thuộc
- Khi thiếu thông tin: hỏi trước, đừng đoán
```

## Khi nào cần viết ràng buộc chi tiết hơn

Những tình huống sau nên nêu ràng buộc rõ:

- Dự án cũ, nợ kỹ thuật nhiều
- Bạn chỉ muốn vá cục bộ
- Nhóm có yêu cầu cứng về phong cách hoặc kiến trúc
- Liên quan quyền, mạng, cài thư viện phụ thuộc

Mục tiêu bảo Codex làm gì; ràng buộc bảo nó dừng ở đâu.

Ranh giới quyền nên viết cùng ràng buộc, giảm vượt quyền «tiện tay». Trang liên quan: [Định nghĩa tiêu chí hoàn thành](/vi/prompts/define-done/) và [Quyền và Sandbox](/vi/guide/permissions-and-sandbox/).
