---
title: Phối hợp nhiều Agent
description: Khám phá song song, phân công thực thi và gộp kết quả — khi nào tách, cách nghiệm thu.
locale: vi
source_locale: zh-CN
source_revision: e4d0f69
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Nhiều Agent phù hợp bài toán con song song được, ít gắn kết; không phù hợp cùng sửa một tệp khi không ai điều phối.

## Khi nào tách

| Phù hợp | Không phù hợp |
|---|---|
| Song song khảo sát style frontend + hợp đồng API backend | Hai người sửa cùng một hàm |
| Một chạy test, một viết tài liệu | Trạng thái dùng chung có thể đổi mà không khóa |
| Khám phá nhiều phương án triển khai | Phụ thuộc tuần tự mạnh chưa làm rõ |

Năng lực sản phẩm xem [Agent song song](/vi/guide/desktop-app/parallel-agents/), [Subagent](/vi/guide/agent-work/subagents/).

## Mẫu cộng tác

### Mẫu A: Khám phá song song, người chọn

```text
Agent 1: Ưu nhược điểm và khối lượng công việc của phương án A
Agent 2: Ưu nhược điểm và khối lượng công việc của phương án B
Bạn: Chọn một, rồi mở một Agent duy nhất thực thi
```

### Mẫu B: Pipeline

```text
Agent khám phá → xuất kế hoạch → Agent thực thi (Thread mới, kèm tóm tắt kế hoạch)
```

Dùng [bàn giao và tiếp tục](/vi/guide/agent-work/handoff-and-resume/) để truyền tóm tắt có cấu trúc; đừng dán cả đoạn chat.

### Mẫu C: Cô lập bằng worktree

Các Agent khác nhau sửa nhánh khác nhau trên [git worktree](/vi/guide/desktop-app/worktrees/) khác nhau; cuối cùng người gộp.

## Quy tắc phối hợp (nên ghi vào AGENTS.md)

- Mỗi Agent có ranh giới thư mục rõ ràng
- Cấm `git push` song song
- Chạy CI thống nhất trước khi gộp
- Xung đột do người giải; không để Agent đoán

## Nghiệm thu

- [ ] Mỗi Subagent có «định nghĩa hoàn thành» riêng
- [ ] Sau gộp, test đầy đủ pass
- [ ] Diff truy được về mô tả tác vụ con tương ứng

## Lỗi thường gặp

- Ba Agent song song cùng sửa `package.json`
- Không có bước tổng hợp, không biết nghe kết luận ai

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo giải thích công khai hiện tại về multi-agent / subagents trên OpenAI Developers, cùng các chương Subagent, bàn giao phục hồi và làm việc song song đã kiểm chứng của sổ tay; nội dung trang giới hạn ở phương pháp ổn định “khi nào tách, cách cô lập ranh giới, cách người tổng hợp nghiệm thu”, không viết beta hiện tại hay lối vào UI thành hợp đồng cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
