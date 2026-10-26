---
legacyVerification:
  status: "verified"
  products: "App, CLI, IDE"
  checkedAt: "2026-08-26"
title: "Phím tắt bàn phím"
description: "Chỉ liệt kê các phím tắt cho App và IDE có thể đối chiếu với tài liệu chính thức hiện hành."
locale: "vi"
source_locale: "zh-CN"
source_revision: "4f812d9"
translation_status: "reviewed"
translated_at: "2026-09-20"
sidebar:
  order: 90
reviewed_at: "2026-10-26"
---

Phím tắt thay đổi theo nền tảng, ứng dụng và thiết lập tùy chỉnh. Trang này chỉ ghi những tổ hợp được tài liệu chính thức hiện hành nêu rõ; để xem danh sách đầy đủ, hãy mở mục **Keyboard Shortcuts** trong ứng dụng.

## Ứng dụng máy tính

| Thao tác | macOS | Windows |
|---|---|---|
| Mở Settings | `Cmd + ,` | `Ctrl + ,` |
| Mở/đóng Activity | `Cmd + Option + U` | `Ctrl + Alt + U` |
| Mở terminal tích hợp | `Ctrl` + phím dấu huyền (backtick) | `Ctrl` + phím dấu huyền (backtick) |
| Mở bảng lệnh của ứng dụng | `Cmd + K` | Xem trong Keyboard Shortcuts |
| Xóa nội dung đang hiển thị trong terminal | `Ctrl + L` | `Ctrl + L` |

`Cmd + K` mở bảng lệnh của ứng dụng, không xóa nội dung terminal.

Mục Keyboard Shortcuts trong Settings cho phép tìm theo tên lệnh, tra ngược theo tổ hợp phím, sửa phím tắt và khôi phục mặc định. Nếu bạn đã tùy chỉnh, thiết lập trên máy được ưu tiên hơn các bảng phím tắt trên mạng.

## IDE

Trong các trình soạn thảo thuộc họ VS Code, thiết lập `chatgpt.composerEnterBehavior` quyết định cách dùng Enter và `Cmd/Ctrl + Enter` để gửi câu lệnh nhiều dòng. Đừng mặc định rằng mọi máy đều dùng cùng một phím gửi.

Khi Codex đang thực hiện tác vụ, `chatgpt.followUpQueueMode` quyết định tin nhắn mới sẽ được đưa vào hàng đợi hay điều hướng tác vụ ngay. Với một lần gửi riêng lẻ, nhấn `Cmd/Ctrl + Shift + Enter` để đảo ngược hành vi mặc định hiện tại.

Nếu không tìm thấy thanh bên Codex, hãy chạy lệnh sau từ bảng lệnh của trình soạn thảo:

```text
Codex: Open Codex Sidebar
```

## CLI

Hãy xem cách thao tác trong giao diện CLI TUI bằng `/help` và gợi ý hiển thị ở phiên bản đang dùng. Trang này không phỏng đoán các phím phê duyệt như `y`, `n`, vì terminal, chế độ và phiên bản đều có thể làm thay đổi cách tương tác.

Tín hiệu terminal thông dụng `Ctrl + C` có thể ngắt lệnh hoặc phiên đang chạy. Hãy kiểm tra trạng thái hiện tại trước; đừng coi nó là phím “quay lại” không gây tác dụng phụ.

## Thứ tự học

Trước tiên, hãy nắm cách mở Settings, xem Activity, mở terminal và gửi câu lệnh nhiều dòng. Với các thao tác thường dùng khác, hãy tìm trong ứng dụng khi cần. Tài liệu của nhóm nên ghi tên thao tác, thay vì buộc mọi người dùng cùng một bộ phím tắt đã tùy chỉnh.

## Nguồn chính thức

- [Thiết lập ứng dụng máy tính](https://learn.chatgpt.com/docs/app/settings)
- [Thông báo và Activity](https://learn.chatgpt.com/docs/notifications)
- [Terminal tích hợp](https://learn.chatgpt.com/docs/integrated-terminal)
- [Thiết lập IDE](https://learn.chatgpt.com/docs/ide/settings)
