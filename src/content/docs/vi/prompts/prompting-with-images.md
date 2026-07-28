---
title: Prompt với hình ảnh
description: Khi đưa Codex ảnh chụp màn hình, bản thiết kế hoặc ảnh bảng trắng, hỏi thế nào để dễ nhận kết quả thực thi được.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nhiều tác vụ «xem hình rồi làm» thất bại không phải vì mô hình không thấy—mà vì chỉ đưa hình, **không nói muốn nó nhìn gì trong hình**.

Trọng tâm của Prompt hình ảnh là giúp Codex lập ba điểm:

1. Hình này là gì
2. Bạn muốn nó chú ý chỗ nào
3. Đầu ra cuối cùng phục vụ tác vụ gì

## Tình huống phù hợp Prompt hình ảnh

| Tình huống | Vai trò hình ảnh |
|---|---|
| Điều tra UI bug | Để Codex thấy vị trí và trạng thái bất thường |
| Khôi phục thiết kế | Cung cấp layout, phân cấp, khoảng cách, không khí tham chiếu |
| Giải thích ảnh chụp trong tài liệu | Để nó viết hướng dẫn hoặc tutorial dựa trên giao diện |
| Sắp xếp bảng trắng / sơ đồ | Chuyển hình viết tay thành mô tả có cấu trúc |
| So sánh hiện tại với kỳ vọng | Giúp nhận diện khác biệt thay vì đoán yêu cầu |

Nếu trọng tâm là «ngoại hình, vị trí, trạng thái thị giác», hình thường hiệu quả hơn đoạn chữ dài; nếu trọng tâm là «quy tắc nghiệp vụ», hình chủ yếu là bằng chứng hỗ trợ.

## Cấu trúc bốn đoạn của Prompt hình ảnh

Khuyến nghị giữ cấu trúc giống Prompt chữ:

### 1. Danh tính hình ảnh

Nói hình này là gì, đến từ đâu.

Ví dụ:

```text
Đây là ảnh chụp trang đăng nhập production hiện tại, từ Safari trên iPhone 14.
```

### 2. Vùng chú ý

Chỉ rõ bạn muốn nó nhìn đâu; đừng dừng ở «tự tìm vấn đề».

Ví dụ:

```text
Tập trung khoảng cách giữa nút dưới cùng và ô nhập, cùng thay đổi layout khi bàn phím bật lên.
```

### 3. Mục tiêu tác vụ

Nói bạn muốn nó làm gì: phân tích, tái hiện, sửa code, viết hướng dẫn, xuất bảng so sánh.

Ví dụ:

```text
Phân tích nguyên nhân có thể trước; chưa sửa code. Đưa 2–3 tệp frontend liên quan nhất.
```

### 4. Định dạng đầu ra

Nói bạn muốn kết quả gì, tránh nói chung chung.

Ví dụ:

```text
Đầu ra:
1. Hiện tượng bạn quan sát được trong hình
2. Nguyên nhân có thể
3. Tệp nên kiểm tra
4. Ảnh chụp bổ sung bạn còn cần từ tôi
```

## Ba mẫu thường dùng

### 1. Xem hình tìm vấn đề

```text
Tôi tải lên ảnh chụp trang hiện tại. Tập trung vùng khung đỏ.
Mô tả bất thường bạn quan sát trước, rồi liệt kê 2–3 nguyên nhân có thể.
Chưa sửa code.
```

### 2. Triển khai theo hình

```text
Tôi tải lên bản thiết kế mục tiêu.
Dựa trên hình, tóm tắt cấu trúc trang, component then chốt, điểm responsive và phong cách thị giác.
Nếu bắt đầu triển khai, ưu tiên giữ cấu trúc và phân cấp khớp; đừng tự thêm chức năng.
```

### 3. So sánh hiện tại vs kỳ vọng

```text
Tôi sẽ tải hai hình: hình 1 là hiệu ứng hiện tại, hình 2 là kỳ vọng.
So sánh khác biệt về layout, phân cấp chữ, khoảng cách và gợi ý tương tác; đưa mức ưu tiên sửa.
```

