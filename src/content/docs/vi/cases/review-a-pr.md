---
title: Review PR
description: Dùng Codex để review diff có cấu trúc trước khi merge.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Review PR

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Nhà phát triển / nhóm |
| Client | CLI / IDE / Cloud |
| Thời gian ước tính | 20–40 phút |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Trước merge, phát hiện phạm vi lan rộng, rủi ro bảo mật và thiếu test.

**Tiêu chí thành công:** Đầu ra review truy được về tệp/dòng cụ thể; P0 đã xử lý hoặc chặn merge.

## 2. Prompt đề xuất

```text
So sánh diff nhánh hiện tại với main (chưa sửa code):
1. Có vượt phạm vi issue không
2. Có rủi ro bảo mật rõ (bí mật, injection, quyền) không
3. Có thiếu test hoặc tài liệu không
Xuất checklist, gắn P0/P1, kèm đường dẫn tệp.
```

## 3. Đóng gói cho nhóm

- Dùng Skill [`$pr-review`](/skills/examples/review-skill/)
- Tích hợp CI xem [tự động hóa code review](/guide/developer-platform/ci-cd/code-review-automation/)

## 4. Liên quan

- [Mẫu review](/prompts/templates/review/)
- [Review trước khi merge](/cases/workflows/review-before-merge/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Use cases Codex hiện tại trên OpenAI Developers vẫn gồm “Review GitHub pull requests”, nhấn mạnh bắt hồi quy và vấn đề tiềm ẩn trước review thủ công; ví dụ trang này chỉ yêu cầu review diff có cấu trúc, xuất P0/P1 và đường dẫn tệp, không phụ thuộc giao diện hay lệnh cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
