---
title: Nhập và xuất giọng nói
description: Tình huống, giới hạn và lưu ý riêng tư khi tương tác với Codex bằng giọng nói.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Một số client Codex hỗ trợ **giọng nói**: bạn nói tác vụ, hoặc nghe tóm tắt phản hồi. Nó phù hợp khi hai tay đang bận, muốn nói nhanh ý tưởng; **không** phù hợp đọc to khóa bí mật, cũng không thay bản ghi nghiệm thu bằng văn bản.

Giọng nói phù hợp hơn để nêu hướng, bổ sung nền hoặc theo dõi nhanh; khi liên quan chi tiết chính xác, tìm kiếm được, rà lại được, vẫn phải quay về chữ.

## Nội dung trang này

- Giọng nói phù hợp hình thái tác vụ nào
- Phối hợp với Prompt chữ thế nào
- Lưu ý riêng tư và độ chính xác

## Tình huống phù hợp

| Phù hợp | Không phù hợp |
|---|---|
| Nói mục tiêu tầng cao, brainstorm | Lệnh mã chính xác tới tên biến |
| Theo dõi ngắn trên mobile | Đọc API key, mật khẩu |
| Nhu cầu accessibility | Tài liệu quy chuẩn cần tìm kiếm được, diff được |

Sau khi nói miệng, nên để Codex **nhắc lại hiểu biết** hoặc tạo kế hoạch chữ, rồi bạn xác nhận. Xem [Yêu cầu kế hoạch](/prompts/ask-for-a-plan/).

## Giọng nói phù hợp làm gì

Ưu điểm chính của giọng nói:

- Nhanh
- Đỡ dùng tay
- Phù hợp đổ ý trong đầu ra trước

Vấn đề thường gặp:

- Dễ sót chữ
- Dễ nghe sai
- Không phù hợp mang đường dẫn chính xác, tên biến, tham số dòng lệnh

Cách thường gặp là nói hướng trước, rồi bổ sung thành chữ để xác nhận.

## Gợi ý dùng

1. Môi trường yên, câu ngắn, nói từng đoạn rõ «mục tiêu / ràng buộc / tiêu chuẩn hoàn thành»
2. Khi liên quan đường dẫn tệp, tên nhánh thì **đổi sang gõ** hoặc để Agent nhắc lại chính tả
3. Dự án nhạy cảm thì tắt xử lý giọng nói đám mây (nếu sản phẩm có tùy chọn cục bộ/tắt)
4. Quyết định quan trọng giữ bản ghi chữ trong issue hoặc PR

## Hiểu lầm thường gặp

### 1. Giọng nói có thay hoàn toàn gõ chữ?

Không.  
Những nội dung sau tốt nhất vẫn gõ:

- Đường dẫn tệp
- Tên nhánh
- Lệnh
- Tham số
- Tiêu chuẩn nghiệm thu

### 2. Nói càng nhiều càng chi tiết chưa chắc càng ít lỗi

Nói dài mà không có cấu trúc, ngược lại dễ làm phân tán trọng tâm.

### 3. Phản hồi giọng nói có thay được rà soát kết quả?

Không.  
Tóm tắt giọng nói giúp bạn nắm đại ý nhanh, nhưng khi xác nhận thay đổi, tệp, diff, kết quả kiểm thử, vẫn phải quay về chữ và bản thân artifact.

## Một thứ tự nói thường dùng

Khi muốn nêu tác vụ bằng giọng nói trước, có thể nói theo thứ tự:

1. Tôi muốn làm gì
2. Đừng làm gì
3. Xong thì kiểm thế nào

Nói xong, để nó gom thành bản chữ để bạn xác nhận.

## Riêng tư

- Giọng nói có thể qua chuyển viết đám mây; đừng đọc PII khách hàng, chứng chỉ
- Nơi công cộng chú ý người quanh nghe
- Chính sách nhóm có thể cấm chức năng dạng ghi âm xử lý tên mã mật

## Quan hệ với đa phương thức

- **Ảnh đầu vào**: bản thiết kế, ảnh chụp → [Prompt kèm ảnh](/prompts/prompting-with-images/)
- **Giọng nói đầu vào**: trang này
- **Đầu ra**: vẫn chủ yếu là mã, tệp, diff chữ; tóm tắt giọng nói không thay rà soát

## Lỗi thường gặp

- Nói dài không cấu trúc, Agent sót ràng buộc
- Dùng giọng nói chấp nhận thay đổi mã số lượng lớn mà không xem diff
- Trong giọng nói mô tả chi tiết sự cố production chưa khử nhạy cảm

Giọng nói phù hợp khởi động và theo dõi; không phù hợp thay lệnh chính xác, xử lý thông tin nhạy cảm và nghiệm thu cuối.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / Desktop Voice (tùy gói và cài đặt workspace)  
**Căn cứ kiểm chứng:** OpenAI Help Center hiện tại《ChatGPT Voice》và《ChatGPT Work and Codex》đều nói rõ: Voice có thể phối hợp Work / Codex trong App máy tính để khởi động tác vụ, theo dõi tiến độ và phối hợp công việc; năng lực và khả dụng chịu ảnh hưởng gói, cài đặt workspace và phiên bản. Nội dung trang tập trung vào tình huống phù hợp của giọng nói, lưu ý riêng tư và phương pháp “nói miệng rồi quay về chữ xác nhận”.  
**Kiểm chứng gần nhất:** 2026-07-26
