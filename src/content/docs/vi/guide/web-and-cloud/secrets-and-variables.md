---
title: Secrets và biến môi trường
description: "Tiêm an toàn API key, token và cấu hình không nhạy cảm vào Cloud."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Tác vụ Cloud thường cần API riêng, registry package hoặc cơ sở dữ liệu. Chứng chỉ phải được tiêm qua **Secrets và biến môi trường** — không viết vào code, Prompt, issue, log chat hoặc lịch sử Git.

## Nội dung phủ

- Secrets vs biến môi trường thông thường
- Cách cấu hình trong console Cloud / cài đặt repo
- Quan hệ với Secrets GitHub Actions

## Secret vs biến môi trường

Một phân chia đơn giản:

- **Secret**: giá trị người khác không được thấy — API key, mật khẩu DB, khóa riêng
- **Biến môi trường**: cấu hình chương trình đọc — một số nhạy cảm, một số không

Không phải mọi biến môi trường đều là Secret, nhưng Secret phải dùng tiêm an toàn — không hard-code.

## Phân biệt khái niệm

| Loại | Ví dụ | Yêu cầu lưu trữ |
|---|---|---|
| **Secret** | API key, khóa riêng, mật khẩu DB | Mã hóa, che trong UI, không vào log |
| **Biến** | `NODE_ENV=production`, feature flag | Có thể không mã hóa; vẫn tránh lộ chiến lược nghiệp vụ |
| **Repo `.env`** | Phát triển cục bộ | **Không commit**; Cloud dùng Secrets console |

Tổng quan Ngữ cảnh nhạy cảm: [Ngữ cảnh nhạy cảm](/guide/context/sensitive-context/)

## Hiểu nhầm thường gặp

### 1. «Tôi chỉ dán key một lần — rủi ro gì?»

Rủi ro cao. Một khi key xuất hiện trong:

- Hội thoại
- Issue
- Mô tả PR
- Lịch sử shell
- Commit Git

nó có thể lan qua log, thông báo, ảnh chụp, lịch sử và cộng tác viên.

### 2. «Tôi sẽ commit `.env` để Cloud đọc được»

`.env` dành cho dev cục bộ, không phải kiểm soát phiên bản. Trong Cloud, ưu tiên quản lý Secrets của nền tảng.

### 3. «Tên Secret không quan trọng nếu giá trị đúng»

Nhiều fail là vấn đề đặt tên/phạm vi:

- Gõ sai
- Phạm vi sai
- Code đọc tên biến khác

Giữ tên thống nhất giữa tài liệu, code và cài đặt Cloud.

## Nguyên tắc cấu hình

1. **Quyền tối thiểu**: mỗi Secret chỉ đủ cho một lớp Tác vụ
2. **Cô lập theo repo/môi trường**: tách staging và production
3. **Xoay vòng**: đổi token định kỳ; chấp nhận Tác vụ cũ có thể fail
4. **Kiểm toán**: lần theo ai thêm/sửa Secrets (quy trình đội)
5. **Không bao giờ echo**: log Tác vụ và bình luận PR không được hiện giá trị Secret

## Luồng cấu hình tối thiểu

1. Liệt kê dịch vụ ngoài Tác vụ cần tới
2. Cấp chỉ Secrets cần thiết — tránh quyền production đầy đủ ngày đầu
3. Ghi **tên** Secret cần thiết trong tài liệu — không ghi giá trị
4. Chạy Tác vụ thử để xác nhận đọc được
5. Mới làm việc thật

## Quy trình khuyến nghị

```text
1. Thêm Secret trong Cloud / cài đặt GitHub (tên UPPER_SNAKE, vd. NPM_TOKEN)
2. Trong AGENTS.md ghi «cần NPM_TOKEN cho package riêng» — không ghi giá trị
3. Khởi động Tác vụ Cloud; xác nhận env đọc được (fail thì kiểm tên và phạm vi)
4. Căn chỉnh đặt tên Secrets GitHub Actions với Cloud để tài liệu dễ hơn
```

Với [tích hợp GitHub](/guide/integrations/github/), ưu tiên Secrets gốc của nền tảng thay vì để Agent copy key từ thân issue.

## Khi nào coi là Secret

Nếu chưa chắc, hỏi:

- Rò rỉ có gây thiệt hại tài chính, dữ liệu, quyền hoặc nghiệp vụ không?

Nếu có, nó không được xuất hiện trong tài liệu công khai, Prompt, chat hoặc repo.

## Truy cập Internet và Secrets

Một số Tác vụ cần pull package đi ra hoặc gọi API:

- Chính sách đi ra theo quy tắc bảo mật tổ chức
- Dù có truy cập đi ra, không dán Bearer token vào Prompt
- Mặc định từ chối truy cập Secret production với repo không đáng tin

## Lỗi thường gặp

| Lỗi | Rủi ro |
|---|---|
| Commit `.env` | Rò rỉ vĩnh viễn |
| Dán key vào issue/mô tả Tác vụ | Lan qua log và thông báo |
| Secrets production trên thí nghiệm | Thay đổi production ngoài ý muốn |
| Tên Secret không khớp code | Tác vụ fail im lặng |
| Token admin vì tiện | Bán kính ảnh hưởng không kiểm soát |

## Checklist nghiệm thu

- [ ] Không hard-code key trong repo (dùng máy quét secrets)
- [ ] Tên Secret Cloud khớp tài liệu
- [ ] Log fail không chứa plaintext Secrets
- [ ] Quy trình offboarding/xoay vòng đã định

## Tham chiếu

- OpenAI Codex Cloud secrets

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud  
**Ghi chú đối chiếu:** Trang mô tả cụ thể vị trí Secrets Cloud, phạm vi repo và quan hệ với Secrets GitHub Actions, nhưng thiếu tài liệu Secrets chính thức hiện hành đủ mạnh để xác minh từng khẳng định; nên đánh `outdated` đến khi có nguồn chính thức.  
**Kiểm chứng gần nhất:** 2026-07-26
