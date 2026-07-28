---
title: Chạy kiểm thử
description: Đưa bước kiểm chứng trở thành một phần của tác vụ.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Sau khi sửa xong, cần có cách nào đó để xác nhận nó không bị hỏng rõ ràng.

“Bằng chứng” này có thể là kiểm thử tự động, build thành công, hoặc một nhóm bước kiểm tra thủ công rõ ràng.

## Kiểm thử đang trả lời gì

Kiểm thử chủ yếu trả lời một câu hỏi rất thực tế:

> **Bạn biết thế nào rằng lần thay đổi này không vô tình làm hỏng thứ khác?**

Nếu không có hành động kiểm chứng, kết quả cuối cùng thường chỉ là “trông cũng ổn”.

Hãy ghi rõ lệnh kiểm thử trong tiêu chí nghiệm thu của Prompt. Nếu kho không có kiểm thử, ít nhất yêu cầu: lệnh khởi động/build thành công, hoặc đưa ra bước kiểm tra thủ công.

“Hoàn thành” mà không có kiểm chứng, nhiều khi chỉ là phán đoán chủ quan.

## Hiểu lầm thường gặp

### 1. Không chỉ lập trình viên mới cần quan tâm kiểm chứng

Dù bạn chủ yếu sửa tài liệu, trang, cấu hình hay nội dung, vẫn cần cách kiểm chứng tương ứng.

### 2. Kho không có kiểm thử vẫn phải nghiệm thu

Khi không có kiểm thử tự động, ít nhất bổ sung một trong các cách:

- Build thành công
- Khởi động thành công
- Bước kiểm tra thủ công rõ ràng

### 3. “Sửa rất nhỏ” cũng không mặc định bỏ qua kiểm chứng

Thay đổi nhỏ vẫn có thể gây tác dụng phụ, nhất là khi bạn chưa quen dự án.

## Thứ tự kiểm chứng

Nếu chưa biết bắt đầu từ đâu, có thể theo thứ tự này:

1. Có kiểm thử liên quan thì chạy kiểm thử liên quan trước
2. Không có kiểm thử thì chạy build hoặc khởi động
3. Vẫn chưa đủ thì bổ sung bước kiểm tra thủ công tối thiểu

Trọng tâm là tránh giao hàng mà hoàn toàn không kiểm chứng, chứ không phải phủ sóng hết mọi thứ trong một lần.

## Một câu có thể đưa thẳng vào Prompt

Trong tác vụ đầu tiên, có thể bổ sung luôn:

```text
Sau khi xong, hãy chạy kiểm chứng liên quan; nếu không có kiểm thử tự động, hãy cho tôi biết bước kiểm tra thủ công tối thiểu.
```

Như vậy, dù kho kiểm thử chưa đầy đủ, cũng không bỏ qua hoàn toàn việc kiểm chứng.

## Khi cần thì bổ sung thêm một câu

Cũng có thể thêm:

```text
Hãy cho tôi biết bạn thực sự đã chạy những kiểm chứng nào; nếu không chạy được, hãy nói rõ lý do, đừng mặc định coi là đạt.
```

Kiểm chứng có thể rất nhẹ, nhưng không được thiếu; nếu không, “làm xong” khó đứng vững.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ giải thích vì sao bước kiểm chứng phải vào nghiệm thu tác vụ; câu mẫu và thứ tự kiểm tra đã được rà lại, và phần thân không phụ thuộc sự kiện sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
