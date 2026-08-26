---
title: Xử lý sự cố IDE
description: Tải tiện ích, ngữ cảnh và vấn đề đồng bộ.
locale: vi
source_locale: zh-CN
source_revision: 438b4f5
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 90
---

Xử lý sự cố IDE khác CLI ở chỗ:  
nhiều vấn đề trông như «plugin không hoạt động», nhưng thực tế thường là **không gian làm việc, trạng thái đăng nhập hoặc ngữ cảnh của bản thân trình soạn thảo** lệch.

Khi IDE lỗi, phân trước là «tiện ích chưa dậy» hay «tiện ích dậy rồi nhưng ngữ cảnh nhận được sai».

| Triệu chứng | Thử trước |
|---|---|
| Tiện ích không phản hồi | Cập nhật tiện ích và trình soạn thảo; xem nhật ký host tiện ích |
| Mất trạng thái đăng nhập | Xác thực lại |
| Ngữ cảnh sai | Xác nhận thư mục gốc không gian làm việc đang mở |

## Phân 3 loại trước

- **Hoàn toàn không phản hồi**: phần lớn là vấn đề tải tiện ích
- **Mở được nhưng không dùng được**: phần lớn là đăng nhập hoặc xác thực
- **Trả lời sai, sửa sai chỗ**: phần lớn là không gian làm việc hoặc ngữ cảnh

## Hiểu nhầm thường gặp

### 1. Biểu tượng plugin còn — nghĩa là tiện ích ổn?

Biểu tượng còn chỉ nghĩa nó đang được cài; không nghĩa phiên hiện tại thật sự bình thường.

### 2. Ngữ cảnh sai là do mô hình hiểu kém

Nhiều khi không phải hiểu kém, mà thư mục gốc bạn mở, phạm vi chọn tệp hoặc bản thân không gian làm việc đã sai.

### 3. Cài lại plugin luôn là bước đầu?

Không cần làm vậy ngay từ đầu.

Xác nhận trước:

- Phiên bản trình soạn thảo
- Phiên bản tiện ích
- Trạng thái đăng nhập
- Không gian làm việc hiện tại

Nhiều vấn đề đến bước này đã định vị được.

## Thứ tự lần theo

1. Xem tiện ích có phản hồi không
2. Xác nhận trạng thái đăng nhập
3. Xác nhận thư mục gốc không gian làm việc và tệp mở
4. Vẫn không được thì xem nhật ký tiện ích

Nguyên nhân gốc phổ biến nhất khi xử lý sự cố IDE thường là không gian làm việc, trạng thái đăng nhập hoặc nguồn ngữ cảnh sai — không nhất thiết plugin hỏng.

Giải thích chính thức: [Tài liệu OpenAI Codex](https://developers.openai.com/codex).

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** IDE  
**Căn cứ kiểm chứng:** Trung tâm trợ giúp OpenAI hiện vẫn xác nhận IDE extension là một lối vào chính thức; trang này phân luồng vấn đề IDE theo «tiện ích không phản hồi / trạng thái đăng nhập / không gian làm việc và ngữ cảnh» — là khung xử lý sự cố ổn định, không phải sổ mã lỗi cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
