---
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "Đã đối chiếu với tài liệu bắt đầu nhanh và xác thực hiện tại của Codex CLI; xác minh trình cài đặt chính thức cho macOS/Linux, quy trình khởi chạy codex, đăng nhập ChatGPT và lệnh kiểm tra trạng thái đăng nhập. Với cách cài đặt khác, hướng người đọc đến các tab được cập nhật trên trang chính thức."
  checkedAt: "2026-08-26"
title: "Cài đặt CLI"
description: "Cài đặt Codex CLI, kiểm tra phiên bản, trạng thái đăng nhập và tác vụ đầu tiên trong kho mã."
locale: "vi"
source_locale: "zh-CN"
source_revision: "564bd75"
translation_status: "reviewed"
translated_at: "2026-09-20"
sidebar:
  order: 40
reviewed_at: "2026-10-26"
---

Codex CLI phù hợp khi bạn muốn khám phá, chỉnh sửa, kiểm thử và rà soát ngay trong terminal. Trang cài đặt chính thức có các lựa chọn cho macOS/Linux, Windows, npm và Homebrew; hãy chọn cách phù hợp với hệ điều hành và cách quản lý phần mềm của bạn.

## Trình cài đặt độc lập chính thức cho macOS / Linux

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Để cập nhật CLI, chạy lại chính lệnh cài đặt chính thức này. Nếu dùng Windows, npm hoặc Homebrew, hãy chọn tab cài đặt tương ứng trên [trang Codex CLI chính thức](https://learn.chatgpt.com/docs/codex/cli); đừng áp dụng lệnh dành cho macOS/Linux cho mọi hệ thống.

## Kiểm tra sau khi cài đặt

Mở một cửa sổ terminal mới và chạy trong kho mã dùng để thực hành:

```bash
codex --version
codex login status
```

Nếu chưa đăng nhập:

```bash
codex login
```

Sau khi hoàn tất cấp quyền trong trình duyệt, khởi chạy phiên tương tác tại thư mục kho mã:

```bash
codex
```

Tác vụ đầu tiên có thể chỉ yêu cầu đọc:

```text
Trước mắt đừng sửa tệp. Hãy giải thích cách cài đặt, kiểm thử và build dự án này, đồng thời nêu đường dẫn những tệp bạn đã đọc.
```

## Xử lý lỗi theo thứ tự

1. `codex --version` báo không tìm thấy lệnh: mở lại terminal và kiểm tra `PATH` của shell hiện tại.
2. Chạy được lệnh nhưng không sử dụng được: chạy `codex login status` để phân biệt lỗi cài đặt với lỗi xác thực.
3. Đăng nhập sai tài khoản: chạy `codex logout` rồi đăng nhập lại.
4. Bị từ chối trong môi trường công ty: kiểm tra workspace, phương thức đăng nhập hoặc cấu hình do tổ chức quản lý; đừng dùng thông tin đăng nhập cá nhân để lách chính sách.

Đừng dán API key vào lịch sử shell, phiếu hỗ trợ hoặc cuộc trò chuyện. Nếu cần đăng nhập bằng API key, hãy làm theo [Đăng nhập và xác thực](/vi/guide/getting-started/sign-in-and-authentication/) để truyền khóa qua đầu vào chuẩn.

Tiếp tục với [Chế độ tương tác của CLI](/vi/guide/cli/interactive-mode/); nếu gặp vấn đề khác, xem [Khắc phục sự cố CLI](/vi/guide/cli/troubleshooting/).
