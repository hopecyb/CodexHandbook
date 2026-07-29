---
title: Bài trình bày
description: Tạo, chỉnh bản và xuất slide và bài diễn — ước định cấu trúc, master và ghi chú diễn thuyết.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

Bài trình bày (PPT, Keynote, Google Slides, Marp/Reveal v.v.) nhấn mạnh **cấu trúc tường thuật** và **nhất quán hình ảnh**. Agent giỏi đưa dàn ý và bản nháp; master và quy chuẩn thương hiệu vẫn cần người nắm.

Dùng Codex làm bài trình bày, giá trị nhất là dựng trước cấu trúc, thứ tự trang và logic kể; bản cuối vẫn bạn tự thu.

## Nội dung trang này

- Quy trình khuyến nghị khi dùng Codex làm slide
- Chọn định dạng (`.pptx`, slide Markdown) thế nào
- Tránh «mỗi trang một phong cách đứt đoạn»

## Chốt định dạng giao trước

| Định dạng | Phù hợp |
|---|---|
| Marp / Slidev / reveal.md | Lập trình viên, thân thiện quản lý phiên bản |
| `.pptx` | Báo cáo kinh doanh, chia sẻ với khách |
| Google Slides | Cộng tác thời gian thực (thường qua xuất hoặc MCP) |
| Xuất PDF | Phát hành chỉ đọc |

Khóa cứng định dạng ở đầu tác vụ, tránh Agent trộn nhiều chuỗi công cụ.

Chọn theo đối tượng giao cuối:

- Cần khách, sếp hoặc đồng nghiệp mở sửa trực tiếp: thường là `.pptx`
- Cần quản lý phiên bản cùng mã: thường là slide Markdown
- Chỉ cần bản đọc: thường cuối cùng xuất PDF

## Quy trình khuyến nghị

```text
1. Dàn ý: đối tượng, thời lượng, 3～5 thông điệp cốt lõi
2. Tiêu đề mỗi trang + 3 bullet, điểm ghi chú diễn thuyết
3. Chọn công cụ tạo bản nháp
4. Người chỉnh master, biểu đồ, nguồn dữ liệu
5. Xuất PDF tập diễn và bấm giờ
```

Khớp [Khám phá—Kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/): giai đoạn dàn ý nghiệm thu trước rồi mới điền chi tiết.

## Vì sao bài trình bày tốt nhất kiểm soát cấu trúc trước

Không kiểm soát cấu trúc trước, Codex dễ trải nhiều trang nhưng nội dung cũng dễ:

- Thứ tự loạn
- Số trang mất kiểm soát
- Mỗi trang như poster độc lập, không giống cùng một báo cáo

Thường đẩy theo 3 lớp này ổn hơn:

1. Chốt trước “bài trình bày này thật sự phải nói rõ gì”
2. Rồi chốt “mỗi trang chịu trách nhiệm một câu thông điệp cốt lõi nào”
3. Cuối cùng mới để Agent giúp điền văn bản, chú thích biểu đồ và ghi chú diễn thuyết

## Hiểu lầm thường gặp

### 1. PPT càng hoa thì diễn đạt càng mạnh?

Nhiều khi thứ thật sự ảnh hưởng hiểu là:

- Tiêu đề có nói rõ trọng tâm trong một câu không
- Giữa trang với trang có quan hệ đẩy tiến không
- Dữ liệu có nguồn không

### 2. Agent đã tạo được cả bản nháp thì không cần người nắm?

Cũng không.  
Những phần sau tốt nhất nhất định người đi qua một lần:

- Thương hiệu công ty và master
- Kết luận then chốt
- Số liệu và biểu đồ
- Bản gửi đối ngoại

### 3. Một trang càng đầy nội dung càng thấy thông tin đủ?

Thường ngược lại khó nói hơn.  
Nếu một trang nhồi quá nhiều bullet, hình và kết luận, khán giả khó nắm trọng tâm ngay.

