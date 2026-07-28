---
title: Thuật ngữ cho người mới
description: Định nghĩa ngắn về tác vụ, ngữ cảnh, Sandbox, Skill và các từ thường dùng khác.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 6
---

Mục đầy đủ hơn xem [Bảng thuật ngữ](/guide/reference/glossary/). Ở đây liệt kê trước nhóm từ phổ biến nhất và dễ ảnh hưởng đến việc đọc nhất.

Khi mới đọc cẩm nang Codex, chỗ dễ bị kẹt thường là thuật ngữ dày đặc. Từng từ thì nhận ra, ghép lại thì dễ rối.

Hai trường hợp phổ biến:

- Hiểu từng chữ, nhưng không biết nó chỉ cái gì trong thao tác thực tế
- Không biết từ nào phải hiểu ngay, từ nào để sau

Đừng coi đây là bài kiểm tra thuật ngữ. Biết các từ đang nói về gì đại khái, để khi đọc nội dung không bị kẹt mãi là đủ.

## Vài từ cần nhận biết trước

Nếu mục tiêu hiện tại chỉ là chạy thông tác vụ đầu tiên, có thể hiểu trước 6 từ này:

| Thuật ngữ | Vì sao hiểu trước |
|---|---|
| **Prompt** | Cách bạn nói rõ tác vụ |
| **Ngữ cảnh** | Codex hiện thấy được thông tin nào |
| **Agent** | Vì sao nó không chỉ trả về một đoạn chữ |
| **Phê duyệt** | Vì sao đôi khi nó dừng lại hỏi bạn |
| **Diff** | Cách bạn kiểm tra nó thực sự đã sửa gì |
| **Tác vụ** | Đơn vị cơ bản của một lần làm việc hoàn chỉnh |

| Thuật ngữ | Giải thích ngắn |
|---|---|
| **Prompt** | Mục tiêu, bối cảnh và yêu cầu bạn đưa cho Codex |
| **Ngữ cảnh (context)** | Thông tin dự án, tệp và hội thoại mà model hiện thấy được |
| **Agent** | Cách thực thi quanh mục tiêu: gọi công cụ và lặp để tiến tới |
| **Công cụ (tool)** | Khả năng có thể gọi như đọc tệp, chạy lệnh, tìm kiếm |
| **Sandbox** | Môi trường thực thi giới hạn phạm vi ảnh hưởng tới hệ tệp và mạng |
| **Phê duyệt (approval)** | Một số thao tác cần bạn đồng ý rõ ràng rồi mới tiếp tục |
| **Diff** | So sánh nội dung trước/sau thay đổi, để bạn rà soát |
| **Thread / phiên** | Một đoạn hội thoại liên tục và ngữ cảnh tích lũy của nó |
| **Tác vụ** | Một đơn vị công việc có mục tiêu (có thể trải nhiều lần gọi công cụ) |
| **Skill** | Gói hướng dẫn và tài nguyên chuyên biệt có thể tái sử dụng (nâng cao) |
| **MCP** | Giao thức kết nối công cụ và nguồn dữ liệu bên ngoài (nâng cao) |
| **Tác vụ Cloud** | Tác vụ chạy trong môi trường đám mây, không phải Sandbox máy local |

## Nói theo cách đời thường hơn

- **Prompt**: lời bạn nói khi giao việc cho nó
- **Ngữ cảnh**: tài liệu nó đang cầm trên tay lúc này
- **Agent**: không chỉ trả bạn một đoạn chữ — nó thật sự đẩy tác vụ tiến lên
- **Phê duyệt**: một số việc nó không tự làm được, phải có bạn gật đầu
- **Diff**: so sánh trước khi sửa và sau khi sửa
- **Skill**: đóng gói một bộ cách làm cố định để tái sử dụng

## Cách dùng

Khi gặp các từ này ở trang khác, không cần dừng lại tra định nghĩa mỗi lần:

- Hiểu đại khái đang nói gì thì đọc tiếp
- Thấy đi thấy lại vẫn mơ hồ thì quay lại đây
- Đã ảnh hưởng đến hiểu quy trình thì đọc trang chuyên đề tương ứng

## Có thể xem theo nhóm

Nếu không muốn nhớ quá nhiều một lúc, có thể chia như sau:

- Bạn nói gì: Prompt
- Nó thấy gì: ngữ cảnh
- Nó làm thế nào: Agent, công cụ
- Nó có được phép làm không: phê duyệt, Sandbox
- Bạn kiểm tra thế nào: Diff, kết quả tác vụ

## Các từ có thể xem sau

Các mục dưới đây phần lớn thuộc nội dung nâng cao; lần đầu không cần vội hiểu thấu:

- Skill
- MCP
- Hook
- Plugin
- Chi tiết môi trường Cloud

Hoàn thành [tác vụ đầu tiên](/guide/getting-started/run-your-first-task/) trước, rồi quay lại các từ này — thường sẽ hiểu xuôi hơn.

Gặp từ lạ thì quay lại tra, rồi đọc tiếp là được.

Lần đầu đọc cẩm nang, coi các từ này như gợi ý là đủ. Biết chúng chỉ cái gì đại khái thực tế hơn là cố thuộc hết ngay từ đầu.


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ cung cấp hướng dẫn thuật ngữ cho người mới; liên kết nội bộ và giải thích thuật ngữ đã được rà lại, và nội dung không phụ thuộc vào chi tiết sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
