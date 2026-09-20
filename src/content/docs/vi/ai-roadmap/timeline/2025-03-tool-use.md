---
title: "Tool Use (sử dụng công cụ)"
description: "Sử dụng công cụ gồm chọn công cụ, tạo tham số, thực thi, đọc kết quả và quyết định bước tiếp theo. Một lần gọi thành công chưa có nghĩa toàn bộ tác vụ đã hoàn tất; cũng cần phân biệt lỗi thực thi với vấn đề do bước kiểm tra nghiệp vụ phát hiện."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Các sự kiện và mô tả dự án bên dưới đã được đối chiếu với nguồn gốc; lời khuyên học tập là nhận định của tác giả và không được trình bày như kết quả chạy thử sản phẩm."
  evidence:
    - label: "Thông báo ra mắt các công cụ mới cho Agent"
      href: "https://openai.com/index/new-tools-for-building-agents/"
locale: vi
source_locale: zh-CN
source_revision: efd508a
translation_status: draft
translated_at: 2026-09-20
---

## Sự kiện có thể kiểm chứng và phạm vi

**Ngày: 11/03/2025 · Loại: ra mắt sản phẩm.** OpenAI công bố các công cụ mới cho Agent, gồm Responses API, công cụ tích hợp sẵn và Agents SDK. Thông báo này là một mốc sản phẩm của một nhà cung cấp cụ thể, không phải ngày mô hình bắt đầu sử dụng công cụ.

Nguồn: [thông báo ra mắt các công cụ mới cho Agent](https://openai.com/index/new-tools-for-building-agents/). Đối chiếu ngày 18/09/2026; ngày nguồn được công bố và ngày trang này được kiểm chứng có ý nghĩa khác nhau.

## Chức năng này giải quyết vấn đề gì

Sử dụng công cụ gồm chọn công cụ, tạo tham số, thực thi, đọc kết quả và quyết định bước tiếp theo. Một lần gọi thành công chưa có nghĩa toàn bộ tác vụ đã hoàn tất; cũng cần phân biệt lỗi thực thi với vấn đề do bước kiểm tra nghiệp vụ phát hiện.

## Gợi ý học tập và giới hạn áp dụng

Sau đây là nhận định giảng dạy của trang này, không phải phép đo mức độ phổ biến hay hiệu quả trong ngành:

Giao các bước kiểm tra lặp lại được cho công cụ có mục đích rõ ràng, đồng thời lưu mã thoát, đầu ra và cách phục hồi. Hãy chứng minh các bước thủ công hoạt động trước, rồi mới cân nhắc lên lịch và gửi thông báo.

## Bài thực hành

[Năm bài thực hành phục hồi sau lỗi](/vi/guide/reference/troubleshooting/failure-recovery-lab/): tái hiện một nhóm lỗi, đọc nhật ký trước thay đổi, chỉ sửa một biến rồi kiểm tra kết quả sau thay đổi. Bài thực hành dùng script cục bộ và không yêu cầu gọi API trong thông báo.

[Quay lại lộ trình và quy ước về ngày tháng](/vi/ai-roadmap/)
