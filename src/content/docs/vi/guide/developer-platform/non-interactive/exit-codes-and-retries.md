---
title: "Mã thoát và thử lại"
description: "Đọc đúng thành bại của `codex exec` trong pipeline — khi nào thử lại, khi nào fail ngay."
locale: "vi"
source_locale: "zh-CN"
source_revision: "35074cd"
translation_status: "reviewed"
translated_at: "2026-08-26"
sidebar:
  order: 40
reviewed_at: "2026-10-26"
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "Đã bỏ các ý nghĩa mã thoát cụ thể thiếu căn cứ. Trang chỉ dựa vào trạng thái thành công/thất bại của tiến trình và đầu ra tiến độ, lỗi trên `stderr` được tài liệu chính thức hiện tại xác nhận; kết luận nghiệp vụ của lần rà soát được xử lý qua đầu ra có cấu trúc."
  checkedAt: "2026-08-26"
---

CI dựa vào **mã thoát tiến trình** để phán bước thành hay bại. Chương này giải thích ngữ nghĩa thường gặp của [codex exec](/vi/guide/developer-platform/non-interactive/codex-exec/), chiến lược thử lại và thiết kế idempotent.

## Nội dung trang này

- Khác biệt giữa mã thoát và «review không đạt» về nghiệp vụ
- Có thử lại lỗi kiểu 429/mạng không
- Cách tránh thực thi trùng gây tác dụng phụ

## Mã thoát đang nói gì với bạn

Nếu lần đầu gặp nội dung này, hãy hiểu «mã thoát» là kết quả ngắn chương trình để lại cho script và CI sau khi Tác vụ chạy xong.

Thường nó không giải thích nhiều, chỉ báo cho pipeline:

- Lần này tính thành công
- Hay tính thất bại

Còn «thử lại» trả lời câu khác: lần fail này nên dừng ngay, hay đáng cho thêm một cơ hội.

:::note
Bảng mã thoát cụ thể lấy theo tài liệu CLI chính thức; bảng dưới đây là **nguyên tắc thiết kế** khi tích hợp.
:::

## Hiểu nhầm thường gặp

### Fail không chỉ có một loại

Nhiều người mới hiểu mọi khác `0` đều cùng một loại fail.

Thực tế ít nhất cần phân:

- Bản thân Tác vụ sập
- Chính sách hoặc Sandbox chặn
- Dịch vụ ngoài tạm thời lỗi
- Nó chạy thành công, chỉ là kết luận review «không đạt»

Cách xử lý khác nhau, không thể tất cả đều thử lại.

### «Tự thử lại» ≠ ổn định hơn

Nếu nguyên nhân fail vốn không biến mất nhờ thử lại — quyền thiếu, quy tắc chặn, Prompt sai — thì thử lại chỉ tốn thời gian và quota.

## Ngữ nghĩa khuyến nghị (khái niệm)

| Tình huống | Xử lý đề xuất |
|---|---|
| `0` | Tiến trình `codex exec` hoàn tất thành công; kết quả nghiệp vụ vẫn phải được đánh giá từ đầu ra có cấu trúc |
| Khác `0` và log có từ chối policy/sandbox | **Không** thử lại mù quáng; sửa cấu hình hoặc Prompt |
| Khác `0` và runner đã xác nhận lỗi mạng hoặc dịch vụ tạm thời | Thử lại có giới hạn với thời gian chờ tăng dần |
| Phát hiện vấn đề P0 nhưng thực thi thành công | Dùng `pass: false` của [đầu ra có cấu trúc](/vi/guide/developer-platform/non-interactive/structured-output/) + script `exit 1` |

«Phát hiện vấn đề bảo mật» không nên dựa vào exception kiểu sập, mà phải **tường minh** `pass: false` trong JSON và để script bọc quyết định mã thoát.

## Mẫu thu nhận mã thoát (bash)

```bash
#!/usr/bin/env bash
set -uo pipefail

log_file="${RUNNER_TEMP:-/tmp}/codex-exec.stderr.log"
codex exec --cd . "$(cat "$PROMPT")" 2>"$log_file"
code=$?

if [ "$code" -ne 0 ]; then
  cat "$log_file" >&2
  exit "$code"
fi
```

Đừng tự gán ý nghĩa cho mã chưa được tài liệu chính thức định nghĩa, chẳng hạn cho rằng `2` luôn là lỗi chính sách. Nếu cần thử lại, runner bên ngoài phải dựa vào loại lỗi mà nó nhận diện ổn định, đồng thời giới hạn số lần, tổng thời gian và tác dụng phụ.

## Idempotent và tác dụng phụ

| Rủi ro | Giảm thiểu |
|---|---|
| Bình luận PR trùng | Dùng check run id hoặc «đã có bình luận bot thì cập nhật» |
| Ghi tệp trùng | Exec mặc định review chỉ đọc; ghi ở job riêng + bước phê duyệt của con người |
| Gửi thông báo trùng | Webhook thông báo mang dedupe key |

## Khi chưa chắc thì phán thế nào

Nếu không chắc loại fail nào nên thử lại, hỏi trước:

1. Lỗi này có giống dao động ngoài tạm thời không
2. Dù chạy lại, có sinh bình luận/ghi/thông báo trùng không
3. Nguyên nhân fail thực ra có cần người sửa cấu hình, Prompt hoặc quyền không

Gần điều 1 hơn mới phù hợp thử lại có giới hạn; gần điều 2, 3 hơn thì nên dừng xử lý gốc rễ.

## Lỗi thường gặp

- Bỏ qua mã thoát, CI luôn green
- Thử lại vô hạn lỗi chính sách, đốt quota
- Thử lại không ghim Prompt/git sha, kết quả không so sánh được

Hãy phân «đây là sự cố tạm thời, hay vốn không tốt hơn nhờ thử lại», rồi mới quyết định thử lại. Không phải mọi fail đều đáng chạy lại.

## Checklist nghiệm thu

- [ ] CI fail với mã thoát khác 0
- [ ] Số lần thử lại và backoff có trần
- [ ] Phân biệt được review «không đạt» và «chạy sập»
- [ ] Log giữ đủ thông tin để lần lỗi

## Chương liên quan

- [Tham chiếu lỗi](/vi/guide/reference/error-reference/)
- [Phục hồi sau thất bại](/vi/cases/workflows/failure-recovery/)

## Nguồn tham chiếu
- Hướng dẫn thử lại OpenAI API (khái niệm)
