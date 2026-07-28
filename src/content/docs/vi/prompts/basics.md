---
title: Cơ bản về Prompt
description: Các thành phần cơ bản của một Prompt tốt.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Khi mới học Prompt, dễ tập trung vào việc câu chữ có nghe «nâng cao» hay không.  
Với Codex, điều quan trọng vẫn là đã nói rõ những điểm sau chưa:

- Bạn thực sự muốn nó làm gì
- Được chạm đến đâu, không được chạm đến đâu
- Thế nào là xong
- Khi không chắc: hỏi trước, tra cứu trước, hay dừng trước

Trọng tâm của Prompt tốt là làm rõ ranh giới tác vụ; không cần viết như thần chú.

## Nội dung

Nó chủ yếu giúp bạn tránh các vấn đề thường gặp:

- Mục tiêu quá mơ hồ, kết quả chỉ còn «tối ưu một chút»
- Không nêu phạm vi, Codex sửa nhiều hơn ý bạn
- Không nêu nghiệm thu, cuối cùng chỉ đánh giá theo cảm giác
- Thiếu hướng dẫn khi thông tin thiếu, nên nó bắt đầu đoán

## Có thể nhìn Prompt như thế nào

Hãy xem Prompt như một phiếu tác vụ.  
Một phiếu đạt yêu cầu ít nhất phải trả lời:

- Làm gì
- Vì sao
- Dùng nguyên liệu gì
- Không được đụng gì
- Làm đến mức nào thì đạt

Nếu những điểm này chưa rõ, câu chữ hay đến mấy cũng không cứu được.

## Ba cấp độ viết (kho ví dụ cũng dùng chung)

- **Bản tối giản**: dùng khi mục tiêu đã rất rõ
- **Bản khuyến nghị**: gồm mục tiêu, bối cảnh, đầu vào, ràng buộc, nghiệm thu, quyền
- **Bản giảng dạy**: giải thích vì sao mỗi đoạn tồn tại

## Hiểu lầm thường gặp

### 1. Prompt càng dài càng tốt

Điều quan trọng là liên quan.  
Một đoạn bối cảnh không liên quan dài dễ làm loãng ranh giới thật sự quan trọng.

### 2. Chỉ cần nêu mục tiêu, phần còn lại có thể bỏ

Chỉ viết mục tiêu dễ bỏ sót:

- Phạm vi thay đổi
- Ràng buộc phong cách
- Cách nghiệm thu
- Làm gì khi không chắc

### 3. Prompt chủ yếu là «dạy mô hình cách nghĩ»

Với người mới, cách hiểu thực tế hơn: Prompt là để giảm hiểu nhầm.

## Một khung tối thiểu đủ dùng

Nếu chưa muốn học nhiều cùng lúc, hãy bắt đầu với 4 câu này:

```text
Mục tiêu: Tôi muốn bạn làm gì
Phạm vi: Bạn chỉ được sửa chỗ nào
Nghiệm thu: Làm đến mức nào thì hoàn thành
Khi không chắc: Hỏi trước, đừng đoán
```

Đã rõ hơn nhiều so với một câu «giúp tôi tối ưu».

## Khi nào dùng bản tối giản, khi nào dùng bản đầy đủ

### Bản tối giản phù hợp khi

- Sửa nhỏ trong một tệp
- Mục tiêu rất cụ thể
- Bạn quen kho và tác vụ hiện tại

### Bản khuyến nghị ổn định hơn khi

- Xuyên nhiều tệp
- Bạn chưa quen dự án
- Rủi ro cao hơn
- Cần phê duyệt, kiểm thử hoặc rà soát

Với hầu hết người mới, luyện từ **bản khuyến nghị** thường ổn định hơn.

Cốt lõi của Prompt tốt là giảm đoán, lệch hướng và vượt ranh giới.

Ví dụ xem [Chạy tác vụ đầu tiên](/cases/first-task/) và [Cấu trúc tác vụ tốt](/prompts/task-anatomy/).


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ đề cập phương pháp Prompt chung; liên kết nội bộ đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
