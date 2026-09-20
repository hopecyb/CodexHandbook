---
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "Đã đối chiếu tài liệu Non-interactive mode và Developer commands chính thức hiện tại để xác minh trạng thái Stable của `codex exec`, `--cd` / `-C`, sandbox chỉ đọc mặc định, `workspace-write`, JSONL và đầu ra theo schema."
  checkedAt: "2026-08-26"
title: codex exec
description: Lối vào thực thi không tương tác, dùng để giao trọn một tác vụ trong script và CI.
locale: vi
source_locale: zh-CN
source_revision: "6d7c481"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 10
---

Nếu `codex` tương tác là vừa trò chuyện vừa làm việc, thì **`codex exec`** giống như giao một tác vụ trong một lần chạy và nhận kết quả khi tác vụ kết thúc.

Đây là phần cốt lõi của [chế độ không tương tác](/vi/guide/cli/non-interactive-mode/): không có hội thoại qua lại hay làm rõ giữa chừng; khi tiến trình kết thúc, bạn nhận kết quả hoặc trạng thái thất bại. Chương này dành cho người tích hợp [nền tảng dành cho nhà phát triển](/vi/guide/developer-platform/), đặc biệt là người lần đầu đưa Codex vào script hoặc CI.

## Nội dung trang này

- Khác biệt giữa `exec` và `codex` tương tác
- Cú pháp lệnh tối thiểu và thư mục làm việc
- Yêu cầu về phê duyệt và sandbox khi chạy không có người giám sát

## `exec` làm gì

Bạn có thể hình dung `codex exec` như sau:

- Gửi một phiếu công việc dùng một lần
- Chạy đến khi hoàn tất rồi trả kết quả

Khi phiếu công việc đã mô tả rõ, Codex thực hiện theo đó, trả kết quả rồi kết thúc.

Vì vậy, cách này phù hợp nhất khi:

- Phạm vi tác vụ đã cố định
- Không cần trao đổi làm rõ giữa chừng
- Muốn lặp lại ổn định về sau

## Vì sao cần nó

Bạn không trò chuyện với Codex trong CI, cũng không mong nó dừng lại mười lần để đặt câu hỏi.

Do đó, `codex exec` thường dùng cho:

- Tự động hóa đánh giá mã
- Tác vụ định kỳ
- Script xử lý hàng loạt
- Một bước phân tích hoặc tạo nội dung trong pipeline

Nó phù hợp khi **ranh giới tác vụ đã rõ ràng**; nếu vẫn đang khám phá một yêu cầu mơ hồ, chế độ tương tác thường thích hợp hơn.

:::note
**Tên lệnh và tham số cần theo CLI chính thức.** Sau khi nâng cấp, hãy chạy `codex --help` và `codex exec --help` để kiểm tra lại.
:::

## Cách dùng tối thiểu

```bash
cd /path/to/repo
codex exec --cd . "Chỉ đọc: so sánh diff của nhánh hiện tại với main, liệt kê 3 rủi ro bảo mật cao nhất; không sửa tệp"
```

Mặc định, lệnh chạy trong sandbox chỉ đọc. Khi cần cho phép ghi trong vùng làm việc, hãy chỉ định rõ:

```bash
codex exec --cd . --sandbox workspace-write "Sửa bài kiểm thử thất bại; chỉ sửa src/auth và tests/auth"
```

Tiến độ được ghi vào `stderr`, phản hồi cuối cùng vào `stdout`. Dùng `--json` khi hệ thống cần xử lý toàn bộ luồng sự kiện; dùng `-o` / `--output-last-message` khi chỉ cần tệp chứa thông điệp cuối; thêm `--output-schema` khi cần các trường dữ liệu ổn định.

Nguyên tắc:

- Trong shell script, trước tiên `cd` vào một worktree sạch
- Đặt lời nhắc trong `prompts/` được quản lý phiên bản hoặc heredoc để tránh lỗi escape của shell
- Trong CI, dùng **mã thoát** để xác định thành công hay thất bại

## Điều thực tế dễ bị bỏ qua nhất

Ở chế độ tương tác, bạn vẫn có thể bổ sung “ý tôi không phải vậy”.
Ở chế độ `exec`, **nếu lời nhắc đầu tiên sai, cả lượt chạy có thể đi chệch hướng**.

