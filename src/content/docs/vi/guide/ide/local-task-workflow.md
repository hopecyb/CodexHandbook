---
title: Quy trình tác vụ local
description: Trong IDE, khởi, theo dõi và hoàn thành tác vụ Codex local dựa trên tệp mở và vùng chọn.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Tác vụ local trong IDE là vòng khép «**mở → chọn → mô tả → rà soát → kiểm thử**», phù hợp chỉnh sửa nhỏ tần suất cao. Đây là một đường thực hành phổ biến nhất; chi tiết ngữ cảnh xem [Vùng chọn và tệp mở](/guide/ide/selected-code-and-open-files/).

## Quy trình khuyến nghị

1. **Mở thư mục gốc không gian làm việc** (cả kho, không phải một tệp)
2. Mở tệp liên quan; khi cần [chọn đoạn mã](/guide/ide/selected-code-and-open-files/)
3. Trong bảng Codex viết rõ: mục tiêu, ràng buộc, [định nghĩa hoàn thành](/prompts/define-done/)
4. Nếu tác vụ phức tạp, [xin kế hoạch](/prompts/ask-for-a-plan/) trước rồi mới thi hành
5. Trong view diff / inline [rà soát thay đổi](/guide/ide/reviewing-changes/)
6. Trong terminal IDE chạy lệnh kiểm thử của dự án
7. Chính bạn `git commit` (trừ khi nhóm ủy quyền rõ Agent được commit)

## Prompt ví dụ (minh họa)

```text
Chỉ sửa src/auth/login.ts và kiểm thử tương ứng.
Mục tiêu: Sửa lỗi 500 khi gửi email trống thành 400 + thông báo lỗi.
Cấm: sửa package-lock, git push.
Hoàn thành: chạy npm test -- auth, và liệt kê tóm tắt thay đổi.
```

## Khi nào đổi sang lối vào khác

| Tình huống | Gợi ý |
|---|---|
| Đa tác vụ song song, cây làm việc | [Ứng dụng Desktop](/guide/desktop-app/) |
| Script / CI | [CLI không tương tác](/guide/cli/non-interactive-mode/) |
| Môi trường chuẩn hóa từ xa, mở PR | [Tác vụ Cloud trong IDE](/guide/ide/cloud-task-workflow/) |

## Lỗi thường gặp

- Chưa mở không gian làm việc → không đọc được `AGENTS.md`
- Một lần chấp nhận hết mọi gợi ý inline
- Commit khi chưa chạy kiểm thử

Ngữ cảnh: [Ngữ cảnh trình soạn thảo](/guide/ide/editor-context/) · [Ngữ cảnh tệp và thư mục](/guide/context/file-and-folder-context/)

## Câu hỏi thường gặp

### 1. Vì sao luôn nhấn «mở thư mục gốc không gian làm việc»?

Vì nhiều ngữ cảnh của tiện ích IDE phụ thuộc vào việc bạn mở cả dự án, không phải một tệp đơn lẻ.

### 2. Trong IDE sửa tiện — có thể bớt rà soát?

Không.

Càng tiện càng dễ ấn chấp nhận theo phản xạ, nên càng phải giữ thói quen kiểm tra.

### 3. Lần đầu phù hợp làm tác vụ nào?

Phù hợp kiểu:

- Chỉ sửa 1 đến 2 tệp
- Kết quả nhìn một cái hiểu
- Sửa xong dễ kiểm thử hoặc xem trước

Tác vụ local trong IDE phù hợp bước nhỏ nhanh, nhưng «tiện» không có nghĩa được bỏ rà soát và kiểm chứng.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** IDE  
**Căn cứ kiểm chứng:** Trung tâm trợ giúp OpenAI hiện vẫn mô tả IDE extension là client phối hợp với kho mã local; quy trình trang này tập trung vòng cộng tác local ổn định «mở không gian làm việc, giới hạn phạm vi tệp, mô tả tác vụ, rà soát diff, chạy kiểm thử, commit thủ công» — không phụ thuộc giao diện tiện ích cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
