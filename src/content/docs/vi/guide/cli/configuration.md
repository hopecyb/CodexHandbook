---
title: Cấu hình CLI
description: Mô hình, Sandbox, phê duyệt và MCP — thống nhất hành vi Codex trong terminal.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Cấu hình CLI quyết định **mô hình mặc định, thư mục làm việc, độ chặt phê duyệt, máy chủ MCP**, v.v. Khớp khái niệm với [cơ bản cấu hình](/guide/customization/configuration/config-basics/); trang này nghiêng về mục người dùng terminal hay chỉnh.

## Nội dung trang

Nhiều người lần đầu tiếp xúc cấu hình CLI tưởng nó là «một bảng cài đặt nâng cao». Điều đó dễ dẫn tới hai hiểu nhầm:

- Nghĩ không cấu hình cũng được — kết quả mỗi lần khởi phải chọn lại cùng một bộ
- Nghĩ cấu hình càng nhiều càng chuyên nghiệp — kết quả nhồi sở thích cá nhân, quy tắc nhóm, thử tạm vào một chỗ, sau khó lần

Ở đây chủ yếu phân rõ: **mục nào đáng cố định lâu dài, mục nào chỉ nên đổi tạm.**

## Cấu hình CLI quản gì

Có thể hiểu cấu hình CLI là «thói quen làm việc mặc định của Codex trong terminal».

- Cấu hình mô hình: quyết định mặc định nhờ ai làm việc
- Sandbox và phê duyệt: quyết định mặc định nó làm được tới đâu, cần bạn gật đầu ở bước nào
- Thư mục làm việc: quyết định mặc định nó làm trong dự án nào
- MCP và mở rộng: quyết định mặc định nó còn mượn được năng lực ngoài nào

Không cấu hình gì, Codex vẫn làm việc được; chỉ là bạn sẽ lặp lại cùng lựa chọn thường xuyên hơn.

## Cấu hình để đâu

| Tầng | Công dụng |
|---|---|
| Cấp người dùng | Mặc định cá nhân, xuyên dự án |
| Cấp dự án | Chiến lược nhóm dùng chung (cần rà trước khi commit) |
| Biến môi trường | CI tiêm khóa và công tắc |

**Đường dẫn và tên tệp** đổi theo phiên bản CLI — lấy theo [tài liệu chính thức](https://developers.openai.com/codex). Thường là `config.toml` hoặc tệp tương đương dưới thư mục người dùng.

## Hiểu nhầm thường gặp

### Không phải mọi cấu hình đều nên viết vào dự án

Nhiều người mới trộn «mô hình mặc định tôi thích», «đường dẫn trên máy tôi», «chiến lược phê duyệt cả nhóm phải tuân» vào một chỗ.

Cách phân rõ hơn:

- Sở thích cá nhân lâu dài → cấp người dùng
- Trong kho này mọi người nên thống nhất → cấp dự án
- Chỉ tiêm tạm trong CI, script hoặc một lần chạy → biến môi trường

### Cấu hình không bằng quyền mở ngay

Bạn viết một chiến lược vào cấu hình không nghĩa mọi thao tác sau đó đều qua vô điều kiện. Hành vi thực còn chịu lối vào sản phẩm, môi trường chạy, chính sách quản lý và nội dung tác vụ.

Vậy cấu hình giống xu hướng mặc định, không phải đặc quyền vĩnh viễn.

## Mục thường chỉnh

### Mô hình mặc định và cường độ suy luận

Ảnh hưởng tốc độ, chi phí và tỷ lệ thành công tác vụ phức tạp. Kịch bản script nên **cố định mô hình** để dễ so nhật ký.

### Sandbox và mạng

| Ý đồ cài đặt | Ghi chú |
|---|---|
| Chặt | Phù hợp kho không đáng tin |
| Chuẩn | Phát triển hàng ngày |
| Nới | Chỉ môi trường cá nhân đáng tin, và khớp chính sách công ty |

Khái niệm: [Sandbox và mạng](/guide/foundations/sandbox-and-network/)

### Chiến lược phê duyệt

CLI có thể hỏi trước khi chạy shell, ghi đĩa, lên mạng. Nhóm nên ghi trong `AGENTS.md` lệnh nào dự kiến tự qua — chỉ hiệu lực khi khớp hành vi sản phẩm thực.

### Danh sách máy chủ MCP

Dùng chung cấu hình với [Kết nối máy chủ MCP](/skills/mcp/connect-an-mcp-server/); đổi rồi khởi lại phiên.

## Một thứ tự cấu hình đủ dùng

Mới dùng không cần nghiên cứu hết mọi trường ngay. Theo thứ tự này sẽ nhẹ hơn nhiều:

1. Cố định mô hình bạn dùng nhiều nhất trước
2. Xác nhận thư mục làm việc mặc định có phải dự án hiện tại không
3. Quyết định phê duyệt và Sandbox bảo thủ hay nới
4. Cuối cùng mới thêm MCP, tự động hóa hoặc mở rộng nâng cao

Xếp vậy vì hai mục trước nghiêng dùng hàng ngày, hai mục sau nghiêng kiểm soát rủi ro.

## Đồng bộ dự án với CLI

Tránh «trong App chạy được, trên CI thất bại»:

1. Trong README ghi phiên bản CLI tối thiểu khuyến nghị
2. Cấu hình cấp dự án chỉ để mục **đồng thuận nhóm**
3. Khóa bí mật không bao giờ vào kho

## Xử lý sự cố

| Hiện tượng | Kiểm tra |
|---|---|
| Cấu hình không có hiệu lực | Có sửa sai tầng không; có cần khởi lại không |
| MCP chưa tải | Cú pháp JSON/TOML, đường dẫn |
| Phê duyệt quá thường xuyên | Chế độ Sandbox và allowlist |

Thêm: [Xử lý sự cố CLI](/guide/cli/troubleshooting/)

Coi cấu hình CLI là «thói quen làm việc mặc định» là được — chỉ cố định những thứ bạn **gần như mỗi lần đều chọn lại**. Năng lực nâng cao bổ sung sau cũng kịp.

## Nguồn tham khảo

- OpenAI Codex CLI configuration
- `18-config.md` của stormzhang

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI  
**Căn cứ kiểm chứng:** Tài liệu cấu hình hiện tại trên OpenAI Help Center vẫn dùng `~/.codex/config.toml` và `~/.codex/.env` làm ví dụ có thể kiểm; trang này đồng thời tránh gắn tên trường cụ thể, chỉ tóm tắt ý đồ cấu hình CLI thường gặp, phân công tầng và biên rủi ro — nên gắn `verified` như trang khái niệm.  
**Kiểm chứng gần nhất:** 2026-07-26
