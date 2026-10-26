---
title: "Ranh giới Webhook và sự kiện tác vụ"
description: "Phân biệt kết quả Codex chạy cục bộ, sự kiện App Server và callback HTTP do bạn tự thiết kế."
contentType: "reference"
audiences:
  - "developer"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Đã kiểm tra mô hình thực thi và sự kiện của SDK và App Server. Phần callback HTTP là gợi ý cho kiến trúc tự xây, không khẳng định tồn tại hợp đồng Webhook Codex Cloud thống nhất."
  evidence:
    - label: "Tài liệu SDK chính thức"
      href: "https://learn.chatgpt.com/docs/codex-sdk"
    - label: "Giao thức và sự kiện App Server"
      href: "https://learn.chatgpt.com/docs/app-server"
sidebar:
  order: 10
locale: "vi"
source_locale: "zh-CN"
source_revision: "8a84ab8"
translation_status: "reviewed"
translated_at: "2026-09-20"
reviewed_at: "2026-10-26"
---

Khi tác vụ kết thúc, có thể báo cho hệ thống nội bộ qua giá trị trả về của chương trình, trạng thái thoát, luồng sự kiện hoặc callback HTTP. Hãy xác định bên gửi và giao thức trước, sau đó mới quyết định có cần Webhook không.

## Đừng trộn lẫn ba cơ chế

| Cơ chế | Cách nhận | Ranh giới |
|---|---|---|
| SDK / CLI chạy cục bộ | Kết quả chương trình hoặc trạng thái tiến trình | Không phải giao diện callback HTTP được lưu trữ |
| Sự kiện App Server | Thông báo JSON-RPC trên kết nối đang mở | Phải kết nối, khởi tạo và xử lý thông điệp đúng giao thức |
| Callback từ runner tự xây | Yêu cầu HTTP do dịch vụ của bạn gửi | Bạn tự định nghĩa tên sự kiện, chữ ký, retry và lưu trữ |

`turn/completed` của App Server là thông báo giao thức. Trạng thái cuối có thể là hoàn thành, gián đoạn hoặc thất bại. Hãy kiểm tra trạng thái và kết quả nghiệp vụ thay vì triển khai chỉ dựa vào tên sự kiện. Xem [tài liệu sự kiện chính thức](https://learn.chatgpt.com/docs/app-server).

Trang này chưa xác minh endpoint đăng ký Webhook Codex Cloud thống nhất, header chữ ký hay hợp đồng sự kiện `task.completed`. Vì vậy không đưa URL, Header hoặc bảng sự kiện giả dạng giao diện chính thức. Nếu một sản phẩm cụ thể có Webhook, hãy kết nối theo tài liệu có phiên bản của sản phẩm đó.

## Khi nào cần callback tự xây

Một tác vụ CI thường có thể tiếp tục dựa vào mã thoát và đầu ra đã lưu. Không cần tạo đầu nhận công khai chỉ vì nó “bất đồng bộ”.

Nếu hệ thống của bạn lên lịch tác vụ qua nhiều tiến trình và cần cập nhật phiếu công việc khi hoàn tất, có thể thiết kế chuỗi nội bộ:

```text
Hàng đợi tự xây → runner được kiểm soát chạy SDK/CLI → lưu kết quả và trạng thái
                                                  → dịch vụ thông báo tự xây → phiếu nội bộ
```

Đây là gợi ý kiến trúc của trang này, không phải tính năng triển khai sẵn của SDK. Xem [Tổng quan SDK](/vi/guide/developer-platform/sdk-overview/) để biết nơi chạy và ranh giới tích hợp.

## Giao thức tự xây cần quy định gì

- **Danh tính và toàn vẹn:** quy định cách bên nhận xác minh bên gửi, dùng phương pháp xác thực đã rà soát, không tự bịa “header chữ ký chính thức”.
- **ID ổn định và khử trùng lặp:** ghi ID tác vụ, ID sự kiện, số lần thử; gửi trùng không tạo tác động bên ngoài lặp lại.
- **Trạng thái và phiên bản:** phân biệt chạy xong, thất bại, gián đoạn và kết quả nghiệm thu nghiệp vụ; ghi phiên bản payload.
- **Tiếp nhận bền vững:** chỉ xác nhận sau khi sự kiện đã được lưu hoặc đưa vào hàng đợi đáng tin cậy. Có thể retry khi lỗi; đừng trả về thành công rồi làm mất sự kiện.
- **Phạm vi dữ liệu:** chỉ gửi bản tóm tắt và tham chiếu an toàn mà hệ thống sau cần; không ghi thông tin xác thực vào log.
- **Điều kiện dừng:** đặt giới hạn retry, cơ chế con người tiếp quản và hủy hành động tiếp theo.

Đây là yêu cầu thiết kế cần triển khai và kiểm chứng, không phải ví dụ chạy trực tiếp. Trang này không tự kết nối phiếu, gửi tin nhắn hoặc tạo quy trình triển khai.

## Tình huống nghiệm thu tối thiểu

Trong môi trường thử nghiệm, ít nhất kiểm tra thành công, lỗi thực thi, hủy, sự kiện trùng, danh tính sai và bên nhận tạm thời không khả dụng. Xác minh gửi lặp chỉ tạo một tác động nghiệp vụ, việc hủy không bị coi là thành công và kết quả sinh chưa nghiệm thu không được công bố trực tiếp.

Có thể bắt đầu từ [tình huống phân loại issue](/vi/cases/use-cases/team-automation/issue-triage-suggestions/) và [kiểm tra liên kết định kỳ](/vi/cases/use-cases/team-automation/scheduled-link-check/); trạng thái tài liệu theo từng trang tương ứng.
