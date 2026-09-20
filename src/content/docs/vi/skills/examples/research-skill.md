---
title: "Ví dụ: Skill nghiên cứu phân biệt mâu thuẫn với thiếu thông tin"
description: "Tải bộ nghiên cứu đầy đủ và dùng tài liệu tổng hợp cố định để luyện trạng thái nguồn, bằng chứng mâu thuẫn, câu hỏi chưa giải quyết và báo cáo có thể truy vết."
contentType: skill
audiences: [creator, developer]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Kiểm tra nguồn cục bộ và tám phép thử hồi quy đã đạt. Tác giả đối chiếu báo cáo tham khảo với nguồn; chưa đo định tuyến mô hình, chất lượng nghiên cứu hoặc lỗi mạng."
  environment: "Python 3.12.11 / Darwin arm64; thư viện chuẩn, ba nguồn tổng hợp và một tệp cục bộ cố ý để thiếu."
  evidence:
    - label: "Phạm vi kiểm tra thực tế và giới hạn"
      href: /downloads/skills/evidence-research/validation/record.md
assets:
  - path: /downloads/skills/evidence-research/evidence-research-1.0.0.zip
    purpose: "Skill nghiên cứu, nguồn cố định, bảng bằng chứng, báo cáo và trình kiểm tra trạng thái nguồn"
    license: CC0-1.0
    version: 1.0.0
locale: vi
source_locale: zh-CN
source_revision: cf2b232
translation_status: draft
translated_at: 2026-09-20
---

Nguồn không mở được, tài liệu không đề cập một dữ kiện và hai tài liệu bất đồng cần được xử lý theo cách khác nhau. Skill này giữ rõ các khác biệt để người đọc biết kết luận nào có thể kiểm tra lại và kết luận nào còn thiếu bằng chứng.

[Tải trọn bộ evidence-research v1.0.0](/downloads/skills/evidence-research/evidence-research-1.0.0.zip) · [SKILL.md](/downloads/skills/evidence-research/SKILL.md) · [Hướng dẫn cài đặt](/downloads/skills/evidence-research/README.md)

## Câu hỏi và tài liệu cố định

Bộ tài liệu dùng lại công cụ hư cấu “拾页” trong [bài tập viết bài](/vi/cases/write-an-article/) để nghiên cứu định dạng đầu vào, cài đặt chẩn đoán mặc định và các trường tải lên. Bộ có ba nguồn tổng hợp tự tạo; ghi chú thứ tư của người bảo trì trong danh mục được cố ý để thiếu. Đừng tìm trang web thật cho sản phẩm hư cấu này hoặc bịa ra câu trả lời.

| Trạng thái bằng chứng | Ví dụ trong bộ | Cách trình bày |
|---|---|---|
| `supported`: có căn cứ | P1 chỉ liệt kê Markdown và văn bản thuần | Nêu phạm vi và vị trí được hỗ trợ; không nói rằng đã thử sản phẩm |
| `conflict`: mâu thuẫn | P3 nói mặc định tắt, C2 nói mặc định bật | Trình bày cả hai và giữ rõ khoảng trống về phiên bản, điều kiện |
| `unknown`: chưa biết | Không liệt kê các trường tải lên để chẩn đoán | Nêu thông tin còn thiếu; đừng đoán nội dung tải lên |
| `unavailable`: nguồn không dùng được | Không có tệp cục bộ cho M | Giữ lại nguồn thất bại và tác động; không giả vờ đã đọc |

[Báo cáo tham khảo](/downloads/skills/evidence-research/solution/report.md) · [Bảng bằng chứng](/downloads/skills/evidence-research/solution/evidence.csv) · [Định dạng đầu ra](/downloads/skills/evidence-research/references/evidence-format.md)

## Cài đặt và gọi Skill

Đặt cả thư mục vào `.agents/skills/evidence-research/` của dự án thực hành và xác nhận `SKILL.md` là điểm vào. Đừng ghi đè một Skill tùy chỉnh cùng tên. Sau khi dùng [hướng dẫn sử dụng Skill](/vi/skills/use-a-skill/) để xác nhận có thể chọn trong ứng dụng, hãy gọi:

