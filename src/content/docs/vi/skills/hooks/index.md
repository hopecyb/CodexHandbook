---
title: Hooks
description: Chạy script hoặc công cụ MCP tại các mốc trong vòng đời Codex để kiểm tra, ghi nhận và áp dụng quy tắc.
locale: vi
source_locale: zh-CN
source_revision: a0312e9
translation_status: draft
translated_at: 2026-09-20
---

Hook là bộ xử lý tự động trong vòng đời của Codex. Nó có thể chạy script hoặc công cụ MCP khi phiên bắt đầu, prompt được gửi, trước hoặc sau khi gọi công cụ, lúc nén ngữ cảnh, khi Agent con dừng hoặc khi luồng chính kết thúc.

## Nhóm tài liệu này giải quyết điều gì

- Chọn đúng sự kiện thay vì tự đặt những tên không tồn tại như `pre_tool`.
- Phân biệt chặn trước khi thực thi với phản hồi sau khi thực thi.
- Bắt đầu bằng Hook có thể kiểm thử và ít rủi ro.
- Rà soát ranh giới tin cậy của Hook trong dự án và Hook đi kèm Plugin.

## Thứ tự đọc

1. [Tổng quan về Hooks](/vi/skills/hooks/hooks-overview/): hiểu các lớp cấu hình, sự tin cậy và cách thực thi.
2. [Các loại sự kiện Hook](/vi/skills/hooks/hook-event-types/): chọn sự kiện và matcher theo vòng đời.
3. [Ví dụ cấu hình Hook](/vi/skills/hooks/hooks-examples/): chạy ví dụ bảo vệ `PreToolUse` có thể kiểm thử đơn vị.

## Cách chọn nhanh

| Mục tiêu | Ưu tiên xem xét |
|---|---|
| Từ chối hoặc sửa đầu vào trước khi công cụ chạy | `PreToolUse` |
| Quyết định khi Codex chuẩn bị xin nâng quyền | `PermissionRequest` |
| Ghi nhận hoặc bổ sung phản hồi sau khi công cụ kết thúc | `PostToolUse` |
| Kiểm tra hoặc thêm ngữ cảnh lúc gửi prompt | `UserPromptSubmit` |
| Yêu cầu luồng chính hoặc Agent con tiếp tục thêm một lượt | `Stop` / `SubagentStop` |

Hook không thay thế sandbox, phê duyệt, quy tắc lệnh hay quyền phía máy chủ. Đây là lớp bảo vệ bổ sung; một số đường đi của công cụ được quản lý không đi qua Hook cục bộ của công cụ.

## Nguồn chính thức

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
