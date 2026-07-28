---
title: Ngữ cảnh
description: Quản lý ngữ cảnh dự án, tệp và hội thoại.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 16
---

Ngữ cảnh là thông tin mô hình «lúc này có thể dùng hiệu quả». Quản ngữ cảnh kém, Prompt hay đến mấy cũng bị nhiễu nhấn chìm.

Trong dùng thực tế, nó chính là Codex lần này thật sự thấy gì, tham chiếu được gì, và sẽ dựa vào đó phán đoán gì. Nội dung bạn biết nhưng chưa cung cấp cho nó không tính là ngữ cảnh của tác vụ lần này.

## Vì sao chương này đặc biệt quan trọng

Nhiều câu «sao nó lại hiểu sai nữa» cuối cùng không phải Prompt chưa đủ dài, mà ngữ cảnh chưa quản tốt.

Tình huống thường gặp:

- Đưa quá nhiều nội dung không liên quan
- Tệp then chốt chưa giao cho nó
- Hội thoại cũ kéo lệch tác vụ mới
- Thông tin xung đột chưa nói rõ cái nào ưu tiên

## Cách đọc chương này

Lần đầu xem có hệ thống, gợi ý thứ tự:

1. Biết ngữ cảnh gồm những gì trước
2. Xem các tầng dự án, tệp, hội thoại phân thế nào
3. Cuối cùng xem ưu tiên, nén, tập trung và thông tin nhạy cảm

## Điều hướng chương

- [Ngữ cảnh dự án](/guide/context/project-context/)
- [Ngữ cảnh tệp và thư mục](/guide/context/file-and-folder-context/)
- [Ngữ cảnh hội thoại](/guide/context/conversation-context/)
- [Ưu tiên ngữ cảnh](/guide/context/context-priority/)
- [Nén](/guide/context/compaction/)
- [Giữ tập trung](/guide/context/keep-context-focused/)
- [Ngữ cảnh nhạy cảm](/guide/context/sensitive-context/)

Chương này nhấn đi nhấn lại: ngữ cảnh phụ thuộc «lần này nó thật sự thấy gì». Nếu bạn nghĩ nó nên biết, nhưng lần này chưa cung cấp, thì không tính là ngữ cảnh.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ nêu phân tầng ngữ cảnh và đường đọc; liên kết trong site và diễn đạt khái niệm đã kiểm lại, và phần thân không phụ thuộc phiên bản sản phẩm, giá hay giao diện dễ đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
