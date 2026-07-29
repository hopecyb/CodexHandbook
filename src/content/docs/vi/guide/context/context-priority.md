---
title: Ưu tiên ngữ cảnh
description: Khi chỉ dẫn xung đột, cái nào thắng.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Xung đột thường gặp: mô tả dự án vs Prompt hiện tại vs hội thoại cũ. Nguyên tắc thực hành:

1. **Prompt tác vụ hiện tại** ưu tiên nhất với phạm vi lần này
2. Lệnh cấm an toàn cấp dự án (như «cấm push», «cấm khóa production») luôn phải tuân
3. Khi thấy xung đột, viết rõ: «Lấy tin nhắn này làm chuẩn, bỏ chỉ dẫn trước đây về X»

«Ưu tiên ngữ cảnh» nói về khi nhiều chỉ dẫn xung đột, lấy cái nào làm chuẩn.

## «Ưu tiên» thực sự nói gì

Xung đột phổ biến nhất thực ra rất đời thường:

- Trước bạn nói «chỉ phân tích đọc»
- Sau lại nói «sửa giúp tôi luôn»
- Trong dự án còn ghi «cấm sửa một thư mục»

Nếu thông tin này không phân tầng, kết quả dễ vừa muốn sửa vừa không nên sửa.

## Hiểu nhầm thường gặp

### 1. Chỉ cần nói thêm một câu phía sau là chắc chắn phủ hết phía trước?

Không hoàn toàn. Nếu trước đó là hạn chế an toàn cấp dự án, một chỉ dẫn tạm phía sau chưa chắc lật được.

### 2. Thông tin xung đột không sao — nó tự hiểu

Đó chính là lúc dễ lệch nhất. Thông tin càng xung đột, càng nên nói rõ «lấy cái nào làm chuẩn».

### 3. Ưu tiên ngữ cảnh chỉ là vấn đề lý thuyết?

Nó rất thực dụng, ảnh hưởng trực tiếp:

- Có sửa nhầm không
- Có vi phạm quy tắc kho không
- Có mang tác vụ cũ vào tác vụ mới không

## Xung đột thì viết rõ hơn thế nào

Khi thấy chỉ dẫn trước sau có thể xung đột, nói thẳng:

```text
Lấy tin nhắn này làm chuẩn, bỏ chỉ dẫn trước đây về X.
```

Loại câu này đặc biệt hữu ích với thread dài.

Ngữ cảnh vừa xung đột, tốt nhất chỉ định thẳng «lần này nghe cái nào». Chính sách bắt buộc của nhóm cũng có thể cao hơn sở thích cá nhân.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ nêu cách xử lý ngữ cảnh xung đột; phần thân không phụ thuộc giao diện client cụ thể hay sự thật sản phẩm dễ đổi — khái niệm và ví dụ đã kiểm lại.  
**Kiểm chứng gần nhất:** 2026-07-26
