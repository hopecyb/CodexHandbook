---
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
title: "Cài đặt"
description: "Tùy chỉnh hành vi thường ngày, phím tắt, thông báo và giao diện của ứng dụng máy tính."
locale: "vi"
source_locale: "zh-CN"
source_revision: "7a6d2fe"
translation_status: "reviewed"
translated_at: "2026-09-20"
sidebar:
  order: 90
reviewed_at: "2026-10-26"
---

Trang Settings dùng để cá nhân hóa hành vi của ứng dụng, không bao gồm toàn bộ cấu hình quyền của Codex. Hãy giữ giá trị mặc định lúc đầu và chỉ thay đổi khi đã hiểu phạm vi ảnh hưởng.

Trên macOS, nhấn `Cmd + ,`; trên Windows, nhấn `Ctrl + ,`. Bạn cũng có thể mở Settings từ menu ứng dụng.

## Người mới nên xem bốn mục trước

### General

- Có cần nhấn `Cmd + Enter` mới gửi prompt nhiều dòng hay không.
- **Prevent sleep while running** có cho phép tác vụ cục bộ kéo dài tiếp tục chạy khi bạn rời máy hay không.
- Follow-up behavior quyết định tin nhắn mới nhận trong lúc đang làm việc sẽ điều chỉnh ngay lượt thực thi hiện tại hay được xếp vào lượt sau.

Mục cuối ảnh hưởng đến kết quả khi bạn “bổ sung thêm một câu”. Nếu cần sửa hướng gấp, hãy chọn điều chỉnh lượt đang chạy; với yêu cầu mới không liên quan, hãy mở cuộc trò chuyện khác.

### Keyboard shortcuts

Bạn có thể tìm lệnh, đổi phím hoặc khôi phục mặc định. Nếu phím tắt trên mạng khác với máy của bạn, hãy lấy tổ hợp hiển thị tại đây làm chuẩn.

### Notifications

Đặt thời điểm hiển thị thông báo khi hoàn thành lượt và điều khiển thông báo về yêu cầu quyền hoặc câu hỏi. Xem hướng dẫn đầy đủ tại [Thông báo và chế độ xem hoạt động](/vi/guide/desktop-app/notifications/).

### Appearance

Bạn có thể chọn giao diện sáng, tối hoặc theo hệ thống; chỉnh màu nhấn, màu nền, màu chữ, phông chữ giao diện, phông chữ mã và cỡ chữ. Khi rà soát mã dài, ưu tiên độ tương phản và cỡ chữ dễ đọc thay vì chỉ chú trọng hiệu ứng chủ đề.

## Những vấn đề không giải quyết tại đây

- Quy tắc cấp kho mã được viết trong `AGENTS.md`.
- Cấu hình lâu dài của CLI và Agent chủ yếu nằm trong `config.toml`.
- Quyền sử dụng tệp, mạng và lệnh phụ thuộc đồng thời vào sandbox, phê duyệt và chính sách tổ chức.
- Chính sách do tổ chức quản lý có thể giới hạn các tính năng cá nhân được chọn.

Vì vậy, “thấy trong Settings” không có nghĩa là tác vụ hiện tại chắc chắn có quyền. Nếu bị từ chối, trước tiên hãy đọc [Quyền và sandbox](/vi/guide/permissions-and-sandbox/), đừng vội mở rộng quyền.

## Xác nhận sau khi thay đổi

Mỗi lần chỉ đổi một nhóm cài đặt và kiểm tra bằng một cuộc trò chuyện ít rủi ro. Ghi lại giá trị ban đầu, xác nhận hiệu quả rồi mới tiếp tục. Nếu hành vi không như mong đợi, hãy khôi phục mặc định trước, sau đó kiểm tra phiên bản ứng dụng, quyền của hệ điều hành và chính sách tổ chức.

## Nguồn chính thức

- [Cài đặt ứng dụng ChatGPT trên máy tính](https://learn.chatgpt.com/docs/app/settings)
- [Cơ bản về cấu hình Codex](https://learn.chatgpt.com/docs/config)
- [Quyền](https://learn.chatgpt.com/docs/permissions)
