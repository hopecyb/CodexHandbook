---
title: Tổng quan Plugins
description: Đóng gói Skills, MCP và connector ứng dụng — tiện nhóm phân phối và quản lý thống nhất.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Plugin có thể xem như một gói cài: nó đóng một nhóm năng lực mở rộng đã cấu hình sẵn để người khác cài trực tiếp.

**Plugin(plugin/connector)** đóng gói Skill, MCP server, tích hợp ứng dụng... thành đơn vị **cài được, cập nhật được, quản trị được** — đặc biệt phù hợp"một người cấu hình xong, cả nhóm tái dùng".

## Khác biệt cốt lõi

| Dùng riêng | Qua Plugin |
|---|---|
| Copy thủ công thư mục Skill | Cài/nâng cấp một lần |
| Mỗi người cấu hình MCP JSON riêng | Server và mô tả Quyền sẵn |
| Tài liệu rải rác | Nhà phát hành cung cấp danh sách và ghi chú phiên bản |

Plugin thuộc **lớp phân phối và tổ hợp**. Năng lực bản thân vẫn nằm ở Skill, MCP, connector — xem [Bản đồ năng lực mở rộng](/skills/capability-map/).

## Khác biệt Plugin, Skill, MCP

Có thể xem bản rút gọn:

- **Skill**: nói với Codex"làm theo bước nào"
- **MCP**: nói với Codex"có thể gọi những công cụ ngoài nào"
- **Plugin**: đóng gói các thứ trên cho tiện cài và quản trị

Nhiều nhầm lẫn đến từ coi ba lớp này là cùng một thứ.

## Thành phần điển hình

```text
Gói Plugin
├── Skills(tùy chọn)
├── Định nghĩa MCP server(tùy chọn)
├── Connector ứng dụng / quy trình OAuth(tùy chọn)
└── Metadata: phiên bản, tuyên bố Quyền, changelog
```

## Khi nào dùng Plugin

| Dùng Plugin | Không dùng Plugin |
|---|---|
| Nhóm cài thống nhất gói tăng cường Figma/Linear/GitHub | Script nhỏ cá nhân một lần |
| Cần quản lý phiên bản và rollback | Chỉ một `SKILL.md` là đủ |
| Doanh nghiệp chỉ cho phép mở rộng whitelist | Prototype giai đoạn thử |

## Khi nào cần quan tâm Plugin

- Chỉ học cá nhân, tự viết vài Skill: có thể tạm để sau
- Cần phát thống nhất một bộ năng lực mở rộng cho nhóm: nên bắt đầu quan tâm Plugin

Plugin chủ yếu giải"**phân phối và quản trị**"— không phải thứ bắt buộc lần đầu dùng Codex.

## Cài và quản lý (khái niệm)

1. Chọn Plugin từ **marketplace chính thức hoặc danh sách nhóm phê duyệt**
2. Đọc mô tả Quyền: đọc repo nào, truy cập SaaS nào
3. Sau cài khởi động lại phiên, Kiểm chứng danh sách công cụ và Skill
4. Cập nhật định kỳ; phiên bản lớn thử trước trên repo staging

Nút và lệnh cụ thể lấy UI hiện tại của Desktop App / CLI làm chuẩn.

## Hiểu lầm thường gặp

### 1. Cài Plugin rồi không đồng nghĩa tự động an toàn

Plugin chỉ phân phối năng lực tiện hơn — không có nghĩa Quyền tự nhiên an toàn. Bạn vẫn phải xem:

- Nó truy cập được gì
- Nó có thay bạn thực hiện hành động ngoài không
- Nguồn có đáng tin không

### 2. Cài được là đáng cài hết

Chỉ những mở rộng nhóm bảo trì, thu hồi, kiểm toán được mới phù hợp bật lâu dài.

## Bảo mật và riêng tư

- Chỉ cài nguồn đáng tin; review OAuth scope mà Plugin xin
- Phân biệt Quyền"đọc bản thiết kế"với"gửi tin hộ"
- Khi nghỉ việc hoặc chuyển vai thu hồi ủy quyền connector
- Cộng với [Quyền và Phê duyệt](/guide/foundations/permissions-and-approvals/) — đừng giả định Plugin tự mang bảo mật

## So với Claude Code / hệ sinh thái khác

"Plugin"ở các sản phẩm khác không hoàn toàn cùng nghĩa. Khi so hãy xem: **đóng gói gì, mô hình Quyền, có mã nguồn mở để kiểm toán không** — xem [đối chiếu tính năng](/guide/reference/feature-comparison/) và KimYx0207 CX-14 (sự kiện cần tái Kiểm chứng).

## Lỗi thường gặp

- Mỗi Skill nhỏ cũng làm một Plugin — chi phí bảo trì nổ
- Cài xong không bao giờ cập nhật, lỡ bản vá bảo mật
- Bật Plugin thử nghiệm trên repo production

## Nguồn tham chiếu

- Tài liệu OpenAI Codex Plugins
- KimYx0207 CX-07; stormzhang `23-plugins.md`

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App / CLI  
**Ghi chú tái Kiểm chứng:** OpenAI Help đã xác nhận Plugin là container đóng gói Skills, Apps và app templates, nhưng trang này vẫn viết quy trình cài, nâng cấp và quản trị quá cụ thể, vượt căn cứ công khai ổn định hiện có.  
**Kiểm chứng gần nhất:** 2026-07-26
