---
title: Hooks
description: Thêm kiểm tra, nhật ký và chặn tại điểm thực thi cố định — khi nào nên chặn, khi nào nên ghi.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Hook là tự động chèn một lớp kiểm tra hoặc ghi nhận tại một thời điểm cố định.

Nó xử lý kiểm tra, ghi nhận và chặn tại nút quy trình — không chịu trách nhiệm định nghĩa Tác vụ bản thân làm thế nào.

## Nội dung

Nhóm này chủ yếu trả lời 3 câu hỏi:

- Rốt cuộc nên kích hoạt Hook khi nào
- Bạn muốn ngăn vấn đề xảy ra, hay chỉ ghi nhận
- Lần đầu cấu hình Hook, bắt đầu từ cách rủi ro thấp thế nào

## Thứ tự đọc

1. [Tổng quan Hooks](/skills/hooks/hooks-overview/): trước hết phân biệt Hook khác Skill, MCP
2. [Loại sự kiện Hook](/skills/hooks/hook-event-types/): biết nên gắn trước, sau, hay đầu/cuối phiên
3. [Ví dụ cấu hình Hook](/skills/hooks/hooks-examples/): xem ba cách viết thường gặp"chỉ ghi / chặn trước / kiểm tra đầu vào nhẹ"

## Thứ tự cấu hình

Không nên ngay từ đầu lên chiến lược chặn nghiêm nhất. Thứ tự phù hợp hơn:

1. Làm `log` trước
2. Rồi `warn`
3. Rồi `block`

Như vậy dễ hơn để kiểm trước:

- Sự kiện gắn đúng chưa
- Báo giả nhiều không
- Hiệu năng có kéo chậm dùng hàng ngày không

Hook có thể xem như một cổng nhỏ gắn trên nút quy trình — dùng để kiểm tra, ghi nhận hoặc chặn.

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI / App(tùy phiên bản)  
**Ghi chú tái Kiểm chứng:** Phạm vi hỗ trợ, mô hình sự kiện và lối vào cấu hình của Hooks phụ thuộc mạnh phiên bản client hiện tại; đến 2026-07-26, tài liệu công khai chính thức chưa đủ để chuẩn hóa ổn định nhóm này, tạm đánh `outdated`.  
**Kiểm chứng gần nhất:** 2026-07-26
