---
title: Tiện ích IDE
description: Dùng Codex trong trình soạn thảo — cài đặt, ngữ cảnh, tác vụ local và Cloud, rà soát và cài đặt.
locale: vi
source_locale: zh-CN
source_revision: 66307a0
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 12
---

Tiện ích IDE phù hợp **vừa viết vừa xem diff**: mở tệp, chọn mã, mô tả tác vụ ở thanh bên. Chương này phủ đường đi đầy đủ từ chọn loại đến rà soát.

Nếu bạn vốn viết mã hoặc sửa tài liệu trong trình soạn thảo, IDE thường là lối vào tự nhiên nhất.

Nó mang theo trực tiếp tệp đang mở và vùng chọn, nên nhiều tác vụ «sửa phạm vi nhỏ» dễ giữ phạm vi hơn.

## Điều hướng chương

| Chủ đề | Trang |
|---|---|
| Chọn loại | [Trình soạn thảo được hỗ trợ](/vi/guide/ide/supported-editors/) |
| Cài đặt | [Cài đặt](/vi/guide/ide/installation/) |
| Ngữ cảnh | [Ngữ cảnh trình soạn thảo](/vi/guide/ide/editor-context/) · [Vùng chọn và tệp mở](/vi/guide/ide/selected-code-and-open-files/) |
| Quy trình | [Tác vụ local](/vi/guide/ide/local-task-workflow/) · [Tác vụ Cloud](/vi/guide/ide/cloud-task-workflow/) |
| Chất lượng | [Rà soát thay đổi](/vi/guide/ide/reviewing-changes/) |
| Cấu hình | [Cài đặt](/vi/guide/ide/settings/) |
| Xử lý sự cố | [Xử lý sự cố](/vi/guide/ide/troubleshooting/) |

Lối tắt bắt đầu: [Cài đặt tiện ích IDE](/vi/guide/getting-started/install-ide-extension/) · [Chọn client](/vi/guide/getting-started/choose-your-codex-client/)

## Trước hết chú ý vài việc

Lần đầu dùng, có thể chú ý ba việc:

1. Nó sẽ tham chiếu tệp bạn đang mở
2. Bạn có thể dùng vùng chọn để khóa phạm vi chính xác hơn
3. Sửa xong vẫn phải tự rà soát diff

Tiện ích IDE phù hợp tác vụ «phạm vi nhỏ, vừa xem vừa sửa», nhưng kiểm soát phạm vi và rà soát vẫn không thể thiếu.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** IDE  
**Căn cứ kiểm chứng:** OpenAI Help Center hiện tại — *Using Codex with your ChatGPT plan* — vẫn nêu rõ hỗ trợ Codex IDE extension, và xếp nó ngang hàng CLI, Desktop App như client local; trang này chỉ là điều hướng chương IDE, nhấn mạnh cách làm ổn định «tệp hiện tại, vùng chọn và rà soát diff».  
**Kiểm chứng gần nhất:** 2026-07-26
