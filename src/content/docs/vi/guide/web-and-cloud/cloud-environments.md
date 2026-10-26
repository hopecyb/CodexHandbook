---
title: Môi trường Cloud
description: Cấu hình môi trường chạy, phụ thuộc, setup, bộ nhớ đệm và điểm bắt đầu của kho mã trong Codex Cloud.
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
locale: vi
source_locale: zh-CN
source_revision: "1745f70"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 20
reviewed_at: 2026-10-26
---

Môi trường Cloud xác định những gì Codex sẽ cài đặt và chạy cho một kho mã. Môi trường này không kế thừa cấu hình trên máy tính của bạn. Khi công việc chạy được ở máy nhưng thất bại trên Cloud, trước tiên hãy so sánh phiên bản runtime, phụ thuộc, biến và quyền truy cập mạng.

## Trình tự chạy của mỗi cuộc trò chuyện

1. Tạo container và checkout nhánh hoặc commit SHA đã chọn.
2. Chạy script setup; khi dùng lại bộ nhớ đệm, có thể chạy thêm script maintenance.
3. Áp dụng chính sách Internet.
4. Agent chạy vòng lặp thực thi lệnh, chỉnh sửa và kiểm tra, đồng thời đọc các tệp `AGENTS.md` áp dụng.
5. Trả về câu trả lời và diff để bạn tiếp tục trao đổi hoặc tạo PR.

Ảnh `universal` mặc định đã có sẵn các ngôn ngữ, gói và công cụ phổ biến. Bạn có thể cố định phiên bản Python, Node.js và những thành phần khác trong cài đặt môi trường, hoặc cài phụ thuộc bổ sung bằng script setup.

## Cấu hình tối thiểu có thể tái lập

Với dự án pnpm, trước tiên hãy cố định cùng phiên bản Node.js như CI trong môi trường rồi cấu hình:

```bash
corepack enable
pnpm install --frozen-lockfile
```

Trong `AGENTS.md` ở gốc kho mã, ghi rõ:

```md
## Kiểm tra

- Chạy `pnpm test` sau khi sửa mã.
- Chạy `pnpm typecheck` trước khi báo cáo hoàn tất.
- Không cập nhật lockfile trừ khi tác vụ yêu cầu thay đổi phụ thuộc.
```

Setup và Agent chạy trong hai phiên Bash khác nhau. Giá trị tạm thời được `export` ở setup không tự động chuyển sang phiên Agent. Hãy cấu hình giá trị không nhạy cảm trong cài đặt môi trường hoặc lưu lâu dài vào cấu hình shell theo hướng dẫn chính thức.

## Bộ nhớ đệm và maintenance

Cloud có thể lưu trạng thái container tối đa 12 giờ để tăng tốc cuộc trò chuyện mới và các lần tiếp tục. Sau khi khôi phục bộ nhớ đệm, hệ thống checkout nhánh được chọn cho cuộc trò chuyện và có thể chạy script maintenance để cập nhật phụ thuộc.

Thay đổi setup, maintenance, biến môi trường hoặc Secrets sẽ tự động làm bộ nhớ đệm mất hiệu lực. Nếu thay đổi trong kho mã khiến bộ nhớ đệm không tương thích, hãy dùng **Reset cache**. Trong Business và Enterprise, người dùng có quyền truy cập cùng môi trường có thể dùng chung bộ nhớ đệm; việc đặt lại có thể ảnh hưởng đến người khác trong workspace.

## Biến môi trường và Secrets

- Biến môi trường có mặt trong cả giai đoạn setup lẫn Agent.
- Secrets chỉ được giải mã trong setup và bị gỡ trước khi Agent bắt đầu.
- Giai đoạn setup có thể truy cập Internet.
- Giai đoạn Agent mặc định không có Internet, nhưng có thể bật riêng cho từng môi trường.

Những ranh giới này thường bị nhầm lẫn. Xem thêm [Secrets và biến môi trường](/vi/guide/web-and-cloud/secrets-and-variables/).

## Danh sách kiểm tra tính nhất quán

| Mục kiểm tra | Mục tiêu |
|---|---|
| Nhánh hoặc commit bắt đầu | Khớp với mô tả tác vụ |
| Phiên bản runtime | Khớp với CI hoặc ràng buộc production |
| Lockfile | Cài đặt ở chế độ cố định |
| Setup | Có thể lặp lại, không tương tác, dừng ngay khi lỗi |
| Lệnh kiểm tra | Được ghi trong `AGENTS.md` |
| Mạng | Agent chỉ được truy cập những miền và phương thức cần thiết |

## Nguồn chính thức

- [Môi trường Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Ảnh codex-universal](https://github.com/openai/codex-universal)
