---
title: Mẫu hiểu
description: Lập nhận thức chung trước khi thay đổi.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Mẫu hiểu

Nhiều tác vụ kẹt vì chưa lập được hiểu biết chung tối thiểu.

Mẫu hiểu phù hợp tác vụ «hiểu trước, rồi mới quyết bước tiếp».

## Mẫu

```text
Mục tiêu: Hiểu 【chủ đề/mô-đun/vùng codebase】, chuẩn bị cho 【triển khai/sửa/review】 sau này.
Bối cảnh: 【loại dự án, tech stack, issue liên quan】
Đầu vào: 【@đường dẫn tệp, liên kết tài liệu, ảnh chụp】
Ràng buộc: Chỉ phân tích chỉ-đọc; không sửa bất kỳ tệp nào; không chạy lệnh phá hủy.
Đầu ra:
1. Dùng 5–8 mục giải thích khái niệm cốt lõi hoặc trách nhiệm mô-đun
2. Đánh dấu 3 tệp/thư mục liên quan nhất tới 【mục tiêu】 và lý do
3. Liệt kê 3 câu hỏi còn cần xác nhận
Nghiệm thu: Tôi có thể dựa trên đầu ra để quyết phạm vi tác vụ tiếp theo.
```

## Khi nào phù hợp mẫu này

- Mới nhận codebase
- Xem một mô-đun lạ
- Trước khi sửa, muốn nắm phạm vi liên quan

## Hiểu lầm thường gặp

### 1. Tác vụ hiểu không chỉ là «để nó tóm tắt»

Còn cần nó chỉ ra:

- Những tệp nào liên quan nhất
- Chỗ nào vẫn chưa rõ
- Bước tiếp nên bắt đầu từ đâu

### 2. Giai đoạn hiểu không phải càng chi tiết càng tốt

Làm rõ mạch chính trước quan trọng hơn đào hết mọi chi tiết một lần.

Giá trị của mẫu hiểu là giúp bạn thu hẹp phạm vi tác vụ tiếp theo trước.

## Liên quan

- [Khám phá—Kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/)
- [Case hiểu codebase](/cases/understand-a-codebase/)


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này cung cấp mẫu tác vụ kiểu hiểu; liên kết nội bộ và cấu trúc mẫu đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
