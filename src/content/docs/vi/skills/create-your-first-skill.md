---
title: Tạo Skill đầu tiên
description: Làm từ đầu một Skill pr-review có thể commit, gồm kiểm thử và chia sẻ nhóm.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nếu bạn đã biết giao Tác vụ nhưng chưa từng làm Skill thật, trang này nói cách làm cơ bản cho Skill đầu tiên.

Dành 15–30 phút làm một Skill **tái dùng được trong repo** thường thẳng hơn đọc nhiều lý thuyết trước. Điểm bắt đầu tốt là một Skill nhỏ có ranh giới rõ.

## Phù hợp với ai

Đã chạy thông [Tác vụ đầu tiên](/cases/first-task/) và sẵn sàng thử trong repo kiểm thử.

## Vì sao nên bắt đầu từ `pr-review`

Nó có vài ưu điểm:

- Đầu vào tương đối rõ
- Rủi ro thấp hơn"sửa code trực tiếp"
- Dễ đánh giá dùng tốt hay không
- Còn giúp bạn hiểu cách kích hoạt Skill và cách viết ranh giới

Rất phù hợp để luyện cách biến một quy trình làm việc thành thứ tái dùng được.

## Kết quả mục tiêu

Có một Skill dưới `.agents/skills/pr-review/`, xuất ý kiến review có cấu trúc cho thay đổi hiện tại.

## Mục tiêu tối thiểu

Lần đầu làm Skill, có thể đạt ba việc này trước:

1. Được nhận diện
2. Chạy ổn định một quy trình rõ ràng
3. Không tự ý làm hành động nguy hiểm

Ba điểm này rõ rồi thì vòng lặp sau sẽ suôn hơn nhiều.

## Các bước

### 1. Tạo thư mục

```bash
mkdir -p .agents/skills/pr-review
```

### 2. Viết SKILL.md

```md
---
name: pr-review
description: Review git diff; liệt kê vấn đề chặn, khoảng trống kiểm thử và đề xuất phong cách. Dùng khi người dùng nhắc review, kiểm tra, kiểm tra trước merge. Không dùng để viết tính năng mới.
---

# Review PR

## Đầu vào
- Nhánh so sánh mặc định: main (nếu không có thì dùng nhánh mặc định)

## Quy trình
1. Liệt kê file thay đổi và loại thay đổi (tính năng/sửa lỗi/refactor/tài liệu)
2. Với mỗi thay đổi logic: thiếu kiểm thử không, phá API không
3. Kiểm tra có khóa bí mật, log debug, diff lớn không liên quan không
4. Xuất:
   - 🔴 Chặn: phải sửa
   - 🟡 Đề xuất: nên sửa
   - 🟢 Đạt: đã thỏa yêu cầu AGENTS.md

## Cấm
- Không git push
- Không sửa public API chưa thảo luận
```

### 3. Thử cục bộ

Mở repo đó trong Codex, thử:

```text
$pr-review Hãy review các thay đổi chưa commit hiện tại của tôi
```

Hoặc ngôn ngữ tự nhiên:"Review diff theo thói quen nhóm, tập trung vào kiểm thử."

### 4. Thử tường minh trước, ngầm sau

Nên chưa vội thử kích hoạt tự động.

Có thể thử theo thứ tự:

1. Gọi tường minh bằng `$pr-review`
2. Xác nhận quy trình và đầu ra ổn
3. Rồi thử kích hoạt bằng ngôn ngữ tự nhiên

Dễ hơn để biết vấn đề nằm ở nội dung Skill hay điều kiện kích hoạt của `description` chưa rõ.

### 5. Lặp lại description

Nếu model **không bao giờ tự chọn**, siết hoặc bổ sung từ kích hoạt trong `description`. Nếu **dùng nhầm quá nhiều**, thêm"khi nào không dùng".

### 6. Commit để nhóm chia sẻ

```bash
git add .agents/skills/pr-review
git commit -m "docs: add pr-review skill for Codex"
```

Trong README nhóm hoặc `AGENTS.md` thêm một câu:"Trước khi merge có thể dùng `$pr-review`."

## Hiểu lầm thường gặp

### 1. Skill đầu tiên càng đầy đủ càng tốt

Nhiều khi ngược lại. Skill đầu càng nhỏ, càng tập trung, càng dễ đánh giá nó có giá trị thật không.

### 2. Trọng tâm Skill không phải viết"thông minh"

Quan trọng hơn là viết **ranh giới rõ**.

Nó nên làm gì và không nên làm gì quan trọng hơn"trông mạnh".

### 3. Skill chạy được là thành công

Một Skill hữu ích ít nhất cần:

- Người khác hiểu khi nào nên dùng
- Đầu ra có cấu trúc cố định
- Không tự ý làm thao tác nguy hiểm

## Checklist nghiệm thu

- [ ] `$pr-review` chạy thông và không thực hiện thao tác git nguy hiểm
- [ ] Đầu ra có kết luận phân cấp, không chung chung
- [ ] `description` nói rõ kịch bản kích hoạt trong một câu
- [ ] Đã đối chiếu [Quyền và Phê duyệt](/guide/permissions-and-sandbox/) về nhu cầu script (ví dụ này không có script)

Bắt đầu từ một Skill"nhỏ mà ổn"dễ hơn để tái dùng ổn định một quy trình rõ ràng.

## Bước tiếp theo

- Đóng [khám phá—lập kế hoạch—thực thi—Kiểm chứng](/prompts/templates/understand/) thành Skill
- Khi cần nối GitHub API, mới đưa [MCP](/skills/mcp/mcp-overview/) vào

## Nguồn tham chiếu
- Ví dụ Skills chính thức của OpenAI Codex và `skill-creator` (nếu môi trường có)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Cơ sở Kiểm chứng:** Runtime Codex hiện tại vẫn hỗ trợ thư mục kỹ năng trong dự án, định nghĩa kỹ năng bằng `SKILL.md`, và gọi tường minh để thử chạy; trang này là bài luyện ổn định cho Skill đầu tiên.  
**Kiểm chứng gần nhất:** 2026-07-26
