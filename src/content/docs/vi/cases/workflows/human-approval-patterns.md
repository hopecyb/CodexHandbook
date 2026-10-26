---
title: "Các cách phê duyệt của con người"
description: "Phân biệt quyền giao tác vụ với phê duyệt công cụ; chuẩn bị kết quả có thể rà soát trước khi dừng ở một thao tác cụ thể cần được phép."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Đã đối chiếu vai trò riêng của sandbox và phê duyệt. Các cách cộng tác dưới đây là đề xuất của sổ tay, không phải quy tắc hộp thoại thống nhất của mọi ứng dụng khách."
  evidence:
    - label: "Hướng dẫn chính thức về sandbox và phê duyệt"
      href: https://learn.chatgpt.com/docs/agent-approvals-security
locale: vi
source_locale: zh-CN
source_revision: "f60dbb5"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---
Việc phê duyệt phải gắn với thao tác cụ thể và tác động của nó. Quyền giao tác vụ nói người dùng muốn hoàn thành việc gì; phê duyệt công cụ quyết định thao tác nào có thể chạy trong môi trường hiện tại. Ghi tệp, chạy lệnh hoặc truy cập mạng không tự nhiên đòi hỏi phải hỏi lại mỗi lần. Hành vi thực tế do phạm vi được phép, chính sách công cụ và sandbox cùng quyết định. Xem [hướng dẫn chính thức](https://learn.chatgpt.com/docs/agent-approvals-security).

## Ba cách cộng tác có thể lựa chọn rõ ràng

| Cách | Có thể tiếp tục làm gì | Khi nào chờ |
|---|---|---|
| Phân tích chỉ đọc | Đọc, so sánh, xây dựng phương án | Chưa được người dùng cho phép triển khai thì không sửa |
| Triển khai trong phạm vi được phép | Sửa phần đã chỉ định, kiểm chứng phù hợp, chuẩn bị sản phẩm có thể rà soát | Thiếu thông tin thiết yếu, phạm vi thay đổi hoặc xuất hiện hành động mới chưa được phép |
| Phê duyệt riêng bước cuối | Hoàn thành bản nháp, build, xem trước và chuẩn bị khôi phục | Trước khi đăng tải, gửi hoặc thao tác khác đã dành riêng cho phê duyệt |

Đây là thỏa thuận cộng tác, không phải tên chế độ sản phẩm mới. Nếu quyền đã được cấp rõ ràng và còn hiệu lực, đừng xin lại. Nếu chính sách bắt buộc yêu cầu phê duyệt tương tác, hãy tuân theo cơ chế đó.

## Cách 1: lượt này chỉ đưa phương án

```text
Lượt này chỉ đọc: kiểm tra dự án và đề xuất chỉnh sửa. Không sửa mã hoặc commit.
Nếu bước kiểm tra ghi cache, snapshot hay tệp đầu ra, hãy nói rõ; đừng coi mọi “kiểm thử” là chỉ đọc.
```

Phù hợp khi mục tiêu chưa chốt và cần so sánh phương án. Ngay cả tác vụ chỉ đọc cũng phải xem tác dụng phụ thực tế của lệnh. Đừng kết hợp “được chạy kiểm thử” với “không được ghi gì lên đĩa” mà không kiểm tra.

## Cách 2: liên tục hoàn thành việc cục bộ

```text
Bạn được sửa ba tài liệu này và liên kết nội bộ liên quan, rồi chạy các bước kiểm tra build hiện có.
Hoàn thành liên tục trong phạm vi đó, tự xử lý chi tiết triển khai thông thường và báo cáo.
Không đăng tải trang hay gửi tin nhắn. Giải thích trước lựa chọn cần thiết hoặc thao tác ngoài phạm vi.
```

Ở đây đã cho phép sửa và kiểm chứng, nên không cần hỏi lại trước mỗi lần ghi. Một lệnh cụ thể có được phép không vẫn phụ thuộc môi trường thực thi; prompt không thể vượt qua lời từ chối.

## Cách 3: phê duyệt thao tác đăng tải cụ thể

Trước tiên hoàn thành phiên bản có thể rà soát, rồi cung cấp:

- Phiên bản hoặc sản phẩm chính xác sẽ đăng và kết quả kiểm chứng.
- Môi trường đích, người nhận hoặc đối tượng bị ảnh hưởng.
- Tác động bên ngoài dự kiến và cách khôi phục cần thiết.
- Quyền hoặc điều kiện hiện còn thiếu.

Cho phép “đăng phiên bản này lên trang thử nghiệm” không đồng nghĩa cho phép mọi phiên bản sau lên trang production. Ngược lại, nếu chính thao tác đó đã được duyệt rõ ràng, đừng vì mẫu chung mà yêu cầu xác nhận lặp lại.

## Sau khi bị từ chối

Giữ nguyên thông tin từ chối và phân biệt thiếu quyền, chính sách cấm, lỗi môi trường. Nếu có thể thu hẹp việc làm thành cách vẫn hợp lệ cho tác vụ, hãy tiếp tục. Đừng đổi công cụ, cách viết lệnh hay prompt để vượt cùng một hạn chế. Nếu thật sự cần người dùng hành động, nêu thao tác bị chặn, lý do và bước tiếp theo có thể chọn.

## Người rà soát kiểm tra gì

Xem phạm vi và kết quả có khớp, kiểm chứng có thật sự chạy, tác động bên ngoài đã được hiểu chưa. Có kế hoạch không đồng nghĩa tự động phê duyệt; “không có phát hiện” cũng không bảo đảm rủi ro bằng không.

Cách làm xem [phân loại tác vụ](/vi/prompts/ask-for-a-plan/); xung đột chỉ dẫn xem [ưu tiên ngữ cảnh](/vi/guide/context/context-priority/); quy trình không giám sát còn cần [cơ chế dừng, thất bại và thông báo](/vi/skills/automations/scheduled-tasks/).
