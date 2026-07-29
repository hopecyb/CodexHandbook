---
title: Chọn công cụ
description: Khi nào dùng terminal, tìm kiếm, trình duyệt hoặc công cụ khác.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

“Chọn công cụ” nghĩa là: việc này nên làm bằng cách nào vừa hiệu quả vừa an toàn.

Khi chọn công cụ, phán đoán theo loại tác vụ thường rõ hơn.

## Khi chọn công cụ đang xem gì

Khi chọn, chủ yếu xem:

- Cái nào sát tác vụ hiện tại nhất
- Cái nào lấy kết quả với chi phí nhỏ nhất
- Cái nào rủi ro thấp nhất, dễ kiểm nhất

Cùng một mục tiêu, chọn sai công cụ chưa chắc thất bại hoàn toàn, nhưng thường chậm hơn, vòng hơn, cũng dễ xảy ra ngoài ý muốn hơn.

| Cần | Ưu tiên |
|---|---|
| Sửa tệp trong kho | Công cụ tệp |
| Chạy kiểm thử/build | Terminal |
| Tra sự kiện công khai | Tìm kiếm web |
| Xem trạng thái trang thật | Trình duyệt (nâng cao) |

Trong Prompt viết rõ công cụ được phép và bị cấm, giảm tự ý lên mạng hoặc cài dependency lung tung.

## Khi chưa chắc chọn thế nào

Nếu tạm chưa chắc, phán đoán theo thứ tự:

1. Đang xử lý dự án cục bộ, hay tra sự kiện bên ngoài
2. Tôi cần “thực thi hành động”, hay chỉ cần “nhìn thấy kết quả”
3. Công cụ nào hoàn thành bước này với phạm vi nhỏ nhất

Ví dụ:

- Muốn xem thay đổi mã -> tệp
- Muốn xác nhận build có qua không -> terminal
- Muốn xác nhận trang web giờ trông thế nào -> trình duyệt
- Muốn xác nhận thông tin công khai mới nhất -> tìm kiếm web

## Hiểu lầm thường gặp

### 1. Công cụ không phải càng mạnh càng tốt

Công cụ càng mạnh thường cũng nghĩa là:

- Phạm vi ảnh hưởng lớn hơn
- Rủi ro cao hơn
- Bạn càng cần hiểu nó đang làm gì

### 2. Terminal làm được mọi thứ, cũng chưa chắc nên ưu tiên terminal

Nếu chỉ cần xác nhận trang trông thế nào, trình duyệt thường trực tiếp hơn terminal.  
Nếu chỉ cần tra một số phiên bản công khai, tìm kiếm web phù hợp hơn để nó chạy lệnh lung tung.

### 3. Không biết chọn thì sao?

Có thể phán đoán theo quy tắc:

- **Đọc/sửa nội dung dự án** -> tệp
- **Kiểm chứng lệnh hoặc build** -> terminal
- **Tra sự kiện công khai** -> tìm kiếm
- **Xem trình bày thật của trang** -> trình duyệt

### 4. Một tác vụ thường không chỉ dùng một công cụ

Nhiều tác vụ thật vốn kết hợp, ví dụ:

- Đọc tệp trước, rồi chạy build
- Tìm sự kiện công khai trước, rồi quay lại viết lại tài liệu
- Dùng trình duyệt xem trang trước, rồi sửa trong mã

Then chốt là mỗi bước cố dùng công cụ phù hợp hơn; không cần cố chấp “chỉ chọn một”.

## Cách viết dùng trực tiếp được

Có thể bổ sung trong tác vụ:

```text
Ưu tiên dùng tệp và terminal để hoàn thành, đừng tìm kiếm mạng; nếu cần trình duyệt kiểm trang, hãy nói lý do trước.
```

Chọn trước công cụ nhỏ nhất, sát tác vụ nhất; đừng ngay từ đầu dùng loại ảnh hưởng phạm vi lớn nhất.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này là nguyên tắc chọn công cụ theo tác vụ: đọc/sửa nội dung dự án ưu tiên tệp, kiểm chứng lệnh ưu tiên terminal, tra sự kiện công khai ưu tiên tìm kiếm, xem trang thật ưu tiên trình duyệt; khung này đã đối chiếu chéo với chương công cụ sổ tay hiện tại và định nghĩa loại công cụ thực tế.  
**Kiểm chứng gần nhất:** 2026-07-26
