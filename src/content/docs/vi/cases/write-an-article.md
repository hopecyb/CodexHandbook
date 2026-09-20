---
caseCategory: creation
directoryOrder: 20
title: Viết bài có nguồn từ ba tài liệu
description: Dùng mô tả sản phẩm, phỏng vấn tổng hợp và ghi chú phiên bản để luyện đối chiếu sự thật, xử lý mâu thuẫn và sửa bài; tải bộ bài viết đầy đủ.
contentType: case
audiences: [creator, beginner]
task: source-backed-writing
level: beginner
estimatedMinutes: 50
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Đã đối chiếu từng mục trong ba tài liệu tổng hợp tự tạo và bảy sự thật chính; kiểm tra cấu trúc đạt. Đây là tác giả tự kiểm tra, chưa thử nghiệm so sánh với mô hình thật hoặc có người thứ hai rà soát.
  evidence:
    - label: Mô tả sản phẩm tổng hợp
      href: /downloads/source-backed-article/sources/01-product.md
    - label: Phỏng vấn tổng hợp
      href: /downloads/source-backed-article/sources/02-interview.md
    - label: Tóm tắt phiên bản có mâu thuẫn chưa giải quyết
      href: /downloads/source-backed-article/sources/03-changelog.md
    - label: Biên bản kiểm tra của tác giả và giới hạn xác minh
      href: /downloads/source-backed-article/validation/record.md
assets:
  - path: /downloads/source-backed-article/source-backed-article-1.0.0.zip
    purpose: Ba nguồn, prompt, bản nháp đầu/cuối, bảng sự thật, diff sửa và công cụ kiểm tra
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /vi/cases/
  label: Chọn bài thực hành
next:
  link: /vi/cases/create-a-slide-deck/
  label: Biến bài viết thành trình chiếu
locale: vi
source_locale: zh-CN
source_revision: e2bb5ea
translation_status: draft
translated_at: '2026-09-20'
---

Mục tiêu là bài ngắn tiếng Trung mà từng sự thật chính đều truy về tài liệu được. Bạn sẽ xử lý mô tả mâu thuẫn, phân biệt nội dung được nguồn hỗ trợ, suy luận tác giả và vấn đề cần xác nhận, rồi sửa bản nháp được cố ý thiết kế với lỗi rõ ràng.

Mức nhập môn. Dự kiến 45–60 phút là ước lượng biên tập, chưa đo với người đọc. Cần cung cấp tệp cục bộ cho Codex và đọc được Markdown. Kiểm tra cấu trúc tùy chọn cần Python 3.10+.

[Tải bộ bài tập đầy đủ v1.0.0 (ZIP)](/downloads/source-backed-article/source-backed-article-1.0.0.zip)

Mọi tài liệu do trang này tạo. Sản phẩm “拾页” và người được phỏng vấn “小林” đều hư cấu, không mô tả sản phẩm thật hay lời chứng người dùng thật.

## Thành phẩm cuối cùng

Bài tham khảo cuối cùng theo mạch “kiểm tra một bản tóm tắt trước rồi quyết định có mở rộng dùng hay không”, gồm giới hạn đầu vào, thử nhỏ, đối chiếu tóm tắt và việc chưa giải quyết.

| Sản phẩm | Mục đích |
|---|---|
| `outline.md` | Nêu vấn đề của độc giả và thứ tự bài |
| `article.md` | Bài tiếng Trung có mã sự thật |
| `claim-map.csv` | Bảy sự thật/gợi ý chính, ID nguồn, vị trí mục và loại bằng chứng |
| `unresolved.md` | Giữ câu hỏi tài liệu chưa trả lời |
| `revision.diff` | Chênh lệch văn bản thật giữa bản nháp thiết kế và bản cuối |

[Xem bài tham khảo](/downloads/source-backed-article/solution/article.md) · [Xem bảng đối chiếu sự thật](/downloads/source-backed-article/solution/claim-map.csv)

## Tải và chuẩn bị

Giải nén, mở `source-backed-article`. Đọc `brief.md` và `sources/index.csv`. Giấy phép CC0 1.0 cho phép sửa và phân phối lại. Bạn có thể chưa xem solution để tự làm một bản trước.

Ba tài liệu lần lượt là P mô tả sản phẩm, I phỏng vấn tổng hợp, C tóm tắt phiên bản. Các mục có mã ổn định như P1, I2, C3. Dẫn nguồn phải trỏ đến mục cụ thể, không chỉ ghi “theo tài liệu”.

## 1. Sắp xếp sự thật và mâu thuẫn trước

```text
Đọc brief.md, sources/index.csv và ba tài liệu được liệt kê.
Trước hết liệt kê sự thật được hỗ trợ trực tiếp, thông tin thiếu và nhận định mâu thuẫn; ghi ID nguồn và mục cho từng dòng.
Không tìm trên mạng để bổ sung thông tin sản phẩm hư cấu, không biến phỏng vấn tổng hợp thành lời chứng người dùng thật.
Không tự giải quyết mâu thuẫn theo ngày tài liệu. Bàn giao bảng sự thật rồi mới viết bài.
```

