---
title: Tích hợp GitHub
description: Nối kho, PR, Review và CI — vị trí của Codex trong quy trình GitHub.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

GitHub là mặt cộng tác mã phổ biến nhất của Codex: tác vụ Cloud, rà soát PR, Actions và push cục bộ đều quanh cùng một bộ nhánh và quyền.

Ở đây chủ yếu nói Codex nối vào quy trình cộng tác “kho mã, nhánh, PR, Review” thế nào.

Dù bạn không phải lập trình viên kỳ cựu, cũng có thể xem trước nó chủ yếu xử lý mấy loại việc:

- Mã đặt ở đâu
- Thay đổi đề xuất cho người khác xem thế nào
- Rà soát và gộp xảy ra thế nào

## Bản đồ năng lực

| Năng lực | Lối vào điển hình | Vị trí sổ tay |
|---|---|---|
| Nối kho từ xa | Cài đặt Cloud | [Nối GitHub](/guide/web-and-cloud/connect-github/) |
| Sửa mã Cloud mở PR | Tác vụ Cloud | [Tạo Pull Request](/guide/web-and-cloud/create-pull-requests/) |
| Rà soát diff cục bộ | App máy tính / IDE | [Diff và bình luận](/guide/desktop-app/diffs-comments-and-review/) |
| Chạy Codex trong CI | GitHub Actions | Lộ trình `08-developer-platform/ci-cd/` |
| PR tự bình luận rà soát | Actions + exec | [Chế độ không tương tác](/guide/cli/non-interactive-mode/) |

## Quy chuẩn nhóm khuyến nghị

```md
## GitHub × Codex (có thể đưa vào AGENTS.md)

- Bảo vệ nhánh mặc định main; Codex chỉ đẩy nhánh feature
- PR phải liên kết issue; mô tả gồm giải thích kiểm thử
- Cấm Codex merge PR, trừ khi release bot ủy quyền rõ
- Khóa dùng GitHub Secrets / secrets môi trường, không vào Prompt
```

## Cloud vs Git cục bộ

| | Clone cục bộ | Cloud |
|---|---|---|
| Nguồn mã | Workspace trên máy bạn | Clone từ xa |
| Commit chưa push | Thấy được | Không thấy, cần push trước |
| Môi trường | Phiên bản Node/hệ thống của bạn | Ảnh môi trường đã cấu hình |
| Phù hợp | Phát triển hàng ngày | Tác vụ dài bất đồng bộ, build chuẩn hóa |

## Quy trình Review

1. Codex hoặc người mở PR
2. Người đọc diff (hoặc Skill `$pr-review`)
3. CI chạy kiểm thử
4. Bình luận dẫn sửa — có thể dùng tác vụ Codex mới «chỉ xử lý review comment»
5. Người merge

## Hiểu lầm thường gặp

### 1. Tích hợp GitHub không bằng “để Codex tự phát triển thay tôi”

Mục đích phổ biến hơn:

- Đọc ngữ cảnh kho
- Giúp gom diff hoặc review
- Hỗ trợ mở PR, sửa bình luận

### 2. Tôi chưa hiểu lắm các từ PR, Review thì sao?

Có thể hiểu thô trước:

- **PR**: đưa thay đổi của bạn ra chính thức, chờ người khác xem
- **Review**: người khác đến kiểm các thay đổi đó

Biết tầng này là đủ đọc phần lớn nội dung trang.

### 3. Lần đầu tiếp xúc tích hợp GitHub, quan trọng nhất là phân rõ việc này

Phân rõ trước không phải token, cũng không phải Actions, mà là:

> **Thay đổi cục bộ, kho Cloud, rà soát PR — ba thứ không phải một.**

Trọng tâm tích hợp GitHub là để Codex nối vào quy trình cộng tác mã hiện có.

## An toàn

- Thu nhỏ tối đa scope GitHub Token
- Giữ cảnh giác với mẫu Actions nhạy cảm như `pull_request_target` (mặt tiêm)
- Chạy tự động hóa trên Fork PR cần chiến lược cách ly thêm

## Lỗi thường gặp

- Tác vụ Cloud giả định thay đổi cục bộ chưa commit vẫn tồn tại
- Để Codex thực thi lệnh chưa khử độc trong mô tả PR (tiêm Prompt)
- Cùng một PR trộn định dạng và thay đổi chức năng

## Nguồn tham khảo
- Tài liệu tích hợp GitHub OpenAI Codex
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** Cloud / App / CLI  
**Căn cứ kiểm chứng:** Use cases Codex hiện tại của OpenAI Developers vẫn gồm “Review GitHub pull requests”; hướng dẫn plugin và tích hợp của OpenAI Help Center cũng liên tục nhấn mạnh: truy cập kho ngoài phụ thuộc quyền app nền, truy cập vai trò và ranh giới hành động. Trang này chỉ tóm tắt vị trí cộng tác của kho GitHub, nhánh, PR, Review và CI, cùng khác biệt về khả năng thấy mã giữa cục bộ và Cloud.  
**Kiểm chứng gần nhất:** 2026-07-26
