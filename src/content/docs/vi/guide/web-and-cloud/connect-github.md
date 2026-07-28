---
title: Kết nối GitHub
description: "Nối Codex Cloud với repo GitHub — quyền, nhánh và môi trường."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Sau khi kết nối GitHub, Codex có thể clone repo, tạo nhánh, push và mở PR trong **môi trường từ xa** — tiền đề cho quy trình Cloud.

## Nội dung phủ

- Vì sao cần kết nối và nên cấp quyền nào
- Checklist trước và sau khi kết nối
- Khác gì với Tác vụ cục bộ trên máy tính

## Sơ đồ quan hệ

```text
Repository GitHub của bạn
    ↕ (OAuth / GitHub App — tùy sản phẩm)
Môi trường Codex Cloud
    ↕
Tác vụ Cloud bạn khởi động trên Web/App
```

[App máy tính](/guide/desktop-app/) cục bộ vẫn có thể sửa trực tiếp bản clone trên máy; Cloud phù hợp **môi trường chuẩn hóa, chạy khi không ngồi máy và Phê duyệt trên mobile**. Xem [cục bộ và đám mây](/guide/foundations/local-vs-cloud/).

## Hiểu nhầm thường gặp

### 1. Tôi đã có repo cục bộ — vì sao lại phải kết nối GitHub?

Tác vụ Cloud thấy repository từ xa, không phải bản sao cục bộ của bạn.

### 2. Một khi đã kết nối, Codex thấy mọi thay đổi cục bộ?

Thay đổi cục bộ chưa push thường vô hình với Cloud.  
Đây là điểm dễ nhầm phổ biến.

### 3. Khi kết nối, điều gì quan trọng nhất?

Xác nhận trước:

- Phạm vi repo có quá rộng không
- Bảo vệ nhánh cấu hình thế nào
- Secrets có lưu trong cấu hình bảo mật Cloud, không phải trong repo không

Sau khi kết nối, Cloud thấy repo từ xa — không phải trạng thái chưa push trên laptop.

## Checklist trước khi kết nối

- [ ] Bạn có quyền push tới repo đích (hoặc dùng chiến lược fork nếu chỉ cần PR)
- [ ] Hiểu bảo vệ nhánh: push thẳng lên main bị chặn?
- [ ] Secrets không nằm trong repo; Cloud dùng [cấu hình Secrets](/guide/web-and-cloud/secrets-and-variables/)
- [ ] Tổ chức cho phép tích hợp GitHub bên thứ ba

## Các bước khuyến nghị (khái niệm)

1. Mở **kết nối GitHub** trong cài đặt Codex Web/Cloud
2. Chọn tổ chức và phạm vi repo (**thu nhỏ danh sách repo**)
3. Đọc văn bản quyền OAuth: thường đọc code và mở PR; quyền ghi tùy Tác vụ
4. Chạy một Tác vụ Cloud nhỏ trên repo thử để xác nhận
5. Thành công rồi mới đặt nhánh mặc định và biến môi trường nếu cần

UI và nút cụ thể tùy sản phẩm hiện tại.

## Quyền và bảo mật

| Thực hành | Vì sao |
|---|---|
| Dùng tài khoản máy hoặc bot riêng (đội) | Đường kiểm toán và offboarding |
| Không ủy quyền mọi repo riêng | Bán kính ảnh hưởng nhỏ hơn |
| Bật bảo vệ nhánh + review bắt buộc | Đầu ra Cloud vẫn qua review người |
| Định kỳ kiểm toán repo đã kết nối | Ngắt kết nối dự án đã rút |

## Tác vụ thường gặp sau khi kết nối

- Triển khai issue từ xa → [Tạo Pull Request](/guide/web-and-cloud/create-pull-requests/)
- Review PR và theo dõi → tích hợp [GitHub](/guide/integrations/github/)
- Kết hợp với [Automations](/skills/automations/scheduled-tasks/)

## Lỗi thường gặp

- Kết nối tài khoản GitHub cá nhân với repo org production kèm chính sách cá nhân
- Giả định Cloud truy cập được commit chưa push trên máy
- Lần đầu thử đã chạy Tác vụ không giới hạn trên monorepo lớn

## Tham chiếu

- Tài liệu tích hợp OpenAI Codex Cloud / GitHub
- KimYx0207 CX-10, CX-11
- stormzhang `26-git-github.md`, `10-cloud.md`

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud / Web  
**Ghi chú đối chiếu:** Trang phụ thuộc luồng kết nối GitHub hiện tại, mẫu ủy quyền, cài đặt phạm vi repo và lối vào UI Cloud — chi tiết tích hợp biến động cao cần tài liệu kết nối chính thức hiện hành trước khi trả về `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
