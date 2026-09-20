---
caseCategory: office
directoryOrder: 10
title: Từ CSV bán hàng đến báo cáo tuần có thể đối chiếu
description: Luyện làm sạch, nhóm, so sánh tuần và kiểm tra độc lập với 46 dòng dữ liệu bán hàng giả lập; tải đủ tài liệu và đáp án tham khảo.
contentType: case
audiences: [creator, beginner]
task: data-analysis
level: beginner
estimatedMinutes: 40
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Đã chạy tập lệnh tham khảo; các phép kiểm tra độc lập bằng số xu nguyên và SQL đều đạt. Đây là tự kiểm tra của tác giả, chưa có người đọc phổ thông thử nghiệm hoặc người thứ hai rà soát.
  environment: Darwin 27.0.0 / arm64, Python 3.12.11; tập lệnh dùng thư viện chuẩn, không phụ thuộc một ứng dụng Codex cụ thể.
  evidence:
    - label: Xem biên bản thực thi và rà soát
      href: /downloads/sales-weekly-report/record.md
assets:
  - path: /downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip
    purpose: Toàn bộ tài liệu bài tập, đáp án tham khảo và tập lệnh kiểm tra
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /vi/cases/
  label: Chọn bài tập thực hành
next:
  link: /vi/guide/verification/
  label: Học cách xác minh kết quả
locale: vi
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 2b4f164
---

Trong bài này, bạn tạo báo cáo bán hàng tuần, tổng hợp theo vùng, xếp hạng sản phẩm và sổ làm sạch từng dòng. Đầu vào là dữ liệu giả lập do trang này tạo; không cần dữ liệu khách hàng thật.

Mức độ: nhập môn. Thời gian ước tính 30–45 phút do biên tập viên dự đoán, chưa bấm giờ với người đọc. Điều kiện: có thể cung cấp tệp cục bộ cho Codex. Chỉ đọc kết quả tham khảo thì không cần lập trình; chạy kiểm tra cần Python 3.10 trở lên.

[Tải toàn bộ gói bài tập v1.0.0 (ZIP)](/downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip) · [Chỉ tải CSV bán hàng](/downloads/sales-weekly-report/sales.csv)

## Xem trước kết quả cần giao

| Chỉ số | Giá trị tham khảo | Điểm cần đối chiếu |
|---|---:|---|
| Doanh thu thuần kỳ hiện tại | 4.644,75 nhân dân tệ | Phải tính khoản hoàn tiền |
| Giá trị thuần vùng Đông | 1.281,25 nhân dân tệ | 1.401,75 − 120,50 |
| Giá trị thiếu ngày | 199,99 nhân dân tệ | Cách ly, không đoán tuần |

Kỳ hiện tại là 07/09/2026–13/09/2026; kỳ trước là 31/08/2026–06/09/2026. Mức biến động giữa hai tuần lịch đầy đủ là 87,04%. Đây chỉ là kết quả của mẫu giả lập, không giải thích nguyên nhân kinh doanh thực tế.

[Xem báo cáo tuần tham khảo](/downloads/sales-weekly-report/summary.md). Hãy tự làm trước rồi mới so với đáp án.

## Tải tài liệu

Gói đầy đủ gồm đề bài, từ điển dữ liệu, ba prompt, CSV 46 dòng, báo cáo tham khảo, ba CSV tổng hợp/sổ, triển khai tham khảo, tập lệnh kiểm tra độc lập và biên bản xác minh. Tất cả được công bố theo CC0 1.0, có thể sửa và phân phối lại.

Sau khi giải nén, mở thư mục `sales-weekly-report`. Chỉ tải CSV sẽ không tự tạo ra những tệp khác được nhắc tới.

## 1. Xác nhận tệp và quy tắc tính

Giao nhiệm vụ sau cho Codex. Cách cung cấp tệp khác nhau theo ứng dụng; trước tiên hãy chắc rằng nó thực sự đọc được các tệp.

```text
Đọc brief.md, starter/data-dictionary.md và starter/sales.csv.
Xác nhận các tệp tồn tại, liệt kê trường dữ liệu, khoảng ngày, số bản ghi
và số dòng cần xử lý đặc biệt. Không sửa bảng gốc, không xem solution.
Phân biệt trùng hoàn toàn, thiếu ngày, số âm và giá trị 0 thực.
Giải thích quy tắc cho hai tuần theo từ điển; liệt kê chỗ xung đột.
Nếu không có xung đột thì tiếp tục.
```

Bảng gốc 46 dòng gồm hai khoản hoàn tiền, một dòng trùng hoàn toàn và một dòng thiếu ngày. Chỉ giữ bản đầu tiên của dòng trùng hoàn toàn; nếu cùng ID nhưng nội dung khác nhau thì dừng kiểm tra. Không tự điền ngày thiếu; số tiền 0 vẫn hợp lệ. Sau xử lý phải bao gồm 44 dòng.

## 2. Tạo báo cáo tuần và sổ tính toán

Tiếp tục dùng `prompts/02-report.md` trong gói, ghi sản phẩm vào `my-output/`:

