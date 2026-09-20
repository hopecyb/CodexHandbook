---
title: 'Ví dụ: Skill tự động hóa chỉ ghi nhận thay đổi'
description: Tải quiet-link-monitor và kiểm tra thủ công việc lặp lại, phục hồi sau lỗi, sự kiện bền vững và điều kiện dừng.
contentType: skill
audiences: [developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Tám bài kiểm tra trạng thái và ba lần chạy CLI đều đạt. Lỗi lặp lại không tạo sự kiện mới, còn sửa lỗi sẽ ghi nhận phục hồi. Chưa kiểm tra lập lịch thực tế, định tuyến mô hình hay chuyển phát tin nhắn.
  environment: Python 3.12.11 / Darwin arm64; website tĩnh giả lập tạm thời, chỉ thư viện chuẩn, không có mạng.
  evidence:
    - label: Biên bản chạy thực tế
      href: /downloads/skills/quiet-link-monitor/validation/record.md
assets:
  - path: /downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip
    purpose: Skill tự động hóa, bộ kiểm tra liên kết, tập lệnh trạng thái bền vững, mẫu lỗi và biên bản xác minh
    license: CC0-1.0
    version: 1.0.0
locale: vi
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 6c758b9
---

Chạy kiểm tra lặp lại không có nghĩa lần nào cũng phải thông báo. Skill này dùng lại [bài tập kiểm tra liên kết](/vi/cases/use-cases/team-automation/scheduled-link-check/) và ghi nhận thay đổi, phục hồi, lỗi thực thi. Khi kết quả không đổi, nó giữ im lặng.

[Tải quiet-link-monitor v1.0.0](/downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip) · [SKILL.md](/downloads/skills/quiet-link-monitor/SKILL.md) · [README](/downloads/skills/quiet-link-monitor/README.md)

## Cài đặt và diễn tập thủ công

Đặt toàn bộ thư mục vào `.agents/skills/quiet-link-monitor/` của dự án thực hành; không ghi đè Skill trùng tên. Theo [hướng dẫn dùng Skill](/vi/skills/use-a-skill/) để xác nhận có thể chọn rồi gọi:

```text
$quiet-link-monitor Dùng các mẫu trong gói để diễn tập lỗi, kiểm tra lặp và
phục hồi. Làm việc trên bản sao tạm, lưu trạng thái riêng, cuối cùng báo cáo
thay đổi của các sự kiện. Không gửi thông báo.
```

Có thể chạy tập lệnh riêng, không cần mô hình hay tài khoản. Chỉ cần thư viện chuẩn Python 3.10 trở lên:

```sh
python3 validation/test_monitor.py
```

Để thao tác thủ công, sao chép `fixtures/broken` thành `work-site` của bạn. Trong thư mục Skill, chạy liên tiếp hai lần:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

Lần đầu thoát mã 1 và ghi sự kiện lỗi. Lần thứ hai vẫn thoát mã 1 nhưng `new_event` là null. Dựa vào `fixtures/fixed` để sửa chính thư mục đó rồi chạy lại: thoát mã 0 và có `recovered`. Đừng đổi sang đường dẫn site khác để giả lập phục hồi; kiểm tra trạng thái sẽ từ chối thay đổi phạm vi.

[Tóm tắt ba lần chạy CLI thực tế](/downloads/skills/quiet-link-monitor/validation/manual-run.json)

## Ghi nhận điều gì và khi nào dừng

Tệp trạng thái phải nằm ngoài thư mục được kiểm tra. Nó lưu kết quả mỗi lần chạy, số lỗi thực thi liên tiếp và các sự kiện bền vững. Tập lệnh ghi tệp này và tệp khóa bên cạnh, nên không phải thao tác chỉ đọc hoàn toàn. Nội dung website không bị sửa.

| Tình huống | Hành vi |
|---|---|
| Lần đầu khỏe mạnh | Tạo mốc cơ sở, không có sự kiện mới |
| Lần đầu lỗi hoặc vấn đề được phát hiện thay đổi | Lưu sự kiện thay đổi |
| Kết quả tương tự lặp lại | Không tạo sự kiện mới |
| Lỗi đã sửa | Lưu sự kiện phục hồi |
| Ba lỗi thực thi kiểm tra liên tiếp | Lưu sự kiện dừng và tạm ngưng |
| Trạng thái hỏng, xung đột khóa hoặc site không khớp | Dừng ngay, không ghi đè trạng thái gốc |

Liên kết hỏng là kết quả kiểm tra hợp lệ, không tính là lỗi thực thi. Sau khi tạm ngưng, lời gọi thông thường sẽ không kiểm tra tiếp. Xác định và sửa nguyên nhân rồi tiếp tục một cách tường minh:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

Đừng tự động xóa khóa hoặc trạng thái để né lỗi. Tiến trình sập có thể để lại khóa; trước tiên xác nhận không còn tiến trình đang chạy. [Hướng dẫn trạng thái và phục hồi](/downloads/skills/quiet-link-monitor/references/operations.md) nêu mã thoát, lưu giữ và giới hạn chạy đồng thời.

## Ứng viên thông báo không đồng nghĩa đã gửi

Tập lệnh chỉ ghi sự kiện cục bộ. Mọi giá trị `delivery` đều là `not-sent`; nó không tạo lịch hay gửi tin nhắn. Mỗi sự kiện có ID ổn định cho bản ghi đó; kết quả lặp không tạo lại sự kiện cùng trạng thái.

Nếu kết nối bộ gửi đã được cho phép, hãy đọc sự kiện bền vững chưa chuyển phát, loại trùng theo ID và lưu xác nhận chuyển phát. Chỉ đọc `new_event` của lần chạy này trên terminal có thể bỏ sót sự kiện sau khi tiến trình bị gián đoạn. Gói không có bộ gửi và không cam kết chuyển phát đúng một lần giữa các hệ thống.

## Từ chạy thủ công đến chạy định kỳ

Xác nhận build thành công rồi mới kiểm tra đầu ra mới nhất. Nếu build thất bại thì dừng, không kiểm tra thư mục cũ. Mỗi lần chạy theo lịch cần dùng cùng site và tệp trạng thái, tránh ghi đồng thời. Kích hoạt thủ công trong môi trường đích để kiểm tra nhật ký và hành vi dừng trước khi đặt lịch lặp. Kênh, người nhận và phạm vi thông báo thực tế phải dựa trên sự cho phép đã có.

Lập lịch thực tế và chuyển phát tin nhắn chưa được thử ở đây. Liên kết ngoài vẫn là `unchecked`; trạng thái cục bộ khỏe mạnh không có nghĩa “mọi liên kết trên site đều hoạt động”.

## Phạm vi và nghiệm thu

Skill phù hợp để kiểm tra lặp lại liên kết tài liệu. Báo cáo bán hàng thông thường, viết sáng tạo và tự động cài đặt vào môi trường sản xuất không thuộc khả năng của gói. Tình huống kích hoạt là kỳ vọng thiết kế, chưa đo định tuyến của mô hình.

Để hoàn thành bài tập, hãy xuất trình biên bản lỗi lần đầu, lần lặp im lặng và phục hồi sau sửa, cùng bằng chứng tạm ngưng và tiếp tục tường minh. Tám bài kiểm tra trong gói xác minh những hành vi trạng thái cục bộ này; chúng không chứng minh phán đoán của mô hình, khả năng kết nối mạng hay độ tin cậy sản xuất.
