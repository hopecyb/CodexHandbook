---
title: Refactor site tài liệu kèm review
description: "Case: cập nhật hàng loạt liên kết và chương trong dự án tài liệu Astro/Starlight — diff nhỏ từng bước, kiểm chứng bằng build."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Case này minh họa tác vụ **kỹ thuật nội dung**: Markdown nhiều tệp, cấu hình sidebar, kiểm chứng build. Tech stack giống sổ tay này, nhưng kịch bản chuyển được sang mọi static site.

## Siêu dữ liệu

| Mục | Giá trị |
|---|---|
| Lĩnh vực | Sáng tạo nội dung / kỹ thuật tài liệu |
| Lối vào | CLI hoặc IDE |
| Rủi ro | Trung bình (nhiều liên kết và điều hướng) |
| Thời lượng | 1–3 giờ (tùy quy mô) |

Giải thích mẫu: [mẫu case](/cases/use-cases/case-study-template/)

## Ngữ cảnh

Sau khi site tài liệu thêm một chương, cần:

1. Cập nhật slug sidebar trong `astro.config`
2. Sửa liên kết tương đối trong bài
3. `npm run build` không lỗi

Người dễ sót slug; phù hợp để Agent **làm theo checklist + nghiệm thu bằng build**.

## Chuẩn bị

- [ ] Nhánh git sạch
- [ ] Cục bộ chạy được `npm run build`
- [ ] Liệt kê đường dẫn trang mới và vị trí sidebar mục tiêu

## Prompt tác vụ (ví dụ)

```text
Mục tiêu: Thêm environment-variables.md cho 12-reference và nối vào sidebar cùng liên kết index.
Ràng buộc: Chỉ sửa src/content/docs và astro.config.mjs; không nâng dependency.
Nghiệm thu: npm run build thành công; không liên kết chết.
Bước: Sửa config trước, rồi viết md, cuối cùng cập nhật 12-reference/index.md.
```

## Điểm thực thi

- **Config trước, nội dung sau:** tránh build báo missing slug
- Mỗi lô 3–5 tệp thì commit, dễ review
- Dùng [Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/)

## Kiểm tra

- [ ] Mỗi mục sidebar có tệp tương ứng với slug
- [ ] Liên kết trong site theo quy ước đường dẫn tương đối
- [ ] Log build không có cảnh báo Starlight (nếu nhóm yêu cầu zero warning)

## Phục hồi thất bại

| Vấn đề | Xử lý |
|---|---|
| Lỗi Sidebar slug | Đối chiếu tài liệu Astro để sửa slug hoặc bổ sung md |
| Liên kết chết | `grep` đường dẫn mục tiêu; sửa liên kết hoặc bổ sung trang |
| Build OOM | Sửa theo lô; tăng bộ nhớ Node cục bộ |

## Rút kinh nghiệm

- Lần thứ ba cùng kiểu «chương mới + sidebar» nên đóng gói thành Skill
- Đánh dấu mục hoàn thành trên ROADMAP, tránh tài liệu lệch kế hoạch

## Nguồn tham chiếu
- Quy trình iteration tài liệu M2 thực tế của kho này
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / IDE  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương Artifact nội dung, EPXV, nghiệm thu build và mẫu case đã kiểm chứng của sổ tay; nội dung trang giới hạn ở case kỹ thuật nội dung ổn định “sửa site tài liệu nhiều tệp từng bước nhỏ, kiểm chứng build và phục hồi thất bại”.  
**Kiểm chứng gần nhất:** 2026-07-26
