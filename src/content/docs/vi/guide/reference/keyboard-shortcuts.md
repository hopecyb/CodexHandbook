---
title: Phím tắt bàn phím
description: "Chỉ mục học các phím tắt phổ biến trong App, CLI TUI và extension IDE — lấy theo phiên bản bạn đã cài."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Phím tắt khác nhiều theo **client và phiên bản**. Trang này nhóm theo **ý định** để hỏi «có cách nhanh hơn không?» — kiểm trợ giúp hoặc cài đặt sản phẩm để biết liên kết chính xác.

Ngày đầu không cần mọi phím tắt. Làm mượt các hành động làm đứt nhịp là đủ.

:::caution
Bảng dưới đây là **minh họa**, không phải danh sách liên kết đầy đủ. Phím có thể đổi sau khi nâng cấp.
:::

## Chỉ mục theo ý định

| Ý định | App máy tính (minh họa) | CLI TUI (minh họa) | Extension IDE (minh họa) |
|---|---|---|---|
| Tác vụ/phiên mới | `Cmd/Ctrl+N` hoặc thanh bên | Thoát/vào lại / lệnh thread mới | Palette lệnh « Codex » |
| Gửi tin nhắn | `Enter` / `Cmd+Enter` | Theo tài liệu sản phẩm | Gửi trong panel |
| Dòng mới không gửi | `Shift+Enter` | Theo TUI | Theo panel |
| Mở palette lệnh | Kiểu `Cmd/Ctrl+K` | Lệnh gạch chéo `/` | `Cmd/Ctrl+Shift+P` |
| Tìm lịch sử | Tìm kiếm thanh bên | Tìm trong phiên nếu có | Lịch sử chat |
| Phê duyệt gọi Công cụ | Nút panel | `y` / mũi tên (theo TUI) | Thông báo hoặc nút inline |
| Từ chối | Nút panel | `n` | Từ chối inline |

**Theo UI phiên bản bạn đã cài.**

## Hành động nên học trước

Phím tắt giảm ma sát khi bạn:

- Tìm Gửi
- Gửi nhầm khi muốn dòng mới
- Do dự phê duyệt công cụ
- Không tìm được cách khởi động Tác vụ mới

Ưu tiên:

- Gửi / dòng mới
- Tác vụ mới
- Palette lệnh
- Phê duyệt / từ chối

## Lệnh gạch chéo vs bàn phím

- **Lệnh gạch chéo**: `/review`, `/help`, v.v. — xem [Tham chiếu lệnh gạch chéo](/guide/reference/slash-commands/)
- **Phím tắt**: hành động UI không cần gõ

Kết hợp: `Cmd+K` để focus ô nhập, rồi `/review`.

## Người dùng terminal CLI

- **Ctrl+C** để ngắt đầu ra mất kiểm soát (chú ý trạng thái chưa lưu)
- Tách tmux: Codex cạnh `git diff`
- Alias shell cho `codex exec` thường dùng — xem [Lệnh và phím tắt](/guide/cli/commands-and-shortcuts/)

## Hiểu nhầm thường gặp

### 1. Không cần thành thạo phím tắt trước khi dùng Codex

Làm mượt vài hành động bạn lặp nhiều nhất.

### 2. Trí nhớ cơ của người khác không phải tiêu chuẩn của bạn

Phím tắt đến cùng thực hành — không phải cửa onboarding.

### 3. Các client không cần liên kết giống hệt

Biết hành động có phím tắt không, xem/đổi phím ở đâu, và hành động nào đáng liên kết trước.

## Năm thứ cần học trước

1. Gửi
2. Dòng mới không gửi
3. Palette lệnh
4. Phê duyệt hoặc từ chối
5. Tác vụ mới

Thêm dần theo thời gian.

## Người dùng IDE

- Gắn «giải thích lựa chọn với Codex» vào phím thoải mái
- Dùng Diff editor và go-to-definition — ít copy-paste hơn

[Cài đặt IDE](/guide/ide/settings/) · [Code đã chọn và tệp đang mở](/guide/ide/selected-code-and-open-files/)

## Khả năng tiếp cận và tùy chỉnh

Hầu hết client cho phép gán lại. Đội có thể ghi liên kết **khuyến nghị** — không bắt buộc đồng nhất.

Phím tắt không phải kỳ thi — làm mượt hành động làm đứt nhịp bạn nhiều nhất.

## Nguồn tham chiếu
- Trang Cài đặt / Phím tắt chính thức của từng sản phẩm
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Ghi chú đối chiếu:** Dù có disclaimer «minh họa», thân bài giả định phím tắt client cụ thể, hành vi gửi, phím palette và phím phê duyệt — rất phụ thuộc phiên bản và nền tảng, thiếu tài liệu phím tắt chính thức thống nhất đủ mạnh.  
**Kiểm chứng gần nhất:** 2026-07-26
