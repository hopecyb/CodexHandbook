---
title: Tạo Pull Request
description: "Từ Tác vụ Cloud tới PR có thể review — mô tả, phạm vi và cổng merge của người."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Trong quy trình Cloud lần đầu, Tác vụ có thể «xong» trong khi thay đổi chưa ở trạng thái dễ kiểm tra và thảo luận. Trong đội, bước chuyển này thường qua một **Pull Request**.

PR là đề xuất thay đổi có thể review.

Nó tập trung điều gì đã đổi, vì sao và đã Kiểm chứng thế nào — nơi đầu ra Cloud đến với đội.

## Nội dung phủ

- Kỳ vọng đầu-cuối từ Tác vụ Cloud tới PR
- Mô tả PR cần gồm gì cho người và CI
- Khi nào không nên mở PR tự động

## Khi nào mở PR

Nếu người khác cần thấy thay đổi, CI cần chạy, hoặc công việc cần merge vào nhánh chính, đừng dừng ở «nhánh đã cập nhật» — chuyển sang **PR có thể review**.

## Quy trình khuyến nghị

```text
Kết nối GitHub → làm rõ issue/mục tiêu → Tác vụ Cloud (xác nhận kế hoạch) → push nhánh → mở PR → review người + CI → merge
```

Tiền đề: [Kết nối GitHub](/guide/web-and-cloud/connect-github/)

## Vì sao tự merge không phải mặc định

PR tồn tại để người và tự động hóa có điểm kiểm soát — không chỉ để upload code.

Mẫu phổ biến:

- Codex có thể giúp mở PR
- Người quyết định có merge không

Điều này giữ cổng an toàn dù Tác vụ đã lệch hướng.

## Điểm cốt lõi Prompt Tác vụ

```text
Mục tiêu: Sửa timeout đăng nhập mô tả trong #42
Nhánh: fix/42-login-timeout
Phạm vi: chỉ packages/auth và kiểm thử liên quan
Xong: Mở PR tới main; không merge
Mô tả PR phải gồm: lý do, tóm tắt thay đổi, lệnh và kết quả kiểm thử, rủi ro và rollback
```

Căn chỉnh với [định nghĩa hoàn thành](/prompts/define-done/) và [cấu trúc Tác vụ](/prompts/task-anatomy/).

## Một PR tốt trả lời bốn câu hỏi

1. Vì sao bạn làm thay đổi này?
2. Chính xác điều gì đã đổi?
3. Bạn Kiểm chứng thế nào?
4. Còn rủi ro, giới hạn hoặc khoảng trống nào?

Không có chúng, người review phải tự dựng lại Ngữ cảnh.

## Checklist chất lượng PR

- [ ] Tiêu đề nêu **điều gì** đã đổi, không phải «cập nhật code»
- [ ] Liên kết số issue
- [ ] CI đạt hoặc giải thích fail đã biết
- [ ] Kích thước Diff chấp nhận được; tách PR quá lớn
- [ ] Không secrets, không bão định dạng không liên quan
- [ ] Ảnh chụp hoặc log cho thay đổi UI/hành vi

## Cổng người

Dù Codex mở PR, **merge** mặc định phải do người (hoặc bot được kiểm soát dưới bảo vệ nhánh):

Xem [mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/)

## Hiểu nhầm thường gặp

### 1. Nhét thay đổi không liên quan vào một PR

Khó review và khó hoàn tác.

### 2. Nói «đã sửa» mà không nói Kiểm chứng thế nào

Người review không phân được «đã kiểm thử» và «có lẽ ổn».

### 3. Để Codex đụng thẳng main

Có thể được với thí nghiệm solo; quá rủi ro với repo dùng chung.

## Tự động hóa review

- Dùng Skill hoặc `codex exec` trong CI cho **bình luận review bổ trợ**
- Tự merge cần quản trị riêng — không phải đường mặc định cho người mới

## Lỗi thường gặp

- Một PR với nhiều tính năng không liên quan
- Mô tả nói «thay đổi do AI sinh» không có ghi chú kiểm thử
- Merge vào main không qua review

## Đọc thêm

- [Tích hợp GitHub](/guide/integrations/github/)
- [Xem xét Diff](/guide/quality/review-diffs/)
- [App máy tính: Diff và bình luận](/guide/desktop-app/diffs-comments-and-review/)

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud / Web  
**Ghi chú đối chiếu:** «Đầu ra Cloud vào PR để người review» vẫn đúng, nhưng trang mô tả cụ thể lối vào PR, hành vi tự động hóa và nhịp giao hàng Cloud; chưa đối chiếu từng dòng với tích hợp PR và GitHub Cloud chính thức hiện hành thì không nên đánh `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
