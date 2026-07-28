---
title: Làm việc theo đặc tả
description: Viết rõ đặc tả nghiệm thu được trước, rồi để Codex triển khai theo kế hoạch — phù hợp tác vụ giao có nhu cầu rõ.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Làm việc theo đặc tả** là trước khi sửa nhiều tệp, chuẩn bị một đặc tả ngắn ghi rõ mục tiêu, phạm vi, giao diện và tiêu chí nghiệm thu. Có thể nối sau [brainstorm](/cases/workflows/brainstorm-before-building/), hoặc trực tiếp vào [EPXV](/cases/workflows/explore-plan-execute-verify/) với nhu cầu đã làm rõ.

## Trọng tâm trang này

- Đặc tả cần chi tiết đến đâu là đủ
- Cách để Codex làm theo đặc tả mà không tự mở rộng scope
- Quan hệ giữa đặc tả với mô tả PR và issue

## Mẫu đặc tả tối thiểu dùng được

```markdown
## Mục tiêu
Một câu giá trị cho người dùng

## Phạm vi
- Bao gồm: …
- Không gồm: …

## Giao diện/hành vi
- Đầu vào / đầu ra / tình huống lỗi

## Tiêu chí nghiệm thu
- [ ] Mục kiểm chứng tự động được
- [ ] Mục cần người kiểm

## Ràng buộc
- Module không được sửa, hiệu năng, tương thích
```

Có thể đặt mẫu vào `docs/specs/` của kho hoặc thân issue, rồi `@` trong tác vụ.

## Quy trình đề xuất

```text
① Soạn đặc tả (Codex hỗ trợ được, người duyệt)
② Xác nhận đặc tả → trả lời «thực thi theo đặc tả»
③ Thực thi từng bước, mỗi bước đối chiếu mục nghiệm thu
④ Đổi đặc tả phải đổi phiên bản hoặc changelog tường minh
```

Ví dụ prompt:

```text
Đọc @docs/specs/export-csv.md. Trước hết đối chiếu đặc tả để liệt kê kế hoạch triển khai và rủi ro;
Không thêm tính năng chưa ghi trong đặc tả. Đợi tôi xác nhận rồi mới viết code.
```

## Phối hợp với làm việc theo test

Mục nghiệm thu trong đặc tả nên **kiểm thử được** càng nhiều càng tốt; cái viết thành test được thì viết test trước — xem [làm việc theo test](/cases/workflows/test-driven-work/).

## Lỗi thường gặp

- Đặc tả dài như tài liệu thiết kế, ràng buộc then chốt lại tìm không ra
- Trong lúc thực thi phạm vi âm thầm phình, mà không cập nhật đặc tả
- Tiêu chí nghiệm thu mơ hồ («dùng dễ hơn») gây tranh cãi
- Đặc tả xung đột với quy ước kiến trúc trong `AGENTS.md`

## Ranh giới an toàn

- Chỉ khi đặc tả ghi «cho phép gọi API ngoài» mới ủy quyền triển khai liên quan mạng
- Xử lý trường liên quan PII phải đánh dấu trong đặc tả

## Checklist nghiệm thu

- [ ] Mục ngoài phạm vi đã loại trừ rõ
- [ ] Ít nhất 3 tiêu chí nghiệm thu kiểm được
- [ ] Trước thực thi có xác nhận của người hoặc bằng văn bản
- [ ] Thay đổi đã đồng bộ về tệp đặc tả

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương brainstorm, EPXV, làm việc theo test và `AGENTS.md` đã kiểm chứng của sổ tay; nội dung trang giới hạn ở cách làm ổn định “viết đặc tả nghiệm thu được trước, rồi thực thi theo đặc tả”.  
**Kiểm chứng gần nhất:** 2026-07-26
