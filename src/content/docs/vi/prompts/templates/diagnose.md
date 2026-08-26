---
title: Mẫu chẩn đoán
description: Định vị nguyên nhân gốc trước khi bàn sửa.
locale: vi
source_locale: zh-CN
source_revision: b89ce2b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Mẫu chẩn đoán

Hiểu lầm thường gặp của tác vụ chẩn đoán: miệng nói «kiểm tra trước» nhưng vẫn mặc định để nó sửa luôn.

Trọng tâm mẫu chẩn đoán là tách «tìm nguyên nhân» khỏi «bắt tay sửa».

## Mẫu

```text
Hiện tượng: 【thông báo lỗi, kiểm thử fail, báo cáo người dùng】
Bối cảnh: 【thay đổi gần đây, môi trường, bước tái hiện】
Đầu vào: @【log/kiểm thử/code liên quan】
Ràng buộc: Chưa sửa code; liệt kê 2–3 nguyên nhân gốc có thể và cách kiểm chứng.
Đầu ra:
1. Nguyên nhân gốc khả dĩ nhất (kèm bằng chứng)
2. Bước kiểm chứng thực thi được (lệnh hoặc checkpoint)
3. Nếu kiểm chứng pass, bản nháp kế hoạch sửa (chờ tôi xác nhận rồi mới thực thi)
```

## Khi nào phù hợp mẫu này

- Bug chưa định vị
- Kiểm thử đỏ nhưng chưa biết lớp nào hỏng
- Bạn nghi vấn đề phức tạp, không muốn để nó đoán sửa luôn

## Hiểu lầm thường gặp

### 1. Chẩn đoán chậm quá, sửa thẳng còn hơn

Nhiều lần làm lại chính vì bỏ qua chẩn đoán.

### 2. Liệt kê 2–3 nguyên nhân gốc có dài dòng quá không

Không—ngược lại giúp bạn thấy nó có đang đoán bừa không.

Mẫu chẩn đoán yêu cầu nó nói vì sao hỏng trước, rồi mới bàn cách sửa.

## Liên quan

- [Chẩn đoán trước khi sửa](/vi/cases/workflows/diagnose-before-fixing/)
- [Case sửa Bug](/vi/cases/fix-a-bug/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này cung cấp mẫu tác vụ kiểu chẩn đoán; liên kết nội bộ và cấu trúc mẫu đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
