---
title: Thư mục references/
description: Tổ chức tài liệu tham chiếu dài trong Skill để tiết lộ dần.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`references/` phù hợp để chứa tài liệu dài không cần mở ngay mỗi lần, tránh quy trình chính vừa dài vừa loạn.

Nó không chỉ là"nhét thêm vài tài liệu", mà còn để tách những tài liệu **không phải lần nào cũng phải đọc ngay, nhưng ở một bước nào đó thật sự hữu ích**, chỉ đọc khi cần.

# Thư mục references/

Khi thân `SKILL.md` quá dài, hãy chuyển quy chuẩn chi tiết, mô tả API, checklist sang `references/`, rồi trích dẫn khi cần trong các bước.

## Ví dụ

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

Trong `SKILL.md` viết:

```md
Khi review phong cách code, đọc references/style-guide.md và kiểm tra theo các quy tắc trong đó.
```

## Nó đang làm gì

- `SKILL.md` chịu quy trình chính
- `references/` chịu"tài liệu mở khi cần"

Cũng có thể hiểu thẳng:

- `SKILL.md` là hướng dẫn công việc
- `references/` là tủ tài liệu

Như vậy đọc Skill không bị đoạn nền dài đè trước; khi cần chi tiết vẫn tìm được căn cứ.

## Khi nào đáng tách `references/`

Nếu trong `SKILL.md` bắt đầu xuất hiện các trường hợp sau, có thể cân nhắc tách:

- Một đoạn quy chuẩn lớn mỗi lần đều chiếm chỗ
- Nhiều tài liệu tham chiếu chủ đề khác nhau trộn chung
- Quy trình chính bị tài liệu nền cắt ngang, lần đầu khó nắm mạch chính

Lần đầu làm Skill không nhất thiết phải có `references/`.  
Thứ tự thường gặp là **chạy thông trước, rồi khi nội dung thật sự dài mới tách ra**.

## Hiểu lầm thường gặp

### 1. `references/` không chỉ là copy nội dung ra ngoài một chút

Vai trò quan trọng hơn là giữ quy trình chính ngắn, rõ, chạy thông được trước.

### 2. Tài liệu tham chiếu không nhất thiết càng nhiều càng tốt

Nếu nhét hết vào `references/`, cuối cùng chỉ là chuyển sự hỗn loạn từ một file sang nhiều file.

### 3. Có `references/` rồi thì `SKILL.md` có thể viết rất sơ sài

Quy trình chính vẫn nên ở `SKILL.md`, nếu không người khác lần đầu đọc vẫn không biết cách thực thi.

## Nguyên tắc

- Quy trình chính giữ trong `SKILL.md`, tài liệu tham chiếu tải khi cần
- Mỗi file tập trung một chủ đề, dễ bảo trì
- Tránh lặp lại các bước đã có trong SKILL.md bên trong references

## Khi nào đưa vào `references/`

Nếu một đoạn trả lời"**làm theo quy tắc nào**", thường phù hợp hơn khi đưa vào `references/`; nếu trả lời "**làm bước nào trước**", nên giữ trong quy trình chính.

`references/` dùng để rút ngắn quy trình chính; khi cần chi tiết mới mở rộng.
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở Kiểm chứng:** Runtime Codex hiện tại rõ ràng đọc thân kỹ năng và tài liệu liên quan khi cần; phần giải thích `references/` trên trang này thuộc nguyên tắc tổ chức tài liệu ổn định.  
**Kiểm chứng gần nhất:** 2026-07-26
