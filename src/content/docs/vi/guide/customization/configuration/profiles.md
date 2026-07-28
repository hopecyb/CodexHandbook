---
title: Profile cấu hình
description: Dùng bộ cấu hình có tên để chuyển tổ hợp mô hình, Sandbox và phê duyệt — phát triển, rà soát, CI mỗi bộ một.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Profile** để bạn lưu một bộ cấu hình có tên (mô hình + Sandbox + phê duyệt v.v.), chuyển một nút theo tình huống khác nhau, không cần mỗi lần sửa cài đặt thủ công.

## Trang này sẽ nói gì

- Khác biệt giữa Profile và «sửa cấu hình mặc định»
- Cách chia Profile thường gặp
- Nhóm chia sẻ định nghĩa Profile thế nào

## Profile đang quản gì

Nếu “cấu hình” là thói làm việc mặc định, thì **Profile** là “một bộ preset theo tình huống khác nhau”.

Có thể coi:

- Phát triển thường ngày một bộ
- Xem kho không đáng tin một bộ
- Rà soát chỉ đọc một bộ
- CI tự chạy tác vụ lại một bộ

Như vậy không cần mỗi lần tạm sửa đống công tắc.

## Ví dụ Profile điển hình

| Tên Profile | Ý định | Đặc điểm (khái niệm) |
|---|---|---|
| `daily` | Phát triển hàng ngày | Mô hình cân bằng, Sandbox chuẩn |
| `strict` | Kho không đáng tin | Phê duyệt mạnh, hạn chế mạng |
| `review-only` | Rà soát chỉ đọc | Cấm ghi đĩa hoặc chỉ cho phép đọc |
| `ci` | Pipeline | Mô hình cố định, không tương tác, không push |

Trường cụ thể xem [Tham chiếu mục cấu hình](/guide/reference/configuration-reference/).

## Cách dùng (khái niệm)

1. Trong tài liệu chính thức xác nhận cú pháp Profile (có thể liên quan `[profiles.name]` trong `config.toml` hoặc cấu trúc tương đương)
2. Tạo Profile và đặt tên
3. Khi khởi động chỉ định: `codex --profile strict` (lệnh lấy `--help` làm chuẩn)
4. Trong README ghi «người đóng góp khuyến nghị `daily`, CI dùng `ci`»

Chi tiết CLI: [Cấu hình CLI](/guide/cli/configuration/)

## Hiểu lầm thường gặp

### Profile không phải càng nhiều càng linh hoạt càng tốt

Nhiều người lần đầu muốn tạo Profile cho mỗi tình huống nhỏ, cuối cùng thành hơn mười tên, bản thân cũng không nhớ khác biệt.

Thường giữ trước 2 đến 4 cái dùng nhiều nhất là đủ:

- Phát triển hàng ngày
- Chế độ nghiêm
- Rà soát chỉ đọc
- CI

Phân rõ ranh giới rủi ro là được.

### Profile không phải công tắc thay tư duy

Chuyển sang một Profile không nghĩa sau này mọi tác vụ tuyệt đối an toàn hoặc tuyệt đối phù hợp.

Nó chỉ giúp bạn chuyển “trạng thái bắt đầu thường gặp”; tác vụ cụ thể vẫn phải kết hợp kho hiện tại và phán đoán rủi ro.

## Phân công với AGENTS.md

| | Profile | AGENTS.md |
|---|---|---|
| Quản gì | Công tắc năng lực, mô hình, Sandbox | Dự án này viết thế nào |
| Commit Git | Tùy chọn (đoạn profile cấp dự án) | Có |
| Cá nhân/nhóm | Profile cá nhân có thể máy cục bộ; profile nhóm nên PR | Nhóm |

## Lỗi thường gặp

- Mỗi kho tạo 10 Profile không ai duy trì
- Profile `ci` vẫn cho phép `git push`
- Tên Profile không khớp tài liệu khiến người mới dùng sai

## Gợi ý khởi đầu

Khi mới dùng Profile, có thể bắt đầu vậy:

1. Giữ một `daily` làm bộ mặc định trước
2. Rồi bổ sung một `strict`, chuyên đối phó kho lạ hoặc rủi ro cao
3. Nếu nhóm có tự động hóa, thêm riêng một `ci`

Như vậy đã phủ hầu hết trường hợp thường gặp.

Giá trị của Profile nằm ở việc giúp bạn trong các tình huống rủi ro khác nhau nhanh chuyển sang một tổ hợp mặc định đã nghĩ rõ.

## Nguồn tham khảo
- Tài liệu profiles OpenAI Codex
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI / App  
**Ghi chú rà lại:** Trang này viết `Profile`, `codex --profile` và cấu trúc profile chia sẻ quá cụ thể, nhưng tài liệu chính thức kiểm được hiện tại chưa đủ chứng minh các cách dùng này phổ biến ở phiên bản hiện hành; trước khi bổ sung căn cứ tài liệu chính thức, không nên đánh dấu `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
