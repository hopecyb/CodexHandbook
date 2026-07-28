---
title: Ngữ cảnh tệp và thư mục
description: Chỉ định tệp liên quan và tránh nhiễu không liên quan.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Đừng chỉ nói «giúp tôi sửa một chút» — hãy bảo Codex xem những tệp nào, đừng xem những tệp nào.

Bạn có thể đã biết vấn đề nằm trong một thư mục, nhưng nếu phạm vi chưa rõ, Codex có thể kéo cả tệp không liên quan vào.

## Vì sao phạm vi quan trọng

Phạm vi một khi quá lớn, các vấn đề thường gặp xuất hiện cùng lúc:

- Nó đọc nhiều tệp không liên quan
- Ngữ cảnh bị chiếm bởi thông tin thừa
- Nó coi một tệp tương tự khác cũng là mục tiêu
- Phạm vi thay đổi vượt kỳ vọng của bạn

Vậy ngữ cảnh tệp và thư mục chính là vẽ biên cho nó.

## Vì sao cần vẽ rõ phạm vi tệp

Có thể nghĩ như dẫn người vào văn phòng tìm tài liệu:

- Nếu bạn nói «đi tìm một chút», đối phương có thể lật cả nửa tầng
- Nếu bạn nói «chỉ xem thư mục xanh ở tủ thứ ba», hiệu suất cao hơn nhiều

Codex cũng vậy. Phạm vi bạn đưa càng rõ, nó càng ít phải đoán để bổ sung.

## Một ví dụ đơn giản

Chỉ rõ đường dẫn liên quan:

```text
Chỉ đọc src/components/Button.tsx và tệp kiểm thử của nó, đừng quét cả kho.
```

Câu này đồng thời nói:

- Xem ở đâu
- Đừng xem ở đâu
- Đừng tự mở rộng phạm vi

## Hiểu nhầm thường gặp

### 1. Tệp liên quan nói càng nhiều càng tốt?

Quá ít khiến nó đoán; quá nhiều khiến trọng tâm bị pha.  
Cách hợp hơn: **chỉ đưa phần thật sự cần để hoàn thành tác vụ hiện tại.**

### 2. Tôi không biết tệp liên quan ở đâu — làm sao?

Có thể để nó giúp thu hẹp phạm vi trước, nhưng nêu rõ mục đích, ví dụ:

```text
Trước hết giúp tôi tìm tệp liên quan kiểu nút đăng nhập, chưa được sửa gì.
```

Định vị trước, thực thi sau — thường ổn hơn «quét cả kho rồi sửa luôn» ngay từ đầu.

### 3. Không chỉ phạm vi cũng được — nó tự tìm mà?

Nó có thể tìm, nhưng cái giá thường là:

- Đọc nhiều hơn
- Chậm hơn
- Dễ kéo thêm tệp tương tự
- Dễ sửa chỗ bạn không lường trước

### 4. Thư mục và tệp đều phải nói?

Không nhất thiết, nhưng càng cụ thể càng tốt.

- Đã biết tệp nào: chỉ thẳng tệp
- Chỉ biết vùng khoảng: chỉ thư mục trước
- Hoàn toàn chưa chắc: để nó chỉ định vị và giải thích trước

## Ba việc nên bổ sung trong Prompt

Nếu lo nó sửa nhiều, có thể bổ sung trực tiếp trong Prompt:

1. Chỉ xem những tệp hoặc thư mục nào
2. Đừng quét ở đâu
3. Trước khi sửa, nói trước sẽ ảnh hưởng những tệp nào

Trong IDE chú ý thư mục gốc không gian làm việc hiện tại có đúng không.

## Cách viết dùng ngay được

Có thể viết kiểu:

```text
Trước mắt chỉ xem `src/pages/home/` và `src/components/Hero.tsx`.
Đừng quét `backend/` và `scripts/`.
Nếu còn cần tệp khác, nói trước vì sao cần, rồi mới tiếp tục.
```

Chỉ phạm vi tệp cho Codex chính là giảm đoán, nhiễu và sửa nhầm.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ nêu cách giới hạn phạm vi tệp và thư mục; cách viết ví dụ và diễn đạt khái niệm đã kiểm lại, và phần thân không phụ thuộc phiên bản sản phẩm, giá hay giao diện dễ đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
