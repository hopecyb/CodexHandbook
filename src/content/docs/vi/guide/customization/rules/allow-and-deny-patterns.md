---
title: Quy tắc cho phép và từ chối
description: Dùng quy tắc lệnh và đường dẫn để ràng buộc thao tác Agent thực thi được — thói cá nhân và đường cơ sở nhóm.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Rules (quy tắc)** trong cấu hình hoặc tệp dự án khai báo lệnh shell, đường dẫn, gọi công cụ nào **cho phép hoặc cấm**, giảm mỗi lần bấm phê duyệt thủ công, đồng thời ngăn thao tác nguy hiểm tự động hóa.

## Nội dung

- Quy tắc Allow / Deny hoạt động thế nào
- Quan hệ với Sandbox, hộp thoại phê duyệt, `AGENTS.md`
- Ví dụ quy tắc nhóm

## Quy tắc thật sự đang làm gì

Nếu cảm thấy từ “quy tắc” hơi trừu tượng, có thể coi trước là: ước định trước Codex việc nào làm được, việc nào không, đừng mỗi lần dựa phán đoán lâm thời và bấm phê duyệt tay.

Giá trị chính có hai loại:

- Giảm thao tác rủi ro thấp vốn xảy ra mỗi ngày nhưng luôn phải xác nhận lặp
- Chặn trước thao tác rủi ro cao không nên xảy ra tự động

## Loại quy tắc (khái niệm)

| Loại | Ví dụ |
|---|---|
| Allowlist lệnh | Cho phép `npm test`, `git status` |
| Denylist lệnh | Cấm `rm -rf`, `curl \| bash` |
| Đường dẫn | Cấm ghi `../`, cấm đọc `~/.ssh` |
| Mạng | Cấm ra mạng hoặc chỉ cho phép tên miền registry |

Đối chiếu [Ma trận quyền](/guide/reference/permission-matrix/): quy tắc là enforcement **cấu hình được**, ma trận mô tả **mặc định điển hình**.

## Phân tầng khuyến nghị

```text
Chiến lược quản trị tổ chức (không phủ được)
    ↓
Rules dự án + AGENTS.md (rà Git)
    ↓
Bổ sung allowlist cá nhân (chỉ máy cục bộ)
    ↓
Ràng buộc Prompt tác vụ một lần
```

## Hiểu lầm thường gặp

### Quy tắc không chỉ để ít bật hộp thoại

Nhiều người lần đầu nghe allowlist, bản năng nghĩ mục tiêu là ít hộp thoại, ít ngắt.

Ít hộp thoại chỉ là một phần; quan trọng hơn là thông thao tác rủi ro thấp, chặn thao tác rủi ro cao.

### Quy tắc không bằng Sandbox

Sandbox hạn chế “tối đa chạm được đâu”; quy tắc ước định “hành động nào về nguyên tắc không nên làm”.

Hai thứ tốt nhất dùng cùng, chứ không chọn một thay cái kia.

### Đường cơ sở nhóm không nên chỉ đặt trên máy một người

Nếu chỉ quy tắc máy bạn biết “cấm push”, “cấm đụng `.env`”, người khác vẫn có thể dẫm vào.

Đường cơ sở nhóm nên cố đặt ở chỗ rà được.

## Ví dụ nhóm (minh họa, không copy dùng ngay)

**Cho phép:**

- Trình quản lý gói cài dependency **trong dự án**
- Chạy script kiểm thử trong tài liệu

**Từ chối:**

- `git push`, `git reset --hard`
- Đọc/ghi `.env*` (trừ tác vụ tường minh)
- POST công cộng chứa nội dung kho

Quy tắc nên viết trong tệp nhóm review được, không chỉ ước định miệng.

## Lỗi thường gặp

- Allowlist quá rộng (cho phép `bash` tương đương cho phép hết)
- Chỉ deny không allow, phê duyệt vẫn quá nhiều
- Quy tắc mâu thuẫn `AGENTS.md`

## Gợi ý khởi đầu

Khi mới gom quy tắc, không cần làm chiến lược đầy đủ ngay. Hai bước này đã đủ dùng:

1. Liệt kê rõ 3 đến 5 lệnh chạy thường mỗi ngày, rủi ro thấp
2. Liệt kê rõ vài hành động rủi ro cao tuyệt đối không muốn tự thực thi

Chạy thông ranh giới tối thiểu trước, rồi dần tinh chỉnh.

## Ranh giới an toàn

- Quy tắc **không** thay code review và bảo vệ nhánh
- Prompt độc hại có thể dụ Agent thử vòng quy tắc — giữ Sandbox mặc định nghiêm
- Thay đổi quy tắc đi PR, đối xử như sửa CI

Quy tắc allow/deny tốt là nói rõ trước hành động nào hợp lý, hành động nào không nên xảy ra.

## Nguồn tham khảo

- stormzhang `15-permissions.md`, `18-config.md`
- Chương cấu hình quyền KimYx0207

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / App  
**Căn cứ kiểm chứng:** Tài liệu quyền Codex/plugin hiện tại của OpenAI liên tục nhấn mạnh tư duy phân tầng hành động đọc/ghi, phê duyệt, ranh giới nguồn và kiểm soát truy cập vai trò; trang này không tuyên bố cú pháp tệp quy tắc cụ thể, mà giải thích allow/deny như một mẫu ranh giới thực thi, và phân biệt với Sandbox, phê duyệt và quy trình rà nhóm.  
**Kiểm chứng gần nhất:** 2026-07-26
