---
title: Cá nhân hóa và cấu hình dự án
description: Sở thích cá nhân, AGENTS.md, cấu hình và ưu tiên quy tắc — để Codex lâu dài làm việc theo cách của bạn.
sidebar:
  order: 40
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Codex không chỉ dựa vào “lần này hỏi thế nào”, mà còn dựa vào **cấu hình bền** để nhớ ước định của bạn và nhóm. Chương này chủ yếu phân biệt yêu cầu nào nên giữ trong hội thoại, yêu cầu nào nên hạ xuống dự án.

Nếu bạn đã bắt đầu lặp lại cùng một câu, ví dụ “đừng sửa thư mục này”, “chạy kiểm thử trước”, “mặc định dùng mô hình này”, chương này đang xử lý loại vấn đề đó.

## Nội dung

- Sở thích cá nhân, mô tả dự án, quy tắc nhóm, Prompt tạm — **ai phủ ai**
- `AGENTS.md` nên viết gì, không nên viết gì
- Tệp cấu hình và chiến lược phê duyệt/Sandbox quản ở tầng nào

## Phù hợp ai

| Độc giả | Đề xuất đọc trước |
|---|---|
| Vừa chạy thông tác vụ đầu | [Mô tả dự án](/guide/customization/project-instructions/) |
| Muốn cố định quy chuẩn cộng tác trong kho | [AGENTS.md là gì](/guide/customization/agents-md/what-is-agents-md/) |
| Muốn thống nhất hành vi CLI/App | [Cơ bản cấu hình](/guide/customization/configuration/config-basics/) |

## Chương này đang xử lý gì

Nhiều người sau một thời gian dùng Codex gặp cùng một loại vấn đề: quy tắc viết không ít, nhưng luôn cảm giác chưa hoàn toàn hiệu lực, hoặc chỗ khác nhau xung đột nhau.

Chương này chủ yếu thảo luận cách đặt quy tắc cộng tác theo tầng:

- Cái nào là thói quen cá nhân của tôi
- Cái nào là quy tắc kho chia sẻ
- Cái nào là ranh giới cứng cấp tổ chức
- Cái nào chỉ là yêu cầu tạm của tác vụ lần này

Khi phân tầng không rõ, dễ xuất hiện “viết nhiều nhưng lúc cần hiệu lực thì không hiệu lực”.

## Phân tầng thường gặp (khái niệm)

Hiểu phân tầng giúp tránh bối rối «đã viết quy tắc mà không hiệu lực». Client khác nhau, năng lực quản trị tổ chức và hiện thực phiên bản có thể khác, nhưng thường có thể hiểu trước theo vài tầng dưới:

```text
1. Chiến lược quản trị tổ chức/nhóm (nếu đã phát hành)
2. AGENTS.md / chỉ thị dự án cấp dự án (trong kho)
3. Cấu hình và sở thích cấp người dùng (máy cục bộ ~/.codex v.v.)
4. Yêu cầu tạm và tham chiếu @ trong tác vụ hiện tại
```

**Nguyên tắc:** càng gần «bắt buộc tổ chức» càng không nên bị tác vụ đơn nới lỏng tùy ý; càng gần «tác vụ hiện tại» càng linh hoạt, cũng càng dễ mất khi phiên kết thúc. Precedence cụ thể lấy client hiện tại và tài liệu chính thức làm chuẩn.

## Hiểu lầm thường gặp

### 1. Chỉ cần tôi viết được Prompt là không cần cấu hình dài hạn?

Tác vụ ngắn có lẽ tạm đủ, nhưng một khi bắt đầu cộng tác liên tục, bạn sẽ càng muốn hạ yêu cầu lặp xuống.

### 2. Mọi quy tắc nhét vào `AGENTS.md` là được?

Cũng sai.  
Có thứ phù hợp hơn đặt ở:

- Sở thích cá nhân
- Tệp cấu hình
- Chiến lược quản trị tổ chức
- Prompt tác vụ hiện tại

