---
title: Ma trận quyền
description: Phân biệt Permission Profiles cục bộ, sandbox cũ và chính sách mạng của Cloud.
locale: vi
source_locale: zh-CN
source_revision: c6ad6aa
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 70
---

Đừng dùng một bảng cố định kiểu “App/CLI/IDE/Cloud có hiện hộp thoại hay không” để đoán quyền. Hành vi thực tế do nơi thực thi, cấu hình có hiệu lực, yêu cầu của tổ chức, hệ điều hành và thao tác cụ thể cùng quyết định.

![Luồng quyết định giữa việc sandbox chặn thao tác, con người phê duyệt và kết quả thực thi](/diagrams/sandbox-approval-flow-zh-cn.svg)

## Trước tiên phân biệt ba cơ chế

| Cơ chế | Phạm vi | Cách kiểm soát chính |
|---|---|---|
| Permission Profiles cục bộ (Beta) | Lệnh cục bộ trên macOS, Linux, WSL và Windows gốc | Đọc/ghi/từ chối trong hệ thống tệp, đích mạng |
| Cài đặt sandbox cũ | Codex cục bộ | `read-only`, `workspace-write`, `danger-full-access` và chính sách phê duyệt |
| Chính sách môi trường Cloud | Codex Cloud | Container cô lập, mạng trong giai đoạn thiết lập, danh sách đích mạng và phương thức HTTP được phép cho Agent |

Permission Profiles không kết hợp với `sandbox_mode` cũ. Chỉ cần cấu hình được tải có `sandbox_mode`, dòng lệnh truyền `--sandbox`, hoặc một profile cấu hình thiết lập sandbox, Codex sẽ dùng cài đặt sandbox cũ thay vì `default_permissions`.

## Permission Profiles cục bộ tích hợp sẵn

| Tên | Ranh giới | Phù hợp với |
|---|---|---|
| `:read-only` | Lệnh cục bộ chỉ được đọc | Tìm hiểu mã, rà soát, lần đầu xem kho lưu trữ |
| `:workspace` | Được ghi vào các thư mục gốc của workspace hiện tại và thư mục tạm hệ thống | Tác vụ phát triển thông thường |
| `:danger-full-access` | Bỏ các giới hạn sandbox cục bộ | Chỉ khi bên ngoài đã có cơ chế cô lập và thực sự cần thiết |

Profile tùy chỉnh có thể đặt `read`, `write`, `deny` cho từng đường dẫn, dùng quy tắc cụ thể hơn để loại tệp nhạy cảm như `.env` khỏi một phạm vi rộng. Khi các quy tắc xung đột trên cùng đường dẫn, `deny` ưu tiên hơn `write`, còn `write` ưu tiên hơn `read`.

## Ví dụ về quyền tối thiểu

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true` chỉ cho phép lệnh truy cập mạng. Bạn còn phải bật `features.network_proxy` thì quy tắc tên miền mới được proxy thực thi bắt buộc.

## Đánh giá theo từng thao tác

| Thao tác | Rủi ro chính | Ranh giới tối thiểu |
|---|---|---|
| Đọc mã nguồn | Tệp nhạy cảm bị đưa vào ngữ cảnh | Quyền đọc workspace, từ chối rõ ràng quyền truy cập thông tin đăng nhập |
| Sửa tệp | Ghi đè hoặc xóa vượt phạm vi | Chỉ ghi vào workspace mục tiêu, xem diff trước |
| Chạy kiểm thử | Tác dụng phụ của script | Rà soát script, dùng môi trường được kiểm soát |
| Cài thư viện phụ thuộc | Chuỗi cung ứng và truy cập mạng | Cố định phiên bản, giới hạn tên miền |
| Git push / PR | Thay đổi trạng thái bên ngoài | Nhánh riêng, bảo vệ nhánh và rà soát thủ công |
| Công cụ MCP/plugin | Dữ liệu bên thứ ba và thao tác ghi | Phạm vi tối thiểu, phê duyệt từng thao tác và ghi log |

`AGENTS.md` có thể ghi “không push”, nhưng không phải ranh giới bắt buộc về mặt kỹ thuật. Cần kết hợp quy tắc đó với sandbox/permissions, quyền GitHub và rà soát thủ công.

## Cách nhóm kiểm tra

1. Ghi lại phiên bản ứng dụng khách và Codex.
2. Liệt kê tất cả các lớp cấu hình được tải.
3. Xác nhận đang dùng Permission Profile hay sandbox cũ.
4. Kiểm tra riêng quyền đọc, ghi, từ chối và mạng trong thư mục thử nghiệm không có dữ liệu nhạy cảm.
5. Sau đó mới kết nối kho lưu trữ thật và giữ các cổng kiểm soát phía Git và tổ chức.

Permission Profiles vẫn đang ở giai đoạn Beta. Hãy chạy lại các bước kiểm tra này sau khi nâng cấp.

## Nguồn chính thức

- [Permissions (Beta)](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
