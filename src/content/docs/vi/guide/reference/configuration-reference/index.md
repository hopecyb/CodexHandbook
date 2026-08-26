---
title: Tham chiếu cấu hình
description: "Chỉ mục khái niệm các khóa cấu hình Codex cấp người dùng và dự án — đường dẫn và trường lấy theo tài liệu chính thức."
locale: vi
source_locale: zh-CN
source_revision: ebf25a6
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Trang tham chiếu cấu hình có thể choáng với khóa, tầng và ghi đè. Bắt đầu bằng một câu hỏi:

> **Điều gì nên là cấu hình — và điều gì không nên?**

Tệp cấu hình thường thống nhất hành vi **mô hình, Sandbox, phê duyệt, MCP**. Trang này là **chỉ mục khái niệm**; đường dẫn tệp và khóa TOML/YAML phải theo [tài liệu OpenAI Codex](https://developers.openai.com/codex) và phiên bản bạn đã cài.

## Một nguyên tắc quyết định

Cấu hình chứa điều **nên ảnh hưởng hành vi dài hạn**. Thường không phải:

- Secrets
- Văn xuôi đầy đủ quy tắc đội
- Chỉ dẫn Tác vụ một lần

Ba ngăn:

- **Ưu tiên hành vi dài hạn** → cấu hình
- **Yêu cầu Tác vụ cụ thể** → Prompt / `AGENTS.md` / Skill
- **Secrets** → biến môi trường hoặc Secret store

Do dự? Bạn đang đổi thói quen dài hạn của Codex hay mô tả Tác vụ này?

- Thói quen dài hạn → cấu hình
- Tác vụ này → Prompt, `AGENTS.md` hoặc mô tả Tác vụ

## Tầng cấu hình

| Tầng | Vị trí (khái niệm) | Nội dung điển hình |
|---|---|---|
| Người dùng | `~/.codex/` v.v. | Mô hình mặc định, thói quen phê duyệt cá nhân |
| Dự án | Config trong repo | Sandbox đội, danh sách MCP |
| Biến môi trường | Tiêm shell / CI | Khóa, công tắc tạm |
| Quản lý | Cấp phát tổ chức | Chính sách bắt buộc không hủy được |

## Mỗi tầng quản gì

- **Người dùng**: mặc định cá nhân của bạn
- **Dự án**: mặc định dùng chung cho repo này
- **Biến môi trường**: giá trị tiêm lúc chạy
- **Chính sách quản lý**: ranh giới tổ chức đã cố định, bạn không hủy cục bộ được

Ngày đầu không cần thuộc độ ưu tiên — biết mỗi tầng dùng để làm gì:

- Người dùng: «tôi thích làm việc thế nào»
- Dự án: «repo này muốn mọi người làm việc thế nào»
- Môi trường: «giá trị cho lần chạy này»
- Quản lý: «tổ chức đã quyết rồi»

Giới thiệu: [Cơ bản cấu hình](/vi/guide/customization/configuration/config-basics/) · Trọng tâm CLI: [Cấu hình CLI](/vi/guide/cli/configuration/)

## Lĩnh vực cấu hình (khái niệm)

### Mô hình và suy luận

| Ý định | Ghi chú |
|---|---|
| Mô hình mặc định | Model ID cho phiên mới |
| Sức suy luận | Mức phức tạp nếu hỗ trợ |
| Sampling (temperature, v.v.) | Thường mặc định; ghim cho script |

Ngữ cảnh: [Mô hình và suy luận](/vi/guide/foundations/models-and-reasoning/)

### Sandbox và mạng

| Ý định | Ghi chú |
|---|---|
| Phạm vi filesystem | Đường dẫn ghi được, ghi ngoài dự án |
| Truy cập mạng | Deny / hạn chế / allow |
| Domain egress | Danh sách cho phép nếu hỗ trợ |

Ngữ cảnh: [Sandbox và mạng](/vi/guide/foundations/sandbox-and-network/)

### Chính sách phê duyệt

| Ý định | Ghi chú |
|---|---|
| Trước shell | Luôn hỏi / danh sách tin cậy / tự động (rủi ro cao) |
| Trước ghi tệp | Tương tự |
| Gọi công cụ MCP | Độ chi tiết theo máy chủ hoặc công cụ |

Ngữ cảnh: [Quyền và phê duyệt](/vi/guide/foundations/permissions-and-approvals/) · Ma trận: [Ma trận quyền](/vi/guide/reference/permission-matrix/)

### Workspace và CLI

| Ý định | Ghi chú |
|---|---|
| `cwd` mặc định | Thư mục khởi động |
| Mặc định không tương tác | phê duyệt và Sandbox exec |
| Mức log | Tăng khi xử lý sự cố |

### Máy chủ MCP

| Ý định | Ghi chú |
|---|---|
| Danh sách máy chủ | Lệnh, URL, transport |
| Tiêm env | Gắn tiến trình MCP — không vào Git |

[Kết nối MCP](/vi/skills/mcp/connect-an-mcp-server/)

### Extension IDE / App

Một số cài đặt chỉ sống trong UI extension; có thể chia sẻ backend cấu hình người dùng với CLI — theo tài liệu sản phẩm.

[Cài đặt IDE](/vi/guide/ide/settings/) · [Cài đặt App máy tính](/vi/guide/desktop-app/settings/)

## Hiểu nhầm thường gặp

### 1. Không phải mọi thứ thuộc cấu hình

Thường tốt hơn trong:

- `AGENTS.md`
- Biến môi trường
- Skill
- Mô tả Tác vụ hiện tại

Cấu hình không phải thùng chứa vạn năng.

### 2. Ngày đầu không cần mọi khóa

Hầu hết bắt đầu với:

- Mô hình
- Sandbox
- Phê duyệt
- MCP

Bốn cái này phủ hầu hết câu hỏi ban đầu.

### 3. Cấu hình dự án thay tài liệu đội?

Cấu hình thể hiện mặc định hệ thống — không phải «vì sao và khi nào không».

### 4. Khóa chính thức nhiều — học bốn cái trước

- Mô hình mặc định
- Phạm vi Sandbox
- Chính sách phê duyệt
- Kết nối MCP

## vs biến môi trường

| Loại | Ở đâu |
|---|---|
| API key, token | Biến môi trường hoặc trình quản lý secrets |
| Công tắc không nhạy cảm | Biến môi trường hoặc cấu hình |
| Quy ước code | `AGENTS.md`, không cấu hình |

## Có nên vào cấu hình không?

Bốn câu hỏi:

1. Nên áp dụng mặc định dài hạn?
2. Có nhạy cảm không?
3. Thói quen cá nhân hay quy tắc dự án dùng chung?
4. Điều chỉnh hành vi hệ thống hay mô tả Tác vụ này?

## Khi điều chỉnh hành vi

1. Mặc định dài hạn hay Tác vụ một lần?
2. Nhạy cảm hay thông thường?
3. Cá nhân hay dùng chung?

Rồi đặt vào cấu hình, env, `AGENTS.md`, Skill hoặc Prompt hiện tại.

## Tình huống phổ biến

| Mục tiêu | Thường |
|---|---|
| Ghim một mô hình dài hạn | Cấu hình người dùng hoặc dự án |
| Đội muốn kiểm thử trước khi sửa | `AGENTS.md` |
| Tác vụ này: chỉ `docs/` | Prompt hiện tại |
| API key / token | Môi trường hoặc Secret |
| Kết nối một MCP | Cấu hình dự án + env |

Dễ hơn cố định danh sách khóa.

Secrets Cloud: [Secrets và biến môi trường](/vi/guide/web-and-cloud/secrets-and-variables/)

## Kỷ luật thay đổi

1. Đổi một lớp cấu hình một lúc; quan sát một tuần
2. Thay đổi cấp dự án qua review PR
3. Sau nâng cấp CLI, đọc ghi chú migration chính thức
4. Không bao giờ commit secrets vào tệp cấu hình

Cấu hình dành cho mặc định dài hạn — không secrets, văn xuôi Tác vụ hay thử quy tắc đội.

## Lỗi thường gặp

- Tên khóa tài liệu không khớp CLI cũ
- Sandbox cá nhân nới lỏng dùng trên repo khách hàng
- Cấu hình mâu thuẫn `AGENTS.md` (config cho phép, tài liệu cấm)

## Nguồn tham chiếu
- Tham chiếu cấu hình OpenAI Codex
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / App / IDE  
**Cơ sở kiểm chứng:** Help Center OpenAI vẫn ghi các carrier cấp người dùng như `~/.codex/config.toml` và `~/.codex/.env`; trang tường minh là chỉ mục khái niệm — không cố định tên khóa cụ thể, độ ưu tiên đường dẫn hoặc trường legacy — nên `verified` phù hợp.  
**Kiểm chứng gần nhất:** 2026-07-26
