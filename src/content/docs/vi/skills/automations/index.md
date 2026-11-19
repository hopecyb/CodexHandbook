---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / ứng dụng máy tính; CLI và IDE chỉ dùng để chuẩn bị, kiểm thử và không có giao diện quản lý"
  checkedAt: "2026-08-26"
title: Tác vụ theo lịch
description: Cho ChatGPT lặp lại theo lịch những tác vụ đã được kiểm chứng.
locale: vi
source_locale: zh-CN
source_revision: 'c6510bf'
translation_status: stale
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Scheduled task (tác vụ theo lịch) cho phép ChatGPT lặp lại công việc ở chế độ nền theo một lịch định trước. Nó phù hợp với báo cáo định kỳ, theo dõi liên tục và công việc bảo trì lặp lại. Nó không phải webhook dùng chung, sự kiện của kho mã hay hệ thống CI.

![Minh họa: băng chuyền vòng dưới chiếc đồng hồ và lịch lớn — thẻ nhiệm vụ đã kiểm chứng chạy theo lịch và tạo báo cáo, người duyệt xem rồi đồng ý và có thể tạm dừng bất cứ lúc nào](/illustrations/automations-schedule.webp)

## Trước tiên, xem có phù hợp không

| Phù hợp | Không phù hợp |
|---|---|
| Nguồn đầu vào ổn định và đầu ra có thể rà soát | Mỗi lần chạy đều phải xác định lại vấn đề |
| Kích hoạt theo thời gian hoặc khoảng lặp | Phải kích hoạt chính xác khi Git push hoặc tạo PR |
| Kiểm tra chỉ đọc, tóm tắt và bản nháp | Tự động hợp nhất nhánh chính hoặc xóa hàng loạt mà không có người giám sát |
| Có điều kiện rõ ràng khi không có thay đổi và khi phải dừng | Thử lại vô hạn sau khi thất bại |

## Nơi quản lý hiện tại

- Tạo và quản lý tác vụ theo lịch trên ChatGPT Web hoặc ứng dụng máy tính.
- Codex CLI và tiện ích IDE không có giao diện quản lý Scheduled task; hãy dùng chúng để thử prompt, Skill hoặc script trước.
- Ứng dụng máy tính có thể chạy tác vụ với dự án cục bộ hoặc worktree tách biệt, nhưng máy phải bật, ứng dụng phải đang chạy và dự án vẫn còn trên đĩa.
- Tác vụ trên Web có thể dùng ngữ cảnh đã tải lên, công cụ đã kết nối, Skills và Plugins, nhưng không thể trực tiếp đọc thư mục cục bộ.

## Các trang trong nhóm này

- [Hướng dẫn đầy đủ về tác vụ theo lịch](/vi/skills/automations/scheduled-tasks/): chọn cách chạy, viết prompt dùng lâu dài, đặt quyền và tiêu chí nghiệm thu.

## Nguồn chính thức

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)
