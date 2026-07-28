---
title: Quản lý tác vụ dài
description: Tác vụ lớn xuyên nhiều giờ hoặc nhiều phiên — điểm kiểm tra, nén, ủy thác và điều kiện thoát.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Vấn đề phổ biến của tác vụ dài: **ngữ cảnh đầy**, **người phải rời**, **hướng bị trôi**, **không biết khi nào dừng**. Trang này đặt [Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/) vào kịch bản vài giờ thậm chí nhiều phiên.

## Trọng tâm trang này

- Khi nào tách tác vụ, khi nào ủy thác Cloud
- Điểm kiểm tra và ghi trạng thái viết gì
- Điều kiện thoát của tác vụ dài tự động hóa

Liên quan: [ủy thác và theo dõi](/guide/web-and-cloud/delegate-and-follow-up/) · [Automations](/skills/automations/scheduled-tasks/)

## Tín hiệu tác vụ dài

- Ước tính hơn 30 phút thời gian máy
- Liên quan nhiều hệ thống con hoặc >20 tệp
- Cần chờ phản hồi người hoặc API ngoài
- Cần chạy E2E / kiểm thử hiệu năng đầy đủ

Khi thỏa bất kỳ điều kiện nào, nên viết kế hoạch trước, đừng chat một mạch đến cuối.

## Quản lý ba giai đoạn

### 1. Đóng băng kế hoạch

Xuất kế hoạch viết: phạm vi, phi mục tiêu, milestone, lệnh nghiệm thu. Người xác nhận rồi mới thực thi quy mô lớn.

[Lập kế hoạch](/guide/agent-work/planning/) · [Subagent](/guide/agent-work/subagents/)

### 2. Điểm kiểm tra

Mỗi khi xong milestone:

- Commit hoặc stash phần tăng dần review được
- Cập nhật `PROGRESS.md` hoặc comment issue: đã xong gì, bước tiếp, mục chặn
- Khi ngữ cảnh đầy, dùng [nén](/guide/context/compaction/) hoặc mở phiên mới + liên kết tệp tiến độ

### 3. Kết thúc hoặc ủy thác

- Cục bộ không chứa nổi → [ủy thác Cloud](/guide/web-and-cloud/delegate-and-follow-up/)
- Cần giám sát liên tục → Automation + **max iterations / deadline** rõ ràng

## Điều kiện thoát (bắt buộc với tự động hóa)

| Điều kiện | Mô tả |
|---|---|
| Trần thời gian | 4h không tiến triển thì cảnh báo |
| Trần vòng lặp | Cùng một test thất bại 3 lần thì dừng |
| Cổng người | Trước khi sửa cấu hình production phải @ người |
| Điều kiện thành công | Test xanh + PR mở |

## Lỗi thường gặp

- Không có tệp PROGRESS, đổi phiên rồi làm lại
- Tác vụ dài không đặt phi mục tiêu, Agent tiện tay «dọn cả kho»
- Tác vụ Cloud treo cả đêm không người phê duyệt

## Checklist nghiệm thu

- [ ] Trước khi bắt đầu tác vụ dài đã có tài liệu kế hoạch
- [ ] Ít nhất hai điểm kiểm tra có diff review được
- [ ] Biết cách tạm dừng, phục hồi hoặc bàn giao

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo use cases công khai hiện tại về mục tiêu dài hạn và cộng tác tác vụ dài trên OpenAI Developers, cùng các chương bàn giao phục hồi, lập kế hoạch, nén và ủy thác đã kiểm chứng của sổ tay; trang này chỉ mô tả phương pháp ổn định về điểm kiểm tra, bàn giao và điều kiện thoát của tác vụ dài.  
**Kiểm chứng gần nhất:** 2026-07-26
