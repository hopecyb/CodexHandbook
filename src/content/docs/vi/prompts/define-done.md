---
title: Định nghĩa tiêu chí hoàn thành
description: Viết điều kiện hoàn thành có thể kiểm tra.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nhiều người nêu tác vụ chỉ nói «tôi muốn gì», nhưng không nói rõ «làm đến mức nào thì xong». Kết quả là đã hoàn thành hay chưa chỉ còn cảm giác.

Tiêu chí hoàn thành chính là cách bạn chuẩn bị nghiệm thu kết quả.

Tiêu chí nghiệm thu phải **quan sát được**:

- Kém: «chất lượng code tốt hơn»
- Tốt: «`npm test` pass; component `Button` hỗ trợ `disabled`; ảnh chụp Storybook khớp thiết kế»

## Vì sao nhiều tác vụ cuối cùng không nói rõ đã xong chưa

Nhiều khi mục tiêu và tiêu chí hoàn thành bị trộn.

- **Mục tiêu**: bạn muốn kết quả gì
- **Tiêu chí hoàn thành**: bạn xác nhận thế nào rằng kết quả đó thật sự đạt

Ví dụ «sửa bug này» là mục tiêu;  
«có thể tái hiện ổn định bản sửa, kiểm thử liên quan pass, không thêm lỗi console mới» mới gần tiêu chí hoàn thành.

## Hiểu lầm thường gặp

### 1. Kết quả trông gần đúng là xong

Ở tác vụ nhỏ đây là hố dễ nhất. «Trông gần đúng» thường bỏ sót kiểm thử, biên và tác dụng phụ.

### 2. Tiêu chí hoàn thành là viết thêm vài câu khen kết quả

Tiêu chí hoàn thành phải kiểm tra được, không phải viết như phát biểu tổng kết.

### 3. Build pass là xong

Không nhất thiết.

Build pass thường chỉ là một checkpoint, không có nghĩa:

- Chức năng thật sự đúng
- Phạm vi không vượt
- Copy phù hợp độc giả
- Nguồn đã được kiểm chứng

## Một cách viết thường dùng

Nếu tạm chưa biết viết, chọn từ 3 nhóm này:

- **Kiểm chức năng**: hành vi kết quả có đúng kỳ vọng không
- **Kiểm kỹ thuật**: build / test / lint có pass không
- **Kiểm phạm vi**: có chỉ sửa đúng phạm vi đã thỏa thuận không

Ví dụ:

```text
Tiêu chí nghiệm thu:
- Chỉ sửa copy trang chủ docs; không đổi layout và component
- `pnpm build` pass
- Copy màn hình đầu dễ hiểu hơn với người mới; không mặc định độc giả đã biết thuật ngữ
```

## Cách tự kiểm

Sau khi viết, hỏi mình một câu:

> **Nếu giao cho người khác bây giờ, họ có thể dựa vào đây để phán «đạt» hay «không đạt» không?**

Nếu không, thường vẫn còn quá mơ hồ.

Tóm lại: đừng để «đã xong chưa» chỉ còn đoán.

Đưa lệnh kiểm chứng vào tiêu chuẩn thì Agent mới dễ chủ động chạy: [Chạy kiểm thử](/guide/verification/)


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ mô tả cách viết nghiệm thu và tiêu chí hoàn thành; liên kết nội bộ đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
