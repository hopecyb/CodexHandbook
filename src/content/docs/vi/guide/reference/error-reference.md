---
title: Tham chiếu lỗi
description: "Chỉ mục học lỗi thường gặp, mã thoát và dạng thất bại — trỏ tới xử lý sự cố, không thay hỗ trợ chính thức."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nhiều người cố định một dòng tiếng Anh rồi đoán. Phân loại vấn đề trước thường hiệu quả hơn.

Quyết định nó giống **auth, quyền, môi trường, mạng hay logic Tác vụ**. Trang này tóm tắt thông báo thường gặp và bước tiếp — không phải từ điển lỗi đầy đủ; hành vi mới nhất = tài liệu chính thức và đầu ra client.

## Cách đọc một lỗi

1. Lớp từ khóa: auth, quyền, môi trường, mạng, ngữ cảnh
2. Bước: khởi động, cài, chạy, push, đầu ra
3. Nhảy tới trang chủ đề tương ứng

Thường nhanh hơn đoán.

Chỉ mục toàn cục: [Xử lý sự cố](/guide/reference/troubleshooting/)

## Xác thực và tài khoản

| Thông báo hoặc triệu chứng | Nguyên nhân có thể | Bước tiếp |
|---|---|---|
| Authentication failed / 401 | Token hết hạn, chưa đăng nhập | [Đăng nhập và xác thực](/guide/getting-started/sign-in-and-authentication/) |
| Chính sách tổ chức | Org tắt tính năng hoặc mô hình | Liên hệ admin; [Tài khoản và truy cập](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | Quá thường xuyên hoặc hết quota | Thử lại sau; kiểm mức dùng gói |

## Hiểu nhầm thường gặp

### 1. Lỗi dài ≠ vấn đề khó hơn

Tín hiệu hữu ích thường là từ khóa ngắn trong stack dài.

### 2. Exit khác không ≠ mô hình không làm được Tác vụ

Có thể là quyền, mạng, định dạng đầu ra hoặc điều kiện thất bại Tác vụ.

### 3. 401 / 403 / 429 khác nhau

- `401`: vấn đề xác thực
- `403`: đã xác thực nhưng không được phép
- `429`: quá nhanh — thử lại sau

### 4. Dòng cuối không luôn là gốc rễ

Các dòng trước có thể cho thấy bước, tệp, lệnh hoặc lý do nền.

## CLI và lệnh

| Thông báo hoặc triệu chứng | Nguyên nhân có thể | Bước tiếp |
|---|---|---|
| command not found: codex | Chưa cài hoặc PATH | [Cài CLI](/guide/getting-started/install-cli/) |
| Config parse error | Cú pháp TOML/YAML | [Cấu hình CLI](/guide/cli/configuration/) |
| Permission denied (write) | Deny Sandbox hoặc phê duyệt | [Phê duyệt và Sandbox](/guide/cli/approvals-and-sandbox/) |
| Exit khác không (exec) | Tác vụ fail hoặc chưa đạt tiêu chí hoàn thành | Kiểm stderr; siết Prompt |

## Năm hạng mục

| Hạng mục | Kiểm |
|---|---|
| Auth | Tài khoản, token, đăng nhập |
| Quyền | Phê duyệt, Sandbox, truy cập repo |
| Môi trường | Cài đặt, PATH, cấu hình, dependency |
| Mạng | Egress, proxy, truy cập từ xa |
| Logic Tác vụ | Prompt, tệp đầu vào, yêu cầu đầu ra |

Phân loại trước — hướng rõ hơn.

## Cách dùng trang này

Coi như bảng phân loại — không phải từ điển đầy đủ:

- Nhận từ khóa
- Tìm hạng mục
- Mở trang xử lý sự cố chi tiết

Hoặc dịch thành câu hỏi đơn giản:

- Chưa đăng nhập?
- Không có quyền?
- Lệnh chưa cài?
- Mạng không tới?
- Chỉ dẫn cho Codex mơ hồ?

Dùng trang này để tới đúng hạng mục khi chưa chắc.

## Quyền và Sandbox

| Thông báo hoặc triệu chứng | Nguyên nhân có thể | Bước tiếp |
|---|---|---|
| User rejected tool call | Bạn hoặc chính sách từ chối hành động | Xác nhận phê duyệt có đúng không; hoặc đổi Tác vụ |
| Sandbox violation | Đường dẫn hoặc lệnh ngoài giới hạn | [Sandbox và mạng](/guide/foundations/sandbox-and-network/) |
| Network access denied | Egress bị chặn | Cloud: [Truy cập Internet](/guide/web-and-cloud/internet-access/) |

## Cloud và GitHub

| Thông báo hoặc triệu chứng | Nguyên nhân có thể | Bước tiếp |
|---|---|---|
| Repository access denied | Scope OAuth không đủ | [Kết nối GitHub](/guide/web-and-cloud/connect-github/) |
| Clone failed | Tên repo, quyền, mạng | [Xử lý sự cố Cloud](/guide/web-and-cloud/troubleshooting/) |
| Secret not found | Tên hoặc phạm vi sai | [Secrets và biến](/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | Bảo vệ nhánh | [Tạo Pull Request](/guide/web-and-cloud/create-pull-requests/) |

## MCP và mở rộng

| Thông báo hoặc triệu chứng | Nguyên nhân có thể | Bước tiếp |
|---|---|---|
| MCP server failed to start | Đường dẫn lệnh, thiếu dependency | [Kết nối MCP](/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | API ngoài chậm hoặc down | Thử lại; kiểm log MCP |
| Unknown tool | Config/phiên bản máy chủ không tương thích | Khởi động lại phiên; cập nhật config |

## Ngữ cảnh và mô hình

| Thông báo hoặc triệu chứng | Nguyên nhân có thể | Bước tiếp |
|---|---|---|
| Context length exceeded | Hội thoại hoặc tệp @ quá lớn | [Nén](/guide/context/compaction/) · thu hẹp phạm vi |
| Model not available | Hạn chế vùng hoặc gói | [Mô hình và suy luận](/guide/foundations/models-and-reasoning/) |

## Dùng trang này

1. **Copy cụm then chốt** vào tìm kiếm client hoặc sổ tay
2. Theo bảng tới checklist chủ đề
3. Vẫn kẹt: giữ log đầy đủ; xem [Tài nguyên chính thức](/guide/reference/official-resources/)

## Giúp người khác giúp bạn

Gồm:

- Loại và phiên bản client (App / CLI / IDE / Cloud)
- Hệ điều hành
- Văn bản lỗi đầy đủ (đã làm sạch)
- Không tương tác? CI?

## Thứ tự xử lý sự cố

1. Chụp màn hình hoặc copy lỗi đầy đủ — không chỉ dòng cuối
2. Phân loại trước khi đoán chi tiết kỹ thuật
3. Nhớ gần đây đã đổi gì
4. Đổi một biến và thử lại một lần
5. Rồi hỏi kèm ngữ cảnh đầy đủ

Tránh trộn nhiều thay đổi.

## Nguồn tham chiếu

- Tài liệu hỗ trợ OpenAI Codex
- Chương FAQ và xử lý sự cố stormzhang
- Tổng hợp thất bại KimYx0207 (đối chiếu với chính thức)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Định vị là chỉ mục phân loại lỗi, không phải từ điển đầy đủ; năm hạng mục đã đối chiếu chéo với các chương CLI, Cloud, quyền và cấu hình hiện tại — không yêu cầu bảng mã lỗi cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
