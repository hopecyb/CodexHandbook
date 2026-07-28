---
title: Khái niệm nền tảng
description: Xây dựng ngôn ngữ chung về model, Agent, công cụ, quyền và kiểm chứng.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 3
---


Phần này gom các khái niệm nền tảng mà cả cẩm nang sẽ dùng đi dùng lại. Khác biệt giao diện sản phẩm viết ở [Cẩm nang sản phẩm](/guide/); kỹ thuật Prompt viết ở [Năng lực cốt lõi](/guide/).

Nhóm nội dung này chủ yếu giải thích Codex làm việc thế nào, và cách cộng tác với nó.

## Bản đồ chương này

1. [AI và mô hình ngôn ngữ](/guide/foundations/ai-and-language-models/)
2. [Cơ bản về Agent](/guide/foundations/agent-basics/)
3. [Mục tiêu, ngữ cảnh và hành động](/guide/foundations/goals-context-and-actions/)
4. [Tệp, công cụ và lệnh](/guide/foundations/files-tools-and-commands/)
5. [Local và đám mây](/guide/foundations/local-vs-cloud/)
6. [Thread, tác vụ và dự án](/guide/foundations/threads-tasks-and-projects/)
7. [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/)
8. [Sandbox và mạng](/guide/foundations/sandbox-and-network/)
9. [Model và suy luận](/guide/foundations/models-and-reasoning/)
10. [Token, ngữ cảnh và nén](/guide/foundations/tokens-context-and-compaction/)
11. [Kiểm chứng và rà soát thủ công](/guide/foundations/verification-and-human-review/)
12. [Hiểu nhầm thường gặp](/guide/foundations/common-misconceptions/)

Đọc xong thì vào [Bắt đầu nhanh](/guide/getting-started/).

## Hiểu nhầm thường gặp

### 1. Khái niệm nền tảng chỉ là lý thuyết thuần, bỏ qua cũng không sao

Ngắn hạn có vẻ bỏ được, nhưng nhiều hiểu nhầm phía sau đều liên quan đến chỗ chưa làm rõ ở đây.

Ví dụ:

- Vì sao nó cần phê duyệt
- Vì sao nó bị ảnh hưởng bởi ngữ cảnh
- Vì sao nó sửa vào chỗ ngoài dự kiến
- Vì sao «nó nói đã xong» vẫn chưa bằng thật sự đã xong

### 2. Tôi chỉ cần biết hỏi, khái niệm không cần hiểu nhiều

Biết hỏi rất quan trọng, nhưng nếu không biết nó đọc ngữ cảnh, gọi công cụ, bị ràng buộc bởi quyền thế nào — càng khó phán đoán vì sao kết quả lệch.

### 3. Chương này nên đọc theo kiểu thuộc định nghĩa

Cách đọc thực dụng hơn:

- Trước hết biết mỗi khái niệm đang giải quyết vấn đề gì
- Rồi mang tình huống dùng thực tế vào để hiểu

## Nếu không muốn đọc hết một mạch

Nếu không muốn đọc hết cả chương một mạch, có thể đọc trước các trang sau:

1. [Cơ bản về Agent](/guide/foundations/agent-basics/)
2. [Mục tiêu, ngữ cảnh và hành động](/guide/foundations/goals-context-and-actions/)
3. [Tệp, công cụ và lệnh](/guide/foundations/files-tools-and-commands/)
4. [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/)
5. [Kiểm chứng và rà soát thủ công](/guide/foundations/verification-and-human-review/)

Hiểu rõ vài trang này đã đủ đỡ việc dùng hàng ngày.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ mô tả cấu trúc và thứ tự đọc của chương khái niệm nền tảng; liên kết nội bộ và cách diễn đạt khái niệm đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
