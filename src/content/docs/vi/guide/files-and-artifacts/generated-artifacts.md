---
title: Nghiệm thu artifact tạo ra
description: Nghiệm thu có hệ thống tệp, báo cáo và artifact build mà Codex tạo mới hoặc xuất.
locale: vi
source_locale: zh-CN
source_revision: 4b46d0b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Khi Agent hoàn thành tác vụ có thể tạo mới báo cáo, script, site tĩnh, dữ liệu kiểm thử và các **artifact** khác. Chúng chưa chắc đi qua đường rà soát mã bạn quen, nên cần thói quen nghiệm thu riêng.

Tệp do Codex mới tạo không nghĩa đã có thể dùng thẳng.

## Nội dung trang này

- Khác biệt nghiệm thu giữa artifact và «sửa mã hiện có»
- Danh sách kiểm tra
- Khi nào từ chối, yêu cầu làm lại

## Loại artifact

| Loại | Trọng tâm nghiệm thu |
|---|---|
| Script `.sh` `.py` | Chạy được, vô hại, idempotent |
| Báo cáo `.md` `.html` | Sự kiện chính xác, liên kết hiệu lực |
| Đầu ra build `dist/` | Có nên gitignore không |
| Fixture kiểm thử | Không có PII thật |
| Mẫu cấu hình | Không mật khẩu yếu mặc định |

## “Artifact” ở đây là gì

“Artifact” ở đây là:

- Tệp nó viết mới giúp bạn
- Báo cáo nó xuất giúp bạn
- Trang, thư mục hoặc gói nó build giúp bạn

Những thứ này khác “chỉ sửa vài dòng mã hiện có”, vì dễ hơn để bạn bỏ qua nội dung thật.

## Quy trình nghiệm thu

```text
1. Mở artifact (đừng chỉ xem tóm tắt chữ của Agent)
2. Đối chiếu «định nghĩa hoàn thành» trong tác vụ
3. Chạy lệnh kiểm thử hoặc xem trước liên quan
4. Kiểm đường dẫn, quyền, dung lượng
5. Quyết định: nhận / sửa cục bộ / bỏ làm lại
```

Phương pháp: [Kiểm chứng artifact](/vi/guide/quality/verify-artifacts/), [Định nghĩa hoàn thành](/vi/guide/quality/definition-of-done/)

## Hiểu lầm thường gặp

### 1. Nó nói “đã xong” vẫn phải xem artifact thật

Tóm tắt chỉ nói “nó nghĩ mình đã làm gì”, không thay bạn mở tệp xác nhận “artifact thật trông thế nào”.

### 2. Tệp mới chưa chắc an toàn hơn sửa tệp cũ

Tệp mới cũng có thể có:

- Nội dung sai
- Dependency thừa
- Lộ thông tin
- Tệp lớn không nên commit vào kho

### 3. Chỉ cần chạy ra được chưa chắc đáng commit

Một số artifact chỉ phù hợp dùng tạm cục bộ, không phù hợp vào Git.

## Quan hệ với Git

- Nói rõ artifact nào **nên commit**, cái nào nên `.gitignore`
- Tránh một PR lẫn megabytes cache build
- Artifact lớn dùng CI artifact hoặc lưu trữ ngoài

## Thứ tự nghiệm thu thường dùng

Nếu vừa nhận một lô artifact, có thể xem theo thứ tự:

1. Xác nhận đã tạo những tệp gì
2. Mở artifact then chốt nhất
3. Xem có rơi trong thư mục được phép không
4. Xem có nên commit vào kho không
5. Rồi quyết nhận, sửa hay làm lại

## Artifact không đáng tin

Với tác vụ kho không đáng tin hoặc dữ liệu ngoài dẫn dắt:

- Đọc script trước rồi mới chạy
- Cảnh giác `curl | bash`, payload làm rối
- Xem trước trong Sandbox hoặc container

Artifact không chỉ xem “đã tạo”. Ít nhất phải mở xem, kiểm chứng, và biết có nên commit không.

## Lỗi thường gặp

- Chỉ xem bullet summary của Agent mà không mở tệp
- Commit đầu ra gỡ lỗi một lần vào main
- Báo cáo HTML chứa pixel theo dõi hoặc script liên kết ngoài chưa rà

## Danh sách nghiệm thu

- [ ] Mỗi đường dẫn tệp mới trong phạm vi cho phép
- [ ] Mở và quét nội dung chính
- [ ] Kiểm tự động (lint/test/link check) đã chạy
- [ ] Không secrets, không thư mục sinh thừa

## Nguồn tham khảo
- [Xử lý sự không chắc chắn](/vi/guide/quality/handle-uncertainty/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với các chương kiểm chứng artifact, định nghĩa hoàn thành, xử lý sự không chắc chắn và artifact tệp đã kiểm chứng trong sổ tay; trang này tập trung phương pháp nghiệm thu ổn định “tạo không bằng giao được, phải mở nghiệm thu, nói rõ có nên commit”.  
**Kiểm chứng gần nhất:** 2026-07-26
