---
caseCategory: creation
directoryOrder: 40
title: 'Xây dựng website: từ tài liệu sự kiện đến trang có thể xem thử'
description: Tải yêu cầu, trang khởi đầu và kết quả tham khảo để luyện bố cục đáp ứng, thao tác bàn phím và sửa lỗi nút có thể tái hiện.
contentType: case
audiences: [creator, developer]
level: beginner
outputs: [html, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  environment: Python 3.12.11 / Darwin arm64; trình duyệt tích hợp của Codex (không rõ phiên bản engine chính xác), khung nhìn 1280×720 và 375×812.
  summary: Trang tham khảo đã được kiểm tra trên trình duyệt ở chế độ máy tính và màn hình hẹp, gồm nút và thao tác bàn phím. Liên kết hỏng đã được tái hiện và sửa. Việc này không chứng minh tính tương thích đa trình duyệt, hiệu quả của mô hình hay việc người đọc hoàn thành bài.
  evidence:
    - label: Kiểm tra trình duyệt và chỉnh sửa hiển thị thực tế
      href: /downloads/reading-event/validation/browser-review.md
    - label: Nhật ký lỗi liên kết và cách sửa
      href: /downloads/reading-event/validation/recovery.json
assets:
  - path: /downloads/reading-event/reading-event-1.0.0.zip
    purpose: Yêu cầu cố định, dữ kiện giả lập, HTML khởi đầu, trang tham khảo, mẫu lỗi, biểu mẫu nghiệm thu và tập lệnh kiểm tra
    license: CC0-1.0
    version: 1.0.0
locale: vi
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 55fd86a
---

Biến tài liệu sự kiện thành website một trang có thể mở trong trình duyệt. Sản phẩm gồm trang tĩnh trên máy và biên bản nghiệm thu. Sự kiện và địa điểm đều hư cấu; cách đăng ký chưa được quyết định.

[Tải toàn bộ gói bài tập](/downloads/reading-event/reading-event-1.0.0.zip) · [Mở sản phẩm tham khảo](/downloads/reading-event/solution/index.html) · [Đọc giới thiệu tài liệu](/downloads/reading-event/README.md)

## Mục tiêu và chuẩn bị

Trang cần có giới thiệu sự kiện, thời gian, địa điểm, số chỗ, chi phí, vật dụng cần mang và thông tin chờ xác nhận. Nút chính chỉ dẫn đến phần hướng dẫn tham gia trên cùng trang, không được ngụ ý đã có thể đăng ký.

Sau khi giải nén, sao chép `starter` thành thư mục `work` mới và chỉ cho mô hình sửa `work/index.html`. Dùng `facts.md`, `brief.md` và `prompt.md` ở thư mục gốc của gói làm đầu vào chỉ đọc. Chỉ xem `solution` sau khi hoàn thành. Có thể mở HTML trực tiếp trong trình duyệt mà không cần cài phụ thuộc frontend.

Nếu dùng máy chủ cục bộ, làm theo lệnh Python tùy chọn trong README. Nếu cổng đã bị chiếm, chọn cổng còn trống; không dừng dịch vụ không rõ nguồn gốc.

## Giao nhiệm vụ

```text
Dựa vào facts.md và brief.md, hoàn thiện index.html hiện tại thành trang web một
trang cho buổi gặp mặt đọc sách. Chỉ sửa index.html, dùng HTML và CSS nội tuyến;
không thêm phụ thuộc, truy cập mạng, triển khai hay gửi dữ liệu. Giữ cách đăng ký
ở trạng thái chờ xác nhận; nút chính chỉ nhảy đến phần hướng dẫn tham gia trên
trang này. Khi xong, kiểm tra màn hình máy tính, màn hình hẹp 375px, tiêu điểm
bàn phím và liên kết nội trang. Liệt kê các kiểm tra đã thực hiện và phần chưa
hoàn tất; không ghi đạt cho những kiểm tra chưa chạy.
```

[Bản tham khảo bố cục](/downloads/reading-event/wireframe.md) mô tả thứ tự đọc với hai cột trên máy tính và một cột trên điện thoại. Màu sắc và trang trí có thể khác, nhưng dữ kiện sự kiện, mục chưa rõ và tiêu chí nghiệm thu phải giữ nguyên.

## Kiểm tra sản phẩm

| Hạng mục | Tiêu chí nghiệm thu |
|---|---|
| Dữ kiện | Ngày 17/10/2026, 14:00–15:30, phòng đọc hư cấu, 18 người, miễn phí và tự nguyện mang sách đều khớp tài liệu |
| Chưa rõ | Cách đăng ký vẫn chờ xác nhận; không bịa mã QR, số điện thoại hay liên kết |
| Điện thoại | Đọc được ở độ rộng 375px, không tràn ngang |
| Tương tác | Tab đến được nút chính, tiêu điểm nhìn thấy được; Enter hoặc nhấp chuột đến hướng dẫn tham gia |
| Phạm vi | Chỉ thay đổi `work/index.html`; không thêm phụ thuộc, biểu mẫu thu thập dữ liệu hay xuất bản ra ngoài |

Sao chép [mẫu nghiệm thu](/downloads/reading-event/review-template.md) ra ngoài thư mục làm việc rồi điền kết quả của chính bạn. Trang tham khảo do tác giả viết; biên bản của tác giả không thay thế việc nghiệm thu sản phẩm mô hình tạo trong lần này.

## Làm theo một lần sửa nút bị lỗi

Trong gói, nút ở `fixtures/broken.html` trỏ sai đến `#signup`, trong khi mục thật là `#participation`. Trang trông hoàn chỉnh nhưng nút không đến đúng nơi.

Có thể chạy:

```sh
python3 validation/reproduce.py
```

Chương trình tái hiện kiểm tra trang lỗi trong thư mục tạm, thoát mã 1 và báo `missing-fragment`. Sau đó chương trình chỉ thay `href`, kiểm tra lại và thoát mã 0. Tệp fixture gốc không đổi. [Nhật ký đã lưu](/downloads/reading-event/validation/recovery.json) chứa kết quả cả hai lần.

Đừng “sửa” bằng cách xóa nút hoặc bỏ qua kiểm tra. Chỉ sửa liên kết đích rồi nhấp thật để đối chiếu. Tập lệnh kiểm tra liên kết không hiểu thiết kế, dữ kiện hay trải nghiệm bàn phím; vẫn phải kiểm tra riêng.

## Chỉnh sửa hiển thị thực tế và giới hạn xác minh

Ở lần kiểm tra điện thoại đầu tiên của tác giả, chữ trang trí trên hình quyển sách tràn ra khỏi thẻ. Tác giả điều chỉnh cỡ chữ và khoảng đệm cho màn hình hẹp rồi kiểm tra lại. Các quan sát trên máy tính và điện thoại, tiêu điểm bàn phím, nút chính và dữ kiện F1–F7 nằm trong [biên bản kiểm tra trình duyệt](/downloads/reading-event/validation/browser-review.md).

Bài này chưa kiểm tra mọi trình duyệt, điện thoại thật, thao tác đầy đủ bằng trình đọc màn hình hay việc người đọc độc lập hoàn thành. Website chưa được xuất bản và chưa đo tỷ lệ thành công của mô hình. Trước khi xuất bản, hãy xác nhận riêng nơi lưu trữ, nội dung công khai và quyền triển khai.

Tiếp theo: [xem lại thay đổi](/vi/guide/quality/review-diffs/) · [bài thực hành phục hồi sau lỗi](/vi/guide/reference/troubleshooting/failure-recovery-lab/)
