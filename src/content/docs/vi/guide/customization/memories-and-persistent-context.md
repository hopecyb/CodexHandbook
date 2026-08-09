---
title: Bộ nhớ và ngữ cảnh bền
description: Codex nhớ sở thích và sự kiện qua phiên thế nào — năng lực, ranh giới và quy chuẩn nhóm.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Một số client Codex hỗ trợ **bộ nhớ (Memory)**: giữ sở thích hoặc sự kiện bạn đã xác nhận qua nhiều vòng hội thoại sang phiên sau. Nó bổ sung với `AGENTS.md` và cấu hình dự án, nhưng **không** thay quy chuẩn nhóm đã phiên bản hóa.

## Nội dung

- Bộ nhớ lưu gì, không lưu gì
- Ưu tiên với AGENTS.md, tính năng Memories, chỉ thị dự án
- Cá nhân và nhóm quản lý nội dung bộ nhớ thế nào

## Bộ nhớ phù hợp dùng để làm gì

Có thể hiểu bộ nhớ là: **Codex giúp bạn nhớ những việc luôn phải nói lại, nhưng không đáng kể lại mỗi lần.**

Ví dụ:

- Bạn quen giải thích bằng tiếng Việt
- Bạn thích đưa kết luận trước rồi mới chi tiết
- Trong một dự án “backend” mặc định chỉ thư mục nào

Nó giống hơn “sở thích dài hạn cá nhân và ít sự kiện ổn định”, không phải sổ hướng dẫn dự án, cũng không phải két bí mật.

## Bộ nhớ phù hợp lưu gì

| Phù hợp | Không phù hợp |
|---|---|
| Sở thích mã hóa cá nhân (ngôn ngữ chú thích, thói thụt lề) | Khóa production, token |
| Bí danh dự án phải giải thích lặp («backend chỉ `services/api`») | Trạng thái tác vụ sprint hay đổi |
| Sự kiện không nhạy cảm bạn nói rõ «hãy nhớ» | Quy chuẩn nhóm nên viết trong Git |

Quy chuẩn cấp nhóm nên vào **`AGENTS.md` hoặc cấu hình dự án**, để review và onboarding người mới. Xem [Phạm vi và ưu tiên](/guide/customization/agents-md/scope-and-precedence/).

## Hiểu lầm thường gặp

### Bộ nhớ không “nhớ vĩnh viễn mọi thứ giúp bạn”

Nhiều người lầm rằng nói một lần là Codex sau này sẽ nhớ đủ, ổn định mãi.

Hiểu chính xác hơn: bộ nhớ là lớp phụ trợ để giảm giải thích lặp, không thay tài liệu và thông tin chính thức trong kho.

### Bộ nhớ không phù hợp mang đồng thuận nhóm

Nếu một quy tắc chỉ bộ nhớ trên tài khoản bạn biết, người khác không thấy, cũng không review được.

Loại nội dung này nên quay về:

- `AGENTS.md`
- Tài liệu dự án
- Tệp cấu hình

### Bộ nhớ không phải chỗ lưu thông tin nhạy cảm

Dù client nào đó hỗ trợ bộ nhớ, cũng không nên để:

- token
- dữ liệu khách hàng
- tài khoản nội bộ
- thông tin nghiệp vụ chưa công bố

cho nó lưu dài hạn.

## So sánh với cơ chế liên quan

| Cơ chế | Ai thấy | Cách thay đổi |
|---|---|---|
| Prompt một lần | Tác vụ hiện tại | Bạn gõ |
| Bộ nhớ | Thường chỉ tài khoản/workspace của bạn | Xác nhận trong hội thoại hoặc quản lý trang cài đặt |
| `AGENTS.md` | Mọi cộng tác viên kho | Git PR |
| Cấu hình dự án | Theo tầng cấu hình | Tệp + chiến lược quản trị |

## Cách phân tầng thông tin

Bộ nhớ trở nên rối không phải vì bản thân tính năng, mà vì ta nhét thông tin có tuổi thọ và độ hiển thị khác nhau vào cùng một chỗ.

| Loại thông tin | Nên đặt ở |
|---|---|
| Sở thích giải thích cá nhân | Bộ nhớ |
| Quy tắc nhóm phải cùng tuân thủ | `AGENTS.md` hoặc cấu hình dự án |
| Quy ước riêng của thư mục | Chỉ thị dự án cấp thư mục |
| Mục tiêu tạm thời của một tác vụ | Prompt hiện tại hoặc issue |
| Bước làm cần tái dùng | Skill hoặc mẫu Prompt |
| Kiểm tra phải tự chạy | Hook |

Hãy hỏi: ai cần thấy, thông tin tồn tại bao lâu, có cần code review không. Đồng thuận nhóm nên ở repo; thói quen cá nhân mới hợp với bộ nhớ.

## Cách dùng khuyến nghị

1. **Viết vào kho trước**: lệnh kiểm thử, cấu trúc thư mục, cấm push — những thứ này không nên chỉ tồn tại trong bộ nhớ
2. **Bộ nhớ đặt sở thích cá nhân**: như «giải thích bằng tiếng Việt», «bình luận diff bằng tiếng Anh»
3. **Dọn định kỳ**: kiến trúc dự án đổi lớn thì xóa bộ nhớ lỗi thời
4. **Dự án nhạy cảm**: tắt hoặc hạn chế bộ nhớ, tránh rò ngữ cảnh xuyên dự án

## Phán đoán có nên lưu vào bộ nhớ không

Nếu chưa chắc một thông tin có nên vào bộ nhớ, tự hỏi:

1. Có phải sở thích cá nhân tôi thường phải nói lại không
2. Có phải sự kiện tương đối ổn định trong thời gian ngắn không
3. Thông tin này dù người khác không thấy cũng không ảnh hưởng cộng tác nhóm không

Ba câu càng gần “có”, càng phù hợp vào bộ nhớ.

## Ranh giới an toàn

- Đừng để bộ nhớ thành **kênh bí mật** vòng qua mục cấm của `AGENTS.md`
- Đừng lưu trong bộ nhớ dữ liệu khách hàng, chứng chỉ, thông tin tài chính chưa công bố
- Môi trường doanh nghiệp có thể tắt bộ nhớ — tuân chiến lược quản trị

## Lỗi thường gặp

- Chỉ đặt «danh sách epic tuần này» trong bộ nhớ, cộng tác viên không thấy
- Bộ nhớ xung đột với `AGENTS.md` mà không cập nhật bên nào
- Lầm tưởng bộ nhớ bằng «mô hình nhớ mãi cả kho»

Bộ nhớ phù hợp nhất lưu “sở thích cá nhân luôn phải nói lại và ít sự kiện ổn định”, không phù hợp thay tài liệu kho, quy tắc nhóm và quản lý thông tin nhạy cảm.

## Nguồn tham khảo
- Tài liệu memory OpenAI Codex (lấy phiên bản làm chuẩn)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI (tùy phiên bản)  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với hướng dẫn chính thức hiện tại của OpenAI Help Center về ChatGPT Memory, cùng các chương chỉ thị dự án, sở thích cá nhân và ranh giới an toàn đã kiểm chứng trong sổ tay; nội dung trang giới hạn ở nguyên tắc ổn định “bộ nhớ phù hợp sở thích cá nhân và ít sự kiện ổn định, không thay quy tắc kho và quản lý thông tin nhạy cảm”.  
**Kiểm chứng gần nhất:** 2026-07-26
