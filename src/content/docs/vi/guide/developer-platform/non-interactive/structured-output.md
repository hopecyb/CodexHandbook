---
title: Đầu ra có cấu trúc
description: "Để `exec` tạo kết quả máy parse được — cho bước sau, dashboard và cổng kiểm soát."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Nhiều người lần đầu tự động hóa mặc định để Codex xuất một đoạn «nghe hợp lý». Người đọc còn ổn; script thì không thân thiện.

Đầu ra có cấu trúc giải quyết vấn đề rất thẳng: để Codex trả kết quả đúng định dạng bạn quy định.

Tác vụ không tương tác nếu chỉ xuất văn bản tự do, phía sau khó tự phán «đạt hay fail», «phát hiện bao nhiêu vấn đề», «mức nghiêm trọng thế nào». Đầu ra có cấu trúc khiến kết quả phù hợp hơn để máy tiếp tục xử lý.

## Nội dung trang này

- Khi nào yêu cầu JSON / bảng Markdown / trường cố định
- Cách định nghĩa schema trong Prompt
- Chiến lược hạ cấp khi parse thất bại

## Hiểu nhầm thường gặp

### Đầu ra có cấu trúc để bước tiếp theo bắt được

Nhiều người hiểu JSON, schema như chứng bệnh kỹ thuật.

Lý do thực tế hơn: nếu bước sau cần script phán thành bại, bot đăng bình luận, dashboard hiển thị kết quả, bạn cần định dạng ổn định, không phải để chương trình đoán bạn đang nói gì mỗi lần.

### Định dạng ổn định ≠ kết luận đáng tin

Đầu ra có cấu trúc chỉ đảm bảo «trông đúng như yêu cầu», không tự đảm bảo hiểu Tác vụ đúng.

Nó giải quyết giao diện đầu ra, không thay thế định nghĩa Tác vụ và Kiểm chứng kết quả.

## Một phân biệt trực tiếp

- Văn bản tự do: phù hợp người đọc
- Đầu ra có cấu trúc: phù hợp chương trình đọc

Nếu bước sau là `jq`, script, dashboard, quy tắc cổng, bot bình luận tự động nhận kết quả, bạn không nên chỉ dựa vào ngôn ngữ tự nhiên tùy hứng.

## Cách làm tối thiểu dùng được

Cố định yêu cầu định dạng cuối Prompt:

```text
…(nội dung Tác vụ)…

Yêu cầu đầu ra:
- Chỉ xuất một đối tượng JSON, không hàng rào mã markdown
- Trường: {"pass": boolean, "findings": [{"severity":"P0|P1|P2", "file":"", "message":""}]}
- Nếu không có vấn đề, findings là mảng rỗng
```

Parse shell (minh họa):

```bash
result=$(codex exec --cwd . "$(cat prompts/structured-review.md)")
echo "$result" | jq -e '.pass == true'
```

## Bẫy thường gặp

### 1. Chỉ nói «xuất JSON», không nói «chỉ được xuất JSON»

Kết quả mô hình mở đầu bằng lời giải thích rồi mới JSON — parse hỏng.

### 2. Hôm nay một tên trường, mai một tên trường

Script đã phụ thuộc trường nào thì phải bảo trì schema như giao diện, không sửa tùy tiện.

### 3. Muốn đầu ra có cấu trúc giải quyết mọi mơ hồ

Nó giải quyết «định dạng ổn định». Nếu Tác vụ vốn định nghĩa không rõ, JSON cũng chỉ ổn định xuất kết quả mơ hồ.

## Quy trình khuyến nghị

```text
Định nghĩa schema (số phiên bản v1)
    → Prompt tham chiếu tệp schema @schemas/review-output.json
    → Chạy exec
    → jq / validator tùy chỉnh kiểm tra
    → Không đạt thì exit 1
```

Đầu ra lớn có thể yêu cầu ghi đường dẫn tệp; Agent ghi vào `artifacts/`, CI upload artifact.

## Cách phán đoán

Nếu kết quả cần «chương trình bước sau» tiêu thụ tiếp, hãy cấu trúc hóa.  
Nếu kết quả chủ yếu để người đọc và thảo luận, văn bản tự do thường tự nhiên hơn.

Chỉ cần kết quả còn phải giao tiếp cho chương trình xử lý, hãy để Codex trả ổn định theo trường đã hẹn.

## So với SDK

| | CLI + JSON prompt | SDK |
|---|---|---|
| Chi phí tích hợp | Thấp | Trung bình |
| An toàn kiểu | Theo thỏa thuận + kiểm tra | Có thể dùng kiểu SDK |
| Phù hợp | Script CI | Dịch vụ đa tenant |

Xem [Tổng quan SDK](/guide/developer-platform/sdk-overview/).

## Lỗi thường gặp

- Đầu ra mô hình lẫn chữ giải thích khiến parse JSON fail — nhấn mạnh «chỉ JSON» trong Prompt
- Đổi schema không tăng phiên bản, CI cũ parse sai
- Đưa khóa bí mật vào trường JSON rồi ghi log
- Không thiết kế hành vi thoát rõ khi parse fail

## Checklist nghiệm thu

- [ ] Có tệp schema hoặc trường được ghi tài liệu
- [ ] CI fail rõ ràng khi parse fail
- [ ] Giữ mẫu đầu ra trong `fixtures/` để hồi quy
- [ ] Thống nhất với chiến lược [mã thoát](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Nguồn tham chiếu
- Thực hành chung OpenAI structured outputs (căn chỉnh khái niệm)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / API  
**Cơ sở kiểm chứng:** Tài liệu mô hình/so sánh OpenAI API hiện tại vẫn liệt kê năng lực `Structured outputs`; nội dung trang giới hạn ở thực hành chung «thiết kế giao diện đầu ra ổn định cho Tác vụ không tương tác»; schema JSON, kiểm tra và hạ cấp trong ví dụ thuộc mô tả mẫu kỹ thuật.  
**Kiểm chứng gần nhất:** 2026-07-26
