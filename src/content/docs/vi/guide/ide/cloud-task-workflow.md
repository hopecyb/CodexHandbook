---
title: Tác vụ Cloud trong IDE
description: Ủy thác tác vụ Cloud từ IDE, theo dõi trạng thái và rà soát đầu ra từ xa.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Một số tích hợp IDE hỗ trợ **ủy thác tác vụ lên Cloud**. Tác vụ chạy trong môi trường chuẩn hóa từ xa; bạn có thể tiếp tục sửa local, hoặc rời máy. Quy trình giống Cloud/Web thuần, chỉ khác lối vào nằm phía trình soạn thảo.

## Nội dung

- Khi nào gửi tác vụ Cloud từ IDE thay vì thuần local
- Trước và sau ủy thác cần chuẩn bị gì
- Cách đưa diff từ xa về rà soát local

## Tình huống phù hợp

| Phù hợp Cloud | Giữ local |
|---|---|
| Cài phụ thuộc nặng, môi trường khó tái hiện | Sửa nhanh vài dòng |
| Cần push nhánh / mở PR | Chưa kết nối GitHub |
| Chạy lâu, muốn thông báo phê duyệt trên điện thoại | Có bản nháp nhạy cảm chưa commit trên máy |

Khái niệm: [Local và Cloud](/guide/foundations/local-vs-cloud/)

## Quy trình này phù hợp khi nào

Loại quy trình này thường gặp khi:

- Bạn quen làm việc trong IDE
- Nhưng bản thân tác vụ chạy trong môi trường từ xa hợp hơn

Tức là bạn vẫn làm trong IDE, nhưng môi trường thực thi đã chuyển sang từ xa.

## Điều kiện tiên quyết

- [ ] [GitHub đã kết nối](/guide/web-and-cloud/connect-github/)
- [ ] [Môi trường](/guide/web-and-cloud/cloud-environments/) Cloud và [Secrets](/guide/web-and-cloud/secrets-and-variables/) đã cấu hình (nếu tác vụ cần)
- [ ] Thay đổi local đã commit hoặc nêu rõ «lấy nhánh từ xa làm chuẩn»

**IDE không thay thế Cloud trong việc truy cập commit chưa push trên máy bạn.**

## Hiểu nhầm thường gặp

### 1. Trong IDE bấm «chạy trên Cloud» — nó tự mang theo mọi thứ trên máy?

Không.  
Tác vụ từ xa thấy vẫn là kho từ xa, môi trường từ xa, và nội dung bạn giao rõ cho nó.

### 2. Lối vào nằm trong IDE — vậy gần giống tác vụ local?

Cũng khác.  
Vị trí khởi nằm trong IDE, nhưng biên thực thi, môi trường và nội dung nhìn thấy vẫn là bộ Cloud.

### 3. Cloud chạy xong không có nghĩa đã rà soát xong

Hoàn thành từ xa chỉ nghĩa tác vụ đã chạy xong ở đó — không nghĩa review local, kiểm thử và xác nhận cuối đã xong.

## Quy trình khuyến nghị

```text
1. Trong IDE viết rõ mô tả tác vụ (mục tiêu, nhánh, ràng buộc, nghiệm thu)
2. Chọn «chạy trên Cloud» hoặc lối vào tương đương (theo UI sản phẩm)
3. Xác nhận kế hoạch (nếu bật chế độ plan)
4. Rời máy hoặc tiếp tục làm local → xem tiến độ qua thông báo/bảng
5. Sau khi từ xa xong: xem diff trên Web/App → mở PR hoặc pull nhánh về local
6. Chạy kiểm thử local + review thủ công → merge
```

Chi tiết mở PR: [Tạo Pull Request](/guide/web-and-cloud/create-pull-requests/)

## Một thứ tự thường dùng

Lần đầu gửi tác vụ Cloud từ IDE, có thể theo thứ tự:

1. Xác nhận thay đổi local đã commit hay cố ý không mang theo
2. Xác nhận GitHub, Secrets, nhánh đã sẵn
3. Khởi tác vụ với mục tiêu, phạm vi và tiêu chí nghiệm thu rõ
4. Từ xa xong thì quay lại xem diff
5. Local bổ sung kiểm thử và rà soát thủ công

Khác biệt cốt lõi giữa tác vụ Cloud và local trong IDE nằm ở môi trường thực thi có phải từ xa hay không.

## Quan hệ với ủy thác trên ứng dụng Desktop

[Tác vụ local và Cloud](/guide/desktop-app/local-and-cloud-tasks/) của Desktop App và ủy thác IDE dùng chung backend Cloud; khác chủ yếu ở **UI lối vào và đính kèm ngữ cảnh** (IDE có thể kèm tóm tắt vùng chọn hiện tại).

## Biên an toàn

- Quyền tác vụ Cloud bị ràng buộc bởi phạm vi kết nối GitHub và chính sách tổ chức
- Không dán khóa production vào mô tả tác vụ; dùng [Secrets](/guide/web-and-cloud/secrets-and-variables/)
- Trước khi merge vẫn phải [rà soát thủ công](/guide/web-and-cloud/code-review/)

## Lỗi thường gặp

- Ủy thác xong vẫn sửa cùng tệp trên máy → xung đột với nhánh từ xa
- Không ghi tên nhánh → từ xa push thẳng nhánh dùng chung
- Coi đầu ra Cloud là «đã nghiệm thu» rồi bỏ qua CI

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** IDE / Cloud  
**Ghi chú tái kiểm:** Trang này viết «ủy thác trực tiếp tác vụ Cloud từ IDE, đưa diff về, theo dõi local» như năng lực và quy trình tiện ích hiện tại khá cụ thể, nhưng tài liệu chính thức hiện hành chưa đủ để chứng minh từng hình thái trải nghiệm ủy thác Cloud trong IDE; trước khi bổ sung tài liệu IDE/Cloud chính thức nên gắn `outdated`.  
**Kiểm chứng gần nhất:** 2026-07-26
