---
title: Làm việc theo test
description: Định nghĩa hoặc bổ sung test thất bại trước, rồi dẫn dắt triển khai — để thay đổi của Codex nghiệm thu khách quan được.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Làm việc theo test** (TDD hoặc “test trước”) là để test thất bại trước, rồi bằng triển khai tối thiểu đưa nó sang pass. Phù hợp kho đã có nền tảng test, và liên quan trực tiếp các kịch bản như [sửa Bug kèm kiểm chứng](/cases/use-cases/software-development/fix-a-bug-with-verification/).

## Trọng tâm trang này

- Khi nào yêu cầu «viết/chạy test trước»
- Cách nhắc Codex không bỏ bước test
- Chiến lược hoàn tác khi test thất bại

## Phù hợp ai

- Kho đã có unit/integration test
- Bug hồi quy, đổi hành vi API, refactor

Kịch bản không phù hợp gồm: nguyên mẫu chưa có nền tảng test, sửa một lần trên site copy thuần. Những tác vụ đó nên dùng [EPXV](/cases/workflows/explore-plan-execute-verify/) để người kiểm chứng.

## Cách làm tối thiểu dùng được

```text
1. Viết một test thất bại cho hành vi mong muốn (hoặc chỉ ra test thất bại sẵn có)
2. Chỉ triển khai code tối thiểu để test đó pass
3. Chạy bộ test liên quan, rồi chạy đầy đủ
4. Không xóa assertion hay mock mất logic thật chỉ để test pass
```

Prompt:

```text
Theo TDD: trước hết viết test thất bại cho «đầu vào rỗng trả về []» của @src/foo.ts;
Chạy test xác nhận thất bại rồi mới sửa triển khai; mỗi bước chỉ chạy tệp test liên quan.
```

## Quy trình đề xuất

| Giai đoạn | Đầu ra |
|---|---|
| Đỏ | Test thất bại + giải thích nguyên nhân thất bại |
| Xanh | Triển khai tối thiểu + test pass |
| Refactor | Chỉnh code dưới bảo vệ của test (tùy chọn bước riêng) |

Kết hợp [chẩn đoán trước khi sửa](/cases/workflows/diagnose-before-fixing/): đọc assertion thất bại và stack trước, rồi mới động triển khai.

## Lỗi thường gặp

- Chưa chạy test đã tuyên bố xong
- Sửa test để chiều theo triển khai sai
- Chỉ chạy một test rồi tuyên bố toàn bộ xanh
- Lặp chạy đầy đủ trên bộ E2E chậm — nên dùng `-t` hoặc lọc theo tệp

## Ranh giới an toàn

- Lệnh test phải trong phạm vi [quy tắc lệnh](/guide/customization/rules/command-rules/) cho phép
- Integration test nếu chạm API production phải cấm trong đặc tả hoặc đổi sang mock

## Checklist nghiệm thu

- [ ] Có bằng chứng test thất bại→pass (log hoặc CI)
- [ ] Test đầy đủ hoặc phạm vi đã thỏa thuận đều pass
- [ ] Diff không chứa xóa test không liên quan
- [ ] Khớp [định nghĩa hoàn thành](/prompts/define-done/)

## Chương liên quan

- [Chạy test](/guide/quality/run-tests/)
- [Case: sửa Bug kèm kiểm chứng](/cases/use-cases/software-development/fix-a-bug-with-verification/)

## Nguồn tham chiếu

- Chương test và chất lượng của stormzhang
- Quy trình nhà phát triển CodexGuide

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / IDE  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương chạy test, định nghĩa hoàn thành, sửa Bug kèm kiểm chứng và quy tắc lệnh đã kiểm chứng của sổ tay; nội dung trang tập trung phương pháp test ổn định “để test thất bại trước, rồi dẫn dắt pass bằng triển khai tối thiểu”.  
**Kiểm chứng gần nhất:** 2026-07-26
