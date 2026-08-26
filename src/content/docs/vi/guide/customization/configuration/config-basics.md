---
title: Cơ bản cấu hình
description: Vị trí tệp cấu hình Codex, mục thường dùng và nhập môn cài đặt phê duyệt/Sandbox/mô hình.
locale: vi
source_locale: zh-CN
source_revision: 6c67645
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Tệp cấu hình để bạn trên máy hoặc trong dự án **thống nhất hành vi Codex**, không cần mỗi phiên lặp lại cài mô hình, mức phê duyệt hoặc chiến lược Sandbox.

## Nội dung trang này

- Cấu hình đặt ở đâu, cấp dự án và cấp người dùng chồng thế nào
- Mục nào hay sửa nhất: mô hình, phê duyệt, Sandbox, thư mục làm việc mặc định
- Ranh giới với `AGENTS.md`: cấu hình quản «công tắc năng lực», AGENTS quản «dự án viết mã thế nào»

## Cấu hình thật sự đang quản gì

Cấu hình gần hơn với **thói làm việc mặc định** của Codex.

Ví dụ:

- Mặc định dùng mô hình nào
- Mặc định siết ranh giới an toàn chặt bao nhiêu
- Mặc định làm việc trong thư mục nào

Nó không quản yêu cầu tạm của một tác vụ, mà là hầu hết trường hợp mặc định bắt đầu làm việc thế nào.

## Tầng cấu hình

| Tầng | Vị trí điển hình | Nội dung |
|---|---|---|
| Cấp người dùng | Cấu hình dưới `~/.codex/` (tên tệp cụ thể lấy tài liệu chính thức) | Mô hình mặc định, thói phê duyệt cá nhân |
| Cấp dự án | Đoạn cấu hình trong kho hoặc tệp dự án liên quan `codex` | Chiến lược Sandbox/công cụ nhóm chia sẻ |
| Quản trị | Tổ chức phát hành | Mục bắt buộc cá nhân không phủ được |

**Sự kiện dễ thay đổi** (đường dẫn, tên trường, khóa TOML) lấy [tài liệu OpenAI Codex](https://developers.openai.com/codex) làm chuẩn; trang này mô tả khái niệm và cách quyết định.

## Hiểu lầm thường gặp

### Cấu hình không phải càng nhiều càng chuyên nghiệp

Nhiều người lần đầu tiếp xúc tệp cấu hình, bản năng muốn cấu hết mọi thứ cấu được.

Nhưng với người mới, thường cố định vài cài đặt tần suất cao là đủ, ví dụ:

- Mô hình mặc định
- Chiến lược phê duyệt/Sandbox mặc định
- Thư mục làm việc mặc định

Cố định các mục này trước thường phù hợp hơn nghiên cứu hết mọi trường một lần.

### Cấu hình không bằng quy tắc dự án

Nếu một yêu cầu là “mọi cộng tác viên đều nên tuân”, thường phù hợp viết vào `AGENTS.md` hoặc tài liệu dự án hơn chỉ giữ trong cấu hình máy bạn.

Ví dụ:

- Trước commit chạy những kiểm nào
- Thư mục nào không được sửa
- Loại tác vụ nào không được tự push

Những thứ này không nên chỉ dựa cấu hình cá nhân duy trì.

## Ý định cấu hình hay sửa

### Mô hình và suy luận

- Phát triển hàng ngày: cân bằng tốc độ và chất lượng
- Tái cấu trúc phức tạp: mô hình suy luận mạnh hơn (nếu gói hỗ trợ)
- Script/CI: khóa mô hình để tái hiện dễ hơn

Nền khái niệm: [Mô hình và suy luận](/vi/guide/foundations/models-and-reasoning/)

### Phê duyệt và Sandbox

| Ý định | Hướng cấu hình |
|---|---|
| Người mới/kho không tin | Phê duyệt nghiêm hơn, hạn chế mạng và phạm vi ghi đĩa |
| Dự án cá nhân đáng tin | Có thể giảm ngắt trong điều kiện an toàn |
| Kho doanh nghiệp | Tuân chiến lược quản trị, không tự nới |

Nền khái niệm: [Quyền và phê duyệt](/vi/guide/foundations/permissions-and-approvals/), [Sandbox và mạng](/vi/guide/foundations/sandbox-and-network/)

### Nhất quán CLI và App

Cùng tài khoản trên CLI và App máy tính nên theo đuổi **cùng đường cơ sở an toàn**, tránh thói đôi chuẩn «CLI full quyền, App nghiêm».

## Cách làm tối thiểu dùng được

1. Đọc chương «Configuration» chính thức, xác nhận đường dẫn tệp phiên bản hiện tại
2. Chỉ sửa một mục: ví dụ chế độ Sandbox mặc định, quan sát một tuần rồi chỉnh
3. Mục nhóm chia sẻ viết vào tài liệu kho; sở thích cá nhân giữ máy cục bộ
4. Trong `AGENTS.md` viết «khuyến nghị dùng Codex với dự án này thế nào», chứ không sao chép cả cấu hình

## Phán đoán nên đặt ở đâu

Nếu chưa chắc một thứ nên vào cấu hình, `AGENTS.md` hay Prompt tác vụ, xem các câu hỏi:

1. Đây có phải thói mặc định hầu hết tác vụ đều dùng không
2. Đây có phải sở thích chỉ mình tôi quan tâm không
3. Đây có phải quy tắc cả dự án đều nên cùng tuân không

Hầu hết trường hợp:

- Thói mặc định → vào cấu hình
- Sở thích cá nhân → giữ tầng cá nhân
- Đồng thuận nhóm → vào kho

## Quan hệ với chuyên đề CLI

- Cách dùng tương tác: [Chế độ tương tác CLI](/vi/guide/cli/interactive-mode/)
- Không tương tác và script: [Chế độ không tương tác](/vi/guide/cli/non-interactive-mode/)
- Mở rộng chi tiết cấu hình: [Cấu hình CLI](/vi/guide/cli/configuration/) · [Tham chiếu mục cấu hình](/vi/guide/reference/configuration-reference/)

## Lỗi thường gặp

- Để đỡ việc tắt hết phê duyệt, lại mở dự án trong thư mục dữ liệu production
- Viết API key vào tệp cấu hình rồi commit Git
- Khóa cấu hình tài liệu viết không khớp phiên bản cài (nâng CLI rồi chưa rà lại)

## Ranh giới an toàn

Tệp cấu hình có thể chứa **danh sách trắng đường dẫn, chiến lược mạng, danh sách máy chủ MCP** — trước khi đổi hãy tưởng tượng «Prompt độc hại có lợi dụng cấu hình này không». Môi trường doanh nghiệp nên do quản trị viên phát hành; cá nhân đừng vòng chiến lược quản trị.

Cấu hình phù hợp hơn đặt những mục mặc định bạn gần như mỗi lần đều chọn lại; không cần nhét mọi quy tắc vào tệp cấu hình.

## Nguồn tham khảo
- Tài liệu cấu hình OpenAI Codex
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / App  
**Căn cứ kiểm chứng:** Tài liệu cấu hình hiện tại của OpenAI Help Center vẫn dùng trực tiếp `~/.codex/config.toml` và `~/.codex/.env`, và nói App máy tính/IDE có thể cần khởi động lại mới đọc các cài đặt này; nội dung trang đồng thời tránh khóa tên dễ thay đổi, chỉ giữ khung ổn định “cấu hình cấp người dùng, chiến lược quản trị, ý định cấu hình thường gặp như mô hình/phê duyệt/Sandbox”.  
**Kiểm chứng gần nhất:** 2026-07-26
