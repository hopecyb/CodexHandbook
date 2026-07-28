---
title: Gỡ lỗi kết nối MCP
description: Các bước điều tra hệ thống khi MCP server không khởi động, công cụ hết thời gian hoặc kết quả bất thường.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP đưa hệ thống ngoài vào Codex. Khi thất bại thường có ba loại: **process không lên**, **xác thực sai**, **logic công cụ hoặc hết thời gian**. Trang này đưa thứ tự kiểm, tránh cứ sửa cấu hình thử vận may.

## Nội dung trang này

- Cách tái hiện tối thiểu vấn đề MCP
- Checklist đối chiếu nhật ký và cấu hình
- Khi nào nghi triển khai server chứ không phải Codex

Trang liên quan: [Tổng quan MCP](/skills/mcp/mcp-overview/) · [Nối máy chủ MCP](/skills/mcp/connect-an-mcp-server/)

## Quy trình phân loại

```text
1. Server có khởi động riêng trong terminal không?
2. Cú pháp và đường dẫn JSON/TOML cấu hình đúng chưa?
3. Biến môi trường có hiện trong process MCP không?
4. Phiên Codex đã khởi động lại để nạp cấu hình mới chưa?
5. Lời gọi một công cụ có hết thời gian / sai tham số không?
```

## Khởi động thất bại

| Mục kiểm | Ghi chú |
|---|---|
| Đường lệnh | `npx`, `uvx`, đường tuyệt đối có trong PATH không |
| Phiên bản dependency | Node/Python có thỏa yêu cầu MCP server không |
| Chạy thủ công | Copy command + args trong cấu hình rồi chạy trong shell |
| Cách truyền tải | stdio vs HTTP/SSE có khớp tài liệu không |

## Xác thực thất bại

- API key có tiêm qua biến môi trường không (không ghi vào repo)
- MCP kiểu OAuth có hết hạn cần ủy quyền lại không
- Proxy công ty có chặn MCP ra ngoài không

Chỉ mục biến môi trường: [biến môi trường](/guide/reference/environment-variables/)

## Gọi công cụ bất thường

| Hiện tượng | Nguyên nhân có thể |
|---|---|
| Tool not found | Phiên bản server và schema client không khớp |
| Timeout | API ngoài chậm; tăng timeout hoặc tối ưu truy vấn |
| Kết quả trống | Sai tên tham số; xem nhật ký MCP server |
| Ký tự loạn | Encoding không phải UTF-8 |

Trong Prompt yêu cầu Agent **in cấu trúc trả về của công cụ** (đã ẩn danh) để gỡ lỗi.

## Thói quen gỡ lỗi an toàn

- Dùng API key **tenant thử**, không dùng production
- Nhật ký gỡ lỗi đừng dán nguyên token vào chat
- Nghi MCP độc hại thì ngắt ngay và xoay khóa

Chỉ mục lỗi: [tham chiếu lỗi và thông báo](/guide/reference/error-reference/)

## Lỗi thường gặp

- Sửa cấu hình không khởi động lại phiên Codex
- IDE và CLI mỗi bên một cấu hình MCP lệch nhau
- Mức nhật ký MCP server mãi để debug rồi nộp screenshot có khóa

## Checklist nghiệm thu

- [ ] Khởi động độc lập MCP server trong terminal được
- [ ] Gọi thành công ít nhất một công cụ chỉ đọc
- [ ] Ghi template cấu hình MCP chuẩn của nhóm

## Nguồn tham chiếu
- Đặc tả Model Context Protocol và hướng dẫn gỡ lỗi
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI / IDE / App  
**Ghi chú tái Kiểm chứng:** Các bước điều tra trang này phụ thuộc client Codex hiện tại nạp, hiện và gọi công cụ MCP thế nào; phần này rủi ro thay đổi cao, cần viết lại theo tài liệu hiện hành.  
**Kiểm chứng gần nhất:** 2026-07-26
