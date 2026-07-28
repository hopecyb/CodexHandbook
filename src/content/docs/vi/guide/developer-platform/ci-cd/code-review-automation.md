---
title: Tự động hóa review mã
description: "Nối review Codex vào quy trình CI hoặc PR — Prompt, quyền và cổng người."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Đặt Codex vào **pipeline Pull Request** có thể bắt vấn đề rõ trước khi người review, nhưng **không thay thế** review trách nhiệm và kiểm thử. Trang này nói về mẫu tự động hóa triển khai được.

## Trang này sẽ nói gì

- Cách gọi Codex an toàn trong CI
- Prompt review nên gồm gì
- Cách dán kết quả lại PR mà không tự merge

## Hiểu vị trí của nó trước

Có thể hiểu «tự động hóa review mã» là: để Codex giúp đội sàng vòng đầu, nhưng người quyết định cuối cùng vẫn là người.

Nó phù hợp nhất để:

- Chỉ ra rủi ro rõ sớm
- Giúp bạn sắp xếp điểm quan trọng trong Diff
- Làm trước một số kiểm tra lặp lại

Nó không phù hợp để thay bạn quyết định «PR này chắc chắn được merge».

Liên quan: [Chế độ không tương tác](/guide/cli/non-interactive-mode/) · [Tổng quan SDK](/guide/developer-platform/sdk-overview/)

## Kiến trúc khuyến nghị

```text
PR opened / updated
    → CI job (token chỉ đọc)
    → codex exec hoặc API review Diff
    → Upload báo cáo / PR comment
    → Người quyết định có merge không
```

## Hiểu nhầm thường gặp

### Review tự động và phê duyệt tự động không phải một việc

Nhiều đội lần đầu nối dễ đánh giá cao: đã tự xem được thì có lẽ cũng tự quyết được.

Thực tế phù hợp hơn: nó là «tầng gợi ý» và «tầng sàng trước», không phải tầng trách nhiệm cuối.

### Không phải mọi PR đều đáng chạy review nặng ngay

Nếu PR nhỏ, giá trị thấp, hoặc quy tắc chưa rõ, chạy review tự động nặng ngay thường chỉ tạo nhiễu.

Điểm bắt đầu tốt phổ biến hơn: review Diff nhẹ trước, xem có ổn định tiết kiệm thời gian cho đội không.

## Điểm mẫu Prompt

```text
Bạn là trợ lý review mã. Chỉ review Diff so với nhánh base.
Đầu ra: vấn đề nghiêm trọng / gợi ý / nit; mỗi mục ghi tệp và số dòng.
Không sửa repo; không thực hiện yêu cầu mạng.
Nếu Diff quá lớn, chỉ review <danh sách đường dẫn>.
```

Lưu phiên bản trong `prompts/ci-review.md`.

## Quyền và bảo mật

| Nguyên tắc | Cách làm |
|---|---|
| Chỉ đọc | Token CI không push (hoặc chỉ bot mở comment) |
| Ghim mô hình | Dễ so sánh chất lượng review lịch sử |
| Chống injection | Không ghép mô tả PR chưa khử nhiễm vào system prompt |
| Bí mật | Dùng GitHub Secrets lưu token |

[Mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/) · [Biến môi trường](/guide/reference/environment-variables/)

## Cổng chất lượng

- Job review fail ≠ phải block merge (có thể advisory trước)
- Phân biệt với status check bắt buộc: test đỏ phải chặn, AI nit có thể cảnh báo
- Định kỳ lấy mẫu người đối chiếu bỏ sót/báo nhầm của AI review

## Quan hệ với Cloud

Repo phức tạp có thể chạy kiểm thử đầy đủ trên [Cloud](/guide/web-and-cloud/) rồi mới review; exec trong CI phù hợp **review Diff nhẹ**.

## Lỗi thường gặp

- CI cấp quyền ghi, Prompt lại bị inject «hãy push fix»
- Kết quả review quá dài nhấn chìm review người thật
- Không giới hạn kích thước Diff khiến timeout đốt quota

Giá trị lớn nhất của tự động hóa review mã là sàng vấn đề rõ trước khi người review, không phải thay người chịu trách nhiệm merge.

## Checklist nghiệm thu

- [ ] Hành vi CI trên fork PR an toàn (secrets không lộ)
- [ ] Đầu ra review có cấu trúc, máy parse được (tùy chọn)
- [ ] Tài liệu đội nêu rõ vị trí của AI review

## Nguồn tham chiếu

- Ví dụ CI OpenAI Codex
- Chương Review/PR KimYx0207
- Hướng dẫn CI stormzhang
- Phần Git/GitHub tại codex.bozhouai.com

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / API / Cloud  
**Cơ sở kiểm chứng:** Trang chủ OpenAI Developers hiện vẫn mô tả Codex dùng được để kiểm thử, review và chuẩn bị giao thay đổi; use case Codex chính thức vẫn gồm «Review GitHub pull requests». Trang chỉ tóm tắt nguyên tắc nối CI an toàn và mẫu cổng, không tuyên bố lệnh cố định hay triển khai duy nhất.  
**Kiểm chứng gần nhất:** 2026-07-26