| Tệp | Nội dung cần có |
|---|---|
| `summary.md` | Tổng tiền, biến động tuần, các vùng, Top 3 kỳ hiện tại, chất lượng dữ liệu và căn cứ tính |
| `region-summary.csv` | Giá trị thuần từng vùng của hai tuần, chênh lệch, biến động; tổng đối chiếu được với các vùng |
| `top-products.csv` | Sản phẩm xếp giảm dần theo giá trị thuần kỳ hiện tại, kể cả hoàn tiền |
| `row-ledger.csv` | Số dòng của từng bản ghi gốc, quyết định đưa vào, tuần và số tiền |

Giữ nguyên đầu vào, `solution` và `validation`. Tên trường và thứ tự bảng theo từ điển dữ liệu để bộ kiểm tra độc lập đối chiếu từng mục. Vùng Tây Nam có kỳ trước bằng 0, vì vậy ghi N/A cho mức biến động; không ghi 0% hay tăng vô hạn.

## 3. Đối chiếu độc lập, không chỉ hỏi “đúng chưa?”

Trong thư mục bài tập đã giải nén, chạy:

```sh
python3 validation/check.py --output my-output
```

Khi đủ bốn sản phẩm và khớp quy tắc, chương trình in `result: PASS`. Băm đầu vào thay đổi, bỏ sót hoàn tiền, nhóm sai hoặc sổ không khớp đều gây lỗi. Nếu kiểm tra thất bại, chỉ sửa sản phẩm của mình; không sửa bộ kiểm tra để ép kết quả được chấp nhận.

Nếu không chạy được Python, ít nhất hãy kiểm tra tay:

1. Bảy số dương của vùng Đông cộng được 1.401,75 nhân dân tệ. Cộng khoản hoàn −120,50 ở dòng 44 thành 1.281,25.
2. Ba vùng kỳ hiện tại cộng thành 1.281,25 + 2.101,75 + 1.261,75 = 4.644,75.
3. Dòng 47 O046 thiếu ngày; 199,99 không thuộc tuần nào. Dòng 46 O001 là dòng trùng.

Kiểm tra tự động không thể đánh giá mọi kết luận bằng lời. Vẫn cần đọc báo cáo và bỏ các lý do tăng trưởng hoặc nhận định kinh doanh không có nguồn.

## 4. Luyện sửa sai: bỏ sót hoàn tiền

**Phản ví dụ được thiết kế**: nếu lọc bỏ mọi số âm, tổng kỳ hiện tại sẽ là 4.765,25 nhân dân tệ, cao hơn 120,50. Trong xác minh tham khảo, tác giả đã thực sự thay một kết quả tạm để xác nhận bộ kiểm tra từ chối số tiền sai. Đây không phải đoạn hội thoại giả với mô hình.

```text
Kiểm tra các bản ghi hợp lệ có net_sales nhỏ hơn 0 và giải thích có nên
đưa vào không. Giữ dấu âm của khoản hoàn tiền, tính lại tổng hợp theo vùng
và sản phẩm cho cả hai kỳ; liệt kê chênh lệch trước và sau sửa.
Không sửa CSV gốc hoặc bộ kiểm tra để làm mất lỗi.
```

## 5. Khôi phục khi gặp vấn đề

| Hiện tượng | Kiểm tra trước | Bước tiếp theo |
|---|---|---|
| Không tìm thấy tệp | Thư mục hiện tại có `starter/sales.csv` không? | Mở thư mục đã giải nén rồi tham chiếu tệp; không để Agent tạo lại dữ liệu thiếu |
| Chữ Trung bị lỗi hoặc chỉ có một cột | Mã hóa UTF-8 và dấu phẩy làm dấu phân cách? | Nhập lại CSV gốc, không sửa số tiền thủ công |
| Lệch 120,50 | Có bỏ sót khoản hoàn R043 không? | Giữ số âm theo từ điển rồi tính lại cả hai kỳ |
| Chia cho 0 khi tính biến động | Kỳ trước của Tây Nam có thật bằng 0 không? | Ghi N/A và giải thích mẫu số bằng 0 |
| Bộ kiểm tra báo thiếu tệp | Đã tạo đủ bốn sản phẩm chưa? | Bổ sung theo từ điển rồi chạy lại; thiếu tệp không đồng nghĩa số tiền sai |

## Điều kiện hoàn thành và bước tiếp theo

- Băm của bảng gốc không đổi và đủ bốn sản phẩm.
- Tổng tiền, vùng Đông và số tiền thiếu ngày đã được đối chiếu độc lập.
- Báo cáo giữ các bất thường, mẫu số 0 và quy tắc tính, không bịa nguyên nhân.
- Nêu rõ kiểm tra nào đã thực hiện và mục nào còn cần người rà soát.

Giữ prompt và ghi chép sửa sai của bạn. Trước khi thay dữ liệu lần sau, xác nhận lại trường và quy tắc. Bộ kiểm tra cố định của bài này không áp dụng cho mọi dữ liệu doanh nghiệp.

Tiếp tục [xác minh kết quả](/vi/guide/verification/) hoặc trở về [các tình huống thực hành](/vi/cases/).
