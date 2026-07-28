---
title: Diff, bình luận và rà soát
description: Đọc thay đổi và để lại ý kiến rà soát.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


## Quy trình rà soát

1. Mở view diff, duyệt theo tệp
2. Xác nhận thay đổi nằm trong phạm vi đã ước định
3. Hỏi thêm hoặc bình luận chỗ đáng ngờ (nếu UI hỗ trợ)
4. Chấp nhận, từ chối hoặc yêu cầu sửa

Phương pháp: [Rà soát diff](/guide/quality/review-diffs/)

## Nội dung

Trong ứng dụng Desktop, thay đổi chủ yếu xem ở view diff, không phải ở vùng hội thoại.

Vùng chat là «lời nó nói»; view diff là «thực tế đã xảy ra gì».

## Hiểu nhầm thường gặp

### 1. Bình luận chỉ hữu ích khi cộng tác nhóm?

Dù dùng một mình, bình luận hoặc hỏi thêm vẫn hữu ích — ít nhất hỏi rõ «vì sao chỗ này lại sửa».

### 2. Tôi chưa chắc nó sửa sai — làm sao?

Không cần kết luận ngay. Chỉ ra điểm đáng ngờ rồi để nó giải thích ổn hơn tự đoán cứng.

### 3. Trước khi chấp nhận, tối thiểu xem gì?

Ít nhất xem ba việc:

- Đã sửa những tệp nào
- Có vượt phạm vi cho phép không
- Có xóa hoặc phần dư rõ ràng không nên xuất hiện không

### 4. Tôi không phải reviewer chuyên nghiệp — liệu có thấy được vấn đề?

Có thể bắt đầu với vài câu hỏi trực tiếp nhất:

- Nó có sửa chỗ không nên sửa không
- Nó có xóa thứ trông vẫn quan trọng không
- Nó nói đã làm A — trong diff có thật chỉ có A không

## Thứ tự rà soát

Nếu mỗi lần thấy diff hơi rối, hãy cố định thứ tự này:

1. Xem đã sửa bao nhiêu tệp
2. Xem thay đổi mỗi tệp có liên quan tác vụ không
3. Xem có sửa vượt phạm vi không
4. Cuối cùng mới xem chi tiết diễn đạt, định dạng và triển khai cục bộ

Như vậy ít bị cuốn theo chỉnh sửa nhỏ ngay từ đầu.

## Bình luận nên viết gì cho đáng

Khi viết bình luận cũng không cần cầu toàn. Đáng giá hơn là các loại:

- «Chỗ này vì sao phải sửa?»
- «Khối này có vượt phạm vi lần này không?»
- «Chỗ này trông có thể ảnh hưởng hành vi cũ — giải thích thêm được không?»
- «Đoạn này bổ sung cách kiểm chứng được không?»

Loại bình luận này dễ đẩy bước sửa tiếp theo hơn chỉ nói «có vấn đề».

Trên trang này, thứ thật sự đáng xem đi xem lại vẫn là view diff.


---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App  
**Ghi chú tái kiểm:** Trang này xoay quanh trải nghiệm UI hiện tại của view diff, lối vào bình luận và chấp nhận/từ chối thay đổi trong Desktop App, nhưng thiếu tài liệu chính thức hiện hành đủ mạnh để xác nhận từng giao diện và luồng thao tác; trước khi bổ sung tài liệu rà soát desktop phiên bản mới nên gắn `outdated`.  
**Kiểm chứng gần nhất:** 2026-07-26
