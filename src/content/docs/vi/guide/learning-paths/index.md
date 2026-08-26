---
title: Lộ trình học
description: Sắp xếp thứ tự đọc theo vai trò và liên kết tới nội dung chính thức.
sidebar:
  order: 5
locale: vi
source_locale: zh-CN
source_revision: 05e85de
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Lộ trình học **chỉ sắp xếp thứ tự**, không sao chép bài dài của sổ tay sản phẩm hay chuyên đề năng lực.

Lần đầu thấy chương «Lộ trình học», có thể cảm giác chỉ thêm một lớp mục lục. Nó chủ yếu trả lời: bạn hiện giống loại người dùng nào nhất, tiếp theo nên đọc theo thứ tự nào.

Chương này không bổ sung kiến thức mới; chủ yếu giúp bạn ít đi đường vòng.

## Chương này đang làm gì

- Tôi là người mới, người sáng tạo, nhà phát triển hay người đẩy đội — nên đi đường nào
- Thứ tự đọc của các vai trò khác nhau thế nào
- Nội dung nào đáng đọc ngay, cái nào để sau

## Lộ trình MVP dùng được

- **Người mới (đủ năm bước)**
  1. [Trò chuyện với Codex](/vi/guide/learning-paths/beginner/01-talk-to-codex/)
  2. [Làm việc với tệp](/vi/guide/learning-paths/beginner/02-work-with-files/)
  3. [Giao Tác vụ rõ ràng](/vi/guide/learning-paths/beginner/03-give-clear-tasks/)
  4. [Xem xét kết quả](/vi/guide/learning-paths/beginner/04-review-results/)
  5. [Hoàn thành dự án nhỏ đầu tiên](/vi/guide/learning-paths/beginner/05-complete-first-project/)

## Tổng quan (bước sâu sẽ bổ sung sau)

- [Người sáng tạo](/vi/guide/learning-paths/creator/)
- [Nhà phát triển](/vi/guide/learning-paths/developer/)
- [Đội](/vi/guide/learning-paths/team/)

## Lộ trình người vận hành nâng cao

Nếu bạn đã hoàn thành được các tác vụ nhỏ, bước tiếp theo không phải là học thuộc thêm lệnh, mà là biết kết hợp nhiều năng lực thành workflow ổn định.

| Bước | Chủ đề | Đọc trước |
|---|---|---|
| 1 | Lối vào nhanh | [Lệnh slash và lối vào nhanh](/vi/guide/reference/slash-commands/) |
| 2 | Ngữ cảnh bền vững | [AGENTS.md](/vi/guide/customization/agents-md/) và [Bộ nhớ và ngữ cảnh bền vững](/vi/guide/customization/memories-and-persistent-context/) |
| 3 | Workflow tái dùng | [Tổng quan Skills](/vi/skills/overview/) và [Cấu trúc Skill](/vi/skills/skill-anatomy/) |
| 4 | Tác vụ con độc lập | [Subagents](/vi/guide/agent-work/subagents/) và [Phối hợp nhiều Agent](/vi/cases/workflows/multi-agent-coordination/) |
| 5 | Hệ thống bên ngoài | [Tổng quan MCP](/vi/skills/mcp/mcp-overview/) |
| 6 | Guardrail tự động | [Tổng quan Hooks](/vi/skills/hooks/hooks-overview/) |
| 7 | Phân phối cho nhóm | [Tổng quan Plugins](/vi/skills/plugins/plugins-overview/) |
| 8 | Khôi phục và review | [Hoàn tác và khôi phục](/vi/guide/getting-started/undo-and-recover/) và [Review diff](/vi/guide/quality/review-diffs/) |

Lộ trình này phù hợp để biến “thỉnh thoảng nhờ Codex giúp” thành “một hệ thống nhỏ mà nhóm có thể lặp lại”: chỉ thị dự án định nghĩa quy tắc dài hạn, Skill định nghĩa cách làm, MCP cung cấp công cụ ngoài, subagent chia việc rõ ranh giới, Hook bảo vệ điểm quan trọng, Plugin đóng gói để phân phối.

## Hiểu nhầm thường gặp

### 1. Lộ trình học và thân bài sổ tay là hai bộ nội dung trùng

Thân bài chịu trách nhiệm nói rõ; lộ trình học chịu trách nhiệm bảo bạn giờ nên xem những bài nào.

### 2. Tôi phải xác định mình thuộc một danh tính cố định trước

Chỉ cần phán một việc:  
**Vấn đề chính bạn muốn giải quyết ngay giờ là gì.**

### 3. Một lộ trình phải học từ đầu đến cuối, không được nhảy

Lộ trình là thứ tự khuyến nghị, không phải quy trình bắt buộc. Khi dùng thật, bạn hoàn toàn có thể mang câu hỏi cụ thể nhảy về chương khác.

## Khi chưa chắc thì chọn thế nào

Nếu chưa chắc đi lộ trình nào, chọn theo cách này:

- Chưa chạy thông Tác vụ đầy đủ lần đầu: đi [Lộ trình người mới](/vi/guide/learning-paths/beginner/)
- Chủ yếu muốn viết nội dung, làm đồ họa chữ, làm demo: xem [Lộ trình người sáng tạo](/vi/guide/learning-paths/creator/)
- Chủ yếu muốn sửa code, sửa bug, nhận dự án: xem [Lộ trình nhà phát triển](/vi/guide/learning-paths/developer/)
- Chủ yếu nghĩ đội triển khai thế nào, kiểm soát rủi ro thế nào: xem [Lộ trình đội](/vi/guide/learning-paths/team/)

Lộ trình học chính là quyết định đọc gì tiếp theo theo «vấn đề quan trọng nhất lúc này».

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Cơ sở kiểm chứng:** Đã đối chiếu chéo với cấu trúc thư mục learning paths hiện tại, trang lối vào từng vai trò và lộ trình từng bước cho người mới trong kho này; trang chỉ đóng vai trò điều hướng «sắp xếp thứ tự đọc theo vai trò», không chứa chi tiết hành vi sản phẩm dễ biến đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
