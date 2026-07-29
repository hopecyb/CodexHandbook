---
title: Tạo ảnh
description: Tạo hoặc chỉnh ảnh trong tác vụ Codex — Prompt, định dạng và nghiệm thu.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

Trong một số tình huống, Codex có thể gọi năng lực **tạo ảnh**: minh họa, bản nháp icon, sơ đồ khái niệm UI, sơ đồ. Kết quả tạo ra nên xem là **artifact chờ nghiệm thu**, không phải tài sản thương hiệu đưa lên production ngay.

Nó phù hợp đưa bản nháp hình trước; không phù hợp coi thẳng là sản phẩm cuối.

## Nội dung trang này

- Khi nào tạo ảnh trong Codex vs dùng công cụ chuyên nghiệp
- Cách viết Prompt ảnh và ràng buộc
- Bản quyền, thương hiệu và quản lý tệp

## Tình huống phù hợp

| Phù hợp | Không phù hợp |
|---|---|
| Bản nháp ảnh blog, sơ đồ tài liệu nội bộ | Vật liệu đối ngoại bị ràng buộc brand book nghiêm ngặt |
| Khám phá nhanh không khí bố cục UI | Giao thiết kế cần khớp pixel |
| Icon ví dụ trong tutorial | Cảnh có chân dung người thật chưa được ủy quyền |

Bổ sung với [Prompt kèm ảnh](/prompts/prompting-with-images/): trang đó nói ảnh **đầu vào**; trang này nói ảnh **đầu ra**.

## Tạo ảnh phù hợp làm gì

Tạo ảnh phù hợp hơn với:

- Đưa hướng nhanh
- Giúp bạn thấy một khái niệm hình ảnh
- Cho bài viết, tài liệu, prototype một bản phác dùng tạm được

Các mục đích sau không phù hợp giao thẳng kết quả tạo:

- Giả vờ đây là vật liệu thương hiệu chính thức
- Giả vờ đây là bản thiết kế chính xác
- Giả vờ đây là hình cuối có thể phát hành đối ngoại ngay

## Quy trình khuyến nghị

1. Nói rõ mục đích, tỷ lệ kích thước, từ khóa phong cách (tránh chất đống tên phong cách xâm phạm)
2. Yêu cầu định dạng đầu ra (PNG/SVG nếu hỗ trợ) và đường dẫn lưu
3. Sau khi tạo, [kiểm chứng artifact](/guide/quality/verify-artifacts/): mở tệp, kiểm độ phân giải và khả năng đọc
4. Trước phát hành đối ngoại, để thiết kế hoặc pháp lý rà lại

## Hiểu lầm thường gặp

### 1. Chỉ cần hình đẹp là dùng được?

Bạn còn phải xem:

- Cảnh có khớp mục đích không
- Chi tiết có kỳ dị không
- Chữ có loạn không
- Phong cách có khớp nội dung của bạn không

### 2. Chỉ cần một câu “giúp tôi tạo một tấm ảnh” là đủ?

Thường chưa đủ.  
Ít nhất phải nói rõ:

- Mục đích
- Khổ hoặc tỷ lệ kích thước
- Hướng phong cách
- Có cần chữ không
- Định dạng tệp

### 3. Tạo ảnh có thay được nhà thiết kế?

Nó gần hơn với:

- Công cụ khám phá giai đoạn đầu
- Công cụ ảnh minh họa nội dung
- Công cụ phác thảo khái niệm

chứ không phải thay thế giao thiết kế nghiêm ngặt.

## Có thể viết thế nào

Có thể yêu cầu theo cấu trúc:

1. Ảnh này dùng để làm gì
2. Cần ngang, dọc hay vuông
3. Muốn khí chất và màu sắc thế nào
4. Có xuất hiện chữ không
5. Sau khi xuất bạn định kiểm thế nào

## Tệp và kho

- Ảnh lớn đặt `assets/` hoặc CDN, đánh giá dung lượng Git
- Trong PR nói rõ Prompt tạo và phiên bản mô hình (kiểm toán nội bộ)
- Xem [Hình ảnh và ảnh chụp màn hình](/guide/files-and-artifacts/images-and-screenshots/)

## An toàn và tuân thủ

- Đừng tạo nội dung gây hiểu nhầm chứa dấu hiệu nhạy cảm, giấy tờ giả, chân dung người khác
- Chính sách doanh nghiệp có thể cấm một số chủ đề; tuân thủ [chấp nhận sử dụng](https://openai.com/policies/) và quy định nội bộ

## Nguồn tham khảo
- OpenAI Help Center: Images in ChatGPT
- OpenAI Academy: Creating images with ChatGPT
## Lỗi thường gặp

- Commit thẳng ảnh 4K chưa nén vào kho
- Dùng ảnh tạo giả ảnh chụp thật hoặc logo chính thức
- Không ràng buộc «không chữ» trong Prompt dẫn tới phụ đề loạn

Tạo ảnh phù hợp đưa hướng và bản nháp trước; khi giao đối ngoại vẫn phải nghiệm thu theo chuẩn artifact chính thức.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / Cloud (tùy phiên bản)  
**Căn cứ kiểm chứng:** Đã rà lại tình huống phù hợp, cách viết Prompt và ranh giới nghiệm thu theo tài liệu tạo và chỉnh ảnh chính thức của OpenAI; phần thân giữ kết luận thận trọng “ưu tiên bản nháp, artifact chính thức cần rà lại”.  
**Kiểm chứng gần nhất:** 2026-07-26
