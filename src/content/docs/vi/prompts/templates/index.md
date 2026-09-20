---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Trang này chỉ mô tả cách dùng mẫu; liên kết nội bộ và phân loại mẫu đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi."
  checkedAt: "2026-07-26"
title: Mẫu Prompt
description: Khung Prompt tái sử dụng theo loại tác vụ—hiểu, tạo, sửa, chẩn đoán, review, nghiên cứu, tự động hóa.
locale: vi
source_locale: zh-CN
source_revision: fae2ed3
translation_status: draft
translated_at: 2026-09-20
---


Khi thấy «mẫu», phản ứng thường có hai kiểu:

- Hoặc thấy mẫu quá cứng, không muốn dùng
- Hoặc copy nguyên xi, kết quả không phân biệt được chỗ nào cần sửa

Vai trò chính của mẫu là giúp bạn ít bỏ sót đoạn then chốt—không thay bạn suy nghĩ.

Mục tiêu trang mẫu là giữ cấu trúc tác vụ, không thay bạn tạo đáp án duy nhất đúng.

## Cách dùng mẫu

Có thể dùng như sau:

1. Chọn loại mẫu gần tác vụ nhất
2. Thay nội dung placeholder `【】` bằng tác vụ thật của bạn
3. Xóa đoạn không liên quan
4. Bổ sung ràng buộc và nghiệm thu riêng của lần này

Mẫu giống giàn giáo hơn là đáp án chuẩn.

| Mẫu | Tình huống phù hợp |
|---|---|
| [Hiểu](/vi/prompts/templates/understand/) | Đọc codebase, tài liệu hoặc tư liệu; lập nhận thức trước |
| [Tạo](/vi/prompts/templates/create/) | Triển khai từ đầu chức năng, bản thảo hoặc Artifact |
| [Sửa](/vi/prompts/templates/change/) | Lặp lại thay đổi trên nền hiện có |
| [Chẩn đoán](/vi/prompts/templates/diagnose/) | Định vị nguyên nhân gốc; chưa sửa code |
| [Review](/vi/prompts/templates/review/) | Review diff, PR hoặc thay đổi tài liệu |
| [Nghiên cứu](/vi/prompts/templates/research/) | Khảo sát và so sánh kèm trích dẫn |
| [Tự động hóa](/vi/prompts/templates/automate/) | Tác vụ lặp, script và quy trình không người trực |

## Từ mẫu thành workflow

Có Prompt dùng một lần là đủ; có Prompt lặp lại nhiều lần thì nên được ổn định hóa.

| Tác vụ lặp lại | Ban đầu làm thành | Khi ổn định có thể nâng lên |
|---|---|---|
| Chuẩn bị PR | Mẫu review/sửa đổi | Skill với checklist cố định |
| Tạo tài liệu API | Mẫu tạo/sửa đổi | Skill + script tài liệu |
| Mở rộng độ phủ kiểm thử | Mẫu sửa đổi | Skill + quy ước lệnh test |
| Điều tra hiệu năng | Mẫu chẩn đoán | Subagent hoặc Skill chuyên biệt |
| Mỗi lần ghi file đều kiểm tra format | Không nên chỉ dựa vào mẫu | Hook |
| Đọc ticket ngoài rồi mới sửa code | Mẫu nghiên cứu | MCP + Skill |

Mẫu phù hợp với tác vụ do người chủ động khởi tạo; Skill phù hợp quy trình lặp lại; Hook phù hợp kiểm tra tự động ở điểm cố định; MCP phù hợp khi cần nối hệ thống ngoài.

## Chọn nhanh: nên biến tác vụ này thành gì?

Hãy tự hỏi bốn điều:

1. Việc này chỉ làm một lần?
2. Lần sau các bước có gần như giống nhau?
3. Có định dạng đầu ra hoặc danh sách kiểm tra cố định?
4. Có cần hệ thống ngoài, tập lệnh hoặc bước chặn tự động?

| Tình huống | Hình thức nên dùng |
|---|---|
| Việc một lần, vẫn cần trao đổi | Prompt đầy đủ |
| Việc lặp lại nhưng quy trình còn điều chỉnh | Mẫu |
| Quy trình ổn định, đầu ra cố định | Skill |
| Cần một vai trò độc lập tìm hiểu sâu | Tác nhân phụ |
| Cần dữ liệu từ hệ thống ngoài | MCP, ưu tiên chỉ đọc ban đầu |
| Mỗi lần đến một bước đều phải kiểm tra | Hook |
| Cần gói thống nhất cho cả nhóm | Plugin |

Prompt dài hơn chưa chắc tốt hơn. Điều đáng tái sử dụng là tác vụ đã được kiểm tra nhiều lần, có ranh giới và tiêu chí nghiệm thu rõ ràng.

## Hiểu lầm thường gặp

### 1. Mẫu là để copy nguyên xi

Nếu không sửa placeholder và không xóa đoạn không liên quan, mẫu phản lại làm tác vụ trống rỗng.

### 2. Chỉ cần dùng mẫu thì Prompt tự nhiên chuyên nghiệp

Mẫu chỉ giúp giữ cấu trúc; không thay bạn quyết:

- Mục tiêu thật là gì
- Ràng buộc nên vạch đến đâu
- Nghiệm thu nên viết thế nào

### 3. Mẫu càng đầy càng tốt

Với người mới, mẫu «đủ dùng nhưng không phình» là được.

Chọn đúng loại mẫu trước, rồi sửa thành tác vụ của bạn; đừng coi bản thân mẫu là tác vụ.

Nguyên tắc viết xem [Cơ bản về Prompt](/vi/prompts/basics/) và [Cấu trúc tác vụ](/vi/prompts/task-anatomy/).
