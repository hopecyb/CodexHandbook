---
title: Hình ảnh và ảnh chụp màn hình
description: Cung cấp ảnh chụp, bản thiết kế cho Codex và quản lý tệp ảnh trong tác vụ.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Hình ảnh giúp Agent **nhìn thấy** vấn đề giao diện, ý đồ thiết kế hoặc bản phác bảng trắng. Trang này gồm đầu vào (ảnh bạn cung cấp) và quản lý tệp ảnh trong kho; tạo ảnh mới xem [Tạo ảnh](/guide/tools/image-generation/).

Khi dùng ảnh chụp để giao tác vụ, tốt nhất để nó biết bạn muốn nó nhìn chỗ nào, và vì sao chỗ đó có vấn đề.

## Nội dung trang này

- Cách đính ảnh chụp hiệu quả nhất
- Dùng bản thiết kế / xuất Figma thế nào
- Vấn đề dung lượng ảnh trong kho và ngữ cảnh

## Tình huống ảnh đầu vào

| Tình huống | Cách làm |
|---|---|
| Bug UI | Ảnh chụp + ghi chú chữ vùng bất thường |
| Khôi phục thiết kế | Xuất PNG + ghi rõ breakpoint và thư viện component |
| Bảng trắng kiến trúc | Ảnh rõ hoặc ảnh xuất + chú giải |
| Hộp thoại lỗi | Gồm đủ văn bản lỗi, tránh chỉ cắt một góc |

Sâu hơn: [Prompt kèm ảnh](/prompts/prompting-with-images/)

## Ảnh thật sự bổ sung gì

Chỗ ảnh có giá trị nhất là nó trực tiếp hiện thông tin khó mô tả chỉ bằng chữ, ví dụ:

- Bố cục này lệch thế nào
- Nút này bị ép tới đâu
- Hộp thoại này thật sự viết gì

Nhưng bản thân ảnh không tự nói với Codex:

- Bạn quan tâm nhất khối nào
- Bạn kỳ vọng nó sửa thế nào
- Đây là “tình trạng hiện tại” hay “hiệu quả mục tiêu”

Vậy ảnh thường còn cần một câu giải thích trực tiếp.

## Yêu cầu chất lượng

- **Độ phân giải**: chữ đọc được, tránh thumbnail mờ
- **Cắt**: bỏ desktop không liên quan, thông tin nhạy cảm trên thanh thông báo
- **Chú thích**: mũi tên/khoanh được, nhưng nên nhắc lại điểm then chốt bằng chữ
- **Nhiều ảnh**: tải theo cặp «hiện tại / kỳ vọng»

## Hiểu lầm thường gặp

### 1. Gửi ảnh chụp rồi cũng không nghĩa nó tự hiểu vấn đề

Ảnh chụp cung cấp bằng chứng hình, nhưng bạn vẫn nên bổ sung:

- Vấn đề ở đâu
- Bạn muốn sửa thành gì
- Ảnh nào là hiện tại, ảnh nào là mục tiêu

### 2. Ảnh càng lớn càng rõ chưa chắc càng tốt

Ảnh gốc quá lớn mang hai vấn đề:

- Thông tin không liên quan quá nhiều
- Dung lượng kho hoặc ngữ cảnh nặng hơn

### 3. Chỉ gửi bản thiết kế vẫn chưa đủ thông tin

Nếu là “làm theo hình”, tốt nhất bổ sung thêm:

- Yêu cầu breakpoint
- Ràng buộc component
- Chỗ nào cho phép tự do, chỗ nào không

## Ảnh trong kho

| Thực hành | Lý do |
|---|---|
| Thư mục thống nhất `assets/` hoặc `docs/images/` | Dễ duy trì |
| WebP/nén | Kiểm soát dung lượng clone |
| Tên tệp có nghĩa | `login-form-mobile.png` chứ không `image1.png` |
| Văn bản alt (trong tài liệu) | Khả năng tiếp cận |

## Cách viết áp dụng trực tiếp

Có thể viết:

```text
Ảnh thứ nhất là trang hiện tại, ảnh thứ hai là hiệu quả kỳ vọng.
Hãy tập trung xem vùng tiêu đề màn đầu và khoảng cách nút.
Đừng đoán logic nghiệp vụ từ ảnh chụp; chỉ xử lý hình ảnh và bố cục.
```

## Riêng tư và an toàn

- Ảnh chụp có thể chứa dữ liệu khách hàng, URL nội bộ, token — che trước
- Đừng gửi giao diện cấu hình chứa khóa cho tác vụ không đáng tin
- [Ngữ cảnh nhạy cảm](/guide/context/sensitive-context/)

## Nguồn tham khảo

- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files

## Nghiệm thu

Với tác vụ kiểu «làm theo hình»:

1. So sánh cạnh nhau hiện thực với ảnh tham chiếu (hoặc mở trang bằng [Công cụ trình duyệt](/guide/tools/browser/))
2. Kiểm responsive và chế độ tối (nếu yêu cầu)
3. [Kiểm chứng artifact](/guide/quality/verify-artifacts/)

## Lỗi thường gặp

- Chỉ đưa bản thiết kế không có mô tả tương tác
- Commit thẳng ảnh gốc 4K
- Giả định mô hình đọc được liên kết Figma mà không xuất

Ảnh chụp tốt không chỉ là “có ảnh”. Ảnh rõ, trọng tâm rõ, kỳ vọng cũng rõ thì tác vụ mới dễ làm đúng.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / Cloud  
**Căn cứ kiểm chứng:** Đã rà lại mô tả về tải ảnh chụp, chú thích trọng tâm, dung lượng tệp và lưu ý riêng tư theo tài liệu đầu vào ảnh và tải tệp chính thức của OpenAI; phần thân không giữ bước giao diện cụ thể cần đối chiếu từng phiên bản.  
**Kiểm chứng gần nhất:** 2026-07-26
