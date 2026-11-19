---
title: "Cuộc trò chuyện và Agent chạy song song"
description: "Dùng cuộc trò chuyện và worktree riêng để thực hiện đồng thời những tác vụ độc lập có thể nghiệm thu riêng."
locale: "vi"
source_locale: "zh-CN"
source_revision: 'a028309'
translation_status: "reviewed"
translated_at: "2026-09-20"
sidebar:
  order: 30
legacyVerification:
  status: "verified"
  products: "App, CLI, IDE"
  checkedAt: "2026-08-26"
reviewed_at: "2026-10-26"
---

Đơn vị cơ bản của công việc song song là một cuộc trò chuyện có ngữ cảnh, tin nhắn, kết quả và mục tiêu riêng. Một việc không phù hợp để chạy song song chỉ vì nó có nhiều bước. **Các tác vụ phải độc lập, có ranh giới tệp rõ ràng và có thể nghiệm thu riêng**.

![Sơ đồ luồng chính giao việc độc lập cho nhiều Agent con rồi tổng hợp bằng chứng và xung đột](/illustrations/flow-subagents.webp)

## Trước tiên, xem có thể chạy song song không

| Có thể chạy song song | Nên làm tuần tự |
|---|---|
| Hai cuộc khảo sát chỉ đọc | Việc sau phụ thuộc kết luận của việc trước |
| Mã và tài liệu ở thư mục không chồng lấn | Cùng sửa một tệp cốt lõi |
| Tạo nguyên mẫu riêng cho hai phương án | Yêu cầu vẫn thay đổi thường xuyên |
| Mỗi việc có bài kiểm thử độc lập | Chỉ biết đúng sai sau khi tích hợp cùng nhau |

Hướng dẫn chính thức khuyên tránh để hai cuộc trò chuyện ghi vào cùng nguồn dữ liệu. Khi lập trình song song, hãy dùng các Git worktree khác nhau.

## Từ đơn giản đến phức tạp

### 1. Bắt đầu bằng tác vụ chỉ đọc

```text
Tác vụ: chỉ phân tích lỗi gần nhất của mô-đun xác thực; không sửa tệp.
Phạm vi: src/auth/** và các bài kiểm thử liên quan.
Bàn giao: giả thuyết nguyên nhân, đường dẫn bằng chứng, điểm chưa chắc chắn
          và lệnh kiểm chứng được đề xuất.
```

Tác vụ chỉ đọc không gây xung đột hợp nhất, phù hợp cho lần thực hành đầu tiên.

### 2. Sau đó mới chạy song song tác vụ ghi

Với mỗi cuộc trò chuyện, ghi rõ mục tiêu, quyền sở hữu tệp, vùng cấm và tiêu chí nghiệm thu:

```text
Mục tiêu: bổ sung tài liệu về mã lỗi xác thực.
Quyền sở hữu: chỉ docs/auth/**.
Không được: sửa src/**, tệp khóa và cấu hình dùng chung.
Nghiệm thu: chạy pnpm check:links và báo kết quả.
```

Cuộc trò chuyện lập trình nên dùng [worktree](/vi/guide/desktop-app/worktrees/) riêng. Cấu hình dùng chung do cuộc trò chuyện chính hoặc một người được chỉ định quản lý.

### 3. Cuối cùng, tổng hợp và kiểm tra

Đừng chỉ ghép các kết quả lại. Cuộc trò chuyện chính cần kiểm tra:

1. Mỗi việc có bàn giao đúng ranh giới không.
2. Bằng chứng và kiểm thử có thể tái hiện không.
3. Các kết luận có mâu thuẫn không.
4. Sau khi kết hợp có cần chạy thêm kiểm thử tích hợp không.

## Tác vụ dài và chế độ Goal

Nhập `/goal` trong ứng dụng máy tính, CLI hoặc IDE để bắt đầu chế độ Goal. Mục tiêu nên gồm kết quả, giới hạn và tiêu chí kiểm chứng. Mỗi cuộc trò chuyện có mục tiêu riêng. Chạy song song không mở rộng sandbox hay quyền; thao tác cần quyết định vẫn sẽ tạm dừng.

Để xem cách điều phối chi tiết hơn ở cấp công cụ, đọc [Agent con](/vi/guide/agent-work/subagents/).

## Nguồn chính thức

- [Tác vụ dài](https://learn.chatgpt.com/docs/long-running-work)
- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Agent con](https://learn.chatgpt.com/docs/agent-configuration/subagents)