## Muốn nó nhìn chính xác hơn, cần bổ sung chữ gì

Hình thường thiếu ngữ cảnh chạy, nên các thông tin sau rất hữu ích:

- Thiết bị hoặc trình duyệt
- Trạng thái hiện tại có gồm hover / focus / lỗi không
- Vị trí cuộn trang
- Đây là «hiệu ứng hiện tại» hay «hiệu ứng mục tiêu»
- Có khôi phục theo design system sẵn có không

Ví dụ câu «Chrome desktop bình thường, chỉ iOS Safari lỗi» thường có giá trị hơn thêm một ảnh chụp.

## Nhiều hình nên đưa thế nào

### Làm «đầu vào theo cặp»

Cách dùng tốt:

- Hình hiện tại
- Hình kỳ vọng

Hoặc:

- Trạng thái bình thường
- Trạng thái bất thường

Đừng tải một loạt hình không chú thích và để Codex tự đoán thứ tự.

### Gắn vai trò cho mỗi hình

Ví dụ:

```text
Hình 1: Hiệu ứng hiện tại desktop
Hình 2: Hiệu ứng hiện tại mobile
Hình 3: Hiệu ứng mục tiêu theo bản thiết kế
```

Như vậy dễ hơn để nó nối quan hệ tương ứng.

## Lỗi dễ mắc nhất với Prompt hình ảnh

### Chỉ nói «làm theo cái này»

Codex sẽ cố suy ngược mọi yêu cầu từ hình, và thường coi cả chi tiết bạn không quan tâm thành bắt buộc.

### Chỉ đưa cục bộ, không có ngữ cảnh

Ảnh chụp cục bộ thấy được điểm vấn đề, nhưng chưa chắc biết đây là trạng thái trang nào, có chịu ảnh hưởng responsive không, có phải cảnh lớp phủ không.

### Coi bản thiết kế như đặc tả đầy đủ

Bản thiết kế diễn đạt ngoại hình, nhưng chưa chắc diễn đạt nguồn dữ liệu, điều kiện biên, logic tương tác. Quy tắc nghiệp vụ vẫn cần chữ bổ sung.

### Lầm tưởng hình thay được nghiệm thu

Dù triển khai theo hình, cuối cùng vẫn phải xem trang thật, diff, hành vi breakpoint và khả dụng. Hình là đầu vào, không phải kết quả nghiệm thu.

## Kết hợp với trang khác thế nào

- Tải lên và quản lý tệp hình: [Hình ảnh và ảnh chụp](/guide/files-and-artifacts/images-and-screenshots/)
- Cần tạo hình mới: [Tạo hình ảnh](/guide/tools/image-generation/)
- Cần nêu tác vụ đủ: [Cấu trúc tác vụ](/prompts/task-anatomy/)
- Cần phân tích trước khi làm: [Xin kế hoạch trước](/prompts/ask-for-a-plan/)

## Một kinh nghiệm thực dụng

Nếu muốn Codex «xem hình như review thiết kế», hãy để nó **quan sát** trước, rồi **phán đoán**, cuối cùng mới **đề xuất**.

Ví dụ:

```text
Chỉ mô tả hiện tượng quan sát được trong hình trước; chưa kết luận.
Sau đó suy đoán nguyên nhân khả dĩ nhất.
Cuối cùng đưa hướng sửa đề xuất.
```

Thường rõ hơn một câu «giúp tôi sửa», và dễ tiếp tục hơn về sau.

## Nguồn tham khảo

- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / Cloud  
**Cơ sở kiểm chứng:** Đã rà lại cấu trúc, tình huống và lưu ý theo tài liệu chính thức OpenAI về đầu vào hình ảnh và tải tệp; nội dung không còn phụ thuộc nguồn tình huống ngoài chính thức, và không giữ chi tiết giao diện cần đối chiếu từng phiên bản.  
**Kiểm chứng gần nhất:** 2026-07-26
