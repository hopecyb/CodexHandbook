---
title: Cài đặt tiện ích IDE
description: Lối vào cấu hình mô hình, phê duyệt, ngữ cảnh và hành vi tiện ích trong IDE.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cài đặt tiện ích IDE nối **sở thích cá nhân** với **quy tắc dự án**: chọn mô hình nào, phê duyệt chặt đến đâu, có tự kèm tệp mở không, v.v. Khớp với [cơ bản cấu hình](/guide/customization/configuration/config-basics/) toàn cục; trang này nghiêng về tùy chọn thường gặp trong trình soạn thảo.

## Nội dung trang

- Phân công cài đặt IDE vs cấu hình người dùng vs `AGENTS.md`
- Mục nhà phát triển chỉnh nhiều nhất
- Nhóm đồng bộ giá trị mặc định thế nào

## Các cài đặt này thực sự quản gì

Cài đặt IDE gần hơn với: **thói quen mặc định khi Codex phối hợp với bạn trong trình soạn thảo**.

Nó xử lý các câu hỏi kiểu:

- Mặc định dùng mô hình nào
- Mặc định thắt phê duyệt chặt đến đâu
- Mặc định có tự mang tệp hiện tại, vùng chọn vào không

Nó không định nghĩa bản thân quy tắc dự án, mà quyết định khi dùng trong trình soạn thảo có thuận tay, có ổn định không.

## Tầng cấu hình (ôn lại)

| Tầng | Ví dụ | Ưu tiên |
|---|---|---|
| Chính sách quản lý tổ chức | Cấm nới Sandbox | Cao nhất |
| `AGENTS.md` / cấu hình dự án | Lệnh kiểm thử, ước định thư mục | Cao |
| UI cài đặt tiện ích IDE | Mô hình mặc định, bố cục bảng | Trung bình |
| Prompt tác vụ một lần | «Lần này không lên mạng» | Cấp tác vụ |

Xem [Phạm vi và ưu tiên](/guide/customization/agents-md/scope-and-precedence/)

## Hiểu nhầm thường gặp

### Cài đặt IDE không phải quy chuẩn dự án

Nhiều người nhầm «mặc định trong trình soạn thảo của tôi» thành «dự án này phải làm vậy».

Cách phân rõ hơn:

- Cài đặt trình soạn thảo nghiêng trải nghiệm cá nhân
- `AGENTS.md` và cấu hình dự án nghiêng đồng thuận nhóm

Hai thứ liên quan, nhưng không cùng một việc.

### Tự kèm ngữ cảnh — không phải càng nhiều càng tốt

Tự mang tệp hiện tại, vùng chọn, tab mở đúng là tiện; nhưng tự nhồi quá nhiều cũng làm nhạt trọng tâm tác vụ.

Tiêu chuẩn thực tế hơn là đủ dùng — không cần theo đuổi «mở càng nhiều càng mạnh».

## Cài đặt thường chỉnh (khái niệm)

### Mô hình và suy luận

Ảnh hưởng tốc độ phản hồi và chất lượng tác vụ phức tạp. Dự án nhóm có thể ghi trong README «mức mô hình khuyến nghị», tránh mỗi người mặc định khác khiến khó tái hiện vấn đề.

### Phê duyệt và Sandbox

Tương ứng [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/):

- Người mới: giữ mặc định hoặc chặt hơn
- Kho đáng tin: nới thận trọng, và không trộn với thư mục secrets production

CLI và IDE nên dùng **cùng đường cơ sở an toàn**; CLI xem [Cấu hình CLI](/guide/cli/configuration/).

### Hành vi ngữ cảnh

Một số tiện ích có thể cấu hình:

- Có tự gồm tệp / vùng chọn hiện tại không
- Có đọc `AGENTS.md` không
- Tùy chọn liên quan cửa sổ ngữ cảnh (theo phiên bản)

Quá nhiều ngữ cảnh tự động tăng nhiễu; xem [Giữ ngữ cảnh tập trung](/guide/context/keep-context-focused/).

### Đăng nhập và tài khoản

Dùng chung với [Đăng nhập và xác thực](/guide/getting-started/sign-in-and-authentication/); đổi tài khoản rồi khởi động lại phiên tiện ích.

## Đồng bộ nhóm

1. Mục **phải thống nhất** viết vào kho (`AGENTS.md` + cấu hình dự án tùy chọn)
2. **Thói quen cá nhân** để trong cài đặt IDE, không commit vào Git
3. Onboarding thành viên mới: đối chiếu [Cài đặt IDE](/guide/ide/installation/) kiểm tra phiên bản tiện ích

## Lần đầu xem những gì

Lần đầu cấu hình tiện ích IDE, có thể chỉ xem ba nhóm:

1. Mô hình và mức suy luận
2. Liên quan phê duyệt / an toàn
3. Liên quan ngữ cảnh tự động

Chỉnh xuôi ba nhóm này gần như phủ hầu hết vấn đề dùng thực tế.

## Xử lý sự cố

| Hiện tượng | Kiểm tra |
|---|---|
| Cài đặt không có hiệu lực | Có bị chính sách tổ chức ghi đè không; có cần tải lại cửa sổ không |
| Hành vi khác CLI | Đối chiếu [Tham chiếu cấu hình](/guide/reference/configuration-reference/) |
| Tiện ích không phản hồi | [Xử lý sự cố IDE](/guide/ide/troubleshooting/) |

Cài đặt IDE giống «bạn phối hợp với Codex trong trình soạn thảo thế nào»; quy tắc dự án viết ra sao là tầng khác — đừng trộn.

## Nguồn tham khảo

- OpenAI Codex IDE settings
- `18-config.md`, `09-ide.md` của stormzhang

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** IDE  
**Ghi chú tái kiểm:** Trang này xoay quanh mục cài đặt tiện ích IDE, ngữ cảnh tự động, sở thích phê duyệt và ghi đè tổ chức, nhưng lối vào và tên gọi dễ đổi theo phiên bản tiện ích; hiện thiếu tài liệu cài đặt chính thức đủ mạnh để chống đỡ cả trang.  
**Kiểm chứng gần nhất:** 2026-07-26
