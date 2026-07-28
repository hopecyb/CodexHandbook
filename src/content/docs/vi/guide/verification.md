---
title: Kiểm chứng
description: Rà soát Diff, chạy kiểm thử, kiểm chứng nguồn và định nghĩa tiêu chí hoàn thành.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 17
---

# Kiểm chứng

Nhiều người mới lần đầu dùng Codex, sai dễ nhất là **thấy nó nói đã xong thì coi như thật sự đã xong**.

Kiểm chứng chính là: không nhìn nó nói thế nào — mà nhìn kết quả có thật sự thỏa yêu cầu của bạn không.

Đầu ra của Codex phải kiểm tra được. Kiểm chứng không phải bước tùy chọn — mà là một phần của vòng khép kín mỗi tác vụ.

## Kiểm chứng thực sự đang xem gì

Dù bạn đang sửa mã, viết tài liệu hay tra cứu — cuối cùng đều phải trả lời cùng một câu hỏi:

> **Việc này bây giờ rốt cuộc là «trông gần đúng», hay «đã giao được»?**

Nhiều lần làm lại không phải vì model hoàn toàn làm sai, mà vì:

- Sửa vào chỗ không nên sửa
- Sửa sót một nửa
- Nói đã tra tài liệu, nhưng nguồn không đáng tin
- Trang mở được, nhưng quy trình thực tế chưa chạy thông
- Tài liệu viết ra rồi, nhưng người mới không làm theo được

Vì vậy vai trò của kiểm chứng là **khóa rủi ro trước khi giao hàng**.

## Hiểu nhầm thường gặp

### 1. Chỉ cần chạy được là tính hoàn thành

«Chạy được» chỉ nói nó chưa báo lỗi ngay — không có nghĩa:

- Logic đúng
- Phạm vi đúng
- Không đưa hồi quy
- Khớp kết quả bạn vốn cần

### 2. Model tự nói «đã kiểm chứng» thì có thể yên tâm

Bạn phải xem nó **thật sự đã làm kiểm chứng gì**. Ví dụ:

- Có thật sự chạy kiểm thử không
- Có thật sự đọc Diff không
- Có thật sự mở artifact để kiểm không
- Có đưa nguồn truy được không

### 3. Chỉ lập trình viên mới cần kiểm chứng?

Viết bài, làm bảng, tạo cấu hình, sắp xếp tài liệu, viết mô tả PR — đều cần kiểm chứng. Chỉ khác cách kiểm chứng.

## Nếu chưa có quy trình riêng, có thể kiểm theo thứ tự này

Nếu giờ bạn chưa có quy trình riêng, có thể dùng thứ tự này trước:

1. Xem kết quả có lệch chủ đề không
2. Xem phạm vi thay đổi có quá lớn không
3. Chạy các kiểm tra tự động được
4. Cuối cùng nhìn bằng góc người — có giao được không

Có thể hiểu là:

- **Hướng có đúng không**
- **Sửa có nhiều không**
- **Máy đã kiểm chưa**
- **Người thật sự dám nhận không**

## Chủ đề cốt lõi

- [Rà soát Diff](/guide/quality/review-diffs/) — đọc Diff, xác nhận phạm vi và rủi ro
- [Chạy kiểm thử](/guide/quality/run-tests/) — hồi quy tự động
- [Kiểm chứng artifact](/guide/quality/verify-artifacts/) — tài liệu, cấu hình, sản phẩm tạo ra
- [Kiểm chứng nguồn](/guide/quality/validate-sources/) — kết luận dạng nghiên cứu truy được
- [Xử lý bất định](/guide/quality/handle-uncertainty/) — khi model không chắc thì sao
- [Định nghĩa hoàn thành](/guide/quality/definition-of-done/) — thế nào gọi là «đã xong»

## Tác vụ khác nhau, trọng tâm kiểm chứng khác nhau

- **Sửa mã**: xem Diff, rồi chạy kiểm thử, rồi qua tay các đường then chốt
- **Viết tài liệu**: xem có phù hợp độc giả mục tiêu không, liên kết dùng được không, bước có thật sự làm theo được không
- **Làm nghiên cứu**: xem nguồn có thật không, có mới không, kết luận có vượt bằng chứng không
- **Tạo cấu hình hoặc script**: xem tiền đề môi trường, phạm vi quyền, cách khôi phục sau khi thất bại

Nếu không biết nên bắt đầu từ mục nào, mặc định đọc [Định nghĩa hoàn thành](/guide/quality/definition-of-done/).

Kiểm chứng là để xác nhận kết quả này thật sự dùng được, dám dùng, giao đi được.

Cách viết tiêu chí nghiệm thu trong Prompt xem [Định nghĩa tiêu chí hoàn thành](/prompts/define-done/). Case đầu-cuối xem [Case thực chiến](/cases/).

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang chủ OpenAI Developers hiện vẫn nhấn mạnh dùng Codex để xây, kiểm thử, rà soát và giao thay đổi; trang này tách kiểm chứng thành rà soát Diff, chạy kiểm thử, kiểm chứng nguồn và định nghĩa hoàn thành — đã đối chiếu chéo với các chương chất lượng nội bộ.  
**Kiểm chứng gần nhất:** 2026-07-26
