---
title: Tham chiếu lệnh CLI
description: "Lệnh con và flag Codex CLI phổ biến — chỉ mục học, không thay tài liệu chính thức."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Tham chiếu lệnh giúp chọn lối vào — không phải thuộc mọi flag:

> **Tôi nên dùng lối tương tác hay lệnh một lần?**

Trang này lập chỉ mục các lối vào **Codex CLI** phổ biến để tìm và so sánh. **Tên, flag và mặc định đổi theo phiên bản** — chạy `codex --help` và `--help` của lệnh con, và theo [tài liệu OpenAI Codex](https://developers.openai.com/codex).

## Khi nào dùng trang này

- Lệnh tương tác vs một lần
- Tác vụ kiểu chat vs kiểu script
- Bạn biết CLI phù hợp nhưng chưa biết lối nào

## Chọn lối vào

- Chat trong khi làm việc: `codex`
- Một Tác vụ, kết quả khi xong: `codex exec`

Với người mới CLI, phân chia này giải hầu hết câu hỏi lối vào.

## Tổng quan lệnh (minh họa)

| Lối vào | Mục tiêu | Chi tiết |
|---|---|---|
| `codex` | Phiên TUI tương tác | [Chế độ tương tác](/guide/cli/interactive-mode/) |
| `codex exec` (hoặc tương đương) | Tác vụ không tương tác một lần/pipeline | [Chế độ không tương tác](/guide/cli/non-interactive-mode/) |
| Cấu hình | Đọc/ghi config người dùng/dự án | [Cấu hình CLI](/guide/cli/configuration/) |

:::caution[Nhạy cảm phiên bản]
Tên tham số dưới đây phản ánh tài liệu cộng đồng phổ biến — **có thể không khớp CLI bạn đã cài**. Đối chiếu lại `--help` sau khi nâng cấp.
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

Lệnh gạch chéo: [Tham chiếu lệnh gạch chéo](/guide/reference/slash-commands/)

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
# Thư mục làm việc và Prompt một lần (minh họa)
codex exec --cwd /path/to/repo "Mô tả Tác vụ đầy đủ của bạn"

# Ý định phổ biến (tên flag theo tài liệu chính thức)
# --cwd          thư mục làm việc
# --model        ghim mô hình
# --sandbox      chính sách Sandbox
# --approval     chính sách phê duyệt (then chốt khi không giám sát)
# stdin pipe     đọc Prompt từ tệp hoặc lệnh phía trước
```

Bảo mật: [Mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/)

## Cấu hình và auth (khái niệm)

| Hành động | Ghi chú |
|---|---|
| Đăng nhập | Giống [Đăng nhập và xác thực](/guide/getting-started/sign-in-and-authentication/) |
| Tệp cấu hình | Cấp người dùng/dự án — xem [Tham chiếu cấu hình](/guide/reference/configuration-reference/) |
| MCP | [Kết nối MCP](/skills/mcp/connect-an-mcp-server/) |

## Mã thoát và tự động hóa

Chế độ không tương tác thường dùng **mã thoát** cho CI:

- `0`: hoàn thành theo thỏa thuận
- Khác `0`: thất bại hoặc cần người — kiểm stderr/log

Trang lệnh CLI giúp chọn lối vào và ý định — không thuộc tham số.

Đừng bỏ qua stderr trong CI; giữ log cho [Chẩn đoán trước khi sửa](/cases/workflows/diagnose-before-fixing/).

## vs lệnh gạch chéo trong chat

| | Terminal `codex` | `/` trong phiên |
|---|---|---|
| Tài liệu | Trang này + hướng dẫn sản phẩm | [slash-commands](/guide/reference/slash-commands/) |
| Phù hợp | Script, CI | Khám phá tương tác |

## Xử lý sự cố

| Triệu chứng | Xem |
|---|---|
| Không tìm thấy lệnh | [Cài CLI](/guide/getting-started/install-cli/) |
| Config không áp dụng | [Cấu hình CLI](/guide/cli/configuration/) |
| Phê duyệt chặn CI | Siết Prompt + Sandbox chỉ đọc |

[Xử lý sự cố CLI](/guide/cli/troubleshooting/)

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI  
**Ghi chú đối chiếu:** Viết như bản đồ lối vào nhưng vẫn tập trung `codex`, `codex exec`, `/` trong phiên và ý định tham số — chi tiết CLI biến động cao; khôi phục `verified` sau tài liệu lệnh chính thức mới nhất.  
**Kiểm chứng gần nhất:** 2026-07-26
