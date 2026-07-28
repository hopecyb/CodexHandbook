---
title: Chất lượng và kiểm chứng
description: Rà soát, kiểm thử và định nghĩa hoàn thành.
sidebar:
  order: 21
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Khi dùng Codex, nhiều người chỉ tập trung vào “nó có làm được không”, mà bỏ qua câu hỏi khác: sau khi làm xong, làm sao xác nhận lần này thật sự có thể nhận?

Nhóm nội dung này nói đúng việc đó. Làm chất lượng và kiểm chứng là để tránh trạng thái “trông như đã xong, nhưng chưa ổn”.

- [Rà soát diff](/guide/quality/review-diffs/)
- [Chạy kiểm thử](/guide/quality/run-tests/)
- [Kiểm chứng artifact](/guide/quality/verify-artifacts/)
- [Xác minh nguồn](/guide/quality/validate-sources/)
- [Xử lý sự không chắc chắn](/guide/quality/handle-uncertainty/)
- [Định nghĩa hoàn thành](/guide/quality/definition-of-done/)

## Thứ tự đọc

Lần đầu xem, có thể đọc theo thứ tự này:

1. Xem [Rà soát diff](/guide/quality/review-diffs/), xác nhận nó thực sự đã đổi gì
2. Xem [Chạy kiểm thử](/guide/quality/run-tests/), xác nhận có làm hỏng thứ gì khác không
3. Xem [Kiểm chứng artifact](/guide/quality/verify-artifacts/), xác nhận kết quả có đúng thứ bạn muốn không
4. Xem [Định nghĩa hoàn thành](/guide/quality/definition-of-done/), làm rõ “thế nào mới thật sự là hoàn thành”

Nếu không kiểm tra, “hoàn thành” nhiều khi chỉ tạm thời trông như đã xong.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ mô tả cấu trúc và thứ tự đọc của chương chất lượng và kiểm chứng; liên kết nội bộ và diễn đạt khái niệm đã được rà lại, và phần thân không phụ thuộc các sự kiện sản phẩm dễ thay đổi như phiên bản, giá hay giao diện.  
**Kiểm chứng gần nhất:** 2026-07-26
