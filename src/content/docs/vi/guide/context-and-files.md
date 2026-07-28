---
title: Ngữ cảnh và tệp
description: Quản lý ngữ cảnh dự án, tệp, hội thoại, cùng các loại đầu vào phổ biến.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 15
---

# Ngữ cảnh và tệp

Ngữ cảnh là thông tin Codex ở khoảnh khắc này thấy được, tham khảo được, và có thể dựa vào đó để hành động.

Bạn trong đầu đã nghĩ rất rõ, nhưng đối phương chưa thấy tài liệu then chốt — nên làm lệch.  
Với Codex cũng vậy. Quản không tốt ngữ cảnh, Prompt hay đến mấy cũng bị nhiễu nhấn chìm.

## Ngữ cảnh gồm gì

Có thể coi như thông tin mà đồng nghiệp mới vừa vào nhóm chat sẽ dựa vào:

- Yêu cầu tác vụ bạn gửi cho nó — là vấn đề hiện tại
- Tệp bạn mở cho nó xem — là tài liệu nền
- Tài liệu quy tắc trong kho — là thỏa thuận nhóm
- Hội thoại lịch sử — là bộ nhớ của nó về tác vụ lần này

Những thứ đó cộng lại chính là ngữ cảnh nó đang dựa vào.

## Nguồn vấn đề phổ biến

Nhiều gốc rễ của «vì sao nó lại hiểu sai nữa» không phải model quá kém — mà là ngữ cảnh có vấn đề, ví dụ:

- Đưa quá ít thông tin — nó chỉ còn cách đoán
- Đưa quá nhiều thông tin — trọng tâm bị nhấn chìm
- Bạn tưởng nó biết tệp này, nhưng thực ra chưa nói rõ cho nó
- Bạn chat theo hội thoại cũ quá lâu — thông tin sớm đã không còn tập trung

Trọng tâm trang này là một tiêu chuẩn đơn giản:

> **Để nó thấy thông tin thật sự liên quan — đừng để thông tin không liên quan chiếm chỗ.**

## Quản lý ngữ cảnh

- [Ngữ cảnh dự án](/guide/context/project-context/) — `AGENTS.md`, thỏa thuận kho
- [Ngữ cảnh tệp và thư mục](/guide/context/file-and-folder-context/) — tham chiếu @ và phạm vi
- [Ngữ cảnh hội thoại](/guide/context/conversation-context/) — Thread và nén
- [Giữ tập trung](/guide/context/keep-context-focused/) — tránh nhiễu không liên quan
- [Ngữ cảnh nhạy cảm](/guide/context/sensitive-context/) — khóa và quyền riêng tư

Cách tổ chức bối cảnh trong Prompt xem [Mục tiêu và ngữ cảnh](/prompts/goals-and-context/).

## Tệp và artifact

Ngoài «nói cho nó cần làm gì», bạn còn thường cần «cho nó xem thứ gì đó».

«Thứ gì đó» ở đây có thể là:

- Một đoạn mã hoặc tài liệu
- Một ảnh chụp màn hình
- Một PDF
- Một bảng biểu
- Một bản thuyết trình

Loại tệp khác nhau thì cách Codex đọc, cách hỏi phù hợp, và cách nghiệm thu cũng có khác biệt.

## Tệp và artifact

- [Tệp văn bản và mã](/guide/files-and-artifacts/text-and-code-files/)
- [Ảnh và ảnh chụp màn hình](/guide/files-and-artifacts/images-and-screenshots/)
- [PDF và tài liệu](/guide/files-and-artifacts/pdf-and-documents/)
- [Bảng và bảng tính](/guide/files-and-artifacts/tables-and-spreadsheets/)
- [Bản thuyết trình](/guide/files-and-artifacts/presentations/)

## Thứ tự đọc gợi ý

Không cần đọc hết một hơi. Có thể đọc theo thứ tự này:

1. Đọc trước [Ngữ cảnh tệp và thư mục](/guide/context/file-and-folder-context/) — hiểu «nên để nó xem những tệp nào»
2. Rồi đọc [Giữ tập trung](/guide/context/keep-context-focused/) — tránh chat tác vụ đến mức phân tán
3. Theo loại tài liệu đang cầm trên tay, rồi đọc chương tệp tương ứng

Ngữ cảnh chính là đống thông tin Codex đang cầm khi phán đoán; đưa đúng thì kết quả cũng dễ làm đúng hơn.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này là tổng quan điều hướng và phương pháp nội bộ; khung «yêu cầu tác vụ, tài liệu tệp, quy tắc dự án, hội thoại lịch sử cùng cấu thành ngữ cảnh» đã đối chiếu chéo từng mục với các chương ngữ cảnh và xử lý tệp hiện tại, không phụ thuộc chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
