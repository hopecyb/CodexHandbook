---
title: Định nghĩa hoàn thành
description: Tư duy danh sách hoàn thành dùng chung cho nhóm và cá nhân.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

“Định nghĩa hoàn thành” nghĩa rất thẳng: nói trước phải đạt đến mức nào thì lần này mới thật sự xong.

Nếu thiếu bước này, tình huống thường gặp là:

- Bạn thấy còn thiếu một chút
- Codex thấy đã làm xong
- Hai bên đều không sai, chỉ là chuẩn chưa khớp

## Vì sao bước này quan trọng

Nhiều lần làm lại bắt nguồn từ việc chuẩn “hoàn thành” ngay từ đầu chưa nói rõ.

Ví dụ:

- Chỉ cần sửa văn bản là đủ, hay còn cần xem trước trang bình thường?
- Chỉ cần build chạy được, hay còn phải kiểm thủ công nút bấm được?
- Chỉ cần tính năng dùng được, hay còn phải bổ sung tài liệu hướng dẫn?

Nếu không nói rõ trước, cuối cùng rất dễ mỗi bên một chuẩn.

Ví dụ định nghĩa hoàn thành tối thiểu cho cá nhân:

- [ ] Diff đã được rà
- [ ] Tiêu chí nghiệm thu đã đánh dấu từng mục
- [ ] Kiểm thử hoặc kiểm tra thủ công đã xong
- [ ] Không có khóa bí mật vào kho
- [ ] Vấn đề cần theo dõi đã ghi lại

Bản dành cho nhóm sẽ mở rộng ở mốc quản trị sau.

## Hiểu lầm thường gặp

### 1. Định nghĩa hoàn thành không nhất thiết trang trọng hay phức tạp

Giai đoạn đầu, chỉ ba dòng cũng hữu ích:

- Sửa ở đâu
- Nghiệm thu thế nào
- Trường hợp nào tính là chưa xong

### 2. Nó không phải cùng một thứ với “mục tiêu”

Có thể phân biệt vậy:

- **Mục tiêu**: bạn muốn kết quả gì
- **Định nghĩa hoàn thành**: làm sao chứng minh kết quả đó đã đạt

Ví dụ:

- Mục tiêu: sửa văn bản nút trang chủ
- Định nghĩa hoàn thành: chỉ sửa trang chủ; văn bản nút thành bản mới; xem trước trang bình thường

### 3. Không cần viết dài mỗi lần

Không cần.

Viết rõ quan trọng hơn viết dài.

## Một mẫu rút gọn

Dùng bản này cũng được:

```text
Tiêu chuẩn hoàn thành:
1. Chỉ sửa trong phạm vi chỉ định
2. Kết quả khớp yêu cầu tôi đưa
3. Bước kiểm chứng đã xong, và cho tôi biết cách kiểm tra
```

“Định nghĩa hoàn thành” chủ yếu làm rõ “phải đạt mức nào mới tính là xong”, để phán đoán của bạn và Codex không lệch nhau.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ giải thích vai trò và cách viết định nghĩa hoàn thành; khái niệm, ví dụ và diễn đạt danh sách đã được rà lại, và phần thân không phụ thuộc sự kiện sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
