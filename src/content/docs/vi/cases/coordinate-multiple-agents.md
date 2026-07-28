---
title: Phối hợp nhiều Agent
description: Case cộng tác khám phá song song, phân công thực thi và gộp kết quả.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Phối hợp nhiều Agent

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Nhà phát triển / nhóm |
| Client | App máy tính |
| Thời gian ước tính | Tùy tác vụ |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Tách các bài toán con có thể song song giao cho nhiều Agent; người gộp kết luận.

**Tiêu chí thành công:** Mỗi Subagent có định nghĩa hoàn thành riêng, không cùng ghi đè một tệp.

## 2. Mẫu đề xuất

### Khám phá song song, người chọn

```text
Agent 1: Ưu nhược điểm và khối lượng công việc của phương án A
Agent 2: Ưu nhược điểm và khối lượng công việc của phương án B
(Sau khi bạn chọn, một Agent duy nhất thực thi)
```

### Cô lập bằng worktree

Các Agent khác nhau sửa nhánh khác nhau trên [git worktree](/guide/desktop-app/worktrees/) khác nhau; cuối cùng người gộp.

## 3. Quy tắc phối hợp (nên ghi vào AGENTS.md)

- Mỗi Agent có ranh giới thư mục rõ ràng
- Cấm `git push` song song
- Chạy CI thống nhất trước khi gộp

## 4. Liên quan

- [Phối hợp nhiều Agent](/cases/workflows/multi-agent-coordination/)
- [Subagent](/guide/agent-work/subagents/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Tài liệu kế hoạch Codex hiện tại trên OpenAI Help Center vẫn nêu App máy tính hỗ trợ nhiều Codex agents song song, hỗ trợ worktree tích hợp và ủy thác đám mây; trang này chỉ tóm tắt mô hình cộng tác “khám phá song song, cô lập ranh giới thư mục, tránh push song song, người gộp kết luận”, không phụ thuộc một luồng UI duy nhất.  
**Kiểm chứng gần nhất:** 2026-07-26
