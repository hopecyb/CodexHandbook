---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Đã đối chiếu với các trang đã kiểm chứng của sổ tay về lập kế hoạch, chẩn đoán, định nghĩa hoàn thành, chạy kiểm thử và AGENTS.md. Trang này chỉ đề cập quy trình cộng tác bốn giai đoạn cùng các điểm kiểm tra, không gồm tùy chọn sản phẩm dễ thay đổi."
  checkedAt: "2026-07-26"
title: "Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng"
description: "Điều chỉnh việc khám phá, lập kế hoạch, thực thi và kiểm chứng theo phạm vi và độ bất định của tác vụ; nêu rõ quyết định nào cần chờ."
locale: vi
source_locale: zh-CN
source_revision: "4a95760"
translation_status: draft
translated_at: 2026-09-20
---

Đây là cách sổ tay khuyến nghị tổ chức tác vụ, từ 'chưa rõ cách làm' đến 'sẵn sàng nghiệm thu'. Bốn giai đoạn không đồng nghĩa với bốn lần phê duyệt. Tác vụ nhỏ có phạm vi rõ có thể hoàn thành liền mạch; chỉ chờ quyết định khi phương án chưa được chọn hoặc còn thiếu quyền cần thiết. Trước tiên, hãy xem [phân cấp tác vụ](/vi/prompts/ask-for-a-plan/).

## Tổng quan bốn giai đoạn

```text
① Khám phá Explore   → Hiểu hiện trạng, phạm vi, rủi ro
② Kế hoạch Plan      → Các bước, tệp, tiêu chí nghiệm thu và lựa chọn cần thiết
③ Thực thi Execute   → Sửa mã/tài liệu/cấu hình trong phạm vi được phép
④ Kiểm chứng Verify  → Kiểm thử, xem diff, đối chiếu định nghĩa hoàn thành
```

Khi hiện trạng chưa rõ, hãy khám phá và lập kế hoạch trước để tránh sửa theo phỏng đoán. Lỗi đánh máy có phạm vi rõ không cần tách thành bốn lượt trao đổi. Xem [Chẩn đoán trước khi sửa](/vi/cases/workflows/diagnose-before-fixing/).

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

Lời nhắc trên giới hạn rõ 'chỉ lập kế hoạch', vì vậy cần chờ trước khi thực thi. Nếu việc triển khai đã được cho phép, có thể yêu cầu trình bày kế hoạch ngắn rồi thực thi và kiểm chứng liên tục trong phạm vi đã thống nhất. Có tạm dừng hay không phụ thuộc vào quyền đã cấp, những lựa chọn cần quyết định và quyền thực tế, không phụ thuộc số bước trong kế hoạch.

## ③ Thực thi

**Mục tiêu:** Giữ thay đổi nhỏ và có thể hoàn tác.

- Tập trung vào một mục tiêu con mỗi lần
- Ưu tiên những đường đi được kiểm thử bao phủ
- Với chi tiết triển khai thông thường, cập nhật kế hoạch và tiếp tục; nếu tiền đề hoặc phạm vi thay đổi, quay lại ② để xem có cần quyết định mới không

Câu gợi ý: “Tiếp tục hoàn thành phạm vi đã được phép; nếu cần mở rộng, hãy giải thích tác động cụ thể và các lựa chọn.”

## ④ Kiểm chứng

**Mục tiêu:** Chứng minh «định nghĩa hoàn thành» đã thỏa.

| Loại kiểm chứng | Cách làm |
|---|---|
| Tự động | Unit test, lint, kiểm tra kiểu |
| Thủ công | Đọc diff, thử tay đường then chốt |
| Artifact | Ảnh chụp, đoạn log, phản hồi API |

Checklist liên quan xem [định nghĩa hoàn thành](/vi/prompts/define-done/) và [chạy test](/vi/guide/quality/run-tests/).

## Cắt theo quy mô tác vụ

| Quy mô | Khám phá | Kế hoạch | Thực thi | Kiểm chứng |
|---|---|---|---|---|
| Sửa lỗi đánh máy | Kiểm tra đúng văn bản mục tiêu | Có thể ngầm hiểu | Ngắn | Xem diff và kiểm chứng theo quy tắc dự án |
| Lỗi một tệp | Gọn | 3–5 bước | Vừa | Kiểm thử + diff |
| Tính năng liên mô-đun | Làm rõ phụ thuộc | Kế hoạch viết ra; chờ lựa chọn cần thiết | Hoàn thành theo giai đoạn trong phạm vi được phép | Kiểm thử theo tác động + kiểm tra thủ công |
| Sự cố sản xuất | Chẩn đoán trước | Có kế hoạch khôi phục trước | Bước rất nhỏ | Theo dõi + tổng kết |

## Với mẫu case EPXV

Nhóm có thể ghi bốn giai đoạn vào [mẫu case](/vi/cases/use-cases/case-study-template/) và mô tả PR, tạo ngôn ngữ thống nhất.

## Lỗi thường gặp

- Kế hoạch chỉ ở trong đầu, giai đoạn thực thi lệch hướng
- Kiểm chứng chỉ làm «trông như chạy được»
- Khám phá thiếu dẫn tới sửa sai module
