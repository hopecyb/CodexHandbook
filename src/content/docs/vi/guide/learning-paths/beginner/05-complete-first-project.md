---
title: "Hoàn thành dự án nhỏ đầu tiên"
description: "Bàn giao thông báo, biên bản rà soát và khôi phục thay vì chỉ viết cảm nghĩ học tập."
contentType: "path"
audiences:
  - "beginner"
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 50
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Đã bổ sung tài liệu cố định và bản tham khảo của tác giả; script thao tác tệp trong thư mục tạm đã được chạy, nhưng chưa kiểm thử mô hình hoặc người đọc tự hoàn thành."
  evidence:
    - label: "Biên bản thao tác tệp của tác giả"
      href: "/downloads/first-project/validation/record.json"
prev:
  link: "/vi/guide/learning-paths/beginner/04-review-results/"
  label: "Xem xét kết quả"
next:
  link: "/vi/cases/analyze-a-spreadsheet/"
  label: "Tiếp tục với báo cáo bán hàng hằng tuần"
locale: "vi"
source_locale: "zh-CN"
source_revision: "cc1139b"
translation_status: "reviewed"
translated_at: "2026-09-20"
reviewed_at: "2026-10-26"
---

## Điều kiện trước khi bắt đầu

Thông báo đã qua rà soát từng mục, facts.md và private-note.md vẫn nguyên trạng, và records có lưu biên bản kiểm tra của bạn.

## Thử khôi phục một lần

1. Sao chép toàn bộ thư mục `work` vào thư mục `backup-final` mới và xác nhận đủ ba tệp.
2. Sao chép thêm một bản vào thư mục `recovery-drill` mới. Chỉ trong bản sao luyện tập này, đổi notice.md thành “phiên bản sai để luyện khôi phục”. Giữ work thật không đổi.
3. Mở tệp luyện tập để xác nhận nó thực sự đã thay đổi, rồi sao chép notice.md đúng từ backup-final đè lên.
4. So sánh lần lượt cả ba tệp trong recovery-drill với bản sao lưu để xác nhận nội dung giống nhau; đồng thời kiểm tra work không đổi.

Có thể thực hiện bằng trình quản lý tệp và trình soạn thảo. Trước tiên phải xác nhận đường dẫn đích thực sự là bản sao luyện tập. Nếu đã có thư mục trùng tên, hãy chọn tên mới để không ghi đè nội dung khác. Nếu không xác nhận được kết quả khôi phục, hãy ghi “chưa xác nhận” vào biên bản.

## Lưu kết quả có thể bàn giao

Sao chép `templates/handoff.md` vào records. Điền theo thực tế phiên bản ứng dụng, các tệp cuối cùng, căn cứ, bằng chứng rà soát, cách đăng ký còn chưa rõ và kết quả khôi phục. Lưu hướng dẫn tác vụ đã dùng lần này để lần sau có thể thay tài liệu.

Bàn giao gồm notice.md cuối cùng, facts.md gốc, review.md và handoff.md do bạn tự viết, cùng hướng dẫn tác vụ có thể tái sử dụng. Đây là tệp học tập, không phải quyền xuất bản thực tế.

## Thế nào là hoàn thành

Thông báo có căn cứ và không bịa điều chưa biết; phạm vi sửa đúng; đã xác định lỗi trong mẫu sai; đã thực sự thực hiện và ghi lại bài tập khôi phục; nội dung bàn giao giúp người khác tìm lại căn cứ và việc còn bỏ ngỏ. Chỉ viết “ba tác vụ thành công” chưa đủ chứng minh hoàn thành.

[Biên bản xác minh thao tác tệp](/downloads/first-project/validation/record.json) và [script tái hiện](/downloads/first-project/validation/reproduce.py) của tác giả chỉ chứng minh quy trình sao chép, khôi phục tham khảo trong thư mục tạm. Bài tập chính không cần Python; các tài liệu đó cũng không thay thế thao tác thực tế của bạn.

Tiếp tục với [báo cáo bán hàng hằng tuần](/vi/cases/analyze-a-spreadsheet/) hoặc [lộ trình người sáng tạo](/vi/guide/learning-paths/creator/).

[Bộ bài tập và hướng dẫn chuẩn bị](/vi/guide/learning-paths/beginner/).
