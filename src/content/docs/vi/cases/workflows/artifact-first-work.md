---
title: Ưu tiên Artifact
description: Thỏa thuận hình thức và đường dẫn Artifact cuối trước, rồi suy ngược bước — phù hợp tài liệu, cấu hình, báo cáo và thành phẩm tương tự.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Ưu tiên Artifact** là làm rõ hình thức và vị trí thành phẩm trước, rồi để Codex suy ngược bước. Phù hợp tài liệu Markdown, OpenAPI, script migration, dàn ý slide và tác vụ đầu ra rõ; cũng có thể kết hợp [làm việc theo đặc tả](/cases/workflows/specification-driven-work/).

## Trọng tâm trang này

- Cách mô tả cấu trúc Artifact thay vì chi tiết quy trình
- Kiểm tra tính nhất quán khi Artifact nhiều tệp
- Khớp năng lực [tệp và Artifact](/guide/files-and-artifacts/)

## Cách làm tối thiểu dùng được

```text
Artifact mục tiêu:
- docs/api/auth.md (gồm 3 mục: tổng quan, endpoint, mã lỗi)
- Phong cách khớp @docs/api/users.md

Trước hết xuất dàn mục lục và điểm chính mỗi mục; chưa viết toàn văn;
Tôi xác nhận rồi mới sinh, và tự kiểm liên kết nội bộ còn hiệu lực.
```

## Quy trình đề xuất

```text
Định nghĩa danh sách Artifact (đường dẫn + định dạng + tham chiếu mẫu)
    → Dàn ý hoặc tệp khung
    → Người xác nhận
    → Điền nội dung + liên kết chéo
    → Kiểm chứng (lint, kiểm tra liên kết, xem trước)
```

Artifact trực quan có thể yêu cầu ảnh chụp hoặc mô tả xem trước; xem [kiểm chứng Artifact](/guide/quality/verify-artifacts/).

## Lỗi thường gặp

- Đường dẫn Artifact lệch quy ước kho (đặt sai thư mục)
- Chỉ sinh một tệp, bỏ cập nhật điều hướng và index
- Không đối chiếu mẫu, phong cách đứt đoạn
- Artifact nhị phân (pptx/docx) không nói cách người mở để nghiệm thu

## Ranh giới an toàn

- Nếu thành phẩm chứa nội dung bản quyền bên thứ ba, cần người kiểm tra tuân thủ
- Không ghi đè đường dẫn cấu hình production; trước hết xuất trên nhánh hoặc dưới `draft/`

## Checklist nghiệm thu

- [ ] Mọi tệp đã khai báo tồn tại và mở được
- [ ] Định dạng khớp mẫu tham chiếu
- [ ] Liên kết / mục lục / Frontmatter hợp lệ
- [ ] Khớp [định nghĩa hoàn thành](/prompts/define-done/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương tệp và Artifact, định nghĩa hoàn thành, kiểm chứng Artifact đã kiểm chứng của sổ tay; nội dung trang tập trung phương pháp viết và giao ổn định “thỏa thuận thành phẩm trước, rồi suy ngược bước”.  
**Kiểm chứng gần nhất:** 2026-07-26
