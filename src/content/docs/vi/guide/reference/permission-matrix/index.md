---
title: Ma trận quyền
description: "Bản đồ khái niệm các loại thao tác Codex, điểm phê duyệt và khác biệt sản phẩm."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Ma trận quyền cũng giúp người dùng hàng ngày: vì sao cùng một câu nhận phản ứng khác nhau tùy lối vào Codex.

Các **thao tác** khác nhau kích hoạt hành vi phê duyệt và Sandbox khác nhau theo **lối vào sản phẩm**. Ma trận này căn chỉnh đội về «điều người phải tường minh cho phép». Đây là **tham chiếu rủi ro và hành vi**, không phải văn bản tuân thủ pháp lý. Mặc định theo [tài liệu chính thức](https://developers.openai.com/codex) và chính sách quản lý tổ chức.

## Bảng dùng để làm gì

Khi phê duyệt, giới hạn hoặc từ chối xuất hiện, người ta thường nghĩ:

- Mô hình hỏng
- Tôi diễn đạt sai
- Hôm qua còn chạy được

Phần lớn là lối vào, chính sách và mức rủi ro — không chỉ cách bạn diễn đạt.

## Ý tưởng trung tâm

Không phải mọi «làm giúp tôi việc này» mang cùng rủi ro.

Ví dụ:

- Đọc một tệp
- Sửa một tệp
- Chạy một lệnh
- Tới mạng
- Push code

Cùng hình câu — rủi ro khác — nên sản phẩm thêm phê duyệt, giới hạn và chặn khác nhau.

Nền khái niệm: [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/)

## Mức rủi ro thao tác

| Mức | Thao tác ví dụ | Kỳ vọng mặc định |
|---|---|---|
| L0 đọc | Đọc văn bản trong repo, tìm code | Thường tự động |
| L1 ghi | Sửa tệp dự án, định dạng | Thường xác nhận hoặc tự động trong Sandbox |
| L2 thực thi | shell, trình quản lý package, kiểm thử | Thường xác nhận |
| L3 mạng | curl, registry npm, API | Xác nhận chặt hoặc deny |
| L4 ngoài giới hạn | Ghi ngoài dự án, git push, drop DB | Chặn hoặc xác nhận mạnh |
| L5 GUI | Computer Use, hộp thoại hệ thống | Nhạy cảm tối đa; thường tắt |

## Cách đọc

1. Tác vụ này thuộc lớp thao tác nào?
2. Lớp đó thường bị chặn trong lối vào này không?
3. Thêm chi tiết, chờ phê duyệt, hay chọn lối nhẹ hơn?

Dùng để xem trước trước khi bắt đầu.

## Ma trận (khái niệm — mặc định điển hình)

**Y** = thường cần đồng ý tường minh hoặc giới hạn chính sách · **A** = có thể tự động dưới cấu hình đáng tin · **—** = tùy phiên bản/chính sách · **N** = thường không cho phép

| Thao tác | App máy tính | CLI tương tác | IDE | Cloud |
|---|---|---|---|---|
| Đọc tệp repo | A | A | A | A |
| Ghi tệp trong repo | Y/A | Y | Y/A | Y/A |
| Chạy lệnh kiểm thử | Y/A | Y | Y/A | Y/A |
| Cài dependency global | Y | Y | Y | Y |
| Truy cập Internet công cộng | Y | Y | Y | Y |
| Đọc tệp nhạy cảm như `.env` | Y | Y | Y | Y |
| `git commit` | Y | Y | Y | Y |
| `git push` | Y | Y | Y | Y |
| Ghi ngoài dự án | N/Y | N/Y | N/Y | N |
| Công cụ MCP bên thứ ba | Y | Y | Y | Y |
| Trình duyệt mở URL | Y | — | — | Y |
| Computer Use | Y/— | — | — | — |

Ghi chú:

- **Cloud** chạy trong Sandbox từ xa — không truy cập filesystem laptop
- **IDE** tương tự App; UI phê duyệt khác
- **Chính sách quản lý** có thể ép mọi thứ thành Y hoặc N

## Hiểu nhầm thường gặp

### 1. Tính khả thi không chỉ là «mô hình sẽ thử»

Thường là: allowance lối vào, chính sách, quyền.

### 2. Cloud không tự động tự do hơn hoặc an toàn hơn

An toàn phụ thuộc Sandbox, mạng, Secrets, bảo vệ nhánh, phê duyệt cùng lúc.

### 3. Quy tắc viết không một mình xóa rủi ro

Tài liệu, chính sách phê duyệt, giới hạn kỹ thuật và review người thường kết hợp.

### 4. Bị chặn ≠ bạn làm sai gì

Thường là: bước rủi ro cao hơn, lối vào không phù hợp việc, hoặc cần phê duyệt tường minh / cách tiếp cận nhẹ hơn.

## Config và tài liệu áp dụng thế nào

| Cơ chế | Vai trò |
|---|---|
| Chế độ Sandbox | Giới hạn L3/L4 dù Agent «muốn» |
| Chính sách phê duyệt | L1–L3 có prompt không |
| `AGENTS.md` | Điều cấm dự án (vd. không push) |
| Bảo vệ nhánh | GitHub chặn merge chưa review |
| Hooks | Kiểm tra pre-commit (xem lộ trình Hooks) |

[Mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/) · [Tham chiếu cấu hình](/guide/reference/configuration-reference/)

## Khi nào nâng mức thận trọng

Nếu một thao tác:

- Sửa tệp
- Chạy lệnh
- Tới mạng
- Chạm dữ liệu nhạy cảm
- Gửi kết quả ra ngoài repo

Không cần số L — biết nó vượt rủi ro đọc thông thường.

Ma trận là công cụ xem trước: vì sao bước này có thể chặn, cần thận trọng hơn, hoặc chọn đường nhẹ hơn.

## Ví dụ chính sách đội

| Tình huống | Gợi ý |
|---|---|
| Repo luyện tập mã nguồn mở | Sandbox chuẩn + cho phép lệnh kiểm thử |
| Monorepo doanh nghiệp | Chặt + không push + review PR người |
| CI `codex exec` | Chỉ đọc hoặc dir scoped + không push |
| Cloud gắn production | Secrets tối thiểu + bảo vệ nhánh |

## Hiểu nhầm phổ biến

| Hiểu nhầm | Sự thật |
|---|---|
| «Cloud an toàn hơn» | Phụ thuộc secrets, review, chính sách mạng |
| «IDE sẽ không chạy shell» | Có thể chạy qua công cụ Agent |
| «Tài liệu nói không push nên không bao giờ push» | Cần Sandbox + quyền Git + review người |

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Ghi chú đối chiếu:** Khung mức rủi ro vẫn hữu ích, nhưng ma trận giả định nhiều mặc định theo lối vào và điểm phê duyệt mà thiếu tài liệu ma trận quyền theo lối vào chính thức hiện hành — không đánh `review` hoặc `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
