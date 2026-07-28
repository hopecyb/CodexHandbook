---
title: Trình soạn thảo được hỗ trợ
description: Tiện ích Codex IDE hỗ trợ trình soạn thảo nào, cách chọn và hạn chế thường gặp.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Tiện ích IDE gắn Codex vào trình soạn thảo **bạn đã dùng**, để bạn khởi tác vụ, xem diff, chấp nhận thay đổi ngay trong cùng giao diện viết mã. Trang này nêu phạm vi hỗ trợ và cách chọn; bước cài xem [Cài đặt tiện ích IDE](/guide/ide/installation/).

## Nội dung trang

- Trình soạn thảo nào có tiện ích chính thức
- Cách chọn tiện ích IDE vs ứng dụng Desktop vs CLI
- Nhóm dùng nhiều trình soạn thảo thống nhất quy trình thế nào

## Khi chọn nên xem gì

Ở đây chủ yếu nói hai việc: những trình soạn thảo nào nằm trong phạm vi hỗ trợ chính thức, và khi đã có trình soạn thảo quen dùng thì có nên tiếp tục dùng Codex trong IDE không.

## Phạm vi hỗ trợ chính thức

**Danh sách cụ thể và yêu cầu phiên bản lấy theo [Tài liệu OpenAI Codex](https://developers.openai.com/codex)**, thường gồm:

| Trình soạn thảo | Người dùng điển hình | Ghi chú |
|---|---|---|
| Visual Studio Code | Phần lớn nhà phát triển | Cài từ marketplace, hệ sinh thái chín nhất |
| Cursor và fork họ VS Code khác | Người đã dùng trình soạn thảo AI | Thường tương thích cơ chế tiện ích VS Code — lấy theo thực nghiệm |
| Dòng JetBrains (nếu chính thức cung cấp) | Người dùng Java/Kotlin/IDEA | Chức năng và UI có thể hơi khác bản VS Code |

Trình soạn thảo không có trong danh sách chính thức: dùng [CLI](/guide/cli/) hoặc [ứng dụng Desktop](/guide/desktop-app/) thay thế — đừng dựa vào tiện ích port không chính thức.

## Hiểu nhầm thường gặp

### Hỗ trợ một trình soạn thảo không có nghĩa chức năng giống hệt lối vào khác

Có người hiểu «có tiện ích» thành «trong IDE là làm được mọi thứ».

Trọng tâm các lối vào khác nhau:

- IDE nghiêng về sửa sát mã
- App nghiêng về tác vụ cấp dự án và điều phối đa tác vụ
- CLI nghiêng về terminal, script và môi trường từ xa

### Chọn trình soạn thảo không chỉ vì quen tay

Nếu bạn chủ yếu làm:

- Sửa mã cục bộ
- Xem vùng chọn
- Vừa sửa vừa kiểm

IDE hợp hơn.

Nếu thường làm:

- Tác vụ dài
- Điều phối tài liệu
- Nhiều tác vụ song song

App hoặc CLI thường hợp hơn.

## Khi nào chọn tiện ích IDE

| Phù hợp | Ít phù hợp |
|---|---|
| Khi sửa mã muốn «tệp/vùng chọn hiện tại» tự vào ngữ cảnh | Cần đa Agent song song, cây làm việc và năng lực riêng của App |
| Quen xem inline diff trong trình soạn thảo | Chủ yếu làm tác vụ dài không phải mã (tài liệu, khảo sát) |
| Đã chạy test, debug trong IDE | Cần môi trường Cloud chuẩn hóa để dựng kho từ đầu |

Lối vào quyết định: [Chọn client Codex](/guide/getting-started/choose-your-codex-client/)

## Phân công với ứng dụng Desktop

```text
Tiện ích IDE: đang sửa → chỉnh nhỏ → rà soát inline → test local
Ứng dụng Desktop: tác vụ cấp dự án → Agent song song → cây làm việc → thông báo và ủy thác Cloud
```

Hai bên có thể dùng chung tài khoản và cấu hình dự án; xem [Ngữ cảnh trình soạn thảo](/guide/ide/editor-context/) và [Phạm vi AGENTS.md](/guide/customization/agents-md/scope-and-precedence/).

## Đồng bộ nhóm

1. Trong README ghi rõ **trình soạn thảo khuyến nghị + phiên bản tiện ích tối thiểu**
2. Quy tắc cốt lõi viết trong `AGENTS.md`, không gắn chức năng riêng của một IDE
3. Code review vẫn lấy Git diff làm chuẩn, không phụ thuộc view «chỉ IDE nào đó mới xem được»

## Cách chọn lối vào nào

Khi chưa chắc, hỏi vài câu:

1. Phần lớn thời gian bạn có sửa mã trong trình soạn thảo không
2. Bạn có phụ thuộc mạnh vào tệp hiện tại, vùng chọn và inline diff không
3. Bạn tạm thời có cần đa Agent, cây làm việc hoặc quản lý tác vụ mạnh hơn không

Đa số câu trả lời là «có» thì bắt đầu từ tiện ích IDE.

## Lỗi thường gặp

- Giả định tiện ích IDE và App chức năng 1:1
- Khởi tác vụ khi chưa mở thư mục gốc không gian làm việc → đường dẫn và phân giải `AGENTS.md` sai
- Trộn nhiều tiện ích AI → xung đột ngữ cảnh và phím tắt

Nhiều khi chọn tiện ích IDE chỉ vì công việc chính vốn đã nằm trong trình soạn thảo.

## Nguồn tham khảo
- Tài liệu OpenAI Codex IDE
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** IDE  
**Ghi chú tái kiểm:** Trung tâm trợ giúp chính thức hiện chỉ xác nhận đủ mạnh «Codex VS Code extension is compatible with most VS Code forks», nhưng trang này còn mở rộng tới Cursor, Windsurf, JetBrains và hình thái hỗ trợ cụ thể; trước khi bổ sung ma trận hỗ trợ hiện hành nên gắn `outdated`.  
**Kiểm chứng gần nhất:** 2026-07-26
