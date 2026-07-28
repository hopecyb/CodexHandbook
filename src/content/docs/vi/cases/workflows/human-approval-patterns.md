---
title: Mẫu phê duyệt của người
description: Khi nào phê duyệt, từ chối hoặc yêu cầu Codex dừng, và cách viết rõ các quy tắc đó.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Vai trò của phê duyệt là để người quyết các thao tác không đảo ngược được. Trang này sắp xếp vài cách làm phổ biến.

## Phân tầng phê duyệt

```text
Vùng an toàn tự động (đọc, phân tích, kế hoạch)
    ↓
Vùng nhắc xác nhận (ghi tệp, chạy lệnh, lên mạng)
    ↓
Vùng bắt buộc người (push, xóa dữ liệu, gửi ra ngoài, sửa cấu hình production)
```

Hành vi hộp thoại cụ thể khác theo [lối vào sản phẩm](/guide/); nguyên tắc thì giống nhau.

## Mẫu một: Kế hoạch trước, thực thi sau

```text
Quy tắc: Chưa thấy tôi «phê duyệt kế hoạch» thì không được sửa tệp trong kho.
```

Phù hợp: chưa quen codebase, liên quan production, diff lớn.

## Mẫu hai: Lệnh whitelist

Trong [AGENTS.md](/guide/customization/agents-md/writing-effective-instructions/) ghi rõ:

```md
Cho phép không cần hỏi lại: pnpm test, pnpm lint, git status, git diff
Mỗi lần phải xác nhận: git push, npm publish, database migrate
```

Khi xung đột với chính sách quản trị, lấy bên **nghiêm hơn**.

## Mẫu ba: Merge hai giai đoạn

1. Codex mở draft PR hoặc nhánh cục bộ
2. Người + CI + review đạt rồi mới merge

Kịch bản Cloud xem [tạo Pull Request](/guide/web-and-cloud/create-pull-requests/).

## Mẫu bốn: Thám sát chỉ đọc

```text
Vòng này chỉ đọc: được đọc tệp, chạy test, curl API cục bộ;
Cấm ghi đĩa và git commit.
```

Dùng cho audit, học dự án lạ, chẩn đoán sự cố production.

## Khi nào từ chối và làm lại

| Tín hiệu | Gợi ý |
|---|---|
| Kế hoạch lệch mục tiêu | Từ chối thực thi, yêu cầu sửa kế hoạch |
| Phạm vi thay đổi lan rộng | Dừng, tách tác vụ |
| Test bị bỏ qua | Từ chối merge, yêu cầu bổ sung kiểm chứng |
| Không giải thích được một lệnh | Từ chối, yêu cầu giải thích |

## Quan hệ với Automations

Tác vụ không người trông cũng phải giữ điểm xác nhận của người khi thiết kế; xem [tác vụ theo lịch và nền](/skills/automations/scheduled-tasks/).

## Lỗi thường gặp

- Lâu dài tick «luôn cho phép» rồi quên rủi ro
- Phê duyệt hình thức, không đọc diff
- Dùng miệng «đừng lung tung» thay cho mẫu rõ ràng

## Checklist nghiệm thu

- [ ] Trước khi bắt đầu tác vụ đã tuyên bố dùng mẫu phê duyệt nào
- [ ] Thao tác rủi ro cao có người thứ hai review hoặc CI chặn
- [ ] Nhóm có chính sách thống nhất cho lệnh như `git push`

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo hướng dẫn mô hình chính thức hiện tại về autonomy / approval boundaries trên OpenAI Developers, cùng các chương phê duyệt, quy tắc lệnh, PR và tự động hóa đã kiểm chứng của sổ tay; trang này chỉ xác nhận nguyên tắc cộng tác ổn định “thao tác nào được tự tiếp tục, thao tác nào phải dừng để người duyệt”.  
**Kiểm chứng gần nhất:** 2026-07-26
