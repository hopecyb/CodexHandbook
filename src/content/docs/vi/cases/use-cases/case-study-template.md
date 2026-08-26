---
title: Mẫu case
description: Cấu trúc thống nhất để viết và rút kinh nghiệm case Codex — thuận tiện nhóm đóng gói và so sánh.
locale: vi
source_locale: zh-CN
source_revision: a430fba
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Sao chép mẫu này để tạo trang case mới hoặc tài liệu rút kinh nghiệm nội bộ.

Trước khi sao chép, hãy xóa các đoạn không cần theo đối tượng và thành phẩm thực tế.

---

## Siêu dữ liệu

| Trường | Điền |
|---|---|
| Tiêu đề case | |
| Đối tượng | Người mới / nhà phát triển / người sáng tạo / nhóm |
| Client dùng | App / CLI / IDE / Cloud |
| Thời gian ước tính | |
| Ngày kiểm chứng | YYYY-MM-DD |

## 1. Mục tiêu và ngữ cảnh

- **Mục tiêu nghiệp vụ:** Một câu
- **Tiêu chí thành công:** Quan sát được, kiểm chứng được
- **Ngoài phạm vi:** Mục loại trừ rõ ràng

## 2. Chuẩn bị

- Tài khoản / quyền / trạng thái kho
- Tệp ngữ cảnh cần có (`AGENTS.md`, bản thiết kế…)
- Rủi ro: dữ liệu, production, bí mật

## 3. Quy trình (EPXV)

### Khám phá

- Prompt đầu vào (tóm tắt)
- Phát hiện then chốt

### Lập kế hoạch

- Danh sách bước
- Điểm xác nhận của người

### Thực thi

- Phạm vi thay đổi thực tế
- Lệch kế hoạch và lý do

### Kiểm chứng

- Test tự động
- Kiểm tra thủ công
- Bằng chứng (ảnh chụp, log, liên kết)

## 4. Thất bại và phục hồi

- Gặp vấn đề gì
- Cách hoàn tác hoặc sửa
- Nếu làm lại sẽ đổi prompt/cấu hình thế nào

## 5. Đóng gói lại

- Có ghi vào `AGENTS.md` / Skill / Automation không
- 3 gợi ý cho nhóm

## 6. Nguồn tham chiếu
- Liên kết tài liệu chính thức
- Case này có dựa trên hướng dẫn ngoài không (chỉ tham khảo loại tác vụ)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo quy trình EPXV đã kiểm chứng, phục hồi thất bại, hướng dẫn dự án và cấu trúc thư viện case của sổ tay; trang này chỉ cung cấp mẫu cấu trúc thống nhất để viết và rút kinh nghiệm case, không tuyên bố hành vi sản phẩm cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
