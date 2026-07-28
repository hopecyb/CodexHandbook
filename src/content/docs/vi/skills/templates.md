---
title: Thư mục templates/
description: Cung cấp template đầu ra và khung báo cáo trong Skill.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`templates/` không chỉ là thư mục"tiết kiệm chút thời gian trình bày". Tác dụng thực tế hơn là làm đầu ra của Skill ổn định hơn, không phải mỗi lần ứng biến.

Nếu `references/` thiên về"tham chiếu gì lúc đầu vào", thì `templates/` thiên về "đầu ra trông thế nào". Kết quả cần cấu trúc cố định, dễ đối chiếu lại đều phù hợp đặt ở đây.

# Thư mục templates/

`templates/` chứa định dạng đầu ra mà Skill tái dùng khi chạy, ví dụ báo cáo review, khung changelog, bảng so sánh nghiên cứu.

## Ví dụ

```text
review-skill/
├── SKILL.md
└── templates/
    └── review-report.md
```

Trong `SKILL.md` chỉ dẫn:"Xuất kết luận review theo cấu trúc templates/review-report.md."

## Nó đang làm gì

- `SKILL.md` chịu quy trình
- `templates/` chịu hình dạng kết quả

Cũng có thể hiểu thẳng:

- Skill quyết định"làm thế nào"
- template quyết định"cuối cùng trình bày thế nào"

Điều này giảm hai vấn đề thường gặp:

- Mỗi lần cấu trúc đầu ra khác nhau
- Thông tin thì có, nhưng người khác khó đọc, khó so, khó đối chiếu lại

## Khi nào đáng dùng `templates/`

Nếu bạn thấy một loại kết quả mỗi lần đều muốn trông gần giống nhau, thì phù hợp đặt template, ví dụ:

- Báo cáo review
- changelog
- Bảng so sánh nghiên cứu
- Checklist phát hành

Lần đầu làm Skill không nhất thiết phải có `templates/`.
Nhưng hễ bắt đầu lặp lại"hãy xuất theo cấu trúc này", thì đáng tách riêng.

## Hiểu lầm thường gặp

### 1. template chỉ để kết quả đẹp hơn

Không chỉ đẹp hơn — kết quả cũng ổn định hơn, dễ so sánh hơn, và tiện đối chiếu lại hơn.

### 2. Có template rồi thì Skill không cần nói rõ yêu cầu đầu ra

Vẫn không được.

`SKILL.md` vẫn nên nói khi nào dùng template, những trường nào bắt buộc điền.

### 3. Mọi đầu ra đều đáng làm template

Không nhất thiết.

Nếu một loại kết quả gần như không lặp, hoặc cấu trúc mỗi lần khác nhiều, ép làm template đôi khi lại bó buộc.

## Khi nào đáng tạo riêng `templates/`

Nếu liên tiếp hai ba lần đều lặp"xuất theo cấu trúc này", thì đáng làm thành `templates/`.

Giá trị cốt lõi của `templates/` là làm cấu trúc đầu ra ổn định, sau đó cũng dễ tái dùng hơn.
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở Kiểm chứng:** Runtime Codex hiện tại hỗ trợ hướng dẫn dùng file kèm trong kỹ năng; trang này bàn về cách viết template đầu ra ổn định, không phụ thuộc giao diện client hay quy trình cài đặt hiện tại.  
**Kiểm chứng gần nhất:** 2026-07-26
