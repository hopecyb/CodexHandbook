---
title: "Case: bảng so sánh tính năng đối thủ"
description: Nghiên cứu có trích dẫn và đầu ra bảng — quy trình người không phải kỹ sư cũng tái sử dụng được.
locale: vi
source_locale: zh-CN
source_revision: d90f5f1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Sản phẩm, vận hành, nhà nghiên cứu |
| Client | App hoặc CLI |
| Thời gian ước tính | 45 phút |
| Ngày kiểm chứng | 2026-07-25 |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Tạo bảng so sánh 3–5 đối thủ (tính năng, manh mối giá, kịch bản phù hợp); mỗi kết luận kèm nguồn.

**Tiêu chí thành công:**

- Bảng Markdown + đánh dấu «cần xác nhận»
- Không bịa giá và số phiên bản
- Không ghi bí mật nội bộ vào tài liệu công khai

## 2. Chuẩn bị

- Làm rõ chiều so sánh (viết sẵn trong prompt hoặc `@brief.md`)
- Bật [tìm kiếm web](/vi/guide/tools/web-search/) (nếu sản phẩm hỗ trợ)

## 3. Quy trình

Theo [nghiên cứu có nguồn trích dẫn](/vi/cases/workflows/research-with-sources/):

```text
So sánh tính năng «cộng tác nhóm» của ba bên A/B/C:
Mỗi chiều 1–2 câu giải thích + URL nguồn;
Tài liệu chính thức ưu tiên hơn blog;
Giá không kiểm chứng được thì ghi «cần xác nhận»;
Xuất bảng markdown; không sửa tệp khác trong kho.
```

**Kiểm chứng:** Người mở 3 URL; kiểm ngày tháng với [chính sách kiểm chứng](/vi/guide/start-here/handbook-version-policy/).

## 4. Thất bại và phục hồi

- Nguồn xung đột: yêu cầu trình bày song song hai cách nói, không ép thống nhất
- Ngữ cảnh quá dài: tách thành «trước A vs B, rồi thêm C»

## 5. Đóng gói lại

- Đóng gói mẫu bảng so sánh vào thư mục mẫu hoặc knowledge base của nhóm
- Có thể thành Skill: `source-backed-research`

## 6. Chương liên quan

- [Ưu tiên Artifact](/vi/cases/workflows/artifact-first-work/)
- [Kiểm chứng nguồn](/vi/guide/quality/validate-sources/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương nghiên cứu có trích dẫn, tìm kiếm web, kiểm chứng nguồn và chính sách phiên bản đã kiểm chứng của sổ tay; nội dung trang giới hạn ở cấu trúc case nghiên cứu ổn định “tạo bảng so sánh đối thủ có nguồn”, không đóng cứng giá hay phiên bản sản phẩm cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
