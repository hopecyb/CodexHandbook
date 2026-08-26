---
title: Token, ngữ cảnh và nén
description: Hiểu cửa sổ ngữ cảnh, mức chiếm dụng và nén.
locale: vi
source_locale: zh-CN
source_revision: b33848c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 100
---

Lần đầu xem trang này có thể thấy hơi trừu tượng — không cần hiểu nguyên lý tầng dưới trước. Model không phải bộ nhớ vô hạn. Nội dung càng nhiều, càng phân tán, càng kéo dài — nó càng dễ mất trọng tâm; ràng buộc quan trọng đã nói trước đó cũng có thể dần nhạt đi.

Ba từ phổ biến phía sau chính là Token, ngữ cảnh, nén.

**Token** là đơn vị đo khi model xử lý văn bản. **Cửa sổ ngữ cảnh** là trần thông tin có thể dùng hiệu quả trong một lần.

Khi hội thoại hoặc tệp quá nhiều, hệ thống có thể làm **nén (compaction)**: giữ tóm tắt, bỏ chi tiết. Sau khi nén, Agent có thể «quên» ràng buộc sớm.

## Tách ba từ này

Có thể nhìn như sau:

- **Token**: «đơn vị thể tích» khi model xử lý thông tin
- **Cửa sổ ngữ cảnh**: dung lượng thông tin nó có thể mang theo lần này
- **Nén**: khi nội dung quá nhiều, hệ thống cô đọng hội thoại trước thành tóm tắt để dành chỗ làm tiếp

Vấn đề là **tóm tắt không thể giữ mọi chi tiết**.

Vì vậy hội thoại càng dài, những yêu cầu bạn chỉ nói một lần và sau đó không nhắc lại càng dễ bị làm yếu.

## Hiểu nhầm thường gặp

### 1. Tôi đã nói một lần rồi thì nó phải nhớ mãi?

Nếu câu đó đã chôn trong hội thoại từ lâu, lại không xuất hiện trong thông tin then chốt hiện tại — phía sau có thể bị nén mất.

### 2. Ngữ cảnh càng nhiều càng ổn định?

Ngữ cảnh liên quan nhiều hơn một chút thì có ích, nhưng thông tin không liên quan quá nhiều mang lại hai vấn đề:

- Trọng tâm mờ đi
- Ràng buộc then chốt dễ bị nhấn chìm hơn

### 3. Nén có bằng model bị hỏng không?

Nén là một thao tác quản lý tài nguyên. Thông tin quá nhiều thì hệ thống chỉ còn cách giữ bản cô đọng hơn để đi tiếp.

## Gặp tình huống này thì làm gì

Nếu lo yêu cầu then chốt bị quên, có thể làm các việc sau:

- Viết ràng buộc then chốt vào tin nhắn hiện tại
- Viết quy tắc có hiệu lực lâu dài vào hướng dẫn dự án hoặc tài liệu cố định
- Khi chủ đề đổi rõ ràng, mở tác vụ hoặc Thread mới
- Với điều kiện biên quan trọng, đừng chỉ nói một lần

## Thực hành

- Viết ràng buộc then chốt vào tin nhắn hiện tại hoặc hướng dẫn dự án — đừng chỉ chôn trong hội thoại từ rất lâu trước
- Đổi chủ đề thì mở Thread mới
- Nguyên lý và gợi ý thao tác xem [Nén ngữ cảnh](/vi/guide/context/compaction/) cùng [Giữ ngữ cảnh tập trung](/vi/guide/context/keep-context-focused/)

Ở đây nói khái niệm trước. Cách kiểm soát cụ thể có thể xem tiếp phần `05`.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ giải thích khái niệm cơ bản về Token, cửa sổ ngữ cảnh và nén; liên kết nội bộ và cách diễn đạt ví dụ đã được rà lại, và nội dung không phụ thuộc vào chi tiết sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
