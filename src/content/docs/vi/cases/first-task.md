---
title: Tác vụ đầu tiên
description: Dùng prompt rõ ràng để hoàn thành một thay đổi nhỏ và học cách kiểm tra kết quả.
locale: vi
source_locale: zh-CN
source_revision: a9bcbce
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Tác vụ đầu tiên

Ví dụ sau mặc định dùng **App máy tính**; CLI/IDE cũng có thể dùng cùng một đoạn prompt.

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Người mới bắt đầu |
| Client | App máy tính (khuyến nghị) |
| Thời gian ước tính | 15–20 phút |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Hoàn thành một lần chỉnh sửa tệp an toàn trong dự án luyện tập.

**Tiêu chí thành công:** Chỉ sửa tệp được chỉ định, kết quả khớp mô tả nghiệm thu, và bạn đọc được diff.

## 2. Chuẩn bị

- Đã cài client và đăng nhập
- Đã tạo dự án luyện tập (có `hello.md` hoặc tệp tương tự)

## 3. Prompt đề xuất

```text
Mục tiêu: Ở cuối hello.md, thêm một mục «Luyện tập hôm nay» với danh sách ba điểm chính.
Ràng buộc: Chỉ sửa hello.md; không xóa nội dung hiện có; không chạy yêu cầu mạng.
Nghiệm thu: Cuối tệp xuất hiện tiêu đề đó và đúng ba mục danh sách.
Nếu thiếu thông tin, hãy hỏi tôi trước; đừng đoán.
```

## 4. Thực thi và kiểm tra

1. Trước hết yêu cầu nó đưa kế hoạch ngắn (hoặc bạn chủ động yêu cầu kế hoạch)
2. Khi phê duyệt ghi tệp, xác nhận đường dẫn đúng
3. Sau khi xong, đối chiếu từng tiêu chí nghiệm thu với diff

## 5. Bước tiếp theo

- [Cơ bản về prompt](/vi/prompts/basics/)
- [Kiểm chứng](/vi/guide/verification/)
- [Bắt đầu từ đây](/vi/guide/start-here/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Trang này là bài luyện tập nội bộ rủi ro thấp của sổ tay: giới hạn chỉ sửa một tệp, cấm mạng, yêu cầu đọc được diff và kiểm tra từng tiêu chí nghiệm thu; các chương tiền đề liên quan (cài đặt, dự án luyện tập, kiểm chứng) đã đối chiếu chéo; nội dung không phụ thuộc chi tiết phiên bản sản phẩm cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
