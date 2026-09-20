---
title: Các trình soạn thảo được hỗ trợ
description: Phân biệt tiện ích tương thích với VS Code, tích hợp Xcode và tích hợp JetBrains.
locale: vi
source_locale: zh-CN
source_revision: 7b82896
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 10
---

Codex hiện có mặt trong các trình soạn thảo phổ biến theo nhiều cách: họ VS Code dùng tiện ích Codex, còn Xcode và các IDE JetBrains có điểm truy cập tích hợp riêng.

## Các cách truy cập hiện được hỗ trợ

| Trình soạn thảo | Điểm truy cập Codex | Cách mở |
|---|---|---|
| Visual Studio Code | Tiện ích Codex | Biểu tượng Codex hoặc `Codex: Open Codex Sidebar` |
| Cursor | Tiện ích Codex tương thích | Biểu tượng Codex hoặc Command Palette |
| Windsurf | Tiện ích Codex tương thích | Biểu tượng Codex hoặc Command Palette |
| Visual Studio Code Insiders | Tiện ích Codex | Bảng tiện ích và thanh bên Codex |
| Xcode | Tích hợp coding assistant của Xcode | Tạo cuộc trò chuyện mới và chọn Codex Agent |
| IDE JetBrains | Tích hợp JetBrains AI Chat | Mở AI Chat và chọn Codex |

Điểm cài đặt và phiên bản tối thiểu có thể thay đổi. Hãy luôn bắt đầu từ [trang Codex IDE chính thức](https://learn.chatgpt.com/docs/codex/ide); đừng cho rằng một tiện ích bên thứ ba được hỗ trợ chính thức chỉ vì có tên tương tự.

## Điểm truy cập trong IDE phù hợp nhất với việc gì

- Đưa ngay tệp đang mở hoặc vùng chọn vào câu hỏi.
- Giải thích, sửa một đoạn mã cụ thể và tiếp tục trao đổi.
- Rà soát bản tóm tắt và các thay đổi ngay bên cạnh mã nguồn.
- Giữ tác vụ nhỏ ở máy cục bộ và giao tác vụ lớn hơn cho quy trình chạy lâu hơn.

Ví dụ:

```text
Kiểm tra vòng lặp thử lại trong vùng chọn hiện tại.
Trước tiên giải thích điều kiện dừng, rồi thực hiện thay đổi nhỏ nhất; chỉ sửa tệp hiện tại và bài kiểm thử tương ứng.
Khi xong, báo cáo diff và lệnh kiểm thử. Không nâng cấp các thư viện phụ thuộc.
```

## Giữ quy trình nhất quán trong nhóm dùng nhiều trình soạn thảo

1. Ghi các lệnh build, kiểm thử và định dạng vào `AGENTS.md` của kho lưu trữ hoặc tài liệu đóng góp.
2. Giới hạn phạm vi tệp trong prompt, thay vì phụ thuộc vào nút riêng của một IDE.
3. Khi nghiệm thu, kiểm tra Git diff và chạy cùng một bộ kiểm thử, thay vì chỉ xác nhận “chạy được trong IDE của tôi”.
4. Chỉ viết hướng dẫn riêng cho từng IDE khi cần chỉ rõ các thành phần giao diện.

## Trình soạn thảo không có trong danh sách

Ưu tiên dùng [Codex CLI](/vi/guide/cli/) hoặc [ứng dụng máy tính](/vi/guide/desktop-app/). Đừng cố cài tiện ích VS Code vào trình soạn thảo không tương thích, cũng đừng mặc định xem tích hợp bên thứ ba là tính năng chính thức của OpenAI.

Xem [Cài đặt tích hợp IDE](/vi/guide/getting-started/install-ide-extension/) để biết các bước cài đặt và [Ngữ cảnh trình soạn thảo](/vi/guide/ide/editor-context/) để học cách sử dụng ngữ cảnh.
