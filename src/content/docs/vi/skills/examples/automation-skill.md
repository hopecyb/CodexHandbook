---
title: 'Ví dụ: Skill tự động hóa'
description: Đóng kiểm tra lặp hoặc sinh báo cáo thành Skill.
locale: vi
source_locale: zh-CN
source_revision: 0d33e2d
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Ví dụ: Skill tự động hóa

## Khung SKILL.md

```md
---
name: daily-report
description: Tổng hợp thay đổi hôm qua, kết quả kiểm thử và việc cần làm thành Markdown báo cáo ngày. Dùng khi người dùng muốn báo cáo ngày, tài liệu standup, tổng hợp tiến độ.
---

## Quy trình
1. Đọc git log (khoảng thời gian chỉ định) và tóm tắt trạng thái CI
2. Liệt kê mục hoàn thành, mục bị chặn, kế hoạch ngày mai
3. Xuất ra reports/daily-YYYY-MM-DD.md
4. Không gửi email hoặc tin nhắn trừ khi tôi yêu cầu rõ

## scripts/
- scripts/collect-metrics.sh(tùy chọn)
```

## Liên quan

- [Case tự động hóa báo cáo ngày](/vi/cases/automate-a-daily-report/)
- [Tác vụ hẹn giờ](/vi/skills/automations/scheduled-tasks/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở Kiểm chứng:** Trang này cung cấp khung minh họa cho Skill kiểu tổng hợp lặp — vẫn thuộc mẫu workflow ổn định mà Codex/Skills hiện tại có thể mang, không gắn lối vào tự động hóa cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
