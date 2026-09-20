---
title: 'Tổng quan SDK: tác vụ cục bộ và tích hợp ứng dụng'
description: Phân biệt Codex SDK, CLI không tương tác, App Server và dịch vụ tác vụ từ xa do bạn tự xây dựng.
contentType: reference
audiences: [developer]
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Đã đối chiếu nơi thực thi, giao diện thread và ranh giới tích hợp với tài liệu SDK và App Server chính thức. Ví dụ tối thiểu chỉ được kiểm tra cú pháp; chưa gọi mô hình có xác thực.
  evidence:
    - label: Tài liệu Codex SDK chính thức
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Tài liệu Codex App Server chính thức
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: vi
source_locale: zh-CN
source_revision: e888ae6
translation_status: draft
translated_at: '2026-09-20'
---

Codex SDK cho phép chương trình điều khiển Codex Agent cục bộ. “Cục bộ” là máy chạy SDK và Agent: máy của bạn hoặc CI runner do bạn quản lý. Đừng coi đó là dịch vụ HTTP được OpenAI lưu trữ để tạo tác vụ Cloud, thăm dò trạng thái và tải thành phẩm. Xem [tài liệu SDK chính thức](https://learn.chatgpt.com/docs/codex-sdk).

## Chọn điểm vào theo mục tiêu tích hợp

| Mục tiêu | Bắt đầu từ | Bạn vẫn phải phụ trách |
|---|---|---|
| Chạy một tác vụ trong script | [`codex exec`](/vi/guide/developer-platform/non-interactive/codex-exec/) | Thư mục làm việc, đầu vào, mã thoát và lưu sản phẩm |
| Chạy và tiếp tục tác vụ bằng chương trình | Codex SDK | Vòng đời chương trình, môi trường, xử lý lỗi và xác minh |
| Tạo ứng dụng có phiên, phê duyệt và sự kiện truyền trực tiếp | App Server | Tương tác, kết nối, xử lý danh tính và triển khai |
| Cung cấp nền tảng tác vụ từ xa cho nhiều người dùng | Kiến trúc dịch vụ tự xây | Hàng đợi, cách ly tenant, thông tin xác thực, lưu trữ, hủy và callback |

Hàng cuối là lựa chọn thiết kế, không phải khả năng nền tảng lưu trữ sẵn trong SDK. Tài liệu chính thức dùng SDK cho tự động hóa và CI, App Server cho tích hợp ứng dụng sâu hơn. App Server trao đổi yêu cầu và sự kiện qua JSON-RPC hai chiều. Xem [tài liệu App Server](https://learn.chatgpt.com/docs/app-server).

## Lệnh gọi TypeScript SDK tối thiểu

Gói TypeScript chính thức là `@openai/codex-sdk`, yêu cầu Node.js 18 trở lên. Ví dụ dưới dùng cú pháp module JavaScript để thể hiện giao diện cơ bản của cùng gói; không phải dịch vụ production hoàn chỉnh.

Cài phụ thuộc trong thư mục luyện tập riêng, giữ lại phiên bản thực tế và lockfile:

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

Chuẩn bị `README.md` không chứa thông tin nhạy cảm và lưu nội dung sau thành `example.mjs`:

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  'Chỉ đọc README.md trong thư mục hiện tại và tóm tắt mục đích bằng ba ý tiếng Trung; không sửa tệp hoặc thực hiện thao tác bên ngoài.'
);
console.log(answer.finalResponse);
```

Sau đó chạy `node example.mjs`. Trước khi chạy, hãy hoàn tất xác thực theo môi trường và kiểm tra sandbox cùng chính sách phê duyệt thực tế. “Chỉ đọc” trong prompt là ràng buộc tác vụ, không thay thế giới hạn thực thi. Lệnh gọi mô hình có thể tiêu tốn hạn mức tài khoản; trang này chưa chạy cài đặt hoặc lệnh gọi thay bạn.

Tên phương thức và trường trả về đã được đối chiếu với [ví dụ chính thức](https://learn.chatgpt.com/docs/codex-sdk). Trang này chỉ kiểm tra cú pháp JavaScript, chưa khóa rồi kiểm thử một bản SDK phát hành cụ thể và không đưa ra kết quả thành công giả. Khi tự tái hiện, hãy ghi phiên bản gói, CLI/runtime, hệ thống, cách xác thực không ghi thông tin bí mật, và kết quả.

## Tiếp tục và khôi phục tác vụ

Có thể gọi `run()` lần nữa trên cùng đối tượng thread; ID thread đã có có thể đưa vào `resumeThread()`. Khả năng khôi phục phụ thuộc môi trường lưu trạng thái; đừng coi ID là URL Cloud có thể truy vấn từ máy bất kỳ. Cũng có giao diện Python chính thức; hãy xem riêng tên và phụ thuộc của nó trong tài liệu tương ứng, không trộn mã hai ngôn ngữ. Xem [lệnh gọi thread và giao diện theo ngôn ngữ](https://learn.chatgpt.com/docs/codex-sdk).

Sau khi khôi phục, trước hết đối chiếu tệp hiện tại với mô tả lịch sử; xem [Bàn giao và tiếp tục](/vi/guide/agent-work/handoff-and-resume/).

## Kiểm tra gì sau khi gọi thành công

1. **Vị trí chạy:** ghi thư mục làm việc và tệp thực sự đã đọc/sửa, không chỉ prompt.
2. **Kết quả:** kiểm tra câu trả lời, diff và kiểm thử. Có `finalResponse` không đồng nghĩa đã nghiệm thu nghiệp vụ.
3. **Loại lỗi:** phân biệt lỗi phụ thuộc/tiến trình cục bộ, xác thực, dịch vụ mô hình và xác minh tác vụ; đừng gộp mọi lỗi thành 400/429.
4. **Ảnh hưởng của retry:** kiểm tra xem đã có tệp hoặc tác động bên ngoài chưa trước khi quyết định thử lại; đừng gửi lại cùng yêu cầu một cách mù quáng.
5. **Quyền:** bạn chịu trách nhiệm về môi trường và công cụ khả dụng. Tên SDK không tự mang lại Cloud, quản trị tổ chức hoặc cách ly nhiều tenant.

Đây là các mục kiểm tra tích hợp mà trang này gợi ý, không phải danh sách trường trả về của SDK. Trường thực tế phải theo kiểu dữ liệu của phiên bản đã cài và tài liệu chính thức.

## Quan hệ với callback, hàng đợi và chạy từ xa

Runner của bạn có thể chạy SDK, rồi dịch vụ của bạn gửi thông báo hoàn tất. Khi đó trạng thái hàng đợi, callback HTTP, định dạng chữ ký và chính sách retry thuộc giao thức hệ thống của bạn. Luồng sự kiện App Server cũng không thể dùng trực tiếp như địa chỉ Webhook.

Đọc tiếp [Ranh giới Webhook và sự kiện tác vụ](/vi/guide/developer-platform/webhooks/overview/) cùng [Script và pipeline](/vi/guide/developer-platform/non-interactive/scripts-and-pipelines/). Trang này không hứa lệnh gọi SDK tự tạo tác vụ Codex Cloud, URL thành phẩm hoặc ủy quyền OAuth.
