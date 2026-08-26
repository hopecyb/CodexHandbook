---
title: Review trước khi merge
description: Trước khi merge, dùng Codex làm review diff và rủi ro có cấu trúc — phân công người-máy rõ.
locale: vi
source_locale: zh-CN
source_revision: ce05ae9
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Review trước khi merge** là đặt [chất lượng và kiểm chứng](/vi/guide/quality/) vào quy trình Git: trước khi merge PR, dùng Codex kiểm tra diff, test, bảo mật và đặc tả có khớp không. Comment tự động không thay cho merge tự động.

## Trọng tâm trang này

- Phân công review cục bộ vs Cloud/CI
- Prompt review nên phủ những chiều nào
- Khi nào bắt buộc người ký cuối

## Cách làm tối thiểu dùng được

**Cục bộ (tác giả tự kiểm)**

```text
So sánh diff nhánh hiện tại với main (chưa sửa code):
1. Có vượt phạm vi issue không
2. Có rủi ro bảo mật rõ (bí mật, injection, quyền) không
3. Có thiếu test hoặc tài liệu không
Xuất checklist, gắn P0/P1.
```

**CI (cổng nhóm)**

- Phiên bản prompt cố định + token chỉ đọc
- Kết quả ghi vào PR comment hoặc check run
- Xem [tự động hóa code review](/vi/guide/developer-platform/ci-cd/code-review-automation/)

## Chiều review đề xuất

| Chiều | Điểm chú ý |
|---|---|
| Tính đúng | Logic, biên, xử lý lỗi |
| Test | Hành vi mới có bao phủ không |
| Bảo mật | Bí mật, injection, manh mối lỗ hổng dependency |
| Bảo trì | Đặt tên, trùng lặp, API công khai |
| Đặc tả | Khớp issue/tài liệu đặc tả |

Có thể dùng kèm [review diff](/vi/guide/quality/review-diffs/); mục rủi ro cao đi [mẫu phê duyệt của người](/vi/cases/workflows/human-approval-patterns/).

## Lỗi thường gặp

- Chỉ để model nói «LGTM» không căn cứ cụ thể
- Dán nguyên mô tả PR chưa khử vào CI prompt (rủi ro injection)
- Review đạt nhưng CI chưa chạy test
- Bot merge tự động bật mà không bảo vệ nhánh

## Ranh giới an toàn

- Review dùng quyền chỉ đọc; sửa nên ở **commit mới** do người kích hoạt
- Không ghi PII người dùng hoặc bí mật vào log review

## Checklist nghiệm thu

- [ ] Đầu ra review truy được về tệp/dòng cụ thể
- [ ] Vấn đề P0 đã chặn merge hoặc đã sửa
- [ ] Khớp checklist review của nhóm
- [ ] Maintainer người có quyết định cuối với mục tranh cãi

## Chương liên quan

- [Code review Cloud](/vi/guide/web-and-cloud/code-review/)
- [Tạo Pull Request](/vi/guide/web-and-cloud/create-pull-requests/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo use cases code review / pull request công khai hiện tại trên OpenAI Developers, cùng các chương chất lượng, review diff và Cloud đã kiểm chứng của sổ tay; trang này chỉ xác nhận nguyên tắc ổn định “review có cấu trúc trước merge, review chỉ đọc và người ký cuối”.  
**Kiểm chứng gần nhất:** 2026-07-26
