---
title: Nền tảng dành cho nhà phát triển
description: "Tích hợp Codex vào hệ thống kỹ thuật bằng SDK, CLI chế độ không tương tác và CI/CD — dành cho nhà phát triển tích hợp."
sidebar:
  order: 50
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Nền tảng dành cho nhà phát triển** dành cho người muốn **sản phẩm hóa** Codex vào pipeline: ứng dụng tùy chỉnh, review hàng loạt, cổng phát hành, cổng thông tin nội bộ. Việc hàng ngày kiểu «viết một Prompt để sửa bug» vẫn bắt đầu từ [Bắt đầu nhanh](/guide/getting-started/).

Chương này không nói về cách dùng Codex hàng ngày, mà về cách nối Codex vào hệ thống của bạn.

Nó nghiêng về các tình huống như:

- Muốn chạy Tác vụ tự động trong CI
- Muốn gắn Codex vào backend hoặc công cụ nội bộ
- Muốn biến Codex thành một phần quy trình làm việc của đội

## Chương này sẽ nói gì

- Ranh giới giữa nền tảng nhà phát triển và sổ tay người dùng cuối
- Kiến trúc tích hợp điển hình
- Điều hướng chương và lộ trình

## Phân công với sổ tay sản phẩm

| Câu hỏi của người đọc | Đi đâu |
|---|---|
| Cách chạy `codex` trong terminal | [Sổ tay sản phẩm CLI](/guide/cli/) |
| Cách exec review trong CI | [Chế độ không tương tác](/guide/cli/non-interactive-mode/) + CI trong chương này |
| Cách nhúng Agent vào App nội bộ | [Tổng quan SDK](/guide/developer-platform/sdk-overview/) |
| Mô hình quyền và bảo mật | [Mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/) |

## Kiến trúc điển hình (khái niệm)

```text
Hệ thống của bạn (CI / nền tảng nội bộ / SaaS)
        ↓ API hoặc CLI
Codex (mô hình + công cụ + chính sách)
        ↓
Nhà cung cấp Git / ticket / kho artifact
```

## Nguyên tắc thiết kế

1. **Idempotent và có thể thử lại**: review cùng một PR nhiều lần nên so sánh được
2. **Quyền tối thiểu**: token CI chỉ đọc hoặc giới hạn theo repo
3. **Có thể quan sát**: giữ phiên bản Prompt, mô hình, artifact Diff
4. **Phân công người–máy**: bình luận tự động ≠ merge tự động

## Điều hướng chương

| Chủ đề | Trang |
|---|---|
| SDK | [Tổng quan SDK](/guide/developer-platform/sdk-overview/) |
| Không tương tác | [codex exec](/guide/developer-platform/non-interactive/codex-exec/) · [Script và pipeline](/guide/developer-platform/non-interactive/scripts-and-pipelines/) · [Đầu ra có cấu trúc](/guide/developer-platform/non-interactive/structured-output/) · [Mã thoát và thử lại](/guide/developer-platform/non-interactive/exit-codes-and-retries/) |
| Webhooks | [Tổng quan](/guide/developer-platform/webhooks/overview/) |
| CI/CD | [Tự động hóa review mã](/guide/developer-platform/ci-cd/code-review-automation/) |

Thêm về `codex-sdk/`, `app-server/`, `architecture-patterns/` xem [dàn ý chương](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md).

## Hiểu nhầm thường gặp

### 1. Tôi có bắt buộc học chương này mới thật sự biết dùng Codex?

Nếu hiện tại bạn chỉ muốn dùng được Codex trước, chương này có thể đọc sau.

### 2. Nó liên hệ thế nào với CLI / App / IDE?

Có thể hiểu như sau:

- **App / CLI / IDE**: lối vào để bạn hoặc đội dùng Codex trực tiếp
- **Nền tảng nhà phát triển**: bạn nhúng Codex vào hệ thống và quy trình khác

### 3. Lần đầu đọc chương này, trang nào đáng xem nhất?

Nếu chỉ cần nắm khái niệm, ưu tiên [Tổng quan SDK](/guide/developer-platform/sdk-overview/) và mối quan hệ với [chế độ không tương tác](/guide/cli/non-interactive-mode/).

Chương nền tảng nhà phát triển nói về «cách nối Codex vào hệ thống». Lần đầu dùng Codex thực tế, hãy đọc nội dung nhập môn trước.

## Nguồn tham chiếu
- Tài liệu chính thức OpenAI Codex API / SDK
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** API / CLI / Cloud  
**Cơ sở kiểm chứng:** Đã đối chiếu chéo với cấu trúc chương developer-platform hiện tại, các lối vào điều hướng và các trang CLI/CI/SDK liên quan trong kho này; trang chỉ làm rõ phân công ổn định rằng nền tảng nhà phát triển hướng tới tích hợp kỹ thuật, không tuyên bố tham số hay hành vi runtime cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
