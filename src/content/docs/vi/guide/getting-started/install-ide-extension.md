---
legacyVerification:
  status: "verified"
  products: "IDE"
  basis: "Trang bắt đầu nhanh chính thức hiện tại cho IDE liệt kê rõ VS Code, Cursor, Windsurf, VS Code Insiders, cùng cách tích hợp riêng cho Xcode và JetBrains; trang này chia hướng dẫn cài đặt theo hai nhóm đó."
  checkedAt: "2026-08-26"
title: Cài đặt tích hợp IDE
description: Bật Codex trong trình soạn thảo tương thích với VS Code, Xcode hoặc JetBrains IDE.
locale: vi
source_locale: zh-CN
source_revision: e8f88ec
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 50
---

Hiện nay không phải mọi IDE đều cài đặt theo cùng một cách:

| IDE | Cách cài đặt hoặc bật |
|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Cài đặt hoặc bật phần mở rộng Codex |
| Xcode | Chọn Codex Agent trong coding assistant của Xcode |
| JetBrains IDEs | Chọn Codex trong AI Chat |

Từ [trang Codex IDE chính thức](https://learn.chatgpt.com/docs/codex/ide), mở hướng dẫn tương ứng với IDE của bạn. Đừng đoán vị trí nút dựa trên ảnh chụp màn hình của IDE khác.

## Trình soạn thảo tương thích với VS Code

1. Cài đặt phần mở rộng Codex từ mục Marketplace chính thức.
2. Mở thư mục gốc của workspace trong một dự án thực.
3. Chọn biểu tượng Codex; nếu không thấy, mở Command Palette và chạy `Codex: Open Codex Sidebar`.
4. Đăng nhập bằng ChatGPT hoặc API key.

## Xcode và JetBrains

- Xcode: mở coding assistant, tạo cuộc trò chuyện mới và chọn Codex làm Agent.
- JetBrains: mở AI Chat và chọn Codex.

Các điểm truy cập này do từng IDE cung cấp, nên giao diện sẽ không hoàn toàn giống phần mở rộng của VS Code.

## Kiểm tra ngữ cảnh sau khi cài đặt

Mở một tệp mã nguồn, chọn một đoạn mã ngắn rồi hỏi:

```text
Chỉ giải thích đầu vào, đầu ra và các đường dẫn lỗi của vùng mã đang chọn; đừng sửa tệp. Hãy dẫn tên các hàm liên quan.
```

Nếu câu trả lời rõ ràng không liên quan đến vùng chọn, trước tiên hãy kiểm tra:

- Bạn đã mở đúng thư mục gốc của dự án chưa.
- Tệp hoặc vùng chọn đã được đính kèm vào composer chưa.
- Tài khoản đăng nhập và workspace hiện tại có đúng không.
- Trình soạn thảo có đang bật các phần mở rộng AI hoặc phím tắt gây xung đột không.

Tiếp theo, xem [Quy trình tác vụ cục bộ trong IDE](/vi/guide/ide/local-task-workflow/); phạm vi hỗ trợ đầy đủ nằm ở [Trình soạn thảo được hỗ trợ](/vi/guide/ide/supported-editors/).
