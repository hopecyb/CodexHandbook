---
title: Dùng Skill
description: Kích hoạt Skill tường minh và ngầm, cùng điểm then chốt khi viết description.
locale: vi
source_locale: zh-CN
source_revision: fa190cf
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Khi mới làm quen Skill, hiểu lầm thường gặp là"cài xong là nó tự có hiệu lực". Dùng Skill nghĩa là để Codex làm việc theo một bộ quy trình đã viết sẵn.

Skill vừa có thể được bạn **chỉ tên tường minh**, vừa có thể được model **tự chọn** trong kịch bản phù hợp. Phân biệt hai cách kích hoạt giúp giảm vòng lặp điều tra.

# Dùng Skill

## Cách kích hoạt

1. **Tường minh**: trong môi trường hỗ trợ, gọi bằng `$skill-name` (tên khớp `name` trong frontmatter)
2. **Ngầm**: model dựa trên ngữ nghĩa `description` để quyết định Tác vụ hiện tại có phù hợp không

## Phân biệt hai cách kích hoạt

- **Kích hoạt tường minh**: bạn nói thẳng"dùng Skill này"
- **Kích hoạt ngầm**: bạn không chỉ tên, nhưng mô tả Tác vụ rất giống kịch bản áp dụng của nó

Khi mới thử Skill, nên ưu tiên **kích hoạt tường minh**. Như vậy dễ hơn để biết:

- Skill đã được nhận diện chưa
- Hành vi có đúng kỳ vọng không
- Tên và mô tả có viết đúng không

## Ví dụ

```text
$pr-review Hãy review các thay đổi chưa commit hiện tại của tôi
```

Hoặc ngôn ngữ tự nhiên:"Review diff theo thói quen nhóm, tập trung vào kiểm thử."

## Hiểu lầm thường gặp

### 1. Viết Skill xong là chắc chắn tự kích hoạt

Kích hoạt tự động phụ thuộc `description` có rõ không, và Tác vụ hiện tại có đủ giống kịch bản áp dụng không.

### 2. Kích hoạt bằng ngôn ngữ tự nhiên và `$name` luôn giống nhau

Hai cách không nhất thiết giống hệt.

`$name` rõ ràng hơn, phù hợp kiểm tra và buộc dùng. Ngôn ngữ tự nhiên tiện hơn, nhưng đôi khi model chọn nhầm Skill hoặc không dùng.

### 3. Skill không kích hoạt thì chắc chắn nó có lỗi

Cũng có thể chỉ là:

- Tên sai
- `description` quá chung
- Mô tả Tác vụ không trúng từ kích hoạt

Khi điều tra đừng chỉ nhìn"file có tồn tại không", hãy xem"nó có giống một công cụ sẽ được chọn không".

## Thứ tự kiểm thử thường dùng

Nếu muốn chạy thông một lần, có thể thử:

1. Gọi tường minh bằng `$skill-name` trước
2. Xem đầu ra có đúng kỳ vọng không
3. Rồi chỉnh `description`
4. Cuối cùng mới thử xem ngôn ngữ tự nhiên có kích hoạt được không

Cách này tách"Skill bản thân có vấn đề"và"điều kiện kích hoạt tự động chưa viết tốt".

## Viết description tốt

- Nói rõ"khi nào dùng"và"khi nào không dùng"
- Gồm từ khóa người dùng có thể nói (review, phát hành, changelog)
- Tránh câu chung chung kiểu"giúp người dùng viết code"
- Đặt kịch bản kích hoạt cốt lõi ở **đầu** (danh sách Skill có ngân sách ký tự)

## Đánh giá description có rõ không

Một tiêu chuẩn hay dùng:  
Đọc xong câu `description` này là biết"khi nào nên dùng, khi nào đừng dùng".

Nếu đọc xong vẫn thấy"có vẻ làm được mọi thứ", thì thường là quá chung.

Thêm khái niệm: [Tổng quan Skills](/vi/skills/overview/).
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở Kiểm chứng:** Runtime Codex hiện tại vẫn hỗ trợ tham chiếu tường minh theo tên kỹ năng và khớp tự động trong kịch bản phù hợp; OpenAI Help"Skills in ChatGPT"cũng xác nhận Skills được dùng tự động khi hữu ích. Trang này tập trung cách kích hoạt và nguyên tắc viết.  
**Kiểm chứng gần nhất:** 2026-07-26
