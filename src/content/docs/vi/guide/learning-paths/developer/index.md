---
title: Lộ trình nhà phát triển (tổng quan)
description: Tổng quan tuyến liên quan phát triển phần mềm; bước sâu sẽ bổ sung sau.
locale: vi
source_locale: zh-CN
source_revision: b5b5ac7
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

> Trạng thái MVP: trang này là tổng quan. Năm bước đầy đủ sẽ bổ sung ở các cột mốc sau.

Nếu bạn chủ yếu muốn dùng Codex sửa code, hiểu dự án, sửa vấn đề, có thể bắt đầu từ lộ trình này.

## Tình huống phù hợp

- Người cần đọc code, sửa code, chạy kiểm thử
- Người muốn nối Codex vào quy trình phát triển thật
- Người muốn dùng trôi chảy quy trình «viết Tác vụ, xem Diff, chạy Kiểm chứng»

## Hiện có thể đọc

- [Bắt đầu nhanh](/vi/guide/getting-started/) và [CLI](/vi/guide/cli/) / [IDE](/vi/guide/ide/)
- [Chạy kiểm thử](/vi/guide/quality/run-tests/) · [Xem xét Diff](/vi/guide/quality/review-diffs/)
- [Lập kế hoạch Agent](/vi/guide/agent-work/planning/)

## Hiểu nhầm thường gặp

### 1. Lộ trình nhà phát triển là để nó bắt đầu viết code trước

Điều ảnh hưởng chất lượng kết quả hơn thường là:

- Nó có hiểu phạm vi không
- Bạn có định nghĩa tiêu chí hoàn thành không
- Cuối cùng có xem Diff và Kiểm chứng kết quả nghiêm túc không

### 2. Tôi biết viết code nên khái niệm cơ bản có thể bỏ

Vẫn đừng bỏ hết.

Cách Codex làm việc khác autocomplete editor thông thường; các khái niệm như quyền, Ngữ cảnh, gọi Công cụ vẫn ảnh hưởng trực tiếp tới kết quả.

## Thứ tự đọc đề xuất

Nếu chuẩn bị dùng Codex vào phát triển, đọc theo thứ tự này:

1. [Bắt đầu nhanh](/vi/guide/getting-started/)
2. [CLI](/vi/guide/cli/) hoặc [IDE](/vi/guide/ide/)
3. [Công việc Agent](/vi/guide/agent-work/)
4. [Chạy kiểm thử](/vi/guide/quality/run-tests/)
5. [Xem xét Diff](/vi/guide/quality/review-diffs/)

Lộ trình này coi trọng hơn thay đổi kiểm soát được, kết quả Kiểm chứng được, không chỉ theo đuổi «để nó viết trước đã».

## Các bước đang lên kế hoạch (dàn ý)

Hiểu codebase → Sửa và triển khai → Kiểm thử và review → Quy trình tự động hóa → Phát triển đa Agent

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Cơ sở kiểm chứng:** Đã đối chiếu chéo với các trang lối vào liên quan phát triển, công việc Agent, chạy kiểm thử và xem xét Diff hiện tại trong kho này; trang chỉ là «tổng quan thứ tự đọc cho nhà phát triển», không cam kết triển khai cụ thể hay hành vi mặc định của công cụ.  
**Kiểm chứng gần nhất:** 2026-07-26
