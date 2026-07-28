---
title: Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng
description: Quy trình chính dùng chung của Codex — bốn giai đoạn điểm kiểm tra, ổn hơn «một bước xong».
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Đây là quy trình mặc định sổ tay khuyến nghị, phù hợp đi từ “chưa rõ làm thế nào” tới “có thể merge”.

## Tổng quan bốn giai đoạn

```text
① Khám phá Explore   → Làm rõ hiện trạng, phạm vi, rủi ro
② Kế hoạch Plan      → Bước, tệp, tiêu chí nghiệm thu (tác vụ lớn cần bạn xác nhận)
③ Thực thi Execute   → Sửa code/tài liệu/cấu hình, commit bước nhỏ
④ Kiểm chứng Verify  → Test, review diff, đối chiếu «định nghĩa hoàn thành»
```

Đừng bỏ ①② nhảy thẳng ③ — dễ thành “đoán rồi sửa”. Xem [chẩn đoán trước khi sửa](/cases/workflows/diagnose-before-fixing/).

## ① Khám phá

**Mục tiêu:** Nói rõ hiện trạng trước, rồi mới quyết cách sửa.

Ví dụ prompt:

```text
Chưa sửa code. Đọc @src/auth/ và test liên quan, nêu bằng danh sách:
1. Luồng đăng nhập hiện tại
2. Tệp có thể liên quan tới bug layout Safari
3. Điểm bạn chưa chắc, cần tôi xác nhận
```

Đầu ra: phát biểu vấn đề, phạm vi ảnh hưởng, mục cần xác nhận.

## ② Kế hoạch

**Mục tiêu:** Checklist bước có thể review.

```text
Dựa trên khám phá vừa rồi, đưa kế hoạch: số bước, tệp liên quan, mỗi bước kiểm chứng thế nào.
Trước khi tôi trả lời «thực thi theo kế hoạch» thì chưa viết code.
```

Tác vụ lớn hoặc thay đổi rủi ro cao phải chờ xác nhận. Tác vụ nhỏ có thể thỏa thuận “kế hoạch không quá 3 bước thì tự thực thi”, rồi ghi vào [AGENTS.md](/guide/customization/agents-md/writing-effective-instructions/).

## ③ Thực thi

**Mục tiêu:** Giữ thay đổi bước nhỏ, hoàn tác được.

- Mỗi lần tập trung một mục tiêu con
- Ưu tiên đường đi test bao phủ được
- Gặp vấn đề ngoài kế hoạch thì **quay lại ②**, đừng cố xông

Câu dẫn: «Thực thi bước 2; nếu cần đổi kế hoạch thì dừng và giải thích trước.»

## ④ Kiểm chứng

**Mục tiêu:** Chứng minh «định nghĩa hoàn thành» đã thỏa.

| Loại kiểm chứng | Cách làm |
|---|---|
| Tự động | Unit test, lint, kiểm tra kiểu |
| Thủ công | Đọc diff, thử tay đường then chốt |
| Artifact | Ảnh chụp, đoạn log, phản hồi API |

Checklist liên quan xem [định nghĩa hoàn thành](/prompts/define-done/) và [chạy test](/guide/quality/run-tests/).

## Cắt theo quy mô tác vụ

| Quy mô | Khám phá | Kế hoạch | Thực thi | Kiểm chứng |
|---|---|---|---|---|
| Sửa typo | Có thể bỏ | 1 bước miệng | Ngắn | lint |
| Bug một tệp | Nhẹ | 3–5 bước | Trung bình | test + diff |
| Tính năng xuyên module | Bắt buộc | Kế hoạch viết + xác nhận | Theo giai đoạn | Test đầy đủ + thử tay |
| Sự cố production | Ưu tiên chẩn đoán | Phương án hoàn tác trước | Bước cực nhỏ | Giám sát + rút kinh nghiệm |

## Với mẫu case EPXV

Nhóm có thể ghi bốn giai đoạn vào [mẫu case](/cases/use-cases/case-study-template/) và mô tả PR, tạo ngôn ngữ thống nhất.

## Lỗi thường gặp

- Kế hoạch chỉ ở trong đầu, giai đoạn thực thi lệch hướng
- Kiểm chứng chỉ làm «trông như chạy được»
- Khám phá thiếu dẫn tới sửa sai module

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các trang lập kế hoạch, chẩn đoán, định nghĩa hoàn thành, chạy test và `AGENTS.md` đã kiểm chứng của sổ tay; nội dung trang giới hạn ở chuỗi cộng tác chính bốn giai đoạn và điểm kiểm tra, không gồm tham số sản phẩm hay chi tiết lối vào dễ đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
