---
title: Chọn cơ chế phù hợp
description: Prompt tạm, AGENTS.md, bộ nhớ, Skill, MCP nên đặt tầng nào — một khung phán đoán nói rõ.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nhiều vấn đề nhóm thường là **đặt cùng một thông tin sai chỗ**: quy tắc đáng viết vào kho thì bỏ vào chat, quy trình đáng làm Skill thì nhét vào `AGENTS.md`, dữ liệu đáng nối chỉ đọc thì lại cấp MCP quyền cao.

Ở đây quan tâm hơn một câu hỏi thực tế:

> Khi bạn phát hiện “việc này sau này còn lặp lại”, nên hạ nó xuống tầng nào?

## Bảng ngắn

| Cơ chế | Phù hợp nhất đặt gì |
|---|---|
| Prompt một lần | Mục tiêu, ràng buộc, tiêu chuẩn nghiệm thu chỉ hiệu lực cho tác vụ lần này |
| `AGENTS.md` | Quy tắc cộng tác cấp kho và ràng buộc dài hạn |
| Bộ nhớ | Sở thích cá nhân hoặc ít sự kiện không nhạy cảm, lặp qua phiên |
| Skill | Quy trình tái sử dụng được, danh sách kiểm tra, lối chuyên biệt |
| MCP | Truy cập công cụ ngoài, nguồn dữ liệu và năng lực hệ thống |

Nếu bảng này chưa đủ, đọc tiếp bên dưới.

## Phương pháp phán đoán năm bước

### 1. Thông tin chỉ hiệu lực với tác vụ hiện tại

Loại thông tin này ưu tiên đặt trong **Prompt lần này**.

Phù hợp:

- “Lần này chỉ sửa `docs/`, đừng đụng mã”
- “Xuất tóm tắt tiếng Việt, cuối kèm một câu hỏi chờ xác nhận”
- “Phân tích nguyên nhân trước, đừng sửa tệp ngay”

Không phù hợp:

- Nhóm dài hạn đều yêu cầu `pnpm test`
- Kho cấm sửa thư mục
- Mỗi lần rà soát PR đều xuất theo cùng một mẫu

Loại quy tắc dài hạn này nên tiếp tục hạ xuống.

### 2. Đây là quy tắc cộng tác dự án, hay thói quen cá nhân?

Nếu là **quy tắc mọi cộng tác viên đều nên biết**, đưa vào [`AGENTS.md`](/guide/customization/agents-md/what-is-agents-md/).

Ví dụ:

- Lệnh kiểm thử, lint, build
- Thư mục nào không được đụng
- Thông điệp commit hoặc quy tắc nghiệm thu PR
- Quy chuẩn đặc biệt của thư mục con khác nhau trong monorepo

Nếu chỉ là **sở thích của bạn**, ví dụ “giải thích bằng tiếng Việt”, “đưa kết luận trước rồi mới chi tiết”, phù hợp hơn đưa vào [bộ nhớ](/guide/customization/memories-and-persistent-context/) hoặc cấu hình cá nhân.

Có thể phán đoán theo kinh nghiệm:

- Cần vào PR review thì ưu tiên vào kho
- Người khác không thấy cũng không sao mới cân nhắc tầng cá nhân

### 3. Đây là “quy tắc”, hay “bước”?

Nhiều tài liệu khó dùng vì trộn quy tắc và bước.

| Nếu nó thuộc… | Phù hợp hơn |
|---|---|
| “Đừng push thẳng lên main” | `AGENTS.md` |
| “Khi Review xem kiểm thử trước, rồi rủi ro, rồi hồi quy” | Skill |
| “Trước phát hành chạy 4 lệnh này” | Skill hoặc script |
| “Chỉ cho phép truy cập dữ liệu issue chỉ đọc” | MCP + cấu hình quyền |

Khi phán đoán nắm hai điểm này trước:

- **Quy tắc** trả lời “làm được gì, không được làm gì”
- **Bước** trả lời “loại việc này thường làm thế nào”

Bước tái sử dụng được thường phù hợp hơn làm [Skill](/skills/overview/).

## Tổ hợp thường gặp, không phải chọn một trong hai

Nhóm chín thường không chỉ dùng một cơ chế, mà tổ hợp.

### Tổ hợp 1: `AGENTS.md` + Skill

Phù hợp: rà soát mã, kiểm phát hành, xử lý sự cố.

Phân công:

- `AGENTS.md` viết ràng buộc cứng: không tự merge, phải chạy những kiểm nào
- Skill viết quy trình: rà thế nào, xuất theo mẫu nào, phân cấp vấn đề thế nào

### Tổ hợp 2: Skill + MCP

Phù hợp: đọc ticket, tra DB, kéo bản thiết kế, sinh báo tuần.

Phân công:

- Skill định nghĩa thứ tự thực thi và định dạng đầu ra
- MCP cung cấp “nối được đâu, tra được gì, sửa được gì”

Có thể xem tách:

> Skill như sổ hướng dẫn thao tác, MCP như hộp công cụ nối vào.

### Tổ hợp 3: `AGENTS.md` + bộ nhớ

