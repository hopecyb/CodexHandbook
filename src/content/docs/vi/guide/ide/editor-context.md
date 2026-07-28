---
title: Ngữ cảnh trình soạn thảo
description: Tiện ích IDE đưa tệp mở, không gian làm việc và quy tắc dự án cho Codex thế nào.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Trong IDE, Codex không chỉ đọc Prompt của bạn mà còn tự nhận **trạng thái trình soạn thảo**. Đây là lợi thế cốt lõi của IDE so với CLI. Hiểu ngữ cảnh đến từ đâu giúp tránh cảm giác thất vọng «đã mở tệp mà nó không thấy».

Codex trong IDE không chỉ nhìn bạn nói gì, mà còn tham chiếu nội dung bạn đang xem trong trình soạn thảo.

## Nội dung trang

- IDE tự kèm những ngữ cảnh nào
- Chồng lên tệp @, vùng chọn, AGENTS.md thế nào
- Cách giảm nhiễu, tăng tỷ lệ trúng

## Quy trình khuyến nghị

1. **Mở kho bằng thư mục gốc không gian làm việc**, đừng chỉ mở thư mục con (monorepo ngoại lệ theo tài liệu nhóm)
2. Khi sửa logic cục bộ, **chọn mã liên quan trước** rồi mô tả tác vụ → [Vùng chọn và tệp mở](/guide/ide/selected-code-and-open-files/)
3. Tác vụ xuyên mô-đun dùng `@` nêu tên tệp then chốt, đừng giả định «nó tự tìm được»
4. Phiên dài định kỳ [nén ngữ cảnh](/guide/context/compaction/) hoặc mở thread mới

## Khác biệt với CLI

| | Tiện ích IDE | CLI |
|---|---|---|
| Nhận biết tệp | Mạnh (mở là ngữ cảnh) | Cần `--cwd` và công cụ đọc đĩa |
| Vùng chọn | Hỗ trợ gốc | Cần dán hoặc chỉ đường dẫn |
| Phù hợp | Sửa cấp dòng, giải thích mã | Script, CI, môi trường không GUI |

## Câu hỏi thường gặp

### 1. Đã mở tệp — vì sao vẫn không sửa như ý?

Vì «đã mở tệp» không nhất thiết bằng «trọng tâm đủ rõ».

Nếu phạm vi tác vụ vẫn mơ hồ, nó vẫn có thể xem nội dung liên quan khác, hoặc không nắm đoạn bạn quan tâm nhất.

### 2. Mở càng nhiều tệp càng tốt?

Mở quá nhiều tệp không liên quan khiến ngữ cảnh ồn, trọng tâm bị pha loãng.

### 3. IDE tự có ngữ cảnh — vậy tôi không cần viết rõ nữa?

Ngữ cảnh tự động hữu ích, nhưng không thay thế mô tả tác vụ.  
Mục tiêu, hạn chế và tiêu chí hoàn thành vẫn cần bạn nói rõ.

Ngữ cảnh IDE giúp bạn, nhưng không đoán thay bạn; phạm vi tệp càng chuẩn, kết quả thường càng ổn.

## Thông tin nhạy cảm

Đừng để `.env` chứa khóa mở lâu ở tiền cảnh trình soạn thảo; xem [Ngữ cảnh nhạy cảm](/guide/context/sensitive-context/).

Nhật ký, dữ liệu khách hàng hãy khử nhận dạng trước khi dán; IDE không tự phán đoán tuân thủ giúp bạn.

## Lỗi thường gặp

- Ở chế độ một tệp (không không gian làm việc) mà kỳ vọng đọc `AGENTS.md`
- Mở hàng chục tệp lớn không liên quan, chiếm cửa sổ ngữ cảnh
- Chỉ nói miệng «hàm này» mà chưa chọn, chưa @ tệp

## Danh sách nghiệm thu

- [ ] Thư mục gốc không gian làm việc đúng
- [ ] 1–3 tệp liên quan tác vụ đã mở hoặc @
- [ ] Lệnh kiểm thử trong `AGENTS.md` khớp terminal IDE

## Nguồn tham khảo
- [Ngữ cảnh tệp và thư mục](/guide/context/file-and-folder-context/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** IDE  
**Căn cứ kiểm chứng:** OpenAI Help Center hiện vẫn xếp IDE extension là một trong các lối vào chính phối hợp công cụ local; trang này không giả định nút trình soạn thảo cụ thể, mà tóm tắt phương pháp ổn định: không gian làm việc, tệp mở, vùng chọn, tệp `@` và quy tắc dự án cùng tạo thành ngữ cảnh IDE.  
**Kiểm chứng gần nhất:** 2026-07-26
