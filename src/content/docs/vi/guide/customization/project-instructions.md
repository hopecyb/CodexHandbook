---
title: Mô tả dự án
description: Ngữ cảnh cấp dự án ngoài AGENTS.md — phân công README, docs và tham chiếu hội thoại.
locale: vi
source_locale: zh-CN
source_revision: e2c79fe
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

«Mô tả dự án» là **ngữ cảnh tĩnh** để Codex hiểu kho, không giới hạn một định dạng tệp.

## Nội dung

- Ngoài `AGENTS.md`, thông tin cấp dự án còn nên đặt ở đâu
- README, docs, tệp script phân công thế nào
- Thông tin nào phù hợp viết vào kho, thông tin nào chỉ phù hợp giữ trong hội thoại hiện tại

## Thành phần ngữ cảnh dự án

| Nguồn | Vai trò |
|---|---|
| `AGENTS.md` | Quy tắc cộng tác và lệnh (thẩm quyền: loạt AGENTS chương này) |
| `README.md` | Dự án là gì, khởi động thế nào |
| `docs/` | Kiến trúc, ADR, sổ vận hành |
| Dependency và script | Sự thật thực thi được như `package.json`, `Makefile` |

Codex sẽ kết hợp công cụ đọc các tài liệu này; then chốt là để **sự thật duy nhất**, lệnh khởi động README viết phải chạy được.

## Cách làm cơ bản

1. Đảm bảo `README.md` gốc có bốn đoạn: mục đích, cài đặt, phát triển, kiểm thử
2. Hạ **mô tả lặp lại cho Codex** xuống `AGENTS.md`
3. Trong tác vụ dùng `@` chỉ tệp cụ thể, đừng dán cả bài:

```text
Theo yêu cầu kiểm thử của @AGENTS.md, sửa null pointer trong @src/auth/login.ts.
Thiết kế liên quan xem @docs/auth-flow.md
```

## Vì sao quan trọng

Tình huống thường gặp gồm:

- README viết một bộ
- docs viết bộ khác
- Lệnh thật sự chạy được giấu trong `package.json`

Lúc đó không chỉ người rối, Codex cũng rối. Trọng tâm là để “sự thật dự án” trong kho càng tập trung, càng nhất quán càng tốt.

## Phân công với «ngữ cảnh hội thoại»

- **Mô tả dự án**: tương đối ổn định trong vài tháng
- **Ngữ cảnh hội thoại**: mục tiêu lần này, ràng buộc, kết luận giữa chừng

Trong tác vụ dài nếu thấy một quy tắc bị nhắc lặp, nên **ghi lại** vào `AGENTS.md` hoặc `docs/`, chứ không sao chép dán trong mười thread. Xem [Giữ ngữ cảnh tập trung](/vi/guide/context/keep-context-focused/).

## Lỗi thường gặp

- README lỗi thời, Codex thao tác theo lệnh sai
- Nhét mọi tài liệu vào một `CONTEXT.md` khổng lồ, không ai duy trì
- Thông tin nhạy cảm đặt trong mô tả kho công khai

## Hiểu lầm thường gặp

### 1. Chỉ cần tôi giải thích rõ trong hội thoại, tài liệu kho loạn một chút cũng được

Ngắn hạn có lẽ tạm được, dài hạn càng loạn.

Vì lần sau bạn còn phải giải thích lại, người khác cũng không thấy lần này bạn đã nói gì.

### 2. `AGENTS.md` giải quyết mọi vấn đề mô tả dự án

Cũng không.

`AGENTS.md` phù hợp hơn quy tắc và ràng buộc cộng tác, không phù hợp thay giới thiệu dự án, nền kiến trúc và hướng dẫn vận hành đầy đủ.

### 3. Tài liệu càng nhiều càng tốt

Quan trọng hơn là:

- Phân công rõ
- Nội dung nhất quán
- Lệnh then chốt chạy được

## Gợi ý phân công

- `README.md`: dự án là gì, khởi động thế nào, kiểm thử thế nào
- `AGENTS.md`: quy tắc cộng tác, vùng cấm, định nghĩa hoàn thành
- `docs/`: nền dài hơn, kiến trúc, mô tả quy trình
- Script và tệp cấu hình: sự thật thực thi được

Trọng tâm mô tả dự án là để Codex và người dễ tìm cùng một “sự thật kho”. Số lượng tài liệu bản thân không phải trọng tâm.

## Danh sách nghiệm thu

- [ ] Người (hoặc Codex) clone kho mới có thể chạy thông kiểm thử theo README + AGENTS.md
- [ ] Prompt tác vụ lấy tham chiếu @ làm chính, tránh lặp nền dài

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với mô tả công khai hiện tại của OpenAI Developers về ngữ cảnh dự án và cách cộng tác tệp, cùng các chương ngữ cảnh dự án, tệp và quy trình đã kiểm chứng trong sổ tay; nội dung trang chỉ giữ nguyên tắc phân công ổn định giữa README, `AGENTS.md`, `docs/` và hội thoại tác vụ.  
**Kiểm chứng gần nhất:** 2026-07-26
