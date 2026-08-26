---
title: Xây website
description: Case dựng nguyên mẫu từ yêu cầu đến trang có thể xem trước.
locale: vi
source_locale: zh-CN
source_revision: b3ec6d8
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Xây website

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Người sáng tạo / nhà phát triển |
| Client | App / IDE |
| Thời gian ước tính | 2–4 giờ |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Dựa trên yêu cầu đơn giản, dựng trang tĩnh hoặc site nhỏ có thể xem trước cục bộ.

**Tiêu chí thành công:** Mở được trong trình duyệt, kiểu dáng khớp mô tả, không sửa tệp không liên quan.

## 2. Prompt đề xuất

```text
Mục tiêu: Làm landing page một trang cho 【sản phẩm/sự kiện】, gồm tiêu đề, ba đặc điểm, nút CTA.
Kỹ thuật: HTML + CSS (hoặc framework sẵn có của dự án), thân thiện mobile.
Ràng buộc: Chỉ sửa tệp liên quan trang dưới src/; không thêm dependency mới trừ khi tôi phê duyệt.
Nghiệm thu: pnpm dev xem trước được; kèm ảnh chụp mô tả các khối chính.
Trước hết đưa kế hoạch wireframe; đợi tôi xác nhận rồi mới viết code.
```

## 3. Kiểm chứng

- Xem trước cục bộ ở các breakpoint
- Kiểm tra có vô tình sửa cấu hình hoặc lockfile không

## 4. Liên quan

- [Mẫu tạo](/vi/prompts/templates/create/)
- [Làm việc ưu tiên Artifact](/vi/cases/workflows/artifact-first-work/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Use cases Codex hiện tại trên OpenAI Developers vẫn gồm các kịch bản dựng frontend như “Get from idea to proof of concept”, “Build responsive front-end designs”, “Deploy an app or website”; ví dụ trang này giới hạn ở nguyên mẫu site nhỏ hoặc landing page, yêu cầu wireframe trước, hạn chế phạm vi sửa, nghiệm thu bằng xem trước trên trình duyệt.  
**Kiểm chứng gần nhất:** 2026-07-26
