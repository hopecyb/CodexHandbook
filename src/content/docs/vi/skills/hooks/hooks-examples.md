---
legacyVerification:
  status: "verified"
  products: "Môi trường sử dụng Codex host cục bộ; quản lý độ tin cậy bằng `/hooks` trong Codex CLI"
  checkedAt: "2026-08-25"
title: Ví dụ cấu hình Hook
description: Dùng hooks.json thực tế và script Python chỉ dùng thư viện chuẩn để tạo rào chắn PreToolUse có thể kiểm thử.
locale: vi
source_locale: zh-CN
source_revision: "06e9fa2"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Chương này đã loại bỏ tên sự kiện và trường cấu hình minh họa của phiên bản cũ. Các ví dụ tuân theo cấu trúc `hooks.json` chính thức hiện tại và có bài kiểm thử chạy được.

Các tệp đầy đủ nằm tại [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard).

## Mục tiêu và ranh giới

Mục tiêu: khi đầu vào lệnh của `Bash` hoặc `apply_patch` chứa một chuỗi thử nghiệm trông giống AWS Access Key ID, từ chối trước khi công cụ chạy.

Đây chỉ là ví dụ về đầu vào, đầu ra và cấu trúc kiểm thử của Hook:

- Không thay thế công cụ quét secret chuyên dụng.
- Biểu thức chính quy có thể báo nhầm hoặc bỏ sót.
- Không quét Hosted tools.
- Không nên ghi log toàn bộ đầu vào công cụ.

## 1. Cấu hình hooks.json

```json
{
  "description": "Block obvious secret-shaped strings before local writes.",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|apply_patch",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$(git rev-parse --show-toplevel)/examples/hooks/secret-guard/pre_tool_use_guard.py\"",
            "timeout": 3,
            "statusMessage": "Checking tool input for secret-shaped strings"
          }
        ]
      }
    ]
  }
}
```

Khi dùng thật trong kho lưu trữ, bạn thường đặt cấu hình ở `.codex/hooks.json` và script trong `.codex/hooks/`. Ví dụ này giữ đường dẫn `examples` để có thể kiểm tra trực tiếp bộ tệp đầy đủ trong kho của tài liệu hướng dẫn.

## 2. Đầu ra khi từ chối

Script đọc JSON sự kiện từ stdin và chỉ kiểm tra `tool_input.command`. Khi phát hiện chuỗi phù hợp, nó xuất:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

Nếu không phát hiện, script thoát với mã `0` và không xuất nội dung. Văn bản stdout thông thường không tạo thành quyết định `PreToolUse` hợp lệ.

## 3. Chạy kiểm thử

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

Kết quả mong đợi: ba bài kiểm thử đạt, bao phủ lệnh bình thường, chuỗi nghi là khóa và `tool_input` không phải dictionary.

Bạn cũng có thể đưa fixture vào thủ công:

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

Đầu vào bình thường sẽ không tạo stdout.

## 4. Bật trong dự án

1. Đưa cấu hình và script vào kho mục tiêu, rồi đổi sang đường dẫn ổn định trong kho đó.
2. Chạy kiểm thử đơn vị và một lệnh bình thường thực tế trong kho cô lập.
3. Khởi chạy Codex, mở `/hooks` để rà soát nguồn và định nghĩa chính xác.
4. Sau khi tin cậy, kiểm tra riêng trường hợp “bình thường được phép” và “chuỗi thử nghiệm bị từ chối”.
5. Sau khi sửa script, rà soát lại; thay đổi hash sẽ đưa Hook không được quản lý trở về trạng thái chờ tin cậy.

## Từ nhắc nhở đến chặn thao tác

Nhóm sản xuất thường bắt đầu bằng kiểm toán hoặc bổ sung ngữ cảnh mà không chặn, rồi mới nâng lên deny. Trước khi nâng cấp, ít nhất hãy trả lời:

- Fixture có bao phủ các trường hợp báo nhầm đã biết không?
- Người dùng có hiểu được khi script hết thời gian chờ hoặc gặp lỗi không?
- Quy tắc này có được CI hoặc chính sách phía máy chủ hỗ trợ không?
- Việc bỏ qua quy tắc và khôi phục khẩn cấp có thể kiểm toán được không?

## Nguồn chính thức

- [OpenAI: Cấu hình Hooks và đầu ra PreToolUse](https://learn.chatgpt.com/docs/hooks)
