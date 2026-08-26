---
title: Brainstorm trước rồi mới làm
description: Trước khi viết code hoặc bài dài, dùng khám phá có cấu trúc để hội tụ phương án — giảm làm lại.
locale: vi
source_locale: zh-CN
source_revision: 9bf8989
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Brainstorm trước rồi mới làm** phù hợp tác vụ mục tiêu mơ hồ, phương án không chỉ một: tính năng mới, redesign, chọn đề nội dung, chọn tech. Nối với giai đoạn ① khám phá của [Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng](/vi/cases/workflows/explore-plan-execute-verify/), nhưng nhấn mạnh **phân tán và hội tụ**, chứ không đọc code sửa tệp ngay.

## Trang này giải quyết gì

- Khi nào đáng brainstorm trước, khi nào EPXV thẳng
- Cách hạn chế phạm vi phân tán, tránh tán chuyện
- Đầu ra: bảng lựa chọn, biên bản quyết định, kế hoạch bước tiếp

## Phù hợp ai

| Kịch bản | Ví dụ |
|---|---|
| Sản phẩm/tính năng | «Thêm xuất dữ liệu cho người dùng, có ba kiểu UI» |
| Nội dung | «Tutorial này hướng tới ai, cấu trúc chia thế nào» |
| Kỹ thuật | «Dùng queue hay cron cho tác vụ theo lịch» |

## Cách làm tối thiểu dùng được

**Giai đoạn A — Phân tán (giới hạn thời gian)**

```text
Chưa sửa bất kỳ tệp nào. Với nhu cầu «xuất CSV», liệt kê 3 đường triển khai:
Mỗi đường ghi ưu nhược, module liên quan, khối lượng ước tính (S/M/L).
Chưa chọn phương án cuối.
```

**Giai đoạn B — Hội tụ**

```text
Theo bảng trên, khuyến nghị 1 phương án mặc định và 1 dự phòng;
Nêu 2 điểm quyết định cần tôi xác nhận (định dạng, quyền).
```

**Giai đoạn C — Vào kế hoạch**

Sau xác nhận, nối [làm việc theo đặc tả](/vi/cases/workflows/specification-driven-work/) hoặc ② kế hoạch của EPXV.

## Quy trình đề xuất

```text
Làm rõ ràng buộc (thời gian, tech stack, phần không được sửa)
    → Phân tán 3–5 lựa chọn (cấm viết code)
    → Xếp theo «giá trị / rủi ro / chi phí»
    → Người chọn hướng hoặc yêu cầu bổ sung thông tin
    → Kế hoạch viết + thực thi
```

Đặt **timebox**: ví dụ hoàn thành phân tán trong 15 phút, tránh thảo luận trôi.

## Lỗi thường gặp

- Coi brainstorm là thực thi, model đã bắt đầu sửa tệp — ràng buộc bằng «chưa sửa»
- Quá nhiều lựa chọn không xếp hạng, mệt quyết định
- Không ghi phương án đã loại, hai tuần sau tranh lại
- Bỏ qua ràng buộc, phương án đẹp nhưng không triển khai được

## Ranh giới an toàn

- Giai đoạn brainstorm vẫn có thể đọc tệp nhạy cảm — dùng `@` chỉ rõ phạm vi
- Phương án liên quan tuân thủ, riêng tư cần người pháp lý/bảo mật review; không chỉ model quyết

## Checklist nghiệm thu

- [ ] Ít nhất 2 lựa chọn khả thi và khuyến nghị rõ
- [ ] Điểm quyết định đã đánh dấu, chờ người xác nhận
- [ ] Không ghi kho ngoài ủy quyền
- [ ] Bước tiếp nối được kế hoạch viết

## Chương liên quan

- [Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng](/vi/cases/workflows/explore-plan-execute-verify/)
- [Làm việc theo đặc tả](/vi/cases/workflows/specification-driven-work/)
- [Yêu cầu kế hoạch](/vi/prompts/ask-for-a-plan/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương EPXV, lập kế hoạch, làm việc theo đặc tả và prompt đã kiểm chứng của sổ tay; trang này chỉ mô tả phương pháp cộng tác ổn định “phân tán trước, hội tụ sau, rồi vào kế hoạch”, không phụ thuộc chi tiết lối vào sản phẩm cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
