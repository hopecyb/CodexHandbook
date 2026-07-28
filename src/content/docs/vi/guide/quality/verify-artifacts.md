---
title: Kiểm chứng artifact
description: Kiểm tra tài liệu, trang và các artifact khác được tạo ra.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


“Artifact” ở đây là nội dung cuối cùng mà tác vụ giao lại, ví dụ:

- Một bài tài liệu
- Một trang
- Một hình ảnh
- Một bảng
- Một tệp được tạo ra

Đừng vì mã trông có vẻ đúng mà mặc định artifact cũng đúng.

## Vì sao phải kiểm chứng artifact riêng

Nhiều tác vụ không chỉ giao diff mã, mà còn gồm nội dung người dùng thực sự sẽ thấy và dùng.

Khi kiểm chứng artifact, thường xem:

- Thứ cuối cùng có dùng được không
- Cách trình bày có đúng kỳ vọng không
- Khi đưa cho người khác có trông lệch, sai hoặc thiếu không

Có tác vụ vấn đề không nằm ở lớp mã, mà ở lớp trình bày cuối cùng.

Ví dụ:

- Mã trang chạy được, nhưng bố cục sai
- Cấu trúc văn bản đúng, nhưng đọc lên khó chịu
- Định dạng liên kết đúng, nhưng bấm vào lại sai
- Bảng đã tạo, nhưng thứ tự trường không khớp thói quen dùng

Vậy “nó đã tạo ra” không bằng “nó dùng được”.

Với artifact không phải mã: mở tệp, kiểm tra liên kết, đối chiếu thiết kế, đọc to văn bản một lần. Với trang: xem trước trên thiết bị thật hoặc trình duyệt, đừng chỉ nhìn mã được tạo.

## Kiểm tra theo loại artifact

Có thể chọn cách kiểm theo loại:

- **Trang**: xem render thật, bố cục, liên kết, tương tác
- **Tài liệu**: xem cấu trúc, thuật ngữ, khả năng đọc, liên kết
- **Hình ảnh**: xem kích thước, độ nét, chữ, chi tiết
- **Bảng hoặc tệp xuất**: xem trường, thứ tự, mở được không, đọc được không

## Hiểu lầm thường gặp

### 1. Build qua không có nghĩa trang không có vấn đề

Build qua chỉ nói “nó có thể được tạo ra”, không nói “nó trông đúng, nội dung đúng, tương tác đúng”.

### 2. Nội dung dạng tài liệu cũng phải kiểm chứng

Có.

Đặc biệt những điểm này:

- Cấp tiêu đề có hợp lý không
- Liên kết có bấm được và đúng không
- Thuật ngữ có nhất quán trước sau không
- Văn bản có tự nhiên, dễ đọc không

### 3. Chỉ xem ảnh chụp màn hình chưa đủ

Ảnh chụp phù hợp để xem nhanh tổng quan, nhưng nhiều vấn đề chỉ lộ ra khi mở tệp thật hoặc trang thật.

## Áp dụng trực tiếp

Có thể yêu cầu thẳng:

```text
Sau khi hoàn thành, hãy tự kiểm một lần theo góc nhìn artifact cuối cùng, và cho tôi biết bạn thực sự đã mở kiểm gì, phát hiện gì, còn phần nào chưa kiểm chứng.
```

## Thứ tự kiểm tra

Có thể kiểm theo thứ tự này:

1. Mở artifact thật trước
2. Đối chiếu từng tiêu chí nghiệm thu của bạn
3. Xem còn vấn đề nhỏ ở lớp trải nghiệm không

Chạy được chỉ nói nền tảng chưa hỏng; có giao được hay không còn phải xem hiệu quả sử dụng cuối cùng.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ mô tả phương pháp kiểm chứng hướng tới vật giao cuối cùng; liên kết nội bộ, phân loại artifact và thứ tự kiểm tra đã được rà lại, và phần thân không phụ thuộc sự kiện sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
