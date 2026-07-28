---
title: Bàn giao và khôi phục
description: Tiếp tục công việc chưa xong qua các phiên.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ở đây xử lý một vấn đề rất phổ biến:

> **Lần này chưa xong, lần sau tiếp thế nào?**

Nếu không bàn giao, lần sau mở lại dễ xảy ra ba việc:

- Bản thân bạn quên đã tới đâu
- Codex không biết ràng buộc nào vẫn còn hiệu lực
- Vòng hội thoại mới làm tản ngữ cảnh cũ, lại vòng từ đầu

## Bàn giao thật sự để lại gì

Bàn giao và khôi phục là để lại một thẻ hướng dẫn cho “người tiếp tục làm lần sau”.

“Người” đó có thể là:

- Chính bạn vài giờ sau
- Một tác vụ khác mới mở
- Người cộng tác khác
- Codex tiếp nhận

Vậy bàn giao không phải viết tóm tắt dài, mà để lại **thông tin thật sự cần để tiếp tục làm**.

## Khi bàn giao ít nhất cần để lại gì

Tóm tắt bàn giao nên gồm ít nhất:

- Mục tiêu và trạng thái hiện tại
- Tệp đã sửa
- Ràng buộc vẫn còn hiệu lực
- Hành động duy nhất tiếp theo
- Cách kiểm chứng

Nếu còn thêm được một câu, tốt nhất viết rõ:

- Vì sao dừng ở đây

Như vậy lần sau tiếp tục sẽ không chỉ thấy “làm nửa chừng” mà không biết vì hết giờ, cần phê duyệt, hay gặp tắc thật.

## Hiểu lầm thường gặp

### 1. Chuyển cả đoạn hội thoại cũ sang là đã bàn giao

Thường chưa đủ.

Hội thoại cũ có nhiều khám phá, thử sai và nhánh phán đoán đã hết hiệu lực. Thứ thật sự có giá trị là **kết luận vẫn còn đúng lúc này**.

### 2. Viết càng nhiều càng tốt

Bàn giao sợ nhất hai trường hợp:

- Quá ngắn, thiếu thông tin then chốt
- Quá dài, không thấy bước tiếp theo phải làm gì

Thứ giúp tiếp tục thực thi nhất thường là **ngắn, đúng, có thể nối tiếp**.

### 3. Chỉ viết “còn một chút, làm nốt”

Câu này gần như vô dụng.

Hãy cố dịch “làm nốt” thành một hành động rõ, ví dụ:

- Chạy một lần `pnpm build`
- Tiếp tục viết bổ sung `guide/verification.md`
- Kiểm cảm giác hình tiêu đề của `/guide/foundations/local-vs-cloud/`

## Khi khôi phục làm thế nào ổn hơn

Sau khi dán tóm tắt vào thread mới, đừng sửa lớn ngay; làm ba việc này trước:

1. Xác nhận mục tiêu có đổi không
2. Xác nhận hiện trạng tệp khớp mô tả bàn giao
3. Bắt đầu từ “hành động duy nhất tiếp theo”, đừng lan lại

Như vậy tránh phụ thuộc ngữ cảnh cũ đã nén, thiếu hoặc méo.

Bàn giao tốt không phải kể lại lịch sử, mà để người mở tác vụ lần sau biết ngay: đang ở đâu, bước tiếp theo làm gì, xong thì kiểm thế nào.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với mô tả công khai hiện tại của OpenAI Developers về tác vụ dài hạn, mục tiêu liên tục và hình thái cộng tác Codex; nội dung trang chỉ giữ phương pháp ổn định “tóm tắt bàn giao phải giúp lần sau tiếp tục làm”, không viết nút hay quy trình bàn giao cụ thể của một client sản phẩm thành quy tắc cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
