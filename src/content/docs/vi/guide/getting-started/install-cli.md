---
title: Cài CLI
description: Cài dòng lệnh Codex và hoàn thành kiểm tra cơ bản.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Làm theo hướng dẫn cài CLI chính thức: [https://developers.openai.com/codex](https://developers.openai.com/codex) (thường là trình quản lý gói hoặc script cài chính thức — lấy tài liệu hiện hành làm chuẩn).

Nếu bạn vốn dùng terminal hàng ngày, CLI sẽ thuận tay hơn.  
Khi cài lần đầu, chỗ dễ bị kẹt thường nằm ở đây:

- Cài xong xác nhận thế nào là chưa cài nửa vời
- Vì sao lệnh rõ ràng đã cài mà terminal lại không tìm thấy
- Khi nào nên quay lại PATH / xác thực, thay vì cài lại nhiều lần

CLI đã cài ổn hay chưa — chủ yếu xem terminal hiện tại có nhận `codex` ổn định không.

## Kiểm tra sau cài đặt

Trong terminal chạy lệnh phiên bản hoặc trợ giúp (subcommand cụ thể lấy chính thức làm chuẩn), xác nhận:

- Lệnh thực thi được
- Vào được trạng thái đăng nhập hoặc đã xác thực

## Hiểu nhầm thường gặp

### 1. Cài xong thì mọi cửa sổ terminal đều nhận lệnh ngay

Đôi khi bạn cần mở lại terminal, hoặc xác nhận `PATH` của shell hiện tại đã cập nhật.

### 2. Thấy đầu ra cài đặt thành công là nghĩa đã dùng được

Đáng xác nhận hơn là môi trường hiện tại có tìm thấy lệnh này không.

### 3. Vấn đề CLI đều phải cài lại

Nhiều khi thật sự cần kiểm là:

- `PATH`
- Shell hiện tại
- Trạng thái đăng nhập

## Sau cài đặt kiểm thế nào

1. Xác nhận lệnh thực thi được trước
2. Rồi xác nhận phiên hiện tại vào được trạng thái đăng nhập hoặc đã đăng nhập
3. Vẫn chưa được thì mới kiểm vị trí cài và PATH

CLI cài xong rồi, terminal hiện tại nên tìm thấy nó, và bạn cũng tiếp tục hoàn thành xác thực được.

Tương tác chi tiết xem [Chế độ tương tác CLI](/guide/cli/interactive-mode/). Xử lý sự cố: [Xử lý sự cố CLI](/guide/cli/troubleshooting/).

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI  
**Ghi chú rà soát lại:** Dù trang này cố ý tránh lệnh cài cụ thể, vẫn mặc định một nhịp cài CLI, kiểm tra terminal và xác thực hiện tại; vì cách cài, nền tảng hỗ trợ và luồng xác thực đều có thể đổi, trước khi bổ sung hướng dẫn cài chính thức phiên bản mới nhất thì không nên đánh dấu `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
