---
title: Lệnh và lối tắt
description: Lệnh con CLI, thao tác trong phiên và thói quen bàn phím — hướng dẫn theo sản phẩm; tham số đầy đủ xem khu tham chiếu.
locale: vi
source_locale: zh-CN
source_revision: 6a36a12
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 50
reviewed_at: 2026-08-26
---

Hiệu quả trong terminal đến từ ba khối: **cách khởi**, **thao tác tắt trong phiên**, **phối hợp với script/trình soạn thảo**. Trang này nói cách dùng và thói quen; bảng tham số xem [Tham chiếu lệnh CLI](/vi/guide/reference/commands/) và [Phím tắt](/vi/guide/reference/keyboard-shortcuts/).

## Nội dung trang

- Khi nào dùng `codex` và khi nào dùng `codex exec`
- Trong phiên tương tác có những loại thao tác phổ biến nào
- Cách đóng cứng thao tác lặp thành alias hoặc script

## Phân rõ gì trước

Nhiều người mới lần đầu thấy CLI dễ nghĩ «lệnh và lối tắt» là học thuộc cú pháp, học thuộc tham số.

Thực tế hơn là phân rõ ba việc trước:

- Bạn đang **vừa chat vừa làm**
- Hay muốn nó **chạy xong một tác vụ một lần**
- Hay chỉ muốn rút ngắn vài thao tác hay lặp

Phân rõ rồi thì chọn lệnh nào sẽ rõ hơn nhiều.

## Tổng quan lối vào lệnh

| Việc bạn muốn | Lối vào | Chi tiết |
|---|---|---|
| Vừa chat vừa sửa mã | `codex` TUI tương tác | [Chế độ tương tác](/vi/guide/cli/interactive-mode/) |
| Tác vụ một lần CI / pipeline | `codex exec` (hoặc tương đương) | [Chế độ không tương tác](/vi/guide/cli/non-interactive-mode/) |
| Đổi hành vi mặc định | Tệp cấu hình | [Cấu hình CLI](/vi/guide/cli/configuration/) |

:::note
Tên lệnh con đổi theo phiên bản — lấy theo `codex --help`.
:::

## Hiểu nhầm thường gặp

### `codex` và `codex exec` không phải một thấp một cao

Nhiều người hiểu thành:

- Một là chế độ đơn giản
- Một là chế độ chuyên nghiệp

Cách phân thực dụng hơn:

- `codex` phù hợp bạn có mặt, vừa xem vừa điều hướng
- `codex exec` phù hợp bạn nói rõ tác vụ trước, để nó chạy theo quy trình một lần

### Lối tắt không phải càng nhiều càng tốt

Lúc đầu không cần nhớ hết mọi phím tắt và lệnh `/`.

Nắm trước:

- Cách khởi phiên
- Cách xem môi trường hiện tại hỗ trợ lệnh `/` nào
- Cách thoát, mở lại, đổi thư mục

Biết vài việc này là đủ dùng.

## «Tắt» trong phiên tương tác

Khóa và lệnh `/` cụ thể khác nhau theo phiên bản, nhưng hạng mục ổn định:

### Nhập và lịch sử

- Nhập nhiều dòng: dùng tổ hợp xuống dòng theo hướng dẫn sản phẩm (thường `Shift+Enter` hoặc chế độ trình soạn)
- Xem lại tác vụ trước: lịch sử terminal hoặc lịch sử trong phiên (nếu có)

### Lệnh slash

Gõ `/` tại dấu nhắc có thể kích hoạt quy trình tích hợp (rà soát, nén ngữ cảnh, v.v.). **Đừng học thuộc danh sách chết** — lấy theo hoàn thành `/` của môi trường hiện tại. Phân loại học: [Tra cứu lệnh slash](/vi/guide/reference/slash-commands/).

### Liên quan phê duyệt

Khi Agent yêu cầu chạy shell hoặc ghi tệp, giao diện tương tác sẽ hỏi phê duyệt / từ chối / luôn cho phép (nếu có). Trước khi không người canh hãy đọc [Phê duyệt và Sandbox](/vi/guide/cli/approvals-and-sandbox/).

## Lối tắt tầng Shell (khuyến nghị)

Viết hàm «vào dự án + khởi Codex» để giảm sai thư mục:

```bash
# Ví dụ ~/.zshrc (sửa theo nhu cầu)
cx() {
  cd "$1" || return 1
  codex
}
```

Rà soát không tương tác có thể gói thành script, Prompt để trong `prompts/review.md` — dễ quản phiên bản.

## Có thể quen theo thứ tự này

Mới dùng CLI, có thể quen theo:

1. Khởi `codex` trong đúng thư mục trước
2. Rồi phán khi nào nên dùng `codex exec`
3. Cuối cùng thu thao tác tần suất cao thành alias, hàm hoặc script

Như vậy ít bị «công cụ chưa quen đã bọc thêm một lớp» ngay từ đầu.

## Phân công với IDE / App

| | CLI | Tiện ích IDE |
|---|---|---|
| Ngữ cảnh | `--cd`, tệp @ (tùy phiên bản) | Tệp mở, mã chọn |
| Phù hợp | Script, SSH từ xa, thuần terminal | Vừa sửa vừa xem diff |
| Lối tắt | Phím terminal + `/` | Bảng lệnh trình soạn thảo |

IDE: [Quy trình tác vụ local](/vi/guide/ide/local-task-workflow/)

## Lỗi thường gặp

- Khởi sai thư mục, sửa sang dự án bên cạnh
- Coi `/review` trong ứng dụng là lệnh con terminal rồi chạy ngoài shell
- Dán Prompt «vạn năng» bên thứ ba chưa rà vào phiên tương tác

Đừng vội học thuộc mọi lệnh và phím tắt. Phân rõ «tôi đang vừa chat vừa làm, hay để nó chạy một lần» thì chọn lệnh sẽ đơn giản hơn nhiều.

## Danh sách nghiệm thu

- [ ] Khởi được phiên tương tác ở thư mục gốc kho đích
- [ ] Biết chỗ xem lệnh `/` mà phiên bản hiện tại hỗ trợ
- [ ] Viết được một tác vụ chỉ đọc `codex exec` tối thiểu (nếu môi trường có)

## Nguồn tham khảo
- Tài liệu OpenAI Codex CLI
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI  
**Ghi chú tái kiểm:** Trang này liên quan `codex`, `codex exec`, hạng mục lệnh `/` và thao tác tắt trong phiên — chi tiết tương tác CLI dễ đổi theo phiên bản; hiện thiếu tài liệu lệnh/lối tắt chính thức hiện hành đủ mạnh để chống đỡ các mô tả này — cần viết lại rồi mới kiểm chứng.  
**Kiểm chứng gần nhất:** 2026-07-26
