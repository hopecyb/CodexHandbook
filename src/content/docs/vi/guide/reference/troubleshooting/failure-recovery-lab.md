---
title: Năm bài thực hành khôi phục lỗi có nhật ký chạy thực tế
description: Dùng nhật ký CLI thực tế để tìm lỗi nguồn, trích dẫn, gắn đầu vào, phạm vi thư mục và tệp trạng thái; mỗi lần chỉ thay một biến.
contentType: case
audiences: [creator, developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Năm lỗi được cố ý thiết kế đã được chạy thật; mỗi lỗi được sửa bằng một thay đổi duy nhất rồi chạy lại thành công. Hash đầu vào gốc giữ nguyên. Đây không phải sự cố sản xuất hay thí nghiệm đo tỷ lệ thành công của model.
  environment: Python 3.12.11 / Darwin arm64; bản sao tạm và đầu vào tổng hợp, không dùng mạng hoặc gọi model.
  evidence:
    - label: Tóm tắt năm lần chạy thực tế
      href: /downloads/failure-recovery/validation/summary.json
    - label: Phạm vi xác minh
      href: /downloads/failure-recovery/validation/record.md
assets:
  - path: /downloads/failure-recovery/failure-recovery-1.0.0.zip
    purpose: Năm lỗi có thể tái hiện, script và đầu vào liên quan, nhật ký trước và sau khi sửa cùng hướng dẫn chạy
    license: CC0-1.0
    version: 1.0.0
locale: vi
source_locale: zh-CN
source_revision: fc91872
translation_status: draft
translated_at: 2026-09-20
---

Trước tiên lưu lỗi, sau đó xác định lớp nào thất bại, cuối cùng chỉ thay một biến rồi chạy lại. Trang này minh họa quá trình bằng năm bộ đầu vào cố định. Tác giả cố tình tạo lỗi; nhật ký là kết quả chạy lệnh thực tế, không giả làm sự cố của khách hàng.

[Tải gói thực hành khôi phục đầy đủ](/downloads/failure-recovery/failure-recovery-1.0.0.zip) · [README](/downloads/failure-recovery/README.md)

## Tái hiện lỗi trước

Chỉ cần thư viện chuẩn Python 3.10 trở lên, không cần tài khoản hoặc mạng. Chạy trong thư mục đã giải nén:

```sh
python3 scripts/reproduce.py --output my-recovery-logs
```

Thư mục đầu ra phải chưa tồn tại để tránh ghi đè chứng cứ cũ. Script chạy trên bản sao tạm. Cả năm lần chạy trước sửa phải trả mã khác 0; sau sửa đều trả 0, còn đầu vào gốc không đổi. Mỗi nhật ký có lệnh, mã thoát, đầu ra chuẩn và lỗi chuẩn. Đường dẫn tạm được chuẩn hóa thành `<WORK>`.

## 1. Hash nguồn không khớp

**Triệu chứng:** `FAIL: Source changed: P`, mã thoát 1.

**Chẩn đoán:** Một đoạn văn bị thêm nhầm vào tệp nguồn cố định, trong khi chỉ mục nguồn không đổi. Đối chiếu tài liệu gốc trước; đừng chỉ cập nhật hash để phép kiểm tra báo đạt.

**Thay đổi duy nhất:** Khôi phục đúng byte gốc đã biết của một tệp nguồn này. Giữ nguyên tài liệu khác, bài viết và chỉ mục. Chạy lại trả mã 0.

[Nhật ký lỗi](/downloads/failure-recovery/validation/01-source-changed-before.json) · [Nhật ký khôi phục](/downloads/failure-recovery/validation/01-source-changed-after.json)

Nếu nguồn thật sự thay đổi, hãy kiểm tra lại phiên bản, nội dung, kết luận và giữ hồ sơ nguồn mới. Việc khôi phục tệp cũ trong ví dụ này chỉ đúng vì đã xác định đây là thay đổi nhầm.

## 2. Trích dẫn trong bài không có trong bảng sự thật

**Triệu chứng:** `FAIL: Unmapped or unused claim ID`, mã thoát 1.

**Chẩn đoán:** Bài viết ghi F99 thay vì F1; bảng sự thật không có F99. Kiểm tra P1 cho thấy câu đó vẫn gắn với F1.

**Thay đổi duy nhất:** Chỉ sửa mã bị gõ nhầm về F1 và chạy lại, trả mã 0. Đừng tạo thêm dòng sự thật để che một trích dẫn chưa biết.

[Nhật ký lỗi](/downloads/failure-recovery/validation/02-unmapped-citation-before.json) · [Nhật ký khôi phục](/downloads/failure-recovery/validation/02-unmapped-citation-after.json)

Mã đúng chưa chứng minh cách viết được nguồn hỗ trợ; vẫn phải kiểm tra từng câu. Xem [Skill viết bài](/vi/skills/examples/writing-skill/).

## 3. Đề xuất phân loại không khớp đầu vào

**Triệu chứng:** `FAIL: Stale input hash`, mã thoát 1.

**Chẩn đoán:** Hash đầu vào trong đề xuất không khớp Issue cố định hiện tại. Bài thực hành cố ý làm hỏng hash của đề xuất để kích hoạt phép kiểm tra gắn đầu vào.

**Thay đổi duy nhất:** Thay bằng toàn bộ đề xuất tham chiếu đã đối chiếu với đầu vào hiện tại. Giữ nguyên đầu vào và schema rồi chạy lại, trả mã 0. Không chạy model để phân loại Issue lại, cũng không chỉ tính lại hash để dùng kết luận cũ.

[Nhật ký lỗi](/downloads/failure-recovery/validation/03-stale-proposal-before.json) · [Nhật ký khôi phục](/downloads/failure-recovery/validation/03-stale-proposal-after.json)

Khi nội dung Issue thật thay đổi, phải phân tích lại ảnh hưởng của thay đổi đối với kết luận. Xem [tình huống phân loại Issue](/vi/cases/use-cases/team-automation/issue-triage-suggestions/).

## 4. Dùng tệp trạng thái cho thư mục khác

**Triệu chứng:** `State version/site mismatch`, mã thoát 3.

**Chẩn đoán:** Trạng thái gắn với site fixed nhưng tham số `--site` lại trỏ đến broken. Lỗi xảy ra ở phép kiểm tra phạm vi; bản thân các liên kết không đột nhiên hỏng.

**Thay đổi duy nhất:** Chỉ đổi `--site` về thư mục gốc, giữ nguyên tệp trạng thái và tham số khác. Chạy lại trả mã 0; lần gọi sai không ghi đè trạng thái đã có.

[Nhật ký lỗi](/downloads/failure-recovery/validation/04-wrong-site-scope-before.json) · [Nhật ký khôi phục](/downloads/failure-recovery/validation/04-wrong-site-scope-after.json)

Nếu thật sự cần giám sát site khác, hãy tạo trạng thái riêng cho nó. Đừng xóa trạng thái cũ để vượt qua cơ chế bảo vệ phạm vi.

## 5. JSON trạng thái bị hỏng

**Triệu chứng:** phân tích JSON thất bại, chương trình báo `stopped` và thoát mã 3.

**Chẩn đoán:** Tệp trạng thái bị cắt cụt, không thể đọc an toàn lịch sử và mốc khử trùng lặp. Chương trình từ chối tiếp tục, giữ nội dung hỏng và không âm thầm đặt lại thành trạng thái trống.

**Thay đổi duy nhất:** Khôi phục bản sao lưu đã biết là tốt được lưu trước bài thực hành. Giữ nguyên lệnh và site. Chạy lại trả mã 0.

[Nhật ký lỗi](/downloads/failure-recovery/validation/05-corrupt-state-before.json) · [Nhật ký khôi phục](/downloads/failure-recovery/validation/05-corrupt-state-after.json)

Nếu không có bản sao lưu, trước tiên hãy giữ tệp hỏng, kiểm tra hồ sơ chạy rồi tái tạo trạng thái thủ công. Xóa thẳng trạng thái có thể làm mất sự kiện chờ gửi và tạo ứng viên trùng. Xem [Skill tự động hóa](/vi/skills/examples/automation-skill/).

## Áp dụng cho tác vụ của bạn

Lưu phiên bản đầu vào, lệnh thực tế và toàn bộ lỗi. Xác định vấn đề nằm ở đầu vào, cấu trúc, phạm vi hay trạng thái. Ghi một nguyên nhân cần kiểm tra, chỉ thay biến liên quan, chạy lại cùng phép kiểm tra và giữ kết quả. Sau khi khôi phục, còn phải xác minh mục tiêu ban đầu đã đạt; chỉ xem mã thoát là chưa đủ.

Các bài thực hành không bao gồm lỗi đăng nhập thật, Skill không kích hoạt trong ứng dụng khách, hạn chế mạng hoặc lỗi phê duyệt. Gặp các vấn đề đó, hãy quay về [mục lục xử lý sự cố theo triệu chứng](/vi/guide/reference/troubleshooting/) và lưu thông tin môi trường thực tế. Đừng xem hiện tượng của script ở đây là bảo đảm về hành vi ứng dụng khách.
