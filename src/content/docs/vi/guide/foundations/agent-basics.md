---
title: Cơ bản về Agent
description: Giải thích Agent gọi công cụ quanh mục tiêu và lặp để tiến tới như thế nào.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


**Agent** sẽ liên tục làm quanh mục tiêu: hiểu mục tiêu → chọn công cụ → quan sát kết quả → điều chỉnh bước tiếp theo, cho đến khi hoàn thành hoặc cần bạn can thiệp.

AI thông thường giống người trả lời câu hỏi; Agent giống người nhận việc rồi làm từng bước.

## Khác biệt giữa Agent và chat thông thường

| | Chat thông thường | Agent |
|---|---|---|
| Đầu ra | Chủ yếu lời khuyên bằng chữ | Có thể đọc/ghi tệp, chạy lệnh, sửa kho mã |
| Quá trình | Một lần phản hồi | Nhiều lần gọi công cụ |
| Rủi ro | Lời khuyên gây hiểu nhầm | Còn có thể làm hỏng tệp hoặc chạy lệnh nguy hiểm |
| Vai trò của bạn | Đọc | Đặt ranh giới, phê duyệt, nghiệm thu |

## Một phép so sánh trực quan

Có thể đối chiếu như sau:

- **Chat thông thường**: như hỏi bạn «bài này làm thế nào»
- **Agent**: như nhờ đồng nghiệp làm một bản trước, xong rồi cùng kiểm tra

Vì vậy ở chế độ Agent, bạn cần quan tâm hơn tới:

- Nó có thể truy cập gì
- Nó có cần đưa kế hoạch trước không
- Xong việc bạn nghiệm thu thế nào

## Vì sao cần phân biệt rõ khác biệt này

Nhiều lần dùng sai đến từ cùng một hiểu nhầm:

> Cứ tưởng nó chỉ «nói thôi»

Một khi nó bắt đầu đọc tệp, sửa tệp, chạy lệnh — nó không còn chỉ là lời khuyên trong cửa sổ chat, mà đang tham gia công việc thực tế.

Khi mới dùng, nên đọc đồng thời:

1. [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/)
2. [Chạy tác vụ đầu tiên](/guide/getting-started/run-your-first-task/)
3. [Kiểm tra kết quả](/guide/getting-started/review-the-result/)

## Khái niệm liên quan

- Skill / Plugin / MCP: mở rộng «làm được gì» và «kết nối tới đâu» — xem [Mở rộng và tự động hóa](/skills/) cùng [Bản đồ năng lực](/guide/start-here/codex-capability-map/)
- Phê duyệt thủ công: xem [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/)

Đặc điểm của Agent là nó có thể liên tục làm vài bước quanh mục tiêu — không chỉ trả bạn một đoạn chữ.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ giải thích khác biệt cộng tác giữa Agent và chat thông thường; liên kết nội bộ cùng cách diễn đạt khái niệm và phép so sánh đã được rà lại, và nội dung không phụ thuộc vào chi tiết sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
