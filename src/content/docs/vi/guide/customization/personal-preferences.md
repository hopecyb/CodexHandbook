---
title: Sở thích cá nhân
description: Cấu hình cấp người dùng, mô hình mặc định và thói giao diện — tránh làm bẩn ước định nhóm trong kho.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

**Sở thích cá nhân** là cài đặt hiệu lực xuyên dự án trên máy bạn: mô hình mặc định, chủ đề, thói phê duyệt, đường dẫn Skill cá nhân, v.v. Khác `AGENTS.md` trong kho, sở thích cá nhân **không nên** giả định đồng đội giống vậy.

## Nội dung

- Cái gì nên đặt tầng cá nhân, cái gì nên đặt tầng dự án
- Phối hợp với [Profile](/guide/customization/configuration/profiles/) để chuyển tình huống thế nào
- Tránh cài đặt lỏng cá nhân rò vào kho nhóm

Tổng quan ưu tiên: [Cấu hình cá nhân hóa](/guide/customization/) · [Phạm vi và ưu tiên](/guide/customization/agents-md/scope-and-precedence/)

## Vì sao cần tách tầng này

Nhiều người hay trộn những thứ này:

- Tôi cá nhân thích dùng thế nào
- Kho này yêu cầu làm thế nào
- Công ty hoặc nhóm bắt buộc làm thế nào

Nhưng ba loại không tách thì sau dễ:

- Máy bạn rất thuận, đồng đội hoàn toàn tái hiện không được
- Bạn tưởng quy tắc đã hiệu lực, thật ra chỉ máy bạn đang đỡ
- Bạn mang cài đặt lỏng vào dự án nghiêm ngặt hơn

## Nội dung phù hợp đặt ở sở thích cá nhân

| Nội dung | Ví dụ |
|---|---|
| Mô hình mặc định và mức suy luận | Hiệu năng máy cá nhân và gói |
| Chủ đề UI, font, thông báo | [Cài đặt](/guide/desktop-app/settings/) App máy tính |
| MCP cá nhân (công cụ riêng) | DB cục bộ chỉ đọc (thận trọng ủy quyền) |
| Đường dẫn thư viện Skill cá nhân | Không xung đột Plugin nhóm |
| Alias terminal, thói thư mục khởi động `codex` | Xem [Cấu hình CLI](/guide/cli/configuration/) |

## Nội dung nhóm không nên chỉ đặt tầng cá nhân

- Phong cách mã, lệnh kiểm thử, cấu trúc thư mục → **`AGENTS.md` dự án**
- Chiến lược Sandbox bắt buộc → **cấu hình dự án hoặc quản trị tổ chức**
- Yêu cầu tuân thủ kho khách hàng → **tài liệu + CI**, không dựa bộ nhớ cá nhân

## Thực hành khuyến nghị

1. **Tách Profile công việc / cá nhân**: dự án khách dùng Profile nghiêm, dự án luyện có thể lỏng
2. **Vào kho mới đọc quy tắc dự án trước**, rồi quyết có tạm phủ mặc định cá nhân không
3. **Dọn định kỳ** MCP và Skill cá nhân, gỡ nguồn bên thứ ba không còn dùng
4. Đổi máy hoặc cài lại thì xuất danh sách cấu hình (không gồm giá trị khóa)

## Hiểu lầm thường gặp

### 1. Cách làm bạn quen hàng ngày chưa chắc phù hợp đặt mặc định toàn cục

Nếu thói mặc định khá lỏng, sang dự án khách hoặc dự án nhóm có thể không phù hợp.

### 2. Sở thích cá nhân và quy tắc dự án gần giống nhau?

Khác nhiều.  
Sở thích cá nhân là “tôi quen vậy”; quy tắc dự án là “kho này mọi người nên cố vậy”.

### 3. Chỉ nhìn máy mình ổn chưa đủ để phán cài đặt này hợp lý

Chuẩn phù hợp hơn:

- Không làm bẩn kho
- Không phụ thuộc giá trị mặc định chỉ mình bạn biết
- Chuyển sang dự án nghiêm không gây hại nhầm

## Phán đoán có nên đặt tầng cá nhân

Khi chưa chắc một cài đặt có nên đặt tầng cá nhân, tự hỏi:

1. Có phải thói quen chỉ mình tôi quan tâm?
2. Nó có ảnh hưởng người khác tái hiện kết quả không?
3. Nó có phù hợp mang vào mọi dự án không?

Nếu câu 2 hoặc 3 nghiêng nguy hiểm, đừng dễ đặt mặc định toàn cục.

Sở thích cá nhân để bạn dùng vừa tay hơn, không thay lưới quy tắc nhóm, cũng đừng mang cài đặt lỏng một cục vào mọi dự án.

## Với tính năng bộ nhớ

Nếu sản phẩm có «bộ nhớ» hoặc sở thích bền, xem [Bộ nhớ và ngữ cảnh bền](/guide/customization/memories-and-persistent-context/). Bộ nhớ phù hợp thói ổn định; **ràng buộc đặc thù dự án vẫn lấy tệp kho làm chuẩn**.

## Lỗi thường gặp

- Viết cứng API key công ty trong cấu hình cá nhân
- Tự phê duyệt shell toàn cục cá nhân khi xử lý mã khách hàng
- Đồng đội clone kho rồi phàn nàn «quy tắc không hiệu lực» — quy tắc chưa bao giờ được commit

## Danh sách nghiệm thu

- [ ] Nói được mỗi một ví dụ của ba tầng cá nhân vs dự án vs tổ chức
- [ ] Ít nhất cấu hình Profile nghiêm cho một dự án khách
- [ ] Trong kho không có khóa cá nhân

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với các chương chỉ thị dự án, Profiles, phân công cài đặt và ranh giới an toàn đã kiểm chứng trong sổ tay; trang này chỉ nói nguyên tắc phân tầng ổn định “thói quen cá nhân không nên làm bẩn quy tắc kho nhóm”, không viết giao diện cài đặt hiện tại của một client thành hợp đồng cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
