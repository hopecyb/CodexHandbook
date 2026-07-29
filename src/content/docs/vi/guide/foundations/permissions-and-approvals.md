---
title: Quyền và phê duyệt
description: Giải thích khi nào Codex cần bạn phê duyệt thao tác.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Codex không nên thực thi thao tác rủi ro cao khi chưa được đồng ý. **Phê duyệt** là cánh cổng trong cộng tác người–máy.

Nếu Codex có thể đọc bất kỳ tệp nào, tùy ý lên mạng, tùy ý chạy lệnh — một khi hiểu sai tác vụ, cái giá sẽ rất cao.

## Bạn cần quan tâm

- Có cho phép đọc/ghi đường dẫn ngoài dự án hiện tại không
- Có cho phép lên mạng không
- Có cho phép thực thi lệnh shell cụ thể không
- Nhóm có phát hành chính sách bắt buộc không (cấu hình quản trị)

## Nó đang quản gì

Có thể coi phê duyệt như «hộp xác nhận trước bước nguy hiểm».

Ví dụ các tình huống sau thì nên dừng lại hỏi bạn:

- Muốn ghi tệp
- Muốn chạy lệnh có thể thay đổi hệ thống
- Muốn truy cập đường dẫn ngoài dự án
- Muốn lên mạng đọc hoặc gửi nội dung

Thấy cửa sổ bật lên hoặc yêu cầu xác nhận không có nghĩa Codex lỗi — nhiều khi chỉ là nó đang làm việc theo ranh giới an toàn.

## Hiểu nhầm thường gặp

### 1. Vì sao đôi khi nó làm trực tiếp, đôi khi lại hỏi tôi?

Vì rủi ro của các thao tác khác nhau.

- Đọc một tệp thường thì rủi ro thấp hơn
- Sửa nhiều tệp, lên mạng, thực thi lệnh thì rủi ro cao hơn

### 2. Tôi có nên luôn bấm cho phép?

Ít nhất xem ba việc này:

1. Nó muốn làm gì
2. Sẽ ảnh hưởng chỗ nào
3. Đây có phải việc bạn vốn muốn nó làm không

### 3. Tôi bấm từ chối thì cả tác vụ có hỏng không?

Thường thì không. Bạn có thể từ chối, rồi để nó đổi cách an toàn hơn để tiếp tục.

## Nguyên tắc đơn giản khi dùng

- Không hiểu thì đừng phê duyệt trước
- Vượt phạm vi dự án hiện tại thì đặc biệt cẩn thận
- Khi cần lên mạng, chạy lệnh, sửa hàng loạt tệp thì xem kỹ hơn một chút
- Không chắc thì để nó giải thích trước «vì sao cần quyền này»

## Giải thích theo tầng

| Tầng | Viết gì | Đọc ở đâu |
|---|---|---|
| Khái niệm (trang này) | Vì sao cần phê duyệt | — |
| Khác biệt sản phẩm | Mỗi lối vào hiện xác nhận thế nào | [Cẩm nang sản phẩm](/guide/) |
| Chiến lược Prompt | Cách khai báo ranh giới quyền trong tác vụ | [Định nghĩa ràng buộc](/prompts/constraints-and-boundaries/) |

Chính sách chính thức và giá trị mặc định có thể thay đổi — hãy đối chiếu [https://developers.openai.com/codex](https://developers.openai.com/codex).

Vai trò của phê duyệt là để việc «được phép làm hay không» luôn do bạn quyết định.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Tài liệu nhập môn Codex CLI hiện hành trên OpenAI Help Center vẫn phân biệt rõ các chế độ phê duyệt (approval modes) và phân tầng rủi ro theo đọc tệp, ghi tệp, thực thi lệnh; trang này chỉ giải thích vì sao có phê duyệt, khi nào nên phê duyệt thận trọng, và người dùng phán đoán phạm vi ảnh hưởng thế nào — không tuyên bố giá trị mặc định sản phẩm cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
