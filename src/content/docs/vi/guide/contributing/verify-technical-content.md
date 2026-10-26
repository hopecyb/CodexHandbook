---
legacyVerification:
  status: "verified"
  basis: "Đã đối chiếu với hệ thống trạng thái hiện tại của sổ tay, nhiều đợt rà soát đã hoàn thành và nguyên tắc ưu tiên nguồn chính thức. Trang này mô tả tiêu chuẩn nội bộ để nâng trang lên `verified` và nguyên tắc hạ cấp."
  checkedAt: "2026-07-26"
title: Kiểm chứng nội dung kỹ thuật
description: Phân biệt trạng thái biên tập, đối chiếu nguồn và chạy thử ví dụ; ghi lại phạm vi, môi trường và bằng chứng kiểm chứng.
locale: vi
source_locale: zh-CN
source_revision: "cfb077d"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Đã cập nhật quy chuẩn đóng góp theo các trường metadata mới của trang; không có nghĩa là mọi cơ chế sản phẩm được nhắc đến ở đây đều đã được chạy lại.
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

### Trạng thái biên tập và cách kiểm chứng là hai trường khác nhau

`editorialStatus` ghi tiến độ viết và rà soát. `verification.kind` ghi loại kiểm tra thực sự đã làm; không thể suy từ `verified` rằng ví dụ đã được chạy.

| Cách kiểm chứng | Kết luận có thể đưa ra | Bằng chứng bắt buộc |
|---|---|---|
| `editorial` | Đã rà cấu trúc, cách diễn đạt hoặc liên kết nội bộ | Tóm tắt kiểm tra và ngày |
| `source-checked` | Sự kiện trong phạm vi ghi rõ khớp với nguồn | Liên kết nguồn cụ thể, tóm tắt và ngày |
| `run-tested` | Ví dụ đã chạy trong môi trường được ghi lại | Môi trường, bản ghi chạy và rà soát, tóm tắt và ngày |

`run-tested` không bảo đảm ví dụ hoạt động trên mọi nền tảng. Bản tóm tắt phải nói rõ đã và chưa kiểm chứng điều gì; tự đối chiếu bằng phép tính độc lập không thể gọi là người thứ hai rà soát. Bản ghi cũ thiếu bằng chứng được giữ trong `legacyVerification`, không tự động suy thành trạng thái kiểm chứng mới nào.

```yaml
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Đã kiểm tra cấu trúc và liên kết nội bộ; ví dụ chưa được chạy thử.
```

Đối chiếu nguồn và chạy thử dùng danh sách `evidence`, mỗi mục có `label` và `href`. Chạy thử còn phải điền `environment`, nêu rõ hệ điều hành, phiên bản ứng dụng liên quan và phiên bản phụ thuộc. Bản dựng sẽ từ chối bản ghi chạy thử thiếu môi trường hoặc liên kết bằng chứng. Có liên kết không đồng nghĩa bằng chứng đã đủ; người duy trì phải đọc bản ghi.

### Bài cộng đồng giúp bạn hiểu, nhưng không thay kiểm chứng dữ kiện

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
3. **Căn cứ chính thức**: ghi nguồn chính thức cụ thể cho dữ kiện về sản phẩm; bài tập phương pháp ổn định dùng đầu vào thật và bản ghi kiểm tra, không nhận vơ sự chứng thực chính thức
4. **Nguồn cộng đồng**: nếu tham khảo tài liệu cộng đồng, chỉ lấy chủ đề; dữ kiện lấy chính thức làm chuẩn
5. **Cập nhật ngày**: chỉ ghi ngày kiểm tra thực tế vào `verification.checkedAt`; không cập nhật hàng loạt ngày cũ để giả như đã rà soát lại
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
- Tên dữ kiện MCP/Hook

## Khi thất bại

- Hạ cấp theo thực tế thành `review`, `draft` hoặc `outdated`
- Trong PR nói rõ bước nào không khớp chính thức
- Lệch lớn thì mở issue gắn `outdated`

## Liên quan

- [Chính sách phiên bản sổ tay](/vi/guide/start-here/handbook-version-policy/)
- [Tài nguyên chính thức](/vi/guide/reference/official-resources/)

`verified` nghĩa là “đã kiểm chứng thật theo căn cứ đánh dấu hiện tại, và có căn cứ truy được”. Chỉ dựa vào tác giả tự thấy đáng tin thì chưa đủ.
