---
title: Cấu trúc Skill
description: Vai trò và ví dụ của SKILL.md, references/, templates/, scripts/.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Lần đầu nhìn thư mục Skill, cảm giác thường là"thư mục thì quen, nhưng không biết vì sao xếp vậy".

Trang này giải thích cách tách"quy trình chính, mô tả dài, template, script"ra các chỗ khác nhau, tránh nhét hết vào một file.

Như vậy dễ đọc, sửa và tái dùng hơn, cũng ít bị viết càng lúc càng loạn.

# Cấu trúc Skill

## Cấu trúc thư mục

```text
my-skill/
├── SKILL.md          # bắt buộc
├── scripts/          # tùy chọn: bước xác định
├── references/       # tùy chọn: tài liệu tham chiếu dài
└── templates/        # tùy chọn: template đầu ra
```

## Mỗi tầng làm gì

- `SKILL.md`: hướng dẫn chính — nói với Codex"đây là gì, khi nào dùng, làm theo bước nào"
- `references/`: tủ tài liệu dài — không nhét hết kiến thức nền vào file chính
- `templates/`: khung đầu ra sẵn — tránh mỗi lần ứng biến
- `scripts/`: bước chạy được xác định giao cho script — đừng chỉ dựa mô tả ngôn ngữ tự nhiên

Ban đầu thậm chí chỉ cần một `SKILL.md`.  
Sau này thật sự phức tạp hơn mới tách `references/`, `templates/`, `scripts/`.

## Ví dụ tối thiểu SKILL.md

```md
---
name: pr-review
description: Review diff của nhánh hiện tại so với main, đánh dấu rủi ro và khoảng trống kiểm thử. Dùng khi người dùng yêu cầu review, review PR hoặc kiểm tra trước khi merge.
---

## Các bước
1. Lấy diff so với main
2. Phân loại theo file: lỗi logic, bảo mật, hiệu năng, kiểm thử
3. Xuất danh sách phân cấp: chặn / đề xuất / nit
4. Không tự động push hoặc merge
```

## Hiểu lầm thường gặp

### 1. Ngay từ đầu phải dựng đủ mọi thư mục

Nhiều Skill tốt ban đầu chỉ có một `SKILL.md`; sau khi tái dùng nhiều lần mới dần tách thư mục khác.

### 2. `references/` chỉ để nhét thêm nội dung

Trọng tâm không phải"nhét nhiều", mà là đưa mô tả dài không nên luôn chiếm chú ý quy trình chính sang chỗ chỉ đọc khi cần.

### 3. `scripts/` càng tránh càng tốt

Nếu một bước vốn phải ổn định, xác định, lặp lại được, viết script thường đáng tin hơn cứ mô tả bằng ngôn ngữ tự nhiên.

## Vai trò từng thư mục

| Thư mục | Mục đích |
|---|---|
| `SKILL.md` | Quy trình chính, điều kiện kích hoạt, mục cấm |
| `references/` | Tài liệu dài, chuẩn mực, mô tả API |
| `templates/` | Định dạng đầu ra, khung báo cáo |
| `scripts/` | Lệnh và kiểm tra xác định |

## Khi nào tách thư mục

Có thể quyết theo thứ tự:

1. Quy trình chính đã quá dài, lần đầu đọc không nổi chưa
2. Có đoạn tài liệu lớn không phải lần nào cũng cần xem không
3. Có định dạng đầu ra cố định bị lặp không
4. Có bước đã ổn định đến mức phù hợp script hóa không

Nếu trong bốn câu có một hai câu"có", có thể bắt đầu tách.

Có thể dùng `SKILL.md` chạy thông trước, rồi khi thật sự phức tạp mới dần tách tài liệu, template và script ra.

Thực hành đầy đủ: [Tạo Skill đầu tiên](/skills/create-your-first-skill/).
## Từ mẫu thành Skill

Nhiều nhóm không bắt đầu bằng việc “thiết kế Skill”, mà bắt đầu từ một Prompt cứ phải sao chép nhiều lần. Có thể phát triển theo các bước:

| Giai đoạn | Hình thái | Khi nào nâng cấp |
|---|---|---|
| Prompt một lần | Trong cuộc trò chuyện hiện tại | Chỉ dùng một lần |
| Mẫu | Thư viện Prompt hoặc tài liệu nhóm | Tác vụ cùng loại lặp lại nhưng bước làm còn thay đổi |
| Skill một tệp | Một `SKILL.md` | Quy trình ổn định, điều kiện kích hoạt rõ |
| Thư mục Skill hoàn chỉnh | `SKILL.md` + `templates/` + `references/` + `scripts/` | Định dạng đầu ra, tài liệu tham khảo dài, kiểm tra xác định đều ổn định |

Đừng vội biến mọi mẫu thành Skill. Thứ đáng giữ lại là việc lặp lại nhiều, tiêu chuẩn thành công rõ, và nhóm sẵn sàng làm theo cùng một quy trình.

## Thành phần Skill thường tái dùng

| Thành phần | Phù hợp đặt gì |
|---|---|
| Mô tả chính | Điều kiện kích hoạt, bước làm, mục cấm, định nghĩa hoàn thành |
| Mẫu | Đầu ra review PR, cấu trúc tài liệu, báo cáo rủi ro |
| Tham khảo | Quy chuẩn mã, bảng thuật ngữ, quy tắc domain, ghi chú API |
| Script | Phân tích độ phức tạp, kiểm link, thống kê coverage, kiểm format |

Một Skill tốt không chỉ là Prompt dài hơn, mà là tách quy trình tái dùng thành các phần dễ đọc, kiểm thử được và dễ bảo trì.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở Kiểm chứng:** Hướng dẫn kỹ năng runtime Codex hiện tại vẫn lấy `SKILL.md` làm file lõi và cho phép mở rộng script cùng tài liệu tham chiếu khi cần; trang này tập trung phân vai thư mục, không gắn lối vào sản phẩm hay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
