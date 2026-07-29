---
title: Thread, tác vụ và dự án
description: Làm rõ quan hệ giữa phiên hội thoại, tác vụ và không gian làm việc dự án.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

Từ ngữ trên các sản phẩm có thể hơi khác; cẩm nang này thống nhất hiểu như sau:

- **Dự án / không gian làm việc**: thư mục hoặc gốc kho mà Codex gắn vào
- **Thread / phiên**: một đoạn hội thoại liên tục; ngữ cảnh sẽ tích lũy
- **Tác vụ**: một lần làm việc có mục tiêu rõ (có thể gồm nhiều lần gọi công cụ)

Nhiều người trộn các từ này thành một cục — vấn đề phổ biến nhất vì thế là:

- Vì sao nó vẫn nhớ lời tôi nói trước đó
- Vì sao tôi đã đổi câu hỏi rồi mà nó vẫn đi theo hướng cũ
- Vì sao «cùng một dự án» vẫn khuyên tôi mở Thread mới

Dự án quyết định nó làm việc ở đâu; Thread quyết định nó tiếp tục theo đoạn hội thoại nào; tác vụ quyết định lần này bạn thực sự muốn nó làm gì. Tách ba tầng này ra, nhiều thói quen dùng sẽ rõ hơn nhiều.

## Tách quan hệ ba tầng trước

- **Dự án / không gian làm việc**: bạn đưa nó vào kho hoặc thư mục nào
- **Thread / phiên**: đoạn chat liên tục hiện tại giữa bạn và nó
- **Tác vụ**: một mục tiêu cụ thể trong đoạn chat đó

Cùng một dự án có thể có nhiều Thread.  
Cùng một Thread cũng có thể đã làm hơn một tác vụ.  
Vấn đề thường nằm ở đây: tác vụ đã đổi, nhưng Thread vẫn mang ngữ cảnh cũ.

## Gợi ý thực hành

- Chủ đề đổi thì **mở Thread mới**, tránh ngữ cảnh cũ gây nhiễu
- Tác vụ dài hãy viết rõ giai đoạn và điểm kiểm tra — xem [Prompt cho tác vụ dài](/prompts/long-running-tasks/)
- Khi cần tiếp tục xuyên phiên, làm tóm tắt bàn giao — xem [Bàn giao và khôi phục](/guide/agent-work/handoff-and-resume/)

## Hiểu nhầm thường gặp

### 1. Cùng một kho thì phải luôn dùng cùng một Thread?

Không nhất thiết.  
Kho không đổi không có nghĩa tác vụ không đổi.  
Một khi tác vụ đổi chủ đề, Thread cũ có thể bắt đầu mang nhiễu.

### 2. Mở Thread mới bằng mất hết ngữ cảnh?

Đó không hoàn toàn là chuyện xấu.  
Nhiều khi bạn chính là cần «bỏ ngữ cảnh không liên quan», chỉ giữ phần thật sự liên quan tới tác vụ lần này.

### 3. Tác vụ và Thread là một nghĩa?

Hai khái niệm không giống nhau.  
Thread như một container; tác vụ là một lần làm việc cụ thể trong container đó.

Dự án quyết định nó làm việc ở đâu; Thread quyết định nó nhớ lịch sử nào; tác vụ quyết định lần này cần hoàn thành gì.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ giải thích quan hệ ba tầng giữa dự án, Thread và tác vụ; liên kết nội bộ và cách diễn đạt khái niệm đã được rà lại, và nội dung không phụ thuộc vào chi tiết sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