```text
$evidence-research Dựa vào các nguồn trong sources/catalog.json của bộ này,
xác định có thể xác nhận định dạng đầu vào, cài đặt chẩn đoán mặc định
và các trường tải lên của 拾页 1.2 hay không.
Tạo my-output/report.md và evidence.csv, nêu rõ mâu thuẫn
và nguồn không mở được. Giữ nguyên tính chất tổng hợp;
đừng tìm trang web thật về sản phẩm hư cấu này.
```

`fixtures/trigger-cases.json` chứa ví dụ nên và không nên kích hoạt: so sánh nguồn và kiểm tra bằng chứng phù hợp, còn thơ sáng tạo hay đếm tệp đơn giản không cần quy trình nghiên cứu. Đây là kỳ vọng thiết kế; việc tự động kích hoạt chưa được đo.

## Kiểm tra nguồn và báo cáo

Các kiểm tra tùy chọn cần Python 3.10+ và không cần thư viện bên thứ ba. Chạy trong thư mục đã giải nén:

```sh
# In trạng thái thực tế của từng nguồn
python3 scripts/check_evidence.py --inspect-only
# Kiểm tra báo cáo tham khảo
python3 scripts/check_evidence.py
# Kiểm tra báo cáo theo định dạng trong bộ
python3 scripts/check_evidence.py --output my-output
# Chạy kiểm tra hồi quy trong các bản sao tạm
python3 validation/test_checks.py
```

Kết quả tham khảo bình thường là P/I/C `available`, M `missing` và bốn mục bằng chứng đạt kiểm tra cấu trúc. Mã thoát 0 nghĩa là kiểm tra hoàn tất và cấu trúc đạt yêu cầu, không có nghĩa tất cả nguồn đều dùng được. Hãy đọc từng status, nhất là với `--inspect-only`.

Trình kiểm tra phát hiện thay đổi hàm băm nội dung, tệp thiếu hoặc không đọc được và tệp không có hàm băm dự kiến. Không được dùng nguồn không khả dụng như bằng chứng đã đọc hoặc âm thầm bỏ nó khỏi báo cáo. Script chỉ xử lý tệp cục bộ, không kiểm tra trạng thái HTTP hay khả năng truy cập trang web.

## Khôi phục sau lỗi

- **Thiếu tệp:** kiểm tra đường dẫn. Nếu nguồn thực sự không được cung cấp, giữ trạng thái không khả dụng và giao các kết luận còn lại có căn cứ.
- **Nội dung thay đổi:** so sánh phiên bản và khác biệt rồi kiểm tra lại trích dẫn. Đừng chỉ cập nhật hàm băm để vượt qua phép kiểm tra.
- **Bằng chứng mâu thuẫn:** đối chiếu phiên bản, điều kiện cài đặt và đối tượng áp dụng. Nếu chưa giải quyết được, để mở thay vì chỉ chọn theo ngày.
- **Thiếu dữ kiện:** liệt kê các trường hay giải thích cần người bảo trì cung cấp. Đừng viết khuyến nghị thành sự thật đã xác nhận.

Ví dụ này không yêu cầu giải quyết câu hỏi mà dữ liệu cố định không trả lời được. Nếu nghiên cứu thực tế được phép tìm nguồn thay thế, hãy ghi lý do chọn và kết quả truy cập thực tế.

## Điều kiện hoàn thành và giới hạn

Báo cáo cần bao gồm câu hỏi nghiên cứu, nguồn đã đọc, nguồn thất bại, bằng chứng cho từng kết luận và bước bổ sung bằng chứng. Tác giả đã đối chiếu báo cáo tham khảo với nguồn cố định, nhưng chưa có người đọc độc lập hoặc người duyệt thứ hai kiểm tra.

Tám phép thử script cũng cho thấy một điểm mù: tuyên bố sai “hỗ trợ mọi định dạng với độ chính xác hoàn hảo” vẫn có thể qua kiểm tra cấu trúc nếu kèm trích dẫn hợp lệ. Script không chứng minh được sự hỗ trợ về mặt ngữ nghĩa hoặc quyết định hai đoạn có thật sự mâu thuẫn không. Vẫn phải đọc từng nguồn gốc trước khi giao.

Tiếp theo, có thể dùng [Skill viết bài](/vi/skills/examples/writing-skill/) để chuyển kết luận đã kiểm tra thành bài viết, đồng thời giữ nguyên các điểm mâu thuẫn và chưa biết.
