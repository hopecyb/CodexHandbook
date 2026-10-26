---
title: "Function Calling (gọi hàm)"
description: "Mô hình có thể xuất tên hàm dự định gọi và các tham số có cấu trúc; ứng dụng xác thực chúng rồi quyết định có thực thi hay không. Tạo tham số, được cấp quyền và thực thi là ba bước riêng biệt."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Các sự kiện và mô tả dự án bên dưới đã được đối chiếu với nguồn gốc; lời khuyên học tập là nhận định của tác giả và không được trình bày như kết quả chạy thử sản phẩm."
  evidence:
    - label: "Thông báo ra mắt chức năng gọi hàm"
      href: "https://openai.com/index/function-calling-and-other-api-updates/"
locale: vi
source_locale: zh-CN
source_revision: "c362c48"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---

## Sự kiện có thể kiểm chứng và phạm vi

**Ngày: 13/06/2023 · Loại: ra mắt sản phẩm.** OpenAI công bố chức năng gọi hàm cho Chat Completions API vào thời điểm đó. Ngày này đánh dấu lần phát hành API của một nhà cung cấp cụ thể, không phải điểm khởi đầu của mọi hình thức gọi công cụ.

Nguồn: [thông báo ra mắt chức năng gọi hàm](https://openai.com/index/function-calling-and-other-api-updates/). Đối chiếu ngày 18/09/2026; ngày nguồn được công bố và ngày trang này được kiểm chứng có ý nghĩa khác nhau.

## Chức năng này giải quyết vấn đề gì

Mô hình có thể xuất tên hàm dự định gọi và các tham số có cấu trúc; ứng dụng xác thực chúng rồi quyết định có thực thi hay không. Tạo tham số, được cấp quyền và thực thi là ba bước riêng biệt.

## Gợi ý học tập và giới hạn áp dụng

Sau đây là nhận định giảng dạy của trang này, không phải phép đo mức độ phổ biến hay hiệu quả trong ngành:

Ưu tiên thiết kế đầu vào có thể xác thực, phạm vi quyền rõ ràng và phản hồi khi thất bại. JSON hợp lệ không có nghĩa là tham số đúng về mặt ngữ nghĩa, cũng không có nghĩa là đã được phép ghi vào hệ thống bên ngoài. Tên mô hình và ví dụ API trong thông báo cũ không phải hướng dẫn cấu hình hiện tại.

## Bài thực hành

[Chạy thử gợi ý phân loại Issue](/vi/cases/use-cases/team-automation/issue-triage-suggestions/): kiểm tra các gợi ý có cấu trúc cho Issue tổng hợp có gắn với đầu vào hay không; duy trì hàng đợi để con người rà soát. Bài này xác minh ranh giới dữ liệu mà không gọi API cũ hay công bố nhãn.

[Quay lại lộ trình và quy ước về ngày tháng](/vi/ai-roadmap/)
