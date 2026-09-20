---
title: Tác vụ Cloud từ IDE
description: Giao tác vụ dài từ IDE cho Codex Cloud và quay lại xem kết quả có thể rà soát.
locale: vi
source_locale: zh-CN
source_revision: d5369b5
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 60
---

Bạn có thể giữ những lần chỉnh sửa nhanh ở máy cục bộ trong IDE, hoặc kết nối với Codex web để giao tác vụ mất nhiều thời gian hơn cho Cloud. Điểm bắt đầu vẫn nằm trong trình soạn thảo, nhưng môi trường thực thi, trạng thái kho lưu trữ và giới hạn truy cập mạng lúc này thuộc về môi trường Cloud.

## Khi nào nên giao tác vụ

| Giữ ở máy cục bộ | Giao cho Cloud |
|---|---|
| Cần chỉnh sửa qua lại nhanh với vùng chọn hiện tại | Tác vụ có nhiều bước hoặc chạy lâu |
| Phụ thuộc vào các thay đổi cục bộ chưa commit | Dữ liệu đầu vào đã có trong kho lưu trữ từ xa hoặc có thể tải lên |
| Bắt buộc dùng công cụ chỉ có trên máy của bạn | Môi trường Cloud có thể thiết lập lại các thư viện phụ thuộc và chạy bước kiểm tra |
| Cần tương tác với tiến trình theo thời gian thực | Muốn tiếp tục làm việc khác ở máy cục bộ |

Cloud không tự động có các tệp chưa commit, thông tin đăng nhập hoặc tiến trình đang chạy trên máy bạn. Trước khi giao tác vụ, phải nêu rõ kho lưu trữ, nhánh và commit dùng làm điểm bắt đầu.

## Danh sách kiểm tra trước khi giao tác vụ

- [ ] Đã đăng nhập bằng tài khoản ChatGPT; Codex Cloud không hỗ trợ đăng nhập bằng API key.
- [ ] Đã kết nối GitHub hoặc đang dùng tích hợp GitLab Beta hiện được hỗ trợ.
- [ ] Môi trường Cloud có thể chạy các tập lệnh cài đặt và kiểm tra.
- [ ] Các biến và secret cần thiết đã được cấu hình trong môi trường, không ghi vào prompt.
- [ ] Đã xử lý các thay đổi cục bộ chưa commit, hoặc đã nêu rõ chúng không thuộc tác vụ.
- [ ] Đã ghi rõ mục tiêu, các đường dẫn được phép sửa, phần cấm thay đổi và lệnh nghiệm thu.

## Ví dụ từ đầu đến cuối

```text
Mục tiêu: sửa mô-đun thử lại vẫn chờ thêm một lần sau khi đã đạt giới hạn.
Điểm bắt đầu: kho lưu trữ acme/retry-service, nhánh fix/retry-limit.
Phạm vi: chỉ sửa src/retry.ts và các bài kiểm thử tương ứng.
Ràng buộc: không nâng cấp thư viện phụ thuộc, không sửa API công khai, không push lên main.
Nghiệm thu: chạy pnpm test -- retry và pnpm typecheck; hiển thị diff và kết quả các lệnh.
```

Quy trình đề xuất:

1. Đính kèm tệp hoặc vùng chọn liên quan trong IDE và xác nhận phạm vi vấn đề trước.
2. Chọn Cloud để tiếp tục xử lý tác vụ dài hơn.
3. Xem kế hoạch, tiến độ và kết quả kiểm tra trong Cloud.
4. Quay lại IDE hoặc Web để xem kết quả có thể rà soát.
5. Kéo nhánh về hoặc lấy thay đổi qua PR.
6. Chạy lại các bài kiểm thử trong môi trường cục bộ đáng tin cậy và rà soát thủ công trước khi merge.

Trạng thái “hoàn thành” trong Cloud chỉ cho biết quá trình thực thi từ xa đã kết thúc, không có nghĩa là mã đã sẵn sàng để merge. Thư viện phụ thuộc, hệ điều hành hoặc thông tin đăng nhập từ xa có thể khác môi trường cục bộ hay CI và làm lộ ra những khác biệt môi trường.

## Xung đột và bảo mật

- Sau khi giao tác vụ, đừng để máy cục bộ và Cloud cùng sửa một tệp.
- Đừng dán khóa production vào prompt; hãy dùng secret của môi trường.
- Đừng mặc định Cloud có quyền truy cập mạng; hãy cấu hình theo danh sách đích được phép của môi trường.
- Push, mở PR và merge là các hành động khác nhau. Việc merge vẫn phải qua cổng kiểm soát của con người hoặc CI.

Đọc tiếp [Môi trường Cloud](/vi/guide/web-and-cloud/cloud-environments/) và [Tạo pull request](/vi/guide/web-and-cloud/create-pull-requests/).

## Nguồn chính thức

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
