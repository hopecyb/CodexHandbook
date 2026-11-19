---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Tổng quan Web và Cloud
description: Luồng tác vụ từ kết nối kho mã, môi trường tái tạo được đến rà soát và Pull Request.
sidebar:
  order: 13
locale: vi
source_locale: zh-CN
source_revision: "86fa0ac"
translation_status: stale
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Codex Cloud chạy tác vụ lập trình trong môi trường đám mây tách biệt. Nó phù hợp với tác vụ dài chạy nền, nhiều phương án song song và công việc bắt đầu từ GitHub, GitLab (Beta), Linear hoặc Slack. Nó không điều khiển máy của bạn từ xa và cũng không tự thấy những tệp cục bộ chưa đẩy lên kho mã.

![Minh họa: kho mã trên trình duyệt nối tới các container đám mây cô lập, kết quả trả về dưới dạng thẻ pull request có dấu tích xanh](/illustrations/web-and-cloud.webp)

## Một tác vụ Cloud diễn ra như thế nào

```text
Đăng nhập ChatGPT
  → kết nối GitHub / GitLab
  → tạo môi trường cho kho mã
  → checkout nhánh hoặc commit được chỉ định
  → setup script cài các phần phụ thuộc
  → Agent sửa và kiểm chứng trong phạm vi chính sách mạng
  → xem bản tóm tắt, nhật ký và diff
  → yêu cầu chỉnh sửa tiếp hoặc tạo PR
  → người rà soát và CI kiểm tra trước khi hợp nhất
```

Giá trị của Cloud là sự tách biệt, khả năng tái tạo và chạy song song. Việc rà soát kết quả vẫn cần thiết.

## Chọn cục bộ hay Cloud

| Chọn cục bộ | Chọn Cloud |
|---|---|
| Phụ thuộc vào tệp chưa commit hoặc dịch vụ trên máy | Đầu vào đã ở kho mã từ xa |
| Cần tương tác với tiến trình theo thời gian thực | Tác vụ có thể chạy độc lập ở chế độ nền |
| Sửa nhanh với phạm vi nhỏ | Cần build, kiểm thử nhiều bước hoặc thử song song |
| Công cụ chỉ có trên máy hiện tại | Có thể dựng lại môi trường bằng script |

Hãy đọc [Cục bộ và Cloud](/vi/guide/foundations/local-vs-cloud/) trước để hiểu ranh giới thực thi.

## Thứ tự học được đề xuất

1. [Kết nối GitHub](/vi/guide/web-and-cloud/connect-github/): chỉ cấp quyền cho kho mã cần thiết.
2. [Môi trường Cloud](/vi/guide/web-and-cloud/cloud-environments/): cố định công cụ, phiên bản và setup.
3. [Secrets và biến môi trường](/vi/guide/web-and-cloud/secrets-and-variables/): phân biệt Secret ở bước cài đặt với biến ở bước chạy.
4. [Truy cập internet](/vi/guide/web-and-cloud/internet-access/): bước Agent mặc định không có mạng; chỉ mở miền và phương thức cần thiết.
5. [Giao việc và theo dõi](/vi/guide/web-and-cloud/delegate-and-follow-up/): gửi tác vụ kèm mục tiêu, giới hạn và tiêu chí nghiệm thu.
6. [Tạo Pull Request](/vi/guide/web-and-cloud/create-pull-requests/) và [rà soát mã](/vi/guide/web-and-cloud/code-review/): biến kết quả thành phần bàn giao có thể hợp nhất.
7. [Xử lý sự cố Cloud](/vi/guide/web-and-cloud/troubleshooting/): tìm nguyên nhân ở kho mã, setup, mạng hoặc tác vụ.

Nếu bắt đầu từ ứng dụng máy tính hoặc IDE, hãy xem [Tác vụ cục bộ và Cloud](/vi/guide/desktop-app/local-and-cloud-tasks/) và [Tác vụ Cloud trong IDE](/vi/guide/ide/cloud-task-workflow/) tương ứng.

## Bài thực hành đầu tiên

Chọn một kho mã thử nghiệm không chứa thông tin xác thực sản xuất. Chỉ yêu cầu Codex sửa liên kết tài liệu rồi chạy kiểm tra liên kết. Tiêu chí thành công là môi trường khởi động được, diff chỉ có tệp dự kiến, thấy được đầu ra lệnh và có thể tạo PR từ kết quả. Đừng coi dòng trạng thái “hoàn thành” trên giao diện là bằng chứng nghiệm thu duy nhất.

## Nguồn chính thức

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Môi trường Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
