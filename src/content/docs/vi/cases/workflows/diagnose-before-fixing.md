---
title: Chẩn đoán trước khi sửa
description: Sự cố production và bug cứng đầu — dựng chuỗi bằng chứng trước, rồi mới động dao.
locale: vi
source_locale: zh-CN
source_revision: bd7e38b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Để Codex sửa bug ngay từ đầu, tỷ lệ làm lại thường cao. Quy trình chẩn đoán nhấn mạnh hơn: **triệu chứng → giả thuyết → bằng chứng → sửa tối thiểu**.

## Khi nào dùng

- Nguyên nhân test thất bại chưa rõ
- Cảnh báo production, người dùng báo «thỉnh thoảng»
- Lần sửa trước rồi vấn đề vẫn còn

## Các bước

### 1. Đóng băng thay đổi

```text
Chưa sửa code nghiệp vụ. Liệt kê: bước tái hiện, log liên quan, commit liên quan gần đây.
```

### 2. Thu hẹp phạm vi

- Chia đôi: commit nào đưa vào?
- Cô lập: kho hoặc test case tái hiện tối thiểu

### 3. Hình thành giả thuyết

Yêu cầu Codex xuất:

```text
Giả thuyết A: … Cách kiểm chứng: …
Giả thuyết B: … Cách kiểm chứng: …
```

### 4. Kiểm chứng giả thuyết (ưu tiên chỉ đọc)

Chạy test có mục tiêu, thêm log tạm (nhánh có thể bỏ), đọc giám sát.

### 5. Sửa tối thiểu

Một lần chỉ sửa một nguyên nhân gốc; tránh «tiện tay refactor».

### 6. Kiểm chứng hồi quy

Case thất bại gốc + kịch bản lân cận + test chống tái diễn.

## Mẫu prompt

```text
Theo «chẩn đoán trước khi sửa»:
1. Đọc @path/to/failing-test và triển khai, giải thích nguyên nhân thất bại (trích số dòng stack)
2. Đưa 2 giả thuyết và cách kiểm chứng chỉ đọc
3. Tôi xác nhận giả thuyết rồi mới viết bản sửa; sau sửa chỉ chạy test liên quan
```

## Quan hệ với EPXV

Chẩn đoán có thể xem là bản sâu hơn của giai đoạn **khám phá**; sang giai đoạn kế hoạch còn phải viết rõ “nếu giả thuyết sai thì hoàn tác thế nào”.

## Lỗi thường gặp

- Chưa tái hiện đã sửa code
- Một patch sửa đồng thời ba vấn đề, không review được
- Xóa log tạm mà không bổ sung test lâu dài

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương lập kế hoạch, chất lượng và phục hồi thất bại đã kiểm chứng của sổ tay; trang này chỉ xác nhận phương pháp chẩn đoán ổn định “dựng chuỗi bằng chứng trước, rồi sửa tối thiểu”, không phụ thuộc triển khai phía sản phẩm cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
