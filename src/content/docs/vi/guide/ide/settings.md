---
title: Cài đặt tiện ích IDE
description: Phân biệt cấu hình Agent dùng chung với cài đặt hành vi của các trình soạn thảo thuộc họ VS Code.
locale: vi
source_locale: zh-CN
source_revision: 6f28910
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 80
---

Trong IDE có hai lớp cài đặt:

| Lớp cài đặt | Nơi lưu | Nội dung điều khiển |
|---|---|---|
| Cài đặt Codex Agent | `config.toml` | Mô hình, mức suy luận, quyền, sandbox, MCP và cá nhân hóa; dùng chung với CLI |
| Cài đặt trình soạn thảo | Các khóa `chatgpt.*` trong hệ thống cài đặt của VS Code | Thanh bên, hàng đợi tin nhắn, phím gửi, cách hiển thị kết quả review, ngôn ngữ và phông chữ |

Quy tắc của kho lưu trữ vẫn nên được viết trong `AGENTS.md`, không đặt trong cài đặt trình soạn thảo của một cá nhân.

## Mở phần cài đặt

Chọn biểu tượng bánh răng trên thanh bên Codex, rồi chọn **Codex Settings**. Bạn có thể thay đổi các tùy chọn Agent thường dùng trong bảng này hoặc chọn **Open config.toml** để sửa lớp cấu hình đang có hiệu lực.

Để chỉnh hành vi của trình soạn thảo, tìm `@ext:openai.chatgpt`, `Codex` hoặc tên khóa cụ thể trong Settings của trình soạn thảo.

## Những cài đặt nên hiểu trước

| Khóa | Giá trị mặc định | Khi nào cần đổi |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | Muốn tiện ích tự đưa thanh bên lên trước khi khởi động |
| `chatgpt.followUpQueueMode` | `queue` | Đổi thành `steer` để tin nhắn mới định hướng lượt chạy đang diễn ra |
| `chatgpt.composerEnterBehavior` | `enter` | Thường vô tình gửi prompt nhiều dòng |
| `chatgpt.reviewDelivery` | `inline` | Dùng `detached` nếu muốn `/review` hiển thị trong cuộc trò chuyện riêng |
| `chatgpt.localeOverride` | Tự động | Cần cố định ngôn ngữ giao diện |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | Bật khi kho lưu trữ và bộ công cụ nằm trong WSL2 |

`chatgpt.cliExecutable` chỉ phục vụ việc phát triển Codex CLI. Người dùng thông thường không nên tự thay thế tệp thực thi đi kèm tiện ích, vì một số chức năng có thể ngừng hoạt động.

## Hiểu thứ tự ưu tiên của cấu hình trong thực tế

- Chính sách tổ chức đặt ra các giới hạn không thể vượt qua.
- `config.toml` quyết định hành vi mặc định của Agent.
- `AGENTS.md` cung cấp quy tắc cho kho lưu trữ và thư mục.
- Cài đặt trình soạn thảo chỉ thay đổi trải nghiệm trong IDE.
- Prompt của từng lần bổ sung mục tiêu và ranh giới của tác vụ đó.

Nếu một cài đặt có vẻ “không có hiệu lực”, hãy xác định bạn đã sửa lớp nào, rồi kiểm tra xem chính sách ở lớp cao hơn có giới hạn nó không. Xem [Phạm vi và thứ tự ưu tiên](/vi/guide/customization/agents-md/scope-and-precedence/) để hiểu đầy đủ.

## Kiểm tra sau khi thay đổi

Mỗi lần chỉ đổi một mục. Ví dụ, sau khi đặt `chatgpt.reviewDelivery` thành `detached`, chạy `/review` trong một kho Git và kiểm tra xem cuộc trò chuyện review riêng có mở ra không. Ghi lại giá trị cũ; nếu kết quả không như mong đợi, hãy khôi phục và tải lại trình soạn thảo.

## Nguồn chính thức

- [Tài liệu cài đặt Codex IDE](https://learn.chatgpt.com/docs/ide/settings)
- [Cơ bản về cấu hình](https://learn.chatgpt.com/docs/config)
