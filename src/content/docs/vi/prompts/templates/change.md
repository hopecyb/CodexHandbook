---
title: Mẫu sửa
description: Lặp có ranh giới trên nền hiện có.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Mẫu sửa

Mẫu này phù hợp tác vụ «sửa một chút trên cái đã có».

Tác vụ sửa cần nêu rõ ranh giới thay đổi trước.

## Mẫu

```text
Mục tiêu: Trên 【chức năng/tệp hiện có】 hoàn thành 【thay đổi cụ thể】.
Bối cảnh: 【vì sao sửa, phạm vi ảnh hưởng】
Đầu vào: @【đường dẫn tệp liên quan】
Ràng buộc:
- Giữ 【API/style/hành vi】 không đổi trừ khi tôi cho phép rõ
- Diff tối thiểu; không tái cấu trúc không liên quan
- Sau mỗi bước chỉ chạy 【kiểm thử liên quan】
Nghiệm thu:
- 【mô tả thay đổi hành vi】
- Kiểm thử liên quan pass
- Diff chỉ gồm tệp cần thiết
```

## Khi nào phù hợp mẫu này

- Sửa trang hoặc component hiện có
- Sửa một bug đã rõ
- Chỉnh nhẹ copy, tương tác hoặc cấu hình
- Muốn nhấn mạnh «chỉ sửa khối này, đừng tái cấu trúc tiện tay»

## Hiểu lầm thường gặp

### 1. Tác vụ sửa đơn giản hơn tạo nên viết ít được

Tác vụ sửa dễ đụng code cũ, ràng buộc cũ và dependency ẩn—càng cần ranh giới.

### 2. «Diff tối thiểu» là sửa ít dòng chữ

«Diff tối thiểu» nghĩa là **chỉ sửa phần liên quan trực tiếp tới mục tiêu**.

### 3. Chỉ nói «giữ hành vi hiện có» vẫn chưa đủ

Nên bổ sung thêm: thế nào mới tính là «hành vi hiện có».

## Mẫu này đang ngăn gì

Mẫu này chủ yếu ngăn:

- Sửa nhiều quá
- Sửa lệch
- Đụng lớp bạn chưa ủy quyền

Prompt kiểu sửa ngoài «sửa gì» còn phải nói rõ «chỉ được sửa đến đâu».

## Liên quan

- [Định nghĩa tiêu chí hoàn thành](/prompts/define-done/)
- [Ràng buộc và ranh giới](/prompts/constraints-and-boundaries/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này cung cấp mẫu tác vụ kiểu sửa; liên kết nội bộ và cấu trúc mẫu đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
