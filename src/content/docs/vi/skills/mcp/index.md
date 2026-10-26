---
legacyVerification:
  status: "verified"
  products: "Ứng dụng ChatGPT trên máy tính / Codex CLI / IDE; ChatGPT Web dùng công cụ MCP từ xa thông qua Plugin"
  basis: "Khả năng hỗ trợ của client, cấu hình dùng chung, phương thức truyền tải và lệnh CLI"
  checkedAt: "2026-08-25"
title: MCP
description: Kết nối công cụ và ngữ cảnh bên thứ ba với ChatGPT và Codex theo cách có kiểm soát.
locale: vi
source_locale: zh-CN
source_revision: "8d9ec38"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

MCP (Model Context Protocol) giải quyết câu hỏi Agent gọi công cụ và dữ liệu ngoài kho mã như thế nào. Nó không tự xác định một quy trình làm việc.

## Dành cho ai

- Lập trình viên muốn Codex tra cứu tài liệu, bản thiết kế, phiếu công việc hoặc công cụ nội bộ.
- Nhóm cần thống nhất cấu hình công cụ bên ngoài, OAuth và quyền tối thiểu.
- Người bảo trì đang tìm nguyên nhân khi máy chủ đã cấu hình nhưng công cụ không xuất hiện hoặc gọi bị lỗi.

Nếu tác vụ chỉ đọc và ghi trong kho mã hiện tại, hãy bắt đầu bằng khả năng tệp và terminal có sẵn. Chỉ kết nối MCP khi thật sự cần ngữ cảnh hoặc thao tác với bên thứ ba.

## Thứ tự đọc

1. [Tổng quan MCP](/vi/skills/mcp/mcp-overview/): phân biệt trách nhiệm của MCP, Skill và Plugin.
2. [Kết nối máy chủ MCP](/vi/skills/mcp/connect-an-mcp-server/): thêm máy chủ đầu tiên qua CLI hoặc `config.toml`.
3. [Gỡ lỗi kết nối MCP](/vi/skills/mcp/debugging-mcp/): kiểm tra bốn lớp cấu hình, khởi động, xác thực và công cụ.

## Giới hạn hỗ trợ hiện tại

- Ứng dụng ChatGPT trên máy tính, Codex CLI và tiện ích IDE chia sẻ cấu hình MCP trên cùng Codex host.
- Các client Codex cục bộ hỗ trợ máy chủ STDIO và Streamable HTTP.
- ChatGPT Web không đọc `~/.codex/config.toml` trên máy của bạn; nó dùng công cụ MCP từ xa do Plugin đã cài đặt cung cấp.

## Ba điều cần nhớ

1. MCP cung cấp công cụ nhưng không định nghĩa thay bạn một quy trình đáng tin cậy. Hãy ghi quy trình ổn định trong Skill hoặc `AGENTS.md`.
2. Khả năng của máy chủ phụ thuộc vào các công cụ nó cung cấp và phạm vi thông tin xác thực đứng sau.
3. Lần kết nối đầu tiên nên dùng quyền chỉ đọc, môi trường thử nghiệm và ít công cụ. Đừng dùng token quản trị môi trường sản xuất để thử.

## Nguồn chính thức

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Đặc tả Model Context Protocol](https://modelcontextprotocol.io/)
