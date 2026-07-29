---
title: Shell và terminal
description: Năng lực và rủi ro khi thực thi lệnh.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Terminal là một trong những cách trực tiếp nhất để Codex thực thi hành động, nên hiệu suất cao, cũng càng cần bạn hiểu rủi ro.

## Vì sao vừa mạnh vừa nguy hiểm

Công cụ tệp chủ yếu xử lý văn bản; terminal thao tác trực tiếp hệ thống và môi trường chạy.

Một khi vào terminal, hành động thường gặp không chỉ là đọc, mà có thể thành:

- Cài đặt
- Build
- Kiểm thử
- Xóa
- Commit
- Push

Trước khi dùng, làm rõ nó sẽ thay đổi chỗ nào.

Terminal mạnh cũng nguy hiểm. Nguyên tắc:

- Đọc hiểu lệnh trước khi phê duyệt
- Cấm `rm -rf`, force push, sửa cấu hình ssh, v.v., trừ khi bạn hoàn toàn hiểu và thật sự cần
- Đưa lệnh kiểm chứng vào tiêu chuẩn nghiệm thu

Lối vào sản phẩm: [Terminal tích hợp](/guide/desktop-app/integrated-terminal/)

## Vì sao rủi ro terminal cao hơn

Vì nó không chỉ “đưa gợi ý”, mà thật sự thực thi hành động.

Ví dụ nó có thể:

- Cài dependency
- Xóa tệp
- Chạy kiểm thử
- Viết lại cấu hình
- Push mã

Khi chưa hiểu một lệnh, hỏi rõ rồi mới quyết có cho phép không.

## Trường hợp phù hợp dùng terminal

Những việc sau phù hợp dùng terminal:

- Chạy kiểm thử
- Chạy build
- Xem trạng thái tệp
- Chạy script dự án đã có

Nếu bạn chỉ muốn:

- Xem trang trông thế nào
- Tra tài liệu công khai mới nhất
- Sửa một hai chỗ văn bản đã biết

thì terminal chưa chắc là lựa chọn đầu tiên.

## Hiểu lầm thường gặp

### 1. Không hiểu lệnh cũng không phải hoàn toàn không dùng được terminal

Ban đầu không cần viết được nhiều lệnh, nhưng ít nhất phải hiểu được:

- Lệnh này đại khái muốn làm gì
- Có sửa tệp hoặc hệ thống không
- Có thật sự liên quan tác vụ hiện tại không

### 2. Chỉ cần là lệnh kiểm thử là chắc an toàn?

Không thể nghĩ vậy.  
Hầu hết lệnh kiểm thử rủi ro thấp, nhưng vẫn phải xem:

- Có ghi nhiều tệp không
- Có lên mạng không
- Có gọi script bạn chưa rõ không

### 3. Không hiểu thì sao?

Có thể hỏi tiếp, ví dụ:

```text
Lệnh này sẽ làm gì? Sẽ sửa những nội dung nào? Nếu không chạy nó thì ảnh hưởng gì?
```

## Cách viết áp dụng trực tiếp

Có thể bổ sung:

```text
Trước khi chạy lệnh hãy nói rõ mục đích, có ghi tệp không, có lên mạng không, và thất bại thì khôi phục thế nào.
```

Trước khi chạy, xác nhận lệnh này sẽ thay đổi chỗ nào.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này chỉ giải thích thực thi terminal có năng lực hành động và rủi ro cao hơn so với sửa tệp, nhấn mạnh hiểu lệnh trước phê duyệt, xác nhận phạm vi ghi, mạng và cách khôi phục; nguyên tắc liên quan đã đối chiếu chéo với các chương quyền, kiểm chứng và công cụ nội bộ.  
**Kiểm chứng gần nhất:** 2026-07-26
