---
title: Thư viện kịch bản và case
description: Tác vụ thực tế đầu-cuối — chuẩn bị, thực thi, kiểm chứng, phục hồi thất bại và rút kinh nghiệm.
locale: vi
source_locale: zh-CN
source_revision: 6349392
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Thư viện case trả lời: «**Với mục tiêu thực tế kiểu này, trải nghiệm đi hết một vòng Codex là gì?**» Bổ sung cho mô tả sản phẩm từng trang.

## Case vs hướng dẫn

| | Hướng dẫn nhập môn | Thư viện case |
|---|---|---|
| Mục tiêu | Học một nút/khái niệm | Giao một loại thành quả thực tế |
| Cấu trúc | Theo tính năng sản phẩm | Theo loại tác vụ |
| Xử lý thất bại | Thường bỏ qua | Bắt buộc có |

## Cách dùng

1. Chọn case gần mục tiêu nhất (hoặc chỉ lấy «checklist chuẩn bị»)
2. Đối chiếu [Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng](/vi/cases/workflows/explore-plan-execute-verify/)
3. Sau khi xong, dùng [mẫu case](/vi/cases/use-cases/case-study-template/) để rút kinh nghiệm, quyết định có đóng gói thành Skill không

## Case starter hiện có

| Lĩnh vực | Case | Mô tả |
|---|---|---|
| Phát triển phần mềm | [Sửa bug kèm kiểm chứng](/vi/cases/use-cases/software-development/fix-a-bug-with-verification/) | Vòng lặp phổ biến nhất của nhà phát triển |
| Sáng tạo nội dung | [Refactor site tài liệu kèm review](/vi/cases/use-cases/content-creation/refactor-docs-with-review/) | Tài liệu nhiều tệp và nghiệm thu build |
| Nghiên cứu và học | [Bảng so sánh tính năng đối thủ](/vi/cases/use-cases/research-and-learning/competitive-feature-matrix/) | Đầu ra nghiên cứu có nguồn |
| Tự động hóa nhóm | [Kiểm tra liên kết theo lịch](/vi/cases/use-cases/team-automation/scheduled-link-check/) · [Gợi ý phân loại Issue](/vi/cases/use-cases/team-automation/issue-triage-suggestions/) | Tự động hóa CI và ticket nhẹ |

Prompt có thể sao chép xem trong kho [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts). Case theo lĩnh vực sẽ tiếp tục được bổ sung vào thư viện này.

## Hướng đóng góp

- Bước tái hiện được (kho, nhánh, lệnh)
- Ghi client áp dụng và ngày kiểm chứng
- Không viết tường thuật «một lần thành công» không kiểm chứng được

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo theo cấu trúc thư viện case hiện tại của kho, trang vào từng lĩnh vực, mẫu case và lối vào prompt trong examples; trang này chỉ đảm nhận vai trò điều hướng “tổ chức case theo loại tác vụ thực tế”.  
**Kiểm chứng gần nhất:** 2026-07-26
