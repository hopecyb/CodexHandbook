---
title: Biến môi trường
description: "Công dụng, tầng và bảo mật của biến môi trường liên quan Codex — bổ sung cho tham chiếu cấu hình."
locale: vi
source_locale: zh-CN
source_revision: 603ee7b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

Biến môi trường thường bị đẩy về hai cực: «quá thấp tầng» hoặc «nhét hết vào đó». Nói ngắn: chúng truyền giá trị cho chương trình lúc chạy — đặc biệt secrets và công tắc.

Dùng chúng để **tiêm khóa, ghi đè công tắc, thích ứng CI** mà không viết secret vào tệp cấu hình hoặc Git. Chỉ mục khái niệm; tên chính xác theo [tài liệu chính thức](https://developers.openai.com/codex) và `codex --help`.

## Trang này sẽ nói gì

- Điều gì thuộc biến môi trường vs tệp cấu hình
- Phân chia người dùng, dự án, Secrets Cloud, CI
- Đặt tên phổ biến và rủi ro rò rỉ

## Quy tắc quyết định

Ưu tiên biến môi trường nếu một trong các điều sau đúng:

- Không được vào Git
- Đổi theo máy, người dùng hoặc môi trường
- Chỉ cần cho lần chạy này

Vì vậy token, công tắc tạm và tiêm CI thường dùng env — không tệp hard-code.

Khái niệm cấu hình: [Tham chiếu cấu hình](/vi/guide/reference/configuration-reference/); Cloud: [Secrets và biến](/vi/guide/web-and-cloud/secrets-and-variables/).

## Lựa chọn tốt cho biến môi trường

| Loại | Ý định ví dụ | Không |
|---|---|---|
| Token auth | API key, PAT GitHub | Commit vào repo |
| Công tắc tạm | Mức log debug | Cấu hình nghiệp vụ dài hạn |
| Tiêm CI | Chế độ review chỉ đọc | Token ghi production |
| Tiến trình con MCP | Khóa dịch vụ bên thứ ba | Plaintext trong `AGENTS.md` |

## Không phải ngăn kéo vạn năng

Tránh «cái gì nhét được thì env».

- **Nhạy cảm, đặc thù runtime**: biến môi trường
- **Thỏa thuận đội dài hạn**: cấu hình hoặc tài liệu
- **Quy tắc quy trình làm việc**: `AGENTS.md` hoặc Skill

Xử lý sự cố sau dễ hơn.

## `.env` là gì

`.env` không phải trung tâm cấu hình khác — là cách phổ biến để công cụ **tải hàng loạt biến môi trường** cho dev cục bộ.

- Biến môi trường = giá trị
- `.env` = hộp chứa cục bộ cho các giá trị đó

Vì vậy:

- Tiện ≠ an toàn
- `.env.example` hiện tên — không phải secret thật
- Production/CI thường dùng trình quản lý Secret của nền tảng

## Lựa chọn xấu nếu chỉ dùng env

- Chuẩn code, cấu trúc thư mục → `AGENTS.md`
- Mô hình mặc định đội → cấu hình dự án (phần không secret)
- Danh sách cho phép phức tạp → [Quy tắc](/vi/guide/customization/rules/allow-and-deny-patterns/)

## Hiểu nhầm thường gặp

### 1. Biến môi trường không phải cho mọi cấu hình

Tốt cho giá trị — không phải quy tắc đội đầy đủ và văn xuôi dài.

### 2. `.env` trên đĩa ≠ an toàn

`.env` bị commit, chia sẻ ảnh chụp hoặc ghi log vẫn rò.

### 3. `unset` ≠ rủi ro đã hết

Có thể còn trong lịch sử shell, tiến trình con, log, tệp, ảnh chụp.

### 4. Mẫu `.env` cục bộ ≠ mẫu production

CI/Cloud/nền tảng quản lý thường dùng:

- Cấu hình Secrets trong console
- Tiêm lúc chạy
- Giữ giá trị thật ngoài tệp repo

## Tầng và độ ưu tiên (khái niệm)

```text
Chính sách bắt buộc tổ chức (nếu có)
    ↓ ghi đè
Biến môi trường tiêm shell / CI
    ↓ hợp nhất với tệp cấu hình (theo quy tắc chính thức)
Tệp cấu hình người dùng / dự án
```

Khi cùng khóa định nghĩa ở nhiều chỗ, theo **độ ưu tiên chính thức**; khi xử lý sự cố in cấu hình hiệu lực hoặc kiểm log.

## Thứ tự quyết định thực dụng

1. Có nhạy cảm không?
2. Chỉ cục bộ hay CI/Cloud?
3. Dài hạn hay chỉ lần chạy này?
4. Env cục bộ, Secret CI hay Secret Cloud?

Giảm «giá trị đúng, chỗ sai».

## Tình huống phổ biến

| Tình huống | Cách an toàn hơn |
|---|---|
| Debug API bên thứ ba cục bộ | Env cục bộ hoặc `.env`, đã gitignore |
| Mẫu chia sẻ đội | Commit `.env.example`, không giá trị thật |
| GitHub Actions / CI | Secrets nền tảng |
| Tác vụ Cloud gọi dịch vụ riêng | Secret Cloud |
| Máy chủ MCP cần khóa | Env cha hoặc tiêm Secret |

Quy tắc thực nghiệm: khóa thật không nên sống lâu dài dưới dạng nội dung tệp repo plaintext.

## Cách dùng điển hình

### Phát triển cục bộ

Export token cá nhân trong `~/.zshrc` hoặc direnv `.envrc` — **không commit** `.env`.

### CLI không tương tác

CI tiêm qua secret store rồi chạy `codex exec`. Xem [Chế độ không tương tác](/vi/guide/cli/non-interactive-mode/).

### Máy chủ MCP

Tiến trình MCP thường kế thừa env cha; tham chiếu `$VAR` trong config thay vì hard-code. Xem [Kết nối MCP](/vi/skills/mcp/connect-an-mcp-server/).

### Cloud

Secrets cấp repo trong console Cloud; tên khớp tham chiếu Tác vụ.

Biến môi trường phù hợp giá trị đổi, nhạy cảm hoặc chỉ cần lúc chạy — không phải quy tắc dài hạn hoặc tài liệu.

## Checklist bảo mật

- [ ] `.env` trong `.gitignore`
- [ ] Làm sạch token trước khi ghi log
- [ ] Xoay vòng khóa bị lộ
- [ ] Scope quyền tối thiểu (token CI chỉ đọc, v.v.)

## Lỗi thường gặp

- Khóa thật trong `.env.example` đã commit
- `export` lộ khi chia sẻ màn hình
- Giả định `unset` làm tiến trình con an toàn — kiểm cây tiến trình

## Nguồn tham chiếu
- Tài liệu cấu hình / môi trường OpenAI Codex
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / App / IDE / Cloud  
**Cơ sở kiểm chứng:** Help Center OpenAI vẫn ghi `~/.codex/.env`, tiêm CI/runtime và Secrets nền tảng; trang tập trung nguyên tắc ổn định — giá trị nào thuộc env, cái gì không, `.env` như hộp chứa cục bộ — không cố định danh sách tên biến.  
**Kiểm chứng gần nhất:** 2026-07-26
