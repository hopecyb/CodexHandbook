---
title: AGENTS.md là gì
description: Tệp chỉ thị bền cấp dự án — «hợp đồng cộng tác» cho Codex, không phải bách khoa kiến trúc.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

`AGENTS.md` là **chỉ thị dự án Markdown** đặt trong kho (hoặc thư mục con); Codex đọc khi vào dự án đó để khớp phong cách mã hóa, yêu cầu kiểm thử, quy chuẩn commit và vùng cấm.

Có thể hiểu `AGENTS.md` là sổ hướng dẫn “dự án này muốn Codex phối hợp thế nào”.

Nó không phải tài liệu kiến trúc nâng cao, cũng không phải sổ tay đầy đủ cho nhân viên mới, mà là quy tắc cộng tác dự án cho Codex.

## Một khái niệm cốt lõi

Coi nó là **bản rút gọn sổ onboarding đồng nghiệp mới**: chỉ viết «trong kho này làm việc thế nào», không viết lịch sử phát triển công ty.

| Phù hợp viết vào AGENTS.md | Không phù hợp viết |
|---|---|
| Cách chạy kiểm thử, lint, build | Tài liệu API đầy đủ (nên liên kết tài liệu chính thức) |
| Ước định thư mục, phong cách đặt tên | Hàng nghìn dòng quyết định thiết kế lịch sử |
| Mục cấm (như đừng sửa `main`, đừng commit khóa) | Nhu cầu tạm khác nhau mỗi tác vụ |
| Thông điệp commit, danh sách kiểm tra PR | Sở thích cá nhân không liên quan mã |

## Cách làm tối thiểu dùng được

Tạo `AGENTS.md` ở gốc kho:

```md
# Chỉ thị dự án

## Build và kiểm thử
- Cài: `pnpm install`
- Kiểm thử: `pnpm test` (sau khi sửa logic phải chạy)
- Kiểm kiểu: `pnpm typecheck`

## Phong cách mã
- Dùng TypeScript chế độ nghiêm
- Component mới đặt trong `src/components/`, tên tệp PascalCase

## Cấm
- Đừng sửa `pnpm-lock.yaml` trừ khi dependency đổi
- Đừng commit `.env` hoặc API key
- Chưa xác nhận đừng chạy `git push`

## Định nghĩa hoàn thành
- Kiểm thử liên quan qua
- Không lỗi lint mới
- Trong mô tả PR nói rõ bước kiểm chứng
```

Sau khi lưu, trong tác vụ mới chỉ cần viết **khác biệt lần này**, ví dụ: «Sửa vấn đề bố cục trang đăng nhập trên Safari, nghiệm thu theo AGENTS.md.»

## Hiểu lầm thường gặp

### 1. Mỗi lần tôi còn phải nói lại các quy tắc này thủ công?

Thường không cần.  
Đó chính là một ý nghĩa của `AGENTS.md`:
đặt **quy tắc dự án ổn định không đổi** vào đó, tránh mỗi lần mở tác vụ mới phải kể lại.

### 2. Có phải “tôi viết rồi, Codex chắc chắn làm đúng 100%”?

`AGENTS.md` rất quan trọng, nhưng vẫn phải làm việc cùng:

- Yêu cầu rõ trong tác vụ lần này của bạn
- Cơ chế quyền và phê duyệt của sản phẩm
- Sandbox, mạng và chiến lược nhóm

Nói chính xác hơn, nó giúp khớp, nhưng không phải bộ ép buộc vạn năng.

### 3. Nếu tôi không phải lập trình viên, còn cần quan tâm tệp này không?

Cần hiểu khái niệm cơ bản.  
Dù bạn không tự viết mã, miễn bạn để Codex liên tục xử lý một dự án, `AGENTS.md` vẫn giúp giảm giải thích lặp và lệch hướng.

## Đặt ở đâu

| Vị trí | Phạm vi |
|---|---|
| `AGENTS.md` gốc kho | Mặc định hiệu lực cả dự án |
| `AGENTS.md` thư mục con | Thư mục đó và đường dẫn con (monorepo thường gặp) |
| Mô tả cấp người dùng | Dùng cấu hình cá nhân hoặc sở thích toàn cục; đừng trộn với chỉ thị dự án |

Xử lý phạm vi và xung đột xem [Phạm vi và ưu tiên](/guide/customization/agents-md/scope-and-precedence/).

## Khác với Skill và lệnh slash

| Cơ chế | Bản chất | Mục đích điển hình |
|---|---|---|
| AGENTS.md | Quy tắc dự án bền, thụ động | Phong cách, kiểm thử, vùng cấm |
| Skill | Gói quy trình tái sử dụng (`SKILL.md`) | Danh sách phát hành, quy trình rà soát chuyên biệt |
| Lệnh slash | Lối tắt bạn chủ động kích hoạt | `/review`, quy trình một lần |

Quy tắc dự án dùng `AGENTS.md`; **bộ bước lặp được, chia sẻ được** phù hợp hơn làm [Skill](/skills/overview/).

## Phán đoán nên viết ở đâu

Nếu chưa chắc một câu nên viết ở đâu, dùng quy tắc:

- **Quy tắc này dài hạn đều đúng**: phù hợp hơn viết vào `AGENTS.md`
- **Chỉ là yêu cầu đặc biệt của tác vụ lần này**: viết trong Prompt tác vụ hiện tại
- **Đây là bộ bước tái sử dụng lặp được**: cân nhắc làm Skill

Ví dụ:

- “Kho này thống nhất dùng `pnpm test` để kiểm chứng” -> phù hợp `AGENTS.md`
- “Lần này chỉ sửa trang đăng nhập, đừng đụng trang đăng ký” -> phù hợp viết trong tác vụ hiện tại
- “Trước mỗi lần phát hành đều chạy cùng một quy trình kiểm” -> phù hợp hơn làm Skill

## Lỗi thường gặp

- Tệp quá dài, mô hình chỉ đọc nửa đầu — **đặt ràng buộc cứng trong 30 dòng đầu**
- Viết chỉ thị rủi ro cao kiểu «mãi tự push», xung đột với [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/)
- Nhóm không ai duy trì, tài liệu không khớp lệnh script thật

## Ranh giới an toàn

`AGENTS.md` **không thay** Sandbox và phê duyệt. Dù viết «có thể tùy ý chạy lệnh», sản phẩm vẫn có thể yêu cầu bạn xác nhận; chiến lược quản trị nhóm có thể siết thêm.

`AGENTS.md` chịu trách nhiệm nói với Codex “dự án này thường làm việc thế nào”, không thay bạn mô tả lần này cụ thể cần làm gì.

## Nguồn tham khảo
- Mô tả ngữ cảnh dự án OpenAI Codex
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với mô tả công khai hiện tại của OpenAI Developers về ngữ cảnh dự án, ranh giới tác vụ và ràng buộc phê duyệt/Sandbox; nội dung trang giới hạn ở mục đích, ranh giới và cách viết thường gặp của `AGENTS.md`, không gồm chi tiết ưu tiên bắt buộc chưa chứng minh.  
**Kiểm chứng gần nhất:** 2026-07-26
