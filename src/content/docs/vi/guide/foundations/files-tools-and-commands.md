---
title: Tệp, công cụ và lệnh
description: Giải thích Codex đọc/ghi tệp, chạy lệnh và dùng công cụ như thế nào.
locale: vi
source_locale: zh-CN
source_revision: 8c0e875
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

Khác biệt lớn nhất so với chatbot thông thường là nó sẽ làm việc qua **công cụ**.

Tệp là chỗ nó sửa thứ gì đó; lệnh là cách nó thực hiện hành động; công cụ là lối vào để nó bắt tay làm.

Codex tác động tới thế giới thực qua **công cụ**:

- Đọc/ghi tệp dự án
- Chạy lệnh trong terminal (cần quyền và chính sách Sandbox cho phép)
- Tìm trên web, mở trình duyệt… (tùy năng lực sản phẩm và chính sách)

## Tách ba từ này trước

| Từ | Nghĩa tương ứng |
|---|---|
| Tệp | Nội dung thật trong dự án — mã, tài liệu, cấu hình |
| Lệnh | Một bước thực thi trong terminal — build, test, tìm kiếm |
| Công cụ | Lối vào năng lực Codex dùng để đọc tệp, sửa tệp, chạy lệnh, tìm trên web |

Cũng có thể nhìn từ góc khác:

- **Tệp** như nguyên liệu
- **Lệnh** như hành động
- **Công cụ** như đồ dùng nó dùng để lấy nguyên liệu và làm hành động

## Quá trình làm việc thường gặp

Sau khi bạn đưa một tác vụ, Codex thường làm các việc sau:

1. Đọc trước vài tệp liên quan để hiểu cấu trúc dự án
2. Khi cần thì tìm văn bản, mở thư mục, xem cấu hình
3. Nếu cần kiểm chứng kết quả, chạy một lệnh — ví dụ test hoặc build
4. Sửa tệp xong, giao thay đổi cho bạn kiểm tra

Vì vậy khi thấy nó «muốn đọc tệp» hoặc «muốn chạy lệnh», phần lớn nghĩa là nó đang làm bước bình thường mà tác vụ cần.

## Hiểu nhầm thường gặp

### 1. Nó chạy được lệnh thì có phải làm được mọi thứ?

Không nhất thiết.

Làm được hay không còn phụ thuộc vào:

- Lối vào sản phẩm hiện tại cung cấp những công cụ nào
- Sandbox có cho phép không
- Bước này có cần bạn phê duyệt không
- Chính sách nhóm có hạn chế thêm không

### 2. Nó có nên chạy ít lệnh hơn, sửa tệp trực tiếp cho nhanh?

Không nhất thiết.

Đôi khi chạy một lệnh kiểm tra lại giúp phát hiện vấn đề sớm hơn. Ví dụ sửa mã xong chạy test — ổn định hơn để bạn sau mới phát hiện bị hỏng.

### 3. Tôi không hiểu lệnh thì sao?

Nếu tạm thời không hiểu, có thể hỏi tiếp:

```text
Lệnh này làm gì? Sẽ thay đổi nội dung nào? Nếu không chạy thì sao?
```

## Một cách phán đoán đơn giản

Khi thấy Codex muốn đọc tệp, sửa tệp, chạy lệnh — có thể dùng ba câu hỏi này trước:

1. Bước này có liên quan tới mục tiêu của tôi không?
2. Phạm vi ảnh hưởng có đúng thư mục hoặc tệp tôi kỳ vọng không?
3. Nếu làm sai, tôi có hoàn tác dễ dàng không?

Chỉ cần một trong ba câu trả lời không được thì hãy để nó giải thích trước.

## Nguyên tắc sử dụng

1. **Phạm vi tối thiểu cần thiết**: chỉ rõ thư mục và tệp, tránh «sửa tùy ý cả kho»
2. **Lệnh nguy hiểm cần phê duyệt**: xóa, đẩy, sửa cấu hình hệ thống…
3. **Chọn công cụ có phương pháp**: xem [Chọn công cụ](/vi/guide/tools/tool-selection/)

Lối vào sản phẩm khác nhau thì bảng công cụ và cách xác nhận cũng khác — chi tiết xem từng cẩm nang sản phẩm.

Codex không chỉ «nói» — nó thật sự làm qua tệp, lệnh và công cụ, nên phải giữ mắt vào phạm vi và rủi ro.

Bước tiếp theo nên đọc:

1. [Quyền và phê duyệt](/vi/guide/foundations/permissions-and-approvals/)
2. [Sandbox và mạng](/vi/guide/foundations/sandbox-and-network/)
3. [Chạy tác vụ đầu tiên](/vi/guide/getting-started/run-your-first-task/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ giải thích khác biệt khái niệm giữa tệp, lệnh và công cụ cùng cách phán đoán rủi ro; liên kết nội bộ và cách diễn đạt ví dụ đã được rà lại, và nội dung không phụ thuộc vào chi tiết sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