Vì thế, lời nhắc `exec` cần nêu rõ hơn bình thường:

- Cần làm gì
- Không được làm gì
- Định dạng đầu ra là gì
- Thế nào là hoàn thành
- Khi thất bại thì cần thoát ra sao

## Hiểu lầm thường gặp

### `exec` phù hợp với tác vụ cố định

Nhiều người mới dùng nghĩ đây là “chế độ CLI nâng cao”.

Hiểu chính xác hơn: nó phù hợp để **thực thi lặp lại một cách ổn định**.

### Lời nhắc ngắn chưa chắc rõ

Ở chế độ tương tác, nếu diễn đạt mơ hồ, bạn còn cơ hội bổ sung sau.

Nhưng với `exec`, một lời nhắc ngắn bỏ qua ranh giới, giới hạn và tiêu chí thành công thường dễ khiến tác vụ mất kiểm soát hơn.

## Quy trình đề xuất

```text
Chuẩn bị kho mã (checkout, cài đặt, token chỉ đọc)
    → cố định phiên bản lời nhắc (git sha)
    → codex exec
    → thu thập stdout / artifact
    → mã thoát khác 0 làm CI thất bại; không tự động thử lại vô hạn
```

Xem tiếp [Script và pipeline](/vi/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## Có thể xem nó là gì

- Một lệnh thực hiện tác vụ đơn lẻ có thể đưa vào script
- Phù hợp để dùng trong script, CI hoặc tác vụ cron

Đó là lý do nhiều nhóm đặt nó phía sau `make review`, GitHub Actions, cron hoặc nút bấm trên nền tảng nội bộ.

## So sánh với chế độ tương tác

| | `codex` tương tác | `codex exec` |
|---|---|---|
| Làm rõ yêu cầu | Có thể qua nhiều lượt | Phải nêu rõ ngay từ đầu |
| Phê duyệt | Có người tham gia | Cần siết chính sách từ trước |
| Phù hợp | Học tập, khám phá | CI, cron |

## Chọn thế nào khi chưa chắc

- Vẫn đang tìm hiểu yêu cầu và có thể thường xuyên đổi hướng: ưu tiên chế độ tương tác
- Tác vụ đã thành mẫu cố định và chỉ cần lặp lại ổn định: dùng `codex exec`

`codex exec` phù hợp nhất với tác vụ đã được mô tả rõ và cần chạy lại về sau. Nếu bạn vẫn đang vừa nghĩ vừa chỉnh yêu cầu, hãy xử lý tương tác trước khi đưa vào quy trình không tương tác.

## Lỗi thường gặp

- Đưa lịch sử trò chuyện dài vào một lần gọi exec
- CI dùng token có quyền ghi và lời nhắc chứa nội dung PR chưa được xử lý an toàn
- Không cố định phiên bản CLI khiến pipeline bất ngờ thất bại
- Bỏ qua mã thoát khác 0 mà vẫn đánh dấu CI thành công
- Ép tác vụ phức tạp cần con người phán đoán vào quy trình không giám sát

## Ranh giới an toàn

- Không có người giám sát nghĩa là [phê duyệt của con người](/vi/cases/workflows/human-approval-patterns/) yếu đi; mặc định chỉ đọc
- Xem [thông tin xác thực an toàn](/vi/guide/developer-platform/ci-cd/code-review-automation/#permissions-and-security) (liên kết chéo trong cùng chương)

## Danh sách nghiệm thu

- [ ] Môi trường cục bộ và CI dùng cùng một tệp lời nhắc
- [ ] CI xử lý đúng mã thoát
- [ ] Nhật ký không chứa khóa bí mật hoặc PII
- [ ] Sandbox và quy tắc giống hoặc nghiêm ngặt hơn khi phát triển tương tác

## Các chương liên quan

- [Chế độ không tương tác của CLI](/vi/guide/cli/non-interactive-mode/)
- [Đầu ra có cấu trúc](/vi/guide/developer-platform/non-interactive/structured-output/)
- [Mã thoát và thử lại](/vi/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Nguồn tham khảo
- Tài liệu OpenAI Codex CLI
