---
title: "Case: gợi ý phân loại Issue và nhãn"
description: Dùng Codex đọc Issue mới và gợi ý nhãn cùng người phụ trách — tự động hóa nhóm nhẹ.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Maintainer, PM |
| Client | Cloud hoặc CLI + GitHub |
| Thời gian ước tính | 60 phút |
| Ngày kiểm chứng | 2026-07-25 |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Với issue mới mở, tạo gợi ý có cấu trúc: `type`, `priority`, nhãn đề xuất, có cần review bảo mật không.

**Tiêu chí thành công:**

- Xuất JSON mà GitHub Action parse được
- Không tự đóng/merge issue; chỉ comment hoặc thêm label (cần quyền workflow)
- Không lộ bí mật

**Ngoài phạm vi:** Tự gán sprint, sửa milestone.

## 2. Chuẩn bị

- Kho có `CONTRIBUTING.md` hoặc issue template giải thích nghĩa nhãn
- `AGENTS.md` mô tả hệ nhãn
- Token chỉ đọc hoặc `issues: write` hạn chế

## 3. Quy trình (tóm tắt EPXV)

**Khám phá:** `@.github/ISSUE_TEMPLATE/` và phân bố nhãn của 10 issue closed gần nhất.

**Lập kế hoạch:** Định nghĩa JSON schema: `{ "labels": [], "priority": "P0-P3", "needs_security": bool, "rationale": "" }`

**Thực thi:** `codex exec` truyền issue title + body (chú ý khử [prompt injection](/guide/team-enterprise/security/prompt-injection/)).

**Kiểm chứng:** Dùng 3 fixture issue lịch sử so với nhãn thủ công; tỷ lệ khớp > 80% rồi mới lên production.

## 4. Thất bại và phục hồi

- Model gợi ý nhãn sai: người ghi đè + đưa phản ví dụ vào few-shot trong prompt
- Body issue độc hại: strip HTML, giới hạn độ dài, không thực thi «lệnh» trong body

## 5. Đóng gói lại

- Nối [Webhook](/guide/developer-platform/webhooks/overview/) với hệ thống ticket nội bộ (tùy chọn)
- Rút kinh nghiệm ghi vào [mẫu case](/cases/use-cases/case-study-template/)

## 6. Chương liên quan

- [Tích hợp GitHub](/guide/integrations/github/)
- [Mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo use cases tự động hóa bug triage / review công khai hiện tại trên OpenAI Developers, cùng các chương phê duyệt thủ công, Webhook, tích hợp GitHub và tự động hóa nhóm đã kiểm chứng của sổ tay; trang này chỉ xác nhận mô hình tự động hóa ổn định “tạo gợi ý nhãn có cấu trúc, giữ quyết định cuối của người”.  
**Kiểm chứng gần nhất:** 2026-07-26
