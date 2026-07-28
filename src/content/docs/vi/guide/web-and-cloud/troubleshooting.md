---
title: Xử lý sự cố Cloud
description: "Chỉ mục triệu chứng cho kết nối GitHub, môi trường, Secrets, truy cập đi ra và vấn đề PR."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Khi Cloud fail, chạy lại thường không sửa gốc rễ.

Vấn đề Cloud thường nằm ở **quyền, khác môi trường, chứng chỉ hoặc mạng**. Trang này dẫn triệu chứng tới chủ đề đúng để tránh thử lại mù quáng trong chat.

## Nội dung phủ

- Việc cần kiểm trước khi Tác vụ fail
- Xử lý sự cố Cloud khác cục bộ thế nào
- Khi nào quay lại kiểm chứng cục bộ từng bước nhỏ

## Kiểm điều kiện trước

Nếu «Cloud đỏ, cục bộ xanh», kiểm điều kiện chạy trước.

Nguyên nhân phổ biến:

- Môi trường từ xa khác cục bộ
- Cloud không thấy việc cục bộ chưa push
- Secrets cấu hình sai
- Mạng hoặc quyền bị hạn chế

Kiểm tiền đề trước khi đổ lỗi cho bản thân Tác vụ.

## Phân loại nhanh

| Triệu chứng | Kiểm trước |
|---|---|
| Không kết nối repo / 403 | [Kết nối GitHub](/guide/web-and-cloud/connect-github/) |
| Cài dependency fail | [Truy cập Internet](/guide/web-and-cloud/internet-access/) · [Môi trường Cloud](/guide/web-and-cloud/cloud-environments/) |
| Package riêng / API 401 | [Secrets và biến](/guide/web-and-cloud/secrets-and-variables/) |
| Tác vụ kẹt chờ | [Ủy thác và theo dõi](/guide/web-and-cloud/delegate-and-follow-up/) · Đang chờ Phê duyệt? |
| Commit cục bộ vô hình với Cloud | Đã push? Cloud không đọc commit cục bộ chưa push |
| Không mở PR hoặc push | Bảo vệ nhánh · [Tạo PR](/guide/web-and-cloud/create-pull-requests/) |
| Kiểm thử đỏ Cloud, xanh cục bộ | Căn chỉnh phiên bản/env trong [Môi trường Cloud](/guide/web-and-cloud/cloud-environments/) |

## Thứ tự xử lý sự cố

1. Repo và nhánh đúng chưa?
2. Quyền và ủy quyền đủ chưa?
3. Môi trường và dependency sẵn chưa?
4. Secrets và mạng hoạt động chưa?
5. Mô tả Tác vụ thiếu ràng buộc then chốt?

Làm rõ các điểm này tốt hơn chạy lại ngay.

## Kết nối và quyền

**Triệu chứng:** OAuth thành công nhưng Tác vụ không clone được.

**Kiểm:**

1. Phạm vi ủy quyền có gồm org/repo đích
2. Repo đã archive hoặc hạn chế GitHub App đang bật
3. Tài khoản cá nhân kết nối repo org cần SSO

**Triệu chứng:** push bị từ chối.

**Kiểm:** bảo vệ nhánh, review bắt buộc, cố push thẳng lên `main`

## Hiểu nhầm thường gặp

### 1. Lỗi lúc cài luôn là vấn đề dependency

Cũng có thể là mạng, auth, Secrets hoặc quyền registry riêng.

### 2. Xanh cục bộ nghĩa code tốt và Cloud không ổn định

Thường nghĩa:  
**môi trường cục bộ của bạn có tiền đề mà Cloud không có.**

### 3. Tác vụ kẹt nghĩa mô hình đang nghĩ

Có thể là:

- Đang chờ Phê duyệt
- Đang chờ mạng
- Đang chờ môi trường khởi động
- Phạm vi Tác vụ quá rộng

## Môi trường và dependency

**Triệu chứng:** `command not found` (node, python, v.v.).

**Kiểm:** image nền có runtime cần thiết; `AGENTS.md` ghi phiên bản và lệnh cài.

**Triệu chứng:** xung đột lockfile hoặc timeout cài.

**Kiểm:** chính sách đi ra; mirror registry; dependency cần VPN (Cloud thường không trên mạng nội bộ)

## Secrets và biến

**Triệu chứng:** biến môi trường rỗng lúc build.

**Kiểm:**

- Tên Secret khớp tài liệu (thường phân biệt hoa thường)
- Cấu hình đúng phạm vi repo/môi trường
- Secret vô tình dán vào Prompt rồi bị che

Thêm: [Secrets và biến](/guide/web-and-cloud/secrets-and-variables/)

## Tác vụ kẹt và timeout

| Nguyên nhân | Hành động |
|---|---|
| Đang chờ phê duyệt người | Phê duyệt hoặc từ chối trong App/điện thoại |
| Tác vụ quá lớn | Tách thành ủy thác nhỏ hơn |
| Khởi động môi trường chậm | Cold start bình thường; nếu kéo dài, kiểm trang trạng thái chính thức |

Theo dõi: [Ủy thác và theo dõi](/guide/web-and-cloud/delegate-and-follow-up/)

## Chất lượng đầu ra

Cloud xong nhưng kết quả không dùng được:

1. So với mô tả Tác vụ — thiếu tiêu chí nghiệm thu?
2. Checkout cùng nhánh cục bộ và chạy kiểm thử
3. Thêm theo dõi với [chẩn đoán trước khi sửa](/cases/workflows/diagnose-before-fixing/) thay vì chạy lại cả Tác vụ

## Khi nào quay lại cục bộ

Nếu đã qua hai vòng trên điều kiện Cloud hơn là bản thân Tác vụ:

- Tái hiện tối thiểu cục bộ
- Ghi deps, lệnh, Kiểm chứng
- Ủy thác Cloud lại

Thường nhanh hơn đoán trong môi trường từ xa.

## Quan hệ với chỉ mục xử lý sự cố toàn cục

Vấn đề cục bộ CLI/IDE/App: [Tham chiếu · Xử lý sự cố](/guide/reference/troubleshooting/). Trang này chỉ phủ đường **đặc thù Cloud**.

## Tham chiếu

- Tài liệu hỗ trợ OpenAI Codex Cloud
- stormzhang `10-cloud.md`
- KimYx0207 CX-10～CX-11

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud  
**Ghi chú đối chiếu:** Khung phân loại giúp ích, nhưng giả định hành vi kết nối repo Cloud, Secrets, Phê duyệt, mạng và PR hiện tại; khi Cloud và năng lực đa client tiến hóa, map triệu chứng–chủ đề cần viết lại theo tài liệu hỗ trợ chính thức mới nhất.  
**Kiểm chứng gần nhất:** 2026-07-26
