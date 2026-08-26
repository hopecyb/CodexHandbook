---
title: scripts/ và kiểm thử
description: Thêm script xác định vào Skill và Kiểm chứng hành vi của chúng.
locale: vi
source_locale: zh-CN
source_revision: 5a7da46
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Khi mới làm Skill, cách thường gặp là nhét hết vào `SKILL.md`. Quy trình đơn giản thì được, nhưng hễ một bước cần chạy **ổn định, lặp lại, Kiểm chứng được**, script đáng tin hơn mô tả thuần chữ.

Hành động cố định giao cho script; phán đoán và quy trình cộng tác để Skill lo.

# scripts/ và kiểm thử

Khi một bước phải chạy xác định (chạy test, sinh diff, kiểm tra định dạng), hãy cung cấp script trong `scripts/` và nói rõ trong `SKILL.md` khi nào gọi.

## Ví dụ

```text
my-skill/
├── SKILL.md
└── scripts/
    └── run-checks.sh
```

## Khi nào nên cân nhắc `scripts/`

Nếu một bước thỏa bất kỳ điều nào sau, nên ưu tiên cân nhắc script:

- Mỗi lần phải chạy hoàn toàn giống nhau
- Mã thoát bản thân đã mang nghĩa
- Mô tả bằng ngôn ngữ tự nhiên sẽ rất dài dòng
- Bạn muốn sau này CI hoặc công cụ khác cũng tái dùng được

Các hành động như"chạy kiểm tra""sinh diff""xác minh định dạng""xuất báo cáo cố định"đều phù hợp đưa vào script.

## Gợi ý kiểm thử

- Chạy thủ công script trong repo luyện tập, xác nhận mã thoát và đầu ra
- Dùng Skill kích hoạt quy trình end-to-end, kiểm tra có gọi script đúng kỳ vọng không
- Kịch bản nhóm: Kiểm chứng trong CI hoặc pre-commit rằng script vẫn dùng được

## Hiểu lầm thường gặp

### 1. Viết script rồi Skill sẽ phức tạp, nên đừng dùng

Nếu script cố định được một bước vốn rất không ổn định, tổng thể ngược lại đơn giản hơn.

### 2. Script chạy local được thì Skill chắc chắn ổn

Còn phải xem:

- Skill có kích hoạt đúng không
- Chính sách Phê duyệt có chặn không
- Trong môi trường nhóm hoặc CI còn chạy bình thường không

### 3. "Kiểm thử Skill"chỉ là kiểm thử script

Không đủ.

Script kiểm một hành động;  
Skill còn phải kiểm"khi nào gọi, gọi thế nào, đầu ra có đúng kỳ vọng không".

## Thứ tự Kiểm chứng thường gặp

Khi mới bắt đầu, có thể theo thứ tự:

1. Chạy script riêng trước
2. Xem mã thoát và đầu ra có rõ không
3. Rồi để Skill gọi một vòng quy trình đầy đủ
4. Rồi đo lại ở chỗ gần môi trường thật hơn

Dễ hơn để tách"script bản thân hỏng"và"cách tích hợp Skill không đúng".

Hành động chạy lặp ổn định đừng chỉ dựa mô tả chữ. Chạy thông script trước, rồi xác nhận Skill gọi không có vấn đề.

Script kế thừa chính sách Phê duyệt hiện tại; xem [quy tắc lệnh](/vi/guide/customization/rules/command-rules/) và [bảo mật Skill](/vi/skills/security/).
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở Kiểm chứng:** Runtime Codex hiện tại cho phép kỹ năng kết hợp script và lệnh xác định; trang này nhấn mạnh nguyên tắc"hành động ổn định thì script hóa, quy trình vẫn do Skill ràng buộc", khớp năng lực hiện hành.  
**Kiểm chứng gần nhất:** 2026-07-26
