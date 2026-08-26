---
title: Chế độ tương tác
description: Trò chuyện với Codex và thực thi tác vụ trong terminal.
locale: vi
source_locale: zh-CN
source_revision: 794dd7c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

«Chế độ tương tác» nghĩa là bạn trò chuyện qua lại với Codex trong terminal; nó giải thích, thực thi, và khi cần sẽ chờ bạn xác nhận.

Đây cũng là một cách dùng CLI phổ biến.

Sau khi khởi phiên tương tác:

1. Khởi trong thư mục dự án (hoặc chỉ định thư mục làm việc theo tài liệu)
2. Nhập Prompt cùng chất lượng như trên App
3. Khi được hỏi thì phê duyệt / từ chối lời gọi công cụ
4. Dùng lệnh tắt kiểu `/` (nếu có) để quản phiên — lấy theo trợ giúp CLI hiện tại

Phương pháp Prompt vẫn áp dụng: [Prompt](/vi/prompts/)

## Hiểu nhầm thường gặp

### 1. Dùng trong terminal thì Prompt có thể tùy tiện hơn?

Không.

Lối vào đổi sang terminal, nhưng chất lượng mô tả tác vụ vẫn quan trọng như cũ.  
Mục tiêu, phạm vi hạn chế, tiêu chí hoàn thành — càng rõ càng ổn.

### 2. Vì sao nhấn «khởi trong thư mục dự án»?

Vì CLI cần biết nó đang làm việc trong dự án nào.  
Thư mục sai dễ dẫn tới:

- Không thấy tệp cần xem
- Sửa nhầm thư mục
- Không đọc được quy tắc dự án

### 3. Nó hỏi trong terminal có phê duyệt không — có phải lỗi?

Nhiều khi đó là nó đang làm việc đúng theo biên quyền, không phải thực thi bất thường.

## Tình huống đơn giản lần đầu dùng

Lần đầu có thể làm tác vụ nhỏ kiểu:

- Khởi ở thư mục gốc dự án
- Chỉ sửa một tệp
- Xong để nó nói đã sửa gì

Chế độ tương tác CLI chính là chạy một luồng tác vụ dạng hội thoại trong terminal. Thư mục phải đúng, Prompt cũng phải rõ.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI  
**Căn cứ kiểm chứng:** Tài liệu nhập môn CLI hiện tại trên OpenAI Help Center vẫn lấy khởi Codex trong terminal, vừa trò chuyện vừa thực thi, phê duyệt thao tác khi cần làm quy trình cơ bản; trang này chỉ nêu hình thái cơ bản của chế độ tương tác và gợi ý lần đầu, không phụ thuộc danh sách phím tắt cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
