---
title: Tổng quan về Hooks
description: Tìm hiểu cách phát hiện cấu hình, rà soát tin cậy, bộ xử lý và ranh giới bảo mật của Hook.
locale: vi
source_locale: zh-CN
source_revision: ac7889b
translation_status: draft
translated_at: 2026-09-20
---

Hooks cho phép chạy script lệnh hoặc công cụ của máy chủ MCP đã kết nối tại các điểm trong vòng lặp Agent của Codex. Các ứng dụng thường gặp gồm quét khóa trong prompt, áp dụng chính sách gọi công cụ, ghi nhật ký kiểm toán, tóm tắt phiên và kiểm tra trước khi dừng.

![Vòng đời Codex Hook: các sự kiện phiên, lượt tác vụ, gọi công cụ, nén ngữ cảnh và Agent con](/diagrams/hook-lifecycle-events-zh-cn.svg)

Điểm khác biệt quan trọng nhất trong hình là: `PreToolUse` có thể từ chối hoặc sửa đầu vào trước khi công cụ cục bộ được hỗ trợ thực thi; `PostToolUse` xảy ra sau khi công cụ hoàn thành nên không thể hoàn tác tác dụng phụ đã xảy ra.

## Cấu hình đến từ đâu

Codex tìm ở cạnh các lớp cấu hình đang hoạt động:

- `~/.codex/hooks.json`
- `[hooks]` trong `~/.codex/config.toml`
- `<repo>/.codex/hooks.json`
- `[hooks]` trong `<repo>/.codex/config.toml`
- Hook đi kèm Plugin đã được bật
- Managed Hook do quản trị viên cung cấp qua hệ thống, MDM, Cloud hoặc `requirements.toml`

`.codex/` ở cấp dự án chỉ được tải khi dự án đáng tin cậy. Các Hook khớp từ nhiều nguồn sẽ cùng chạy; cấu hình có ưu tiên cao không ghi đè toàn bộ nhóm Hook ở mức ưu tiên thấp.

Nếu cùng một lớp cấu hình có cả `hooks.json` lẫn `[hooks]` nội tuyến, chúng sẽ được hợp nhất và xuất hiện cảnh báo khi khởi động. Nên chọn một cách biểu diễn cho mỗi lớp.

## Hook không được quản lý phải được rà soát

Codex ghi nhận trạng thái tin cậy theo hash của định nghĩa Hook. Hook không được quản lý vừa thêm hoặc sửa sẽ bị đánh dấu chờ rà soát và bị bỏ qua cho đến khi người dùng tin cậy định nghĩa mới.

Trong CLI, dùng `/hooks` để xem nguồn, rà soát thay đổi, tin cậy hoặc tắt từng Hook không được quản lý. Hook đi kèm Plugin cũng đi qua quy trình tin cậy này. Managed Hook được tin cậy theo chính sách tổ chức; người dùng không thể tắt chúng trong trình duyệt Hook cá nhân.

## Hai loại bộ xử lý có thể thực thi

| Bộ xử lý | Công dụng | Ranh giới quan trọng |
|---|---|---|
| `command` | Chạy script cục bộ, nhận JSON sự kiện từ stdin | Bản thân script có khả năng của tiến trình cục bộ; phải rà soát thư viện phụ thuộc và đầu ra |
| `mcp_tool` | Gọi công cụ trong máy chủ MCP đã kết nối | Không tự khởi động hoặc kết nối lại máy chủ; không hỗ trợ `SessionEnd` |

Theo tài liệu chính thức hiện tại, bộ xử lý `prompt` và `agent` có thể được phân tích cú pháp nhưng sẽ bị bỏ qua; không nên đưa chúng vào cấu hình cần chạy thật.

## Hành vi khi chạy

- Nhiều command Hook khớp sẽ khởi chạy đồng thời; một Hook không thể ngăn Hook khớp khác đã bắt đầu.
- `timeout` mặc định của phần lớn Hook là 600 giây; `SessionEnd` mặc định 1 giây và tối đa 3 giây. Script bảo vệ dùng trong sản xuất vẫn nên chủ động đặt thời gian chờ ngắn hơn.
- Thư mục làm việc của command Hook là `cwd` của phiên. Script trong kho lưu trữ nên tìm thư mục gốc Git để tránh lỗi đường dẫn tương đối khi khởi chạy từ thư mục con.
- Hook bất đồng bộ phù hợp để ghi log và phân tích, nhưng không thể chặn, phê duyệt, sửa đầu vào hoặc điều khiển thao tác đã kích hoạt nó.

## Quan hệ với các lớp bảo mật khác

| Lớp | Vai trò |
|---|---|
| Sandbox | Ranh giới khả năng truy cập tệp, mạng và hệ thống |
| Phê duyệt | Quyết định của con người trước thao tác rủi ro cao |
| Quy tắc lệnh | Khai báo allow/deny cho mẫu lệnh đã biết |
| Hook | Chạy logic tùy chỉnh, có thể kiểm thử tại các điểm vòng đời |
| Quyền phía máy chủ | Hệ thống bên ngoài cuối cùng cho phép những thao tác đọc/ghi nào |

Phạm vi bao phủ công cụ của Hook không phải ranh giới bảo mật đầy đủ. Tài liệu chính thức nêu rõ một số đường đi công cụ chuyên biệt có thể bỏ qua đường đi Hook mặc định; Hosted tool (ví dụ WebSearch) cũng không đi qua `PreToolUse` / `PostToolUse` cục bộ.

## Thứ tự áp dụng

1. Dùng `PostToolUse` hoặc `SessionEnd` để ghi log đã loại bỏ dữ liệu nhạy cảm, trước hết quan sát hành vi thực tế.
2. Với vấn đề có độ tin cậy cao, dùng `systemMessage` hoặc ngữ cảnh bổ sung để nhắc nhở.
3. Chỉ chặn tại `PreToolUse` khi quy tắc xác định rõ, script có fixture và mức báo nhầm chấp nhận được.
4. Căn chỉnh Hook với CI, kiểm tra trước commit và quyền phía máy chủ để tránh ba bộ chính sách mâu thuẫn nhau.

## Danh sách nghiệm thu

- [ ] Tên sự kiện lấy từ danh sách chính thức hiện tại.
- [ ] Matcher chỉ bao phủ công cụ hoặc nguồn cần thiết.
- [ ] Script có bài kiểm thử với đầu vào cố định và thông báo lỗi dễ hiểu.
- [ ] Log không lưu token, toàn bộ prompt hoặc tham số công cụ nhạy cảm.
- [ ] Đã diễn tập các trường hợp Hook lỗi, hết thời gian chờ và bị tắt.
- [ ] Nhóm hiểu việc thay đổi trạng thái tin cậy trong `/hooks` có nghĩa gì.

## Nguồn chính thức

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
