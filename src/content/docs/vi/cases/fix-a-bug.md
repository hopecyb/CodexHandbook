---
title: Sửa Bug
description: Từ test thất bại đến sửa tối thiểu và hồi quy — vòng lặp phổ biến nhất của nhà phát triển.
locale: vi
source_locale: zh-CN
source_revision: 27c707b
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Đây là trang vào ngắn. Các bước đầy đủ, mã có thể chạy, bằng chứng test đỏ/xanh và prompt theo từng giai đoạn được duy trì tập trung trong [Sửa bug có kiểm chứng](/vi/cases/use-cases/software-development/fix-a-bug-with-verification/) để hai trang không lệch nhau theo thời gian.

## Xác định bước còn thiếu

| Tình huống hiện tại | Bắt đầu tại đây |
|---|---|
| Bạn chỉ biết kết quả sai, chưa có cách tái hiện ổn định | [Chẩn đoán trước khi sửa](/vi/cases/workflows/diagnose-before-fixing/) |
| Đã có một test thất bại ổn định | [Sửa bug có kiểm chứng](/vi/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| Bạn chưa quen module liên quan | [Hiểu codebase](/vi/cases/understand-a-codebase/) |
| Bản sửa đã xong và chuẩn bị merge | [Review PR](/vi/cases/review-a-pr/) |
| Chính test không ổn định | Đọc [Chạy test](/vi/guide/quality/run-tests/) trước; flaky test không phải bằng chứng sửa lỗi |

## Vòng bằng chứng tối thiểu

Trong bất kỳ ngôn ngữ hay framework nào, hãy giữ chuỗi bằng chứng này:

1. Tái hiện lỗi gốc một cách ổn định bằng một lệnh rõ ràng.
2. Lưu assertion thất bại, output lỗi và điều kiện đầu vào.
3. Giải thích nguyên nhân gốc trước khi thực hiện bản sửa nhỏ nhất.
4. Làm cho test thất bại ban đầu và các test biên mới đều pass.
5. Chạy các kiểm tra hồi quy rộng hơn.
6. Đọc diff thủ công và loại bỏ thay đổi không liên quan.

Chỉ có bước 4 mà thiếu bước 1 thì chưa chứng minh được test thật sự bao phủ lỗi gốc. Toàn bộ test xanh nhưng không review diff cũng chưa chứng minh được phạm vi thay đổi là đúng.

## Thực hành trực tiếp

Kho có sẵn ví dụ giảm giá giỏ hàng bằng JavaScript, không phụ thuộc gói bên thứ ba:

```bash
# Mã khởi đầu: dự kiến có 1 test thất bại
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# Lời giải tham chiếu: dự kiến cả 3 test đều pass
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Tài liệu đầy đủ nằm trong [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix).

---

**Trạng thái:** verified
**Áp dụng cho:** CLI / IDE
**Căn cứ kiểm chứng:** Trang vào này chỉ duy trì phần chọn đường dẫn và vòng kỹ thuật ổn định. Các lệnh dự kiến thất bại và pass đã được chạy trong kho hiện tại.
**Kiểm chứng gần nhất:** 2026-08-25
