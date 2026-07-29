---
title: Computer Use
description: Năng lực nâng cao thao tác GUI qua màn hình và thiết bị nhập — tình huống, rủi ro và phê duyệt.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

**Computer Use** cho phép Agent xem màn hình, di chuyển con trỏ, gõ chữ như người — không chỉ giới hạn trình duyệt hoặc terminal. Năng lực mạnh nhất, **yêu cầu rủi ro và phê duyệt cũng cao nhất**.

Computer Use tác động trực tiếp ở lớp màn hình, chuột, bàn phím; khác loại với công cụ trình duyệt và terminal, nên càng cần bật thận trọng.

## Nội dung trang này

- Phân công giữa Computer Use với trình duyệt và terminal
- Tác vụ nào đáng bật
- Cá nhân và nhóm phòng vệ thế nào

## Ranh giới năng lực

| Lớp | Năng lực điển hình |
|---|---|
| Terminal | Shell, script, chương trình CLI |
| Trình duyệt | DOM trang web, tương tác hạn chế |
| Computer Use | Ứng dụng desktop, hộp thoại hệ thống, quy trình nhiều cửa sổ |

## Nó khác công cụ khác thế nào

Có thể phân biệt với công cụ khác vậy:

- Làm việc trên cả desktop
- Chuyển giữa nhiều cửa sổ
- Bấm nút thật và hộp thoại hệ thống

Vì vậy, phạm vi giao diện và thông tin nó chạm thường cũng lớn hơn.

Phù hợp:

- Luồng bấm lặp lại trong phần mềm demo không có API (cần bạn giám sát)
- Sao chép dữ liệu xuyên ứng dụng (trong điều kiện tuân thủ)
- Kiểm chứng hành vi của chính App desktop

Không phù hợp:

- Viết mã hàng ngày (IDE + terminal hiệu quả hơn)
- Thao tác production không người trực
- Vòng qua phần mềm bảo mật hoặc DRM

## Hiểu lầm thường gặp

### 1. Năng lực mạnh hơn thì có nên ưu tiên dùng?

Chỉ trong các trường hợp sau giá trị mới rõ hơn:

- Tác vụ thật sự liên quan GUI desktop
- Không có công cụ nhẹ hơn, an toàn hơn hoàn thành được

### 2. Chỉ cần tôi nhìn là không còn rủi ro?

Có người bên cạnh an toàn hơn, nhưng vẫn có thể:

- Bấm nhầm hộp xác nhận
- Mở cửa sổ không nên mở
- Đưa thông tin nhạy cảm trên màn hình vào quy trình

### 3. Nó có thay được mọi tự động hóa GUI?

Nó phù hợp hỗ trợ tạm thời, kiểm quy trình, xử lý bước GUI không có API; không phù hợp làm phương án tự động hóa production ổn định, dài hạn, không người trực.

## Mô hình rủi ro

Computer Use gần như tương đương **giao bàn phím chuột cho Agent**:

- Có thể mở email, chat, trình quản lý tệp
- Có thể bấm nhầm hộp thoại xác nhận
- Màn hình có thể chứa thông tin nhạy cảm trong thông báo

Bắt buộc đọc: [Quyền và phê duyệt](/guide/foundations/permissions-and-approvals/), [Sandbox và mạng](/guide/foundations/sandbox-and-network/)

## Phán đoán có nên dùng không

Khi mục tiêu chỉ là những việc sau, thường không cần Computer Use trước:

- Sửa mã
- Chạy kiểm thử
- Xem trang web
- Tra tài liệu

Phần lớn có thể hoàn thành bằng công cụ nhẹ hơn.

Nếu tác vụ thuộc các trường hợp sau, mới cân nhắc bật:

- Phải thao tác ứng dụng desktop
- Phải xuyên nhiều cửa sổ GUI
- Phải xử lý giao diện mà trình duyệt và terminal đều không với tới

mới đáng cân nhắc nghiêm túc.

## Cách dùng khuyến nghị

1. **Môi trường riêng**: máy ảo hoặc tài khoản người dùng phụ, không có cửa sổ riêng tư trên màn hình
2. **Thu nhỏ tác vụ**: «Xác minh công thức trong Calculator» chứ không «giúp tôi xử lý mọi email»
3. **Người trong vòng**: giữ hiển thị, sẵn sàng ngắt bất cứ lúc nào
4. **Ghi hình/nhật ký**: dùng để nhóm review (chú ý ghi hình cũng chứa thông tin nhạy cảm)
5. **Kiểm sau khi xong**: hệ thống tệp, clipboard, ứng dụng đang mở

Môi trường doanh nghiệp có thể tắt mặc định; lấy chính sách quản trị làm chuẩn.

## Chọn với công cụ trình duyệt

```text
Chỉ cần xem trang web?          → Công cụ trình duyệt
Cần thao tác ứng dụng ngoài IDE? → Computer Use (thận trọng hơn)
Chỉ cần sửa mã chạy kiểm thử?   → Terminal + công cụ tệp
```

Xem [Chọn công cụ](/guide/tools/tool-selection/)

## Cách viết áp dụng trực tiếp

Có thể viết:

```text
Chỉ cho phép thao tác Calculator và ứng dụng kiểm thử cục bộ; đừng mở email, phần mềm chat, trình quản lý tệp hay bất kỳ backend production nào.
Nếu xuất hiện hộp xác nhận hệ thống, dừng lại giải thích trước rồi mới tiếp.
```

## Lỗi thường gặp

- Chạy Computer Use của dự án không đáng tin trên desktop chính
- Màn hình còn 2FA, ngân hàng, dữ liệu khách hàng mà vẫn tiếp tục tác vụ
- Coi tự động hóa GUI là chiến lược kiểm thử đầy đủ

## Danh sách nghiệm thu

- [ ] Chỉ bật trong môi trường cách ly
- [ ] Prompt ghi rõ ứng dụng được phép thao tác và mục cấm
- [ ] Sau tác vụ kiểm không có tệp/kết nối mạng ngoài ý muốn
- [ ] Chính sách tổ chức cho phép năng lực này

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / Codex (tùy phiên bản, khu vực và quyền)  
**Căn cứ kiểm chứng:** Tài liệu hiện tại của OpenAI Help Center về kế hoạch Codex và năng lực desktop vẫn coi Computer Use là một chức năng liên quan Codex; ghi chú phát hành Business cũng xác nhận từ 2026-05-29 Codex trên Windows hỗ trợ Computer Use. Bài này chỉ tóm tắt mô hình rủi ro, tình huống phù hợp và ranh giới phê duyệt, không tuyên bố mọi nền tảng hoặc tài khoản mặc định đều dùng được.  
**Kiểm chứng gần nhất:** 2026-07-26
