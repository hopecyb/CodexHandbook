---
title: Thông báo và màn hình Activity
description: Cấu hình nhắc khi tác vụ hoàn tất, khi cần cấp quyền và khi chờ câu trả lời.
locale: vi
source_locale: zh-CN
source_revision: 4a1c672
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 80
---

Thông báo cho biết khi nào bạn cần quay lại xử lý tác vụ; nó không thay bạn rà soát kết quả. Ứng dụng máy tính cho phép đặt thông báo khi một lượt làm việc kết thúc và điều khiển riêng thông báo yêu cầu quyền hoặc câu hỏi.

## Cấu hình đề xuất

Mở **Settings → Notifications**:

| Sự kiện | Đề xuất | Lý do |
|---|---|---|
| Turn completion | Báo khi chạy nền | Không cần liên tục theo dõi tác vụ dài |
| Permission | Bật | Tác vụ sẽ dừng nếu yêu cầu phê duyệt chưa được xử lý |
| Question | Bật | Bạn cần trả lời khi Codex thiếu ngữ cảnh quan trọng |

Hệ điều hành cũng phải cho phép ứng dụng ChatGPT trên máy tính gửi thông báo. Nếu hệ thống chặn, bạn vẫn không nhận được thông báo dù đã bật trong ứng dụng.

## Dùng Activity để xử lý nhiều cuộc trò chuyện

Khi Activity khả dụng, chọn biểu tượng chuông ở thanh bên để xem cuộc trò chuyện chưa đọc, đang chạy hoặc đang chờ trả lời. Phím tắt là:

- macOS: `Cmd + Option + U`
- Windows: `Ctrl + Alt + U`

Bộ lọc thay đổi theo giao diện hiện tại và có thể gồm Work, Chat, Pinned và Scheduled. Thứ tự xử lý nên là: chờ quyền hoặc thông tin → thất bại → đã hoàn tất nhưng chưa rà soát → vẫn đang chạy.

## Làm gì sau khi nhận thông báo

- **Hoàn tất:** mở diff và đầu ra kiểm chứng; đừng coi thông báo là kết luận nghiệm thu.
- **Yêu cầu quyền:** kiểm tra lệnh, tài nguyên đích, phạm vi ảnh hưởng và khả năng hoàn tác.
- **Chờ câu trả lời:** chỉ bổ sung ngữ cảnh cần thiết, không tiện tay mở rộng tác vụ.
- **Thất bại:** tìm lỗi có ý nghĩa đầu tiên rồi mới quyết định thử lại hay chỉnh giới hạn.

Cơ chế thông báo của CLI và IDE khác nhau: IDE không có mục cài đặt thông báo riêng; CLI có thể dùng cấu hình nâng cao để quyết định thông báo hoàn tất qua TUI hoặc chương trình ngoài. Đừng coi cài đặt của ứng dụng máy tính là công tắc chung cho mọi môi trường.

## Nguồn chính thức

- [Thông báo](https://learn.chatgpt.com/docs/notifications)
- [Cài đặt ứng dụng máy tính](https://learn.chatgpt.com/docs/app/settings)
