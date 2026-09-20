---
title: Cài đặt và bật tích hợp IDE
description: Cách mở Codex đúng cách trong các trình soạn thảo thuộc họ VS Code, Xcode và IDE JetBrains.
locale: vi
source_locale: zh-CN
source_revision: 85e1691
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Có hai loại điểm truy cập Codex trong IDE và không thể dùng lẫn cách cài đặt của chúng:

| Trình soạn thảo | Điểm truy cập hiện tại | Cách mở |
|---|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Tiện ích Codex | Chọn biểu tượng Codex hoặc chạy `Codex: Open Codex Sidebar` |
| Xcode | Tích hợp coding assistant của Xcode | Tạo cuộc trò chuyện mới và chọn Codex agent |
| IDE JetBrains | Tích hợp JetBrains AI Chat | Mở AI Chat và chọn Codex |

Xem [Các trình soạn thảo được hỗ trợ](/vi/guide/ide/supported-editors/) để biết đầy đủ phạm vi hỗ trợ và điểm truy cập chính thức.

## Cài đặt và kiểm tra trong họ VS Code

1. Cài tiện ích Codex từ liên kết Marketplace chính thức.
2. Mở một dự án thực hành, thay vì một cửa sổ trống.
3. Chọn biểu tượng Codex. Nếu không thấy, chạy `Codex: Open Codex Sidebar` từ bảng lệnh.
4. Đăng nhập bằng tài khoản ChatGPT hoặc API key.
5. Tạo cuộc trò chuyện mới, nhắc đến tệp đang mở và đặt một câu hỏi chỉ yêu cầu đọc.

Prompt tối thiểu để kiểm tra:

```text
Chỉ đọc tệp tôi đang mở, không sửa mã.
Giải thích trách nhiệm, đầu vào và đầu ra của tệp trong ba ý; mỗi ý phải dẫn tên một ký hiệu cụ thể.
```

Nếu câu trả lời khớp với tệp và các ký hiệu trong đó, ngữ cảnh từ trình soạn thảo đã được truyền đúng. Trước khi giao tác vụ ghi tệp, hãy tạo một điểm kiểm tra Git.

## Sự cố thường gặp

- **Không thấy thanh bên**: chạy `Codex: Open Codex Sidebar` từ bảng lệnh.
- **Ngữ cảnh không đúng**: kiểm tra cửa sổ dự án, tệp đang mở và vùng chọn có thuộc đúng kho lưu trữ dự kiến hay không.
- **Liên tục phải đăng nhập**: CLI và IDE dùng chung thông tin đăng nhập lưu trong bộ nhớ đệm; kiểm tra tài khoản hiện tại rồi đăng nhập lại.
- **Bộ công cụ Windows nằm trong WSL**: bật `chatgpt.runCodexInWindowsSubsystemForLinux` khi cần. Thay đổi cài đặt này sẽ tải lại VS Code.
- **Trình soạn thảo bên thứ ba hoạt động khác**: trước tiên kiểm tra phiên bản của nó có tương thích với tiện ích VS Code hay không. Đừng áp dụng cách truy cập của Xcode hoặc JetBrains cho trình soạn thảo khác.

Để xem hướng dẫn chi tiết hơn cho người mới, hãy đọc [Cài đặt tiện ích IDE](/vi/guide/getting-started/install-ide-extension/).

## Nguồn chính thức

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Cài đặt IDE](https://learn.chatgpt.com/docs/ide/settings)
