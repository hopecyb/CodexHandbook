---
title: Quyền và Sandbox
description: Hiểu phê duyệt, cô lập thực thi và ranh giới truy cập mạng để dùng Codex an toàn.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 14
---

# Quyền và Sandbox

Codex không nên thực thi thao tác rủi ro cao khi chưa được đồng ý. **Phê duyệt** là cánh cổng then chốt trong cộng tác người–máy; **Sandbox** giới hạn hệ tệp và một phần năng lực hệ thống mà Agent chạm tới được.

## Nội dung trang này

Nhiều người lần đầu thấy các từ «quyền», «phê duyệt», «Sandbox», «truy cập mạng» cứ tưởng chúng gần giống nhau — dù sao cũng thuộc cài đặt an toàn.

Chỗ dễ sinh vấn đề nhất chính là sự nhầm lẫn này: bạn tưởng mình chỉ cho phép nó tiếp tục thực thi — thực tế có thể đồng thời mở ranh giới ghi tệp, chạy lệnh hoặc truy cập mạng ngoài.

Trang này tách các khái niệm này ra, giúp bạn phán đoán mỗi lần xác nhận thực sự đã mở cái gì.

## Phân biệt các khái niệm này trước

Có thể tách như sau:

- **Phê duyệt**: có cần hỏi bạn một câu trước không
- **Sandbox**: dù muốn làm thì tối đa chạm tới đâu
- **Truy cập mạng**: có mang thông tin ra ngoài, hoặc kéo thứ gì từ ngoài về được không

Chúng cùng ảnh hưởng kết quả — nhưng không phải một chuyện.

## Bạn thường cần quan tâm

- Có cho phép đọc/ghi đường dẫn ngoài dự án hiện tại không
- Có cho phép lên mạng không
- Có cho phép thực thi lệnh shell cụ thể không
- Nhóm có phát hành chính sách bắt buộc không (cấu hình quản trị)

## Sandbox và mạng

**Sandbox** giảm mặt phẳng thao tác nhầm. **Truy cập mạng** là một tầng rủi ro riêng: có thể làm lộ thông tin nhạy cảm trong nội dung Prompt, hoặc kéo về dữ liệu không đáng tin.

Khi mới dùng, thường có thể xử lý theo hướng này:

1. Lần luyện đầu tắt mạng không cần thiết, hoặc chỉ cho phép truy cập thật sự cần
2. Đừng đưa khóa production vào dự án luyện tập
3. Thấy yêu cầu «cần ra mạng / cần ghi đường dẫn nhạy cảm» thì dừng lại đọc hiểu rồi mới phê duyệt

## Hiểu nhầm thường gặp

### Cửa sổ bật lên không có nghĩa chắc chắn nguy hiểm

Nhiều thao tác bình thường cũng kích hoạt phê duyệt, ví dụ:

- Cài dependency
- Ghi vào thư mục ngoài dự án
- Mở trình duyệt hoặc ứng dụng hệ thống
- Truy cập website hoặc API bên ngoài

Thứ thật sự cần phán đoán là: **bước này có phải việc tác vụ hiện tại vốn cần không.** Không thể chỉ nhìn cửa sổ có hiện hay không.

### Không có cửa sổ cũng không bằng hoàn toàn không rủi ro

Nếu Sandbox hiện tại vốn đã cho phép một loại thao tác, hoặc trước đó bạn đã nới quy tắc — Codex có thể không hỏi lại.

Vì vậy không thể chỉ dựa vào «có hộp gợi ý hay không» để phán đoán rủi ro — còn phải xem chính môi trường hiện tại được cấu hình thế nào.

## Khi thấy yêu cầu quyền, có thể phán đoán theo các bước sau

Mỗi lần thấy yêu cầu liên quan quyền, có thể tự hỏi trước ba việc:

1. Bước này có bắt buộc để hoàn thành tác vụ hiện tại không
2. Dữ liệu hoặc đường dẫn nó muốn chạm có vượt kỳ vọng vốn có của tôi không
3. Dù thực thi sai, tôi có biết cách hoàn tác hoặc khắc phục không

Nếu trong ba điều này có hai điều trả lời không được — đừng phê duyệt trước, để Codex giải thích vì sao cần bước này trước.

## Giải thích theo tầng

| Tầng | Viết gì | Đọc ở đâu |
|---|---|---|
| Khái niệm (trang này) | Vì sao cần phê duyệt và cô lập | — |
| Khác biệt sản phẩm | Mỗi lối vào hiện xác nhận thế nào | [Phê duyệt và Sandbox CLI](/guide/cli/approvals-and-sandbox/) · [Cài đặt Desktop App](/guide/desktop-app/settings/) |
| Chiến lược Prompt | Cách khai báo ranh giới quyền trong tác vụ | [Ràng buộc và biên](/prompts/constraints-and-boundaries/) |

Chính sách chính thức và giá trị mặc định có thể thay đổi — hãy đối chiếu [OpenAI Codex](https://developers.openai.com/codex).

Phê duyệt đang hỏi bạn «có tiếp tục không»; Sandbox đang giới hạn «dù tiếp tục thì tối đa làm được đến đâu». Nhìn hai tầng này cùng lúc thì ranh giới mới rõ hơn.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** OpenAI Developers hiện vẫn cung cấp lối vào Codex chính thức; trang này chỉ giải thích phê duyệt, Sandbox, truy cập mạng thuộc các ranh giới an toàn khác nhau, và dẫn độc giả tới các chương sản phẩm để xem hành vi cụ thể — không tuyên bố giá trị mặc định hiện tại hay ma trận quyền chính xác.  
**Kiểm chứng gần nhất:** 2026-07-26
