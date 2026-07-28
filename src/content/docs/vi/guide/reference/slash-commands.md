---
title: Lệnh gạch chéo và lối vào nhanh
description: "Lệnh `/` và gọi Skill `$` — tra cứu nhanh hướng học, không phải sổ tay tham số đầy đủ."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Lệnh gạch chéo không phải jargon cần thuộc lòng — chúng là lối vào nhanh có tên bạn chủ động gọi.

Chúng thường nhảy vào một chế độ cố định hoặc luồng tích hợp. Lệnh gạch chéo (`/command`) liên quan tới gọi Skill `$name` của [Skill](/skills/overview/) nhưng không giống hệt. Danh sách **đổi theo sản phẩm và phiên bản** — dùng autocomplete `/` trong client và tài liệu chính thức trước khi dựa vào tên.

## Phân chia khái niệm

| Lối vào | Ai gọi | Công dụng điển hình |
|---|---|---|
| `/review` v.v. | Bạn gõ `/` | Luồng tích hợp hoặc cấu hình cố định |
| `$skill-name` | Bạn hoặc mô hình | Skill dự án hoặc người dùng |
| Ngôn ngữ tự nhiên | Bạn | Tác vụ chung |

## Ba cách nói đơn giản

- `/command`: bạn chọn phím tắt trong chat
- `$skill`: bạn hoặc mô hình nêu tên một Skill
- Ngôn ngữ tự nhiên: bạn nêu nhu cầu; mô hình quyết định cách làm

Nếu bạn biết luồng muốn dùng, `/command` trực tiếp hơn.

## Nó là gì

- Không phải lệnh terminal
- Không phải từ vựng bí mật
- Hãy tưởng tượng «nút phím tắt trong chat»

Phù hợp khi:

- Bạn biết luồng muốn dùng
- Không muốn giải thích lại cùng ý định mỗi lần

## Hiểu nhầm thường gặp

### 1. Lệnh gạch chéo không phải lệnh shell

Chúng là phím tắt chat — không phải `codex ...` trong terminal.

### 2. Danh sách không cố định mãi

Lệnh có sẵn khác theo sản phẩm, phiên bản và môi trường — **autocomplete trong môi trường của bạn** thắng thuộc lòng.

### 3. Gạch chéo không lách phê duyệt và Sandbox

Nếu luồng ghi tệp, chạy lệnh hoặc dùng mạng, chính sách vẫn áp dụng.

### 4. Bạn có thể dùng tốt Codex mà không cần lệnh gạch chéo

Ngôn ngữ tự nhiên phủ hầu hết công việc. Lệnh gạch chéo tăng tốc luồng đã quen khi đã thoải mái.

## Phân loại phổ biến (minh họa)

Tên có thể thêm hoặc bỏ theo phiên bản — **chỉ phân loại học**:

### Phiên và chế độ

- Chuyển chế độ kế hoạch, nén ngữ cảnh, xem trợ giúp
- Liên hệ [Lập kế hoạch](/guide/agent-work/planning/)

### Review và chất lượng

- Review Diff hoặc PR hiện tại
- Với [Xem xét Diff](/guide/quality/review-diffs/)

### Workspace và Git

- Trạng thái, nháp thông điệp commit (bạn vẫn xác nhận commit)
- Theo [Mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/)

### Mở rộng

- Cài hoặc liệt kê Skills (ví dụ `skill-installer` nếu có)

## Ghi chú dùng

1. **Gõ `/` trước** — xem môi trường hỗ trợ gì; đừng thuộc danh sách cũ
2. Luồng đội → **Skill + tài liệu** để kiến thức không mang tính bộ lạc
3. Ghi do gạch chéo kích hoạt vẫn chịu Sandbox và phê duyệt

## Thử

1. Gõ `/`
2. Xem có gì
3. Chọn một lệnh bạn hiểu tên và mục tiêu

## Đường lần đầu

1. `/` để xem đề nghị
2. Thử một lệnh rõ
3. Ghi chú: đổi chế độ vs chạy quy trình làm việc
4. Với luồng đội lặp lại, cân nhắc Skill

Cho thấy phân chia: gạch chéo = lối vào nhanh, Skill = luồng tái sử dụng bền vững.

## vs lệnh CLI

| | `/` trong chat | Terminal `codex …` |
|---|---|---|
| Ngữ cảnh | Phiên hiện tại và tệp @ | Thư mục `--cwd` |
| Phù hợp | Khám phá tương tác | Script, CI |

Lệnh gạch chéo là phím tắt chat — những gì môi trường thực sự có thắng thuộc tên.

Lệnh con CLI: [Chế độ tương tác CLI](/guide/cli/interactive-mode/) và [Chế độ không tương tác](/guide/cli/non-interactive-mode/). Bảng tham số đầy đủ: [Tham chiếu lệnh CLI](/guide/reference/commands/).

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Ghi chú đối chiếu:** Trung tâm `/review`, phân loại gạch chéo và quan hệ `$skill` — khả dụng, đặt tên và hành vi đổi nhanh; thiếu danh sách lệnh và tài liệu hành vi chính thức hiện hành thì `outdated` phù hợp.  
**Kiểm chứng gần nhất:** 2026-07-26
