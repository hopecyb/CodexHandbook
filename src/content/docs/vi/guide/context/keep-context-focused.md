---
title: Giữ ngữ cảnh tập trung
description: Kiểm soát phạm vi, mở thread mới và bàn giao.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nhiều tác vụ càng chat càng rối — nguyên nhân thường là ngữ cảnh đã tản.

Tập trung ngữ cảnh nghĩa là mỗi lần chỉ xử lý một mục tiêu rõ, đừng để vấn đề cũ và vấn đề mới trộn với nhau.

## Vì sao càng chat càng rối

«Nói thêm một chút cho chắc» thường không đúng — ngữ cảnh không thể chất mãi vào.

Với Codex, nếu một tác vụ nhồi cùng lúc:

- Vấn đề gốc
- Vấn đề mới làm tiện tay
- Ý tưởng nảy giữa đường
- Chi tiết đã thảo luận trước nhưng giờ không quan trọng

Kết quả thường gặp là trọng tâm mờ đi.

## Vì sao tác vụ càng làm càng lệch

Nguyên nhân thường gặp:

- Một hội thoại nhồi nhiều mục tiêu
- Ràng buộc nói trước, sau tự cũng quên
- Vấn đề đã giải xong vẫn chiếm chú ý lặp lại
- Giữa đường xen nhu cầu mới mà chưa thu hẹp lại

Kết quả thường là bạn nghĩ mình đang bổ sung thông tin, còn Codex thấy trọng tâm ngày càng tản.

## Cách làm cơ bản

- Một tác vụ một mục tiêu
- Định kỳ tóm tắt «đã xong / chưa xong / ràng buộc còn hiệu lực»
- Tác vụ dài dùng cổng giai đoạn
- Xuyên phiên dùng [Bàn giao và khôi phục](/guide/agent-work/handoff-and-resume/)

## Thấy các tín hiệu này thì nên thu hẹp

Nếu xuất hiện các tình huống sau, hãy chủ động thu hẹp:

- Chính bạn phải lật hội thoại trước mới biết đang làm tới đâu
- Trong cùng tác vụ đã bắt đầu thảo luận vấn đề thứ hai
- Bạn thấy «tiện tay làm thêm một cái» ngày càng nhiều
- Nó bắt đầu trích kết luận cũ không còn quan trọng

## Các cách này lần lượt giải quyết gì

### Một tác vụ một mục tiêu

Đừng trong cùng tác vụ yêu cầu cùng lúc:

- Sửa bug
- Đổi copy
- Refactor tiện tay
- Rồi giúp tôi xem thêm một vấn đề mới

Tách ra thì phạm vi rõ hơn, cũng dễ kiểm hơn.

### Định kỳ tóm tắt «đã xong / chưa xong / ràng buộc còn hiệu lực»

Đây như căn chỉnh giữa chừng cho tác vụ. Tác vụ vừa dài, bước này ngăn cả hai bên quên đang làm tới đâu.

### Tác vụ dài dùng cổng giai đoạn

«Cổng giai đoạn» nghĩa là làm xong một đoạn nhỏ, xác nhận chưa lệch, rồi mới vào đoạn tiếp.

Ví dụ trước «chỉ định vị vấn đề», rồi «chỉ đề xuất phương án», cuối «mới thực thi sửa».

### Xuyên phiên dùng bàn giao

Nếu tác vụ không thể xong một lần, dùng bàn giao ngắn để để lại trạng thái then chốt.

## Cách viết thu hẹp dùng ngay

Khi thu hẹp giữa chừng, có thể viết:

```text
Chúng ta thu hẹp một chút trước.
Đã xong: A.
Chưa xong: B.
Ràng buộc còn hiệu lực: chỉ sửa frontend, không sửa API; đừng cài phụ thuộc mới.
Bước tiếp theo chỉ làm: C.
```

## Hiểu nhầm thường gặp

### 1. Muốn nói hết mọi nhu cầu một lần — kết quả không phân chính phụ

Thông tin nhiều không bằng thông tin rõ. Nếu tác vụ chính và tác vụ tiện tay chưa tách, Codex dễ trộn.

### 2. Tác vụ đã đổi nhưng vẫn nối hội thoại cũ

Nếu hướng đã đổi, đôi khi cố chat tiếp không sạch bằng mở thread mới.

### 3. Không xác nhận giai đoạn — sửa một hơi quá nhiều

Sửa càng nhiều, sau càng khó phán bước nào bắt đầu lệch.

Tập trung ngữ cảnh không phải nói ít, mà giữ thông tin còn hiệu lực, kịp thu phần đã không quan trọng. Ngữ cảnh vừa rối, thực thi sau dễ lệch.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ nêu cách thu hẹp và giữ ngữ cảnh tập trung; khái niệm, cách viết cổng giai đoạn và liên kết trong site đã kiểm lại, và phần thân không phụ thuộc sự thật sản phẩm dễ đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
