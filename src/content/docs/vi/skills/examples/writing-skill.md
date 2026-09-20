---
title: "Ví dụ: Skill viết bài có nguồn và mẫu phong cách"
description: "Tải bộ viết bài theo nguồn đầy đủ để thực hành lập bản đồ khẳng định, sửa phong cách, giữ mâu thuẫn và kiểm tra thủ công."
contentType: skill
audiences: [creator]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Đã qua kiểm tra cấu trúc nguồn và trích dẫn cùng tám kiểm tra hồi quy. Bài viết và phong cách do tác giả tự rà soát; trường hợp kích hoạt là kỳ vọng thiết kế. Chưa thử chất lượng viết của mô hình hoặc định tuyến tự động."
  environment: "Python 3.12.11 / Darwin arm64; ba nguồn tổng hợp do tác giả tạo, bản sao tạm, không có thư viện phụ thuộc bên thứ ba."
  evidence:
    - label: "Phạm vi kiểm chứng và bản ghi tác giả tự rà soát"
      href: /downloads/skills/source-backed-writer/validation/record.md
assets:
  - path: /downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip
    purpose: "Skill, mẫu phong cách, nguồn tổng hợp, bản tham khảo, bản đồ khẳng định, diff sửa đổi và kiểm tra cấu trúc"
    license: CC0-1.0
    version: 1.0.0
locale: vi
source_locale: zh-CN
source_revision: cbaec37
translation_status: draft
translated_at: 2026-09-20
---
Skill này biến các nguồn được cung cấp thành bài viết có thể lần lại căn cứ, đồng thời giữ yêu cầu phong cách, bằng chứng và điểm chưa giải quyết. Nó phù hợp với viết theo nguồn và rà soát sự thật; sửa một lỗi chính tả không cần cả quy trình.

[Tải trọn bộ source-backed-writer v1.0.0](/downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip) · [Xem SKILL.md](/downloads/skills/source-backed-writer/SKILL.md) · [Hướng dẫn cài đặt](/downloads/skills/source-backed-writer/README.md)

## Trong gói có gì

| Tài liệu | Công dụng |
|---|---|
| Ba nguồn tổng hợp và chỉ mục hash | Luyện với đầu vào cố định mà không coi sản phẩm hư cấu là lựa chọn mua thật |
| Mẫu phong cách và phản ví dụ được thiết kế | Xem cách thay hứa hẹn kết quả không căn cứ bằng hành động cụ thể |
| Dàn ý, bản nháp, bản cuối và diff sửa đổi | Tách thay đổi về sự thật, cấu trúc và câu chữ |
| Bảy khẳng định được đối chiếu và danh sách chưa giải quyết | Tách căn cứ trong nguồn, suy luận của tác giả và thông tin chưa xác nhận |
| Ca kích hoạt đúng/sai, script và bản ghi kiểm chứng | Nêu phạm vi áp dụng và giới hạn kiểm tra |

Tài liệu dùng lại công cụ hư cấu “拾页” trong [bài tập viết theo nguồn](/vi/cases/write-an-article/). Bạn có thể hoàn thành bài tập ấy trước, rồi dùng Skill lưu phương pháp viết.

## Cài đặt và gọi lần đầu

Đặt toàn bộ thư mục trong `.agents/skills/source-backed-writer/` của dự án thực hành, bảo đảm `SKILL.md` nằm ngay cấp đầu tiên. Nếu có Skill trùng tên, hãy so sánh trước khi ghi đè. Xem [Dùng Skill](/vi/skills/use-a-skill/) về cách phát hiện; sau khi xác nhận có thể chọn trong client, hãy gọi rõ:

```text
$source-backed-writer Đọc ba nguồn trong sources/ của gói tài liệu này.
Viết bài giới thiệu cho tác giả cá nhân theo references/style.md,
lưu article.md, claim-map.csv và unresolved.md vào my-output/.
Giữ rõ tính tổng hợp của tài liệu. Không đăng tải.
```

Đọc và viết không đòi Python. Kiểm tra cấu trúc tùy chọn chỉ dùng thư viện chuẩn Python 3.10+. Chạy trong thư mục Skill đã giải nén:

