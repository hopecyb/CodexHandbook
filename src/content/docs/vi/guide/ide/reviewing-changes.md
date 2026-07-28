---
title: Rà soát thay đổi trong IDE
description: Đọc diff, bình luận và chấp nhận/từ chối gợi ý Codex trong trình soạn thảo.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Trải nghiệm rà soát của tiện ích IDE nằm giữa «bổ sung nội dòng» và «review PR đầy đủ»: thay đổi thường hiện trực tiếp trong trình soạn thảo hoặc view diff bên. Trang này nói cách chấp nhận kết quả an toàn.

Khi thấy một đoạn «có thể chấp nhận ngay» trong IDE, cũng đừng coi «chấp nhận một lần» là thao tác mặc định.

## Nội dung trang

- Hình thái UI rà soát thường gặp trong IDE
- Chiến lược chấp nhận, từ chối, chấp nhận một phần
- Nối với Git, kiểm thử, quy trình PR

## Quy trình rà soát

1. **Xem phạm vi**: những tệp nào đổi? Có xóa hoặc bão định dạng không được yêu cầu không
2. **Đọc logic**: nhánh điều kiện, xử lý lỗi, biên
3. **Kiểm an toàn**: khóa, injection, leo thang quyền, đầu độc phụ thuộc
4. **Chạy kiểm chứng**: kiểm thử / lint theo ước định dự án (terminal IDE hoặc script tác vụ)
5. **Quyết định**: chấp nhận, yêu cầu sửa, hoặc hoàn tác rồi gửi lại tác vụ

Phương pháp luận: [Rà soát diff](/guide/quality/review-diffs/)

## Thao tác riêng IDE (khái niệm)

| Thao tác | Gợi ý |
|---|---|
| Inline diff / văn bản bóng | Xem rõ từng khối rồi mới chấp nhận — tránh chấp nhận hết một lần |
| Chấp nhận từng tệp | Chấp nhận trước tệp rủi ro thấp nhất (ví dụ kiểm thử) |
| Từ chối và thử lại | Trong follow-up nói «chỉ sửa X, đừng đụng Y» |
| Tích hợp Git | Sau chấp nhận vẫn dùng `git diff` kiểm lại rồi mới commit |

[Diff, bình luận và rà soát](/guide/desktop-app/diffs-comments-and-review/) của Desktop App đầy đủ hơn; phía IDE lấy rà soát **nhẹ, tần suất cao** làm chính.

## Thói quen Prompt khuyến nghị

Trước khi bắt đầu tác vụ, ghi:

- Glob đường dẫn được phép sửa
- Cấm: `git push`, sửa lockfile (trừ khi yêu cầu rõ)
- Khi hoàn thành: liệt kê tóm tắt thay đổi, **không tự commit**

Xem [Mẫu phê duyệt thủ công](/cases/workflows/human-approval-patterns/)

## Lỗi thường gặp

- Tin biểu tượng kiểm thử xanh nhưng chưa tự chạy
- Giấu thay đổi logic trong diff tự định dạng lớn
- Chấp nhận xong push thẳng, chưa qua PR / bảo vệ nhánh

## Danh sách nghiệm thu

- [ ] `git status` khớp tệp kỳ vọng
- [ ] Kiểm thử qua (local hoặc CI)
- [ ] Không còn `.env`, token, `console.log` debug dư
- [ ] Thông điệp commit do bạn viết hoặc xác nhận

## Câu hỏi thường gặp

### 1. Gợi ý nội dòng trông nhỏ — nhận thẳng được không?

Tốt nhất đừng thành thói quen.

Nhiều vấn đề không nằm ở «thay đổi lớn», mà ở «trông nhỏ nên không xem kỹ».

### 2. Tôi chưa giỏi rà logic — xem gì trước hữu ích nhất?

Xem ba việc này đã rất đáng:

- Có phải tệp bạn muốn không
- Có xóa thứ không nên xóa không
- Có dư debug rõ hoặc lệch phong cách không

### 3. Chấp nhận xong có bằng hoàn thành?

Chưa.

Chấp nhận chỉ đưa thay đổi vào không gian làm việc của bạn; sau đó còn kiểm chứng, rồi quyết định có commit không.

«Chấp nhận thay đổi» trong IDE chỉ là thao tác giữa chừng, không phải nghiệm thu cuối.

## Nguồn tham khảo
- [Kiểm chứng và rà soát thủ công](/guide/foundations/verification-and-human-review/)
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** IDE  
**Ghi chú tái kiểm:** Trang này phụ thuộc việc tiện ích IDE hiện có cung cấp inline diff, diff bên, gợi ý chấp nhận/từ chối theo khối hay không — tài liệu chính thức công khai hiện chưa đủ để xác nhận từng năng lực giao diện; trước khi bổ sung tài liệu tiện ích phiên bản mới không nên gắn `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
