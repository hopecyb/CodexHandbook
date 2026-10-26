---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE"
  basis: "Đã đối chiếu với Slash commands và Developer commands trong tài liệu chính thức của ứng dụng máy tính; làm rõ rằng các giao diện có bộ lệnh khác nhau. Các lệnh được liệt kê đều có trong bảng chính thức tại thời điểm kiểm tra; tính khả dụng cuối cùng vẫn theo danh sách gợi ý trong ô soạn thảo."
  checkedAt: "2026-08-26"
title: Lệnh gạch chéo và lối vào nhanh
description: Tra cứu nhanh để học cách dùng lệnh / và gọi Skill bằng $, không phải tài liệu đầy đủ về tham số.
locale: vi
source_locale: zh-CN
source_revision: "a34c90f"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 40
reviewed_at: 2026-10-26
---

Khi mới thấy các lệnh gạch chéo, nhiều người tưởng đây là một loạt thuật ngữ phải học thuộc. Sẽ dễ hiểu hơn nếu xem chúng là những lối vào nhanh mà bạn có thể chủ động gọi tên.

Chúng thường giúp vào nhanh một chế độ cố định hoặc quy trình tích hợp. Lệnh gạch chéo (`/command`) có liên quan đến cách gọi [Skill](/vi/skills/overview/) bằng `$name`, nhưng không phải cùng một thứ. Danh sách cụ thể **thay đổi theo sản phẩm và quyền truy cập**; ứng dụng máy tính, CLI, IDE và ChatGPT Web cũng có những bộ lệnh khác nhau. Trước khi dùng, hãy xem các gợi ý hiện ra khi nhập `/` trong ô soạn thảo hiện tại và tài liệu chính thức.

## Phân biệt các khái niệm

| Lối vào | Ai khởi chạy | Công dụng điển hình |
|---|---|---|
| Lệnh gạch chéo như `/review` | Bạn nhập `/` | Quy trình cố định được tích hợp hoặc cấu hình |
| `$skill-name` | Bạn hoặc mô hình | Skill của dự án hoặc người dùng |
| Ngôn ngữ tự nhiên | Bạn | Tác vụ thông thường |

## Phân biệt trực tiếp ba cách này

- `/lệnh`: bạn chủ động chọn một lối vào nhanh trong cuộc trò chuyện.
- `$skill`: bạn hoặc mô hình nêu tên một Skill cụ thể cần dùng.
- Ngôn ngữ tự nhiên: bạn nói thẳng yêu cầu và để mô hình tự quyết định cách làm.

Nếu chỉ muốn vào nhanh một quy trình đã biết, thử `/lệnh` sẽ trực tiếp hơn.

## Nó là gì

- Không phải lệnh terminal.
- Không phải thuật ngữ bí hiểm.
- Có thể xem nó như “nút truy cập nhanh” trong giao diện trò chuyện.

Cách này phù hợp khi:

- Bạn đã biết mình muốn vào quy trình nào.
- Bạn không muốn phải diễn đạt lại cùng một ý định mỗi lần.

## Hiểu lầm thường gặp

### 1. Lệnh gạch chéo là lệnh terminal

Đó là lối vào nhanh trong giao diện trò chuyện, không phải lệnh `codex ...` để chạy trong shell.

### 2. Danh sách lệnh gạch chéo là cố định

Lệnh có sẵn có thể khác nhau giữa các sản phẩm, phiên bản và môi trường. Xem **danh sách gợi ý** trong môi trường hiện tại sẽ đáng tin cậy hơn.

### 3. Dùng lệnh gạch chéo thì không còn cần phê duyệt hoặc sandbox

Nếu quy trình phía sau ghi tệp, chạy lệnh hoặc truy cập mạng, nó vẫn phải tuân theo chính sách hiện tại.

### 4. Không biết lệnh gạch chéo thì không dùng Codex tốt được sao?

Ngôn ngữ tự nhiên đã đủ để hoàn thành phần lớn tác vụ. Lệnh gạch chéo chủ yếu giúp bạn làm nhanh hơn và vào một quy trình cố định sau khi đã quen dùng.

## Các lối vào thường gặp hiện nay

### Ứng dụng máy tính / IDE

- `/plan`: chuyển sang chế độ lập kế hoạch nhiều bước.
- `/review`: rà soát thay đổi chưa commit hoặc so sánh với nhánh cơ sở.
- `/status`: xem ID cuộc trò chuyện, mức sử dụng ngữ cảnh và giới hạn tốc độ.
- `/mcp`: xem trạng thái kết nối MCP.
- `/init`: tạo khung `AGENTS.md` cho dự án hiện tại.

### Điều khiển phiên riêng của CLI

- `/permissions`: điều chỉnh cách cấp quyền cho phiên hiện tại.
- `/agent`: kiểm tra hoặc chuyển luồng Agent.
- `/model`: chọn mô hình hiện tại.
- `/status`: kiểm tra cài đặt phiên hiện tại.

ChatGPT Web có menu lệnh riêng trong ô soạn thảo. Đừng mặc định lệnh của ứng dụng máy tính hoặc CLI sẽ có cùng tên và dùng được trên Web.

## Lưu ý khi sử dụng

1. **Trước tiên nhập `/` để xem** môi trường hiện tại hỗ trợ gì, thay vì học thuộc danh sách có thể đã lỗi thời.
2. Với quy trình cố định của nhóm, nên tạo **Skill kèm tài liệu** để tên lệnh không chỉ người dùng lâu năm mới biết.
3. Thao tác ghi do lệnh gạch chéo kích hoạt vẫn chịu giới hạn của sandbox và quy trình phê duyệt.

## Cách thử trực tiếp

Bạn có thể thử như sau:

1. Nhập `/`.
2. Xem môi trường hiện tại có gì.
3. Chọn thử một lệnh có tên và mục đích mà bạn hiểu.

## Cách thử lần đầu

Ở lần đầu, hãy làm theo thứ tự này:

1. Nhập `/` để xem môi trường hiện tại cung cấp gì.
2. Chọn một lệnh có mục đích bạn hiểu và thử một lần.
3. Quan sát xem nó giống “đổi chế độ” hay “chạy quy trình” hơn.
4. Nếu nhóm cần tái sử dụng quy trình đó lâu dài, hãy cân nhắc tạo Skill.

Như vậy sẽ dễ thấy vai trò của hai cách: lệnh gạch chéo là lối vào nhanh, còn Skill là quy trình để tái sử dụng lâu dài.

## Khác với lệnh CLI như thế nào

| | `/` trong cuộc trò chuyện | `codex …` trong terminal |
|---|---|---|
| Ngữ cảnh | Phiên hiện tại và các tệp đính kèm | Thư mục chỉ định bằng `--cd` / `-C` |
| Phù hợp | Khám phá tương tác | Script và CI |

Có thể xem lệnh gạch chéo là lối vào nhanh trong cuộc trò chuyện. Xem môi trường hiện tại thực sự cung cấp gì sẽ hữu ích hơn học thuộc tên lệnh.

Xem các lệnh con CLI tại [Chế độ tương tác của CLI](/vi/guide/cli/interactive-mode/) và [Chế độ không tương tác](/vi/guide/cli/non-interactive-mode/). Bảng tham số đầy đủ nằm ở [Tài liệu tham khảo lệnh CLI](/vi/guide/reference/commands/).
