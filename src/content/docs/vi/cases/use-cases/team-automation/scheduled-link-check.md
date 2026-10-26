---
caseCategory: team
directoryOrder: 100
title: 'Tình huống: kiểm tra liên kết tài liệu và khôi phục khi thất bại'
description: Tải bài tập kiểm tra liên kết HTML tĩnh, sửa từng bước trang thiếu và anchor hỏng, rồi chuẩn bị chạy định kỳ.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- html
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Bảy bài kiểm tra tập lệnh đều đạt. Trên bản sao tạm, sửa từng lỗi một khiến số lỗi giảm từ hai xuống một rồi về không. Không kiểm tra liên kết ngoài qua mạng, cũng không chạy CI hay bộ lập lịch thật.
  environment: Python 3.12.11 / Darwin arm64; thư viện chuẩn và HTML tĩnh tổng hợp do tác giả tạo, không dùng token.
  evidence:
  - label: Bản ghi chạy và khôi phục thực tế
    href: /downloads/docs-link-audit/validation/record.md
assets:
- path: /downloads/docs-link-audit/docs-link-audit-1.0.0.zip
  purpose: Tập lệnh kiểm tra liên kết, đầu vào lỗi, bản sửa tham chiếu, bài kiểm tra và bản ghi khôi phục từng bước
  license: CC0-1.0
  version: 1.0.0
locale: vi
source_locale: zh-CN
source_revision: "0d21aa9"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: '2026-09-20'
---

Trước khi lập lịch kiểm tra định kỳ, hãy xác nhận tập lệnh thực sự phát hiện lỗi và giải thích những gì đã kiểm tra. Bài tập bắt đầu bằng hai liên kết cố ý bị hỏng. Mỗi lần chỉ sửa một đích và quan sát kết quả thay đổi.

[Tải trọn bộ bài tập](/downloads/docs-link-audit/docs-link-audit-1.0.0.zip) · [README](/downloads/docs-link-audit/README.md) · [Bản ghi khôi phục thực tế](/downloads/docs-link-audit/validation/recovery.json)

## Chạy mẫu bị lỗi trước

Cần Python 3.10+, không cần thư viện bên thứ ba, khóa API hoặc mạng. Trong thư mục đã giải nén, chạy:

```sh
python3 scripts/check_links.py fixtures/site
```

Mã thoát dự kiến là 1. Báo cáo nêu tệp, số dòng, URL và lý do: `/missing/` ở dòng 4 của `index.html` không có trang tương ứng; `#old-anchor` ở dòng 5 không tồn tại trên trang đích. Một liên kết ngoài khác nằm trong `unchecked`, không được âm thầm tính là đạt.

## Mỗi lần sửa một lỗi

Sao chép `fixtures/site` vào `work/` của bạn và giữ đầu vào gốc. Đầu tiên thay `/missing/` bằng `/guide/`, rồi chạy:

```sh
python3 scripts/check_links.py work
```

Mã thoát vẫn là 1 nhưng chỉ còn lỗi anchor. Thay `#old-anchor` bằng `#install` rồi chạy lại: mã thoát là 0. Đối chiếu `solution/site` và [tài liệu rà soát thủ công](/downloads/docs-link-audit/solution/review.md) để chắc chắn không sửa nội dung khác.

Lần tự kiểm tra thực tế của tác giả ghi nhận lần lượt 2, 1, 0 lỗi; mã băm của mẫu gốc không đổi. [JSON trước sửa](/downloads/docs-link-audit/validation/stage-0.json) · [JSON sau sửa](/downloads/docs-link-audit/validation/stage-2.json)

## Hiểu kết quả và giới hạn

| Kết quả | Ý nghĩa | Bước tiếp theo |
|---|---|---|
| Thoát 0 | Tham chiếu nội bộ đạt | Đọc `unchecked`; không thể suy ra liên kết ngoài truy cập được |
| Thoát 1 | Phát hiện trang hoặc anchor thiếu, hay đường dẫn vượt phạm vi | Xác nhận ý định của từng liên kết rồi sửa |
| Thoát 2 | Không hoàn thành kiểm tra | Kiểm tra thư mục, đầu ra build, lỗi đọc hoặc thẻ `base` không hỗ trợ |

Tập lệnh đọc HTML sau khi build, hỗ trợ `index.html` trong thư mục, đường dẫn tương đối và từ gốc, cùng anchor HTML. Nó không phân tích tuyến JavaScript động, URL trong CSS, `srcset` hoặc quy tắc viết lại riêng của framework. Gặp `base href` nó sẽ dừng để tránh hiểu sai đường dẫn tương đối. URL ngoài và giao thức khác được ghi rõ là chưa kiểm tra.

Chạy bảy bài kiểm tra đi kèm:

```sh
python3 validation/test_links.py
```

Với dự án thật, hãy build theo hướng dẫn của dự án trước rồi đưa thư mục đầu ra cho tập lệnh. Trang này đã có bộ kiểm tra tham chiếu nội bộ riêng; bộ bài tập không thay thế tất cả bước xác thực phù hợp với framework.

## Sau đó đưa vào quy trình định kỳ

Giao cho bộ lập lịch hiện có chuỗi “build dự án → kiểm tra liên kết → lưu mã thoát và JSON”, cố định thư mục làm việc và môi trường phụ thuộc. Nếu build thất bại, dừng lại thay vì đọc đầu ra cũ. Tránh ghi đồng thời vào cùng một bản ghi.

Trước tiên chạy thủ công một lần, sau đó kích hoạt thủ công trong môi trường lập lịch đích, cuối cùng mới đặt chu kỳ. So sánh với lần trước: không thay đổi thì giữ im lặng; có lỗi mới, lỗi kiểm tra hoặc phục hồi thì chuẩn bị tóm tắt thay đổi. Gửi thông báo thật vẫn phải tuân theo phạm vi được phép.

Bộ bài tập không tạo tác vụ định kỳ, gửi thông báo, sửa trang thật hoặc chạy CI. Các bước lập lịch ở đây là hướng dẫn tích hợp, không phải bằng chứng bộ lập lịch đã chạy. Xem tiếp [hướng dẫn tác vụ định kỳ](/vi/skills/automations/scheduled-tasks/).

## Xử lý liên kết ngoài

Đặt phạm vi và tần suất kiểm tra liên kết ngoài được cho phép riêng. Mã 404, hạn chế xác thực, hết thời gian chờ và lỗi dịch vụ tạm thời có ý nghĩa khác nhau. Một lần truy cập thất bại không đủ để xóa liên kết. Bộ bài tập không kiểm tra liên kết ngoài thật và không trình bày phản hồi mô phỏng như lỗi mạng có thật.

Khi kết hợp với [bài tập phân loại issue](/vi/cases/use-cases/team-automation/issue-triage-suggestions/), hãy tạo báo cáo cục bộ và ý kiến rà soát của con người trước khi quyết định tạo ticket.
