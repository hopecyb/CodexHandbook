---
title: Kết nối GitHub
description: Cấu hình quyền truy cập GitHub cho Codex Cloud với phạm vi kho mã tối thiểu.
legacyVerification:
  status: "verified"
  products: "Cloud / GitHub"
  checkedAt: "2026-08-26"
locale: vi
source_locale: zh-CN
source_revision: "b126a7e"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 10
reviewed_at: 2026-10-26
---

Codex Cloud cần kết nối với GitHub hoặc GitLab (Beta) trước khi tạo môi trường cho một kho mã. Phạm vi ủy quyền GitHub quyết định Codex có thể nhìn thấy những kho mã nào. Bản clone trên máy và các thay đổi chưa push nằm ngoài phạm vi đó.

## Các bước kết nối

1. Mở Codex Cloud và đăng nhập bằng tài khoản ChatGPT.
2. Kết nối GitHub khi được yêu cầu.
3. Trên màn hình ủy quyền của GitHub, chọn tổ chức và **chỉ những kho mã cần thiết**.
4. Quay lại Codex, chọn kho mã đó và tạo môi trường Cloud.
5. Dùng tác vụ chỉ đọc hoặc thay đổi nhỏ để kiểm tra clone, nhánh và diff.
6. Nếu cần review PR, bật Code review cho kho mã trong Codex Settings.

Chỉ ủy quyền những kho mã cần dùng cho tác vụ này. Với kho mã của nhóm, hãy kiểm tra thêm việc tổ chức có cho phép cài đặt tích hợp hay không, tài khoản của bạn có đủ quyền hay không và cơ chế bảo vệ nhánh vẫn được duy trì.

## Kiểm tra trước và sau khi kết nối

- [ ] Kho mã đích không phải một fork trùng tên bị chọn nhầm.
- [ ] Đã xác nhận nhánh mặc định và điểm bắt đầu của tác vụ.
- [ ] Các thay đổi cục bộ cần thiết đã được push hoặc được loại trừ rõ ràng khỏi tác vụ.
- [ ] Nhánh chính chặn việc ghi trực tiếp khi chưa qua review.
- [ ] Môi trường không chứa thông tin xác thực production với toàn quyền.
- [ ] Tác vụ đầu tiên chỉ sửa tệp có rủi ro thấp.

## Hai cách dùng GitHub

### Để Cloud thực hiện tác vụ

Trong Codex Cloud, chọn môi trường của kho mã và nhánh bắt đầu rồi mô tả mục tiêu. Khi tác vụ kết thúc, xem diff trước khi tạo PR.

### Để Codex review PR

Sau khi bật Code review cho kho mã, hãy bình luận trong PR:

```text
@codex review
```

Codex sẽ đăng một GitHub review thông thường. Cần bật review tự động riêng trong Codex Settings. Nhóm có thể ghi quy tắc riêng của kho mã vào mục `## Code Review Rules` trong `AGENTS.md`.

## Chẩn đoán vấn đề về quyền

- **Không thấy kho mã trong danh sách**: kiểm tra phạm vi kho mã đã ủy quyền trên GitHub.
- **Kho mã của tổ chức trả về 403**: kiểm tra chính sách tổ chức, SSO và quyền cài đặt tích hợp.
- **Không bật được review tự động**: xác nhận bạn có quyền GitHub push hoặc admin theo yêu cầu.
- **Cloud không thấy commit cục bộ**: Cloud chỉ checkout từ kho mã từ xa; hãy push commit lên một nhánh xác định.

Đừng cấp quyền cho toàn bộ kho mã riêng tư chỉ để khắc phục một lỗi 403. Trước tiên hãy xác định kho mã đích và quyền cụ thể còn thiếu.

## Nguồn chính thức

- [Bắt đầu nhanh với Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Review Pull Request trên GitHub](https://learn.chatgpt.com/docs/third-party/github)
