---
title: "Chọn model ChatGPT và Codex"
description: "Chọn model và mức suy luận cho trò chuyện, viết, bảng tính, lập trình hoặc nghiên cứu, rồi đánh giá gói và mức sử dụng thực tế."
contentType: "reference"
audiences:
  - "beginner"
  - "creator"
  - "developer"
  - "team"
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 5
verification:
  kind: "source-checked"
  checkedAt: "2026-10-24"
  summary: "Đã kiểm tra tài liệu chính thức về model, suy luận trong Chat và gói. Khuyến nghị tác vụ là hướng dẫn biên tập, không có số đo thực tế về tỷ lệ thắng, tốc độ hay chi phí."
  evidence:
    - label: "Model Work và Codex"
      href: "https://learn.chatgpt.com/docs/models"
    - label: "Model Chat và mức suy nghĩ"
      href: "https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt"
    - label: "Gói và mức sử dụng"
      href: "https://learn.chatgpt.com/docs/pricing"
locale: "vi"
source_locale: "zh-CN"
translation_status: stale
reviewed_at: "2026-10-26"
translated_at: "2026-10-25"
source_revision: "20eb508"
---

**Hãy thử GPT‑6.1 Sol cho công việc phức tạp, Luna cho tác vụ nhỏ và rõ ràng, Astra cho bài toán khó. Trong Chat thông thường, chọn Instant, Thinking hoặc Pro.** Xác định sản phẩm đang dùng trước khi tra bảng tương ứng.

