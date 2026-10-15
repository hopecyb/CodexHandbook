---
legacyVerification:
  status: "verified"
  products: "Ứng dụng ChatGPT trên máy tính / Codex CLI / IDE; ChatGPT Web dùng công cụ MCP từ xa thông qua Plugin"
  checkedAt: "2026-08-25"
title: Tổng quan MCP
description: Tìm hiểu MCP client, máy chủ, công cụ, xác thực và ranh giới an toàn.
locale: vi
source_locale: zh-CN
source_revision: 98a0626
translation_status: draft
translated_at: "2026-09-20"
---

MCP biến mong muốn “mô hình cần dùng một khả năng bên ngoài” thành một lệnh gọi công cụ có cấu trúc. Nó phù hợp để kết nối tài liệu bên thứ ba, trình duyệt, Figma, hệ thống quản lý phiếu công việc hoặc dịch vụ nội bộ.

![Minh họa: trợ lý cắm vào bộ chia chung, các cáp chuẩn nối tới cơ sở dữ liệu, lịch, bảng công việc và ổ đám mây](/illustrations/mcp-overview.webp)

## Một chuỗi lệnh gọi

```text
Codex trong tác vụ
  -> MCP client (do Codex host cung cấp)
  -> Máy chủ MCP (tiến trình cục bộ hoặc dịch vụ từ xa)
  -> Hệ thống bên ngoài (tài liệu, thiết kế, phiếu công việc, API nội bộ)
  -> Kết quả có cấu trúc trả về tác vụ
```

| Thành phần | Chịu trách nhiệm | Không chịu trách nhiệm |
|---|---|---|
| Codex host | Đọc cấu hình, kết nối máy chủ, cung cấp công cụ cho Agent | Không định nghĩa quyền nghiệp vụ thay máy chủ |
| Máy chủ MCP | Định nghĩa công cụ, xác thực, tham số và kết quả có cấu trúc | Không tự động bảo đảm công cụ an toàn |
| Skill | Quy định khi nào và theo bước nào dùng công cụ | Không thiết lập kết nối mạng |
| Plugin | Kết hợp và phân phối Skills, connector, MCP cùng các khả năng khác | Không phải một giao thức công cụ khác |

## Các cách chạy máy chủ hiện được hỗ trợ

### STDIO

Codex khởi chạy một tiến trình cục bộ và giao tiếp qua đầu vào/đầu ra chuẩn. Cách này phù hợp với công cụ phát triển cục bộ và dịch vụ chỉ chạy trên máy hiện tại.

Rủi ro chính: tiến trình này kế thừa môi trường thực thi trên máy; cần xem xét lệnh, nguồn của các gói phụ thuộc và biến môi trường được chuyển tiếp.

### Streamable HTTP

Codex kết nối đến một địa chỉ từ xa. Tài liệu chính thức hiện tại xác nhận hỗ trợ Bearer token, OAuth và xác thực bằng phiên ChatGPT cho máy chủ bên thứ nhất đáng tin cậy.

Rủi ro chính: dịch vụ từ xa sẽ nhận tham số công cụ; phải kiểm tra TLS, danh tính, log, thời gian lưu giữ dữ liệu và quyền của công cụ.

## MCP, Skill và Plugin kết hợp thế nào

Ví dụ với tác vụ “kiểm tra phiếu công việc ưu tiên cao hằng tuần”:

| Lớp | Nội dung |
|---|---|
| MCP | Cung cấp các công cụ như `search_issues`, `get_issue` |
| Skill | Quy định điều kiện lọc, yêu cầu bằng chứng và định dạng báo cáo |
| Plugin | Đóng gói Skill, connector và định nghĩa MCP để nhóm cài đặt |
| Scheduled task | Chạy tác vụ đã được kiểm chứng vào thời điểm cố định |

Đây là các trách nhiệm độc lập, không phải những nấc nâng cấp từ thấp lên cao. Xem đầy đủ mối quan hệ tại [Bản đồ khả năng mở rộng](/vi/skills/capability-map/).

## Khi nào nên kết nối MCP

| Nên dùng | Chưa cần dùng |
|---|---|
| Cần tra cứu lặp lại cùng một hệ thống bên ngoài | Chỉ cần tra cứu một trang web công khai một lần |
| Cần tham số và kết quả công cụ có cấu trúc | Thao tác với tệp trong kho mã đã đủ |
| Cần OAuth hoặc kiểm soát công cụ chi tiết | Chỉ có giao diện ghi quyền cao và không có môi trường thử nghiệm |
| Nhóm cần dùng chung kết nối một cách thống nhất | Không thể kiểm tra nguồn gốc máy chủ |

## Các mức độ an toàn

1. **Thử nghiệm chỉ đọc:** dùng tài liệu công khai hoặc tenant thử nghiệm, chỉ bật công cụ truy vấn.
2. **Nhóm xác minh:** giới hạn dự án, vai trò và allowlist công cụ; ghi nhận lỗi và thời gian chạy.
3. **Ghi có giới hạn:** chỉ ghi trong phạm vi nhỏ có thể hoàn tác, vẫn yêu cầu phê duyệt của con người.
4. **Vận hành có quản trị:** có thể thu hồi quyền, kiểm tra cấu hình, che dữ liệu nhạy cảm trong log và tách biệt theo môi trường.

Đừng đưa token vào prompt, Git hoặc HTTP header tĩnh. Ưu tiên OAuth, `bearer_token_env_var` hoặc chuyển tiếp biến môi trường.

## Danh sách kiểm tra trước khi kết nối

- [ ] Có thể kiểm tra nguồn gốc, phiên bản và lệnh khởi chạy máy chủ.
- [ ] Danh sách công cụ đã phân biệt thao tác đọc và ghi.
- [ ] Dùng tenant thử nghiệm hoặc tài khoản quyền tối thiểu.
- [ ] Đã rõ tham số và kết quả nào sẽ xuất hiện trong log từ xa.
- [ ] Thao tác ghi có quy trình phê duyệt, hoàn tác và kiểm toán.
- [ ] Nhóm biết cách tắt máy chủ và thu hồi quyền.

## Bước tiếp theo

Đến [Kết nối máy chủ MCP](/vi/skills/mcp/connect-an-mcp-server/), trước tiên kết nối một máy chủ chỉ đọc rồi xác minh bằng `codex mcp list` và `/mcp`.

## Nguồn chính thức

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
