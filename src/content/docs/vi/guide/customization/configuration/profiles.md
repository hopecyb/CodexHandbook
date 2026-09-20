---
title: Profile cấu hình
description: Dùng tệp cấu hình riêng để áp dụng một nhóm cài đặt có tên cho Codex CLI.
locale: vi
source_locale: zh-CN
source_revision: 6ab30c5
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Trong Codex CLI hiện tại, `--profile <name>` áp dụng `$CODEX_HOME/<name>.config.toml` lên trên cấu hình người dùng cơ sở. Cơ chế này chủ yếu dành cho CLI, không nên mô tả như một “chế độ một nút bấm” dùng chung trong ứng dụng máy tính.

## Ví dụ tối thiểu

Giữ các giá trị mặc định dùng chung trong cấu hình cơ sở:

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

Profile để rà soát chỉ đọc:

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

Khởi chạy:

```bash
codex --profile review
# Viết tắt
codex -p review
```

Xác nhận ý nghĩa của tham số bằng phiên bản đang cài trên máy:

```bash
codex --help
```

Phần trợ giúp của phiên bản hiện tại sẽ giải thích đường dẫn tệp profile và cách cấu hình được áp dụng theo lớp. Nếu phiên bản của bạn khác, hãy dựa vào kết quả trên máy và tài liệu cấu hình chính thức.

## Profile phù hợp với việc gì

| Profile | Mục đích | Ví dụ về ranh giới |
|---|---|---|
| `review` | Kiểm tra chỉ đọc | read-only, không ghi |
| `workspace` | Sửa dự án hằng ngày | Chỉ ghi trong workspace, phê duyệt khi cần |
| `ci` | Kiểm tra không tương tác | Đầu ra cố định, không push |

Profile chỉ lưu một điểm khởi đầu gồm nhiều cài đặt. Nó không ghi đè requirements của tổ chức và cũng không tự làm prompt trở nên an toàn. Đặc biệt, đừng đặt `danger-full-access` thành profile mặc định để dùng tùy tiện.

## Đừng nhầm với Permission Profile

- **Profile cấu hình**: `--profile name` chọn `<name>.config.toml` và có thể áp dụng nhiều loại cấu hình Codex theo lớp.
- **Permission Profile (Beta)**: `default_permissions` cùng `[permissions.<name>]` xác định ranh giới hệ thống tệp và mạng.

Cả hai đều được gọi là profile, nhưng mục đích và cấu trúc cấu hình khác nhau. Permission Profile hiện cũng không kết hợp với `sandbox_mode` cũ; hãy chọn một hệ thống quyền để cấu hình.

## Ranh giới khi dùng trong nhóm

Profile cấu hình nằm trong thư mục Codex home của người dùng, không tự nhiên trở thành cấu hình dự án có thể commit ở phiên bản hiện tại. Nhóm có thể cung cấp tệp ví dụ đã được rà soát trong tài liệu để thành viên chủ động cài đặt và kiểm tra; đừng giả định rằng clone kho lưu trữ xong thì profile cá nhân sẽ tự được bật.

## Nghiệm thu

1. Chạy `codex --help` để xác nhận phiên bản hiện tại hỗ trợ `-p/--profile`.
2. Dùng tác vụ chỉ đọc để thử `review`.
3. Yêu cầu đọc tệp ngoài workspace hoặc ghi tệp để xác nhận ranh giới chặn đúng như dự kiến.
4. Kiểm tra cấu hình có hiệu lực, không chỉ tin vào tên tệp.

## Nguồn chính thức

- [Schema cấu hình Codex](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [Lớp cấu hình trong mã nguồn Codex CLI](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)
