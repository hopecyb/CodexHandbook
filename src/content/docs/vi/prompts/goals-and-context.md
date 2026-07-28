---
title: Mục tiêu và ngữ cảnh
description: Để Codex biết cần hoàn thành gì và vì sao điều đó quan trọng.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nhiều Prompt trông như có nhiều thông tin, nhưng lại chưa nói rõ hai điều sau:

- Bạn thực sự muốn kết quả gì
- Vì sao việc này phải làm theo cách đó

Mục tiêu nói «cần làm thành gì»; bối cảnh nói «vì sao phải làm như vậy».

**Mục tiêu** viết sản phẩm đầu ra cuối cùng, không viết ước muốn mơ hồ.  
«Làm website tốt hơn» → «Đổi copy nút chính trang chủ thành…… và giữ nguyên tên class hiện có».

**Bối cảnh** bổ sung hiện trạng người đọc có thể không biết nhưng Agent cần: tech stack, đối tượng, lý do deadline, hố đã biết.

## Vì sao không được trộn «mục tiêu» và «bối cảnh»

Chỉ có bối cảnh, không có mục tiêu—Codex có thể hiểu như một đoạn tường thuật tình huống, không biết cần xuất ra gì.  
Chỉ có mục tiêu, không có bối cảnh—nó dễ làm theo cách «về kỹ thuật được, nhưng chưa chắc hợp ngữ cảnh của bạn».

## Hiểu lầm thường gặp

### 1. Mục tiêu là «tôi muốn cải thiện một chút»

Đó gần ước muốn hơn mục tiêu.

Một mục tiêu rõ hơn thường nêu:

- Sửa thứ gì
- Đưa về trạng thái nào
- Cần giữ nguyên gì

### 2. Bối cảnh không phải càng nhiều càng tốt

Phần thật sự có giá trị trong bối cảnh là những gì **bạn biết nhưng Codex không biết**, và ảnh hưởng quyết định.

### 3. Chỉ ngữ cảnh kỹ thuật mới tính là bối cảnh

Không chỉ ngữ cảnh kỹ thuật.

Những điểm sau cũng có thể là bối cảnh quan trọng:

- Độc giả là ai
- Lý do deadline
- Hố đã biết
- Ràng buộc của nhóm

## Một cách viết đủ dùng

Nếu viết bản dùng được trước, có thể theo:

```text
Mục tiêu: Đổi cái gì thành trạng thái nào
Bối cảnh: Vì sao đổi, cho ai xem, hiện đang kẹt ở đâu
```

Ví dụ:

```text
Mục tiêu: Sửa copy màn hình đầu trang docs cho dễ hiểu với người mới, giữ cấu trúc hiện có
Bối cảnh: Copy hiện tại mặc định độc giả đã biết nhiều thuật ngữ; lần truy cập đầu ngưỡng hiểu cao
```

## Kiểm tra xem đã viết đủ rõ chưa

Khi kiểm mục tiêu, xem hai điểm:

- Kết quả có nhìn ra được không
- Phạm vi có cảm nhận được không

Khi kiểm bối cảnh, xem thêm một điểm:

- Thông tin này có thật sự ảnh hưởng cách nó làm không

Mục tiêu quyết định giao gì; bối cảnh bổ sung vì sao phải làm như vậy.

Liên quan: bối cảnh cấp dự án có thể gửi xuống [Ngữ cảnh dự án](/guide/context/project-context/), tránh lặp đoạn dài trong mọi Prompt.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ mô tả cách viết mục tiêu và bối cảnh; liên kết nội bộ và cách diễn đạt ví dụ đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