Mâu thuẫn được giữ có chủ ý: P3 nói tải dữ liệu chẩn đoán mặc định tắt; C2 nói cài mới mặc định bật; C3 xác nhận chưa có lời đính chính của người bảo trì. Cách đúng là ghi chưa xác nhận, không chọn tài liệu mới hơn làm câu trả lời cuối.

## 2. Viết liền mạch trong phạm vi đã rõ

`prompts/02-outline-and-write.md` có sẵn độc giả và cấu trúc bốn phần: làm được gì, thử ra sao, phải kiểm tra gì và vấn đề còn mở. Sau khi xác nhận cấu trúc, có thể viết liên tục mà không phải dừng từng đoạn.

Đặt mọi sản phẩm trong `my-output/`, giữ nguyên nguồn đầu vào. Đánh dấu sự thật chính bằng `[F1]` v.v. Trong bảng đối chiếu ghi:

```text
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

Chỉ dùng ba loại bằng chứng: “nguyên văn hỗ trợ”, “tác giả suy luận”, “chưa xác nhận”. Gợi ý thử trên vài bản sao tệp là đánh giá của tác giả, không phải cam kết sản phẩm hay thao tác bắt buộc.

## 3. Sửa sự thật rồi mới sửa giọng văn

`solution/draft.md` là phản ví dụ do tác giả thiết kế, không phải đầu ra thật của mô hình. Nó cố ý khẳng định khả năng PDF/ảnh, chạy hoàn toàn offline, bảo đảm hiệu quả và lời chứng thật dù nguồn không hỗ trợ.

| Lỗi bản nháp | Cách sửa | Lý do |
|---|---|---|
| “Hỗ trợ PDF và nhiều loại ảnh” | Chỉ còn Markdown và văn bản thuần | P1 quy định đầu vào |
| “Hoàn toàn offline, chẩn đoán mặc định tắt” | Đặt hai mô tả mâu thuẫn cạnh nhau và để ngỏ | P3/C2 trái nhau, trường dữ liệu tải lên cũng chưa rõ |
| “小林 chứng minh độ chính xác và tiết kiệm thời gian” | Giữ nhãn tổng hợp, không đưa số hiệu quả | I3 không có đo thời gian hay mẫu đánh giá cố định |
| “Công cụ toàn năng giúp tăng hiệu suất dễ dàng” | Mô tả đầu vào, thao tác và kiểm tra cụ thể | Bỏ phóng đại mà không thêm sự thật |

Xem [diff sửa](/downloads/source-backed-article/solution/revision.diff) và [ghi chú sửa](/downloads/source-backed-article/solution/revision-notes.md). Chỉ làm câu văn hay hơn nhưng giữ tính năng sai không được tính hoàn thành.

## 4. Kiểm tra cấu trúc rồi đọc từng nguồn

Nếu có Python 3.10+, chạy trong thư mục bài tập:

```sh
python3 validation/check.py --output my-output
```

Script kiểm tra hash của ba nguồn, mã sự thật trong bài, mục nguồn và tệp chưa giải quyết. Bản tham khảo đạt; bản sao tạm có F99 không tồn tại bị từ chối.

**Kiểm tra cấu trúc đạt không có nghĩa nội dung đúng.** Mở nguyên văn cho từng nhận định, xét nó có hỗ trợ câu hiện tại và có giữ điều kiện như “chỉ” hay “chưa xác nhận” không. Viết đoạn tổng hợp như lời chứng thật vẫn sai dù có mã trích dẫn.

Không chạy được script thì mở thủ công ba tệp gốc theo bảng và kiểm tra mã, cách diễn đạt. Đừng tuyên bố đã đạt phép kiểm tra chưa làm.

## Khôi phục khi thất bại

- Thiếu tệp: kiểm tra thư mục giải nén và chỉ mục nguồn, không bịa nội dung.
- Mã trích dẫn không tồn tại: sửa đối chiếu hoặc xóa sự thật thiếu nguồn; giữ sự không chắc chắn hợp lý.
- Nguồn mâu thuẫn: nêu cả hai và ai cần cung cấp bằng chứng gì; không quyết theo ngày, số đông hay giọng điệu.
- Bài quá quảng cáo: bỏ cam kết hiệu quả thiếu căn cứ rồi viết thao tác và giới hạn cụ thể.

## Điều kiện hoàn thành

Truy được sự thật chính, lời khuyên tác giả tách riêng, mâu thuẫn và thiếu sót còn thấy được, nhãn tổng hợp vẫn giữ. Bàn giao cục bộ, không tự công bố.

Tiếp theo dùng bài cuối này để [làm tám trang trình chiếu có thể chỉnh sửa](/vi/cases/create-a-slide-deck/). Bộ trình chiếu có đầu vào độc lập, PPTX, PDF, tám bản xem trước và biên bản xác minh; nếu học liên tục, hãy ưu tiên bài bạn đã tự hoàn thành và kiểm tra.
