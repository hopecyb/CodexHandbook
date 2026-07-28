---
title: Phản mẫu Prompt
description: Các yêu cầu mơ hồ, vượt quyền và đòi suy luận ẩn cần tránh.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Khi học Prompt, dễ dồn chú ý vào «nên viết thế nào».
Nhưng nhiều khi biết trước những cách nói nào dễ kéo tác vụ lệch hướng lại tiết kiệm đường vòng hơn.

Dưới đây là vài «hố Prompt» thường gặp.

| Phản mẫu | Vì sao có hại |
|---|---|
| «Tối ưu một chút tùy ý» | Không mục tiêu, không ranh giới |
| «Cho toàn quyền, tự liệu đi» | Mặt sự cố lớn nhất |
| «Đừng hỏi tôi, sửa xong luôn» | Bỏ qua làm rõ và phê duyệt |
| «In hết quá trình suy luận ẩn của bạn» | Không đáng tin và thường không giúp nghiệm thu |
| Dán log chứa khóa bí mật | Rò rỉ thông tin xác thực |

## Vì sao những cách nói này dễ lật xe

Chúng thường có điểm chung:

- Trông như tiết kiệm chữ
- Thực ra đã cắt mất ranh giới then chốt

Phần bạn cắt đi cuối cùng trở thành phần Codex phải tự phán.

## Hiểu lầm thường gặp

### 1. Nói tùy ý một chút có giống cộng tác người thật hơn không

Nói tự nhiên không sao.  
Vấn đề lớn hơn là nói mất điều kiện then chốt.

### 2. «Sửa xong luôn, đừng hỏi tôi» sẽ hiệu quả hơn

Ngắn hạn trông như bớt một lượt hội thoại; kết quả thường thấy sau là:

- Sửa sai phạm vi
- Không lấy được phê duyệt cần thiết
- Cuối cùng làm lại nhiều hơn

### 3. Quyền lớn hơn thì việc mới tiến nhanh

Quyền càng lớn, mặt thao tác nhầm cũng càng lớn.  
Đặc biệt khi ranh giới tác vụ chưa nghĩ rõ, quyền lớn thường chỉ phóng đại rủi ro cùng lúc.

## Đổi phản mẫu thành cách nói rõ hơn

### Đừng viết thế này

```text
Tối ưu một chút tùy ý
```

### Có thể đổi thành thế này trước

```text
Sửa copy màn hình đầu trang chủ cho dễ hiểu với người mới; chỉ sửa tệp này; giữ cấu trúc hiện có; xong đưa diff và kết quả build.
```

## Một công thức thay thế đủ dùng

Khi thấy mình sắp viết câu mơ hồ, gắn công thức này trước:

```text
Mục tiêu + Phạm vi + Nghiệm thu
```

Ví dụ:

- Mục tiêu: sửa gì
- Phạm vi: chỉ sửa đâu
- Nghiệm thu: làm sao biết đã sửa xong

Hầu hết phản mẫu Prompt không phải vì «diễn đạt kém», mà vì đã cắt mất ranh giới then chốt và điều kiện nghiệm thu.

Có thể thay từ mơ hồ bằng cấu trúc: mục tiêu + ràng buộc + nghiệm thu.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ tóm tắt phản mẫu Prompt thường gặp; liên kết nội bộ và cách diễn đạt ví dụ đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
