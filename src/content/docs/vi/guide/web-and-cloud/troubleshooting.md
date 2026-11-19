---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Xử lý sự cố Cloud
description: Xác định lỗi Cloud theo năm lớp là kho mã, setup, mạng, Agent và bàn giao.
locale: vi
source_locale: zh-CN
source_revision: "019fac1"
translation_status: stale
translated_at: 2026-09-20
sidebar:
  order: 80
reviewed_at: 2026-10-26
---

Chạy lại một tác vụ Cloud sẽ tốn thêm thời gian nhưng không tự bổ sung quyền, phần phụ thuộc hoặc cấu hình mạng còn thiếu. Trước tiên hãy xác định lỗi xảy ra ở giai đoạn nào.

## Phân loại theo năm lớp

| Giai đoạn | Triệu chứng thường gặp | Việc cần kiểm tra đầu tiên |
|---|---|---|
| Kết nối kho mã | Không thấy kho mã, lỗi 403, nhánh không tồn tại | Phạm vi cấp quyền GitHub, chính sách tổ chức, nhánh ban đầu |
| Container/setup | `command not found`, cài phần phụ thuộc thất bại | Phiên bản runtime, setup script, Secret |
| Mạng của Agent | Setup tải được nhưng `curl` trong Agent thất bại | Agent access mặc định Off, allowlist, phương thức HTTP |
| Agent thực thi | Sửa sai phạm vi, không có lệnh kiểm thử | Phạm vi prompt, `AGENTS.md`, nhật ký công việc |
| Bàn giao | Diff thiếu, không thể mở PR | Trạng thái nhánh, quyền ghi, quy tắc bảo vệ |

## Giữ lại bằng chứng trước

Ghi lại kho mã, commit ban đầu, tên môi trường, giai đoạn lỗi, lỗi có ý nghĩa đầu tiên và toàn bộ lệnh. Đừng chỉ giữ dòng cuối “exit 1”.

```text
Môi trường: api-node22
Điểm bắt đầu: main@abc123
Giai đoạn: setup
Lệnh: pnpm install --frozen-lockfile
Lỗi đầu tiên: ERR_PNPM_FETCH_401 ...
Khác biệt cục bộ: máy cục bộ dùng ~/.npmrc; Cloud chưa cấu hình NPM_TOKEN
```

Bản ghi như vậy giúp chỉ ra cách sửa trực tiếp thay vì để lượt sau phải đoán lại.

## Vấn đề thường gặp

### Đọc được Secret trong setup nhưng Agent thấy rỗng

Đây là hành vi theo thiết kế: Secret bị xóa trước giai đoạn Agent. Hãy thực hiện bước cài đặt cần thông tin xác thực trong setup; đừng chuyển nó thành biến môi trường thông thường để né cơ chế bảo vệ.

### Setup dùng được mạng nhưng Agent không dùng được

Đây cũng là hành vi mặc định. Nếu tác vụ thật sự cần Agent truy cập mạng, hãy bật trong môi trường, giới hạn miền và phương thức HTTP, rồi rà soát nhật ký.

### Bộ nhớ đệm làm phần phụ thuộc bị cũ

Thay đổi setup, maintenance, biến hoặc Secrets sẽ tự làm bộ nhớ đệm mất hiệu lực. Nếu thay đổi trong kho mã khiến bộ nhớ đệm không tương thích, dùng Reset cache trên trang môi trường. Với môi trường dùng chung, hãy đánh giá tác động tới người khác trước.

### Chạy tốt ở máy cục bộ nhưng lỗi trên Cloud

So sánh phiên bản Node/Python, lockfile, phần phụ thuộc hệ thống, cấu hình cục bộ bị ẩn, dịch vụ qua VPN/localhost và đường dẫn phân biệt chữ hoa chữ thường. Đưa các khác biệt đó vào setup và quy tắc kho mã một cách rõ ràng.

### PR review không được kích hoạt

Kiểm tra Cloud đã cấu hình cho kho mã, Code review đã bật, bình luận dùng đúng `@codex review` và tích hợp GitHub có đủ quyền. Tính năng review tự động cần được bật riêng.

## Khi nào nên quay về cục bộ

Nếu vấn đề phụ thuộc vào dịch vụ trên máy bạn hoặc hai lượt liên tiếp chỉ sửa môi trường chứ không sửa mã nghiệp vụ, hãy tái hiện tối thiểu ở cục bộ trước. Sau đó ghi lệnh, phiên bản và phép thử đã chạy tốt vào `AGENTS.md` hoặc setup rồi mới giao lại cho Cloud.

## Tiêu chí nghiệm thu sau khi sửa

- [ ] Có thể chạy lại trong cùng môi trường từ điểm bắt đầu sạch.
- [ ] Không che giấu lỗi bằng quyền kho mã rộng hơn hoặc truy cập mạng không giới hạn.
- [ ] Nhật ký không làm lộ Secret.
- [ ] Diff và kết quả kiểm thử vẫn được con người rà soát.

## Nguồn chính thức

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
