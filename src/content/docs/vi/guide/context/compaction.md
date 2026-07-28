---
title: Nén ngữ cảnh
description: Hội thoại dài sau khi nén giữ gì, mất gì.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

«Nén ngữ cảnh» có thể hiểu: hội thoại quá dài thì hệ thống rút nội dung trước thành bản ngắn hơn để tiếp tục giữ. Mục đích là để tác vụ còn chạy tiếp được; cái giá là **chi tiết có thể mất.**

## Vì sao ảnh hưởng kết quả

Nhiều người mới mặc định nghĩ:

«Những gì đã nói trước, nó nên nhớ rất đầy đủ mãi.»

Thực tế không luôn vậy.  
Tác vụ dài vào nén thường dễ mất hơn:

- Hạn chế nhỏ rất chi tiết
- Một ngoại lệ tạm nhưng quan trọng
- Danh sách trắng tệp bạn đã nêu trước
- Điều kiện biên trong tiêu chí nghiệm thu

Vậy nén không phải lỗi, mà là cơ chế cần bạn phối hợp.

## Sau nén nên nhắc lại gì trước

Nén làm mất chi tiết. Ràng buộc then chốt, tiêu chí nghiệm thu, danh sách trắng tệp nên **khai báo lại** sau nén, hoặc viết trong mô tả dự án.

Đặc biệt nên ưu tiên nhắc lại:

- Chỉ được sửa những tệp nào
- Nội dung nào tuyệt đối đừng đụng
- Thế nào là hoàn thành
- Hiện đã hoàn thành tới bước nào

## Hiểu nhầm thường gặp

### 1. Nén có bằng «nó quên hết nội dung»?

Chính xác hơn: giữ phần thân, nhưng không đảm bảo mọi chi tiết nhỏ đều giữ nguyên.

### 2. Cũng không cần mỗi lần nói lại từ đầu?

Cũng không cần.

Nói lại phần then chốt nhất, dễ mất nhất, không được sai nhất — thường là đủ.

### 3. Thông tin nào ít nên đánh cược «nó chắc còn nhớ»?

Thường là loại:

- Phạm vi tệp
- Mục cấm
- Tiêu chí nghiệm thu
- Quyết định quan trọng bạn đã xác nhận

## Sau nén cứu thế nào

Nếu tác vụ đã dài, giữa chừng có thể tự viết một tóm tắt ngắn, ví dụ:

```text
Ràng buộc còn hiệu lực hiện tại:
1. Chỉ sửa thư mục docs
2. Đừng chỉnh cấu trúc routing
3. Tiêu chí hoàn thành là cập nhật copy trang chủ và build qua
```

Cách này ổn hơn tiếp tục dựa vào cả chuỗi hội thoại dài.

Tầng khái niệm: [Token, ngữ cảnh và nén](/guide/foundations/tokens-context-and-compaction/)

Trong tác vụ dài, hạn chế then chốt đừng chỉ nói một lần; sau nén, quy tắc quan trọng đáng chủ động nhắc lại.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ nêu rủi ro và cách cứu sau khi nén hội thoại dài; khái niệm, ví dụ và liên kết trong site đã kiểm lại, và phần thân không phụ thuộc sự thật sản phẩm dễ đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