### 3. Cấu hình không phải càng nhiều càng tốt

Cấu hình quá phân tán, quy tắc quá dài, tầng quá loạn, ngược lại dễ để người và công cụ đều không rõ nên nghe ai.

## Điều hướng chương này

| Chủ đề | Trang |
|---|---|
| AGENTS.md | [Tổng quan](/guide/customization/agents-md/what-is-agents-md/) · [Phạm vi và ưu tiên](/guide/customization/agents-md/scope-and-precedence/) · [Viết chỉ thị dự án tốt](/guide/customization/agents-md/writing-effective-instructions/) |
| Chỉ thị dự án | [Mô tả dự án](/guide/customization/project-instructions/) |
| Bộ nhớ | [Bộ nhớ và ngữ cảnh bền](/guide/customization/memories-and-persistent-context/) |
| Chọn cơ chế | [Chọn cơ chế phù hợp](/guide/customization/choosing-the-right-mechanism/) |
| Tệp cấu hình | [Cơ bản cấu hình](/guide/customization/configuration/config-basics/) · [Profile](/guide/customization/configuration/profiles/) |
| Sở thích cá nhân | [Sở thích cá nhân](/guide/customization/personal-preferences/) |
| Quy tắc | [Cho phép và từ chối](/guide/customization/rules/allow-and-deny-patterns/) · [Quy tắc lệnh](/guide/customization/rules/command-rules/) · [Chiến lược nhóm](/guide/customization/rules/team-rules/) |
| Ví dụ | [AGENTS.md trong Monorepo](/guide/customization/examples/monorepo-agents-md/) |

Chi tiết Rules đã bắt đầu; các trang cấu hình chi tiết hơn sẽ bổ sung theo module tùy chỉnh.

## Thứ tự đề xuất

Lần đầu hệ thống hóa quy tắc cộng tác Codex, có thể theo thứ tự:

1. Gom quy tắc dự án trước
2. Rồi bổ sung `AGENTS.md`
3. Rồi tách sở thích cá nhân
4. Cuối cùng mới xử lý tệp cấu hình và kiểm soát quy tắc chi tiết hơn

Ổn hơn so với lao vào sửa đống khóa cấu hình ngay.

Quy tắc không cần nhiều; đặt đúng chỗ quan trọng hơn.

## Lỗi thường gặp

- Nhét tài liệu kiến trúc dài vào `AGENTS.md`, ràng buộc then chốt bị nhấn chìm
- Trong hội thoại lặp lại quy chuẩn nhóm mà không commit vào kho, trải nghiệm cộng tác viên không nhất quán
- Máy cá nhân nới Sandbox, nhưng trong kho chia sẻ giả định đồng đội cũng có cùng quyền

## Danh sách nghiệm thu

- [ ] Nói được ưu tiên của bốn tầng cấu hình
- [ ] Trong kho có một `AGENTS.md` ngắn (hoặc chỉ thị dự án tương đương)
- [ ] Thao tác nhạy cảm vẫn đi phê duyệt, không trông chờ quy tắc chữ «doạ» mô hình

## Nguồn tham khảo

- Tài liệu OpenAI Codex: [https://developers.openai.com/codex](https://developers.openai.com/codex)
- Tham khảo cấu trúc thực hành cộng đồng: chuyên đề AGENTS.md freestylefly/CodexGuide, stormzhang/ai-coding-guide `11-agents-md.md`

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Tài liệu trung tâm trợ giúp và cấu hình liên quan Codex hiện tại của OpenAI vẫn khẳng định tồn tại phân tầng cấu hình cấp người dùng `~/.codex`, năng lực quản trị cấp tổ chức và mô tả cộng tác cấp dự án; trang này đã viết lại “ưu tiên” thành mô tả phân tầng thường gặp thận trọng hơn, tránh viết chi tiết hiện thực cụ thể thành quy tắc tuyệt đối.  
**Kiểm chứng gần nhất:** 2026-07-26