```sh
# Kiểm tra bản tham khảo đi kèm
python3 scripts/check_article.py
# Kiểm tra bản bạn viết theo định dạng của gói
python3 scripts/check_article.py --output my-output
# Tái hiện tám kiểm tra trên bản sao tạm
python3 validation/test_checks.py
```

Trang này thực chạy script, chưa kiểm tra tự động phát hiện hoặc gọi mô hình trong một client cụ thể. Với tác vụ thật dùng định dạng đầu ra riêng, hãy kiểm tra theo thỏa thuận của mình thay vì ép vào định dạng gói học tập.

## Phong cách ảnh hưởng bài viết ra sao

[Mẫu phong cách](/downloads/skills/source-backed-writer/references/style.md) cho một so sánh được thiết kế:

> Phản ví dụ: 拾页 là công cụ vạn năng, xử lý dễ dàng mọi định dạng và tăng gấp đôi hiệu suất của bạn.

Sửa thành: “Tài liệu chỉ nêu Markdown và văn bản thuần. Trước hết thử trên một bản sao nhỏ của ghi chú, rồi quay lại nguyên văn mà bản tóm tắt trỏ tới.” Câu đầu có trong nguồn, câu sau là lời khuyên của tác giả; phải tách trong bản đồ khẳng định. Nếu người dùng yêu cầu giọng điệu hoặc cấu trúc khác, làm theo tác vụ thực tế.

[Xem bản cuối tham khảo](/downloads/skills/source-backed-writer/solution/article.md) · [Bản đồ khẳng định](/downloads/skills/source-backed-writer/solution/claim-map.csv) · [Diff sửa đổi](/downloads/skills/source-backed-writer/solution/revision.diff)

## Xử lý mâu thuẫn và phần thiếu

Mô tả sản phẩm P3 nói tải dữ liệu chẩn đoán mặc định tắt, nhưng tóm tắt phiên bản C2 nói mặc định bật ở cài đặt mới. Bản cuối nêu cả hai, không cho rằng bản có ngày muộn hơn tự động đúng. Các trường được tải lên không được cung cấp, nên vẫn nằm trong [danh sách chưa giải quyết](/downloads/skills/source-backed-writer/solution/unresolved.md).

Phỏng vấn tổng hợp không có đo thời gian hoặc mẫu đánh giá cố định, nên không thể viết “hiệu suất gấp đôi” hay tính độ chính xác. Cách sửa là xóa số liệu không căn cứ, đưa lại giới hạn và cập nhật bản đồ khẳng định; tìm một câu trả lời có vẻ đáng tin về sản phẩm hư cấu không giải quyết được.

## Nghiệm thu và giới hạn kiểm tra

Sau khi viết, kiểm tra từng mục:

- Khẳng định quan trọng có vị trí để lần lại; sự thật, lời khuyên và điều chưa biết được tách riêng.
- Tính hư cấu, giới hạn đầu vào và mâu thuẫn chưa giải quyết vẫn có trong bài.
- Sửa phong cách không xóa điều kiện cần thiết hoặc đổi cấu trúc người dùng yêu cầu.
- Sau khi định dạng trích dẫn đạt, đối chiếu từng câu với nguồn, không chỉ kiểm tra ID có tồn tại.

Script tìm được thay đổi hash nguồn và lỗi cấu trúc trích dẫn, nhưng không biết nguồn có thực sự hỗ trợ ý nghĩa của khẳng định không. Gói cố ý kiểm tra một lời hứa năng lực sai: nếu gắn ID hợp lệ, nó vẫn qua kiểm tra cấu trúc. Con người vẫn phải rà soát sự thật.

## Khi nào không nên kích hoạt

Sửa lỗi chính tả, rà soát patch Git hay thêm tính năng phần mềm không nên tự chuyển thành nhiệm vụ viết cả bài. Hoàn thành bài viết không đồng nghĩa có quyền đăng. [Các ca kích hoạt](/downloads/skills/source-backed-writer/fixtures/trigger-cases.json) là kỳ vọng thiết kế, không phải báo cáo tỷ lệ định tuyến thành công.

Sau đó quay về [lộ trình người sáng tạo](/vi/guide/learning-paths/creator/) và ghi phong cách cùng tiêu chí nghiệm thu đã dùng vào hướng dẫn tái sử dụng của mình.
