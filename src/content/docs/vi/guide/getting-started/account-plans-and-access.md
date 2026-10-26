---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Đã đối chiếu với các trang Pricing và Authentication chính thức hiện tại; trang này ghi lại mô hình truy cập và thứ tự khắc phục sự cố, không cố định giá, hạn mức hoặc danh sách tính năng thay đổi thường xuyên."
  checkedAt: "2026-08-26"
title: "Tài khoản, gói dịch vụ và quyền truy cập"
description: "Phân biệt hạn mức gói ChatGPT, mức sử dụng API key và quyền của workspace tổ chức."
locale: "vi"
source_locale: "zh-CN"
source_revision: "7b123e5"
translation_status: "reviewed"
reviewed_at: "2026-10-26"
translated_at: "2026-10-25"
sidebar:
  order: 10
---

Hiện có thể dùng Codex qua **gói ChatGPT** hoặc **API key tính phí theo mức sử dụng**, nhưng hai cách này không có cùng điểm truy cập và phạm vi quản trị.

## Chọn phương thức truy cập trước

| Phương thức | Phù hợp với | Giới hạn sử dụng |
|---|---|---|
| Đăng nhập bằng ChatGPT | Tương tác cá nhân, ứng dụng máy tính, Cloud, workspace tổ chức | Theo hạn mức gói ChatGPT, vai trò trong workspace và chính sách của quản trị viên |
| Đăng nhập bằng API key | Codex cục bộ, script và CI | Tính phí theo mức sử dụng API; không dùng được một số tính năng phụ thuộc vào workspace ChatGPT hoặc Cloud |

Trang Pricing chính thức hiện đưa ChatGPT Work và Codex vào các gói Free, Go, Plus, Pro, Business, Edu, Enterprise. Tuy nhiên, giá, hạn mức, model và tính năng đi kèm có thể thay đổi. Trang này không duy trì bảng giá; hãy xem [hướng dẫn chọn gói và nguồn giá của cẩm nang](/vi/chatgpt-pricing/) và đối chiếu [trang Pricing chính thức được cập nhật](https://learn.chatgpt.com/docs/pricing).

## Vì sao có tài khoản mà vẫn có thể không dùng được

Đăng nhập chỉ là lớp đầu tiên. Quyền truy cập cuối cùng còn phụ thuộc vào:

1. Gói hiện tại có bao gồm điểm truy cập hoặc tính năng bạn cần không.
2. Sản phẩm hiện tại có khả dụng tại khu vực của bạn không.
3. Tổ chức đã cấp cho bạn seat, vai trò và quyền trong workspace chưa.
4. Quản trị viên có hạn chế phương thức đăng nhập, mô hình hoặc tính năng cục bộ bằng cấu hình được quản lý không.
5. Mức sử dụng của bạn có chạm hạn mức của cửa sổ hiện tại hoặc hạn mức tuần không.

## Danh sách kiểm tra cho người dùng cá nhân

- Đăng nhập được đúng tài khoản ChatGPT trên trang chính thức.
- Biết mình đang dùng hạn mức gói hay API tính phí theo mức sử dụng.
- Thấy đúng danh tính trong ứng dụng cần dùng.
- Khi nhận thông báo hết hạn mức, kiểm tra mức sử dụng hiện tại thay vì cài lại ứng dụng nhiều lần.

## Danh sách kiểm tra cho nhóm và doanh nghiệp

- Đã chọn đúng workspace, không phải không gian cá nhân dùng cùng địa chỉ email.
- Quản trị viên đã cấu hình thành viên, seat và vai trò.
- SSO, MFA, chính sách lưu giữ dữ liệu và khu vực đáp ứng yêu cầu của tổ chức.
- Cấu hình được quản lý không ép phương thức đăng nhập cục bộ sang cách khác.
- API key thuộc đúng API organization; đừng nhầm chính sách của tổ chức API với chính sách workspace ChatGPT.

## Một ví dụ để phân biệt

Nếu CLI đăng nhập được bằng API key nhưng nút Cloud không khả dụng, đó chưa chắc là lỗi cài đặt. Cloud yêu cầu đăng nhập bằng ChatGPT và chịu sự kiểm soát của gói ChatGPT cùng quyền trong workspace; API key chủ yếu dùng cho quy trình cục bộ và lập trình.

Bước tiếp theo: [Đăng nhập và xác thực](/vi/guide/getting-started/sign-in-and-authentication/).

Xem model hiện tại, khác biệt giữa sản phẩm và khuyến nghị tác vụ: [Chọn model: tìm điểm bắt đầu theo tác vụ](/vi/guide/reference/model-selection/).
