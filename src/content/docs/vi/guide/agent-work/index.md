---
title: Làm việc với Agent
description: Để Codex làm việc như một người thực thi có thể cộng tác, chứ không phải máy trả lời một lần.
sidebar:
  order: 31
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Làm việc với Agent tập trung vào: làm sao đưa một tác vụ **đến trạng thái hoàn thành có thể kiểm chứng**. Khi nào lập kế hoạch trước, khi nào tách tác vụ con, khi nào chỉnh hướng giữa chừng, khi nào bàn giao và khôi phục — đều là vấn đề chương này xử lý.

Chương này nói về cách cộng tác, không phải một tính năng đơn lẻ.

Nhiều tác vụ khó không phải vì nói ra yêu cầu, mà vì đưa nó suốt đường tới trạng thái “thật sự xong và kiểm được”.

## Chương này nói gì

- Khi tác vụ phức tạp, làm sao hội tụ thành kế hoạch trước
- Khi thực thi lệch hướng, làm sao chỉnh từng bước nhỏ
- Những vấn đề con nào đáng tách cho Subagent
- Khi tác vụ dài bị gián đoạn, làm sao bàn giao và khôi phục

## Thứ tự đọc khuyến nghị

1. [Lập kế hoạch](/guide/agent-work/planning/)
2. [Tiến độ và điều hướng](/guide/agent-work/progress-and-steering/)
3. [Subagent](/guide/agent-work/subagents/)
4. [Bàn giao và khôi phục](/guide/agent-work/handoff-and-resume/)

## Một khung dùng thường xuyên

Làm việc với Agent có thể xem như bốn hành động liên tiếp:

```text
Hiểu trước → Lập kế hoạch → Chỉnh hướng khi thực thi → Bàn giao/kết thúc
```

Thiếu bất kỳ bước giữa nào, hậu quả thường gặp lần lượt là:

- Thiếu hiểu: sửa sai hướng
- Thiếu kế hoạch: làm nửa chừng mới thấy phạm vi mất kiểm soát
- Thiếu chỉnh hướng: càng sửa càng lệch
- Thiếu bàn giao: tác vụ dài đứt đoạn, không ai biết đã tới đâu

## Hiểu lầm thường gặp

### 1. Làm việc với Agent chỉ là viết Prompt dài hơn

Chưa đủ.

Prompt chỉ là điểm xuất phát; thứ thật sự quyết định chất lượng tác vụ còn gồm:

- Có kế hoạch không
- Có chỉnh hướng giữa chừng không
- Có tách phần phức tạp không
- Có để lại trạng thái có thể tiếp tục không

### 2. Đổi hướng giữa chừng nghĩa là phần trước đều phí công

Nhiều khi vừa thực thi vừa thắt phạm vi vốn là cách làm bình thường; không cần giả vờ lần đầu đã nói đúng hết.

### 3. Tách Subagent là sẽ hiệu quả hơn ngay

Không phải lúc nào cũng vậy.

Nếu ranh giới chưa rõ, càng nhiều tác vụ con thì thread chính càng rối.

## Quan hệ chương này với các chương khác

- Cần quy trình chính đầy đủ: xem [Khám phá—Kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/)
- Cần nói rõ tác vụ: xem [Prompt](/prompts/)
- Cần quản lý ngữ cảnh: xem [Ngữ cảnh](/guide/context/)
- Cần song song nhiều người/nhiều tác vụ: xem [Agent song song](/guide/desktop-app/parallel-agents/) và [Phối hợp nhiều Agent](/cases/workflows/multi-agent-coordination/)

## Chạy thông quy trình tối thiểu này trước

Nếu chỉ muốn chạy tác vụ theo cách cơ bản nhất, làm 4 bước:

1. Nói rõ tác vụ
2. Khi phức tạp thì để nó đưa kế hoạch trước
3. Trong thực thi, chỉnh từng bước nhỏ theo kết quả
4. Trước khi kết thúc, yêu cầu kết quả có thể kiểm chứng

Chạy thông 4 bước này rồi mới học Subagent và bàn giao sẽ tự nhiên hơn.

Làm việc với Agent coi trọng hơn việc tác vụ có thể liên tục đẩy đúng hướng qua các bước kế hoạch, thực thi, chỉnh hướng và kết thúc.

## Sai lầm thường gặp

- Coi Agent như ô tìm kiếm, chỉ đưa một mục tiêu mơ hồ
- Nghĩ “đổi ý giữa chừng” đồng nghĩa làm lại từ đầu
- Rõ ràng là tác vụ dài mà không có artifact bàn giao nào
- Tách tác vụ con mà không đưa ranh giới, cuối cùng thread chính càng rối

## Nguồn tham khảo
- Hướng dẫn cộng tác và thực thi tác vụ chính thức của OpenAI Codex
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo từng đoạn với các chương kế hoạch, ngữ cảnh, kiểm chứng và cộng tác đa tác vụ đã được kiểm chứng trong sổ tay; trang này chỉ giữ nguyên tắc quy trình cộng tác ổn định, không coi giao diện hay lối vào hiện tại của một client nào đó là hợp đồng dài hạn.  
**Kiểm chứng gần nhất:** 2026-07-26
