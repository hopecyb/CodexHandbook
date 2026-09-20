---
title: "Ba cặp prompt đối chiếu: 12 lần chạy và rà soát theo từng tiêu chí"
description: Thực hành so sánh A/B qua báo cáo tuần, bài viết và sửa lỗi. Tải dữ liệu đầu vào, prompt và mẫu ghi chép cố định mà không mặc định prompt dài hơn sẽ tốt hơn.
contentType: prompt
audiences: [creator, developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  environment: Darwin arm64; Codex 26.911.61220 / build 9647; 12 ngữ cảnh Agent độc lập; chưa biết mô hình và thiết lập suy luận thực tế.
  summary: Mỗi cặp trong ba cặp A/B được chạy hai lần. Đầu ra, thời gian và lỗi công cụ được lưu lại. Agent chính rà soát mà không che nhãn; một số nhật ký bị thiếu. Các lần chạy này không chứng minh hiệu quả chung hay là thử nghiệm với độc giả thực.
  evidence:
    - label: Điểm theo tiêu chí và giới hạn của 12 lần chạy
      href: /downloads/prompt-comparison-results/review.md
    - label: Các lần chạy thực tế và thời gian
      href: /downloads/prompt-comparison-results/runs.json
    - label: Kiểm tra đầu ra sau khi chạy
      href: /downloads/prompt-comparison-results/reviewer-checks.json
assets:
  - path: /downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip
    purpose: Mười hai tác vụ, đầu vào, bản công khai của đầu ra gốc, nhật ký, thời gian, điểm theo tiêu chí và tập lệnh rà soát
    license: CC0-1.0
    version: 1.0.0
  - path: /downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip
    purpose: Chín tệp đầu vào cố định, sáu prompt, tiêu chí chấm điểm chung, căn cứ rà soát thủ công và mẫu ghi lần chạy để trống
    license: CC0-1.0
    version: 1.0.0
locale: vi
source_locale: zh-CN
source_revision: e6a23bb
translation_status: draft
translated_at: 2026-09-20
---

Mục đích của việc đối chiếu là tìm ra yêu cầu nào ảnh hưởng đến sản phẩm bàn giao, không phải chứng minh prompt càng dài càng tốt. Trang này cung cấp ba bộ đầu vào cố định và hồ sơ của 12 lần chạy thực tế hoàn thành ngày 18 tháng 9 năm 2026. Mẫu nhỏ này chủ yếu cho thấy sự khác biệt về bằng chứng đi kèm sản phẩm; nó không đủ để xác lập hiệu quả chung.

[Tải toàn bộ tài liệu đối chiếu](/downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip) · [Quy trình chạy](/downloads/prompt-comparisons/README.md) · [Mẫu ghi để trống](/downloads/prompt-comparisons/blank-run.json)

## Ba tác vụ, cùng một cách đối chiếu

Trong mỗi cặp, A và B dùng cùng đầu vào và phạm vi công cụ. B giữ nguyên toàn bộ tác vụ của A và bổ sung một nhóm tiêu chí nghiệm thu rõ ràng. Vì vậy, không thể quy khác biệt cho một từ hay một câu riêng lẻ trong nhóm đó.

| Tác vụ | Đầu vào cố định | B bổ sung gì | Cần quan sát gì |
|---|---|---|---|
| Báo cáo doanh số tuần | CSV tổng hợp 46 dòng và từ điển dữ liệu | Quyết định theo từng dòng, giải thích bất thường, hồ sơ kiểm tra độc lập | Ngoài số liệu đúng, có truy vết được hoàn tiền, trùng lặp và mốc gốc bằng 0 không? |
| Bài viết dựa trên nguồn | Ba nguồn tổng hợp được cố ý tạo mâu thuẫn | Bảng dữ kiện, danh sách câu hỏi còn mở, không tự ý chọn một nguồn khi có xung đột | Có giữ lại điều chưa biết không? Từng khẳng định cụ thể có được nguồn hỗ trợ không? |
| Sửa lỗi | Mã giỏ hàng và các bài kiểm thử gốc | Kiểm thử thất bại trước khi sửa, thành công sau khi sửa, nhật ký và bản diff | Bản sửa có được kiểm chứng thật mà không sửa bài kiểm thử để lách lỗi không? |

[Báo cáo A](/downloads/prompt-comparisons/cases/sales/A.md) / [B](/downloads/prompt-comparisons/cases/sales/B.md) · [Bài viết A](/downloads/prompt-comparisons/cases/article/A.md) / [B](/downloads/prompt-comparisons/cases/article/B.md) · [Sửa lỗi A](/downloads/prompt-comparisons/cases/bug/A.md) / [B](/downloads/prompt-comparisons/cases/bug/B.md)

A vẫn có thể tự kiểm tra nguồn và chạy kiểm thử; B vẫn có thể thất bại. Đừng xem kỳ vọng là kết quả.

## Năm tiêu chí chấm điểm chung

A và B dùng cùng [rubric.json](/downloads/prompt-comparisons/rubric.json): độ chính xác của tác vụ, khả năng truy vết bằng chứng, kiểm soát phạm vi, xử lý điều chưa chắc chắn và khả năng tái lập. Với mỗi tiêu chí, 0 là chưa đạt, 1 là đạt một phần, 2 là đạt kèm bằng chứng có thể kiểm tra lại. Dùng null nếu chưa chạy hoặc không thể đánh giá.

Mỗi điểm số phải gắn với bằng chứng cụ thể. Báo cáo viết trôi chảy không thể được điểm cao nếu số liệu sai; bài viết có liên kết không đồng nghĩa các dữ kiện đều đúng; mã nguồn không được xem là đã kiểm chứng chỉ vì có câu “kiểm thử đã qua”. Đừng để điểm trung bình che lấp lỗi dữ kiện quan trọng.

## 12 lần chạy thực tế

[Tải kết quả và nhật ký](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) · [Điểm theo tiêu chí và thời gian](/downloads/prompt-comparison-results/review.md) · [Điều kiện lấy mẫu](/downloads/prompt-comparison-results/README.md)

Mỗi nhóm được chạy theo thứ tự A1 → B1 → B2 → A2, với ba tác vụ khác nhau chạy song song trong mỗi lượt. Mỗi lần dùng một ngữ cảnh Agent và thư mục làm việc mới, không cung cấp đáp án chấm điểm. Mô hình và thiết lập suy luận không được đặt lại một cách tường minh nên giá trị thực tế chưa rõ. Việc tách thư mục dựa vào chỉ dẫn chứ không phải cách ly ở cấp hệ điều hành. Agent chính rà soát mà không che nhãn; không có điểm số độc lập do người chấm.

| Tác vụ | Hai quan sát ở A | Hai quan sát ở B | Các lần chạy này cho thấy gì |
|---|---|---|---|
| Báo cáo doanh số tuần | Số liệu, sổ theo dõi và cách xử lý bất thường đều đúng; cũng chủ động kiểm tra | Số liệu đúng và có giải thích cách kiểm tra; một lần không lưu toàn bộ lệnh tính toán | Yêu cầu bổ sung không bảo đảm nhật ký đầy đủ |
| Bài viết dựa trên nguồn | Dữ kiện, nguồn và mâu thuẫn được xử lý đúng, bài viết được giao | Giữ cùng ranh giới dữ kiện, đồng thời thêm bảng dữ kiện và câu hỏi còn mở | Có thêm tài liệu để người khác rà soát |
| Sửa lỗi | Bài kiểm thử gốc không đổi, ba bài qua sau khi sửa; không lưu nhật ký thất bại trước sửa | Lưu thất bại trước sửa, thành công sau sửa, mã thoát và bản diff | Chuỗi kiểm chứng đầy đủ hơn, nhưng cả bốn lần đều thiếu phiên bản Node đã dùng |

Các bảng đầy đủ trình bày điểm 0–2 cho từng tiêu chí trong năm tiêu chí, không tính xếp hạng chung. Việc bài viết A thiếu bảng dữ kiện ảnh hưởng đến tiêu chí “khả năng tái lập” đã thống nhất; điều đó không có nghĩa nội dung bài viết sai. Bản sửa lỗi A và B đều chỉ đạt một phần về khả năng tái lập, nhưng vì những lý do khác nhau. Chỉ nhìn điểm số là chưa đủ.

Giá trị băm của đầu vào và văn bản tác vụ giống nhau giữa các lần chạy. Bước rà soát sau đó tính lại CSV doanh số và kiểm tra cả bốn bản sửa lỗi bằng bài kiểm thử gốc không chỉnh sửa. [Hồ sơ rà soát](/downloads/prompt-comparison-results/reviewer-checks.json) được lưu riêng với nhật ký lệnh do các Agent trong thí nghiệm tự chạy.

## Giữ lại cả thất bại và giới hạn

- Prompt chung của tác vụ doanh số ghi `data-dictionary.md`, nhưng tệp thực tế nằm ở `input/data-dictionary.md`. Cả bốn lần đều gặp lỗi đường dẫn rồi phục hồi. Đây là lỗi của tài liệu, không phải tác động của tiêu chí nghiệm thu ở A hay B. Để giữ nguyên đầu vào, prompt không được sửa giữa đợt chạy.
- Lệnh Python trong `run-07` chỉ còn phần tóm tắt; toàn bộ mã lệnh không được lưu. Gói kết quả giữ nguyên thiếu sót này và không nhận là lệnh đầy đủ đã được ghi lại lúc đó.
- Nhật ký do các Agent tự tổng hợp, không phải bản xuất kiểm toán đầy đủ của nền tảng. Bản công khai chỉ thay các đường dẫn tuyệt đối trên máy cục bộ. Giá trị băm của bản gốc và bản công khai được lưu riêng.
- Thời gian gồm cả lúc đợi công cụ và viết nhật ký, trong khi các tác vụ chạy song song. Không có mốc đối chiếu do người làm hay phép đo chi phí. Không rõ mô hình và thiết lập suy luận, nên không thể dùng số liệu này để xếp hạng tốc độ mô hình hay thời gian tiết kiệm.

Mỗi biến thể của mỗi tác vụ chỉ được chạy hai lần. Việc chấm điểm không che nhãn và một số tiêu chí chấm trùng với lời nhắc thêm của B. Bài tập này thể hiện khác biệt về đầu ra và bằng chứng kiểm chứng. Nó không công bố tỷ lệ thành công chung, cũng không khẳng định “B thắng” hay “dài hơn là tốt hơn”.

## Tự chạy và ghi chép

1. Tạo thư mục làm việc riêng cho A và B. Sao chép đầu vào giống nhau và so giá trị băm; đừng cung cấp đáp án của thang điểm cho mô hình.
2. Mỗi lần bắt đầu một tác vụ mới. Cố định mô hình, thiết lập suy luận, ứng dụng khách, phạm vi công cụ và giới hạn thời gian; ghi trung thực mọi thiết lập chưa biết. Đừng chuyển kết quả của lần trước sang lần sau.
3. Thống nhất trước số lần lặp và điều kiện dừng. Luân phiên thứ tự A→B và B→A. Lưu cả thất bại, lần bị gián đoạn và lần chạy lại, không chỉ giữ đầu ra tốt nhất.
4. Ghi đường dẫn đầu ra thực tế, tên mô hình, môi trường, thời gian, lỗi công cụ và giá trị băm đầu vào. Ghi riêng thời gian người làm lại. Đừng điền 0 cho mục chưa chạy.
5. Chấm từng tiêu chí theo cùng một chuẩn, nếu có thể thì che nhãn biến thể với người rà soát. So sánh từng tiêu chí và loại lỗi trước khi quyết định có nên dùng các yêu cầu bổ sung.

Một số ít quan sát chỉ áp dụng cho đầu vào và môi trường này. Chúng không cho thấy tỷ lệ thành công chung hay chứng minh một câu cụ thể đã gây ra cải thiện.

## Những gì đã và chưa được xác minh

Có thể chạy bước kiểm tra tài liệu:

```sh
python3 scripts/check_materials.py
```

Đã kiểm tra chín tệp đầu vào cố định, ba cặp prompt A/B theo kiểu bổ sung và việc mẫu ghi để trống không chứa điểm bịa đặt. Tập lệnh này không gọi mô hình và không thử hiệu quả của prompt.

Đã ghi lại 12 lần chạy, điểm theo tiêu chí và thời gian. Vẫn còn thiếu tên mô hình thực tế, nhật ký nền tảng đầy đủ và đánh giá độc lập của con người. Gói kết quả còn có `python3 scripts/check_results.py` để kiểm tra lại đầu ra đã lưu mà không chạy lại mô hình. Xem bài tập gốc đầy đủ ở [báo cáo tuần](/vi/cases/analyze-a-spreadsheet/), [bài viết](/vi/cases/write-an-article/) và [lộ trình dành cho lập trình viên](/vi/guide/learning-paths/developer/).