[Work / Codex](#work-codex) · [Chat thông thường](#chat) · [Gói và giá](/vi/chatgpt-pricing/) · [Ghi mức sử dụng thực tế](/vi/guide/quality/usage-time-and-model-choice/)

:::note[Phạm vi · 2026-10-24]
Model, thiết lập và hạn mức thay đổi theo tài khoản, ứng dụng khách, không gian làm việc và đợt triển khai. Đây là tài liệu tham khảo có ghi ngày; khuyến nghị là điểm bắt đầu, không bảo đảm tài khoản có quyền truy cập. Hãy kiểm tra riêng menu và quy tắc sử dụng của Chat, Work và Codex.
:::

<span id="work-codex"></span>

## Work / Codex: bắt đầu từ tác vụ

Các tình huống dưới đây là khuyến nghị biên tập. Bắt đầu bằng mức suy luận mặc định mà ứng dụng khách hỗ trợ. Kiểm tra đầu vào và phạm vi trước khi chọn model mạnh hơn.

| Tác vụ | Điểm bắt đầu đề xuất | Khi nào tăng mức suy luận hoặc đổi model | Thực hành và kiểm chứng |
|---|---|---|---|
| Trích xuất trường, đổi định dạng, chỉnh sửa nhỏ | GPT‑6 Luna | Thử Sol nếu đầu vào đã rõ mà vẫn thiếu trường hoặc sai ở điều kiện biên | [Ghi mức sử dụng và công sức làm lại](/vi/guide/quality/usage-time-and-model-choice/) |
| Viết từ nhiều nguồn | GPT‑6.1 Sol | Cân nhắc Astra nếu không xử lý được mâu thuẫn giữa các nguồn hoặc liên tục bỏ sót yêu cầu | [Viết bài](/vi/cases/write-an-article/) |
| Phân tích dữ liệu bán hàng và lập báo cáo | GPT‑6.1 Sol | Tăng mức suy luận nếu vẫn sai về hoàn tiền, khử trùng lặp hoặc so sánh với kỳ trước; vẫn tính kiểm tra độc lập | [Báo cáo bán hàng](/vi/cases/analyze-a-spreadsheet/) |
| Sửa lỗi hoặc thay đổi nhiều tệp | GPT‑6.1 Sol | Cân nhắc Astra khi quan hệ phụ thuộc khó hoặc sửa nhiều lần vẫn thất bại | [Sửa lỗi và kiểm chứng](/vi/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| Nghiên cứu nhiều nguồn với yêu cầu nghiêm ngặt | GPT‑6.1 Sol; cân nhắc Astra cho bài toán khó | Tăng mức suy luận nếu suy luận không tổng hợp được bằng chứng mâu thuẫn hoặc liên tục bỏ sót ràng buộc | [Kiểm tra kết quả](/vi/guide/quality/) |

## Đặc điểm và sự đánh đổi của các model

| Model | Vai trò chính | Sự đánh đổi và giới hạn |
|---|---|---|
| GPT‑6 Luna | Xử lý hiệu quả tác vụ rõ ràng, lặp lại được và thường xuyên | Hữu ích cho tác vụ nhỏ; nhận định phức tạp cần kiểm tra kỹ hơn |
| GPT‑6.1 Sol | Cân bằng năng lực và chi phí cho công việc phức tạp | Được giới thiệu chính thức là gần Astra với chi phí thấp hơn, không có nghĩa tương đương ở mọi tác vụ |
| GPT‑6 Astra | Lựa chọn mạnh nhất cho công việc khó gồm nhiều bước | Cân nhắc khi chất lượng đầu ra quan trọng nhất; tác vụ đơn giản có thể không hưởng lợi nhiều từ mức sử dụng tăng thêm |
| GPT‑6 Sol và dòng GPT‑5.6 | Các lựa chọn đời trước có thể vẫn còn trong ứng dụng khách | Giữ quy trình đã kiểm chứng nếu vẫn hiệu quả; so sánh khuyến nghị hiện tại cho tác vụ mới |

[Hướng dẫn model chính thức](https://learn.chatgpt.com/docs/models) liệt kê 6.1 Sol trong Work và Codex. Không suy ra Chat thông thường cũng có lựa chọn cùng tên. Mô tả model Work/Codex và nhãn GPT‑6 trong Chat cần được hiểu theo từng sản phẩm.

<span id="chat"></span>

## Chat thông thường: chọn mức suy nghĩ

| Lựa chọn | Cách dùng đề xuất | Sự đánh đổi |
|---|---|---|
| Instant | Hỏi đáp hằng ngày, dịch, sửa đoạn ngắn | Ưu tiên tốc độ phản hồi |
| Thinking · Medium | Học tập, so sánh lựa chọn, phân tích thông thường | Điểm bắt đầu cho phân tích có cân nhắc |
| Thinking · High | Toán, quyết định có nhiều điều kiện, câu hỏi mã phức tạp | Dành thêm thời gian suy nghĩ cho câu hỏi khó |
| Extra High | Bài toán đặc biệt khó cần kiểm tra kỹ | Dùng khi cần, tùy quyền truy cập của gói |
| Pro / GPT‑6 Pro | Tác vụ khó và quy trình dài | Dùng Astra, tùy gói và hạn mức |

Tại thời điểm kiểm tra, tài liệu Chat liệt kê Medium và High cho Plus, Extra High và Pro cho các gói cao hơn. Không đồng nhất Think trên Free / Go với năng lực của gói trả phí. Yêu cầu Instant “suy nghĩ sâu” trên Plus / Pro không tự động tăng mức suy nghĩ; hãy chọn trong menu. [Tài liệu Chat chính thức](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## Khi nào tăng hoặc giảm mức suy luận

- Kết quả đạt tiêu chí nghiệm thu: giữ thiết lập hoặc thử mức nhẹ hơn trên cùng tác vụ.
- Thiếu nguồn hoặc mục tiêu: bổ sung đầu vào trước; suy luận nhiều hơn không tạo ra bằng chứng còn thiếu.
- Liên tục bỏ sót hoặc sai logic: giữ nguyên đầu vào và thay đổi từng mức suy luận hoặc model.
- Thiết lập cao hơn vẫn thất bại: thu hẹp tác vụ, kiểm tra công cụ, quyền và cách xác minh.

Model và mức suy luận là hai lựa chọn riêng. Mức cao hơn thường tốn thêm thời gian và token. Kiểm tra thiết lập được hỗ trợ theo model và ứng dụng khách; không áp dụng nguyên thiết lập Chat sang Codex. [Kiến thức cơ bản về model và suy luận](/vi/guide/foundations/models-and-reasoning/)

## Có cần đổi gói không?

Thử quyền truy cập miễn phí nếu chỉ thỉnh thoảng dùng. Cân nhắc Plus nếu thường xuyên viết, phân tích hoặc lập trình. So sánh Pro khi liên tục chạm giới hạn hoặc cần thêm năng lực hay hạn mức. Go phụ thuộc tính năng cần dùng và chênh lệch giá tại địa phương.

Đây là trình tự ra quyết định, không phải bảng xếp hạng giá trị áp dụng cho mọi người. **Gói Pro vẫn có giới hạn sử dụng model.** Kiểm tra riêng phí thuê bao, tín dụng bổ sung và phí API; tỷ lệ đơn giá không phải tỷ lệ tiết kiệm của cả tác vụ.

[Chọn gói và nguồn giá](/vi/chatgpt-pricing/) · [Tài khoản, gói và quyền truy cập](/vi/guide/getting-started/account-plans-and-access/)

## Đánh giá hiệu quả chi phí

So sánh cùng đầu vào, công cụ và tiêu chí nghiệm thu. Ghi riêng thời gian chờ, thất bại, thử lại, rà soát của con người và làm lại. Ưu tiên thiết lập nhẹ nhất đáp ứng ổn định tiêu chí, thay vì chỉ tối ưu tốc độ trả lời.

[Tải và điền bản ghi mức sử dụng](/vi/guide/quality/usage-time-and-model-choice/) hoặc dùng lại [ba bài tập so sánh prompt](/vi/prompts/comparison-lab/). Thí nghiệm prompt hiện có không ghi nhãn model thực tế và **không thể làm căn cứ xếp hạng model**.

## Nếu không dùng được model thì sao?

Kiểm tra bạn đang ở Chat, Work hay Codex, rồi kiểm tra phiên bản ứng dụng khách, gói, quyền không gian làm việc và thời điểm đặt lại hạn mức. Dùng model hiện có với phạm vi hẹp hơn hoặc lưu tiến độ rồi chờ. Chọn tên model không cấp thêm quyền truy cập.

[Xử lý vấn đề truy cập](/vi/guide/getting-started/account-plans-and-access/) · [Xử lý sự cố](/vi/guide/reference/troubleshooting/)

## Nguồn và cập nhật

Thông tin sản phẩm đến từ các nguồn chính thức ở trên; khuyến nghị tác vụ là nhận định biên tập. Trang này không có thí nghiệm hiệu năng model. Bản ghi giá được duy trì riêng trên trang giá; hãy xác nhận thông tin thanh toán thực tế.

- 2026-10-24: Hướng dẫn đầu tiên tách Chat khỏi Work/Codex, kèm liên kết bài tập, bản ghi mức sử dụng và nguồn giá.
