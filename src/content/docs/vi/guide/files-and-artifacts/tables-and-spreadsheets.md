---
title: Bảng và bảng tính
description: Đọc, làm sạch, phân tích và xuất dữ liệu dạng CSV, Excel và bảng — tránh phá cấu trúc và mã hóa.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Tác vụ bảng là điển hình dễ sai thầm lặng: dấu phân cách, mã hóa, tiêu đề cột, công thức và định dạng ngày — sai một cái là downstream sập hết.

## Nội dung trang này

- Làm sao để Codex đọc/ghi CSV / Excel an toàn
- Cấu trúc Prompt cho tác vụ phân tích dữ liệu
- Nghiệm thu số và số dòng thế nào

## Chọn định dạng

| Định dạng | Ưu điểm | Chú ý |
|---|---|---|
| CSV | Văn bản diff được, phổ biến | Mã hóa (UTF-8 BOM), dấu phân cách, thoát dấu ngoặc |
| TSV | Ít xung đột dấu phẩy | Giống CSV |
| XLSX | Nhiều sheet, công thức | Nhị phân, khó diff; dùng thư viện đọc/ghi |
| Google Sheets | Cộng tác | Thường qua MCP hoặc xuất CSV |

Dữ liệu nhỏ, cần vào Git: **ưu tiên CSV/TSV**. Báo cáo phức tạp: **nguồn CSV + script sinh XLSX**.

Xem ba điểm này trước:

- Cần diff được, truy vết được, tái hiện được: ưu tiên CSV / TSV
- Cần giao cho người quen Excel: rồi mới xuất XLSX
- Đừng gộp “định dạng xem cuối” với “định dạng nguồn phù hợp xử lý tự động nhất” thành một việc

## Đọc và phân tích

Cấu trúc Prompt khuyến nghị:

```text
Tệp: data/sales_2025.csv
Mã hóa: UTF-8
Tác vụ: Tổng hợp revenue theo region, xuất summary.csv
Ràng buộc: Không sửa tệp gốc; giá trị trống xử lý như 0; giữ hai chữ số thập phân
Nghiệm thu: In 5 dòng đầu + tổng số dòng
```

Ngữ cảnh: [Ngữ cảnh tệp và thư mục](/guide/context/file-and-folder-context/)

## Vì sao tác vụ bảng đặc biệt dễ sai thầm

Nhưng chỗ thật sự dễ có vấn đề thường là:

- Ngày bị coi là văn bản hay ngày
- Giá trị trống tính 0, bỏ qua, hay báo lỗi
- Cột nào mới là định danh duy nhất
- Số thập phân và tiền có làm tròn không
- Tệp gốc có được sửa không

Nếu những điều này không nói rõ, Codex cũng có thể “trông như đã xong” nhưng kết quả không đáng tin.

## Ghi và làm sạch

- Nói rõ **tên cột, thứ tự, kiểu** (ngày dùng ISO 8601)
- Bảng lớn xử lý theo lô, tránh tải một lần hết bộ nhớ
- Khóa khử trùng, gộp viết vào mô tả tác vụ; đừng để Agent đoán «khóa chính»

## Hiểu lầm thường gặp

### 1. Chỉ cần cuối cùng mở được tệp là xử lý đúng

Sai.

Trong tác vụ kiểu bảng, “mở được” và “dữ liệu chưa bị làm hỏng” là hai việc khác nhau.

### 2. Trong Excel nhìn ổn chưa chắc ổn

Một số lỗi chỉ lộ khi hệ thống sau tiêu thụ, ví dụ:

- Mã hóa sai
- Thứ tự cột đổi
- Kiểu số đổi
- Công thức bị ghi cứng thành kết quả

### 3. Để Agent tự phán đoán giá trị trống, ngày, khóa chính là được

Thường không khuyến nghị.

Các quy tắc loại này càng rõ, kết quả càng ổn.

## Khi giao tác vụ bảng, nói rõ những điều này

Cố nói yêu cầu thành 5 việc:

1. Tệp đầu vào là gì
2. Tệp đầu ra tên gì
3. Cột nào giữ, tổng hợp hoặc làm sạch
4. Giá trị trống, ngày, trùng xử lý thế nào
5. Kiểm chứng kết quả thế nào

Ổn định hơn nhiều so với chỉ nói “giúp tôi chỉnh Excel này”.

Nếu dùng Python: `pandas` đọc/ghi; nếu dùng Node: `csv-parse` / `xlsx` v.v. — ước định thư viện chuẩn dự án trong `AGENTS.md`.

## Với kiểm chứng

- Số dòng, tổng có đối chiếu chéo với dữ liệu nguồn không
- Mở Excel xem ngày có bị coi là số không
- [Kiểm chứng artifact](/guide/quality/verify-artifacts/): so sánh rút mẫu

Trong tác vụ bảng, quan trọng hơn là nói rõ cột, kiểu, quy tắc và nghiệm thu.

## Lỗi thường gặp

- Excel mở CSV tiếng Trung/Việt loạn mã (thiếu BOM hoặc sai mã hóa)
- Sai số tổng hợp dấu phẩy động chưa nói làm tròn
- Sửa công thức trong Excel mà không lưu thành script tái hiện được

## Danh sách nghiệm thu

- [ ] Tên cột và kiểu khớp ước định phía tiêu thụ downstream
- [ ] Tổng/rút mẫu khớp kiểm thủ công hoặc SQL
- [ ] Tệp gốc không bị ghi đè ngoài ý muốn (hoặc thay đổi thấy được trong diff)

## Nguồn tham khảo

- Tutorial xử lý dữ liệu stormzhang
- Mẫu tác vụ bảng codex.bozhouai.com
- [Định nghĩa ràng buộc](/prompts/constraints-and-boundaries/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với các chương ngữ cảnh tệp và thư mục, kiểm chứng artifact, ranh giới ràng buộc đã kiểm chứng trong sổ tay; trang này chỉ xác nhận nguyên tắc xử lý bảng ổn định “cột, kiểu, giá trị trống, ngày, cách nghiệm thu đều nên nói tường minh”, không coi một thư viện hay nền tảng là hiện thực duy nhất.  
**Kiểm chứng gần nhất:** 2026-07-26
