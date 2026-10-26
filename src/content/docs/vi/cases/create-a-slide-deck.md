---
caseCategory: creation
directoryOrder: 30
title: Tạo tám trang trình chiếu có thể chỉnh sửa từ bài viết
description: Tải bài viết, dàn ý tám trang, PPTX với chữ gốc và bản xem trước để luyện rút gọn câu chuyện, giữ nguồn và kiểm tra bố cục tiếng Trung.
contentType: case
audiences: [creator, beginner]
task: editable-presentation
level: beginner
estimatedMinutes: 75
outputs: [pptx, pdf, png, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: PPTX tham khảo đã được nhập vào phần mềm, kết xuất đủ tám trang và sửa chữ gốc; giới hạn trong môi trường đã ghi, do tác giả tự kiểm tra.
  environment: Artifact Tool JS / Node.js 24.19.0; LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64; Arial Unicode MS, cấu hình rõ thư mục phông hệ thống.
  evidence:
    - label: Quy trình xác minh, sửa phông và phạm vi kiểm tra
      href: /downloads/article-to-slides/validation/record.md
assets:
  - path: /downloads/article-to-slides/article-to-slides-1.0.0.zip
    purpose: Đầu vào, prompt, PPTX, PDF, tám bản xem trước và biên bản xác minh cho bài tập độc lập
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /vi/cases/write-an-article/
  label: Hoàn thành bài viết có nguồn trước
next:
  link: /vi/guide/learning-paths/creator/#4-lưu-hướng-dẫn-tác-vụ-có-thể-dùng-lại
  label: Lưu hướng dẫn tác vụ dùng lại
locale: vi
source_locale: zh-CN
source_revision: "7189374"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: '2026-09-20'
---

Rút một bài viết thành tám trang báo cáo, bàn giao PPTX với chữ có thể sửa, bản xem trước và ghi chú thuyết trình. Giữ lại giới hạn và mâu thuẫn trong nguồn, không thêm số liệu hay biểu đồ bịa để lấp trang.

Mức nhập môn. Dự kiến 60–90 phút là ước lượng biên tập, chưa đo với người đọc. Cần đọc được tệp cục bộ và có công cụ tạo PPTX hoặc phần mềm trình chiếu. Bộ bài tập kèm bài đầu vào, có thể làm riêng hoặc tiếp nối [tình huống viết bài](/vi/cases/write-an-article/).

[Tải bộ đầy đủ v1.0.0 (ZIP)](/downloads/article-to-slides/article-to-slides-1.0.0.zip) · [Xem PPTX chỉnh sửa được](/downloads/article-to-slides/solution/source-backed-writing.pptx) · [Xem PDF](/downloads/article-to-slides/solution/source-backed-writing.pdf)

## Thành phẩm cuối cùng

![Trang đầu của bản tham khảo: kiểm tra bản tóm tắt trước khi mở rộng sử dụng, ghi rõ sản phẩm hư cấu và tư liệu tổng hợp](/downloads/article-to-slides/previews/slide-01.png)

Bản tham khảo dùng hộp văn bản gốc để sửa được chữ quan trọng. Tư liệu, sản phẩm “拾页” và nhân vật “小林” đều là tài liệu giảng dạy hư cấu theo CC0 1.0; không phân phối tệp phông chữ.

| Trang | Chỉ một ý chính | Bản xem trước thực |
|---|---|---|
| 1 | Kiểm tra trước khi quyết định dùng rộng hơn | [Trang tiêu đề](/downloads/article-to-slides/previews/slide-01.png) |
| 2 | Định dạng tệp và bằng chứng đều có giới hạn | [Vấn đề người xem](/downloads/article-to-slides/previews/slide-02.png) |
| 3 | Ba tư liệu có vai trò bằng chứng khác nhau | [Nguồn và bằng chứng](/downloads/article-to-slides/previews/slide-03.png) |
| 4 | Thử nhỏ qua bốn bước | [Phương pháp](/downloads/article-to-slides/previews/slide-04.png) |
| 5 | Bỏ quảng cáo tính năng thiếu căn cứ | [Ví dụ sửa](/downloads/article-to-slides/previews/slide-05.png) |
| 6 | Cài đặt chẩn đoán còn mâu thuẫn | [Giới hạn](/downloads/article-to-slides/previews/slide-06.png) |
| 7 | Lưu kiểm tra, bổ sung điều chưa biết | [Bước tiếp](/downloads/article-to-slides/previews/slide-07.png) |
| 8 | Truy lại nguồn và tính chất tổng hợp | [Trang nguồn](/downloads/article-to-slides/previews/slide-08.png) |

## 1. Đọc đầu vào và chọn mạch báo cáo

Giải nén `article-to-slides/`, đọc `brief.md`, `input/article.md`, `input/claim-map.csv` và `input/unresolved.md`. Đừng sao chép ngay bản tham khảo.

```text
Đọc brief.md và bài viết, bảng sự thật, vấn đề chưa giải quyết trong input/.
Thiết kế tám trang cho cá nhân lần đầu thử công cụ sắp xếp ghi chú, hướng đến bài báo cáo khoảng năm phút.
Mỗi trang ghi một kết luận, điểm chính và ID nguồn vào my-output/outline.md.
Giữ danh tính hư cấu, giới hạn định dạng được hỗ trợ và mâu thuẫn cài đặt chẩn đoán.
Không bịa số độ chính xác, giá hoặc thời gian tiết kiệm; tách gợi ý tác giả khỏi sự thật sản phẩm.
```

Hoàn thành khi đủ tám vai trò trang, mỗi trang một điểm chính và mọi sự thật đều dẫn đến mục nguồn. Năm phút chỉ là mục tiêu, không phải đã thử trình bày. Prompt đầy đủ nằm trong `prompts/01-outline.md`.

## 2. Kiểm tra bố cục bằng hai trang mẫu

Trước tiên làm trang tiêu đề và trang thứ sáu về giới hạn: trang đầu kiểm tra tiêu đề lớn, trang sau kiểm tra phần chữ dày nhất. Phong cách tham khảo dùng xanh đậm, trắng ấm và chữ gốc, không đòi hỏi trang trí.

```text
Theo dàn ý tám trang đã xác nhận, tạo mẫu trang 1 và 6 trước.
Dùng tỷ lệ 16:9, thân bài là hộp chữ gốc, chọn phông tiếng Trung có sẵn trong môi trường.
Ở trang 6 giữ cả P3 “mặc định tắt” và C2 “cài mới mặc định bật”, đánh dấu kết luận chưa xác nhận.
Kết xuất và kiểm tra tiếng Trung, ngắt dòng, lề và khả năng đọc nguồn. Khi bố cục đạt, làm tiếp sáu trang còn lại.
Lưu PPTX, tám bản xem trước, ghi chú từng trang và biên bản xác minh trong my-output/.
```

Bản tham khảo dùng Arial Unicode MS. Nếu hệ thống không có phông đó, chọn phông tiếng Trung hợp pháp, khả dụng và kiểm tra lại bố cục. Thiếu công cụ PPTX có thể nộp dàn ý và ghi khả năng còn thiếu, nhưng chỉ dàn ý thì chưa hoàn thành.

## 3. Kiểm tra khả năng sửa, tám trang và nguồn

Mở PPTX của bạn trong phần mềm trình chiếu, lưu bản sao thử, chọn và đổi chữ quan trọng, lưu rồi mở lại. Xuất bản xem trước từng trang, kiểm tra tiếng Trung, ngắt dòng, che khuất, số trang và ghi chú. Không thay tệp chỉnh sửa được bằng tám hình ảnh chiếm trọn trang.

Bản tham khảo đã được nhập/xuất qua LibreOffice headless. Trong bản sao PPTX tạm, tiêu đề chữ gốc đổi từ “一份” sang “两份” và sau xuất có thể đọc chữ mới. Việc đó không phải thử bấm chỉnh sửa trong GUI và không chứng minh mọi phần mềm giống nhau.

![Trang thứ sáu: hai nguồn ghi cài đặt mặc định trái ngược và kết luận vẫn chưa xác nhận](/downloads/article-to-slides/previews/slide-06.png)

Trang 6 là trọng tâm kiểm tra sự thật: đừng xóa một bên mâu thuẫn hoặc đơn giản hóa thành “mặc định tắt”. Cột trái trang 5 là phản ví dụ do tác giả thiết kế, phải phân biệt với cách viết đúng ở cột phải. Nguồn chi tiết có trong ghi chú PPTX và `solution/slide-notes.md`.

## 4. Kiểm tra tệp tham khảo và ghi lại xác minh của bạn

Trong thư mục bộ đầy đủ, chạy lệnh sau để kiểm tra các tệp tham khảo tải về (Python 3.10+, chỉ thư viện chuẩn):

```sh
python3 validation/check.py
```

Lệnh kiểm tra hash, tám trang, chữ gốc, ghi chú và bản xem trước của bộ tham khảo. Nó không xác minh bài mới trong `my-output/`; hãy kiểm tra bài đó trong phần mềm như trên và ghi phiên bản, phông, kết quả, giới hạn còn lại.

Không chạy được script vẫn có thể mở PPTX/PDF kiểm tra từng trang, nhưng đừng nói đã kiểm tra hash hay cấu trúc. [Biên bản xác minh tham khảo](/downloads/article-to-slides/validation/record.md) nêu phạm vi thực tế.

## Khôi phục khi gặp lỗi

| Hiện tượng | Bước tiếp | Bằng chứng khôi phục |
|---|---|---|
| Tiếng Trung hiện ô vuông | Kiểm tra trình kết xuất đọc được phông tiếng Trung; nếu cần thay trong bản sao | Kết xuất lại tám trang, chữ đọc được |
| Chữ tràn sau đổi phông | Giảm chữ, chỉnh hộp và khoảng trắng nhưng giữ giới hạn chính | Xem trước không cắt hoặc chồng chữ |
| Không chọn riêng được chữ | Dùng đối tượng chữ gốc, không trải PNG toàn trang | Chọn, sửa, lưu, mở lại được trong phần mềm |
| Mâu thuẫn nguồn bị “làm mượt” mất | Kiểm tra P3/C2/C3 và khôi phục hai mô tả cùng nhãn chưa xác nhận | Trang 6 khớp bảng sự thật |
| Tệp không mở hoặc sai số trang | Xuất và nhập lại, giữ tệp lỗi để chẩn đoán | Đủ tám trang, mở bình thường |

Lỗi đầu tiên đã thực sự xảy ra: LibreOffice ban đầu không đọc được phông tiếng Trung của hệ thống. Sau khi chỉ rõ thư mục phông cho quá trình kết xuất, tiếng Trung được phục hồi và tám trang được kiểm tra lại. Không dùng trang thiếu chữ làm bản xem trước cuối.

## Điều kiện hoàn thành và bước tiếp

- PPTX tám trang mở được trong phần mềm bạn đã ghi và chữ quan trọng sửa được.
- Đủ tám bản xem trước, đã kiểm tra tiếng Trung, ngắt dòng và giới hạn từng trang.
- Nguồn, danh tính tổng hợp, gợi ý tác giả và mâu thuẫn chưa giải quyết vẫn rõ.
- Biên bản nêu phép kiểm tra đã làm và chưa làm; thành phẩm ở lại cục bộ.

Tiếp tục [lộ trình người sáng tạo: lưu hướng dẫn dùng lại](/vi/guide/learning-paths/creator/#4-lưu-hướng-dẫn-tác-vụ-có-thể-dùng-lại). Bạn có thể biến bước ổn định thành mẫu riêng rồi học [Biến quy trình thành Skill](/vi/cases/workflows/turn-a-workflow-into-a-skill/).
