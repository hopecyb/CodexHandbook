---
legacyVerification:
  status: "verified"
  products: "Ứng dụng ChatGPT trên máy tính / Codex CLI / IDE"
  checkedAt: "2026-08-25"
title: Kết nối máy chủ MCP
description: Dùng CLI hoặc config.toml để cấu hình, xác thực và kiểm tra máy chủ MCP đầu tiên.
locale: vi
source_locale: zh-CN
source_revision: "0675d33"
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: 2026-10-26
---

Chương này sử dụng giao diện chính thức hiện tại để hoàn thành một quy trình tối thiểu: **thêm máy chủ → xem cấu hình → xác nhận công cụ trong phiên → thực hiện một lệnh gọi chỉ đọc**.

## Trước khi bắt đầu

- Đã đọc [Tổng quan MCP](/vi/skills/mcp/mcp-overview/).
- Chạy được `codex mcp --help` trên máy của bạn.
- Lần kết nối đầu tiên dùng nguồn đáng tin cậy và tình huống chỉ đọc.
- Không ghi token thật vào lịch sử lệnh, prompt hoặc kho mã.

## Cách A: thêm máy chủ STDIO bằng CLI

Ví dụ chính thức sử dụng máy chủ tài liệu Context7:

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

Lệnh này ghi máy chủ vào cấu hình Codex. Phần sau `--` là lệnh khởi chạy máy chủ STDIO. Lần chạy đầu có thể cần tải gói npm, vì vậy hãy xác nhận tên và nguồn gói trước.

## Cách B: sửa trực tiếp config.toml

Cấu hình cấp người dùng mặc định nằm tại `~/.codex/config.toml`. Dự án đáng tin cậy cũng có thể dùng `.codex/config.toml` ở cấp dự án.

Ví dụ STDIO:

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

Ví dụ Streamable HTTP từ xa:

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

`internal_docs`, địa chỉ và tên công cụ chỉ minh họa cấu trúc; bạn phải thay bằng giá trị thật trong tài liệu của máy chủ. `bearer_token_env_var` lưu tên biến môi trường, không phải chính token.

## Máy chủ OAuth

Sau khi cấu hình máy chủ hỗ trợ OAuth, chạy:

```bash
codex mcp login <server-name>
```

Danh sách MCP trong ứng dụng máy tính và IDE cũng đánh dấu máy chủ cần OAuth và cung cấp thao tác Authenticate.

## Xem trong ba ứng dụng

| Giao diện | Nơi cấu hình hoặc xem |
|---|---|
| Ứng dụng ChatGPT trên máy tính | Settings → MCP servers; Restart sau khi lưu; nhập `/mcp` để xem kết nối |
| Codex CLI | `codex mcp add/list/login`; nhập `/mcp` trong TUI |
| Phần mở rộng IDE | Menu bánh răng → MCP servers; Restart extension sau khi lưu |

Ba ứng dụng này chia sẻ cấu hình trên cùng một Codex host; không cần duy trì ba tệp riêng. ChatGPT Web không đọc cấu hình cục bộ.

## Prompt xác minh

```text
Chỉ dùng máy chủ MCP đang kết nối để thực hiện các bước sau:
1. Liệt kê tên những công cụ có thể dùng để tra cứu tài liệu phát triển;
2. Chọn một công cụ chỉ đọc và tra cứu cách dùng cơ bản của Node.js test runner;
3. Nêu rõ công cụ thực sự đã gọi;
4. Không ghi dữ liệu và không kết nối dịch vụ khác.
```

Bằng chứng nghiệm thu: máy chủ xuất hiện trong `codex mcp list` hoặc `/mcp`, công cụ chỉ đọc trả về kết quả có cấu trúc và không yêu cầu quyền không liên quan.

## Tùy chọn quyền tối thiểu

- `enabled_tools`: chỉ cho phép những công cụ được liệt kê.
- `disabled_tools`: tiếp tục loại trừ công cụ sau allowlist.
- `enabled = false`: giữ cấu hình nhưng tạm thời tắt máy chủ.
- `required = true`: để việc khởi động thất bại nếu máy chủ không khởi tạo được; phù hợp với thành phần thực sự không thể thiếu.

## Khi gặp lỗi

Đừng vừa đoán vừa sửa nhiều trường. Ghi lại nguyên văn lỗi, rồi làm theo [Gỡ lỗi kết nối MCP](/vi/skills/mcp/debugging-mcp/) để kiểm tra lần lượt việc đọc cấu hình, tiến trình/mạng, xác thực và từng công cụ.

## Nguồn chính thức

- [OpenAI: Kết nối Codex với máy chủ MCP](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)
