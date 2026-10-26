---
title: "Lộ trình người sáng tạo: nguồn tư liệu, bài viết, trình chiếu và tái sử dụng"
description: "Dùng cùng bộ tư liệu để tạo bảng sự thật, bài viết, bản trình chiếu tám trang có thể chỉnh sửa và hướng dẫn tác vụ tái sử dụng, mỗi bước có tài liệu và điều kiện nghiệm thu."
contentType: "path"
audiences:
  - "creator"
  - "beginner"
level: "beginner"
outputs:
  - "markdown"
  - "csv"
  - "pptx"
  - "png"
editorialStatus: "review"
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Đã sắp xếp bốn mốc theo tài liệu bài viết và bản trình chiếu thực tế, đồng thời kiểm tra sự nối tiếp giữa đầu vào và đầu ra. Xác minh tham khảo riêng từng phần nằm trong các tình huống; toàn lộ trình chưa được đo thời gian hoặc kiểm thử người đọc tự hoàn thành."
  evidence:
    - label: "Tài liệu bài viết và biên bản kiểm tra của tác giả"
      href: "/downloads/source-backed-article/validation/record.md"
    - label: "Biên bản môi trường và kết xuất bản trình chiếu"
      href: "/downloads/article-to-slides/validation/record.md"
sidebar:
  order: 10
prev:
  link: "/vi/guide/learning-paths/"
  label: "Chọn lộ trình học"
next:
  link: "/vi/cases/write-an-article/#1-sắp-xếp-dữ-kiện-và-mâu-thuẫn-trước"
  label: "Bắt đầu sắp xếp ba nguồn tư liệu"
locale: "vi"
source_locale: "zh-CN"
source_revision: "d1b46b1"
translation_status: "reviewed"
translated_at: "2026-09-20"
reviewed_at: "2026-10-26"
---

Dùng một bộ tư liệu để viết bài, chuyển thành bản trình chiếu có thể chỉnh sửa, rồi lưu hướng dẫn tác vụ dùng lại lần sau. Mỗi bước đều tạo tệp để bạn tự đánh giá đã hoàn thành hay chưa.

Bạn cần mở được thư mục cục bộ trong Codex. Việc tạo trình chiếu còn cần công cụ làm ra PPTX và phần mềm mở được tệp đó; xem môi trường cụ thể trong tình huống. Không yêu cầu mọi ứng dụng đều có cùng công cụ. Nếu chưa quen thao tác tệp, hãy hoàn thành [Làm việc với tệp](/vi/guide/learning-paths/beginner/02-work-with-files/) trước.

## Lộ trình và tài liệu

| Bước | Đầu vào trước đó | Sản phẩm của bước này | Sau đó đi đâu |
|---|---|---|---|
| 1. Sắp xếp bằng chứng | Ba nguồn giả lập và chỉ mục nguồn | Bảng sự thật, danh sách mâu thuẫn và thiếu sót | Viết bài |
| 2. Viết và sửa | Bảng sự thật, độc giả, dàn ý | Bài viết, bảng đối chiếu nhận định, ghi chú sửa | Làm bản trình chiếu |
| 3. Làm bản trình chiếu | Bài viết, bảng đối chiếu nhận định, mục tiêu báo cáo | PPTX tám trang, tám bản xem trước, ghi chú và biên bản kiểm tra | Lưu hướng dẫn dùng lại |
| 4. Lưu hướng dẫn dùng lại | Sản phẩm và trải nghiệm của ba bước trước | Mẫu tác vụ, danh sách nghiệm thu, một biên bản chuyển đổi | Thử lại với nguồn mới |

[Tải bộ bài tập viết bài](/downloads/source-backed-article/source-backed-article-1.0.0.zip) · [Tải bộ bài tập trình chiếu](/downloads/article-to-slides/article-to-slides-1.0.0.zip)

Hai bộ đều dùng riêng được. Khi học liên tục, bước 3 nên ưu tiên bài viết bạn đã hoàn thành. Thư mục `input/` trong bộ trình chiếu là đầu vào tham khảo cho người chưa xong bài hoặc cần đối chiếu. Mọi sản phẩm, nhân vật và cuộc phỏng vấn đều là tài liệu giảng dạy hư cấu.

