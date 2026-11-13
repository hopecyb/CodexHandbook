---
title: "Làm việc với tệp"
description: "Chỉ thêm một dòng vào tệp được chỉ định và kiểm tra thay đổi thực tế."
contentType: "path"
audiences:
  - "beginner"
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 20
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Đã bổ sung đủ tài liệu cố định và kết quả tham khảo của tác giả. Script thao tác tệp trong thư mục tạm đã được chạy, nhưng chưa có bài kiểm tra hoàn thành độc lập với mô hình hoặc người học."
prev:
  link: "/vi/guide/learning-paths/beginner/01-talk-to-codex/"
  label: "Trò chuyện với Codex"
next:
  link: "/vi/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Giao tác vụ rõ ràng"
locale: "vi"
source_locale: "zh-CN"
source_revision: "ec5c2d3"
translation_status: "reviewed"
translated_at: "2026-09-20"
reviewed_at: "2026-10-26"
---

## Điều kiện tiên quyết

Bạn đã hoàn thành bước một và `work` vẫn chứa ba tệp gốc. Giữ `starter` bên ngoài thư mục làm việc làm mốc đối chiếu.

## Thực hiện một chỉnh sửa có thể kiểm tra

```text
Chỉ thêm chú thích trạng thái sau vào dòng đầu tiên của notice.md:
<!-- 状态：练习草稿，未发布 -->
Giữ nguyên từng ký tự trong nội dung cũ. Không sửa tệp khác và không tạo tệp mới.
Sau khi xong, hãy nêu vị trí đã thay đổi. Không đăng tải hoặc gửi thông báo.
```

Dùng chế độ xem diff của client hiện tại hoặc trình soạn thảo để đối chiếu từng dòng với bản gốc. Bước này chỉ yêu cầu một thay đổi nhỏ, không cần thêm quy trình “lập kế hoạch trước rồi xác nhận từng bước”.

## Điều kiện hoàn thành

Chỉ notice.md thay đổi và phần thêm vào đúng một dòng chú thích; hai tệp còn lại giữ nguyên. So sánh với [kết quả bước hai](/downloads/first-project/references/step-2-notice.md). Chú thích có thể bị ẩn khi Markdown được hiển thị, nên hãy xem nội dung thô của tệp.

Nếu mô hình sửa nội dung cũ, hãy khôi phục riêng notice.md từ bản gốc trong `starter` rồi làm lại bước này. Chỉ khôi phục tệp thực hành này, không đặt lại toàn bộ dự án. Xem [Hoàn tác và khôi phục](/vi/guide/getting-started/undo-and-recover/).

[Gói thực hành và hướng dẫn chuẩn bị](/vi/guide/learning-paths/beginner/)
