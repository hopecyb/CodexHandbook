---
title: Plugins
description: Khám phá, cài đặt và quản lý bộ Skills, connector, MCP, Hooks cùng mẫu tác vụ có thể tái sử dụng.
locale: vi
source_locale: zh-CN
source_revision: 8917a59
translation_status: draft
translated_at: 2026-09-20
---

Plugin là đơn vị kết hợp và phân phối năng lực. Nó có thể chứa Skills, connector, máy chủ MCP, tiện ích trình duyệt, Hooks và mẫu Scheduled task. Công việc thực tế vẫn do những thành phần bên trong thực hiện.

## Dành cho ai

- Người muốn cài một bộ năng lực có sẵn từ danh mục công khai.
- Người bảo trì muốn phân phối quy trình, công cụ và biện pháp bảo vệ của nhóm thành một đơn vị có phiên bản.
- Quản trị viên cần xem xét nguồn gốc, quyền đối với dịch vụ bên ngoài và Hook đi kèm Plugin.

## Những nơi hiện hỗ trợ

| Nơi sử dụng | Khám phá/cài đặt | Sử dụng |
|---|---|---|
| ChatGPT Web và ứng dụng máy tính | Thẻ Plugins | Chat và Work |
| ChatGPT Mobile | Không phải nơi quản lý chính | Dùng Plugin đã có trong tài khoản |
| Codex trong ứng dụng ChatGPT trên máy tính | Thẻ Plugins | Tác vụ Codex |
| Codex CLI | Trình duyệt `/plugins`; mở phiên mới sau khi cài | Môi trường Codex |
| Tiện ích IDE | **Không hỗ trợ Plugin** | Có thể dùng riêng MCP, Skill và các năng lực IDE đã hỗ trợ |

## Bắt đầu đọc từ đâu

- [Tổng quan Plugins](/vi/skills/plugins/plugins-overview/): hiểu thành phần, giới hạn hỗ trợ, cách xác minh cài đặt và rà soát bảo mật.
- [Bản đồ năng lực mở rộng](/vi/skills/capability-map/): so sánh Plugin, Skill, MCP, Hook và Scheduled task.

## Hỏi trước khi cài

1. Nguồn và người bảo trì Plugin là ai?
2. Nó bao gồm những Skills, connector, MCP, năng lực trình duyệt và Hooks nào?
3. Có cần kết nối tài khoản bên ngoài không, và sẽ được cấp những phạm vi quyền nào?
4. Hook đã được rà soát và tin cậy trong `/hooks` chưa?
5. Nhóm sẽ tắt, nâng cấp, quay lại phiên bản cũ và thu hồi quyền như thế nào?

## Nguồn chính thức

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