## 1. Sắp xếp bằng chứng và giữ lại mâu thuẫn

Giải nén bộ bài viết, đọc `brief.md`, `sources/index.csv` và ba nguồn được liệt kê. Làm theo [phần đầu của tình huống viết bài](/vi/cases/write-an-article/#1-sắp-xếp-dữ-kiện-và-mâu-thuẫn-trước) để sắp xếp, đừng vội viết thành bài.

Đặt đầu ra vào `my-output/` của bộ bài viết và giữ nguồn gốc. Bảng sự thật ghi ID nguồn, mục, nhận định được hỗ trợ và loại bằng chứng. Viết thêm `unresolved.md` liệt kê vấn đề tư liệu chưa giải quyết.

Hoàn thành khi bạn tìm được mâu thuẫn giữa P3 và C2 về cài đặt chẩn đoán mặc định mà không tự chọn một bên làm đáp án cuối. Phỏng vấn giả lập vẫn phải được ghi là giả lập; không tạo ra số liệu độ chính xác hay thời gian tiết kiệm mà nguồn không cung cấp.

Nếu nguồn không mở được hoặc mã không khớp, hãy khôi phục tệp và chỉ mục trước; đừng đoán nội dung qua tên tệp. Sau khi đạt yêu cầu mới sang bước tiếp.

## 2. Viết bài rồi sửa theo nguồn

Bắt đầu bằng bảng sự thật và danh sách chưa giải quyết từ bước trước. Tiếp tục theo [tình huống viết bài](/vi/cases/write-an-article/): xác định độc giả, lập dàn ý, viết liền mạch trong phạm vi đã rõ, rồi kiểm tra sự thật và sửa cách diễn đạt.

Bàn giao `article.md`, `claim-map.csv`, `unresolved.md` và ghi chú sửa. Chỉ ra ít nhất một sửa chữa về sự thật và một về diễn đạt. Bộ tham khảo có bản thảo đầu được thiết kế và diff văn bản thực tế; đừng gọi phản ví dụ được thiết kế là lần mô hình thực sự thất bại.

Hoàn thành khi tìm được nguồn cho sự thật chính, tách lời khuyên của tác giả khỏi nhận định được tư liệu hỗ trợ và vẫn giữ mâu thuẫn chẩn đoán. Nếu chạy được Python, bạn có thể dùng kiểm tra cấu trúc trong tình huống. Kể cả khi qua kiểm tra, vẫn phải xem từng câu có được nguồn hỗ trợ không.

Giữ các tệp làm đầu vào cho bước sau. Bài của bạn có thể khác bản tham khảo nhưng không được bỏ giới hạn quan trọng.

## 3. Biến bài viết thành tám trang trình chiếu

Dùng bài viết đã xong và bảng sự thật. Theo [tình huống làm trình chiếu](/vi/cases/create-a-slide-deck/) để xác định độc giả, mục tiêu khoảng năm phút và mạch tám trang. Kiểm tra bố cục bằng trang tiêu đề và trang giới hạn trước, rồi làm phần còn lại.

Sao chép bài và bảng sự thật vào thư mục đầu vào của tác vụ trình chiếu, nói rõ chúng là phiên bản của bạn. Đừng vừa dẫn bài của mình vừa mặc nhiên dùng mọi kết luận trong bản tham khảo.

Bàn giao PPTX tám trang, tám bản xem trước, ghi chú từng trang và biên bản xác minh. Điều kiện hoàn thành: mở được bằng phần mềm trình chiếu bạn đã ghi, chữ quan trọng có thể chỉnh sửa, từng trang đã được kiểm tra cách hiển thị chữ tiếng Trung và nội dung có bị tràn khung hay không. Mâu thuẫn nguồn phải vẫn rõ sau khi rút gọn.

Nếu thiếu công cụ PPTX, hãy lưu dàn ý và ghi khả năng còn thiếu. Bước này vẫn chưa hoàn thành cho tới khi bạn tiếp tục trong môi trường có công cụ, rồi mới sang phần tái sử dụng.

## 4. Lưu hướng dẫn tác vụ có thể dùng lại

Bắt đầu từ bài viết và trình chiếu đã hoàn thành, kiểm tra. Tạo `workflow.md` theo mẫu dưới đây để ghi phương pháp bạn thực sự đã dùng; đừng chỉ lưu prompt “tiếp tục” ở lượt cuối.

```md
# Từ tư liệu đến báo cáo

## Tác vụ lần này
- Độc giả và mục đích:
- Thư mục đầu vào, chỉ mục nguồn và tệp gốc không được sửa:
- Thư mục đầu ra và định dạng tệp cần có:

## Trình tự
1. Liệt kê sự thật, suy luận, mâu thuẫn và thiếu sót trước khi viết.
2. Xác định độc giả và bố cục, viết liền mạch, rồi sửa theo nguồn.
3. Rút bài thành tám trang; kiểm tra trang tiêu đề và giới hạn trước.
4. Kiểm tra văn bản gốc có thể chỉnh sửa, phông tiếng Trung, toàn bộ bản xem trước và ghi chú.

## Nghiệm thu
- Có thể truy sự thật chính về bản gốc; vấn đề chưa giải quyết còn hiển thị.
- Tách lời khuyên tác giả khỏi sự thật sản phẩm; không giả tư liệu giả lập là lời chứng thật.
- PPTX mở và sửa được; kiểm tra từng trang, ghi phần mềm và môi trường phông chữ.
- Nêu rõ kiểm tra đã làm và chưa làm; chỉ bàn giao cục bộ.

## Kinh nghiệm lần này
- Vấn đề thực gặp, đã sửa gì, xác nhận khôi phục ra sao:
- Bước có thể giữ lại lần sau:
- Sự thật và môi trường phải xác nhận lại lần sau:
```

Sau đó thử chuyển đổi phạm vi nhỏ: đổi độc giả từ “người viết cá nhân lần đầu thử” thành “đồng nghiệp chuẩn bị xem xét tài liệu”; giữ nguyên nguồn và chỉ tạo lại dàn ý. Lưu `reuse-check.md` ghi tiêu đề, trọng tâm, thứ tự đã đổi thế nào và giới hạn sự thật nào không đổi. Bài tập kiểm tra mẫu có thích ứng với tác vụ mới hay không, không khẳng định đã nghiên cứu lại sự thật.

Hoàn thành khi người khác có thể tìm đầu vào, đầu ra trong `workflow.md` và biết khi nào xong. Biên bản chuyển đổi phải nêu khác biệt cụ thể, không tiếp tục viết cho độc giả cũ. Nếu trình tự đã ổn định, đọc [Biến quy trình thành Skill](/vi/cases/workflows/turn-a-workflow-into-a-skill/). [Ví dụ Writing Skill](/vi/skills/examples/writing-skill/) có bộ tải xuống đầy đủ để tái sử dụng mẫu văn phong, bảng sự thật và cách xử lý mâu thuẫn. Kiểm tra cấu trúc không thay được việc con người rà soát sự thật.

## Tùy chọn: làm tác vụ có số liệu rõ ràng trước

Nếu thích phân tích văn phòng, bạn có thể làm [báo cáo bán hàng hằng tuần](/vi/cases/analyze-a-spreadsheet/) trước. Tài liệu có CSV, hoàn tiền và dòng trùng, bảng tổng hợp tham khảo và script kiểm tra độc lập. Sau đó thêm “tự tính số liệu chính, ghi rõ cách hiểu trường hợp bất thường” vào danh sách nghiệm thu; không cần ép nó vào bài về sản phẩm hư cấu.

Sau cả lộ trình, bạn nên có nguồn, bài viết và bảng sự thật, trình chiếu chỉnh sửa được, biên bản xác minh và hướng dẫn tái sử dụng. Chỉ đọc liên kết hoặc tải đáp án tham khảo không được tính là hoàn thành bài tập.
