---
title: Khi nào dùng Skills
description: Quyết định Tác vụ có nên đóng thành Skill, và phân công với lệnh slash, MCP.
locale: vi
source_locale: zh-CN
source_revision: 6cdbeae
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Khi mới làm quen Skill, câu hỏi thường gặp là: việc này có đáng làm thành một Skill riêng không.

Nếu cái gì cũng thành Skill, hệ thống ngày càng nặng; nếu đáng đóng mà không đóng, bạn sẽ mãi lặp lại cùng một lời thủ công. Phần này giúp bạn quyết khi nào nên cố định quy trình.

# Khi nào dùng Skills

## Phù hợp đóng thành Skill

- Cùng một quy trình đã bị lặp thủ công lần thứ ba
- Cần checklist chi tiết nhưng không muốn chiếm hết Ngữ cảnh mỗi lần
- Muốn model tự quyết khi nào bật theo `description`
- Nhóm cần workflow chia sẻ và có phiên bản

## Điều kiện phù hợp làm Skill

Nếu một Tác vụ thỏa đồng thời hai điều sau, rất đáng cân nhắc làm Skill:

- Bạn sẽ làm lại trong tương lai
- Bạn muốn lần sau cách làm càng giống càng tốt

Nhiều Skill cuối cùng rơi vào các kịch bản:

- Review diff
- Sinh changelog
- Kiểm tra trước phát hành
- Quy trình phát hành tài liệu

Các Tác vụ này không phức tạp, nhưng rất hợp để tái dùng.

## Ít phù hợp

- Tác vụ một lần, chưa từng lặp
- Lệnh cố định cực ngắn mà bạn nhớ (cân nhắc lệnh slash)
- Cần trạng thái hệ thống ngoài theo thời gian thực và thay đổi rất nhanh (cân nhắc MCP)

## Hiểu lầm thường gặp

### 1. Tác vụ quan trọng thì phải làm Skill

Quan trọng không đồng nghĩa phù hợp tái dùng.  
Nếu đó là Tác vụ đặc biệt một lần, làm Skill có thể chỉ tăng gánh bảo trì.

### 2. Càng nhiều Skill càng tốt

Quá nhiều Skill ranh giới mờ khiến model dùng nhầm và nhóm khó bảo trì hơn.

### 3. Chỉ cần nối hệ thống ngoài là nên làm Skill trước

Nhiều khi kết nối hệ thống ngoài thiên về MCP hơn; Skill chịu trách nhiệm"quy trình", còn cách kết nối vẫn cần MCP.

## Có thể thử thế nào

Nếu chưa chắc một quy trình có đáng đóng, hãy thử vài lần:

1. Làm thủ công hai đến ba lần
2. Quan sát xem mỗi lần có lặp cùng thứ tự kiểm tra không
3. Nếu câu trả lời là"có", hãy thu thành Skill

Skill làm theo cách này vững hơn vì đến từ sự lặp thật, không phải thiết kế trên giấy.

## So với các cách mở rộng khác

| Cách | Phù hợp |
|---|---|
| Skill | Quy trình tái dùng, tiết lộ dần |
| MCP | Kết nối API và nguồn dữ liệu ngoài |
| Hooks | Tự chạy tại điểm sự kiện cụ thể |
| `AGENTS.md` | Quy ước thường trú cấp dự án |

Skill phù hợp hơn để đóng những quy trình"sẽ lặp, cần nhất quán, và không muốn giải thích lại mỗi lần".

Chọn cách mở rộng: [Cách chọn phương thức mở rộng](/vi/skills/choosing-an-extension-method/). Đóng workflow: [Biến quy trình thành Skill](/vi/cases/workflows/turn-a-workflow-into-a-skill/).
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở Kiểm chứng:** OpenAI Help"Skills in ChatGPT"xác nhận Skill là workflow tái sử dụng, chia sẻ được; runtime Codex hiện tại cũng khớp theo tên và mô tả kỹ năng. Trang này chủ yếu là nguyên tắc chọn, không phụ thuộc giao diện hay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
