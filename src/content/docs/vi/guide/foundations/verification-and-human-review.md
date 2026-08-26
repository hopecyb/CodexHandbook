---
title: Kiểm chứng và rà soát thủ công
description: Vì sao kết quả phải kiểm tra được, và cách rà soát lại.
locale: vi
source_locale: zh-CN
source_revision: 19de747
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 110
---

Codex có thể giúp bạn tăng tốc, nhưng không thể thay bạn chịu trách nhiệm xác nhận cuối cùng.

Codex tăng tốc độ, nhưng **không miễn nghiệm thu**. Ít nhất phải rà lại các mục sau:

1. Đọc [Diff](/vi/guide/quality/review-diffs/): đã sửa tệp nào, có vượt phạm vi không
2. Kiểm tra theo tiêu chí hoàn thành bạn đã định
3. Chạy được kiểm thử thì chạy: [Chạy kiểm thử](/vi/guide/quality/run-tests/)
4. Sự thật đưa ra ngoài phải kiểm nguồn: [Kiểm chứng nguồn](/vi/guide/quality/validate-sources/)

## Rà soát thủ công thực sự đang xem gì

«Rà soát thủ công» không phải bắt bạn làm lại hết mọi thứ. Đứng ở góc người chịu trách nhiệm giao hàng, xác nhận vài việc sau là đủ:

- Nó có sửa đúng không
- Nó có sửa thừa không
- Nó có bỏ sót điều kiện then chốt không
- Kết quả này bạn có dám thật sự giao đi không

## Hiểu nhầm thường gặp

### 1. Chỉ cần kết quả trông có vẻ ổn là thu việc được?

«Trông rất giống đúng» thường nghĩa là:

- Copy đọc xuôi, nhưng sự thật chưa chắc đúng
- Trang trông bình thường, nhưng quy trình then chốt chưa thử
- Mã chạy được, nhưng điều kiện biên chưa kiểm

### 2. Rà soát thủ công có nghĩa AI không có giá trị?

AI chịu trách nhiệm tăng tốc; bạn chịu trách nhiệm đặt tiêu chuẩn và gác cổng cuối cùng.

### 3. Chỉ tác vụ mã mới cần rà soát?

Các mục sau cũng cần rà soát như nhau:

- Kết luận nghiên cứu
- Nội dung tài liệu
- Bảng biểu và tổng hợp
- Tài liệu thuyết trình
- Cấu hình và script

## Khi rà soát xem các bước này

Nếu thời gian có hạn, có thể theo thứ tự này:

1. Xem phạm vi có vượt không
2. Xem kết quả có thỏa thứ bạn vốn cần không
3. Cái gì tự động kiểm chứng được thì ưu tiên tự động
4. Bước then chốt còn lại, qua thêm một lần bằng góc nhìn người

Vai trò của rà soát thủ công là để lần gật đầu cuối cùng thuộc về người thật sự chịu trách nhiệm về kết quả.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ giải thích vì sao kết quả cần kiểm chứng và rà soát thủ công; liên kết nội bộ, thứ tự bước và cách diễn đạt khái niệm đã được rà lại, và nội dung không phụ thuộc vào chi tiết sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
