---
title: Phê duyệt và Sandbox
description: Chiến lược phê duyệt yêu cầu shell, ghi đĩa và mạng trong CLI, và Sandbox hạn chế hành vi Agent thế nào.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Trong CLI, Agent có thể **đọc tệp, ghi tệp, chạy shell, có thể lên mạng** — phê duyệt và Sandbox là van an toàn giữa bạn và tự động hóa. Cấu hình sai dẫn tới: tương tác thì popup liên tục, hoặc CI không người canh thì rủi ro mất kiểm soát.

## Nội dung trang

- Popup phê duyệt đang hỏi gì, nên chọn thế nào
- Mức Sandbox ảnh hưởng tệp và mạng ra sao
- Nhóm đồng bộ chiến lược giữa CLI và `AGENTS.md` thế nào

## Phê duyệt và Sandbox mỗi thứ quản gì

Có thể nhớ:

- **Phê duyệt** hỏi bạn: «Bước này có tiếp tục không?»
- **Sandbox** hạn chế nó: «Dù tiếp tục, tối đa chạm tới đâu?»

Hai thứ phối hợp sẽ ảnh hưởng trực tiếp CLI dùng nghiêng bảo thủ hay biên mở quá rộng.

Nền khái niệm: [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/) · [Sandbox và mạng](/guide/foundations/sandbox-and-network/)

## Phê duyệt xảy ra khi nào

Điểm kích hoạt điển hình (cụ thể theo sản phẩm):

| Loại thao tác | Rủi ro | Xu hướng mặc định |
|---|---|---|
| Ghi tệp trong dự án | Trung bình | Thường cần xác nhận |
| Ghi đường dẫn ngoài dự án | Cao | Nên từ chối hoặc xác nhận chặt |
| Chạy shell | Cao | Xác nhận nội dung lệnh |
| Lên mạng / curl | Cao | Xác nhận đích và dữ liệu |
| Lời gọi công cụ MCP | Tùy máy chủ | Theo độ hạt của công cụ |

Khi tương tác bạn có tùy chọn kiểu **cho phép một lần / cho phép phiên / từ chối** (tên đổi theo phiên bản). **Đừng bấm «luôn cho phép» với lệnh chưa hiểu.**

## Mức Sandbox (khái niệm)

| Ý đồ mức | Phù hợp |
|---|---|
| Chặt / chỉ đọc | Rà mã không đáng tin, rà soát chỉ đọc trên CI |
| Chuẩn | Kho phát triển hàng ngày |
| Nới | Môi trường cá nhân đáng tin, và khớp chính sách công ty |

Sandbox có thể hạn chế:

- Phạm vi thư mục được ghi
- Có được truy cập dự án khác trong `$HOME` không
- Năng lực tiến trình con và mạng

Lối vào cấu hình: [Cấu hình CLI](/guide/cli/configuration/) · Ma trận: [Ma trận quyền](/guide/reference/permission-matrix/)

## Tương tác vs không tương tác

| Chế độ | Đặc điểm phê duyệt |
|---|---|
| Tương tác `codex` | Người có mặt, phán từng dòng được |
| Không tương tác `exec` | Không có bạn — phải thắt Sandbox trước + Prompt cố định |

CI bắt buộc đọc: [Chế độ không tương tác](/guide/cli/non-interactive-mode/) · [Mẫu phê duyệt thủ công](/cases/workflows/human-approval-patterns/)

Nguyên tắc CI khuyến nghị:

- Chỉ đọc hoặc giới hạn đường dẫn ghi
- Cấm `curl` tùy ý tải nội dung kho lên
- Thất bại thì thoát khác 0, giữ nhật ký

## Với quy tắc allow/deny

Dự án có thể khai báo «lệnh dự kiến được» trong [Quy tắc cho phép và từ chối](/guide/customization/rules/allow-and-deny-patterns/). **Quy tắc phải khớp hành vi sản phẩm thực**, nếu không Agent vẫn bị chặn hoặc ngược lại quá rộng.

## Lỗi thường gặp

- Trên máy local «tự phê duyệt mọi shell» rồi xử lý kho khách hàng
- Lỡ bấm qua lệnh kiểu `sudo`, xóa DB, sửa `~/.ssh`
- CI dùng cùng cấu hình nới như máy phát triển
- Tưởng Sandbox thay được code review — nó chống thao tác nhầm, không chống prompt injection độc hại

## Hiểu nhầm thường gặp

### Popup nhiều không nhất thiết nghĩa cấu hình sai

Nếu mới học CLI, phê duyệt hơi nhiều thường an toàn hơn — vì ép bạn hiểu từng bước đang làm gì.

Điều thật sự đáng cảnh giác: bạn bắt đầu không xem nội dung mà bấm qua — chứ không phải nó hỏi nhiều.

### Nới một lần không nghĩa về sau đều an toàn

Có người lần đầu vì tiện đã nới quy tắc rất rộng, rồi mang cùng bộ cài sang kho khác, tác vụ khác.

Vấn đề: biên an toàn phải theo rủi ro tác vụ — không nên vì lần trước tiện mà mặc định lần này cũng ổn.

## Danh sách nghiệm thu

- [ ] Giải thích được lần phê duyệt gần nhất đang làm gì
- [ ] Biết chỗ đổi mức Sandbox và mở lại phiên
- [ ] Tài liệu nhóm ghi rõ: lệnh nào cấm, lệnh nào dự kiến tự qua

Giai đoạn đầu chỉnh phê duyệt và Sandbox CLI nghiêng bảo thủ thường ổn hơn. Khi thật sự biết mình đang nới gì, từ từ nới cũng chưa muộn.

## Nguồn tham khảo

- Tài liệu an toàn và Sandbox OpenAI Codex CLI
- `17-permissions.md`, `19-security.md` của stormzhang
- KimYx0207 CX-04, CX-13
- Chuyên đề phê duyệt Sandbox freestylefly/CodexGuide

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI  
**Căn cứ kiểm chứng:** Tài liệu nhập môn CLI hiện tại trên OpenAI Help Center vẫn phân biệt biên đọc/ghi, thực thi lệnh và Sandbox/mạng theo approval modes; trang này tập trung khái niệm phê duyệt và Sandbox, khác biệt rủi ro giữa tương tác và không người canh — không viết văn bản nút hay tên chế độ cụ thể thành sự thật cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
