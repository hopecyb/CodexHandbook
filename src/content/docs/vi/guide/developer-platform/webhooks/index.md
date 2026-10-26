---
legacyVerification:
  status: "verified"
  products: "API / Cloud"
  basis: "Đã đối chiếu chéo với cấu trúc tiểu chương webhooks và liên kết lối vào hiện tại trong kho này; trang chỉ nêu vai trò «bộ kích hoạt sự kiện» của Webhook trong tích hợp, không cố định trường sự kiện hay chi tiết triển khai thành hợp đồng."
  checkedAt: "2026-07-26"
title: "Webhooks"
description: "Trang giải thích tích hợp kích hoạt theo sự kiện: Webhook nhận thông báo, không thay thế thiết kế quy trình."
locale: "vi"
source_locale: "zh-CN"
source_revision: "68cb29b"
translation_status: "reviewed"
translated_at: "2026-07-28"
reviewed_at: "2026-10-26"
---

Từ `Webhook` nghe hơi trừu tượng.
Nói thẳng: khi có việc xảy ra, hệ thống chủ động gửi một thông báo cho bạn.

Trong tích hợp Codex, nó giải quyết «thông tin thực tế từ bên ngoài tới → kích hoạt quy trình tiếp theo thế nào».

## Lối vào nhóm này

- [Ranh giới Webhook và sự kiện tác vụ](/vi/guide/developer-platform/webhooks/overview/): phân biệt kết quả thực thi cục bộ, sự kiện App Server và callback HTTP tự xây; nhóm này không cung cấp hợp đồng Cloud Webhook thống nhất chưa được kiểm chứng.

## Nội dung nhóm

- Hệ thống bên ngoài đẩy sự kiện cho bạn thế nào
- Sau khi sự kiện tới, nối quy trình phía sau ra sao
- Vì sao Webhook chỉ là bộ kích hoạt, không phải giải pháp tự động hóa đầy đủ

Webhook giống chuông cửa: báo «có việc xảy ra»; xử lý thế nào vẫn cần bạn nối quy trình.
