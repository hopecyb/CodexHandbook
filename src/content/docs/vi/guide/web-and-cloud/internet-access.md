---
title: Truy cập Internet
description: Phân biệt truy cập mạng khi cài đặt và khi Agent chạy, đồng thời giới hạn rủi ro bằng miền và phương thức HTTP.
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
locale: vi
source_locale: zh-CN
source_revision: 5bbb905
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 70
---

Cloud có hai giai đoạn truy cập mạng khác nhau:

| Giai đoạn | Hành vi mặc định | Mục đích chính |
|---|---|---|
| Script setup | Có thể truy cập Internet | Cài đặt phụ thuộc và công cụ |
| Giai đoạn Agent | Tắt theo mặc định | Cho Agent truy cập tài nguyên bên ngoài khi thực hiện tác vụ |

Vì vậy, `pnpm install` thành công trong setup không có nghĩa là Agent sau đó có thể dùng `curl` để truy cập bất kỳ trang nào.

## Vì sao giai đoạn Agent mặc định không có mạng

Kết nối Internet cho Agent làm tăng rủi ro chèn prompt độc hại, đưa mã hoặc dữ liệu ra ngoài, dùng phụ thuộc độc hại và đưa vào kho mã nội dung có giấy phép không tương thích. Issue, trang web hoặc README của một phụ thuộc không đáng tin có thể chứa chỉ dẫn dụ Agent chạy lệnh gửi dữ liệu ra ngoài.

Nguyên tắc là chỉ mở đích và hành động thực sự cần cho tác vụ, đồng thời xem lại nhật ký làm việc.

## Tùy chọn cấu hình

Quyền truy cập Internet của Agent được cấu hình theo từng môi trường:

- **Off**: chặn hoàn toàn kết nối Internet của Agent.
- **On**: cho phép kết nối, có thể giới hạn theo miền và phương thức HTTP.

Danh sách miền có thể bắt đầu rỗng, dùng bộ định sẵn Common dependencies hoặc chọn All (unrestricted). Với kho mã production, không nên coi quyền truy cập không giới hạn là lối tắt để khắc phục sự cố.

Nếu tác vụ chỉ cần đọc tài liệu hoặc tải nội dung, hãy giới hạn phương thức HTTP ở `GET`, `HEAD` và `OPTIONS`. Cách này chặn `POST`, `PUT`, `PATCH` và `DELETE`, vốn có thể gửi hoặc sửa dữ liệu.

## Ví dụ mở quyền tối thiểu

Một tác vụ cần xem tài liệu của API công khai:

1. Giữ Off trước và xác nhận lỗi thực sự do mạng.
2. Bật quyền truy cập của Agent.
3. Chỉ thêm miền tài liệu chính thức đó vào allowlist.
4. Chỉ cho phép `GET`, `HEAD` và `OPTIONS`.
5. Chạy lại tác vụ và kiểm tra mọi yêu cầu mạng đi ra trong nhật ký.
6. Khi xong, đánh giá xem có nên chuyển lại về Off không.

## Mối liên hệ quan trọng với Secrets

Cloud Secrets bị gỡ trước giai đoạn Agent, giúp giảm nguy cơ Agent trực tiếp gửi Secret dùng ở setup ra ngoài. Tuy nhiên, biến môi trường thông thường, nội dung kho mã và dữ liệu do tác vụ tạo ra vẫn có thể bị gửi đi. Đừng ngụy trang giá trị nhạy cảm thành biến thông thường để né vòng đời của Secret.

## Danh sách nghiệm thu

- [ ] Đã giải thích vì sao Agent cần truy cập Internet.
- [ ] Allowlist chỉ chứa những miền cần thiết.
- [ ] Phương thức HTTP được giới hạn ở tập tối thiểu.
- [ ] Nguồn đầu vào đáng tin hoặc đã xét đến nguy cơ chèn prompt độc hại.
- [ ] Nhật ký không có lệnh tải lên dữ liệu kho mã, môi trường hoặc thông tin xác thực.
- [ ] Đã kiểm tra nguồn gốc, phiên bản và giấy phép của phụ thuộc mới.

## Nguồn chính thức

- [Quyền truy cập Internet của Agent](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Môi trường Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
