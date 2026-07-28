---
title: Web và Cloud (tổng quan)
description: "Điều hướng lối vào cho Tác vụ Cloud, môi trường, Secrets và review PR."
sidebar:
  order: 13
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cloud phù hợp chạy Tác vụ trong **môi trường từ xa chuẩn hóa**, nối GitHub và tạo PR. Trước khi bắt đầu có thể xem [Cục bộ và đám mây](/guide/foundations/local-vs-cloud/), và đọc [tài liệu Cloud chính thức](https://developers.openai.com/codex).

Tác vụ không chạy trên máy bạn, mà tiếp tục chạy trong môi trường từ xa.

Tình huống kiểu này thường gặp khi:

- Tác vụ chạy lâu
- Bạn không muốn canh máy cục bộ
- Cần nối trực tiếp repo từ xa và quy trình PR

Cloud không nhất thiết là phần tiếp xúc đầu tiên, nhưng khi bắt đầu làm việc với repo từ xa, PR và Tác vụ dài bất đồng bộ, hầu như sẽ dùng tới.

## Điều hướng chương

| Giai đoạn | Trang |
|---|---|
| Kết nối | [Kết nối GitHub](/guide/web-and-cloud/connect-github/) |
| Môi trường | [Môi trường Cloud](/guide/web-and-cloud/cloud-environments/) |
| Chứng chỉ | [Secrets và biến môi trường](/guide/web-and-cloud/secrets-and-variables/) |
| Đầu ra | [Tạo Pull Request](/guide/web-and-cloud/create-pull-requests/) |
| Chất lượng | [Review mã Cloud](/guide/web-and-cloud/code-review/) |
| Hợp tác | [Ủy thác và theo dõi](/guide/web-and-cloud/delegate-and-follow-up/) |
| Mạng | [Truy cập Internet](/guide/web-and-cloud/internet-access/) |
| Xử lý sự cố | [Xử lý sự cố Cloud](/guide/web-and-cloud/troubleshooting/) |
| Tích hợp | [Tích hợp GitHub](/guide/integrations/github/) |

Khởi tạo Tác vụ Cloud từ App máy tính: [Tác vụ cục bộ và Cloud](/guide/desktop-app/local-and-cloud-tasks/). Ủy thác từ IDE: [Tác vụ Cloud IDE](/guide/ide/cloud-task-workflow/).

## Thứ tự đọc đề xuất

Lần đầu tiếp xúc Cloud, có thể đọc theo thứ tự này:

1. [Kết nối GitHub](/guide/web-and-cloud/connect-github/)
2. [Secrets và biến môi trường](/guide/web-and-cloud/secrets-and-variables/)
3. Quy trình PR, review mã và hợp tác

Nhìn rõ «nó nối repo thế nào, lấy quyền thế nào, xử lý khóa bí mật thế nào» trước, rồi mới xem chi tiết tự động hóa sẽ đỡ tốn sức hơn.

Cloud phù hợp xử lý Tác vụ repo từ xa tiếp tục chạy khi rời máy cục bộ, không chỉ là chuyển quy trình cục bộ lên trang web.

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud  
**Ghi chú đối chiếu:** Trang này với tư cách điều hướng Cloud vẫn có giá trị cấu trúc, nhưng các năng lực phụ thuộc như kết nối GitHub, Secrets, PR, theo dõi trên mobile và truy cập mạng đều thuộc vùng sản phẩm biến động cao; trước khi bổ sung từng trang theo tài liệu Cloud chính thức hiện hành, phù hợp hơn đánh dấu `outdated`.  
**Kiểm chứng gần nhất:** 2026-07-26
