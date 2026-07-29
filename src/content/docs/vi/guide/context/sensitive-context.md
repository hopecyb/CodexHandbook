---
title: Ngữ cảnh nhạy cảm
description: Khóa bí mật, quyền riêng tư và tài liệu không được chia sẻ.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Mọi nội dung bạn không muốn người khác tùy tiện xem, chép, gửi ra ngoài hoặc để lâu trong nhật ký tác vụ — hãy coi là thông tin nhạy cảm trước.

## Vì sao phải phán trước

Nhiều vấn đề an toàn không phải vì cố ý vi phạm, mà vì lúc đó chỉ nghĩ «giải quyết vấn đề trước đã».

Ví dụ:

- Để xử lý sự cố, dán nguyên cả tệp `.env`
- Để nó hiểu, dán thẳng dữ liệu gốc của khách hàng
- Để tiện, dán nguyên văn báo lỗi kèm token thật

Cách làm này lúc đó trông tiện, sau thường khó khắc phục nhất.

Đừng cung cấp cho Codex (luyện tập hoặc production):

- Khóa API, mật khẩu, cookie phiên
- Dữ liệu khách hàng chưa khử nhận dạng, số CCCD, v.v.
- Tài liệu nội bộ chưa công bố và hợp đồng cấm truyền ra ngoài

Dùng placeholder: `YOUR_API_KEY`. Nếu đã lộ, luân chuyển khóa theo quy trình tổ chức.

## Chưa chắc thì phán thế nào

Nếu chưa chắc một đoạn có nhạy cảm không, hỏi mình hai câu trước:

1. Nội dung này nếu người không liên quan thấy — có rủi ro không?
2. Nội dung này nếu để lâu trong nhật ký tác vụ — tôi có yên tâm không?

Chỉ cần một câu trả lời là «có» thì xử lý như thông tin nhạy cảm trước.

## Đừng dựa vào «chắc không sao đâu»

Nhiều người lần đầu dùng AI kiểu công cụ hay nghĩ phản xạ:

- «Tôi chỉ dán tạm thôi»
- «Nó chỉ giúp tôi xem»
- «Tệp này cũng chẳng thật sự gửi đi»

Nhưng chỉ cần thông tin đã vào quy trình tác vụ, hãy coi là thông tin nhạy cảm. Kiểm soát an toàn tốt nhất đặt trước sự việc.

## Nội dung dễ bị bỏ qua nhất

Ngoài mật khẩu và khóa, các loại sau cũng thường nhạy cảm:

- Danh sách khách hàng
- Số điện thoại, email, số CCCD
- Ảnh chụp nội bộ, phương án chưa phát hành
- Tệp cấu hình kèm địa chỉ production thật hoặc token truy cập

Tức là thông tin nhạy cảm không chỉ là một chuỗi khóa `sk-...`.

## Khử nhận dạng tới mức nào thì đủ

Không phải xóa hết mọi thông tin, mà giữ «thông tin tối thiểu cần để giải quyết vấn đề».

Có thể xử lý theo hướng:

- Giữ cấu trúc
- Thay giá trị thật
- Bỏ định danh
- Xóa trường không liên quan vấn đề hiện tại

Ví dụ bạn có thể giữ:

- Tên trường
- Loại lỗi
- Thứ tự gọi

Nhưng thay các thứ sau:

- Khóa thật
- Email thật
- Số điện thoại thật
- Tên khách hàng thật

## Khi bắt buộc phải cung cấp — làm ổn hơn thế nào

Cách ổn định hơn:

- Thay khóa bằng giá trị giả hoặc placeholder
- Khử nhận dạng dữ liệu người dùng thật
- Chỉ giữ trường thật sự cần để lần vấn đề
- Có thể mô tả hiện tượng thì cố đừng dán nguyên đoạn nhạy cảm gốc

Ví dụ:

```text
Đổi API Key thật thành YOUR_API_KEY, đổi email thật thành user@example.com.
```

## Nếu đã vô tình đưa ra

Xử lý theo mức rủi ro:

1. Dừng lan truyền tiếp trước
2. Luân chuyển ngay khóa, mật khẩu hoặc token
3. Báo cáo và khắc phục theo quy trình tổ chức

Khi giải quyết vấn đề, mặc định chỉ đưa «thông tin tối thiểu cần để lần»; khử nhận dạng được thì khử, placeholder được thì dùng placeholder.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ nêu nguyên tắc tối thiểu hóa và khử nhận dạng thông tin nhạy cảm; khái niệm, ví dụ rủi ro và gợi ý xử lý đã kiểm lại, và phần thân không phụ thuộc sự thật sản phẩm dễ đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
