---
title: "Case: kiểm tra liên kết tài liệu theo lịch"
description: Dùng Codex không tương tác hoặc CI quét liên kết chết trong site — case nhập môn tự động hóa nhóm.
locale: vi
source_locale: zh-CN
source_revision: e8fa8bd
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Maintainer nhóm, Technical Writer |
| Client | CLI + GitHub Actions |
| Thời gian ước tính | 45–90 phút (kể cả cấu hình CI lần đầu) |
| Ngày kiểm chứng | 2026-07-25 |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Mỗi tuần tự kiểm tra liên kết trong site tài liệu và liên kết ngoài then chốt; báo cáo liên kết chết bằng PR hoặc issue.

**Tiêu chí thành công:**

- CI hoặc workflow theo lịch chạy lại được
- Xuất danh sách liên kết chết có cấu trúc (tệp, số dòng, URL)
- Không sửa tệp không liên quan, không push

**Ngoài phạm vi:** Crawler cả site, trang sau đăng nhập, kiểm thử hiệu năng.

## 2. Chuẩn bị

- Mã nguồn site tài liệu trong kho Git (ví dụ sổ tay này `src/content/docs/`)
- Đã có `npm run build` hoặc script link checker (tùy chọn)
- `GITHUB_TOKEN` chỉ đọc và `OPENAI_API_KEY` đặt trong org secrets

## 3. Quy trình

### Khám phá

```text
Đọc @src/content/docs/ và scripts hiện có trong package.json.
Liệt kê hiện có link check chưa; nếu chưa, đề xuất phương án tối thiểu: liên kết nội bộ markdown + lấy mẫu liên kết ngoài tài liệu chính thức.
Không sửa tệp.
```

### Lập kế hoạch

```text
Đưa kế hoạch: đường dẫn tệp prompt, tên CI workflow, các trường JSON đầu ra có cấu trúc.
Đợi tôi xác nhận rồi mới tạo tệp.
```

### Thực thi

- Thêm `prompts/ci/link-check.md`
- Thêm `.github/workflows/docs-link-check.yml` (minh họa, xem [script và pipeline](/vi/guide/developer-platform/non-interactive/scripts-and-pipelines/))
- Dùng [codex exec](/vi/guide/developer-platform/non-interactive/codex-exec/) hoặc script thuần + Codex phân loại lần hai

### Kiểm chứng

- Chạy `codex exec` cục bộ một lần
- CI thủ công `workflow_dispatch`
- Cố ý chèn liên kết chết, xác nhận `pass: false`

## 4. Thất bại và phục hồi

| Vấn đề | Xử lý |
|---|---|
| Site ngoài tạm 503 | Phân biệt liên kết chết cứng và thất bại mềm; định nghĩa trong prompt |
| Parse JSON thất bại | Thắt chặt ràng buộc [đầu ra có cấu trúc](/vi/guide/developer-platform/non-interactive/structured-output/) |
| Hết hạn mức | Đổi lịch tuần + kiểm tra tăng dần |

## 5. Đóng gói lại

- Sau lần thứ ba chạy thông thì đóng gói Skill: `docs-link-audit`
- [Quy tắc lệnh](/vi/guide/customization/rules/team-rules/) của nhóm cho phép `npm run build` và git chỉ đọc

## 6. Chương liên quan

- [Quản lý tác vụ dài](/vi/cases/workflows/long-running-task-management/)
- [Tác vụ theo lịch Automations](/vi/skills/automations/scheduled-tasks/)
- [Lộ trình nhóm](/vi/guide/learning-paths/team/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương chế độ không tương tác, script và pipeline, đầu ra có cấu trúc, quy tắc nhóm và tự động hóa đã kiểm chứng của sổ tay; nội dung trang giới hạn ở case tự động hóa nhóm ổn định “kiểm tra liên kết theo lịch, báo cáo có cấu trúc và dừng khi thất bại”.  
**Kiểm chứng gần nhất:** 2026-07-26
