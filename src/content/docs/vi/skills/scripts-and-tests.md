---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Runtime Codex hiện tại cho phép kỹ năng kết hợp script và lệnh xác định; trang này nhấn mạnh nguyên tắc “viết script cho các thao tác ổn định, còn quy trình vẫn do Skill ràng buộc”, khớp năng lực hiện hành."
  checkedAt: "2026-07-26"
title: scripts/ và kiểm thử
description: Thêm script xác định vào Skill và Kiểm chứng hành vi của chúng.
locale: vi
source_locale: zh-CN
source_revision: "900e6e4"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---

Khi mới làm Skill, cách thường gặp là nhét hết vào `SKILL.md`. Quy trình đơn giản thì được, nhưng hễ một bước cần chạy **ổn định, lặp lại, kiểm chứng được**, script đáng tin hơn mô tả thuần chữ.

Hành động cố định giao cho script; phán đoán và quy trình cộng tác để Skill lo.


Khi một bước phải chạy xác định (chạy test, sinh diff, kiểm tra định dạng), hãy cung cấp script trong `scripts/` và nói rõ trong `SKILL.md` khi nào gọi.

![Minh họa: trợ lý giao một bước lặp lại cho một cỗ máy (script xác định), đầu ra đi qua trạm kiểm thử — đèn xanh đạt, một đèn đỏ đang được sửa](/illustrations/skills-scripts.webp)

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

Các hành động như “chạy kiểm tra”, “tạo diff”, “xác minh định dạng”, “xuất báo cáo theo quy trình cố định” đều phù hợp đưa vào script.

## Gợi ý kiểm thử

- Chạy thủ công script trong repo luyện tập, xác nhận mã thoát và đầu ra
- Dùng Skill kích hoạt quy trình end-to-end, kiểm tra có gọi script đúng kỳ vọng không
- Kịch bản nhóm: kiểm chứng trong CI hoặc pre-commit rằng script vẫn dùng được

## Hiểu lầm thường gặp

### 1. Viết script rồi Skill sẽ phức tạp, nên đừng dùng

Nếu script cố định được một bước vốn rất không ổn định, tổng thể ngược lại đơn giản hơn.

### 2. Script chạy local được thì Skill chắc chắn ổn

Còn phải xem:

- Skill có kích hoạt đúng không
- Chính sách phê duyệt có chặn không
- Trong môi trường nhóm hoặc CI còn chạy bình thường không

### 3. “Kiểm thử Skill” chỉ là kiểm thử script

Không đủ.

Script kiểm một hành động;
Skill còn phải kiểm “khi nào gọi, gọi thế nào, đầu ra có đúng kỳ vọng không”.

## Thứ tự kiểm chứng thường gặp

Khi mới bắt đầu, có thể theo thứ tự:

1. Chạy script riêng trước
2. Xem mã thoát và đầu ra có rõ không
3. Rồi để Skill gọi một vòng quy trình đầy đủ
4. Sau đó kiểm thử lại trong môi trường gần với thực tế hơn

Cách này giúp phân biệt lỗi của chính script với lỗi trong cách Skill tích hợp script.

Hành động chạy lặp ổn định đừng chỉ dựa mô tả chữ. Chạy thành công script trước, rồi xác nhận Skill gọi không có vấn đề.

Script kế thừa chính sách phê duyệt hiện tại; xem [quy tắc lệnh](/vi/guide/customization/rules/command-rules/) và [bảo mật Skill](/vi/skills/security/).
