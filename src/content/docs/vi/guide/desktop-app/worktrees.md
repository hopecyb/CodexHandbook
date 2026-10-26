---
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
title: "Cây làm việc"
description: "Dùng Git worktree để tách biệt các cuộc trò chuyện song song và quay lại vùng làm việc cục bộ một cách an toàn."
locale: "vi"
source_locale: "zh-CN"
source_revision: "3569716"
translation_status: "reviewed"
translated_at: "2026-09-20"
sidebar:
  order: 40
reviewed_at: "2026-10-26"
---

Cây làm việc (worktree) cho phép cùng một kho Git có nhiều thư mục checkout độc lập. Mỗi thư mục có tệp và trạng thái nhánh riêng, nhưng dùng chung dữ liệu Git của kho mã. Nhờ vậy, nhiều cuộc trò chuyện lập trình có thể tiến hành song song mà không ghi đè tệp của nhau.

## Điều kiện sử dụng

- Dự án phải nằm trong một kho Git;
- Phạm vi của từng tác vụ phải có thể mô tả và nghiệm thu độc lập;
- Các tác vụ song song không nên sửa cùng một nhóm tệp cốt lõi.

Nếu bạn mới thực hành với Codex, trước tiên hãy hoàn thành tác vụ tuần tự ở chế độ Local. Chỉ dùng cây làm việc khi thời gian chờ hoặc xung đột tệp thực sự trở thành vấn đề.

## Tạo trong ứng dụng

1. Chọn **Worktree** bên dưới vùng nhập của cuộc trò chuyện mới;
2. Chọn nhánh bắt đầu: có thể là nhánh chính, nhánh tính năng hoặc nhánh hiện tại có thay đổi chưa stage;
3. Gửi lời nhắc để ứng dụng tạo Git worktree;
4. Kiểm tra, kiểm thử và đánh giá trong cuộc trò chuyện độc lập đó;
5. Khi sẵn sàng quay lại thư mục checkout cục bộ, dùng **Handoff**.

Cây làm việc được tạo theo mặc định ở trạng thái detached HEAD. Codex vẫn có thể làm việc ở đó, nhưng trước khi giữ lại hoặc chia sẻ commit, bạn cần xác định rõ nhánh đích và cách hợp nhất.

## Ví dụ hai tác vụ song song

| Cuộc trò chuyện | Tác vụ trong cây làm việc | Quyền sở hữu tệp | Nghiệm thu |
|---|---|---|---|
| A | Sửa lỗi đăng nhập | `src/auth/**` | Kiểm thử xác thực thành công |
| B | Bổ sung tài liệu xác thực | `docs/auth/**` | Kiểm tra liên kết thành công |

Đừng để A và B cùng sửa một lockfile hoặc tệp cấu hình dùng chung. Nếu thật sự cần, hãy thống nhất để một cuộc trò chuyện sửa tệp, còn cuộc trò chuyện kia chỉ cung cấp kết quả phân tích.

## Kiểm tra trước khi bàn giao

```bash
git status --short
git diff --check
git diff --stat
```

Sau đó chạy các bài kiểm thử phù hợp với tác vụ. Chỉ Handoff, commit hoặc hợp nhất khi bạn đã biết rõ mỗi thay đổi đến từ cuộc trò chuyện nào, nhánh đích là gì và kết quả xác minh có đạt hay không.

## Liên hệ với tác vụ định kỳ và Remote

- Tác vụ định kỳ trong kho Git có thể dùng cây làm việc nền riêng để tránh xung đột với công việc hiện tại;
- Remote cho phép điều khiển cuộc trò chuyện trong cây làm việc trên máy tính đã kết nối từ thiết bị di động; kho mã và lệnh vẫn ở trên máy tính đó hoặc trong môi trường phát triển từ xa của máy;
- Dự án không dùng Git không có cơ chế tách biệt bằng cây làm việc; tác vụ định kỳ sẽ dùng trực tiếp thư mục dự án.

## Tài liệu chính thức

- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Công việc kéo dài và các cuộc trò chuyện song song](https://learn.chatgpt.com/docs/long-running-work)
