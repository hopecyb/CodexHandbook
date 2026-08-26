---
title: Hoàn tác và khôi phục
description: Lùi lại an toàn khi kết quả không hài lòng.
locale: vi
source_locale: zh-CN
source_revision: b76bcfc
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 100
---

Lần đầu dùng Codex, nhiều người lo nhất: nó sửa sai rồi, tôi còn quay lại được không?

Phần lớn trường hợp được — nhưng tốt nhất lùi theo cách an toàn.

Khi kết quả vượt phạm vi hoặc chất lượng không ổn:

1. Dùng năng lực hoàn tác / khôi phục thay đổi mà client cung cấp (lấy UI hiện tại làm chuẩn)
2. Nếu dự án đang dưới Git: dùng cách bạn quen để bỏ thay đổi trong cây làm việc (người mới có thể chưa dùng Git trước, dựa vào thư mục luyện tập)
3. Mở Thread mới, thắt ràng buộc rồi thử lại

Nhiều khi thu hẹp phạm vi trước sẽ đỡ hơn — ví dụ chỉ đụng ít tệp, viết rõ mục cấm, xem kế hoạch rồi mới thực thi.

## Phân biệt «hoàn tác» và «khôi phục»

- **Hoàn tác**: lùi lại thay đổi vừa rồi không hài lòng
- **Khôi phục**: đưa dự án về một trạng thái bạn xác nhận là an toàn

Nếu luyện trên một tệp nhỏ, hoàn tác thường không khó. Trường hợp phiền hơn là:

- Nó đã sửa hơn một tệp
- Bạn sau đó cũng sửa tay thêm một số nội dung
- Bạn đã không nhớ phần nào do ai sửa

Tạm dừng sửa tiếp trước, thu hẹp phạm vi ảnh hưởng.

## Thứ tự xử lý khi lần đầu làm sai

1. Tạm dừng sửa tiếp trước — đừng vừa hoảng vừa để nó sửa thêm
2. Xác nhận trước nó đã sửa những tệp nào
3. Dùng được hoàn tác trong sản phẩm thì ưu tiên hoàn tác
4. Nếu dự án vốn đang dưới Git, rồi mới dùng phương pháp Git bạn quen để lùi
5. Về trạng thái an toàn rồi, mới giao lại chỉ thị rõ hơn

## Nếu chưa quen Git, có thể làm như sau trước

Nhiều người mới bị hai chữ «khôi phục» làm sợ — cứ tưởng phải hiểu nhiều lệnh Git trước. Ban đầu không cần như vậy.

Có thể làm như sau trước:

- Luyện trong thư mục luyện tập
- Một lần chỉ để nó sửa một tệp nhỏ
- Kết quả không hài lòng thì hoàn tác thẳng

Đợi bắt đầu xử lý dự án chính thức rồi mới học hệ thống cách lùi bằng Git.

## Phòng ngừa quan trọng hơn khắc phục

Các cách làm sau sẽ hạ rõ xác suất «sửa sai rồi khó thu dọn»:

- Viết rõ «chỉ sửa tệp nào»
- Để nó đưa kế hoạch trước, rồi mới thực thi
- Mỗi bước xong kiểm ngay — đừng tích nhiều thay đổi rồi mới xem cùng lúc
- Trước thao tác rủi ro cao xác nhận trước

Làm sai bản thân không đáng sợ. Chưa nhìn rõ phạm vi thay đổi đã sửa tiếp mới phiền hơn.

## Xem điểm khôi phục như công cụ khám phá

Khôi phục không chỉ để chữa lỗi sau khi xảy ra. Nó cũng hữu ích trước khi thử hướng khác.

Nên tạo điểm khôi phục khi:

- So sánh hai hướng hiện thực
- Nhờ Agent refactor phạm vi rộng
- Thử script tự động hóa hoặc thay thế hàng loạt
- Không chắc yêu cầu có sớm đổi hướng không

Nhịp an toàn hơn: xác nhận trạng thái an toàn hiện tại, yêu cầu Codex nêu file sẽ ảnh hưởng, tạo điểm khôi phục hoặc xác nhận trạng thái Git, sửa phạm vi nhỏ, review diff và kết quả kiểm chứng, rồi quyết định giữ, rollback hoặc thử hướng khác.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Cơ sở kiểm chứng:** Đã đối chiếu chéo với các nguyên tắc nhập môn liên quan phê duyệt, kiểm tra kết quả, khôi phục khi thất bại và Git/cây làm việc đã được kiểm chứng trong cẩm nang hiện tại; trang này chỉ xác nhận phương pháp lùi ổn định «tạm dừng trước, xem phạm vi, ưu tiên hoàn tác, rồi khôi phục về trạng thái an toàn» — không viết lối vào hoàn tác của một client cụ thể thành hợp đồng cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
