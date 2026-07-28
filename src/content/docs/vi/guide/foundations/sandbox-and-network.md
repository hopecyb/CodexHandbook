---
title: Sandbox và mạng
description: Hiểu cô lập thực thi, truy cập mạng và ranh giới rủi ro.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

«Sandbox» và «mạng» thực ra nói về hai việc: Sandbox giới hạn nó được chạm chỗ nào; mạng giới hạn nó được kết nối tới đâu.

**Sandbox** giới hạn hệ tệp và một phần năng lực hệ thống mà Agent chạm tới được, giảm mặt phẳng thao tác nhầm. **Truy cập mạng** là một tầng rủi ro riêng: có thể làm lộ thông tin nhạy cảm trong nội dung Prompt, hoặc kéo về dữ liệu không đáng tin.

## Vì sao hai giới hạn này quan trọng

Nếu không có các ranh giới này, một khi Codex hiểu sai tác vụ, vấn đề có thể lớn hơn — ví dụ:

- Sửa vào thư mục bạn không muốn đụng
- Đọc tệp nhạy cảm không nên đọc
- Gửi nội dung tác vụ ra website bên ngoài
- Kéo về dữ liệu hoặc script nguồn không rõ

Vì vậy chúng giống lan can an toàn mặc định hơn là cố tình tăng ngưỡng.

## Gợi ý khi mới bắt đầu

1. Khi luyện tập, tắt mạng không cần thiết, hoặc chỉ cho phép truy cập thật sự cần
2. Đừng đưa khóa production vào dự án luyện tập
3. Thấy yêu cầu «cần ra mạng / cần ghi đường dẫn nhạy cảm» thì dừng lại đọc hiểu rồi mới phê duyệt

## Hiểu nhầm thường gặp

### 1. Sandbox có nghĩa là năng lực của nó không đủ?

Sandbox chủ yếu để kiểm soát rủi ro, không phải cố tình làm yếu năng lực.

### 2. Lên mạng càng nhiều càng tốt?

Lên mạng càng nhiều nghĩa là:

- Nguồn lấy thông tin phức tạp hơn
- Có thể tiếp xúc nội dung không đáng tin
- Một số nội dung tác vụ có thể bị mang ra dịch vụ bên ngoài

Vì vậy khi luyện tập, có thể không lên mạng thì cố gắng chưa lên mạng trước.

### 3. Thấy yêu cầu quyền thì phán đoán thế nào?

Có thể xem ba việc này:

1. Lần tác vụ này thật sự cần ra mạng không?
2. Đường dẫn hoặc website nó truy cập có đúng kỳ vọng của tôi không?
3. Nếu từ chối bước này, còn đổi cách an toàn hơn để tiếp tục được không?

## Cách nhìn trực quan hơn

Có thể coi như hai cánh cửa:

- **Cửa Sandbox**: quyết định nó vào được những vùng tệp và hệ thống nào
- **Cửa mạng**: quyết định nó có nhìn ra ngoài, kết nối ra ngoài được không

Hai cánh cửa không chỉ là thiết lập kỹ thuật — cũng là cách bạn kiểm soát rủi ro.

Lối vào thiết lập phía sản phẩm xem [Cài đặt](/guide/desktop-app/settings/) của Desktop App; chi tiết chính thức xem [https://developers.openai.com/codex](https://developers.openai.com/codex).

Khi mới dùng, thà hạn chế nhiều hơn một chút trước — đừng mở hết cửa khi chưa hiểu rủi ro.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Tài liệu Codex CLI hiện hành trên OpenAI Help Center vẫn mô tả Full Auto là «sandboxed, network-disabled environment scoped to the current directory» và phân biệt với chế độ phê duyệt; trang này chỉ giải thích Sandbox và mạng là hai ranh giới rủi ro khác nhau, cùng cách người mới nên thắt phạm vi truy cập.  
**Kiểm chứng gần nhất:** 2026-07-26
