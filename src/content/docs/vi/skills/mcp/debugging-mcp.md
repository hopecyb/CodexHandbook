---
legacyVerification:
  status: "verified"
  products: "Ứng dụng ChatGPT trên máy tính / Codex CLI / IDE"
  checkedAt: "2026-08-25"
title: Gỡ lỗi kết nối MCP
description: Xác định lỗi MCP theo bốn lớp cấu hình, truyền tải, xác thực và công cụ.
locale: vi
source_locale: zh-CN
source_revision: "d35b635"
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: 2026-10-26
---

Lỗi MCP thường bị gộp thành một câu: “không dùng được công cụ”. Cách nhanh hơn là xác định lỗi nằm ở lớp nào trước, sau đó mỗi lần chỉ thay đổi một yếu tố.

## Lưu bốn bằng chứng trước

```bash
codex mcp list
codex mcp --help
node --version   # Chỉ khi máy chủ STDIO dùng Node.js
python3 --version # Chỉ khi máy chủ STDIO dùng Python
```

Ngoài ra, ghi lại tên máy chủ, phương thức STDIO hay Streamable HTTP, nguyên văn lỗi và lỗi xảy ra trong ứng dụng máy tính, CLI hay IDE. Đừng ghi toàn bộ token.

## Phân loại theo bốn lớp

| Lớp | Biểu hiện thường gặp | Kiểm tra đầu tiên |
|---|---|---|
| Cấu hình | Máy chủ không có trong danh sách | Đường dẫn tệp, cú pháp TOML, tên máy chủ, `enabled` |
| Khởi động/kết nối | Khởi tạo hết thời gian chờ | Lệnh STDIO và PATH, hoặc HTTP URL, TLS, proxy |
| Xác thực | 401/403, yêu cầu đăng nhập | Trạng thái OAuth, biến môi trường chứa token, scope |
| Công cụ | Máy chủ trực tuyến nhưng gọi công cụ thất bại | Tên công cụ, tham số, allowlist, thời gian chờ công cụ |

## 1. Xác nhận cấu hình thực sự được đọc

- Tệp cấp người dùng là `~/.codex/config.toml`.
- Tệp cấp dự án là `.codex/config.toml` và chỉ được nạp trong dự án đáng tin cậy.
- Ứng dụng máy tính, CLI và IDE chia sẻ cấu hình trên cùng một Codex host; đừng tạo các bản sao rồi để chúng khác nhau.
- Dùng `codex mcp list` hoặc `/mcp` trong phiên để xem trạng thái thực tế; tệp tồn tại chưa phải bằng chứng thành công.

## 2. Máy chủ STDIO không khởi động

Kiểm tra `command` có nằm trong PATH không, phiên bản runtime có đáp ứng yêu cầu của máy chủ không, `cwd` có tồn tại không và nguồn gói phụ thuộc có đáng tin cậy không.

Chạy trực tiếp lệnh khởi động chỉ chứng minh rằng tệp thực thi có thể chạy. Việc máy chủ MCP chờ đầu vào giao thức và trông như không thoát có thể là bình thường; đừng coi đó là bài kiểm tra hoàn chỉnh cho lệnh gọi công cụ.

Chỉ cân nhắc tăng `startup_timeout_sec` khi việc khởi tạo thực sự chậm. Mặc định là 10 giây; tăng lên quá lớn một cách mù quáng chỉ che giấu lệnh sai.

## 3. Kết nối Streamable HTTP thất bại

Kiểm tra theo thứ tự:

1. URL và chứng chỉ TLS.
2. Proxy hoặc VPN của công ty.
3. Biến môi trường mà `bearer_token_env_var` trỏ tới có tồn tại không.
4. OAuth có yêu cầu chạy lại `codex mcp login <server-name>` không.
5. Log phía máy chủ có ghi nhận yêu cầu khởi tạo không.

Đừng chuyển token thành giá trị `http_headers` tĩnh để “gỡ lỗi tạm thời”. Token như vậy rất dễ lọt vào tệp cấu hình và ảnh chụp màn hình.

## 4. Máy chủ trực tuyến nhưng công cụ không dùng được

| Biểu hiện | Kiểm tra |
|---|---|
| Công cụ hoàn toàn không xuất hiện | `enabled_tools` / `disabled_tools`, danh sách công cụ do máy chủ trả về |
| Tool not found | Phiên bản máy chủ, công cụ có đổi tên không, phiên hiện tại còn giữ danh sách cũ không |
| Kiểm tra tham số thất bại | Đối chiếu schema của công cụ, đừng đoán tên trường từ prompt cũ |
| Lệnh gọi hết thời gian chờ | Thu hẹp truy vấn rồi kiểm tra `tool_timeout_sec`; mặc định 60 giây |
| Kết quả rỗng | Dùng cùng tài khoản trong hệ thống nguồn để xác minh phạm vi dữ liệu và điều kiện lọc |

## Prompt tái hiện tối thiểu

```text
Chỉ kiểm tra máy chủ MCP <server-name>:
1. Báo cáo tên các công cụ hiện đang thấy;
2. Gọi <readonly-tool>, chỉ dùng <minimal-arguments> làm tham số;
3. Giữ nguyên loại lỗi và thông báo từ máy chủ, nhưng che thông tin xác thực;
4. Không gọi máy chủ khác và không ghi dữ liệu.
```

## Tiêu chí nghiệm thu sau khi gỡ lỗi

- [ ] Trạng thái trong `codex mcp list` đúng như mong đợi.
- [ ] Một công cụ chỉ đọc hoạt động thành công với tham số tối thiểu.
- [ ] Nguyên nhân gốc được xác định ở một lớp cụ thể, thay vì chỉ nói “khởi động lại thì được”.
- [ ] Token tạm, log debug và quyền rộng đã được thu hồi.
- [ ] Cấu hình nhóm và hướng dẫn sửa lỗi đã được cập nhật.

## Nguồn chính thức

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
