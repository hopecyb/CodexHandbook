---
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE"
  checkedAt: "2026-08-26"
title: Diff, bình luận và đánh giá
description: Kiểm tra thay đổi thực tế và để lại phản hồi theo từng dòng trong ngăn đánh giá trước khi commit hoặc push.
locale: vi
source_locale: zh-CN
source_revision: "32ee40c"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 50
---

Bản tóm tắt trong cuộc trò chuyện là cách Codex giải thích công việc; diff Git mới cho thấy các tệp thực sự đã thay đổi thế nào. Ngăn đánh giá của ứng dụng trên máy tính có thể hiển thị diff, thêm bình luận theo từng dòng và cho bạn quyết định phần nào cần stage, hoàn tác, commit hoặc push.

Dự án phải nằm trong một kho Git thì mới dùng được đầy đủ ngăn đánh giá và `/review`.

## Hai lớp đánh giá

Trước tiên, bạn tự kiểm tra phạm vi thay đổi; sau đó gọi một reviewer độc lập để tìm vấn đề trong phần triển khai:

1. Mở ngăn đánh giá, xem số lượng và đường dẫn của các tệp đã thay đổi;
2. Chọn **Last turn** để xác định chính xác lượt này đã thay đổi gì;
3. Chuyển giữa **Unstaged**, **Staged**, **Commit** hoặc **Branch** để xác nhận phạm vi đánh giá;
4. Chạy `/review` trong vùng nhập;
5. Chọn so sánh với nhánh gốc, đánh giá thay đổi chưa commit, chỉ định commit hoặc dùng tiêu chí tùy chỉnh;
6. Đọc các phát hiện theo thứ tự ưu tiên rồi quyết định có sửa hay không.

Reviewer của `/review` mặc định chỉ có quyền đọc và không sửa cây làm việc. Nếu sau đó bạn yêu cầu Codex sửa các phát hiện, các quy tắc sandbox và phê duyệt ban đầu vẫn áp dụng.

## Một bộ tiêu chí đánh giá có thể dùng lại

```text
Hãy đánh giá các thay đổi hiện chưa commit, tập trung kiểm tra:
- Có thay đổi nào vượt phạm vi tác vụ không;
- Có hồi quy hành vi, trường hợp biên hoặc vấn đề bảo mật không;
- Kiểm thử có bao phủ các đường dẫn thất bại không;
- Tài liệu và phần triển khai có nhất quán không.

Trước tiên liệt kê vấn đề theo mức độ nghiêm trọng; mỗi vấn đề nêu tệp,
vị trí, bằng chứng và đề xuất cách sửa nhỏ nhất.
Nếu không phát hiện vấn đề, hãy nói rõ và liệt kê rủi ro kiểm thử còn bỏ ngỏ.
```

## Dùng bình luận theo dòng để tránh mơ hồ

Di chuột lên dòng đáng ngờ, chọn dấu **+** xuất hiện rồi viết phản hồi cụ thể. Sau khi ghi xong mọi bình luận, hãy gửi một chỉ dẫn rõ ràng:

```text
Xử lý các bình luận theo dòng tôi đã để lại. Giữ phạm vi thay đổi ở mức nhỏ nhất,
sau đó chạy lại các bài kiểm thử liên quan và hiển thị diff mới.
```

Bình luận hữu ích cần nêu rủi ro hoặc điều kiện nghiệm thu, ví dụ: “Nếu mảng rỗng thì đoạn này trả về gì?” Chỉ ghi “Chỗ này sai” thường không đủ.

## Stage và hoàn tác

Ngăn đánh giá có thể stage, bỏ stage hoặc hoàn tác toàn bộ diff, một tệp hay một hunk riêng lẻ. Hoàn tác sẽ loại bỏ thay đổi; trước khi thao tác, hãy xác nhận đó không phải thay đổi của người dùng đã có từ trước khi tác vụ bắt đầu.

Nên giữ thứ tự nghiệm thu nhất quán: phạm vi → hành vi → kiểm thử → bảo mật → khả năng bảo trì. Xem thêm [Đánh giá diff](/vi/guide/quality/review-diffs/).

## Tài liệu chính thức

- [Đánh giá mã](https://learn.chatgpt.com/docs/code-review)
