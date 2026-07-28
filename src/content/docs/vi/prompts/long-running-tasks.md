---
title: Prompt cho tác vụ dài
description: Tách giai đoạn, checkpoint và thông tin bàn giao.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Tác vụ dài thường thất bại theo các cách này:

- Làm quá nhiều một mạch
- Giữa chừng không có checkpoint
- Thread càng dài, ràng buộc trước sau bắt đầu xung đột

Trọng tâm của tác vụ dài không phải viết Prompt dài hơn, mà là tách tác vụ thành chuỗi giai đoạn nhỏ có checkpoint.

Tách tác vụ dài thành giai đoạn; mỗi giai đoạn có nghiệm thu:

```text
Giai đoạn 1: Chỉ khảo sát và liệt kê phương án (không sửa code)
Giai đoạn 2: Triển khai thay đổi tối thiểu
Giai đoạn 3: Bổ sung kiểm thử và chạy……
Mỗi giai đoạn xong thì dừng, chờ tôi xác nhận.
```

## Vì sao tác vụ dài dễ lệch hướng

Vì thường chứa cùng lúc nhiều loại việc:

- Hiểu vấn đề
- Thiết kế phương án
- Triển khai thay đổi
- Chạy kiểm chứng
- Viết mô tả bàn giao

Nếu trộn hết vào một lần «làm xong luôn», rủi ro tăng rõ.

## Hiểu lầm thường gặp

### 1. Tác vụ dài không chỉ là viết chi tiết hơn tác vụ ngắn

Tác vụ dài cần **quản lý theo đoạn**, không chỉ viết thêm bối cảnh.

### 2. Chỉ liệt kê giai đoạn vẫn chưa đủ

Mỗi giai đoạn nên có lối thoát rõ, ví dụ:

- Chỉ xuất phương án, không sửa code
- Chỉ làm triển khai tối thiểu
- Chỉ bổ sung kiểm thử và kiểm chứng

### 3. Một Thread kéo dài đến cùng chưa chắc tốt hơn

Khi tác vụ quá dài, bàn giao, tóm tắt, mở Thread mới rồi tiếp thường rõ hơn.

## Một cách tách đoạn đủ dùng

Với tác vụ dài, có thể tách theo 4 đoạn này trước:

1. Khảo sát: hiểu vấn đề, chưa làm
2. Kế hoạch: liệt kê bước, rủi ro, kiểm chứng
3. Thực thi: làm thay đổi tối thiểu
4. Kiểm chứng: chạy kiểm tra, viết kết luận, chuẩn bị bàn giao

## Cách viết thực dụng hơn

```text
Giai đoạn 1: Khảo sát và liệt kê phương án trước; không sửa code; chờ tôi xác nhận
Giai đoạn 2: Chỉ làm thay đổi tối thiểu; xong thì báo phạm vi ảnh hưởng
Giai đoạn 3: Bổ sung kiểm chứng và chạy kiểm tra liên quan
Giai đoạn 4: Tóm tắt thay đổi, rủi ro và đề xuất tiếp theo
```

Cách phù hợp hơn là mỗi đoạn có thể dừng để kiểm, chứ không làm một mạch đến hết.

Kết hợp: [Tiến độ và điều hướng](/guide/agent-work/progress-and-steering/) · [Bàn giao và phục hồi](/guide/agent-work/handoff-and-resume/)


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ mô tả cách tách tác vụ dài và bàn giao; liên kết nội bộ và ví dụ giai đoạn đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
