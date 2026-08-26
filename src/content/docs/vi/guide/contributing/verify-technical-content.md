---
title: Kiểm chứng nội dung kỹ thuật
description: Cách đánh dấu trang là verified, gồm bước tái hiện, căn cứ chính thức và ngày tháng.
locale: vi
source_locale: zh-CN
source_revision: abada81
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Trong sổ tay, lệnh, quyền, giá, tính năng sản phẩm thay đổi theo phiên bản. **Kiểm chứng** đảm bảo khi độc giả làm theo tài liệu, kết quả có thể kỳ vọng được.

## Nội dung trang này

Nhiều người lần đầu tham gia duy trì tài liệu coi “tôi nhìn không thấy vấn đề” là “đã kiểm chứng rồi”.

Nhưng với sổ tay kỹ thuật, hai việc này khác nhau nhiều:

- Cái trước chỉ là chủ quan thấy giống đúng
- Cái sau nghĩa là bạn đã thật sự thử với phiên bản hiện tại, môi trường hiện tại, bước hiện tại

Ở đây giải quyết cách nâng “trông đúng” thành “có bằng chứng chứng minh giờ vẫn đúng”.

## “Kiểm chứng” đang kiểm gì

“Kiểm chứng nội dung kỹ thuật” có thể hiểu là: không chỉ kiểm chữ có trôi không, mà xác nhận độc giả làm theo thì hôm nay thật sự vẫn làm ra được.

Việc này đặc biệt quan trọng vì nhiều nội dung không ổn định mãi, ví dụ:

- Lệnh sẽ đổi
- Vị trí menu sẽ đổi
- Giá trị mặc định của quyền sẽ điều chỉnh
- Năng lực sản phẩm và phạm vi khả dụng sẽ cập nhật

Vậy kiểm chứng không phải sạch sẽ biên tập thái quá, mà tránh độc giả làm theo tài liệu cũ rồi dính hố.

## Ý nghĩa trạng thái

| Trạng thái | Ý nghĩa |
|---|---|
| `planned` | Đã lập kế hoạch, chưa viết |
| `draft` | Đang viết, chưa chốt đầy đủ |
| `review` | Nội dung xong, chờ rà lại |
| `verified` | Đã kiểm chứng theo căn cứ đánh dấu |
| `outdated` | Sản phẩm đổi, cần cập nhật |
| `archived` | Giữ lịch sử, không vào điều hướng chính |

## Hiểu lầm thường gặp

### `verified` nghĩa là có bằng chứng, không chỉ là tự tin

Nó không phải kiểu giọng văn, mà là trạng thái bằng chứng.

Chỉ khi bạn thật sự tái hiện, đối chiếu căn cứ chính thức, xác nhận phạm vi trang và ngày khớp, mới phù hợp đánh dấu `verified`.

### Bài cộng đồng giúp bạn hiểu, nhưng không thay kiểm chứng sự kiện

Bài viết cộng đồng hoặc tài liệu cộng đồng khác rất hợp để giúp bạn thấy nên bổ sung chủ đề nào.

Nhưng một khi liên quan:

- Tên lệnh
- Hành vi quyền
- Lối vào sản phẩm
- Giá, hạn ngạch, khác biệt khu vực

vẫn phải quay về tài liệu chính thức hoặc kết quả chạy thật hiện tại.

### Kiểm chứng không phải chỉ nhìn từng câu

Đôi khi mỗi câu đơn lẻ không sao, nhưng nối lại thì không đứng vững, ví dụ:

- Sản phẩm áp dụng không khớp trang thực tế
- Thứ tự bước sai
- Tiền đề mặc định không viết ra
- Tiêu đề hứa nhiều hơn phạm vi thân bài thật sự đã kiểm

Vậy phải kiểm theo “cả chuỗi thao tác”, không chỉ quét mặt chữ.

## Danh sách kiểm chứng

1. **Ghi rõ phạm vi**: sản phẩm (App/CLI/IDE/Cloud), OS, số phiên bản CLI
2. **Tái hiện từng bước**: làm theo từ đầu hoặc worktree sạch
3. **Căn cứ chính thức**: ít nhất một liên kết tài liệu chính thức OpenAI hoặc trung tâm trợ giúp
4. **Nguồn cộng đồng**: nếu tham khảo tài liệu cộng đồng, chỉ lấy chủ đề; sự kiện lấy chính thức làm chuẩn
5. **Cập nhật ngày**: chân trang `Kiểm chứng gần nhất: YYYY-MM-DD`
6. **Rà độc lập**: `verified` khuyến nghị người thứ hai không phải tác giả xác nhận

## Thứ tự kiểm chứng

Thứ tự sau dễ nhất để không sót:

1. Xác nhận trước trang nói sản phẩm nào, lối vào nào, tình huống nào
2. Đi lại từ đầu các bước trong bài
3. Đối chiếu tài liệu chính thức với thông tin dễ thay đổi
4. Hạ cấp chỗ chưa chắc, chưa tái hiện được
5. Cuối cùng mới cập nhật trạng thái và ngày

Thà giữ `review` trước, đừng viết `verified` sớm khi bằng chứng chưa đủ.

## Thông tin dễ thay đổi

Các mục sau phải kiểm lại mỗi quý hoặc theo phát hành major:

- Tên lệnh và lệnh con, flags
- Mặc định quyền và hành vi Sandbox
- Gói, tên mô hình, khả dụng theo khu vực
- Tên sự kiện MCP/Hook

## Khi thất bại

- Hạ cấp theo thực tế thành `review`, `draft` hoặc `outdated`
- Trong PR nói rõ bước nào không khớp chính thức
- Lệch lớn thì mở issue gắn `outdated`

## Liên quan

- [Chính sách phiên bản sổ tay](/vi/guide/start-here/handbook-version-policy/)
- [Tài nguyên chính thức](/vi/guide/reference/official-resources/)

`verified` nghĩa là “đã kiểm chứng thật theo căn cứ đánh dấu hiện tại, và có căn cứ truy được”. Chỉ dựa vào tác giả tự thấy đáng tin thì chưa đủ.

---

**Trạng thái:** verified  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với hệ trạng thái hiện tại của sổ tay, thực hành rà nhiều đợt đã hoàn thành và nguyên tắc ưu tiên chính thức; trang này mô tả chuẩn kiểm chứng nội bộ và nguyên tắc hạ cấp khi nâng trang lên `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
