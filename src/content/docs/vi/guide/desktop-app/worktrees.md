---
title: Cây làm việc
description: Dùng cây làm việc cô lập để thử thay đổi song song.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

**Cây làm việc (worktree)** dùng để thử thay đổi trong thư mục cô lập, giảm nhiễu lên không gian làm việc chính.

Có thể xem như mở một «khu thử nghiệm song song» cho cùng một kho, tránh nhồi mọi thử vào không gian làm việc hiện tại.

## Khi nào dùng

- Muốn thử song song hai cách triển khai
- Lo refactor thử nghiệm làm bẩn không gian làm việc nhánh chính

## Khi nào không dùng

- Dự án luyện tập vốn đã đủ cô lập
- Bạn chưa quen Git: hãy hoàn thành tác vụ tuần tự trong thư mục luyện tập trước

## Hiểu nhầm thường gặp

### 1. Có phải chỉ là tạo thêm một thư mục?

Bề ngoài giống vậy, nhưng mục đích không chỉ là «thêm một thư mục», mà là dành không gian cô lập cho các thử khác nhau trên cùng một kho.

### 2. Lúc đầu đã phải học nó chưa?

Không.

Nếu bạn vẫn đang quen luồng tác vụ cơ bản, tạm không đụng worktree thường đơn giản hơn.

### 3. Khi nào học thì hợp hơn?

Khi bắt đầu gặp các tình huống này thì đáng học:

- Muốn thử hai cách triển khai
- Không muốn trộn thay đổi thử vào không gian làm việc hiện tại
- Trong nhóm sẽ mở nhiều tác vụ song song cùng lúc

Worktree là công cụ cô lập nâng cao, không phải mục bắt buộc khi mới dùng Codex.

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App  
**Ghi chú tái kiểm:** Trang này giới thiệu worktree như năng lực nâng cao của Desktop App, nhưng tài liệu chính thức công khai hiện chưa đủ để chứng minh từng mục lối vào và phạm vi hỗ trợ worktree trong UI desktop; trước khi bổ sung tài liệu sản phẩm mới nhất nên gắn `outdated`.  
**Kiểm chứng gần nhất:** 2026-07-26
