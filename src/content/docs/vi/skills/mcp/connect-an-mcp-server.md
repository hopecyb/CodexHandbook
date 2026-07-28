---
title: Nối máy chủ MCP
description: Cấu hình, xác thực, Kiểm chứng và gỡ lỗi — nối an toàn công cụ MCP đầu tiên.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Trang này tập trung quy trình nối và Kiểm chứng; chi tiết giao thức và phát triển server xem tài liệu MCP chính thức.

## Trước khi bắt đầu

- [ ] Đã hiểu ranh giới bảo mật trong [Tổng quan MCP](/skills/mcp/mcp-overview/)
- [ ] Có tài khoản thử chỉ đọc hoặc môi trường Sandbox
- [ ] Xác nhận phiên bản client Codex hiện tại hỗ trợ MCP (theo tài liệu chính thức)

## Quy trình khuyến nghị

### 1. Chọn loại server

| Loại | Ghi chú | Rủi ro |
|---|---|---|
| Server stdio cục bộ | Khởi động process trên máy | Trung bình: Quyền process = Quyền user của bạn |
| HTTP/SSE từ xa | Dịch vụ được host | Trung bình–cao: cần TLS, xoay token |

Lần đầu nối, nên bắt đầu từ **ví dụ chính thức hoặc server cục bộ chỉ đọc**.

### 2. Thêm cấu hình

Vị trí cấu hình khác nhau giữa CLI/App; thường là khối cấu hình `mcp` cấp user hoặc dự án. Cấu trúc minh họa (**tên trường theo tài liệu chính thức**):

```json
{
  "mcpServers": {
    "example-readonly": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"],
      "env": {
        "API_TOKEN": "đọc từ biến môi trường, đừng hard-code trong repo"
      }
    }
  }
}
```

Nguyên tắc:

- Khóa tiêm bằng biến môi trường hoặc trình quản lý khóa
- Đổi cấu hình đi Git review (trừ secrets)

### 3. Khởi động lại hoặc nạp lại client

Sau khi sửa cấu hình MCP thường cần khởi động lại phiên Codex để danh sách server làm mới.

### 4. Kiểm chứng công cụ hiện diện

Trong Tác vụ yêu cầu rõ:

```text
Liệt kê các công cụ MCP hiện khả dụng (chỉ cần tên và một câu mô tả).
Rồi gọi một công cụ thử theo cách chỉ đọc và hiện kết quả.
Không thực hiện thao tác ghi.
```

### 5. Thử từng bước nhỏ

Chọn một Tác vụ thật nhưng rủi ro thấp, ví dụ:"Dùng MCP tra tiêu đề ticket #123, đừng đổi trạng thái."

## Chế độ xác thực

| Chế độ | Phù hợp |
|---|---|
| API Key / PAT | Phát triển cá nhân, xoay định kỳ |
| OAuth | Ủy quyền cấp user, phù hợp SaaS |
| Local không xác thực | Chỉ mock trên máy, đừng lộ ra mạng |

Khi thất bại kiểm: token hết hạn, biến môi trường chưa truyền vào, proxy công ty chặn.

## Checklist gỡ lỗi

| Hiện tượng | Nguyên nhân có thể |
|---|---|
| Danh sách công cụ trống | Sai đường cấu hình, process khởi động thất bại |
| Gọi hết thời gian | Mạng, VPN, server sập |
| Quyền bị từ chối | Scope token không đủ |
| Model không bao giờ gọi công cụ | Mô tả Tác vụ không yêu cầu; hoặc description công cụ không rõ |

## Phối hợp với Phê duyệt

Lần đầu gọi công cụ lạ, client có thể hiện xác nhận — đây là hành vi kỳ vọng. Đừng khuyến khích trong quy chuẩn nhóm"cho phép vĩnh viễn mọi thao tác ghi MCP".

## Nguồn tham chiếu

- Tài liệu cấu hình OpenAI Codex MCP
- Ví dụ server trên modelcontextprotocol.io

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Ghi chú tái Kiểm chứng:** Trang này mô tả trực tiếp cấu hình server MCP hiện tại, nạp lại và bước Kiểm chứng; các bước này rất nhạy với phiên bản và triển khai client, tạm chưa nên đánh `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