## Thứ tự làm thường dùng

Nếu giờ muốn để Codex giúp làm một bài trình bày, có thể đưa yêu cầu theo thứ tự:

1. Nói trước đối tượng là ai
2. Rồi nói thời lượng diễn thuyết
3. Rồi nói 3 điểm bạn muốn đối phương mang đi
4. Để nó đưa dàn ý trước
5. Dàn ý xác nhận rồi mới để nó triển khai từng trang
6. Cuối cùng mới bổ sung ghi chú diễn thuyết, yêu cầu hình ảnh và định dạng xuất

Theo thứ tự này thường dễ thu hơn: kiểm soát cấu trúc trước, rồi văn bản, cuối cùng mới kiểu dáng.

## Điểm Prompt

- **Đối tượng**: đồng nghiệp kỹ thuật vs quản lý, quyết định độ sâu thuật ngữ
- **Trần số trang**: tránh 80 trang rỗng
- **Thương hiệu**: màu chính, đường dẫn logo, cấm clipart (nếu công ty có quy chuẩn)
- **Biểu đồ dữ liệu**: ghi nguồn tệp dữ liệu, yêu cầu cập nhật được chứ không bịa từ ảnh chụp

Cũng có thể nói yêu cầu theo giọng này:

> “Trước hết giúp tôi làm dàn ý trong 10 trang, đối tượng là quản lý không kỹ thuật, mỗi trang chỉ giữ một kết luận cốt lõi, cuối cùng bổ sung ghi chú diễn thuyết.”

Yêu cầu kiểu này thường dễ ra bản còn mài tiếp được hơn “làm một PPT cao cấp”.

Nhu cầu ảnh xem [Hình ảnh và ảnh chụp màn hình](/guide/files-and-artifacts/images-and-screenshots/); ảnh tạo thuần xem [Tạo ảnh](/guide/tools/image-generation/).

## Nghiệm thu

- Cỡ chữ đọc được ở độ phân giải chiếu
- Animation vừa phải (quá nhiều animation khó duy trì)
- Số liệu khớp [Xác minh nguồn](/guide/quality/validate-sources/)
- Ghi chú diễn thuyết có đủ không (nếu cần)

## Phần nào phù hợp giao Codex nhất, phần nào tốt nhất bạn quyết

| Phù hợp giao Codex hơn | Tốt nhất người nắm |
|---|---|
| Tách trang dàn ý | Diễn đạt kết luận cuối |
| Bản nháp tiêu đề trang | Nhất quán thương hiệu |
| Bản nháp ghi chú diễn thuyết | Dữ liệu nhạy cảm |
| Văn bản chú thích biểu đồ | Bản phát hành đối ngoại |

Phân công vậy thường tiết kiệm thời gian hơn, cuối cùng cũng dễ kẹp chất lượng.

## Lỗi thường gặp

- Không có dàn ý mà «làm một PPT báo cáo quý»
- `.pptx` nhị phân sửa tay lặp lại mà không giữ nguồn Markdown
- Dữ liệu biểu đồ không khớp CSV trong kho
- Một lần để Agent vừa quyết cấu trúc, thiết kế, kết luận và khẩu dữ liệu

## Danh sách nghiệm thu

- [ ] Dàn ý đã người xác nhận rồi mới sinh toàn văn
- [ ] Mở trong môi trường phát mục tiêu không loạn font
- [ ] Dữ liệu then chốt truy được về tệp nguồn

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với các chương ưu tiên artifact, xác minh nguồn, hình ảnh và ảnh chụp, kiểm chứng artifact đã kiểm chứng trong sổ tay; nội dung trang giới hạn ở phương pháp làm bài trình bày ổn định “kiểm soát cấu trúc trước, rồi văn bản, cuối cùng kiểu dáng và xuất”.  
**Kiểm chứng gần nhất:** 2026-07-26
