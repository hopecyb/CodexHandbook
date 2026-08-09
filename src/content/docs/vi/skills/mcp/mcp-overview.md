---
title: Tổng quan MCP
description: Model Context Protocol — để Codex nối an toàn công cụ và nguồn dữ liệu ngoài.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP là cách nối chuẩn để Codex nối công cụ và nguồn dữ liệu ngoài.

Ví dụ bạn muốn Codex tra Jira, đọc knowledge base, gọi API nội bộ, thao tác một công cụ được kiểm soát — cần cơ chế"nối thế nào, gọi được gì, Quyền quản ra sao". **MCP(Model Context Protocol)** chính là để giải quyết việc đó.

## Nội dung

- MCP giải quyết vấn đề"Codex với không tới hệ thống thật"
- Phân công với Skill, Plugin
- Vì sao MCP phải đưa vào quản trị bảo mật

## Trước hết phân biệt nó không phải gì

MCP không phải:

- Để bạn dán thẳng tài khoản mật khẩu cho Codex
- Để model"muốn nối sao cũng được"
- Để mọi dịch vụ bên thứ ba mặc định đáng tin

Nó là cách nối chuẩn hóa, để việc nối hệ thống ngoài kiểm soát và kiểm toán được hơn.

## Khái niệm cốt lõi

```text
Codex  ←→  MCP client  ←→  MCP server  ←→  hệ thống ngoài
```

| Thành phần | Vai trò |
|---|---|
| MCP server | Expose một nhóm công cụ (như `search_issues`, `get_user`) |
| Cấu hình | Nói với Codex cách khởi động/nối server |
| Gọi công cụ | Model chọn công cụ trong Tác vụ, thường cần bạn Phê duyệt |

MCP **không cung cấp** logic nghiệp vụ bản thân. Server của bạn triển khai quy tắc đọc/ghi; Codex chịu chọn công cụ nào trong Tác vụ.

## Vị trí của MCP

Skill thiên về"sổ tay thao tác"; MCP xử lý"giao diện công cụ".

- Skill chịu nói các bước
- MCP chịu đưa một số công cụ ngoài vào tay Codex

Nhiều khi hai thứ xuất hiện cùng:  
Skill quy định quy trình trước, một bước trong quy trình rồi gọi công cụ MCP.

## Quan hệ với Skill, Plugin

| | MCP | Skill | Plugin |
|---|---|---|---|
| Bản chất | Giao thức công cụ | Mô tả workflow | Gói phân phối |
| Nội dung điển hình | Bọc API | Bước và quy chuẩn | Skill + MCP + connector ứng dụng |
| Ai bảo trì | Bạn hoặc server bên thứ ba | Bạn hoặc nhóm | Nhà phát hành |

Tổ hợp thường gặp: **Skill quy định quy trình**, một bước trong quy trình **gọi công cụ MCP** để kéo danh sách ticket.

## Khi nào cân nhắc MCP

Nếu Tác vụ chỉ cần đọc/ghi file trong repo hiện tại, thường không cần MCP.  
Nếu Tác vụ cần chạm hệ thống thật"ngoài repo", nên bắt đầu cân nhắc MCP, API hoặc cách tích hợp được kiểm soát khác.

## Kịch bản phù hợp

| Phù hợp MCP | Không phù hợp MCP |
|---|---|
| Tra ticket Linear/Jira | Chỉ sửa code trong repo |
| Chỉ đọc tài liệu/knowledge base | Dùng `curl` đơn giản và không cần tái dùng |
| Công cụ nội bộ được kiểm soát | Ghi thư viện production quyền cao không kiểm toán |

## Hiểu lầm thường gặp

### 1. Chỉ cần nối MCP là Codex làm được mọi thứ

Nó làm được gì phụ thuộc server MCP thực sự expose những công cụ nào, và các công cụ đó cho phép làm gì.

### 2. MCP chỉ là vấn đề tích hợp kỹ thuật, không phải bảo mật

Một khi MCP nối hệ thống thật, nó đồng thời trở thành:

- Vấn đề Quyền
- Vấn đề lộ dữ liệu
- Vấn đề kiểm toán
- Vấn đề chuỗi cung ứng

### 3. Có MCP rồi thì không cần viết Skill hoặc tài liệu

Vẫn cần. MCP giải"có gọi được công cụ không", không giải"nên gọi theo quy trình nào, trường hợp nào không nên gọi".

## Ranh giới bảo mật

- **Quyền tối thiểu**: chỉ đọc, giới hạn dự án, giới hạn IP
- **Thông tin xác thực**: OAuth hoặc token ngắn hạn — không vào Prompt, không vào Git
- **Phê duyệt thủ công**: thao tác ghi, xóa hàng loạt, gửi tin ra ngoài nên có đối chiếu lại
- **Chuỗi cung ứng**: chỉ nối server đáng tin, review mã nguồn MCP bên thứ ba

Kịch bản doanh nghiệp xem lộ trình `11-team-enterprise/security/plugin-and-mcp-risk`.

## Thứ tự nối

1. Đọc tài liệu MCP chính thức, xác nhận định dạng cấu hình client hiện tại
2. Bắt đầu từ một server ví dụ chính thức hoặc cộng đồng **chỉ đọc**
3. Kiểm chứng lời gọi một công cụ trong dự án thử
4. Rồi nối hệ thống thật và viết sổ tay vận hành

Bước thao tác: [Nối máy chủ MCP](/skills/mcp/connect-an-mcp-server/)

## Bắt đầu từ chỉ đọc

Khi MCP chạm hệ thống thật, nó bước vào chuỗi quyền, dữ liệu và kiểm toán. Thứ tự an toàn hơn là: dữ liệu test trước, nhóm kiểm chứng chỉ đọc, một ít thao tác ghi có thể hoàn tác và có người duyệt, rồi mới đến quản trị với vai trò, audit và auth có thể thu hồi.

Nếu giá trị của server đến từ quyền ghi cao, hãy tách công cụ đọc và công cụ ghi trước.

## Checklist trước khi nối

- Server expose những công cụ nào? Có thao tác ghi không?
- Credential lưu ở đâu? Có thu hồi theo người/dự án/môi trường không?
- Log có thể chứa dữ liệu khách hàng, tài liệu nội bộ hoặc mảnh secret không?
- Đã thử một lời gọi công cụ trong dự án test chưa?
- Thao tác ghi có xác nhận người, rollback và audit log không?

## Lỗi thường gặp

- Cho MCP server Quyền quá cao"cho tiện phát triển"
- Coi MCP là thay thế Skill (mô tả quy trình vẫn nên viết trong Skill hoặc AGENTS.md)
- Đổi cấu hình không đưa vào code review

## Nguồn tham chiếu
- [Model Context Protocol](https://modelcontextprotocol.io/)
- Tài liệu OpenAI Codex MCP
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Ghi chú tái Kiểm chứng:** Trang này dù có nội dung khái niệm nhưng kèm phán đoán triển khai hiện tại như"định dạng cấu hình client""hành vi Phê duyệt"; đến 2026-07-26, căn cứ chính thức công khai chưa đủ để chuẩn hóa toàn bộ.  
**Kiểm chứng gần nhất:** 2026-07-26
