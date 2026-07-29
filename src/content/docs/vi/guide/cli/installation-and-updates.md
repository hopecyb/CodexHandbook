---
title: Cài đặt và cập nhật CLI
description: Cài đặt, nâng cấp và xác nhận phiên bản.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Lần đầu cài CLI, nhiều người kẹt ở:

- Tôi đã cài thành công chưa
- Cài xong vì sao terminal vẫn không nhận `codex`
- Cập nhật rồi làm sao biết đang chạy phiên bản nào

CLI cài xong không phải chạy lệnh một lần là đủ — mà terminal hiện tại phải tìm ổn định được nó.

## Sau khi cài, ít nhất kiểm 3 việc

1. Lệnh chạy được trực tiếp
2. Terminal hiện tại tìm được nó trong `PATH`
3. Xác thực đã hoàn tất — không chỉ cài xong tệp thực thi

## Hiểu nhầm thường gặp

### 1. Script cài chạy xong là hoàn tất

Script cài chạy xong chỉ nghĩa «bước cài đã thực thi».  
Tiếp theo cần xem: terminal bạn đang mở có nhận ra lệnh này không.

### 2. Đổi cửa sổ terminal là tự ổn

Có khi được, có khi không.  
Nếu `PATH` chưa cập nhật, đổi cửa sổ vẫn có thể không tìm thấy.

### 3. Cập nhật là cài lại một lần

Nhiều khi bạn cần xác nhận trước:

- Phiên bản hiện tại có cũ không
- Bạn thực sự đang cập nhật bản cài nào

## Có thể kiểm theo thứ tự này

Vừa cài xong, có thể kiểm:

1. Xác nhận lệnh `codex` có chạy trực tiếp không
2. Xác nhận `PATH` của shell hiện tại có gồm vị trí cài không
3. Hoàn tất đăng nhập hoặc xác thực
4. Cuối cùng xác nhận thông tin phiên bản

Tiêu chuẩn thực tế hơn: terminal hiện tại tìm được nó, và bạn đã hoàn tất xác thực.

Cũng có thể đối chiếu: [Cài đặt CLI](/guide/getting-started/install-cli/)  
Hướng dẫn cài và nâng cấp chính thức: [Tài liệu OpenAI Codex](https://developers.openai.com/codex).

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI  
**Ghi chú tái kiểm:** Trang này dù nói tư duy kiểm sau cài, nhưng phần thân vẫn mặc định có một bộ quy trình cài, cập nhật và xác thực hiện tại; vì cách cài CLI chính thức, bước xác thực và lệnh xác nhận phiên bản đều là chi tiết biến động cao — trước khi bổ sung tài liệu cài chính thức mới nhất không nên gắn `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
