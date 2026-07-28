---
title: Tổng quan Hooks
description: Chèn kiểm tra, nhật ký và kiểm toán tại nút then chốt của Agent — bổ sung bảo mật và tuân thủ nhóm.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nói ngắn: Hook là tự động chèn một lớp kiểm tra hoặc ghi nhận tại nút then chốt.

**Hooks** cho phép bạn chạy logic tùy chỉnh tại nút cố định trên chuỗi thực thi Codex — ví dụ quét khóa trước khi commit, ghi lời gọi MCP, chặn lệnh nguy hiểm. Chúng bổ sung chính sách và khả năng quan sát của [Phê duyệt và Sandbox](/guide/cli/approvals-and-sandbox/).

## Nội dung

- Khác biệt giữa Hooks với Skill, MCP
- Use case nhóm điển hình
- Nguyên tắc bảo mật khi thiết kế Hook

## Vì sao nhóm dùng Hook

Dù tạm thời chưa tự viết Hook, cũng nên biết nhóm thường dùng nó để làm gì:

- Vì sao một số hành động bị chặn thêm tại điểm then chốt
- Vì sao nhóm nói"kiểm tra này không phải Skill, là Hook"
- Vì sao một số quy tắc không viết trong Prompt mà viết trên nút hệ thống

Nhiều câu"vì sao ở đây thêm một lớp kiểm tra"trong nhóm, phía sau thực ra là Hook.

Đối chiếu chọn cách: [Cách chọn phương thức mở rộng](/skills/choosing-an-extension-method/)

## Hooks làm gì

| Giai đoạn (khái niệm) | Hook có thể làm |
|---|---|
| Trước khi gọi công cụ | Từ chối lệnh chứa `rm -rf`, lộ `.env` |
| Sau khi gọi công cụ | Ghi nhật ký kiểm toán vào SIEM |
| Kết thúc phiên | Tổng hợp danh sách file thay đổi |
| Trước khi tạo PR | Kiểm tra định dạng số issue |

## Phân biệt với Skill thế nào

- **Skill**: nói với Codex"gặp loại Tác vụ này thì làm theo quy trình nào"
- **Hook**: nói với hệ thống"đến nút này thì tự kiểm trước"

Chúng giải quyết vấn đề khác nhau:

- Skill thiên về mô tả workflow
- Hook thiên về cổng kiểm soát hoặc điểm quan sát trên quy trình

Tên sự kiện và định dạng cấu hình lấy [tài liệu Hooks chính thức](https://developers.openai.com/codex) làm chuẩn.

## Khác với Skill / MCP

| | Hooks | Skill | MCP |
|---|---|---|---|
| Kích hoạt | Sự kiện hệ thống | Người dùng hoặc model gọi | Yêu cầu công cụ |
| Mục đích | Chính sách, kiểm toán | Mô tả workflow | Hệ thống ngoài |
| Ai bảo trì | Hạ tầng nền tảng/nhóm | Nhóm sản phẩm hoặc kỹ thuật | Nhà phát triển tích hợp |

## Hiểu lầm thường gặp

### 1. Hook thay được Phê duyệt và Sandbox

Hook thuộc lớp kiểm tra bổ sung, không nên xem là ranh giới bảo mật duy nhất.

### 2. Càng nhiều Hook càng an toàn

Quá nhiều Hook chậm, nặng, khó hiểu chỉ khiến quy trình nghẽn và điều tra đau hơn.

### 3. Hook không phù hợp mang logic phức tạp

Hook phù hợp hơn cho:

- Nhanh
- Xác định
- Dễ kiểm thử

Đừng bọc thêm một lớp suy luận phức tạp ở đây.

## Use case nhóm khuyến nghị

1. **Phát hiện lộ khóa**: trong diff xuất hiện mẫu AWS key thì chặn
2. **Kiểm tra header giấy phép**: file mới thiếu tuyên bố bản quyền công ty thì cảnh báo
3. **Nhật ký tuân thủ**: ai, khi nào, trên repo nào thực hiện thao tác ghi (đã ẩn danh)
4. **Khớp CI**: quy tắc Hook local và GitHub Action càng đồng nguồn càng tốt

## Khi nào phù hợp dùng Hook

Nếu một kiểm tra thỏa hai điều sau, rất phù hợp đưa vào Hook:

- Luôn xảy ra tại nút cố định
- Không nên dựa vào người mỗi lần nhớ thủ công

Ví dụ: quét thông tin nhạy cảm, kiểm tra đặt tên, ghi kiểm toán.

## Nguyên tắc thiết kế

- **Nhanh**: Hook hết thời gian sẽ kéo chậm mỗi lần gọi công cụ
- **Xác định**: tránh gọi LLM thêm trong Hook
- **Kiểm thử được**: unit test script Hook bằng đầu vào cố định
- **Tắt được**: khẩn cấp nhóm có thể bypass (kèm kiểm toán)

Góc nhìn bảo mật tham khảo lộ trình `11-team-enterprise`; người dùng cá nhân thường bắt đầu từ Hook nhật ký chỉ đọc là đủ.

Hook phù hợp đặt trên nút then chốt hệ thống để tự kiểm. Nó không phải mô tả workflow, cũng không thay được Phê duyệt.

## Lỗi thường gặp

- Script Hook bản thân có Quyền ghi mạng, thành bề mặt tấn công mới
- Trùng và mâu thuẫn với quy tắc `AGENTS.md`
- Cấu hình Hook chưa quản lý phiên bản, môi trường đồng nghiệp lệch nhau

## Checklist nghiệm thu

- [ ] Nói được một kịch bản Hook nhóm cần nhất
- [ ] Khi Hook thất bại có thông báo lỗi rõ cho developer
- [ ] Cấu hình đưa vào code review

## Nguồn tham chiếu

- Tài liệu OpenAI Codex Hooks
- stormzhang `22-hooks.md`
- KimYx0207 CX-08
- freestylefly/CodexGuide kiểm toán và tuân thủ

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI / App(tùy phiên bản)  
**Ghi chú tái Kiểm chứng:** Trang này phụ thuộc mô tả hiện trạng về năng lực Hook, nút điển hình và cách quản trị nhóm; tài liệu công khai chính thức hỗ trợ các chi tiết này chưa đủ, cần viết lại theo client hiện hành.  
**Kiểm chứng gần nhất:** 2026-07-26
