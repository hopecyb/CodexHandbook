---
title: Rủi ro Plugin và MCP
description: "Mở rộng truy cập được gì, đội phê duyệt và giám sát thế nào — góc nhìn rủi ro thống nhất cho Skills, Plugin và MCP."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Plugin** và **máy chủ MCP** nối Codex với hệ thống ngoài: ticket, cơ sở dữ liệu, API nội bộ. Nhiều năng lực hơn nghĩa là bề mặt [mô hình mối đe dọa](/guide/team-enterprise/security/threat-model/) rộng hơn cho exfiltration và quyền vượt mức. Đọc kèm [Tổng quan MCP](/skills/mcp/mcp-overview/) và [Tổng quan Plugin](/skills/plugins/plugins-overview/).

Ngày đầu không cần định nghĩa hoàn hảo. Điểm trung tâm: nối Codex ra ngoài vừa tăng năng lực vừa tăng rủi ro.

Dù gọi là Plugin hay MCP, hãy hỏi:

- Nó đọc được gì
- Nó ghi được gì
- Ai phê duyệt
- Sự cố lần theo thế nào

## Trang này sẽ nói gì

- Phân loại rủi ro mở rộng
- Danh sách phê duyệt và ghim phiên bản
- Cô lập khi debug và sự cố

## Phân loại rủi ro

| Loại | Ví dụ | Kiểm soát |
|---|---|---|
| Đọc dữ liệu | MCP đọc DB khách hàng | Tài khoản chỉ đọc, quyền theo hàng |
| Ghi dữ liệu | Tự đóng ticket, đổi cấu hình | Phê duyệt của người, xác nhận kép |
| Mạng | Outbound tùy ý | Danh sách cho phép egress |
| Chứng chỉ | Token OAuth trên đĩa | Quản lý secrets, token ngắn hạn |
| Chuỗi cung ứng | Can thiệp cập nhật máy chủ bên thứ ba | Ghim phiên bản, khóa hash |

## Quy trình phê duyệt đội (khuyến nghị)

```text
Yêu cầu (mục tiêu, lớp dữ liệu, quyền) → review bảo mật/kiến trúc
    → đưa vào repo «danh sách được phê duyệt» hoặc thư mục nội bộ
    → ghim phiên bản + người sở hữu
    → review lại theo quý hoặc khi nâng cấp lớn
```

MCP thí nghiệm cá nhân **không nên** chia sẻ token repo production.

## Thực hành tối thiểu

1. **Deny mặc định** cài MCP từ xa không có trong danh sách
2. **MCP cục bộ** vẫn có thể đọc cả đĩa — dùng user OS riêng hoặc container
3. **Log**: tên công cụ và tóm tắt tham số (đã làm sạch) — xem [Hook kiểm toán](/skills/hooks/hooks-examples/)
4. **Skill vs MCP**: Skill mô tả quy trình, MCP thực thi gọi ngoài — hợp quyền; áp dụng chính sách chặt hơn

## Lỗi thường gặp

- «Marketplace chính thức» = «đã review bảo mật»
- Dev và prod dùng chung một app OAuth MCP
- `DEBUG=*` khi debug đổ token vào log CI

## Hiểu nhầm thường gặp

### 1. Plugin vs MCP còn mơ hồ — sớm có quan trọng không?

Đầu tiên không nhiều.

Cả hai đều nối Codex với hệ thống ngoài — quyền và rủi ro áp dụng cho cả hai.

### 2. Vì sao «chỉ đọc trước»?

Chỉ đọc thường nghĩa là:

- Thí điểm dễ hơn
- Chứng minh giá trị dễ hơn
- Bán kính nổ nhỏ hơn khi lỗi

### 3. Cài xong rồi quên?

Dù tính năng tiện vẫn cần:

- Nó truy cập dữ liệu nào
- Có ghi ngược không
- Chứng chỉ quản lý thế nào

Với mở rộng ngoài: quyền và ranh giới trước sức mạnh tính năng.

## Checklist nghiệm thu

- [ ] Có danh sách phê duyệt bằng văn bản hoặc quy trình tương đương
- [ ] Mỗi MCP production có người sở hữu và phân loại dữ liệu
- [ ] Thống nhất với chính sách [Bảo mật Skill](/skills/security/)

## Nguồn tham chiếu
- [Gỡ lỗi MCP](/skills/mcp/debugging-mcp/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / App / Cloud  
**Cơ sở kiểm chứng:** Tài liệu plugin Help Center OpenAI vẫn nhấn mạnh năng lực app/plugin bị ràng buộc bởi truy cập theo vai trò, kiểm soát hành động, xác nhận, ranh giới domain/nguồn và quyền nguồn bên dưới; map ở đây thành góc nhìn rủi ro thống nhất Plugin/MCP với chỉ đọc trước, ghim phiên bản, người sở hữu và danh sách phê duyệt.  
**Kiểm chứng gần nhất:** 2026-07-26
