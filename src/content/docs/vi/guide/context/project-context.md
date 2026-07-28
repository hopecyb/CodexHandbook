---
title: Ngữ cảnh dự án
description: Mô tả dự án và bối cảnh cấp thư mục.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

«Ngữ cảnh dự án» nghĩa là thông tin nền ổn định lâu dài trong dự án này — nhiều tác vụ sẽ dùng đi dùng lại.

Ví dụ:

- Cấu trúc thư mục tổ chức thế nào
- Lệnh thường dùng là gì
- Quy ước phong cách mã thế nào
- Tệp nào đừng sửa tùy tiện
- Xong rồi nghiệm thu bằng cách nào

Nếu mỗi lần đều dựa vào nói miệng tạm thời, vừa mệt vừa dễ sót.

## Nó cụ thể chỉ gì

Ngữ cảnh dự án có thể xem như hướng dẫn «dự án này mặc định cộng tác lâu dài thế nào».

Nó không mô tả lần này cụ thể làm gì, mà báo trước Codex:

- Kho này thường tổ chức thế nào
- Thói quen nào có hiệu lực lâu dài
- Biên nào tốt nhất đừng đụng
- Xong rồi thường kiểm chứng thế nào

Như vậy mỗi lần vào dự án, nó không cần đoán thói quen nhóm từ số không.

## Vì sao chỗ này dễ lỗi

Nhiều người lần đầu dùng Codex nhồi mọi yêu cầu vào tác vụ hiện tại.

Ngắn hạn trông dùng được, nhưng sớm gặp vài vấn đề:

- Mỗi lần phải giải thích lại
- Cách nói không nhất quán giữa các tác vụ
- Một số quy tắc then chốt bị quên
- Hội thoại dài thì nền quan trọng thật sự không nổi

Cách xử lý chia hai loại:

- Đưa **quy tắc hiệu lực lâu dài** vào ngữ cảnh dự án
- Viết **yêu cầu đặc biệt của tác vụ lần này** vào Prompt hiện tại

## Phân với tác vụ hiện tại thế nào

Cách phân đơn giản nhất là hai tầng:

- **Ngữ cảnh dự án**: dự án này vốn làm vậy
- **Prompt tác vụ**: lần này tôi muốn bạn làm gì cụ thể

Ví dụ:

- «Component thống nhất để trong `src/components/`» -> ngữ cảnh dự án
- «Lần này chỉ sửa copy banner trang chủ» -> tác vụ hiện tại

## Hiểu nhầm thường gặp

### 1. Ngữ cảnh dự án viết càng nhiều càng tốt?

Thật sự đáng giá là những thứ:

- Hiệu lực lâu dài
- Nhiều tác vụ sẽ dùng
- Không nói dễ giẫm phải

Nếu nhồi cả chi tiết một lần vào, bản thân mô tả dự án cũng thành nhiễu.

### 2. Mỗi tác vụ nói rõ là được — không cần ngữ cảnh dự án?

Ngắn hạn dùng được, dài hạn rất mệt.

Bạn sớm gặp:

- Lặp lại cùng câu mỗi lần
- Cách viết không nhất quán giữa tác vụ
- Quy tắc lần này nói rồi, lần sau quên

### 3. Ngữ cảnh dự án có hạn chế quá cứng không?

Không — nếu bạn coi nó là quy tắc mặc định lâu dài, không phải lệnh chết không được đụng.

Yêu cầu đặc biệt thật sự vẫn nên viết trong tác vụ hiện tại.

## Vị trí thường để

Đưa ước định ổn định vào mô tả dự án, ví dụ `AGENTS.md` hoặc hướng dẫn dự án sản phẩm cung cấp:

- Cấu trúc thư mục
- Lệnh thường dùng
- Phong cách mã
- Mục cấm

Prompt tác vụ chỉ viết **khác biệt lần này**; nền dài lặp lại chìm xuống cấp dự án. Cấu hình sâu nằm ở cột mốc `06-customization` sau.

## Cách phán có nên đưa vào ngữ cảnh dự án

Nếu một mô tả thỏa hai điều sau, đáng cân nhắc đưa vào ngữ cảnh dự án:

1. Lần sau khả năng cao còn dùng
2. Quên sẽ lỗi lặp hoặc tốn thời gian

## Khi sắp xếp ưu tiên để gì

Thường nên chìm xuống trước:

- Lệnh thường dùng
- Ước định thư mục
- Phong cách mã
- Vùng cấm sửa
- Cách kiểm chứng mặc định

Mọi mô tả lần sau khả năng cao còn dùng đều đáng chìm vào ngữ cảnh dự án — không cần gõ lại mỗi lần.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ nêu cách lắng đọng ngữ cảnh lâu dài cấp dự án; khái niệm, ví dụ và diễn đạt biên đã kiểm lại, và phần thân không phụ thuộc sự thật sản phẩm dễ đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
