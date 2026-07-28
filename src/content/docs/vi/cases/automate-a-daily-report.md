---
title: Tự động hóa báo cáo hàng ngày
description: Cố định công việc tổng hợp lặp lại thành script hoặc Skill có thể tái sử dụng.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Tự động hóa báo cáo hàng ngày

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Nhóm |
| Client | CLI |
| Thời gian ước tính | 1–2 giờ (bản đầu) |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Mỗi ngày tự động tạo tóm tắt thay đổi, kết quả test và danh sách việc cần làm.

**Tiêu chí thành công:** Một lệnh hoặc Skill tạo được Markdown định dạng cố định; thất bại có mã thoát rõ ràng.

## 2. Mẫu tham chiếu

Nhóm đã có case tương tự: [kiểm tra liên kết tài liệu theo lịch](/cases/use-cases/team-automation/scheduled-link-check/).

## 3. Prompt đề xuất

```text
Mục tiêu: Tạo Markdown báo cáo hàng ngày từ hôm qua đến nay.
Nội dung: tóm tắt git log, trạng thái CI (nếu đọc được), danh sách PR mở.
Đầu ra: reports/daily-YYYY-MM-DD.md
Ràng buộc: Chỉ đọc git; không push; cung cấp scripts/generate-daily.sh để chạy lại dễ dàng.
```

## 4. Đóng gói lại

- [Ví dụ Skill tự động hóa](/skills/examples/automation-skill/)
- [Tác vụ theo lịch](/skills/automations/scheduled-tasks/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Use cases Codex hiện tại trên OpenAI Developers vẫn gồm các kịch bản tự động hóa lặp lại như “Automate bug triage”, “Turn feedback into actions”; trang này định nghĩa báo cáo hàng ngày là “Markdown định dạng cố định + mã thoát rõ + script/Skill tái sử dụng được” — mô hình quy trình tự động hóa ổn định, không phụ thuộc một tích hợp cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
