---
title: Công cụ trình duyệt
description: Để Codex mở trang web, kiểm trạng thái UI và kiểm chứng hành vi frontend — năng lực và ranh giới.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Công cụ trình duyệt** cho phép Agent truy cập trang web thật trong môi trường được kiểm soát: đọc DOM, chụp màn hình, đôi khi cũng tương tác đơn giản. Nó phù hợp nghiệm thu frontend, kiểm liên kết tài liệu, đối chiếu bản thiết kế; không phù hợp thay kiểm toán bảo mật, cũng không nên dùng để tùy tiện thao tác backend production.

Nó và tìm kiếm là hai loại công cụ khác nhau: tìm kiếm dùng để tìm thông tin trang web; công cụ trình duyệt dùng để thật sự mở trang.

## Nó phù hợp giải quyết vấn đề gì

Loại công cụ này thường dùng cho:

- Trang này giờ thật sự trông thế nào
- Nút này bấm xuống sẽ xảy ra gì
- Bố cục ở độ rộng thật có bị hỏng không

Loại câu hỏi này chỉ đọc mã hoặc xem mô tả chữ thường chưa đủ; vẫn phải mở thật trang.

## Nội dung trang này

- Công cụ trình duyệt làm được gì, không làm được gì
- Khác với tìm kiếm web và Computer Use thế nào
- Ủy quyền và ràng buộc an toàn thế nào

## Tổng quan năng lực

| Phù hợp | Không phù hợp |
|---|---|
| Mở trang dev server cục bộ xem bố cục | Crawl hàng loạt site bị ToS hạn chế |
| Kiểm liên kết tài liệu công khai 404 | Tự đăng nhập hệ thống chưa được ủy quyền |
| Đối chiếu trang tĩnh với hiện thực | Thay khung kiểm thử E2E đầy đủ |
| Đọc văn bản hiển thị trên trang hỗ trợ gỡ lỗi | Xử lý site cần xác minh người–máy phức tạp |

Nền chọn công cụ: [Chọn công cụ](/guide/tools/tool-selection/)

## So sánh với công cụ khác

| Công cụ | Đầu vào | Đầu ra |
|---|---|---|
| Tìm kiếm web | Từ khóa truy vấn | Tóm tắt và liên kết |
| Trình duyệt | URL / địa chỉ cục bộ | Cấu trúc trang, ảnh chụp, kết quả tương tác |
| Computer Use | GUI cả màn hình | Thao tác ứng dụng bất kỳ (nặng hơn, nhạy hơn) |

## Hiểu lầm thường gặp

### 1. Công cụ trình duyệt không thay thế kiểm thử tự động

Nó giúp bạn kiểm trang, chụp màn hình, bấm vài tương tác, nhưng không thay hệ thống kiểm thử đầy đủ.

### 2. Trang mở được không bằng trang không có vấn đề

Mở được chỉ nói “trang tồn tại”; bố cục, văn bản, tương tác, liên kết đúng hay không vẫn phải xem tiếp.

### 3. Khi nào nên dùng?

Tình huống phổ biến nhất:

- Xem trang cục bộ có vấn đề bố cục không
- Kiểm liên kết có 404 không
- Đối chiếu hướng lớn giữa trang và bản thiết kế
- Xác nhận “mã trông đúng, nhưng trang thật có đúng không”

## Tiêu chuẩn phán đoán

Nếu câu hỏi của bạn đang hỏi:

- “Render thật trông thế nào”
- “Trên trang thật sự thấy gì”
- “Tương tác này bấm xong trang phản hồi gì”

thì công cụ trình duyệt thường phù hợp hơn phân tích thuần văn bản.

## Quy trình khuyến nghị

1. **Frontend cục bộ**: chạy `npm run dev` trước, rồi đưa `http://localhost:PORT/path`
2. **Nói rõ tác vụ**: «Kiểm form đăng nhập ở độ rộng 375px có bị tràn không», chứ không «xem trang web»
3. **Viết rõ ranh giới**: cấm truy cập mạng ngoài, cấm gửi form tới production
4. **Nghiệm thu**: đối chiếu [Kiểm chứng artifact](/guide/quality/verify-artifacts/) và ảnh chụp

## Cách viết dùng trực tiếp được

Có thể yêu cầu vậy:

```text
Chỉ truy cập http://localhost:4321/guide/foundations/local-vs-cloud/ , kiểm bố cục màn đầu và cảm giác hình tiêu đề.
Đừng truy cập mạng ngoài, đừng gửi bất kỳ form nào.
Nếu phát hiện vấn đề, hãy đưa căn cứ ảnh chụp và đề xuất sửa.
```

## Ranh giới an toàn

- Mặc định giả định trình duyệt có thể truy cập **mọi thứ máy hoặc môi trường của bạn truy cập được** — gồm cả admin nội bộ
- Trong tác vụ khai báo: `chỉ truy cập localhost` hoặc danh sách trắng tên miền được phép
- Đừng chạy tác vụ kho không đáng tin trong cấu hình trình duyệt đã đăng nhập tài khoản cá nhân
- Chính sách trình duyệt môi trường Cloud do [Môi trường Cloud](/guide/web-and-cloud/cloud-environments/) và chính sách mạng quyết định

Khái niệm phê duyệt: [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/)

## Lỗi thường gặp

- Đưa URL production mà không hạn chế chỉ đọc
- Coi ảnh chụp trình duyệt là «kiểm thử đã qua» mà không chạy kiểm thử tự động
- Trộn với tìm kiếm web: tìm kiếm không thay kiểm render thật

## Danh sách nghiệm thu

- [ ] Phạm vi truy cập đã khóa cứng trong prompt
- [ ] Vấn đề hình ảnh then chốt có ảnh chụp hoặc mô tả chữ
- [ ] Khớp kết luận kiểm thử đơn vị/E2E hoặc khác biệt đã biết đã ghi lại

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / Codex (tùy phiên bản và quyền)  
**Căn cứ kiểm chứng:** OpenAI Help Center hiện đã có hướng dẫn trình duyệt tích hợp trong App máy tính, xác nhận có thể mở trang trong Work hoặc Codex, chuyển tab, tải tệp, dùng chế độ chú thích, và phê duyệt truy cập theo từng site. Nội dung trang tập trung vào tình huống phù hợp của công cụ trình duyệt, khác biệt với tìm kiếm/Computer Use và ranh giới an toàn.  
**Kiểm chứng gần nhất:** 2026-07-26
