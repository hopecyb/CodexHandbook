---
title: Xử lý sự không chắc chắn
description: Khi thiếu thông tin thì yêu cầu hỏi, đừng bịa.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Khi thông tin chưa đủ, hãy xác nhận trước rồi mới tiếp tục.

Một trong những tình huống khó chịu nhất khi dùng Codex là nó lấp chỗ trống bằng câu trả lời trông hợp lý.  
Một khi tiền đề sai, các bước sau cũng lệch theo.

## “Không chắc chắn” nghĩa là gì

Ở đây, “sự không chắc chắn” chủ yếu chỉ:

- Hiện nó chưa có đủ bằng chứng để xác nhận
- Thông tin liên quan không nằm trong ngữ cảnh hiện tại
- Nếu tiếp tục đoán, rủi ro sẽ lớn hơn

Cách phù hợp hơn là nói rõ trước “khi nào phải dừng lại để xác nhận”.

Cố định trong Prompt:

```text
Khi thiếu thông tin thì hỏi trước; đừng bịa đường dẫn tệp, API hay quy tắc nghiệp vụ.
```

Phát hiện bịa: dừng lại, sửa sự thật, khi cần thì mở thread mới.

## Cách phán đoán

Nếu một kết luận thỏa bất kỳ điều nào sau đây, không nên đoán để đi tiếp:

- Trong tệp hiện tại không tìm thấy bằng chứng
- Bạn chưa cung cấp rõ quy tắc nghiệp vụ đó
- Cần sự kiện bên ngoài nhưng chưa xác minh nguồn
- Đoán sai sẽ ảnh hưởng nhiều bước thực thi sau

## Hiểu lầm thường gặp

### 1. Trả lời đầy đủ không có nghĩa nó thật sự biết

Nội dung đầy đủ đôi khi chỉ là lấp cho trôi, không có nghĩa những nội dung đó thật sự tồn tại trong dự án của bạn.

### 2. Khi thông tin thiếu, trọng tâm không phải lấp hết chỗ trống

Đưa đủ thông tin càng tốt, nhưng trong cộng tác thực tế, thông tin thiếu rất phổ biến.

Quan trọng hơn là hai việc:

- Khi thiếu thông tin, nó phải dừng lại để xác nhận trước
- Cho phép nó hỏi, thay vì ép đoán cho xong

### 3. Nó đặt câu hỏi không nhất thiết làm chậm hiệu suất

Trông như thêm một bước, thường lại giảm làm lại.

Nhiều vấn đề phình ra từ chỗ “đoán trước rồi làm”.

### 4. Phát hiện nó đoán rồi thì dừng trước rồi mới tiếp

Trước hết dừng lỗi lại, rồi mới tiếp tục. Thứ tự xử lý:

1. Chỉ rõ mục nào sai
2. Bổ sung thông tin thật
3. Khi cần, để nó bắt đầu lại dựa trên sự thật đã sửa

## Câu có thể bổ sung trực tiếp

Nếu muốn giảm đoán bừa, có thể viết:

```text
Nếu bạn không thể xác nhận từ tệp hiện có hoặc thông tin tôi cung cấp, hãy hỏi trước, đừng tự bổ sung.
```

## Thêm một câu nữa

Cũng có thể thêm:

```text
Nếu có nhiều cách hiểu khả dĩ, hãy liệt kê trước những điểm bạn chưa chắc, rồi mới tiếp tục.
```

Tình huống phiền hơn là lấy phỏng đoán làm sự thật rồi đẩy tiếp.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ mô tả nguyên tắc hỏi và chỉnh hướng khi thiếu thông tin; khái niệm, câu Prompt và thứ tự xử lý đã được rà lại, và phần thân không phụ thuộc sự kiện sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
