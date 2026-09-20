---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Đã đối chiếu với các trang chính thức hiện hành về App, CLI, IDE, Cloud, Authentication và Pricing. Bảng chỉ giữ lại các khả năng được mô tả rõ như nơi làm việc, ngữ cảnh, cách xem xét và giới hạn đăng nhập; không suy đoán những tính năng biến động nhanh bằng nhãn 'mạnh / trung bình / yếu'."
  checkedAt: "2026-08-26"
title: Đối chiếu tính năng
description: So sánh ứng dụng máy tính, CLI, IDE và Cloud theo nơi làm việc, vị trí chạy và cách xem xét kết quả.
locale: vi
source_locale: zh-CN
source_revision: b3d30b0
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 30
---

Bảng này chỉ so sánh **những cách làm việc chính tương đối ổn định**; nó không biến các tính năng nhỏ thay đổi nhanh thành cam kết lâu dài. Hãy dùng [sơ đồ chọn ứng dụng](/vi/guide/choose-your-client/) để quyết định trước, rồi đối chiếu các khác biệt tại đây.

## So sánh cốt lõi

| Điểm truy cập | Nơi công việc diễn ra | Ngữ cảnh mạnh nhất | Cách xem xét chính | Tác vụ điển hình |
|---|---|---|---|---|
| Ứng dụng ChatGPT trên máy tính | Dự án, cuộc trò chuyện và tệp trên máy | Thư mục, dự án và tác vụ đang mở | Tóm tắt tác vụ, tệp, diff, giao diện phê duyệt | Điều phối nhiều dự án, tác vụ dài, thao tác với tệp và máy tính |
| Codex CLI | Terminal hiện tại và kho lưu trữ trên máy | Thư mục làm việc, đầu ra lệnh, trạng thái Git | Lệnh, diff và tóm tắt kết quả trong terminal | Khảo sát, sửa đổi, kiểm thử, tập lệnh và CI |
| Tích hợp IDE | Trình soạn thảo hiện tại | Tệp đang mở, vùng chọn và cuộc trò chuyện gần đây | Tóm tắt thay đổi và diff bên cạnh mã | Giải thích đoạn mã cụ thể, sửa từng bước nhỏ, xem xét trong trình soạn thảo |
| Codex Cloud | Môi trường từ xa được cô lập | Kho lưu trữ đã kết nối và cấu hình môi trường | Nhật ký trên Cloud, bản tóm tắt, diff, PR | Tác vụ dài chạy nền, thử nhiều hướng song song, cộng tác từ xa |

## Cài đặt và danh tính

| Mục | Ứng dụng máy tính | CLI | IDE | Cloud |
|---|---|---|---|---|
| Điểm truy cập | Ứng dụng máy tính trên macOS / Windows / Linux | Dòng lệnh trên máy | Tiện ích tương thích VS Code; tích hợp riêng cho Xcode và JetBrains | Web và các tích hợp từ xa được hỗ trợ |
| Đăng nhập bằng ChatGPT | Hỗ trợ | Hỗ trợ | Hỗ trợ | Bắt buộc |
| Đăng nhập cục bộ bằng API key | Hỗ trợ | Hỗ trợ | Hỗ trợ | Không hỗ trợ |
| Cách tính phí chính | Gói ChatGPT hoặc mức sử dụng API | Gói ChatGPT hoặc mức sử dụng API | Gói ChatGPT hoặc mức sử dụng API | Gói ChatGPT và quyền của không gian làm việc |

Công việc cục bộ đăng nhập bằng API key tuân theo chính sách tính phí, quản trị và xử lý dữ liệu khác với đăng nhập bằng ChatGPT. API key cũng không cung cấp những khả năng cần không gian làm việc ChatGPT hoặc Cloud. Để biết gói và hạn mức cụ thể, luôn xem trang chính thức cập nhật theo thời gian thực.

## Những cách kết hợp thường gặp

### Quy trình phát triển cá nhân

```text
IDE xác định vấn đề trong mã → CLI chạy phép thử chính xác → ứng dụng máy tính xem xét tác vụ dài và diff
```

### Quy trình làm việc từ xa của nhóm

```text
Bắt đầu từ GitHub / GitLab / Linear / Slack → Cloud chạy trong môi trường cô lập → con người xem xét bản tóm tắt và diff → tạo PR
```

### Quy trình học cho người mới

```text
Mở thư mục thực hành trong ứng dụng máy tính → giao một tác vụ nhỏ → xem yêu cầu cấp quyền → xem diff → chạy kiểm chứng
```

## Đừng dùng bảng này thay cho việc kiểm tra thực tế

Plugins, Scheduled tasks, thông báo, mô hình và chính sách tổ chức thay đổi nhanh. Với những câu hỏi sau, hãy xem trực tiếp giao diện ứng dụng hiện tại và tài liệu chính thức:

- Tài khoản hiện tại có hiển thị một tính năng nào đó không
- Một khả năng có bị giới hạn bởi gói, khu vực hoặc chính sách của quản trị viên không
- Lệnh, phím tắt hoặc tên gọi trong giao diện ở phiên bản hiện tại là gì
- Đăng nhập bằng API key có hỗ trợ một tính năng của ChatGPT hoặc Cloud không

Nguyên tắc lựa chọn vẫn đơn giản: **Dùng IDE cho mã ở phạm vi nhỏ, CLI cho quy trình trong terminal, ứng dụng máy tính để điều phối tác vụ trên máy và Cloud để thực thi từ xa trong môi trường cô lập.**

---

**Trạng thái:** verified

**Áp dụng cho:** App / CLI / IDE / Cloud

**Căn cứ kiểm chứng:** Đã đối chiếu với các trang chính thức hiện hành về App, CLI, IDE, Cloud, Authentication và Pricing. Bảng chỉ giữ lại các khả năng được mô tả rõ như nơi làm việc, ngữ cảnh, cách xem xét và giới hạn đăng nhập; không suy đoán những tính năng biến động nhanh bằng nhãn “mạnh / trung bình / yếu”.

**Kiểm chứng gần nhất:** 2026-08-26
