---
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
title: "Terminal tích hợp"
description: "Chạy lệnh trong dự án hoặc worktree hiện tại và xác minh kết quả tác vụ bằng đầu ra thực tế."
locale: "vi"
source_locale: "zh-CN"
source_revision: "727e93e"
translation_status: "reviewed"
translated_at: "2026-09-20"
sidebar:
  order: 60
reviewed_at: "2026-10-26"
---

Mỗi cuộc trò chuyện trong ứng dụng ChatGPT trên máy tính đều có một terminal gắn với dự án hoặc worktree hiện tại. Đây không chỉ là nơi “xem log”, mà còn là cửa sổ bằng chứng để bạn kiểm tra kết luận của Codex.

Bạn có thể mở bằng biểu tượng terminal ở góc trên bên phải ứng dụng, hoặc nhấn đồng thời `Ctrl` và phím dấu huyền. ChatGPT có thể đọc đầu ra của terminal hiện tại, nên bạn cũng có thể nhờ nó phân tích bản build lỗi hoặc máy chủ phát triển đang chạy.

## Quy trình xác minh tối thiểu

Trong một dự án JavaScript, bạn có thể chạy lần lượt:

```bash
git status --short
pnpm test
pnpm run lint
```

Lệnh ở mỗi dự án có thể khác nhau. Trước tiên hãy xem `README.md`, `package.json` hoặc quy tắc dự án. Đưa các lệnh đã xác nhận vào prompt:

```text
Sau khi sửa, hãy chạy pnpm test và pnpm run lint.
Báo cáo trạng thái thoát của từng lệnh; nếu lệnh nào thất bại, đừng khẳng định tác vụ đã hoàn thành.
```

Khi nghiệm thu, tối thiểu hãy ghi lại: đã chạy gì, lệnh có thoát thành công không, thông báo lỗi hữu ích đầu tiên khi thất bại và những kiểm tra nào chưa được chạy.

## Xử lý tiến trình chạy lâu

Máy chủ phát triển chạy liên tục không có nghĩa là lệnh bị treo. Sau khi khởi động, hãy kiểm tra:

- Đầu ra có hiện địa chỉ cục bộ không.
- Trình duyệt có mở được trang không.
- Sau đó terminal có báo lỗi lúc chạy không.

Chỉ gửi tín hiệu ngắt khi cần dừng. Đừng khởi động lặp nhiều máy chủ chỉ vì tạm thời chưa có đầu ra mới.

## Action có thể tái sử dụng

Nếu thường xuyên chạy cùng một lệnh, bạn có thể định nghĩa Action trong môi trường cục bộ. Nó sẽ xuất hiện như thao tác nhanh trong ứng dụng máy tính và chạy ở terminal tích hợp. Action phù hợp để gói các bước xác minh ít rủi ro như `test`, `lint`, `build`, nhưng không phù hợp để che giấu thao tác phát hành lên production hoặc dọn dẹp cơ sở dữ liệu.

## Ranh giới an toàn

- Đừng dán khóa production vào cuộc trò chuyện hoặc lịch sử terminal.
- Với lệnh chưa hiểu, trước tiên hãy yêu cầu giải thích mục tiêu, phạm vi ảnh hưởng và cách hoàn tác.
- Đừng chạy lại một cách mù quáng các lệnh xóa, migration hoặc phát hành trong môi trường production.
- Terminal có thể chạy lệnh không có nghĩa là lệnh đó đã được phê duyệt về mặt nghiệp vụ.

Các lệnh thường gặp trong tài liệu chính thức gồm `git status`, `git pull --rebase`, kiểm thử và lint; với dự án này, tài liệu riêng của dự án phải là nguồn quyết định lệnh cuối cùng.

## Nguồn chính thức

- [Terminal tích hợp](https://learn.chatgpt.com/docs/integrated-terminal)
- [Môi trường cục bộ](https://learn.chatgpt.com/docs/environments/local)
