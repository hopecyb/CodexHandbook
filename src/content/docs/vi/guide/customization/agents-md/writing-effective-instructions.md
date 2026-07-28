---
title: Viết chỉ thị dự án tốt
description: Danh sách viết AGENTS.md — ngắn, cứng, thực thi được, kiểm chứng được.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Chỉ thị dự án hiệu quả gần hơn với **danh sách kiểm tra**. Mục tiêu là để Codex lần thử đầu đã ít mắc lỗi có thể tiên đoán.

Lần đầu viết chỉ thị dự án, vấn đề thường gặp là ý tưởng viết nhiều, ràng buộc then chốt thật sự lại chưa đủ rõ.

## Nội dung

- Chỉ thị dự án nên trông thế nào
- “Ngắn, cứng, thực thi được” nghĩa là gì
- Cách viết nào dễ nhất để Codex và người đều không hiểu

## Cấu trúc khuyến nghị

```md
# Chỉ thị dự án

## Bắt đầu nhanh (3–5 dòng)
Cài đặt, máy chủ phát triển, lệnh kiểm thử dùng nhiều nhất

## Phải tuân
Đánh số liệt kê quy tắc không được vi phạm

## Mã và thư mục
Đặt tên, vị trí đặt, ước định dependency

## Định nghĩa hoàn thành
Thế nào là «có thể commit»

## Mục cấm
Viết rõ đừng làm gì
```

## Nguyên tắc viết

### 1. Đặt ràng buộc cứng lên trước

Đặt «phải», «cấm» ở phần đầu tệp. Khi ngữ cảnh hữu hạn, mô hình trọng đầu cao hơn — cùng logic với [Ưu tiên ngữ cảnh](/guide/context/context-priority/).

### 2. Lệnh sao chép được

Viết lệnh **thật sự chạy được**, đừng viết «chạy kiểm thử một cái»:

```md
# Tốt
pnpm test --filter @app/web

# Kém
Đảm bảo kiểm thử qua
```

### 3. Tiêu chuẩn hoàn thành kiểm chứng được

```md
## Định nghĩa hoàn thành
- `pnpm lint` và `pnpm test` không thất bại
- API mới có kiểm thử đơn vị tương ứng
- Thay đổi người dùng thấy kèm bước kiểm thủ công (trình duyệt + mobile)
```

### 4. Giải thích «vì sao» cố gắng nén trong một câu

```md
- Đừng sửa `generated/`: do sinh mã, sửa tay sẽ bị ghi đè lần build sau
```

Nền quá dài nên liên kết tài liệu chính thức trong `docs/`.

## “Chỉ thị tốt” nghĩa là gì

Chỉ thị tốt để người và Codex nhanh nắm:

- Làm gì trước
- Không được làm gì
- Đạt mức nào mới tính hoàn thành

Nếu đọc xong vẫn không biết chạy lệnh gì trước, chỗ nào không được đụng, thế nào mới tính xong — nghĩa là chưa đủ dùng.

## Ví dụ đoạn playbook nhóm

```md
## PR và Git
- Đặt tên nhánh: tiền tố `feat/`, `fix/`, `docs/`
- Một PR chỉ làm một việc; tái cấu trúc phạm vi lớn mở PR riêng
- Trước merge phải có người rà diff, dù Codex đã chạy kiểm thử

## Cộng tác với Codex
- Tác vụ lớn yêu cầu trước «đưa kế hoạch, chờ tôi xác nhận rồi mới sửa mã»
- Liên quan migration DB thì xuất SQL migration trước để người rà
```

## Lỗi thường gặp

| Lỗi | Hậu quả |
|---|---|
| Chất bách khoa khung | Lệnh kiểm thử then chốt bị bỏ qua |
| Quy tắc mâu thuẫn nhau | Mô hình chọn ngẫu nhiên một cái thực thi |
| Chỉ có lời rỗng kiểu «phải thanh lịch» | Không nghiệm thu được |
| Chứa khóa hoặc URL nội bộ | Rủi ro lộ |

## Hiểu lầm thường gặp

### 1. Chỉ thị không phải càng chi tiết càng tốt

Quá phân tán, quá dài, quá giống bách khoa sẽ nhấn chìm quy tắc ưu tiên cao thật sự.

### 2. Chỉ viết “chú ý quy chuẩn” cũng tính chỉ thị?

Loại câu này thường chưa thực thi được.  
Cách viết phù hợp hơn là đưa thẳng:

- Lệnh thật
- Thư mục rõ
- Tiêu chuẩn hoàn thành cụ thể

### 3. Mô tả nền và quy tắc thực thi có trộn tùy ý?

Cũng không khuyến nghị.  
Cách phù hợp hơn:

- Quy tắc đặt trước
- Nền nén thành một câu
- Giải thích dài hơn đặt vào docs

## Khi viết lại nắm các điểm này trước

Nếu bạn có bản chỉ thị dự án viết rất phân tán, thu theo cách:

1. Đưa “phải/cấm” lên trước
2. Đổi lời rỗng thành lệnh cụ thể hoặc mục kiểm
3. Rút ngắn nền dài, đổi thành liên kết
4. Đưa một bộ định nghĩa hoàn thành tối thiểu

Chỉ thị dự án tốt không nằm ở viết nhiều, mà ở ràng buộc then chốt, lệnh then chốt và tiêu chuẩn hoàn thành đủ rõ để thực thi trực tiếp.

## Nhịp duy trì

- Mỗi lần lệnh CI đổi thì **cập nhật đồng bộ** `AGENTS.md`
- Rà quý: xóa quy tắc đã lỗi thời
- Mục đầu onboarding thành viên mới: đọc AGENTS.md và chạy thông «Bắt đầu nhanh»

## Đọc thêm

- [Mô tả dự án](/guide/customization/project-instructions/)
- [Khám phá—Kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/)
- [Định nghĩa hoàn thành](/prompts/define-done/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với loạt trang `AGENTS.md` hiện tại của kho, các chương ngữ cảnh và quy trình; trang này chỉ nói nguyên tắc viết ổn định và nhịp duy trì của chỉ thị dự án, không viết chi tiết hiện thực của một client thành cam kết dài hạn.  
**Kiểm chứng gần nhất:** 2026-07-26
