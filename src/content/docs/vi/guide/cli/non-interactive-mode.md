---
title: Chế độ không tương tác
description: Tích hợp bằng codex exec và pipeline script — phù hợp CI, tác vụ định kỳ và pipeline tự động.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Chế độ không tương tác để Codex hoàn thành tác vụ **không cần hội thoại TTY** — là lối vào để nhà phát triển nối Agent vào script và CI.

Nói ngắn: chế độ không tương tác không phải chat qua lại, mà giao tác vụ một lần để nó thực thi.

Nó giống một lần gọi kiểu lệnh hơn.

## Nội dung trang

- Khi nào dùng không tương tác thay vì phiên tương tác `codex`
- Yêu cầu thêm về an toàn và phê duyệt khi không người canh
- Quan hệ với [cấu hình](/guide/cli/configuration/)

## Tình huống áp dụng

| Phù hợp | Không phù hợp |
|---|---|
| Trong CI chạy Prompt rà soát cố định | Cần nhiều vòng làm rõ nhu cầu |
| Kiểm liên kết tài liệu nightly | Refactor khám phá |
| Sinh mã theo mẫu định sẵn | Quyết định sản phẩm nhiều nghĩa |

## Khái niệm cốt lõi

Thực thi không tương tác thường:

1. Nhận **mô tả tác vụ đầy đủ** từ tham số hoặc stdin
2. Chạy trong thư mục làm việc chỉ định
3. Dùng mã thoát biểu thị thành công / thất bại
4. Xuất nhật ký hoặc kết quả có cấu trúc cho bước sau tiêu thụ

**Tên lệnh và tham số lấy theo tài liệu CLI chính thức** (thường là `codex exec` hoặc lệnh con tương đương); nâng cấp CLI rồi nên kiểm lại `--help`.

## Ví dụ tối thiểu dùng được (minh họa)

```bash
# Ở thư mục gốc kho, rà soát chỉ đọc (minh họa — tham số theo chính thức)
codex exec --cwd . "Liệt kê rủi ro bảo mật trong diff so với main, không sửa tệp"
```

Gợi ý thực hành:

- Trong shell script hãy `cd` vào bản làm việc sạch trước
- Chuỗi tác vụ viết vào heredoc hoặc tệp `prompts/` có phiên bản
- Bắt mã thoát; thất bại thì CI đánh đỏ

## Thiết kế an toàn

Không người canh = **không có bạn ở đó để bấm từ chối**:

| Nguyên tắc | Cách làm |
|---|---|
| Quyền tối thiểu | Token chỉ đọc, Sandbox hạn chế |
| Không push | CI chỉ mở PR hoặc tải artifact |
| Prompt cố định | Cấm nối thẳng văn bản chưa khử từ mô tả PR (rủi ro injection) |
| Kiểm toán | Giữ nhật ký và artifact diff |

Xem [Mẫu phê duyệt thủ công](/cases/workflows/human-approval-patterns/) và lộ trình `08-developer-platform/non-interactive/`.

## So với chế độ tương tác

| | Chế độ tương tác | Chế độ không tương tác |
|---|---|---|
| Lối vào | `codex` TUI | `exec` / pipeline |
| Người trong vòng | Mạnh | Yếu — cần thiết kế trước |
| Phù hợp học | Có | Không |
| Phù hợp CI | Không | Có |

Cách dùng tương tác: [Chế độ tương tác CLI](/guide/cli/interactive-mode/)

## Hiểu nhầm thường gặp

### 1. Không tương tác hiệu quả hơn — vậy phải học nó trước?

Không khuyến nghị.

Với người lần đầu dùng, chế độ không tương tác thường quá nhanh và cứng — giữa chừng gần như không còn chỗ làm rõ qua lại.

### 2. Khác biệt lớn nhất với chế độ tương tác là gì?

Có thể xem trực tiếp:

- **Chế độ tương tác**: giữa chừng còn hỏi, còn sửa, còn phê duyệt
- **Chế độ không tương tác**: giống thực thi một lần, phù hợp quy trình đã định sẵn

### 3. Khi nào tạm thời đừng đụng nó?

Nếu bạn vẫn ở các giai đoạn này, nên tạm chưa đụng:

- Chưa quen Prompt viết thế nào
- Chưa biết nghiệm thu kết quả ra sao
- Chưa có phán đoán cơ bản về phê duyệt, Sandbox, quyền

Chế độ không tương tác phù hợp tự động hóa, ít phù hợp lần đầu mò. Quen chế độ tương tác trước rồi mới nói nối vào script.

## Lỗi thường gặp

- Nhồi nguyên lịch sử hội thoại dài từ phiên tương tác vào một lần exec
- CI dùng thông tin đăng nhập production và quyền ghi
- Không cố định phiên bản CLI → pipeline đột nhiên đổi hành vi

## Nguồn tham khảo
- Tài liệu OpenAI Codex CLI
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI  
**Ghi chú tái kiểm:** Trang này vẫn lấy `codex exec` và cách tích hợp không tương tác liên quan làm lõi, nhưng hiện chưa có căn cứ chính thức hiện hành đủ mạnh để xác nhận từng lối vào lệnh, tham số và hành vi; trước khi bổ sung tài liệu không tương tác CLI mới nhất nên gắn `outdated`.  
**Kiểm chứng gần nhất:** 2026-07-26
