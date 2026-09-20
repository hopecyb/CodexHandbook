---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Trang này chỉ mô tả cấu trúc và thứ tự đọc của phần chất lượng và kiểm chứng. Liên kết nội bộ và cách diễn đạt khái niệm đã được rà soát; nội dung không phụ thuộc vào chi tiết sản phẩm dễ thay đổi như phiên bản, giá hay giao diện."
  checkedAt: "2026-07-26"
title: Chất lượng và kiểm chứng
description: Rà soát, kiểm thử và định nghĩa hoàn thành.
sidebar:
  order: 21
locale: vi
source_locale: zh-CN
source_revision: 401b6a6
translation_status: draft
translated_at: 2026-09-20
---
Khi dùng Codex, nhiều người chỉ tập trung vào “nó có làm được không”, mà bỏ qua câu hỏi khác: sau khi làm xong, làm sao xác nhận lần này thật sự có thể nhận?

Nhóm nội dung này nói đúng việc đó. Làm chất lượng và kiểm chứng là để tránh trạng thái “trông như đã xong, nhưng chưa ổn”.

- [Rà soát diff](/vi/guide/quality/review-diffs/)
- [Chạy kiểm thử](/vi/guide/quality/run-tests/)
- [Kiểm chứng artifact](/vi/guide/quality/verify-artifacts/)
- [Xác minh nguồn](/vi/guide/quality/validate-sources/)
- [Xử lý sự không chắc chắn](/vi/guide/quality/handle-uncertainty/)
- [Mức sử dụng, thời gian và chọn mô hình](/vi/guide/quality/usage-time-and-model-choice/)
- [Đánh giá quy trình và 20 mẫu](/vi/guide/quality/workflow-evaluation/)
- [Định nghĩa hoàn thành](/vi/guide/quality/definition-of-done/)

## Thứ tự đọc

Lần đầu xem, có thể đọc theo thứ tự này:

1. Xem [Rà soát diff](/vi/guide/quality/review-diffs/), xác nhận nó thực sự đã đổi gì
2. Xem [Chạy kiểm thử](/vi/guide/quality/run-tests/), xác nhận có làm hỏng thứ gì khác không
3. Xem [Kiểm chứng artifact](/vi/guide/quality/verify-artifacts/), xác nhận kết quả có đúng thứ bạn muốn không
4. Xem [Định nghĩa hoàn thành](/vi/guide/quality/definition-of-done/), làm rõ “thế nào mới thật sự là hoàn thành”

Nếu không kiểm tra, “hoàn thành” nhiều khi chỉ tạm thời trông như đã xong.
