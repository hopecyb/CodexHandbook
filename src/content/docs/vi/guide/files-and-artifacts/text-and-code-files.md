---
title: Tệp văn bản và mã
description: Để Codex đọc/ghi đúng nguồn, cấu hình và tệp văn bản dạng tài liệu.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Phần lớn tác vụ phát triển rơi vào **tệp văn bản và mã**: nguồn, kiểm thử, cấu hình, Markdown. Trang này nói cách giới hạn phạm vi, giữ phong cách nhất quán và gộp an toàn.

Khi để Codex sửa tệp văn bản hoặc mã, then chốt là sửa đúng chỗ, đúng cách, và đừng tiện tay sửa thêm.

## Nội dung trang này

- Làm sao để thay đổi rơi đúng đường dẫn và mã hóa
- Cách tổ chức chỉnh sửa nhiều tệp
- Phối hợp với formatter, linter

## Loại tệp và điểm chú ý

| Loại | Chú ý |
|---|---|
| Nguồn `.ts` `.py` v.v. | Tuân theo `AGENTS.md` và mẫu hiện có |
| Cấu hình `.json` `.yaml` `.toml` | Dễ phá cấu trúc; yêu cầu cú pháp hợp lệ |
| Tài liệu `.md` | Đường dẫn liên kết tương đối, quy ước lẫn ngôn ngữ |
| Mã sinh | Ghi rõ có nên commit hay gitignore |

Ngữ cảnh: [Ngữ cảnh tệp và thư mục](/guide/context/file-and-folder-context/)

## Vì sao loại tệp này dễ có vấn đề nhất

Chỗ thật sự dễ sai thường là:

- Viết vào tệp không nên viết
- Để sửa một chút nội dung mà tiện tay viết lại cả khối lớn
- Phong cách không khớp cách viết hiện có của dự án
- Cú pháp tệp cấu hình bị âm thầm phá

## Cấu trúc Prompt khuyến nghị

```text
Mục tiêu: <một câu>
Cho phép sửa: <đường dẫn glob>
Cấm: sửa lockfile, sửa thư mục không liên quan
Phong cách: khớp <tệp ví dụ>
Hoàn thành: liệt kê tệp đã đổi + chạy <lệnh kiểm thử>
```

Xem [Cấu trúc tác vụ tốt](/prompts/task-anatomy/)

## Hiểu lầm thường gặp

### 1. Chỉ đưa một câu “giúp tôi sửa tệp này”

Thông tin loại tác vụ này thường chưa đủ.

Bạn nên bổ sung thêm:

- Cho phép sửa tệp nào
- Đừng đụng tệp nào
- Phong cách tham chiếu ai
- Xong thì kiểm chứng thế nào

### 2. Tệp cấu hình không khác văn bản thường

Không thể xem vậy.

Với `.json`, `.yaml`, `.toml`, vấn đề phổ biến hơn là cấu trúc, thụt lề, cú pháp bị phá.

### 3. Sửa càng toàn diện càng đỡ việc

Nhiều khi thay đổi “phạm vi nhỏ, giải thích được, dễ rà” ổn hơn “tối ưu tiện tay diện rộng”.

## Mã hóa và xuống dòng

- Mặc định **UTF-8**; dự án mã hóa đặc biệt nên khai trong `AGENTS.md`
- Khớp `.editorconfig` / `prettier`, tránh cả tệp diff vì ký tự xuống dòng
- Tệp lớn sửa theo đoạn: @ hàm cụ thể chứ không viết lại cả tệp

## Khi lo nó sửa nhiều, có thể hạn chế vậy

Nếu lo nó sửa nhiều, yêu cầu thẳng ba việc:

1. Nói trước sẽ ảnh hưởng tệp nào
2. Chỉ sửa phạm vi tối thiểu tác vụ hiện tại cần
3. Liệt kê hành động kiểm chứng sau khi sửa

## Điểm rà soát

- [Rà soát diff](/guide/quality/review-diffs/): logic, phạm vi, xóa
- [Chạy kiểm thử](/guide/quality/run-tests/)
- Vô tình đưa `TODO` chỗ giữ chỗ chưa hiện thực

## Lỗi thường gặp

- «Tái cấu trúc cả dự án» dẫn tới hàng trăm tệp đổi
- Ép sửa văn bản trên tệp nhị phân hoặc đã minify
- Liên kết tài liệu viết đường dẫn tuyệt đối gây 404 nội bộ

Tệp văn bản và mã sợ nhất là sửa vừa nhiều vừa phân tán, lại khó rà. Nói rõ phạm vi, phong cách và cách kiểm chứng thì sau này đỡ vòng lại nhiều.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với các chương ngữ cảnh tệp và thư mục, cấu trúc tác vụ tốt, rà soát diff và chạy kiểm thử đã kiểm chứng trong sổ tay; trang này chỉ xác nhận nguyên tắc xử lý tệp văn bản/mã ổn định “giới hạn đường dẫn, giữ phong cách, nói rõ cách kiểm chứng trước”.  
**Kiểm chứng gần nhất:** 2026-07-26
