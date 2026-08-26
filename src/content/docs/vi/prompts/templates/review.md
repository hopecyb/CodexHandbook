---
title: Mẫu review
description: Review có cấu trúc về diff và rủi ro thay đổi.
locale: vi
source_locale: zh-CN
source_revision: 0c747c3
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Mẫu review

Chỗ dễ lệch nhất của tác vụ review là ngay từ đầu biến thành «tiện tay sửa giúp bạn».

Tìm vấn đề trước, rồi mới quyết có sửa hay không—ổn định hơn.

## Mẫu

```text
Hãy review diff hiện tại so với 【main/nhánh mục tiêu】; chưa sửa code.
Chiều:
1. Có vượt phạm vi 【issue/đặc tả】 không
2. Lỗi logic, biên, xử lý lỗi
3. Bảo mật (khóa bí mật, injection, quyền)
4. Kiểm thử và tài liệu có khớp thay đổi không
Xuất danh sách phân cấp: 🔴 Chặn / 🟡 Đề xuất / 🟢 Đạt; mỗi mục kèm tệp và số dòng.
```

## Khi nào phù hợp mẫu này

- Review PR
- Review diff
- Review rủi ro một vòng thay đổi tài liệu hoặc cấu hình

## Hiểu lầm thường gặp

### 1. Review là để nó góp vài ý kiến

Chính xác hơn: để nó tìm vấn đề theo cấu trúc.

### 2. Không có bug rõ là đạt

Review còn nên xem:

- Có vượt phạm vi không
- Kiểm thử và tài liệu có theo kịp không
- Có vấn đề bảo mật và biên không

Trọng tâm mẫu review là lật rủi ro theo chiều cố định—không phải đánh giá chung «hay hay dở».

## Liên quan

- [Review trước khi merge](/vi/cases/workflows/review-before-merge/)
- [Case review PR](/vi/cases/review-a-pr/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này cung cấp mẫu tác vụ kiểu review; liên kết nội bộ và cấu trúc mẫu đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
