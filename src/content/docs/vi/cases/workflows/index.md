---
title: Phương pháp quy trình
description: Phương pháp cộng tác có thể lặp lại — không gắn một giao diện sản phẩm duy nhất; nhấn mạnh điểm kiểm tra và nghiệm thu.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

[Prompt](/prompts/) dạy bạn cách **nói**; quy trình dạy bạn cách **tổ chức cả một việc**. Phương pháp chương này áp dụng cho App, CLI, IDE và Cloud.

## Vì sao cần quy trình

Hướng dẫn ngoài thường kể «một cuộc hội thoại là xong»; dự án thực tế thường là:

```text
Khám phá → Lập kế hoạch → Thực thi → Kiểm chứng → (có thể) bàn giao hoặc tự động hóa
```

Không có điểm kiểm tra thì dễ: sửa sai thư mục, quên chạy test, merge nhầm, ngữ cảnh hết rồi mất kết luận.

## Quy trình cốt lõi

| Quy trình | Giải quyết vấn đề gì |
|---|---|
| [Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/) | Chuỗi chính dùng chung, phù hợp hầu hết tác vụ |
| [Brainstorm trước rồi mới làm](/cases/workflows/brainstorm-before-building/) | Phân tán và hội tụ khi phương án chưa chốt |
| [Làm việc theo đặc tả](/cases/workflows/specification-driven-work/) | Viết đặc tả nghiệm thu được trước rồi mới triển khai |
| [Làm việc theo test](/cases/workflows/test-driven-work/) | Test trước dẫn dắt triển khai |
| [Mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/) | Khi nào dừng, khi nào duyệt, khi nào từ chối |
| [Chẩn đoán trước khi sửa](/cases/workflows/diagnose-before-fixing/) | Tránh «đoán rồi sửa» |
| [Review trước khi merge](/cases/workflows/review-before-merge/) | Review có cấu trúc trước khi merge PR |
| [Nghiên cứu có nguồn trích dẫn](/cases/workflows/research-with-sources/) | Truy xuất, so sánh và kiểm chứng nguồn |
| [Ưu tiên Artifact](/cases/workflows/artifact-first-work/) | Thỏa thuận thành phẩm trước rồi suy ngược bước |
| [Phối hợp nhiều Agent](/cases/workflows/multi-agent-coordination/) | Song song và phân công |
| [Quản lý tác vụ dài](/cases/workflows/long-running-task-management/) | Điểm kiểm tra xuyên phiên và điều kiện thoát |
| [Phục hồi thất bại](/cases/workflows/failure-recovery/) | Hoàn tác khi lệch hướng hoặc test đỏ |
| [Đóng gói thành Skill](/cases/workflows/turn-a-workflow-into-a-skill/) | Viết quy trình lặp lại thành Skill |

## Chương khác liên quan quy trình

- Chất lượng: [năng lực cốt lõi · chất lượng và kiểm chứng](/guide/quality/)
- Agent: [lập kế hoạch](/guide/agent-work/planning/), [Subagent](/guide/agent-work/subagents/)
- Đóng gói: [Skill](/skills/overview/), [AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- Case: [thư viện kịch bản và case](/cases/use-cases/)

## Nguyên tắc thiết kế

1. **Mỗi giai đoạn có sản phẩm đầu ra:** kế hoạch, diff, báo cáo test, biên bản quyết định
2. **Mặc định bước nhỏ:** tăng dần review được tốt hơn một thay đổi khổng lồ
3. **Thất bại phục hồi được:** biết cách hoàn tác, cách fork Thread để tiếp tục
4. **Đóng gói được thì đóng gói:** quy trình lặp lần thứ ba viết thành Skill hoặc mẫu

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương prompt, chất lượng, làm việc Agent và Skills đã kiểm chứng của sổ tay; trang này chỉ đảm nhận điều hướng phương pháp và điểm kiểm tra theo giai đoạn, không viết quy trình client cụ thể thành hợp đồng dài hạn.  
**Kiểm chứng gần nhất:** 2026-07-26
