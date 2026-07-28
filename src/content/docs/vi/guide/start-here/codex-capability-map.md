---
title: Bản đồ năng lực
description: Tổng quan các module năng lực như Prompt, công cụ, mở rộng, đa Agent và quản trị.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 7
---

Cẩm nang có khá nhiều module; lần đầu dễ bị nhìn phân tán. Trang này đặt các năng lực chính vào một sơ đồ để dễ khớp cấu trúc nhanh.

Hai chỗ kẹt phổ biến:

- Đọc trang này trang kia, cuối cùng vẫn không biết nên bổ sung khối nào trước
- Lao thẳng vào MCP, tự động hóa, mở rộng ngay từ đầu — phần nền tảng lại chưa được sắp xuôi

Sắp khung lớn trước, rồi mới tra chủ đề cụ thể sẽ đỡ tốn sức hơn nhiều.

Codex không chỉ là một ô chat — phía sau còn vài tầng năng lực:

```text
Mục tiêu và Prompt
  → Ngữ cảnh (dự án / tệp / hội thoại)
    → Công cụ (tệp, terminal, tìm kiếm, trình duyệt…)
      → Công việc Agent (lập kế hoạch, thực thi, điều hướng, bàn giao)
        → Kiểm chứng chất lượng và phê duyệt thủ công
      → Mở rộng và tự động hóa (Skills / MCP / Hooks…, nâng cao)
            → Quản trị nhóm (cột mốc sau)
```

## Cấu trúc tổng thể

Có thể coi Codex gồm ba tầng:

- Tầng một: bạn mở lời thế nào để nó biết bạn cần gì
- Tầng hai: nó dựa vào ngữ cảnh và công cụ nào để làm ra việc
- Tầng ba: bạn lắng đọng cách cộng tác này thế nào để sau còn tái sử dụng

Khi mới dùng, hai tầng đầu quan trọng hơn. Nói rõ tác vụ, chạy xuôi kết quả — rồi mới xem mở rộng nâng cao.

## Hiểu nhầm thường gặp

### Năng lực càng cao cấp không có nghĩa phải học trước

Skills, MCP, Hooks, tự động hóa đương nhiên rất mạnh, nhưng chúng giải quyết chủ yếu việc phóng đại hiệu suất và tái sử dụng quy mô — không phải phần dễ bị kẹt nhất khi mới bắt tay.

Nếu các thao tác nền như Prompt, ngữ cảnh, chọn công cụ chưa được sắp xuôi, năng lực mở rộng phía sau cũng dễ dùng lệch.

### Sơ đồ này cũng có thể dùng làm gợi ý thứ tự đọc

Không cần đọc hết từng trang theo mục lục site. Có thể đi theo thứ tự này:

1. Hiểu Codex làm việc thế nào trước
2. Rồi học cách giao tác vụ, đưa ngữ cảnh, kiểm chứng kết quả
3. Dùng đã quen rồi mới cân nhắc cấu hình, mở rộng và tự động hóa

## Thứ tự khởi đầu

1. Xem [Codex là gì](/guide/start-here/what-is-codex/)
2. Rồi xem [Chọn đường đi của bạn](/guide/start-here/choose-your-path/)
3. Sau đó vào [Hướng dẫn bắt đầu](/guide/getting-started/)
4. Khi bị kẹt, quay lại [Khái niệm nền tảng](/guide/foundations/) và [Lộ trình học](/guide/learning-paths/)

## Module và chương chính thức

| Năng lực | Vị trí chính thức |
|---|---|
| Model, Agent, quyền, Sandbox | [Khái niệm nền tảng](/guide/foundations/) |
| Cách bấm, cách chạy ở từng lối vào | [Cẩm nang sản phẩm](/guide/) |
| Prompt, ngữ cảnh, công cụ, chất lượng | [Năng lực cốt lõi](/guide/) |
| AGENTS.md và cấu hình | [Tùy chỉnh cá nhân hóa](/guide/customization/) |
| Skills, MCP, Plugin, tự động hóa | [Mở rộng và tự động hóa](/skills/) |
| Phương pháp cộng tác có thể lặp lại | [Phương pháp quy trình](/cases/workflows/) |
| Case đầu-cuối | [Case theo tình huống](/cases/use-cases/) |
| Thứ tự đọc | [Lộ trình học](/guide/learning-paths/) |

Sơ đồ chọn mở rộng tổng thể xem [Bản đồ năng lực mở rộng](/skills/capability-map/); đối chiếu sản phẩm xem [So sánh tính năng](/guide/reference/feature-comparison/). Khác biệt năng lực giữa các lối vào nằm ở trang so sánh tính năng.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ tổng quan các module năng lực và chỗ thuộc về chương chính thức; liên kết nội bộ, sơ đồ cấu trúc và ánh xạ module đã được rà lại, và nội dung không phụ thuộc vào chi tiết sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
