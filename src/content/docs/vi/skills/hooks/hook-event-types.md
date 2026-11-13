---
legacyVerification:
  status: "verified"
  products: "Môi trường sử dụng Codex host cục bộ"
  checkedAt: "2026-08-25"
title: Các loại sự kiện Hook
description: Chọn sự kiện theo vòng đời phiên, lượt tác vụ, gọi công cụ, nén ngữ cảnh và Agent con.
locale: vi
source_locale: zh-CN
source_revision: "07f4965"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Khi chọn Hook, câu hỏi đầu tiên không phải “viết script thế nào” mà là “xử lý trước hay sau khi tác dụng phụ xảy ra”. Đặt sai điểm sự kiện thì dù script hoàn thiện đến đâu, nó cũng có thể chỉ báo cáo được sau sự việc.

![Vòng đời Codex Hook và các sự kiện quan trọng](/illustrations/flow-hook-lifecycle.webp)

## Danh sách sự kiện hiện tại

| Sự kiện | Khi nào xảy ra | Matcher lọc gì | Công dụng thường gặp |
|---|---|---|---|
| `SessionStart` | Khi phiên bắt đầu hoặc được tiếp tục | `startup`, `resume`, `clear`, `compact` | Thông tin môi trường, khôi phục ngữ cảnh |
| `SubagentStart` | Khi Agent con khởi chạy | Loại Agent con | Bổ sung ràng buộc cho Agent con |
| `UserPromptSubmit` | Khi người dùng gửi prompt | Không hỗ trợ; cấu hình sẽ bị bỏ qua | Quét khóa, bổ sung ngữ cảnh phát triển |
| `PreToolUse` | Trước khi công cụ cục bộ được hỗ trợ chạy | Tên công cụ | Từ chối hoặc sửa lời gọi |
| `PermissionRequest` | Khi Codex chuẩn bị yêu cầu phê duyệt | Tên công cụ | Cho phép, từ chối hoặc chuyển về quy trình phê duyệt bình thường |
| `PostToolUse` | Sau khi công cụ cục bộ được hỗ trợ trả về | Tên công cụ | Ghi kết quả, đưa phản hồi cho bước suy luận tiếp theo |
| `PreCompact` | Trước khi nén ngữ cảnh | `manual` / `auto` | Lưu trạng thái trước khi nén |
| `PostCompact` | Sau khi nén ngữ cảnh | `manual` / `auto` | Bổ sung lại ngữ cảnh cần thiết |
| `SubagentStop` | Khi Agent con chuẩn bị kết thúc | Loại Agent con | Yêu cầu thêm một lượt kiểm tra |
| `Stop` | Khi lượt tác vụ chính chuẩn bị kết thúc | Không hỗ trợ; cấu hình sẽ bị bỏ qua | Yêu cầu luồng chính tiếp tục kiểm tra |
| `SessionEnd` | Khi luồng chính kết thúc | Hiện là `other` | Ghi log kết thúc nhanh; không chạy cho Agent con |

## Matcher cho công cụ

Các giá trị thường gặp gồm:

```text
Bash
^apply_patch$
Edit|Write
mcp__filesystem__read_file
mcp__filesystem__.*
```

Lệnh shell và lệnh thực thi hợp nhất đều khớp với `Bash`. `apply_patch` cũng có thể khớp qua bí danh `Edit` hoặc `Write`. MCP và các công cụ hàm cục bộ khác khớp theo tên công cụ thực tế.

## Ba sự kiện dễ nhầm lẫn nhất

### PreToolUse

Đầu vào gồm `tool_name`, `tool_use_id` và `tool_input` tùy theo công cụ. Sự kiện này có thể:

- `permissionDecision: "deny"`: chặn lời gọi công cụ được hỗ trợ.
- `permissionDecision: "allow"` + `updatedInput`: sửa đầu vào của công cụ được hỗ trợ.
- `additionalContext`: không chặn, chỉ bổ sung ngữ cảnh cho mô hình.

Văn bản stdout thông thường sẽ bị bỏ qua; phải xuất JSON theo định dạng chính thức. Mã thoát `2` kèm stderr cũng có thể chặn và nêu lý do.

### PermissionRequest

Chỉ kích hoạt khi Codex vốn đã chuẩn bị yêu cầu phê duyệt, chẳng hạn nâng quyền shell hoặc truy cập mạng được quản lý. Nó có thể allow, deny hoặc không đưa ra quyết định để giao diện phê duyệt thông thường tiếp tục. Đừng dùng nó thay cho chính sách công cụ tổng quát của `PreToolUse`.

### PostToolUse

Công cụ đã chạy; ngay cả khi Bash kết thúc với mã khác không, sự kiện này vẫn kích hoạt. Trả về block hoặc thoát bằng mã `2` ở đây chỉ thay phản hồi và yêu cầu mô hình xử lý, không thể hoàn tác lệnh, việc ghi tệp hoặc thao tác bên ngoài.

## Stop không phải nút “từ chối kết thúc”

`decision: "block"` của `Stop` có nghĩa là dựa trên reason, hệ thống tự tạo một prompt tiếp tục để Codex thực hiện thêm một lượt. Nó không hoàn tác tác dụng phụ của công cụ đã chạy. Script phải kiểm tra `stop_hook_active` để tránh lặp tiếp tục vô hạn.

## Bài tập chọn sự kiện

| Nhu cầu | Lựa chọn | Lý do |
|---|---|---|
| Chặn việc ghi chuỗi nghi là token vào tệp | `PreToolUse` khớp `apply_patch|Edit|Write` | Phải xử lý trước khi ghi |
| Thống kê tỷ lệ lệnh shell thất bại | `PostToolUse` khớp `Bash` | Cần kết quả thoát |
| Lưu quyết định quan trọng trước khi ngữ cảnh tự nén | `PreCompact` | Xảy ra trước khi nén |
| Không cho lượt tác vụ kết thúc khi chưa chạy xong kiểm thử | `Stop` | Cần tiếp tục lượt tác vụ hiện tại |
| Gửi yêu cầu mạng 30 giây khi luồng chính kết thúc | Không phù hợp với `SessionEnd` | Tối đa 3 giây, không nên đặt tác vụ dài trong sự kiện kết thúc |

## Nguồn chính thức

- [OpenAI: Sự kiện Hook và matcher](https://learn.chatgpt.com/docs/hooks)
