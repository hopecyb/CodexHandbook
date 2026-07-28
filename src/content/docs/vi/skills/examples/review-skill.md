---
title: 'Ví dụ: Skill review'
description: Ví dụ Skill dựa trên pr-review — phù hợp nhóm tái dùng hoặc chỉnh sửa.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Ví dụ: Skill review

Ví dụ này tương ứng `pr-review` trong [Tạo Skill đầu tiên](/skills/create-your-first-skill/) — có thể chỉnh theo nhu cầu nhóm.

## SKILL.md

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
4. Xuất: 🔴 Chặn / 🟡 Đề xuất / 🟢 Đạt

## Cấm
- Không git push
- Không sửa public API chưa thảo luận
```

## Thử dùng

```text
$pr-review Hãy review các thay đổi chưa commit hiện tại của tôi
```
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở Kiểm chứng:** Review diff và xuất kết luận có cấu trúc vẫn là kịch bản dùng điển hình của Codex hiện tại; trang này cung cấp khung `SKILL.md` minh họa, không phụ thuộc giao diện hay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
