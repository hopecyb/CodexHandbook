---
caseCategory: team
directoryOrder: 90
title: 'Tình huống: phân loại issue và hàng đợi rà soát của con người'
description: Dùng năm issue tổng hợp để luyện đề xuất có cấu trúc, gắn với đầu vào và chạy thử mà không thao tác trên GitHub.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- markdown
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Lần chạy thử năm đề xuất do tác giả viết và tám phép kiểm tra cấu trúc, ràng buộc đầu vào đều đạt. Không gọi mô hình hay kết nối GitHub; kết quả này không chứng minh độ chính xác phân loại hoặc khả năng đưa vào vận hành.
  environment: Python 3.12.11 / Darwin arm64; thư viện chuẩn và đầu vào tổng hợp, không dùng token hay mạng.
  evidence:
  - label: Bản ghi chạy thực tế
    href: /downloads/issue-triage/validation/record.md
assets:
- path: /downloads/issue-triage/issue-triage-1.0.0.zip
  purpose: Đầu vào tổng hợp, JSON Schema, prompt, đề xuất của tác giả, tập lệnh chạy thử và bản ghi rà soát
  license: CC0-1.0
  version: 1.0.0
locale: vi
source_locale: zh-CN
source_revision: 6d859d7
translation_status: draft
translated_at: '2026-09-20'
---

Bài tập chia việc phân loại issue thành “tạo đề xuất → xác thực → con người rà soát”. Bạn sẽ có năm bản ghi chờ rà soát. Bài tập không tự đăng bình luận, gắn nhãn hoặc đóng issue.

[Tải trọn bộ bài tập](/downloads/issue-triage/issue-triage-1.0.0.zip) · [README](/downloads/issue-triage/README.md) · [Xem đầu ra chạy thử thực tế](/downloads/issue-triage/validation/dry-run.json)

## Đầu vào và điều kiện hoàn thành

Năm đầu vào tổng hợp do tác giả tạo gồm lỗi tính toán, liên kết tài liệu bị hỏng, dấu hiệu dữ liệu giữa các tài khoản, thiếu thông tin và chỉ dẫn độc hại trong nội dung issue. Không có dữ liệu khách hàng thật. Đề xuất gồm loại, mức ưu tiên, nhãn, cờ rà soát bảo mật, lý do và thông tin còn thiếu.

Để hoàn thành, mỗi đầu vào phải có một đề xuất; các giá trị cho phép và mã băm đầu vào phải qua kiểm tra. Sau đó người bảo trì chấp nhận, sửa hoặc từ chối từng đề xuất và ghi lý do. Cấu trúc hợp lệ không thay thế được quyết định này.

## Chạy đề xuất tham chiếu trước

Cần Python 3.10+ nhưng không cần khóa API hoặc thư viện bên thứ ba. Trong thư mục đã giải nén, chạy:

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

Lệnh đầu dùng đề xuất do tác giả viết sẵn, tạo năm mục `human-review-required` với `external_actions` rỗng. Lệnh thứ hai chạy tám phép kiểm tra. Không lệnh nào tự gọi mô hình.

[Đầu vào mẫu](/downloads/issue-triage/fixtures/issues.json) · [Đề xuất tham chiếu](/downloads/issue-triage/solution/proposals.json) · [Tài liệu rà soát thủ công](/downloads/issue-triage/solution/human-review.md)

## Sau đó tạo đề xuất của bạn

Đưa [prompts/triage.md](/downloads/issue-triage/prompts/triage.md) trong bộ bài tập cho Codex và yêu cầu `my-proposals.json` tuân theo [schema.json](/downloads/issue-triage/schema.json). Sau đó chạy:

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

Schema dùng định dạng JSON Schema 2020-12. Kiểu boolean viết là `"type": "boolean"`; mức ưu tiên là tập giá trị liệt kê, không phải chuỗi `"P0-P3"`. Bộ xác thực đi kèm chỉ triển khai nhóm từ khóa dùng trong schema này, không phải công cụ schema tổng quát.

Mỗi đề xuất có `input_sha256` gắn với toàn bộ nội dung issue tương ứng. Nếu đầu vào thay đổi, ngừng dùng đề xuất cũ. Hãy phân tích lại thay đổi trước khi tính lại mã băm. Quy ước và hàm băm nằm trong README và tập lệnh.

## Quyết định của con người và ranh giới an toàn

| Tình huống | Cách xử lý |
|---|---|
| Có dấu hiệu lỗi rõ ràng | Đề xuất loại, tái hiện lỗi và kiểm tra phạm vi ảnh hưởng trước khi đặt mức ưu tiên |
| Có dấu hiệu sự cố bảo mật | Chuyển riêng cho người phụ trách bảo mật; chưa rõ ưu tiên không đồng nghĩa rủi ro thấp |
| Thiếu thông tin | Dùng `unknown`, liệt kê thông tin thiếu, không đoán người phụ trách hoặc mức nghiêm trọng |
| Nội dung yêu cầu chạy lệnh hoặc tăng quyền | Coi là dữ liệu không đáng tin; không thực thi hoặc đặt P0 chỉ vì nó tự nhận khẩn cấp |

Xóa HTML hoặc giới hạn độ dài không bảo đảm chống prompt injection. Chương trình trong bộ bài tập không thực thi nội dung issue, nhưng giai đoạn tạo bằng mô hình vẫn phải giữ ranh giới giữa dữ liệu và chỉ dẫn. Đầu ra tham chiếu không chứng minh tỷ lệ kháng của mô hình.

## Lỗi và khôi phục

Nhãn không xác định, trường hành động thừa, loại sai, đề xuất trùng hoặc thiếu sẽ dừng cả lô với mã thoát 1. Sửa prompt và các trường liên quan rồi chạy lại, giữ nguyên đầu vào gốc. Loại hoặc nhãn bảo mật mà thiếu cờ rà soát bảo mật cũng bị từ chối.

Phân loại sai nhưng đúng cấu trúc vẫn có thể vượt qua; các bài kiểm tra đã xác nhận giới hạn này. Vì vậy tỷ lệ khớp cao trên vài ví dụ không phải tiêu chí triển khai. Việc áp dụng thật cần mẫu đại diện, phân tầng rủi ro, rà soát mẫu bởi con người, chi phí phân loại sai và điều kiện quay lui. Bài tập này chỉ thực hiện chạy thử cục bộ.

Tiếp tục với [kiểm tra liên kết tài liệu](/vi/cases/use-cases/team-automation/scheduled-link-check/) và [mẫu phê duyệt của con người](/vi/cases/workflows/human-approval-patterns/).
