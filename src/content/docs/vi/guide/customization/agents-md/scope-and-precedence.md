---
title: Phạm vi và ưu tiên AGENTS.md
description: Nhiều tệp, monorepo và «quy tắc dự án vs Prompt hội thoại» — ai nói đúng.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Khi nhiều `AGENTS.md`, tệp cấu hình và hội thoại hiện tại cùng tồn tại, cần làm rõ **quy tắc nào hiệu lực**.

Ở đây nói: khi hai quy tắc trông khác nhau, thật sự nên nghe ai.

## Tổng quan ưu tiên

```text
Chiến lược tổ chức quản trị > AGENTS.md thư mục nearer > AGENTS.md gốc kho > cấu hình người dùng > hội thoại hiện tại
```

«nearer» chỉ tệp thư mục con **gần đường dẫn làm việc hiện tại hơn**. Ví dụ khi làm việc dưới `packages/web/AGENTS.md`, tệp đó gộp với tệp gốc; khi xung đột **thư mục con ưu tiên**.

## Hiểu “gần hơn thì ưu tiên” thế nào

Có thể coi:

- Quy tắc gốc như “luật mặc định cả kho”
- Quy tắc thư mục con như “ghi chú đặc biệt của vùng cục bộ này”

Vậy quy tắc càng gần vị trí làm việc hiện tại thường càng cụ thể, cũng càng nên ưu tiên.

## Quan hệ với Prompt hội thoại

| Nguồn | Độ bền | Phù hợp viết gì |
|---|---|---|
| AGENTS.md | Qua phiên, quản lý phiên bản được | Đồng thuận nhóm, lệnh build, vùng cấm |
| Prompt tác vụ | Chỉ phiên này | Mục tiêu lần này, phạm vi, hạn thời gian |
| Tham chiếu tệp @ | Tăng ngữ cảnh phiên này | Tệp hiện thực cụ thể, bản thiết kế |

**Đừng** trong hội thoại dán lặp cả `AGENTS.md`; nếu phải nhấn một mục, nhắc một câu: «Tuân yêu cầu kiểm thử trong AGENTS.md; lần này thêm đừng sửa thư mục `legacy/`.»

## Mẫu Monorepo

```text
repo/
├── AGENTS.md              # Chung cả kho: trình quản lý gói, CI, bảo mật
├── apps/
│   └── web/
│       └── AGENTS.md      # Frontend: thư viện component, lệnh E2E
└── packages/
    └── api/
        └── AGENTS.md      # Backend: ước định migration DB
```

Nguyên tắc:

- **Tệp gốc**: 10–20 quy tắc cứng chia sẻ cả kho
- **Tệp gói con**: chỉ lệnh và mô tả thư mục đặc thù gói đó
- Tránh ba tệp trùng 80% — nội dung trùng đặt gốc, gói con chỉ viết phần tăng

## Ranh giới với sở thích cá nhân

Thói cá nhân (chủ đề, mô hình mặc định, đường dẫn máy cục bộ) đặt **cấu hình người dùng**, đừng viết vào `AGENTS.md` kho nhóm, nếu không cộng tác viên bị hại nhầm.

## Hiểu lầm thường gặp

### 1. Câu nói trong hội thoại hiện tại chắc mới nhất nên ưu tiên cũng cao nhất

Hội thoại phù hợp bổ sung “yêu cầu thêm lần này”, nhưng không bằng có thể tùy phủ quy tắc cứng cấp nhóm hoặc tổ chức.

### 2. `AGENTS.md` thư mục con là sao chép một bản quy tắc gốc

Cũng không nên vậy.

Cách phù hợp hơn:

- Quy tắc gốc viết phần chung
- Thư mục con chỉ viết phần tăng và ngoại lệ

### 3. Chỉ nhớ thứ tự vẫn chưa đủ

Chưa đủ.

Quan trọng hơn là bạn biết:

- Loại thông tin nào nên đặt tầng nào
- Khi xung đột vì sao lấy một tầng làm chuẩn

## Khi xung đột phán đoán thế nào

Khi thấy hai quy tắc trông xung đột, xem theo thứ tự:

1. Mục nào gần thư mục làm việc hiện tại hơn
2. Mục nào là quy tắc dự án dài hạn, mục nào chỉ bổ sung tạm lần này
3. Có chiến lược tổ chức hoặc quản trị ở tầng cao hơn hạn chế trực tiếp không

Khi quy tắc xung đột, thường ưu tiên tầng gần hơn, cứng hơn, rõ hơn; đừng mặc định “câu mới nhất” chắc thắng.

## Lỗi thường gặp

- `AGENTS.md` thư mục con mâu thuẫn tệp gốc mà không nói lấy ai làm chuẩn
- Viết khóa nhạy cảm vào `AGENTS.md` rồi commit Git — nên dùng quản lý khóa và biến môi trường
- Kỳ vọng «nới tạm» trong hội thoại phủ chiến lược quản trị nhóm (thường không làm được)

## Danh sách nghiệm thu

- [ ] `AGENTS.md` gốc và tệp gói con phân công rõ
- [ ] Có ý thức rõ «thư mục con ưu tiên» với quy tắc xung đột
- [ ] Prompt tác vụ chỉ viết phần tăng, không sao chép cả sổ tay dự án

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Ghi chú rà lại:** Trang này hiện viết ưu tiên của `AGENTS.md`, cấu hình người dùng và hội thoại hiện tại thành thứ tự tuyến tính quá chắc chắn, nhưng precedence thật của client khác nhau, năng lực quản trị tổ chức và môi trường chạy có thể khác; cần bổ sung căn cứ chính thức hiện tại rồi viết lại.  
**Kiểm chứng gần nhất:** 2026-07-26
