---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / ứng dụng máy tính / Mobile; Codex trên máy tính và CLI; phần mở rộng IDE không hỗ trợ Plugin"
  checkedAt: "2026-08-26"
title: Tổng quan về Plugins
description: Tìm hiểu thành phần, nền tảng hỗ trợ, cách cài đặt và xác minh, cùng ranh giới tin cậy của Plugin.
locale: vi
source_locale: zh-CN
source_revision: "4efe5a8"
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: 2026-10-26
---

ChatGPT và Codex dùng chung danh mục Plugin công khai. Plugin kết hợp một nhóm khả năng liên quan thành quy trình có thể tìm kiếm và cài đặt; nó không tạo ra giao thức gọi công cụ mới.

![Minh họa: các gói mở rộng thắt nơ chạy trên đường ray tới nhiều máy trạm, một gói đang được mở, một gói được gỡ bỏ gọn gàng](/illustrations/plugins-overview.webp)

## Plugin có thể chứa những gì

| Thành phần | Vai trò | Người cài đặt cần kiểm tra |
|---|---|---|
| Skills | Các bước, tài liệu tham khảo và script có thể tái sử dụng | Hướng dẫn có phù hợp với tác vụ hiện tại không, script có đáng tin cậy không |
| Connectors | Kết nối với GitHub, Slack, Google Drive và các công cụ khác | OAuth scope, thao tác đọc/ghi, phạm vi dữ liệu bên ngoài |
| MCP servers | Định nghĩa công cụ, xác thực và trả về dữ liệu có cấu trúc | Nguồn máy chủ, danh sách công cụ, log và quyền |
| Browser extensions | Cung cấp khả năng trình duyệt cho quy trình cụ thể | Phạm vi truy cập trình duyệt và mức độ cần thiết |
| Hooks | Chạy lệnh hoặc công cụ MCP tại các thời điểm trong vòng đời tác vụ | Xem xét và tin cậy định nghĩa chính xác trước khi bật |
| Scheduled task templates | Cung cấp điểm khởi đầu tái sử dụng trên các nền tảng hỗ trợ tác vụ định kỳ | Tần suất, quyền, điều kiện dừng và bước con người rà soát |

## Khác với Skill và MCP thế nào

| Cơ chế | Câu hỏi chính | Ví dụ trong một bộ quy trình rà soát PR |
|---|---|---|
| Skill | Nên làm việc theo các bước nào? | Đọc diff, xác minh bằng chứng, sắp xếp theo mức rủi ro |
| MCP / Connector | Có thể gọi công cụ bên ngoài nào? | Đọc PR và bình luận trên GitHub |
| Hook | Kiểm tra ở thời điểm nào trong vòng đời? | Quét khóa bí mật sau khi ghi tệp |
| Plugin | Cài đặt và phân phối các khả năng đó cùng nhau thế nào? | “Bộ rà soát PR” của nhóm |

Plugin là lớp phân phối, không phải bước cuối cùng trong chuỗi thực thi. Xem sơ đồ tại [Bản đồ khả năng mở rộng](/vi/skills/capability-map/).

## Cài đặt và xác minh lần đầu

### ChatGPT Web / ứng dụng máy tính

1. Mở tab Plugins.
2. Xem nhà phát hành, mô tả và các khả năng đi kèm.
3. Cài đặt; nếu cần kết nối dịch vụ bên ngoài, hãy xem xét riêng phạm vi cấp quyền.
4. Xác minh bằng một tác vụ ít rủi ro trong Chat, Work hoặc Codex mới.

### Codex CLI

1. Nhập `/plugins` để mở trình duyệt Plugin.
2. Cài đặt từ marketplace đã cấu hình.
3. **Bắt đầu phiên mới**, rồi xác minh Skill hoặc công cụ được cài cùng gói.

Phần mở rộng IDE hiện không hỗ trợ Plugin. Không nên viết hướng dẫn khắc phục việc “không tìm thấy mục này trong IDE”; hãy dùng ứng dụng ChatGPT trên máy tính hoặc Codex CLI để quản lý Plugin.

## Prompt xác minh ít rủi ro

```text
Chỉ kiểm tra <plugin-name> vừa cài, không ghi dữ liệu:
1. Liệt kê Skills và công cụ liên quan đến Plugin này trong tác vụ hiện tại;
2. Cho biết từng công cụ chỉ đọc hay có thể gây tác động bên ngoài;
3. Thực hiện một lệnh gọi tối thiểu bằng dữ liệu thử nghiệm hoặc truy vấn chỉ đọc;
4. Báo cáo thành phần thực sự đã dùng và liệt kê những quyền vẫn cần con người xác nhận.
```

Nếu Plugin cần kết nối bên ngoài, lần xác minh đầu tiên không được gửi tin nhắn, thay đổi trạng thái, xóa dữ liệu hoặc ghi hàng loạt tệp.

## Quy trình áp dụng trong nhóm

1. **Kiểm kê thành phần:** liệt kê Skills, connector, MCP, phần mở rộng trình duyệt, Hooks và mẫu.
2. **Xác minh nguồn:** kiểm tra marketplace, kho mã, nhà phát hành và chính sách cập nhật.
3. **Cấp quyền tối thiểu:** thử bằng tài khoản kiểm thử và scope chỉ đọc.
4. **Thử nghiệm tách biệt:** dùng trước trong dự án phi production hoặc nhóm nhỏ.
5. **Rà soát Hook:** dùng `/hooks` để kiểm tra hash và hành vi của Hook đi kèm Plugin.
6. **Ghi rõ cách rút lui:** mô tả các bước tắt, gỡ cài đặt, hoàn tác và thu hồi OAuth.

## Những ranh giới không nên bỏ qua

- Cài đặt thành công không có nghĩa thành phần an toàn hoặc phù hợp với dữ liệu hiện tại.
- Plugin có thể nhắc bạn kết nối dịch vụ bên ngoài; cấp quyền là một bước riêng có rủi ro cao.
- Hook của Plugin chạy cùng các Hook phù hợp từ nguồn khác, không tự động thay thế Hook cũ.
- Quản trị viên workspace có thể kiểm soát Plugin và công cụ nào được phép dùng; danh mục cá nhân nhìn thấy không đồng nghĩa với phạm vi tổ chức cho phép.
- Mobile phù hợp để dùng Plugin đã có trên tài khoản; đừng giả định nó có giao diện quản lý đầy đủ.

## Khi nào chưa cần tạo Plugin

- Chỉ có một `SKILL.md` đơn giản, không cần kết hợp hoặc phân phối.
- Script cá nhân dùng một lần và vẫn đang thử nghiệm nhanh.
- Chính sách quyền và nâng cấp chưa ổn định.
- Người dùng mục tiêu chỉ làm việc trong phần mở rộng IDE.

Trước tiên hãy xác minh một Skill hoặc quy trình MCP đơn lẻ cho ổn định, rồi mới cân nhắc kết hợp và phân phối; cách này thường dễ rà soát hơn.

## Danh sách kiểm tra nghiệm thu

- [ ] Nền tảng mục tiêu hỗ trợ Plugin.
- [ ] Có thể truy xuất nhà phát hành và nguồn gốc.
- [ ] Đã xem xét kết nối bên ngoài và OAuth scope.
- [ ] Đã rà soát và tin cậy Hook của Plugin.
- [ ] Tác vụ tối thiểu chỉ đọc chạy thành công.
- [ ] Phiên mới tìm thấy Skill hoặc công cụ như dự kiến.
- [ ] Nhóm có hướng dẫn tắt, hoàn tác và thu hồi quyền.

## Nguồn chính thức

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
