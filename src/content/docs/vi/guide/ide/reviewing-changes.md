---
title: "Rà soát thay đổi trong IDE"
description: "Kiểm tra diff bên cạnh mã nguồn và dùng reviewer chỉ đọc để rà soát cây làm việc."
locale: "vi"
source_locale: "zh-CN"
source_revision: "a6badd5"
translation_status: "reviewed"
translated_at: "2026-09-20"
sidebar:
  order: 70
legacyVerification:
  status: "verified"
  products: "IDE"
  checkedAt: "2026-08-26"
reviewed_at: "2026-10-26"
---

IDE giúp bạn đọc nhanh bản tóm tắt và xem diff ngay cạnh mã nguồn, nhưng “thay đổi đã xuất hiện trong trình soạn thảo” không có nghĩa là đã được nghiệm thu. Hãy kiểm tra diff trước, chạy kiểm thử sau, rồi mới quyết định giữ lại những gì.

## Hoàn thành một lượt rà soát cục bộ

1. Đọc bản tóm tắt kết quả nhưng không dùng nó thay cho diff.
2. Mở rộng các dòng đã thay đổi và kiểm tra từng tệp bị ảnh hưởng.
3. Giữ những chỉnh sửa cần thiết; yêu cầu sửa tiếp phần nằm ngoài phạm vi.
4. Chạy `/review` trong ô nhập.
5. Chọn so sánh với nhánh cơ sở hoặc rà soát các thay đổi chưa commit.
6. Chạy kiểm thử và kiểm tra tĩnh của dự án trong terminal IDE.
7. Cuối cùng, dùng công cụ Git để xác nhận lại trạng thái.

`/review` chỉ xuất hiện khi dự án đang mở thuộc một kho Git. Lệnh này báo cáo các vấn đề theo thứ tự ưu tiên và không sửa cây làm việc. Trong IDE, bạn có thể chọn:

- **Review against a base branch**: so sánh nhánh hiện tại với nhánh cơ sở đã chọn.
- **Review uncommitted changes**: kiểm tra các thay đổi hiện tại trong cây làm việc.

Theo mặc định, kết quả xuất hiện trong cuộc trò chuyện hiện tại. Đặt `chatgpt.reviewDelivery` thành `detached` để mở một cuộc trò chuyện review riêng.

## Ví dụ: nêu tiêu chí rõ ràng cho reviewer

```text
Rà soát các thay đổi hiện chưa commit. Ưu tiên tìm lỗi có thể gây hành vi sai, hỏng dữ liệu hoặc vấn đề bảo mật.
Bỏ qua sở thích thuần túy về phong cách. Mỗi phát hiện phải nêu vị trí tệp cụ thể, điều kiện kích hoạt và tác động có thể kiểm chứng.
Nếu không có phát hiện nào, hãy nêu các khoảng trống kiểm thử còn lại.
```

## Danh sách nghiệm thu

- [ ] Các tệp đã sửa nằm trong phạm vi cho phép của tác vụ.
- [ ] Không có tệp nhạy cảm, thao tác xóa ngoài ý muốn hoặc định dạng lại toàn bộ tệp.
- [ ] Đã kiểm tra các đường đi gây lỗi và trường hợp biên.
- [ ] Kiểm thử, lint và kiểm tra kiểu dữ liệu theo yêu cầu của dự án đều đạt.
- [ ] Các phát hiện ưu tiên cao của reviewer đã được sửa hoặc rủi ro đã được chấp nhận rõ ràng.
- [ ] Kết quả `git diff --check` và `git status --short` đúng như dự kiến.

Nếu cần bình luận theo dòng, đưa thay đổi vào staging hoặc hoàn tác từng hunk, hãy dùng [Diff, bình luận và rà soát](/vi/guide/desktop-app/diffs-comments-and-review/) trong ứng dụng máy tính. Để xem phương pháp chung, đọc [Rà soát diff](/vi/guide/quality/review-diffs/).

## Nguồn chính thức

- [Rà soát mã](https://learn.chatgpt.com/docs/code-review)
- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
