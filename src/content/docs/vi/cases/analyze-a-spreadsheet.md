---
title: Phân tích bảng tính
description: Tải lên hoặc tham chiếu dữ liệu bảng để tổng hợp và rút insight.
locale: vi
source_locale: zh-CN
source_revision: fa6b8e1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Phân tích bảng tính

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Người sáng tạo / nghiệp vụ |
| Client | App |
| Thời gian ước tính | 30–60 phút |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Làm sạch, tổng hợp và đề xuất trực quan hóa cho CSV/Excel.

**Tiêu chí thành công:** Kết luận tái hiện được; số then chốt truy được về hàng/cột bảng gốc.

## 2. Prompt đề xuất

```text
Đầu vào: @data/sales-q1.csv
Mục tiêu: Tổng hợp doanh số theo vùng, so sánh kỳ trước, Top 3 sản phẩm; đánh dấu ngoại lệ.
Ràng buộc: Không sửa tệp gốc; xuất summary.md và mô tả chart tùy chọn.
Nghiệm thu: Mỗi số trong summary ghi cách tính hoặc tên cột được trích.
```

## 3. Kiểm chứng

- Lấy mẫu đối chiếu 2–3 số tổng hợp
- Xác nhận không ghi PII vào log hoặc gửi ra ngoài

## 4. Liên quan

- [Bảng và bảng tính](/vi/guide/files-and-artifacts/tables-and-spreadsheets/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Use cases Codex hiện tại trên OpenAI Developers vẫn gồm “Query tabular data”, “Clean and prepare messy data”; ví dụ trang này tập trung làm sạch, tổng hợp và phân tích ngoại lệ chỉ đọc trên CSV/Excel, yêu cầu số then chốt truy được về trường bảng gốc — khớp kịch bản chính thức hiện tại.  
**Kiểm chứng gần nhất:** 2026-07-26
