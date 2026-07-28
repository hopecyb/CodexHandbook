---
title: Mẫu tạo
description: Triển khai từ đầu chức năng, bản thảo hoặc Artifact.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Mẫu tạo

Tác vụ tạo từ đầu dễ gặp hai vấn đề:

- Mục tiêu lớn nhưng không có ranh giới
- Thông tin chưa đủ mà đã vội để Codex bắt đầu sinh

Mẫu tạo cố định Artifact, mục đích dùng và ràng buộc trước, rồi mới bắt đầu.

## Mẫu

```text
Mục tiêu: Tạo 【tên Artifact】 dùng cho 【mục đích/người dùng】.
Bối cảnh: 【quy ước sẵn có, phong cách thiết kế, giới hạn dependency】
Đầu vào: 【đặc tả, phác thảo, tham chiếu @tệp】
Ràng buộc:
- Chỉ sửa/tạo trong 【phạm vi đường dẫn】
- Không đưa vào 【mục loại trừ】
- Thao tác rủi ro cao: chỉ chạy sau khi tôi phê duyệt
Nghiệm thu:
- 【kết quả quan sát được 1】
- 【kết quả quan sát được 2】
- Cung cấp bước tự kiểm
Nếu thiếu thông tin, liệt kê giả định và hỏi tôi trước; đừng đoán.
```

## Khi nào phù hợp mẫu này

- Làm từ đầu một trang, component, script hoặc tài liệu
- Bạn đã biết cần giao gì nhưng chưa bắt tay
- Bạn muốn nêu rõ phạm vi tạo trước khi làm

## Hiểu lầm thường gặp

### 1. Tác vụ tạo = để nó tự do phát huy

Tạo từ đầu càng cần nói rõ:

- Cho ai dùng
- Dùng để làm gì
- Phong cách hoặc hướng kỹ thuật nào không được đụng

### 2. Bối cảnh chỉ là trang trí tùy chọn

Với tác vụ tạo, bối cảnh thường định hướng toàn bộ Artifact.

### 3. Nghiệm thu viết «trông ổn» vẫn chưa đủ

Như vậy cuối cùng rất khó phán đã xong thật chưa.

Trong tác vụ tạo, tình huống dễ lỗi nhất là chưa nói rõ «làm gì, cho ai dùng» đã bắt đầu luôn.

## Liên quan

- [Công việc dẫn bởi đặc tả](/cases/workflows/specification-driven-work/)
- [Định nghĩa tiêu chí hoàn thành](/prompts/define-done/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này cung cấp mẫu tác vụ kiểu tạo; liên kết nội bộ và cấu trúc mẫu đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
