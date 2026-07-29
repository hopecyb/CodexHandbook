---
title: Câu hỏi thường gặp
description: Câu hỏi tần suất cao khi bắt đầu và dùng hàng ngày.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Khi có câu hỏi rời, có thể lật FAQ trước. Ở đây không triển khai hệ thống đầy đủ; chủ yếu giúp bạn nhanh tìm bước tiếp nên xem đâu.

## Khi nào xem

Gặp các tình huống sau có thể lật FAQ trước:

- Nhiều trang, không biết bước tiếp xem đâu
- Một vấn đề kẹt nhưng chưa đáng lật cả chương
- Muốn có phán đoán hướng trước

**H: Mới bắt đầu nên dùng client nào?**  
Đ: App máy tính. Xem [Chọn client](/guide/getting-started/choose-your-codex-client/).

**H: Có thể bỏ kiểm tra và chấp nhận mọi thay đổi một lúc không?**  
Đ: Tốt nhất không. Xem [Kiểm chứng và review của người](/guide/foundations/verification-and-human-review/).

**H: Prompt có mẫu chuẩn không?**  
Đ: Có khung, không có phép màu. Xem [Cấu trúc Tác vụ tốt](/prompts/task-anatomy/).

**H: Sổ tay xung đột tài liệu chính thức thì sao?**  
Đ: Lấy chính thức làm chuẩn: [https://developers.openai.com/codex](https://developers.openai.com/codex), và chào đón mở issue.

**H: AGENTS.md, Skill, MCP khác nhau thế nào?**  
Đ: Xem [Bản đồ năng lực mở rộng](/skills/capability-map/) và [Cách chọn phương thức mở rộng](/skills/choosing-an-extension-method/).

**H: Có quy trình chuẩn khuyến nghị không?**  
Đ: Mặc định dùng [Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/).

**H: Cloud nối GitHub, mở PR thế nào?**  
Đ: Xem [Kết nối GitHub](/guide/web-and-cloud/connect-github/) và [Tạo Pull Request](/guide/web-and-cloud/create-pull-requests/).

**H: CLI đưa vào CI được không?**  
Đ: Được; bắt đầu từ [chế độ không tương tác](/guide/cli/non-interactive-mode/), và thiết kế phê duyệt cùng quyền.

**H: Có những lệnh gạch chéo nào?**  
Đ: Lấy theo autocomplete `/` của client; giải thích hướng học xem [Tra cứu lệnh gạch chéo](/guide/reference/slash-commands/).

**H: Lộ trình đầy đủ người sáng tạo/nhà phát triển/đội đâu?**  
Đ: Lộ trình nhập môn đã viết; case sâu xem [Case tình huống](/cases/use-cases/), quản trị đội xem lộ trình M6 `11-team-enterprise`.

## Hiểu nhầm thường gặp

### 1. FAQ xem cũng được, không xem cũng được?

Với người mới, nó thường là điểm bắt đầu khá nhanh.

### 2. Câu trả lời trong FAQ đủ để thao tác trực tiếp chưa?

FAQ chủ yếu làm hai việc:

- Đưa phán đoán hướng trước
- Rồi đưa bạn tới trang đầy đủ hơn

### 3. Câu hỏi của tôi không có ở đây nghĩa sổ tay không nói?

Đôi khi chỉ là câu hỏi đã phân tán tới:

- Trang chuyên đề tương ứng
- Trang lộ trình học
- Trang case thực chiến

## Cách dùng

Nếu kẹt mà chưa chắc nên tới trang nào, dùng như sau:

1. Lật FAQ trước
2. Tìm câu hỏi gần nhất
3. Theo liên kết vào chuyên đề tương ứng

Thường đỡ tốn sức hơn lật qua lại thanh bên.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Đã đối chiếu chéo từng mục với các lối vào chọn client, quy trình, phương thức mở rộng, quy trình GitHub Cloud và lệnh gạch chéo đã kiểm chứng trong sổ tay; trang chỉ là điều hướng câu hỏi tần suất cao, không tuyên bố riêng giá trị mặc định sản phẩm dễ đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