Phù hợp: quy tắc nhóm ổn định, nhưng mỗi người thói diễn đạt khác.

Phân công:

- `AGENTS.md` viết quy chuẩn chung của nhóm
- Bộ nhớ giữ sở thích cá nhân, như ngôn ngữ, phong cách giải thích, cấu trúc đầu ra mặc định

Đừng làm ngược. Quy tắc nhóm không nên chỉ tồn tại trong bộ nhớ của một người.

## Một ma trận phán đoán thực dụng hơn

| Câu hỏi | Có | Không |
|---|---|---|
| Chỉ ảnh hưởng tác vụ hiện tại? | Prompt | Tiếp tục phán đoán |
| Mọi người đều nên tuân? | `AGENTS.md` / cấu hình dự án | Tiếp tục phán đoán |
| Là quy trình lặp được? | Skill | Tiếp tục phán đoán |
| Cần dữ liệu hoặc thao tác ngoài thời gian thực? | MCP | Tiếp tục phán đoán |
| Chỉ là sở thích dài hạn cá nhân? | Bộ nhớ / cấu hình người dùng | Prompt |

Khi một nhu cầu rơi đồng thời hai cột, thường nghĩa nên **tách tầng**, chứ không nhét cứng cùng một chỗ.

## Ba ví dụ điển hình

### Ví dụ 1: Nhóm hay quên chạy kiểm thử hồi quy

Đừng chỉ nói trong nhóm “nhớ chạy kiểm thử”.

Cách ổn hơn:

1. Trong `AGENTS.md` ghi rõ “liên quan thay đổi logic nghiệp vụ phải chạy `pnpm test`”
2. Nếu quy trình phức tạp, bổ sung thêm Skill thực thi kiểm thử
3. Trong CI làm lưới cuối

### Ví dụ 2: Mỗi lần PR review muốn Codex xuất theo cùng định dạng

Đừng mỗi lần dán cả đoạn mẫu.

Cách ổn hơn:

1. Làm cấu trúc đầu ra thành Skill
2. Trong `description` viết rõ “khi người dùng nói review, rà soát, kiểm trước merge thì dùng”
3. Nếu nhóm dùng thống nhất, đưa đường dẫn Skill vào tài liệu dự án

### Ví dụ 3: Cần đọc ticket Linear rồi sửa mã

Đừng dán API token vào hội thoại.

Cách ổn hơn:

1. Dùng MCP nối Linear
2. Mặc định quyền chỉ đọc
3. Nếu muốn thành quy trình cố định, dùng Skill quy định “đọc ticket trước, rồi xem mã, rồi đưa phương án”

## Hố dễ dẫm nhất

### Viết `AGENTS.md` thành bách khoa toàn thư

Kết quả ràng buộc cứng không nổi, lệnh và vùng cấm thật sự quan trọng bị nhấn chìm. `AGENTS.md` phù hợp hơn ngắn, cứng, thực thi được.

### Coi Skill là “hộp đựng vạn năng”

Một Skill vừa nhét review, phát hành, gỡ lỗi, viết báo ngày — cuối cùng vừa khó kích hoạt vừa khó duy trì.

### Coi MCP là câu trả lời mặc định

Thông tin đọc thẳng từ kho được thì không cần vì “cao cấp” mà nối thêm công cụ ngoài. MCP là mở rộng năng lực, không phải phần thưởng độ phức tạp.

### Để bộ nhớ mang sự kiện nhóm

Ai nhớ trên tài khoản người đó; người đó rời hoặc đổi máy thì quy tắc biến mất. Loại thông tin này nên quay về kho.

## Thứ tự triển khai khuyến nghị

Nếu nhóm giờ còn loạn, có thể hội tụ theo thứ tự:

1. Viết một `AGENTS.md` tối thiểu dùng được trước
2. Quy trình lặp từ ba lần trở lên hội tụ thành Skill
3. Chỉ khi thật sự cần hệ thống ngoài mới đưa MCP
4. Cuối cùng mới gom bộ nhớ và sở thích cá nhân

Như vậy dễ ổn định **đồng thuận cộng tác** trước, rồi dần mở năng lực.

## Đọc thêm

- [AGENTS.md là gì](/guide/customization/agents-md/what-is-agents-md/)
- [Bộ nhớ và ngữ cảnh bền](/guide/customization/memories-and-persistent-context/)
- [Tổng quan Skills](/skills/overview/)
- [Tổng quan MCP](/skills/mcp/mcp-overview/)
- [Chọn cách mở rộng](/skills/choosing-an-extension-method/)

## Nguồn tham khảo
- Tài liệu chính thức OpenAI Codex (lấy phiên bản hiện tại làm chuẩn)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với các chương `AGENTS.md`, ngữ cảnh, Skills, MCP và chất lượng đã kiểm chứng trong sổ tay; trang này chỉ giữ khung phán đoán ổn định “yêu cầu tạm, quy tắc dự án, sở thích cá nhân, đóng gói quy trình, năng lực ngoài nên đặt theo tầng”.  
**Kiểm chứng gần nhất:** 2026-07-26
