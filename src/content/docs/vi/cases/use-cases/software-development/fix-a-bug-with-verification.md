---
title: "Case: sửa Bug kèm kiểm chứng"
description: Từ test thất bại đến sửa tối thiểu và hồi quy — vòng lặp phổ biến nhất của nhà phát triển.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Nhà phát triển |
| Client | CLI hoặc IDE (kho cục bộ) |
| Thời gian ước tính | 30–60 phút |
| Ngày kiểm chứng | 2026-07-25 |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Sửa một bug hồi quy đã bị unit test bắt, và bổ sung test để không tái diễn.

**Tiêu chí thành công:**

- Test thất bại ban đầu pass
- Toàn bộ test vẫn xanh
- Diff chỉ liên quan tệp cần thiết

**Ngoài phạm vi:** Refactor lớn, nâng dependency major.

## 2. Chuẩn bị

- Clone kho, `pnpm install` (hoặc theo `AGENTS.md`)
- Xác nhận tái hiện thất bại cục bộ: `pnpm test -- path/to/failing.test.ts`
- Nhánh: `fix/issue-123-short-desc`

## 3. Quy trình

### Khám phá

```text
Chưa sửa code. Đọc test thất bại @tests/auth/login.test.ts và triển khai @src/auth/login.ts,
nêu nguyên nhân thất bại trong tối đa 5 điểm, trích assertion và số dòng stack.
```

### Lập kế hoạch

```text
Đưa kế hoạch sửa: sửa tệp nào, có cần test mới không, cách kiểm chứng.
Đợi tôi trả lời «thực thi» rồi mới sửa code.
```

### Thực thi

```text
Thực thi bước 1–2 của kế hoạch. Sau mỗi bước chỉ chạy test liên quan.
```

### Kiểm chứng

```text
Chạy toàn bộ bộ test; tóm tắt diff để tôi review; không git push.
```

Người: đọc diff, xác nhận không có thay đổi không liên quan, kiểm theo [review diff](/guide/quality/review-diffs/).

## 4. Thất bại và phục hồi

| Vấn đề | Xử lý |
|---|---|
| Sửa xong lại gây thất bại mới | `git stash` hoặc hoàn commit, thu hẹp thay đổi |
| Đoán sai nguyên nhân gốc | Quay lại khám phá, yêu cầu giả thuyết mới |
| Test flaky | Ổn định test trước rồi mới sửa logic nghiệp vụ |

## 5. Đóng gói lại

- Nếu loại bug này lặp lại, thêm một quy ước vào `AGENTS.md`
- Có thể tách Skill `$regression-guard`: trước merge chạy danh sách test then chốt

## 6. Chương liên quan

- [Chẩn đoán trước khi sửa](/cases/workflows/diagnose-before-fixing/)
- [Lộ trình nhà phát triển](/guide/learning-paths/developer/)
- [Chạy test](/guide/quality/run-tests/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / IDE  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương chẩn đoán, chạy test, review diff và lộ trình nhà phát triển đã kiểm chứng của sổ tay; nội dung trang giới hạn ở case vòng lặp phát triển ổn định “từ test thất bại đến sửa tối thiểu và kiểm chứng hồi quy”.  
**Kiểm chứng gần nhất:** 2026-07-26
