---
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "Đã đối chiếu tài liệu Non-interactive mode chính thức hiện tại để xác minh `codex exec`, `--cd`, sandbox chỉ đọc mặc định, tiến độ qua `stderr` và phản hồi cuối qua `stdout`."
  checkedAt: "2026-08-26"
title: Chế độ không tương tác
description: Tích hợp codex exec vào script và pipeline, phù hợp với CI, tác vụ định kỳ và quy trình tự động.
locale: vi
source_locale: zh-CN
source_revision: "1f37961"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 30
---

Chế độ không tương tác cho phép Codex hoàn thành tác vụ **mà không cần hội thoại trong TTY**. Đây là cách nhà phát triển đưa Agent vào script và CI.

Nói đơn giản, thay vì trò chuyện qua lại, bạn giao toàn bộ tác vụ để Codex thực hiện trong một lần chạy.

Cách dùng này giống một lệnh gọi đơn lẻ hơn.

## Nội dung trang này

- Khi nào nên dùng chế độ không tương tác thay vì phiên `codex` tương tác
- Các yêu cầu bổ sung về an toàn và phê duyệt khi chạy không có người giám sát
- Mối liên hệ với [cấu hình](/vi/guide/cli/configuration/)

## Trường hợp phù hợp

| Phù hợp | Không phù hợp |
|---|---|
| Chạy lời nhắc đánh giá cố định trong CI | Yêu cầu cần làm rõ qua nhiều lượt |
| Kiểm tra liên kết tài liệu hằng đêm | Tái cấu trúc mang tính thăm dò |
| Tạo mã từ mẫu định sẵn | Quyết định sản phẩm còn nhiều điểm mơ hồ |

## Khái niệm cốt lõi

Một lần chạy không tương tác thường:

1. Nhận **mô tả tác vụ đầy đủ** từ tham số hoặc stdin
2. Chạy trong thư mục làm việc được chỉ định
3. Dùng mã thoát để báo thành công hoặc thất bại
4. Xuất nhật ký hoặc kết quả có cấu trúc cho bước tiếp theo sử dụng

Lối vào không tương tác hiện tại là `codex exec`. Sau khi nâng cấp CLI, bạn vẫn nên chạy `codex exec --help` để kiểm tra lại các tham số trong script.

## Ví dụ tối thiểu có thể chạy (minh họa)

```bash
# Chạy một lượt đánh giá chỉ đọc tại thư mục gốc của kho mã
codex exec --cd . "Liệt kê rủi ro bảo mật trong diff so với main; không sửa tệp"
```

`codex exec` mặc định dùng sandbox chỉ đọc. Trong lúc chạy, tiến độ được ghi vào `stderr`, còn phản hồi cuối cùng của Agent được ghi vào `stdout`; vì vậy bạn có thể chuyển hướng riêng kết quả cuối cho bước tiếp theo:

```bash
codex exec --cd . "Tạo ghi chú phát hành từ 10 commit gần nhất" > release-notes.md
```

Gợi ý thực hành:

- Trong shell script, trước tiên `cd` vào một bản sao làm việc sạch
- Đặt nội dung tác vụ trong heredoc hoặc tệp `prompts/` được quản lý phiên bản
- Ghi nhận mã thoát và đánh dấu CI thất bại khi lệnh lỗi

## Thiết kế an toàn

Chạy không người giám sát nghĩa là **không có bạn ở đó để từ chối thao tác**:

| Nguyên tắc | Cách thực hiện |
|---|---|
| Quyền tối thiểu | Token chỉ đọc, sandbox có giới hạn |
| Không push | CI chỉ mở PR hoặc tải artifact lên |
| Lời nhắc cố định | Không nối trực tiếp văn bản PR chưa được xử lý an toàn vào lời nhắc vì có nguy cơ prompt injection |
| Khả năng kiểm toán | Giữ lại nhật ký và artifact chứa diff |

Xem [mẫu phê duyệt của con người](/vi/cases/workflows/human-approval-patterns/) và lộ trình `08-developer-platform/non-interactive/`.

## So sánh với chế độ tương tác

| | Chế độ tương tác | Chế độ không tương tác |
|---|---|---|
| Lối vào | TUI `codex` | `exec` / pipeline |
| Con người tham gia trong lúc chạy | Nhiều | Ít, cần thiết kế trước |
| Phù hợp để học | Có | Không |
| Phù hợp với CI | Không | Có |

Cách dùng tương tác: [Chế độ tương tác của CLI](/vi/guide/cli/interactive-mode/)

## Chuyển tác vụ tương tác thành tác vụ không tương tác

Đừng đưa nguyên lịch sử trò chuyện dài vào script. Cách ổn định hơn là rút thành một bản đặc tả ngắn:

| Thành phần | Cách viết |
|---|---|
| Mục tiêu | Lần này chỉ làm việc gì |
| Đầu vào | Đọc tệp, diff, nhật ký hoặc stdin nào |
| Điều cấm | Không sửa tệp, không vào mạng, không push, không làm gián đoạn CI, v.v. |
| Đầu ra | Tóm tắt văn bản, JSON, tệp báo cáo hoặc mã thoát |
| Nghiệm thu | Lệnh nào bắt buộc thành công, chuỗi nào không được xuất hiện |

Lời nhắc không tương tác nên giống một phiếu công việc: ranh giới rõ, đầu vào đầy đủ và điều kiện thất bại cụ thể. Tác vụ vẫn cần quyết định sản phẩm, cân nhắc thiết kế hoặc xác nhận quyền nên được xử lý ở chế độ tương tác trước.

## Hiểu lầm thường gặp

### 1. Chế độ không tương tác hiệu quả hơn, vậy có nên học trước không?

Không nên.

Với người lần đầu sử dụng, chế độ này thường quá nhanh và cứng nhắc, gần như không có chỗ để làm rõ yêu cầu giữa chừng.

### 2. Khác biệt lớn nhất với chế độ tương tác là gì?

Có thể hiểu khác biệt cốt lõi như sau:

- **Chế độ tương tác**: có thể hỏi thêm, điều chỉnh và phê duyệt trong lúc chạy
- **Chế độ không tương tác**: gần với thực thi một lần, phù hợp quy trình đã định sẵn

### 3. Khi nào tôi nên tạm thời tránh dùng?

Hãy khoan dùng nếu bạn:

- Chưa quen cách viết lời nhắc
- Chưa biết cách nghiệm thu kết quả
- Chưa hiểu cơ bản về phê duyệt, sandbox và quyền hạn

Chế độ không tương tác phù hợp với tự động hóa, ít phù hợp cho lần đầu khám phá. Hãy quen với chế độ tương tác rồi mới đưa nó vào script.

## Lỗi thường gặp

- Đưa nguyên lịch sử dài của phiên tương tác vào một lần gọi exec
- Dùng thông tin xác thực sản xuất và quyền ghi trong CI
- Không cố định phiên bản CLI khiến hành vi pipeline bất ngờ thay đổi

## Nguồn tham khảo
- Tài liệu OpenAI Codex CLI
