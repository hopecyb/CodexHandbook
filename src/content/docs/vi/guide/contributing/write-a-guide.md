---
title: Viết trang hướng dẫn
description: Cấu trúc, frontmatter và quy ước liên kết chéo cho nội dung sổ tay mới.
locale: vi
source_locale: zh-CN
source_revision: 9b6d47f
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 10
reviewed_at: 2026-08-26
---

Trang này giải thích cách thêm hoặc viết lại trang **kiểu hướng dẫn** trong `src/content/docs/` (không phải case thuần, không phải bảng tham chiếu thuần).

## Nội dung trang này

Các điểm kẹt thường gặp gồm:

- Không biết một trang hướng dẫn nên trông thế nào
- Không chắc mình đang viết “tutorial”, “quy chuẩn”, hay “tóm tắt mục lục”
- Không biết viết thế nào mới thật sự giúp người mới

Ở đây tách các vấn đề đó để bạn viết được trang hướng dẫn dễ duy trì sau này và độc giả cũng đọc hiểu.

## Vai trò của trang hướng dẫn

“Trang hướng dẫn” ở đây không phải chất đống tài liệu là xong. Nó phải giúp độc giả từ “tôi biết chủ đề này tồn tại” đến “tôi đại khái biết khi nào dùng, xem gì trước, tránh hố nào”.

Vậy thường nó không chỉ là danh sách kiến thức, cũng không chỉ là danh sách lệnh, mà còn phải để độc giả biết bước tiếp theo đi đâu.

## Frontmatter

```yaml
---
title: Tiêu đề trang
description: Một câu nói rõ vấn đề trang này giải quyết
---
```

Có thể dùng chân trang thống nhất ở cuối (khớp trang hiện có):

```markdown
---

**Trạng thái:** planned | draft | review | verified | outdated | archived
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud
**Kiểm chứng gần nhất:** YYYY-MM-DD
```

## Cấu trúc khuyến nghị

Chọn mục theo [mẫu tích hợp nguồn ngoài](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/external-source-integration.md#6-推荐页面模板), tổ hợp thường gặp:

- Trang giải quyết vấn đề gì
- Phù hợp ai
- Cách làm tối thiểu dùng được
- Quy trình khuyến nghị
- Lỗi thường gặp
- Ranh giới an toàn
- Danh sách nghiệm thu
- Nguồn tham khảo

Trang thao tác sản phẩm có thể nghiêng về bước; trang khái niệm có thể nghiêng về bảng và sơ đồ.

## Hiểu lầm thường gặp

### Không phải trang nào cũng viết thành bách khoa

Lần đầu viết trang hướng dẫn, dễ nhét hết mọi thứ biết vào, kết quả trọng tâm lại mất.

Cách viết phổ biến hơn:

- Nói trước trang chủ yếu giải quyết vấn đề gì
- Rồi nói độc giả dễ hiểu nhầm gì nhất
- Rồi đưa một cách làm hoặc cách phán đoán đủ dùng

Thường giúp người mới hơn là nhồi hết chi tiết một lần.

### Không chỉ nghĩ mình viết được, còn phải nghĩ người khác đọc thế nào

Bạn biết ngữ cảnh, nhưng độc giả lần đầu không biết.

Vậy cần cố bổ sung cầu nối:

- Trang phù hợp ai
- Đọc xong nên giải quyết được gì
- Nếu chỉ muốn bắt đầu trước, nắm điểm nào trước

### Trang hướng dẫn không thay thế tài liệu chính thức

Sổ tay cộng đồng giúp độc giả hiểu, nối và áp dụng, nhưng sự kiện hay thay đổi vẫn phải quay về tài liệu chính thức để kiểm chứng.

## Liên kết chéo

- Liên kết nội bộ dùng đường dẫn gốc: `/cases/workflows/explore-plan-execute-verify/`
- Liên kết tới trang có thẩm quyền, tránh lặp đoạn dài
- Trang mới đăng ký trong `index.md` của chương và sidebar `astro.config.mjs`

## Giọng văn

- Tiếng Việt, hướng tới người thực hành
- Thừa nhận sự không chắc chắn («lấy tài liệu chính thức làm chuẩn»)
- Không dùng câu chuyện «Prompt vạn năng»

## Thứ tự viết

Có thể viết theo thứ tự:

1. Viết trước trang thật sự giải quyết vấn đề gì
2. Rồi viết điểm độc giả dễ hiểu nhầm hoặc nhảy bước
3. Rồi bổ sung cách làm tối thiểu, quy trình hoặc cách phán đoán
4. Cuối cùng bổ sung liên kết chéo và nguồn tham khảo

## Kiểm chứng

Trước khi gửi PR, đọc [Kiểm chứng nội dung kỹ thuật](/vi/guide/contributing/verify-technical-content/). Lệnh, giá, quyền và thông tin dễ thay đổi khác phải rà lại.

Trang hướng dẫn tốt không nằm ở “viết đủ tài liệu”, mà ở chỗ để độc giả lần đầu biết trang vì sao tồn tại, xem gì trước, bước tiếp theo đi đâu.

## Nguồn tham khảo
- Tài liệu chính thức OpenAI Codex
```
---

**Trạng thái:** verified  
**Căn cứ kiểm chứng:** Đã rà theo frontmatter tài liệu hiện tại của kho, hệ trạng thái chân trang, thói quen liên kết chéo và cách duy trì sidebar; trang này mô tả quy chuẩn viết và gợi ý cấu trúc nội dung sổ tay, không phụ thuộc chi tiết phiên bản sản phẩm cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
