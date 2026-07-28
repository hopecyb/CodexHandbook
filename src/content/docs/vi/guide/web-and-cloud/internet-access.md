---
title: Truy cập Internet
description: "Chính sách đi ra Cloud, cài dependency và rủi ro exfiltration dữ liệu — chỉ mở những gì cần."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Tác vụ Cloud thường cần **truy cập mạng đi ra**: kéo package npm/PyPI, gọi API, clone submodule. Đồng thời, truy cập Internet là bề mặt rủi ro cao cho **exfiltration dữ liệu** — Agent có thể gửi nội dung repo hoặc Secrets tới dịch vụ ngoài.

## Nội dung phủ

- Môi trường Cloud có tới Internet mặc định không
- Khi nào cho phép truy cập và giảm thiểu phơi bày thế nào
- Liên hệ với Sandbox cục bộ và chính sách Secrets

## Ranh giới cơ bản

«Cần mạng» không nghĩa là «mở hết».

Nhiều người thấy nhị phân:

- Hoặc không mạng gì cả
- Hoặc truy cập đầy đủ vì tiện

Cách làm thông thường là chỉ cấp những gì Tác vụ cần — không hơn.

## Hai tầng «mạng»

| Tầng | Ý nghĩa |
|---|---|
| Đi ra môi trường Cloud | Máy từ xa có tới Internet công cộng hoặc API nội bộ không |
| Mạng công cụ Agent | Tìm kiếm web trong phiên, curl, v.v. (tùy client) |

Trang này tập trung **môi trường Cloud**; khái niệm chung: [Sandbox và mạng](/guide/foundations/sandbox-and-network/).

## Vì sao cục bộ chạy được không nghĩa Cloud chạy được

Cục bộ bạn có thể thành công vì:

- Đã kết nối dịch vụ trên máy
- Có `.npmrc`, khóa SSH hoặc cấu hình proxy cục bộ
- Đang trên VPN doanh nghiệp

Cloud mặc định không kế thừa điều đó. «`npm install` cục bộ được» không nghĩa Cloud làm được tương tự.

## Tình huống điển hình cần truy cập đi ra

- Cài dependency: `npm install`, `pip install`, `go mod download`
- Kéo từ registry riêng (cần [Secrets](/guide/web-and-cloud/secrets-and-variables/))
- Gọi API bên thứ ba (thanh toán, bản đồ, cổng LLM, v.v.)
- Clone submodule hoặc tải asset build

## Nguyên tắc quyết định

Nếu hành động mạng không bắt buộc cho Tác vụ này, đừng mở trước.

Ví dụ:

- Registry package để cài: thường bắt buộc
- Trang web ngẫu nhiên hoặc tải thêm: thường không

## Chiến lược khuyến nghị

### Mặc định chặt, mở theo nhu cầu

1. Xác nhận chính sách mạng hiện tại trong [Môi trường Cloud](/guide/web-and-cloud/cloud-environments/)
2. Liệt kê **domain bắt buộc** (trình quản lý package, API doanh nghiệp) — tránh «mở cả Internet»
3. Trong `AGENTS.md`, ghi URL được phép và cấm đặt key vào Prompt
4. Kiểm chứng bằng Tác vụ thử: dependency cài được; site không liên quan bị chặn (nếu có chính sách tinh)

### Tách công việc với Secrets

| Nội dung | Ở đâu |
|---|---|
| API key, token | Secrets Cloud — không trong repo |
| URL base API được phép | Tài liệu hoặc tên biến môi trường (không giá trị) |
| URL proxy / mirror | Cấu hình chuẩn đội |

## Hiểu nhầm thường gặp

### 1. Truy cập mạng chỉ là tiện lợi, không phải bảo mật

Một khi lên mạng, đồng thời là:

- Vấn đề tải dependency
- Vấn đề dùng chứng chỉ
- Vấn đề exfiltration dữ liệu

### 2. An toàn miễn Secrets không nằm trong Prompt

Nếu môi trường đọc được Secrets và gửi kết quả ra ngoài, rủi ro vẫn còn.

### 3. Tìm kiếm web bằng đi ra Cloud

Một cái là mạng môi trường từ xa; cái kia là mạng công cụ trong phiên — đừng lẫn khi xử lý sự cố.

### Biện pháp chống exfiltration dữ liệu

- Không đặt chuỗi kết nối DB production vào mô tả Tác vụ
- Giám sát cố gắng gửi `.env` hoặc tệp khóa ra ngoài
- Với repo không đáng tin lần chạy Cloud đầu, thử **không đi ra hoặc Sandbox chỉ đọc**

## Căn chỉnh với phát triển cục bộ

`curl` cục bộ chạy được không nghĩa Cloud làm được — nguyên nhân phổ biến «đỏ trên Cloud»:

| Triệu chứng | Nguyên nhân có thể |
|---|---|
| Cài dependency fail | Đi ra bị chặn hoặc registry cần auth |
| Submodule không clone | Khóa SSH chưa tiêm qua Secrets |
| Timeout API nội bộ | Cloud không trên VPN doanh nghiệp |

Biện pháp: HTTPS + token, mirror truy cập được, hoặc ghi rõ Cloud không tới được tài nguyên nội bộ.

## Lỗi thường gặp

- Mở đi ra toàn cục vì tiện, rồi chạy Tác vụ không giới hạn trên repo có Secrets
- Giả định Cloud chia sẻ `.npmrc` laptop (chưa push hoặc không trong Secrets)
- Nhầm «cần mạng» với «cần công cụ tìm kiếm web»
- Chỉ phát hiện thiếu trạng thái kết nối cục bộ khi cài fail

## Checklist nghiệm thu

- [ ] Đã liệt kê domain/dịch vụ đi ra bắt buộc cho Tác vụ Cloud trên repo này
- [ ] Secrets đã cấu hình và không commit vào Git
- [ ] Đã cài đầy đủ + kiểm thử đạt một lần trên nhánh thử
- [ ] Đội biết dữ liệu nào không bao giờ được xuất hiện trong Prompt khi có mạng

## Tham chiếu

- Tài liệu mạng và bảo mật OpenAI Codex Cloud
- stormzhang `10-cloud.md`, `19-security.md`
- KimYx0207 CX-10, CX-11
- Các phần Cloud tại codex.bozhouai.com

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud  
**Ghi chú đối chiếu:** Trang phủ hành vi đi ra Cloud mặc định, chính sách domain và kiểm soát mạng tinh — rất phụ thuộc sản phẩm và tổ chức; thiếu tài liệu chính sách mạng chính thức hiện hành đủ mạnh thì không nên đánh `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
