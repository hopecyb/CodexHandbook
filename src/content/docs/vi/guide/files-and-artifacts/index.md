---
title: Tệp và artifact
description: Codex đọc/ghi các loại tệp thế nào, quản lý vật tạo ra và điểm nghiệm thu.
sidebar:
  order: 30
locale: vi
source_locale: zh-CN
source_revision: 3a5cc3b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Đầu ra cốt lõi của Codex thường là **thay đổi tệp trong kho** hoặc **artifact mới tạo** (tài liệu, ảnh, cấu hình). Chuyên đề này nói thực hành tốt nhất theo loại tệp, tránh “đã tạo nhưng không dùng được”.

Cùng là “tệp”, loại khác nhau cần cách giao và nghiệm thu khác nhau.

“Sửa mã”, “xử lý bảng”, “tạo ảnh chụp”, “xuất PPT” đều trông như tác vụ tệp, nhưng chỗ dễ sai nhất không giống nhau.

## Điều hướng chương

| Chủ đề | Trang |
|---|---|
| Mã và văn bản | [Tệp văn bản và mã](/vi/guide/files-and-artifacts/text-and-code-files/) |
| Ảnh chụp và đầu vào thiết kế | [Hình ảnh và ảnh chụp màn hình](/vi/guide/files-and-artifacts/images-and-screenshots/) |
| PDF và tài liệu dài | [PDF và tài liệu](/vi/guide/files-and-artifacts/pdf-and-documents/) |
| Dữ liệu bảng | [Bảng và bảng tính](/vi/guide/files-and-artifacts/tables-and-spreadsheets/) |
| Slide | [Bài trình bày](/vi/guide/files-and-artifacts/presentations/) |
| Đầu ra của Agent | [Nghiệm thu artifact tạo ra](/vi/guide/files-and-artifacts/generated-artifacts/) |

Phương pháp chung xem [Kiểm chứng artifact](/vi/guide/quality/verify-artifacts/).

## Chương này nói gì

Chương này chủ yếu nói ba việc:

- Bạn nên giao tác vụ rõ thế nào
- Nó dễ âm thầm sai ở chỗ nào
- Cuối cùng bạn nên nghiệm thu thế nào

Vậy nó giống bộ hướng dẫn thao tác tách theo loại tệp hơn là danh sách tính năng thuần.

## Nguyên tắc thống nhất

1. **Đường dẫn rõ**: trong Prompt viết rõ đường dẫn xuất và đặt tên
2. **Ước định dạng**: phần mở rộng, mã hóa (UTF-8), ký tự xuống dòng khớp dự án
3. **Ý thức dung lượng**: nhị phân lớn không vào Git, hoặc dùng LFS/CDN
4. **Nghiệm thu thủ công**: tạo ≠ hoàn thành; đối chiếu [Định nghĩa hoàn thành](/vi/guide/quality/definition-of-done/)
5. **Dữ liệu nhạy cảm**: xem [Ngữ cảnh nhạy cảm](/vi/guide/context/sensitive-context/)

## Hiểu lầm thường gặp

### 1. Tệp đã tạo ra không bằng tác vụ đã hoàn thành

Nhiều tác vụ kiểu tệp vấn đề không nằm ở “có tạo chưa”, mà ở:

- Định dạng đúng không
- Nội dung chính xác không
- Đường dẫn đúng không
- Downstream còn dùng tiếp được không

### 2. Cách giao các loại tệp gần giống nhau?

Cũng khác.  
Ví dụ:

- Tệp mã quan tâm phạm vi, logic và kiểm thử hơn
- Bảng quan tâm cột, kiểu và quy tắc tổng hợp hơn
- Ảnh quan tâm nội dung hình và kích thước hơn
- Tài liệu quan tâm cấu trúc, giọng và sự kiện hơn

### 3. Chỉ cần cuối cùng mở được là ổn?

Không thể nghĩ vậy.  
“Mở được” chỉ là bước nền tảng nhất, không nghĩa đã phù hợp commit, phát hành hoặc giao hàng.

## Thứ tự đọc đề xuất

Lần đầu dùng Codex xử lý tệp, có thể xem theo thứ tự:

1. Tìm loại tệp giống tác vụ hiện tại nhất
2. Xem loại đó dễ sai ở chỗ nào
3. Rồi xem cách nghiệm thu tương ứng

Như vậy không dễ bị cả chương thông tin đè ngay từ đầu.

## Quan hệ với công cụ

- Đọc/ghi tệp: công cụ tệp + terminal
- Xem ảnh: [Prompt kèm ảnh](/vi/prompts/prompting-with-images/)
- Xem trang: [Công cụ trình duyệt](/vi/guide/tools/browser/)
- Tạo ảnh: [Tạo ảnh](/vi/guide/tools/image-generation/)

Trong tác vụ kiểu tệp, rất thường gặp kết quả đã tạo ra nhưng định dạng, quy tắc hoặc nội dung đã âm thầm lệch.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với cấu trúc chương con files-and-artifacts hiện tại của kho, cùng các chương kiểm chứng artifact, định nghĩa hoàn thành, ngữ cảnh nhạy cảm và ảnh đã kiểm chứng trong sổ tay; trang này chỉ nói nguyên tắc ổn định chọn cách giao và nghiệm thu theo loại tệp.  
**Kiểm chứng gần nhất:** 2026-07-26
