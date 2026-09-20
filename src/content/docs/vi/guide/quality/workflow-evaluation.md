---
title: "Đánh giá quy trình: tách kích hoạt, ranh giới, định dạng và chất lượng"
description: Đánh giá bốn loại Skill bằng 20 mẫu được thiết kế và các trường ghi nhận riêng; không xem kiểm tra cấu trúc hoặc vài trường hợp thành công là tỷ lệ thành công chung.
contentType: guide
audiences: [developer, creator, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Bảy bài kiểm thử của trình kiểm tra hồ sơ đã đạt. Cả 20 mẫu đều là kỳ vọng thiết kế chưa chạy; chưa có kết luận về hiệu quả model, định tuyến tự động hay thời gian thực hiện.
  environment: Python 3.12.11 / Darwin arm64; thư viện chuẩn và dữ liệu tạm cho trình kiểm tra; không gọi model.
  evidence:
    - label: Phạm vi kiểm thử trình kiểm tra hồ sơ
      href: /downloads/workflow-evaluation/validation/record.md
assets:
  - path: /downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip
    purpose: Hai mươi mẫu đánh giá, hồ sơ trống, phương pháp chấm điểm và trình kiểm tra hồ sơ
    license: CC0-1.0
    version: 1.0.0
locale: vi
source_locale: zh-CN
source_revision: 9ea3ecc
translation_status: draft
translated_at: 2026-09-20
---

Một quy trình có thể chọn đúng Skill nhưng viết sai sự thật. Nó cũng có thể cho kết quả đúng sau khi thực hiện hành động chưa được phép. Gộp những trường hợp ấy thành một “tỷ lệ thành công” dễ che khuất vấn đề thực sự cần sửa.

[Tải bộ công cụ đánh giá](/downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip) · [20 mẫu](/downloads/workflow-evaluation/samples.json) · [Hồ sơ trống](/downloads/workflow-evaluation/records-template.json)

## Ghi riêng năm loại quan sát

| Khía cạnh | Bằng chứng cần xem | Điều không thể thay thế |
|---|---|---|
| Kích hoạt | Dấu vết gọi thực tế, gồm mẫu cần kích hoạt và mẫu không được kích hoạt | Giọng văn đầu ra tương tự hoặc việc gọi rõ ràng thành công |
| Ranh giới và từ chối | Yêu cầu vượt quyền không được thực hiện, phần hợp lệ vẫn được hoàn thành tối đa | Từ chối mọi tác vụ |
| Định dạng | Tệp, trường và kiểu dữ liệu bắt buộc | Văn bản trông có vẻ đầy đủ |
| Chất lượng tác vụ | Nguồn hỗ trợ từng nhận định, phép tính đúng, sửa lỗi hiệu quả và độ bao phủ | JSON hợp lệ hoặc script trả mã 0 |
| Thời gian và làm lại | Thời gian thực tế trôi qua và hồ sơ riêng về công sức làm lại của con người | Cảm nhận chủ quan “nhanh” hoặc điền 0 khi chưa đo |

Với bốn khía cạnh đầu, dùng `pass`, `partial`, `fail`, `not-applicable` hoặc `unobserved`; thời gian được lưu riêng dưới dạng số. Giữ nguyên các mục chưa biết và chưa chạy thay vì đoán điểm. Nếu mẫu đã chạy nhưng không thể quan sát một khía cạnh, dùng `unobserved` và giải thích lý do. Chỉ dùng `not-applicable` khi khía cạnh thực sự không liên quan; đừng dùng nó để che việc thiếu quan sát.

## Các mẫu bao phủ những gì

Bốn loại Skill — rà soát, viết, nghiên cứu và giám sát liên kết — mỗi loại có năm mẫu: kích hoạt đúng, tác vụ không liên quan, ranh giới cấp quyền, định dạng đầu ra và tình huống chất lượng then chốt. Tác giả thiết kế cả 20 mẫu; mọi hồ sơ hiện tại đều là `not-run`.

Các tình huống chất lượng kiểm tra lỗi đã stage bị việc khôi phục cây làm việc che khuất, bài viết bỏ qua mâu thuẫn giữa nguồn, nghiên cứu không ghi nhận nguồn không dùng được, và hệ thống giám sát gửi thông báo trùng hoặc không khôi phục. Đầu vào dùng [bốn gói Skill hoàn chỉnh](/vi/skills/examples/); bộ đánh giá không đóng gói lại chúng. Khi chạy, hãy ghi phiên bản và hash của gói đã dùng.

## Thực hiện một lần đánh giá

1. Cố định model, ứng dụng khách, thiết lập suy luận, quyền công cụ, hướng dẫn dự án và phiên bản gói đầu vào. Thiết lập nào không nhìn thấy thì ghi chưa biết, không đoán giá trị bên trong.
2. Mở tác vụ riêng cho từng mẫu và giữ yêu cầu cùng dấu vết công cụ. Kiểm tra kích hoạt dùng ngôn ngữ tự nhiên, không gọi `$skill` rõ ràng trước. Việc gọi rõ ràng thuộc kiểm tra khả năng thực thi.
3. Giữ lại thành công, thất bại, gián đoạn và thử lại. Ghi gián đoạn là `interrupted`, không xóa khỏi tập mẫu.
4. Viết đường dẫn bằng chứng và lý do cho từng nhận định. Mẫu an toàn dùng dữ liệu tổng hợp, không thật sự gửi dữ liệu thật. Script định dạng chỉ hỗ trợ kiểm tra trường; chất lượng sự thật vẫn phải đối chiếu với nguồn gốc.
5. Nếu có thể, nhờ người khác chấm mà không thấy nhãn cấu hình. Nếu chỉ tác giả tự kiểm tra, hãy ghi đúng như vậy; đừng nhận là đánh giá mù hay kết quả đồng thuận của nhiều người.

Khi kết hợp với [ba bộ so sánh prompt](/vi/prompts/comparison-lab/), hãy chấm A/B theo cùng quy tắc. Đừng cho B điểm cao hơn trước chỉ vì prompt dài hơn.

## Kiểm tra hồ sơ có đầy đủ không

Chạy trong gói bằng thư viện chuẩn Python 3.10 trở lên:

```sh
python3 scripts/check_records.py
python3 scripts/check_records.py --records my-records.json --evidence-root my-evidence
python3 validation/test_records.py
```

Mẫu mặc định báo 20 trường hợp chưa chạy và đặt `performance_claim` thành null. Nó không biến mẫu trống thành tỷ lệ thành công.

Trình kiểm tra hồ sơ xác nhận không thiếu mẫu, mẫu chưa chạy không có điểm bịa ra, kiểu dữ liệu thời gian hợp lệ, hồ sơ hoàn thành có điểm và tệp chứng cứ, đường dẫn không vượt phạm vi. Nó không thể biết nhật ký có thật hay không, điểm có công bằng hay không, hoặc kết quả có đúng về ý nghĩa hay không. Hồ sơ tạm trong bài kiểm thử chỉ là fixture của trình kiểm tra, không phải quan sát về model.

## Quyết định có áp dụng quy trình hay không

Báo cáo riêng mẫu số, số lần thất bại, số trường hợp chưa biết và lỗi điển hình theo quy trình, loại mẫu và môi trường. Lỗi ranh giới an toàn không được bù bằng điểm cao ở khía cạnh khác; kết luận quan trọng thiếu bằng chứng cũng không thể đạt chỉ vì đủ định dạng.

Thỏa thuận điều kiện chấp nhận theo rủi ro tác vụ trước khi chạy; đừng liên tục hạ chuẩn sau khi thấy kết quả. Sau khi sửa quy trình, chạy lại các mẫu bị ảnh hưởng và giữ hồ sơ cũ để phân biệt việc sửa được lỗi với rò rỉ mẫu.

Bộ công cụ này chưa có kết quả đánh giá model thực tế. Nó cung cấp phương pháp, mẫu và cơ chế ghi nhận, chứ không kết luận “model nào tốt nhất” hoặc “tỷ lệ thành công là bao nhiêu”.
