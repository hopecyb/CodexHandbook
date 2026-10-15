---
title: "Lập kế hoạch: làm rõ đường thực thi và cách kiểm chứng"
description: "Dùng kế hoạch để giải quyết phạm vi, phụ thuộc và lựa chọn; phân biệt lập kế hoạch với chờ phê duyệt, rồi tiếp tục trong quyền đã có."
contentType: guide
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Trang này đề xuất phương pháp làm việc, đã đối chiếu với phân loại tác vụ và quyền; không khẳng định hành vi mặc định của ứng dụng khách hoặc mức tăng hiệu quả đã đo."
sidebar:
  order: 10
locale: vi
source_locale: zh-CN
source_revision: a129229
translation_status: draft
translated_at: 2026-09-20
---
Kế hoạch là một đường thực thi có thể kiểm tra và điều chỉnh. Nó giúp phát hiện sớm thiếu sót về phạm vi, phụ thuộc và nghiệm thu, nhưng tác vụ lớn hơn không đồng nghĩa phải liên tục chờ xác nhận.

Trước tiên dựa vào [phân loại tác vụ](/vi/prompts/ask-for-a-plan/) để quyết định: làm xong ngay, lập kế hoạch rồi thực hiện trong quyền đã được cấp, hay lượt này chỉ đưa phương án. Yêu cầu rõ “đưa phương án trước, không sửa tệp” phải giữ ở chế độ chỉ đọc. Yêu cầu triển khai thì không nên kết thúc bằng một bản kế hoạch.

![Minh họa: trợ lý nhỏ vẽ kế hoạch từng bước trên bảng trắng, một người chỉ vào một bước để điều chỉnh trước khi bắt đầu](/illustrations/agent-planning.webp)

## Kế hoạch đủ dùng

| Yếu tố | Cần cụ thể đến đâu |
|---|---|
| Mục tiêu | Hành vi quan sát được sau khi hoàn thành |
| Phạm vi | Tệp liên quan, đầu vào và phần loại trừ |
| Thứ tự | Phụ thuộc thật, không biến mỗi lần gọi công cụ thành một bước |
| Kiểm chứng | Đầu ra hoặc bước kiểm tra chứng minh đã hoàn thành |
| Lựa chọn | Chỉ quyết định chưa có đáp án và ảnh hưởng kết quả |

Để thêm nhóm dữ liệu vào báo cáo hiện có, có thể lập kế hoạch “kiểm tra định nghĩa→sửa tổng hợp và hiển thị→đối chiếu tổng và nhóm bằng mẫu”. Không cần xin duyệt riêng cho từng lần đọc tệp, chỉnh sửa hay chạy kiểm thử.

## Hai kiểu yêu cầu kế hoạch khác nhau

**Chưa quyết định phương án:**

```text
Lượt này chỉ phân tích đọc, so sánh hai phương án xuất dữ liệu về phụ thuộc, tương thích và chi phí bảo trì.
Đề xuất một phương án và nêu các lựa chọn tôi cần quyết định. Không sửa phần triển khai.
```

**Đã xác định phạm vi, cần triển khai:**

```text
Hoàn thành chức năng xuất CSV theo yêu cầu hiện có. Trước tiên kiểm tra kho và trình bày kế hoạch ngắn,
sau đó triển khai và kiểm chứng liên tục trong phạm vi đã thống nhất, không cần chờ sau từng bước.
Nếu phải thêm dịch vụ, đổi giao diện công khai hoặc mở rộng quyền truy cập dữ liệu, trước tiên giải thích lý do cụ thể.
```

Đây là ví dụ do trang này thiết kế. Hộp thoại phê duyệt có xuất hiện hay không tùy vào công cụ, chính sách và quyền thực tế.

## Điều chỉnh khi đang thực hiện

- Gặp chi tiết triển khai thông thường: cập nhật kế hoạch và tiếp tục trong phạm vi được phép.
- Giả định ban đầu không đúng: nêu bằng chứng và tác động, đề xuất cách khác trong phạm vi.
- Có lựa chọn người dùng phải quyết định: hỏi câu cụ thể và tiếp tục việc không phụ thuộc câu trả lời.
- Cần thao tác bên ngoài chưa được phép: chuẩn bị kết quả có thể rà soát rồi xin quyền trước khi thực hiện.

Đừng dừng chỉ vì “có thể gặp vấn đề”, nhưng cũng đừng bám kế hoạch mà bỏ qua thay đổi phạm vi đã thực sự xuất hiện.

## Phản hồi về kế hoạch

```text
Giữ bước 1 và 2, bỏ phần tái cấu trúc.
Lượt này chỉ làm bản xem trước cục bộ, không đăng tải.
Thêm điều kiện nghiệm thu: định dạng tệp cũ vẫn đọc được.
```

Phản hồi chỉ thay đổi phần được nêu rõ. Ràng buộc và tiêu chí hoàn thành chưa bị rút lại vẫn có hiệu lực. Khi công việc gián đoạn, ghi tệp hiện tại, kiểm chứng đã hoàn thành và bước tiếp theo vào [bản ghi bàn giao](/vi/guide/agent-work/handoff-and-resume/).

## Hoàn thành thì quay lại bằng chứng

Kiểm tra mục tiêu kế hoạch đã thực sự đạt, thay vì chỉ đánh dấu hết các bước. Ghi rõ kiểm thử chưa chạy, bản xem trước chưa kiểm tra và sự thật chưa đối chiếu. Quy trình đầy đủ ở [Khám phá→Lập kế hoạch→Thực hiện→Kiểm chứng](/vi/cases/workflows/explore-plan-execute-verify/).
