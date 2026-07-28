---
title: Review mã Cloud
description: "Xem xét Diff, PR và gợi ý review tự động từ Tác vụ Cloud."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cloud có thể tạo thay đổi giúp bạn, nhưng không nhận trách nhiệm merge thay bạn.

Sau khi Tác vụ Cloud kết thúc, **review của người** vẫn là cổng cuối trước merge. Trang này giải thích cách xem đầu ra Agent từ xa và nối với PR GitHub, CI và review bằng Skill.

## Nội dung phủ

- Review PR Cloud khác review PR cục bộ thế nào
- Checklist review và điểm rủi ro thường gặp
- Dùng Codex hỗ trợ review mà không bỏ trách nhiệm

## Vì sao review Cloud cần chú ý thêm

Agent từ xa dễ hơn:

- Đụng tệp không liên quan khi «sửa» gì đó
- Sinh Diff lockfile hoặc tệp sinh lớn vì khác môi trường
- Cho thấy đã chạy kiểm thử mà không phủ logic quan trọng
- Viết mô tả PR lịch sự mà bạn chưa Kiểm chứng

Review Cloud không nhẹ hơn — cần tập trung sắc hơn.

## Review nằm đâu trong luồng

```text
Tác vụ Cloud xong → push nhánh → mở PR
        ↓
CI chạy (kiểm thử, lint, quét bảo mật)
        ↓
Người xem Diff + review hỗ trợ Agent tùy chọn
        ↓
Phê duyệt merge (dưới bảo vệ nhánh)
```

Mở PR: [Tạo Pull Request](/guide/web-and-cloud/create-pull-requests/)

## Thanh tối thiểu trước review đầy đủ

Trước khi đi sâu, xác nhận ít nhất bốn việc:

1. Phạm vi thay đổi có lệch không?
2. Logic quan trọng có đổi đúng như dự kiến không?
3. Kiểm thử hoặc Kiểm chứng có thật sự chạy không?
4. Có đưa dữ liệu nhạy cảm hoặc thay đổi nguy hiểm không?

Chưa xác nhận thì «Tác vụ xong» chưa phải «an toàn để merge».

## Checklist review người

Căn chỉnh với [xem xét Diff](/guide/quality/review-diffs/); Cloud thêm trọng tâm:

| Kiểm tra | Vì sao |
|---|---|
| Tệp không liên quan bị đổi | Agent từ xa có thể «refactor nhân tiện» |
| Lockfile / tệp sinh | Khác môi trường gây Diff lớn |
| Nguồn dependency mới | Rủi ro chuỗi cung ứng |
| Kiểm thử thật phủ logic mới | Agent có thể viết kiểm thử rỗng |
| Thay đổi quyền và auth | Leo thang đặc quyền, token hard-code |
| Khớp phạm vi issue | Ngăn mở rộng phạm vi |

## Hiểu nhầm thường gặp

### 1. CI xanh nghĩa là sẵn sàng merge

CI chỉ nghĩa «các kiểm tra tự động này không fail». Yêu cầu đã hiểu đúng, phạm vi còn đúng và rủi ro chấp nhận được vẫn cần phán đoán người.

### 2. Mô tả PR đầy đủ nghĩa là có thể lướt Diff

Không.

Mô tả giúp lấy Ngữ cảnh nhanh hơn; không Kiểm chứng sự thật giúp bạn.

### 3. Chạy lại review Codex là xong

Review hỗ trợ hữu ích, nhưng trách nhiệm vẫn thuộc người.

## Dùng Codex hỗ trợ review (không thay bạn)

Chấp nhận được:

- Chạy Skill `$pr-review` cục bộ hoặc Cloud trên PR mới (xem [Tạo Skill đầu tiên](/skills/create-your-first-skill/))
- Yêu cầu ý kiến nhóm dạng blocker / gợi ý / nit
- **Bạn** xác nhận từng blocker

Không chấp nhận:

- Merge mà không đọc Diff vì Agent nói trông ổn
- Để Agent một mình phê duyệt nhánh được bảo vệ

Xem [Kiểm chứng và review của người](/guide/foundations/verification-and-human-review/)

## Thứ tự review đề xuất

1. Tiêu đề và mô tả PR — xác nhận mục tiêu
2. Diff logic chính
3. Kiểm thử, tệp sinh, cấu hình
4. Bình luận tự động và gợi ý theo dõi

Tránh chìm trong nhiễu ngay từ đầu.

## Đẩy sửa từ bình luận review

Sau khi bình luận review tới PR:

1. Khởi động Tác vụ Cloud hoặc cục bộ mới: «Chỉ xử lý các bình luận review sau; không mở rộng phạm vi»
2. Đính kèm liên kết hoặc số bình luận
3. Push commit mới trên cùng PR
4. Chạy lại CI và lướt Diff gia tăng

Trên GitHub: [tích hợp GitHub](/guide/integrations/github/)

## Kết hợp với Automations

- Tự chạy Skill review khi PR mở (chỉ bình luận, không merge)
- Xem [Tác vụ theo lịch và kích hoạt](/skills/automations/scheduled-tasks/)

## Lỗi thường gặp

- Bỏ qua review bảo mật vì Cloud «cô lập»
- Merge Diff lớn vì «CI xanh»
- Dán log production chưa làm sạch vào bình luận review
- Coi «tôi không thấy vấn đề» là «không có vấn đề»

## Checklist nghiệm thu

- [ ] CI xanh và bạn hiểu lịch sử thử lại
- [ ] Ít nhất một người đã đọc Diff logic chính
- [ ] Phạm vi khớp mô tả issue/Tác vụ
- [ ] Không commit Secrets vào repo

## Tham chiếu

- stormzhang `26-git-github.md`
- Các phần Review/PR KimYx0207
- [Mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/)

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud / GitHub  
**Ghi chú đối chiếu:** Nguyên tắc đầu ra Cloud vẫn cần review người vẫn đứng vững, nhưng trang mô tả PR Cloud, hành vi mở PR tự động, nhịp review từ xa và thông báo như quy trình cụ thể hiện hành; các hình thức tích hợp này đổi nhanh và cần viết lại theo luồng chính thức mới nhất.  
**Kiểm chứng gần nhất:** 2026-07-26
