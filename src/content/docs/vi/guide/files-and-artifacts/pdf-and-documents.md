---
title: PDF và tài liệu
description: Phạm vi, công cụ và điểm nghiệm thu khi để Codex đọc, tóm tắt hoặc tạo tài liệu dạng PDF.
locale: vi
source_locale: zh-CN
source_revision: a086570
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

PDF thường dùng cho quy chuẩn, bài báo, bản quét và báo cáo xuất. Khác văn bản thuần, PDF **cấu trúc phức tạp, dung lượng lớn, khó diff**, cần ước định cách làm tác vụ riêng.

Khi giao PDF cho Codex, vấn đề phổ biến nhất là hiểu cấu trúc không đủ, hoặc phạm vi bạn đưa quá lớn.

## Nội dung trang này

- Làm sao để Agent «đọc» đúng nội dung PDF
- Ước định dạng và đường dẫn khi tạo hoặc sửa PDF
- Khi nghiệm thu tránh «trông như có tệp nhưng mở không được»

## Vì sao PDF đặc biệt dễ có vấn đề

PDF phiền hơn tệp văn bản vì có thể đồng thời chứa:

- Ảnh quét
- Bố cục nhiều cột
- Đầu trang chân trang
- Bảng
- Ảnh và chữ lẫn nhau

Vậy càng nói rõ “xem đoạn nào, cần kết quả gì”, hiệu quả thường càng ổn.

## Đọc PDF

### Cách làm khuyến nghị

1. **Chỉ rõ đường dẫn tệp**: `docs/spec.pdf` hoặc tham chiếu @ (tùy client hỗ trợ)
2. **Nói cần gì**: tóm tắt, đối chiếu một chương, trích dữ liệu bảng
3. **Số trang hoặc chương**: tài liệu dài giới hạn phạm vi, tiết kiệm ngữ cảnh
4. **Nội dung nhạy cảm**: hợp đồng, quét CCCD v.v. đi theo quy trình [Ngữ cảnh nhạy cảm](/vi/guide/context/sensitive-context/)

### Giới hạn

- PDF bản quét có thể cần OCR; kết quả sai cần rút mẫu thủ công
- Bố cục phức tạp, nhiều cột, chú thích dễ mất cấu trúc
- PDF rất lớn đừng nhét cả tệp vào một tác vụ; xử lý từng đoạn, hoặc chuyển trước thành dàn ý Markdown

## Hiểu lầm thường gặp

### 1. Quăng cả PDF vào cũng chưa chắc rút trọng tâm ổn định được

Nếu PDF dài, cấu trúc phức tạp, còn lẫn trang quét, cách ổn hơn vẫn là:

- Chỉ định phạm vi
- Chỉ định tác vụ
- Xử lý từng đoạn

### 2. PDF bản quét khác rất nhiều so với PDF văn bản thường

Bản quét thường phải qua OCR trước; OCR một khi sai, tóm tắt, trích xuất và phán đoán sau cũng có thể lệch theo.

### 3. Tạo ra một tệp PDF không bằng đã hoàn thành

Bạn còn phải xác nhận:

- Có mở được không
- Chữ có loạn không
- Số trang, mục lục, bảng có đúng không
- Font chữ Trung/Việt có thật sự được nhúng không

## Tạo hoặc cập nhật PDF

| Cách | Phù hợp |
|---|---|
| Biên dịch từ Markdown/LaTeX | Tài liệu kỹ thuật, báo cáo (tái hiện được) |
| In từ HTML | Bố cục đơn giản |
| Sinh bằng thư viện (như reportlab) | Hóa đơn, nhãn theo chương trình |

Trong Prompt viết rõ:

- Đường dẫn xuất và tên tệp
- Kích thước trang, ngôn ngữ, yêu cầu font (PDF tiếng Trung/Việt đặc biệt chú ý nhúng font)
- Có commit Git không (nhị phân lớn thường dùng artifact hoặc release)

## Cách viết áp dụng trực tiếp

Có thể yêu cầu:

```text
Chỉ đọc trang 12-18 của `docs/spec.pdf`, trích tiêu chuẩn nghiệm thu trong đó.
Đừng tóm tắt cả tài liệu.
Nếu OCR hoặc nhận dạng bố cục chưa chắc, hãy đánh dấu rõ.
```

## Với chiến lược kho

- PDF nhị phân lớn cân nhắc **Git LFS** hoặc không vào kho
- Khi diff không đọc được, nghiệm thu bằng **mở tệp** + đối chiếu [Kiểm chứng artifact](/vi/guide/quality/verify-artifacts/)
- Danh sách vật tạo ra xem [Nghiệm thu artifact tạo ra](/vi/guide/files-and-artifacts/generated-artifacts/)

## Lỗi thường gặp

- Yêu cầu «sửa một chữ trong PDF» mà không cung cấp nguồn chỉnh sửa được (`.md` / `.tex`)
- Đặt PDF mật vào kho công khai rồi để Cloud xử lý
- Chưa mở nghiệm thu, chỉ xem «tệp tồn tại»

## Danh sách nghiệm thu

- [ ] PDF mở được trong trình đọc/môi trường in mục tiêu
- [ ] Số trang, mục lục, bảng then chốt khớp kỳ vọng
- [ ] Dung lượng kho và chính sách LFS khớp quy chuẩn nhóm

Xử lý PDF thì phạm vi càng rõ càng ổn. Sau khi tạo PDF, đừng chỉ xem tệp có hay không; còn phải xác nhận mở bình thường và nội dung thật sự đúng.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với các chương ngữ cảnh tệp và thư mục, kiểm chứng artifact, ngữ cảnh nhạy cảm và xử lý ảnh/tệp đã kiểm chứng trong sổ tay; trang này chỉ xác nhận nguyên tắc xử lý ổn định “PDF nên giới hạn phạm vi, cảnh giác sai OCR/bố cục, sau khi tạo phải mở thật để nghiệm thu”.  
**Kiểm chứng gần nhất:** 2026-07-26
