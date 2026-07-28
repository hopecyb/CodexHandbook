---
title: Kiểm tra kết quả
description: Đọc thay đổi, kiểm chứng artifact và quyết định chấp nhận hoặc sửa.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Sau khi xong tác vụ, nhiều người mới bỏ qua bước này.

Muốn dùng Codex ổn định hơn, phải xem bạn có biết **kiểm tra kết quả** không.

Đừng chỉ nghe nó nói «đã xong» — còn phải xem nó thực sự đã sửa gì, kết quả có đúng thứ bạn cần không.

## Checklist kiểm tra

1. **Xem Diff**: có chỉ sửa các tệp được phép không?
2. **Mở artifact**: nội dung có khớp tiêu chí nghiệm thu không?
3. **Hỏi tiếp để chỉnh**: nếu chỉ lệch một chút, tiếp tục bổ sung phản hồi chính xác
4. **Quyết định**: chấp nhận / sửa tay / [hoàn tác](/guide/getting-started/undo-and-recover/)

Thêm phương pháp: [Rà soát Diff](/guide/quality/review-diffs/).

## Chỗ dễ xem sót thường gặp

### 1. Chỉ xem tóm tắt, không xem thay đổi thực tế

Codex có thể viết tóm tắt rất xuôi — nhưng thật sự quan trọng là:

- Có sửa nhầm tệp không
- Có tiện tay sửa chỗ bạn chưa ủy quyền không
- Kết quả có thật sự thỏa điều kiện nghiệm thu không

### 2. Thấy «gần đúng» là chấp nhận ngay

«Gần đúng» rất dễ để lại hố nhỏ phía sau.  
Nếu chỉ lệch một chút, bổ sung một câu phản hồi chính xác sẽ tốt hơn — đừng tự im lặng chấp nhận đại.

### 3. Phát hiện chưa đúng nhưng không biết nói thế nào

Bạn có thể tiếp tục bằng kiểu câu này:

```text
Kết quả gần rồi, nhưng còn hai vấn đề: 1) … 2) … Chỉ sửa hai điểm này, chỗ khác đừng đụng.
```

## Thứ tự kiểm tra

Khi luyện lần đầu, có thể kiểm theo thứ tự này:

1. **Xem phạm vi**: nó đã sửa những tệp nào
2. **Xem kết quả**: trang, tài liệu, đầu ra mã có khớp yêu cầu không
3. **Xem tác dụng phụ**: có đưa thêm thay đổi thừa hoặc lỗi mới không

Khi nghiệm thu, chủ yếu là xác nhận lần kết quả này có yên tâm nhận không.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Cơ sở kiểm chứng:** Đã đối chiếu chéo với các chương rà soát Diff, định nghĩa hoàn thành và hoàn tác/khôi phục liên quan đã được kiểm chứng trong cẩm nang hiện tại; trang này tập trung vào phương pháp kiểm tra ổn định «xem phạm vi, xem kết quả, xem tác dụng phụ, rồi quyết định nhận hay không».  
**Kiểm chứng gần nhất:** 2026-07-26
