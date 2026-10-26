---
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
title: "Cài đặt và bắt đầu sử dụng"
description: "Làm quen với dự án, cuộc trò chuyện, Codex và nơi đánh giá thay đổi trong ứng dụng ChatGPT trên máy tính."
locale: "vi"
source_locale: "zh-CN"
source_revision: "080436d"
translation_status: "reviewed"
translated_at: "2026-09-20"
sidebar:
  order: 10
reviewed_at: "2026-10-26"
---

Chương này dành cho người lần đầu mở ứng dụng ChatGPT trên máy tính. Mục tiêu không phải là ghi nhớ mọi nút bấm, mà là hoàn thành một **tác vụ nhỏ có thể đánh giá và xác minh**.

Xem các bước cài đặt và đăng nhập ở trang [Cài đặt ứng dụng trên máy tính](/vi/guide/getting-started/install-desktop-app/). Hiện tại, bản chính thức có cho macOS, Windows và Linux; sau khi đăng nhập, bạn có thể tạo cuộc trò chuyện, tạo dự án hoặc mở một thư mục cục bộ.

## Trước tiên, hãy làm quen với ba đối tượng

| Đối tượng | Dùng để làm gì | Người mới nên làm gì trước |
|---|---|---|
| Dự án hoặc thư mục | Cung cấp tệp và thư mục làm việc cho cuộc trò chuyện | Mở một kho mã thực hành, chưa dùng thư mục sản xuất |
| Cuộc trò chuyện | Lưu mục tiêu, bối cảnh, tiến độ và kết quả | Dùng một cuộc trò chuyện cho một mục tiêu rõ ràng |
| Codex | Đọc, sửa và xác minh nội dung dự án | Bắt đầu bằng một thay đổi ít rủi ro, dễ kiểm tra |

Giao diện ứng dụng sẽ tiếp tục thay đổi, nhưng ba đối tượng này ổn định hơn vị trí của một nút bấm cụ thể.

## Hoàn thành tác vụ thực tế đầu tiên

Chuẩn bị một kho Git đã có sẵn. Trước hết, xác nhận không có thay đổi chưa ghi nhận mà bạn cần giữ lại. Sau đó mở thư mục ấy trong ứng dụng và tạo cuộc trò chuyện Codex.

Nhập:

```text
Trước tiên hãy đọc README.md và chỉ sửa mục “Chạy cục bộ”:
1. Sửa lệnh khởi động đã không còn hoạt động;
2. Giữ nguyên các mục khác;
3. Sau khi sửa, hiển thị diff và chạy những lệnh xác minh có thể chạy trong tài liệu;
4. Nếu không thể xác minh, hãy nêu rõ lý do, đừng tuyên bố đã hoàn thành.
```

Khi hoàn tất, đừng chỉ đọc bản tóm tắt trong cuộc trò chuyện. Hãy kiểm tra thêm:

1. Ngăn đánh giá có chỉ hiển thị những tệp dự kiến không;
2. Nội dung bị xóa có hợp lý không;
3. Đầu ra terminal có thực sự chứng minh kết luận “xác minh thành công” không;
4. `git diff` có đúng với phạm vi tác vụ không.

## Chọn Chat, Work hay Codex

- Chỉ hỏi kiến thức hoặc thảo luận ý tưởng: dùng Chat.
- Xử lý công việc chung trải qua nhiều tệp và công cụ: dùng Work.
- Cần hiểu, sửa và kiểm thử kho mã: dùng Codex.

Với câu hỏi nhất thời không cần giữ bối cảnh lâu dài, bạn có thể dùng Quick chat; công việc cần theo dõi liên tục nên ở trong cuộc trò chuyện thông thường hoặc dự án.

## Khi gặp lỗi, kiểm tra gì trước

- **Không thấy tệp**: xác nhận đã mở đúng thư mục và quyền truy cập tệp không bị từ chối.
- **Không chạy được lệnh**: xác nhận đã cài các phần phụ thuộc, rồi xem lỗi thực tế đầu tiên trong terminal.
- **Thay đổi cũ lẫn vào**: dùng `git status` để phân biệt thay đổi đã có trước tác vụ với thay đổi lần này.
- **Giao diện khác bài viết**: tìm theo các đối tượng “dự án/thư mục, cuộc trò chuyện, đánh giá, terminal”, thay vì dựa vào vị trí cố định trong ảnh chụp màn hình.

Tiếp theo, hãy đọc [Diff, bình luận và đánh giá](/vi/guide/desktop-app/diffs-comments-and-review/) và [Terminal tích hợp](/vi/guide/desktop-app/integrated-terminal/).

## Tài liệu chính thức

- [Ứng dụng ChatGPT trên máy tính](https://learn.chatgpt.com/docs/app)
- [Đánh giá mã](https://learn.chatgpt.com/docs/code-review)
