---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Đã đối chiếu với trang Authentication chính thức hiện tại; xác minh hai cách đăng nhập cục bộ bằng ChatGPT và API key, yêu cầu đăng nhập ChatGPT cho Cloud, các lệnh CLI, việc chia sẻ bộ nhớ đệm và ranh giới lưu trữ thông tin xác thực."
  checkedAt: "2026-08-26"
title: Đăng nhập và xác thực
description: Chọn đúng phương thức đăng nhập cho ứng dụng cục bộ và Cloud, rồi kiểm tra danh tính đang hoạt động một cách an toàn.
locale: vi
source_locale: zh-CN
source_revision: ea83fa6
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 60
---

Khi dùng mô hình OpenAI, Codex có hai cách đăng nhập cá nhân:

- **Đăng nhập bằng ChatGPT:** sử dụng hạn mức của gói đăng ký, đồng thời áp dụng quyền truy cập và chính sách dữ liệu của workspace ChatGPT.
- **Đăng nhập bằng API key:** tính phí theo mức sử dụng API, đồng thời áp dụng chính sách dữ liệu và quản trị của API organization.

Ứng dụng Codex trên máy tính, Codex CLI và tích hợp IDE đều hỗ trợ hai cách này cho công việc cục bộ; **Codex Cloud yêu cầu đăng nhập bằng ChatGPT**.

## Đăng nhập bằng ChatGPT

Ứng dụng cục bộ sẽ mở trình duyệt để bạn cấp quyền, sau đó chuyển thông tin xác thực về ứng dụng:

- Ứng dụng máy tính: tại màn hình khi chưa đăng nhập, chọn tiếp tục đăng nhập.
- CLI: chạy `codex login`.
- IDE: tại màn hình khi chưa đăng nhập, chọn đăng nhập bằng ChatGPT.

Sau khi đăng nhập, kiểm tra tài khoản và workspace đang hoạt động, nhất là khi bạn có cả không gian cá nhân lẫn workspace của công ty.

## Đăng nhập bằng API key

Sau khi tạo key trên OpenAI Platform, đừng ghi trực tiếp key vào lịch sử lệnh. Với CLI, hãy dùng đầu vào chuẩn:

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

Trong ứng dụng máy tính, vào mục “Sign in with another method”; trong IDE, chọn “Use API Key”. API key phù hợp cho công việc cục bộ và CI đáng tin cậy, nhưng không cung cấp các tính năng phụ thuộc vào workspace ChatGPT hoặc Cloud.

## Kiểm tra danh tính CLI và đăng xuất

```bash
codex login status
codex logout
```

CLI và IDE dùng chung thông tin đăng nhập được lưu trong bộ nhớ đệm. Sau khi đăng xuất ở một bên, bên còn lại cũng có thể yêu cầu đăng nhập lại ở lần khởi chạy tiếp theo.

## Bảo vệ thông tin xác thực

- Đừng commit `~/.codex/auth.json` hoặc dán nội dung của nó vào phiếu hỗ trợ, cuộc trò chuyện hay log.
- Ưu tiên kho lưu trữ thông tin xác thực của hệ điều hành; hãy đối xử với token lưu trong tệp như mật khẩu.
- Trong CI, dùng thông tin xác thực chuyên dụng và có thể thu hồi; đừng dùng lại key cá nhân dài hạn.
- Codex Cloud truy cập trực tiếp kho mã, vì vậy hãy bật MFA cho tài khoản; quản trị viên nên bắt buộc MFA qua SSO của tổ chức.
- Đừng chuyển sang key cá nhân để lách hạn chế của tổ chức; trước tiên hãy xác nhận workspace và chính sách được quản lý.

## Đã đăng nhập thành công nhưng vẫn không sử dụng được

Kiểm tra theo thứ tự:

1. Tài khoản hiện tại hoặc API organization có đúng không.
2. Bạn đã vào đúng workspace ChatGPT chưa.
3. Tính năng cần dùng có yêu cầu đăng nhập bằng ChatGPT thay vì API key không.
4. Gói dịch vụ, seat, vai trò hoặc chính sách của quản trị viên có giới hạn quyền truy cập không.
5. Cuối cùng mới kiểm tra bộ nhớ đệm của ứng dụng, mạng và phiên bản.

CLI có log đăng nhập riêng để dùng khi bộ phận hỗ trợ chính thức yêu cầu hoặc khi cần khắc phục sự cố đăng nhập; trước khi chia sẻ log, vẫn phải kiểm tra thông tin nhạy cảm.

Để hiểu giới hạn theo gói, xem [Tài khoản, gói dịch vụ và quyền truy cập](/vi/guide/getting-started/account-plans-and-access/). Chi tiết đầy đủ theo [trang Authentication chính thức](https://learn.chatgpt.com/docs/auth).
