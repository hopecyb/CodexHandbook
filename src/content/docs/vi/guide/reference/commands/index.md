---
title: "Tham chiếu lệnh CLI"
description: "Lệnh con và flag Codex CLI phổ biến — chỉ mục học, không thay tài liệu chính thức."
locale: "vi"
source_locale: "zh-CN"
source_revision: "6091bcc"
translation_status: "reviewed"
translated_at: "2026-09-20"
sidebar:
  order: 50
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "Đã đối chiếu bảng mức độ trưởng thành hiện tại của Developer commands chính thức, chỉ liệt kê mục Stable và kiểm tra --cd / -C, sandbox, tham số phê duyệt. Lệnh thử nghiệm hoặc đã ngừng dùng không nằm trong bảng cơ bản."
  checkedAt: "2026-08-26"
reviewed_at: "2026-10-26"
---


Tham chiếu lệnh giúp chọn lối vào — không phải thuộc mọi flag:

> **Tôi nên dùng lối tương tác hay lệnh một lần?**

Trang này tổng hợp các lối vào **Stable** hiện tại của Codex CLI để tiện tra cứu và so sánh. Trước khi chạy, hãy xem `codex --help` và `--help` của từng lệnh con; danh sách đầy đủ về mức độ trưởng thành và tham số theo [Developer commands](https://learn.chatgpt.com/docs/developer-commands).

## Khi nào dùng trang này

- Lệnh tương tác vs một lần
- Tác vụ kiểu chat vs kiểu script
- Bạn biết CLI phù hợp nhưng chưa biết lối nào

## Chọn lối vào

- Chat trong khi làm việc: `codex`
- Một Tác vụ, kết quả khi xong: `codex exec`

Với người mới CLI, phân chia này giải hầu hết câu hỏi lối vào.

## Tổng quan lệnh Stable

| Lối vào | Mục đích | Chi tiết |
|---|---|---|
| `codex` | Phiên TUI tương tác | [Chế độ tương tác](/vi/guide/cli/interactive-mode/) |
| `codex exec` / `codex e` | Tác vụ đơn lẻ hoặc pipeline không tương tác | [Chế độ không tương tác](/vi/guide/cli/non-interactive-mode/) |
| `codex doctor` | Tạo báo cáo chẩn đoán cài đặt, cấu hình, xác thực, môi trường chạy, Git và terminal | [Xử lý sự cố CLI](/vi/guide/cli/troubleshooting/) |
| `codex login` / `codex logout` | Quản lý xác thực | [Đăng nhập và xác thực](/vi/guide/getting-started/sign-in-and-authentication/) |
| `codex resume` / `codex fork` | Tiếp tục hoặc phân nhánh phiên đã lưu | [Bàn giao và tiếp tục](/vi/guide/agent-work/handoff-and-resume/) |
| `codex mcp` | Quản lý máy chủ MCP | [Kết nối MCP](/vi/skills/mcp/connect-an-mcp-server/) |
| `codex plugin` | Cài đặt, liệt kê và gỡ Plugin | [Plugins](/vi/skills/plugins/) |

:::caution[Các mức độ trưởng thành khác nhau]
Tài liệu chính thức còn có lệnh Experimental, Beta và Deprecated. Bảng cơ bản này không trộn chúng với lệnh Stable; hãy xác nhận mức độ trưởng thành và rủi ro trước khi dùng.
:::

## Hiểu nhầm thường gặp

### 1. Không cần thuộc hết

Biết lớp lối vào nào phù hợp Tác vụ; tra flag khi cần.

### 2. `codex exec` không chỉ là «`codex` nâng cao»

Nó hướng tới script và CI không giám sát — không phải chế độ chat mạnh hơn.

### 3. Thấy một flag ≠ bạn phải dùng ngay

Nhiều flag phụ thuộc phiên bản, môi trường và chính sách bảo mật — hiểu ý định trước.

### 4. Tham chiếu lệnh ≠ tutorial

Nó là:

- Bản đồ lối vào
- Chỉ mục tham số
- Con trỏ tới trang sâu hơn

## Chế độ tương tác (khái niệm)

```bash
# Khởi động phiên tương tác tại gốc repo (minh họa)
codex

# Hành động phổ biến trong phiên (theo TUI)
# - Nhập mô tả Tác vụ
# - Lệnh gạch chéo / → xem trang slash-commands
# - Phê duyệt yêu cầu shell / ghi tệp
```

Lệnh gạch chéo: [Tham chiếu lệnh gạch chéo](/vi/guide/reference/slash-commands/)

## Luồng quyết định lối vào

1. Chạy `codex --help`
2. Chọn tương tác hoặc `exec`
3. Với lệnh con, đọc `--help` của nó

Tránh chìm trong bảng flag đầy đủ ngày đầu.

## Bắt đầu nhanh

1. `codex --help`
2. Chat khi làm việc → `codex`
3. CI hoặc script → nghiên cứu `codex exec`

## Exec không tương tác (khái niệm)

```bash
# Thư mục làm việc và prompt một lần (ví dụ)
codex exec --cd /path/to/repo "mô tả đầy đủ tác vụ của bạn"

# Các tham số thường dùng hiện nay
# --cd, -C       thư mục làm việc
# --model        cố định mô hình
# --sandbox      chính sách sandbox
# --ask-for-approval, -a  chính sách phê duyệt
# stdin pipe     đọc prompt từ tệp hoặc lệnh phía trước
```

Bảo mật: [Mẫu phê duyệt của người](/vi/cases/workflows/human-approval-patterns/)

## Cấu hình và auth (khái niệm)

| Hành động | Ghi chú |
|---|---|
| Đăng nhập | Giống [Đăng nhập và xác thực](/vi/guide/getting-started/sign-in-and-authentication/) |
| Tệp cấu hình | Cấp người dùng/dự án — xem [Tham chiếu cấu hình](/vi/guide/reference/configuration-reference/) |
| MCP | [Kết nối MCP](/vi/skills/mcp/connect-an-mcp-server/) |

## Mã thoát và tự động hóa

Chế độ không tương tác thường dùng **mã thoát** cho CI:

- `0`: tiến trình hoàn tất thành công; vẫn cần kiểm chứng kết quả nghiệp vụ
- Khác `0`: thất bại hoặc cần người — kiểm stderr/log

Trang lệnh CLI giúp chọn lối vào và ý định — không thuộc tham số.

Đừng bỏ qua stderr trong CI; giữ log cho [Chẩn đoán trước khi sửa](/vi/cases/workflows/diagnose-before-fixing/).

## vs lệnh gạch chéo trong chat

| | Terminal `codex` | `/` trong phiên |
|---|---|---|
| Tài liệu | Trang này + hướng dẫn sản phẩm | [slash-commands](/vi/guide/reference/slash-commands/) |
| Phù hợp | Script, CI | Khám phá tương tác |

## Xử lý sự cố

| Triệu chứng | Xem |
|---|---|
| Không tìm thấy lệnh | [Cài CLI](/vi/guide/getting-started/install-cli/) |
| Config không áp dụng | [Cấu hình CLI](/vi/guide/cli/configuration/) |
| Phê duyệt chặn CI | Siết Prompt + Sandbox chỉ đọc |

[Xử lý sự cố CLI](/vi/guide/cli/troubleshooting/)
