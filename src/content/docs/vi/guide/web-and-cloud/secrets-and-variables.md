---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Secrets và biến môi trường
description: Chọn đúng Secret chỉ dùng trong Cloud setup và biến môi trường thông thường tồn tại suốt cuộc trò chuyện.
locale: vi
source_locale: zh-CN
source_revision: "78937be"
translation_status: stale
translated_at: 2026-09-20
sidebar:
  order: 30
reviewed_at: 2026-10-26
---

Biến môi trường và Secret trong Cloud có vòng đời khác nhau. Sự khác biệt đó quyết định chúng có thể hỗ trợ điều gì một cách an toàn, chứ không chỉ là giao diện có che giá trị hay không.

| Loại | Giai đoạn thấy được | Nội dung phù hợp |
|---|---|---|
| Biến môi trường | Suốt setup và Agent | Cấu hình không nhạy cảm, như chế độ chạy hoặc địa chỉ gốc API công khai |
| Secret | Chỉ trong setup script | Token gói riêng tư, thông tin xác thực cần để cài phần phụ thuộc |

Secret được lưu với lớp mã hóa bổ sung, chỉ được giải mã khi tác vụ chạy và bị loại bỏ trước khi giai đoạn Agent bắt đầu. Nó không phải kênh thông tin xác thực chung để Agent gọi API sản xuất trong lúc chạy.

## Ví dụ đúng: cài gói riêng tư

Tạo Secret `NPM_TOKEN` trong cài đặt môi trường. Setup script dùng nó để tạo cấu hình xác thực tạm thời và cài phần phụ thuộc:

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

Agent không cần token ở giai đoạn tiếp theo; nó chỉ dùng phần phụ thuộc đã cài. Không được `echo` Secret vào nhật ký setup.

## Ví dụ sai

```text
Đặt API_KEY sản xuất thành biến môi trường thông thường,
rồi để Agent dùng curl gọi giao diện ngoài để kiểm tra đơn hàng thật.
```

Cách này khiến giá trị nhạy cảm tồn tại suốt giai đoạn Agent; nếu mở mạng, nó có thể bị gửi ra ngoài hoặc gây thao tác nhầm. Hãy dùng dữ liệu thử, mock, thông tin xác thực thử nghiệm tạm thời với quyền rất hẹp hoặc giới hạn phần chuẩn bị cần xác thực trong setup.

## Kiểm tra cấu hình

1. Liệt kê giá trị setup và Agent thật sự cần.
2. Giá trị nhạy cảm chỉ dùng để cài đặt phải là Secret.
3. Thiết lập không nhạy cảm mà Agent cần dùng phải là biến môi trường.
4. Không ghi giá trị vào prompt, issue, PR, kho mã hoặc `AGENTS.md`.
5. Chạy công cụ quét Secret và kiểm tra nhật ký setup.
6. Định kỳ xoay vòng và xóa thông tin xác thực không còn dùng.

Setup chạy trong phiên Bash riêng; lệnh `export` thông thường không tự kéo dài sang giai đoạn Agent. Giá trị không nhạy cảm cần có suốt cuộc trò chuyện phải được cấu hình trực tiếp thành biến môi trường, thay vì dựa vào trạng thái shell tạm thời.

## Quan hệ với CI

GitHub Actions Secrets và Codex Cloud Secrets là hai kho lưu trữ khác nhau, không tự đồng bộ. Có thể dùng cùng **tên** biến cho dễ ghi tài liệu, nhưng đừng sao chép cùng một token sản xuất có quyền rộng hơn nhu cầu tác vụ.

## Khi bị lộ

Lập tức thu hồi hoặc xoay vòng thông tin xác thực, rồi xử lý nội dung đã lộ trong nhật ký, cuộc trò chuyện, issue và lịch sử Git. Chỉ xóa tệp hiện tại không thể thu hồi Secret đã lan truyền.

## Nguồn chính thức

- [Cloud environments: variables and secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)
