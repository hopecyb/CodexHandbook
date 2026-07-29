---
title: Tạo dự án luyện tập đầu tiên
description: Chuẩn bị một thư mục luyện tập an toàn có thể bỏ.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Khi tạo dự án luyện tập lần đầu, rất dễ muốn lấy thẳng dự án chính thức đang có để thử. Trông có vẻ đỡ việc — rủi ro cũng cao hơn.

## Cách làm gợi ý

1. Tạo thư mục mới, ví dụ `codex-practice/`
2. Đặt vào 1–2 tệp văn bản không có thông tin nhạy cảm, ví dụ `hello.md`
3. Trong Codex mở/thêm thư mục đó làm dự án
4. **Đừng** dùng kho chứa khóa production, dữ liệu khách hàng hoặc lịch sử không thể bỏ

## Vì sao tạo dự án luyện tập trước

Mục tiêu tác vụ lần đầu là học quy trình, không phải giao nghiệp vụ. Sau khi cô lập, chi phí sửa nhầm thấp hơn nhiều.

Lần luyện đầu quan trọng hơn là làm quen trước các thao tác sau:

- Nó sẽ hiểu tác vụ thế nào
- Khi nào nó xin quyền
- Bạn kiểm tra kết quả thế nào
- Làm sai thì hoàn tác thế nào

Nếu ngay từ đầu luyện trong dự án chính thức, các bước vốn nên học với rủi ro thấp sẽ mang theo cái giá thật.

## Hiểu nhầm thường gặp

### 1. Dự án luyện tập càng giống production thật càng tốt

Lần đầu quan trọng hơn là an toàn, có thể bỏ, dễ kiểm tra — không cần theo đuổi «hoàn toàn thật».

### 2. Chỉ cần tôi cẩn thận một chút, dùng kho chính thức cũng không sao

Vấn đề phổ biến hơn lần đầu là:

- Chưa nói rõ ranh giới tác vụ
- Xem sót Diff
- Phê duyệt thao tác bản thân chưa hiểu

### 3. Dự án luyện tập quá đơn giản, học không được gì

Tác vụ lần đầu càng nhỏ, bạn càng đặt chú ý vào chính quy trình — chứ không phải độ phức tạp nghiệp vụ.

## Chọn dự án luyện tập thế nào

Nếu giờ phải tạo một dự án luyện tập, ít nhất thỏa 4 điều này:

1. Có thể bỏ
2. Không có dữ liệu nhạy cảm
3. Ít tệp, cấu trúc đơn giản
4. Thay đổi một nhìn là hiểu

Dự án luyện tập lần đầu không cần giống môi trường production. An toàn, đơn giản, làm sai cũng dễ thu lại là đủ.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Cơ sở kiểm chứng:** Đã đối chiếu chéo với các chương checklist an toàn người mới, kiểm tra kết quả và hoàn tác/khôi phục đã được kiểm chứng trong cẩm nang hiện tại; nội dung trang giới hạn ở phương pháp nhập môn ổn định «dùng thư mục luyện tập có thể bỏ để chạy thông quy trình trước».  
**Kiểm chứng gần nhất:** 2026-07-26
