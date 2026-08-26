---
title: Xin kế hoạch trước
description: Trước khi Codex chỉnh sửa, hãy để nó nêu rõ các bước, rủi ro và cách kiểm chứng.
locale: vi
source_locale: zh-CN
source_revision: 0a2c7c7
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Nhiều vấn đề không phải không làm được—chỉ là **bắt đầu quá nhanh**. Một câu «giúp tôi sửa» dễ trộn khám phá, lập kế hoạch và thực thi; cuối cùng bạn chỉ còn nghiệm thu thụ động trong diff.

Lúc này cách hiệu quả hơn là yêu cầu kế hoạch trước, thay vì viết yêu cầu ngày càng dài.

## Khi nào nhất định phải xin kế hoạch trước

| Tình huống | Vì sao |
|---|---|
| Xuyên nhiều tệp hoặc mô-đun | Dễ đụng nhầm vùng không liên quan |
| Bạn chưa quen codebase | Xác nhận trước phạm vi nó hiểu |
| Yêu cầu còn dao động | Để bất đồng lộ ra sớm |
| Cần phê duyệt rồi mới thực thi | Tách «ủy quyền thực thi» khỏi «thảo luận hướng» |
| Liên quan thao tác rủi ro cao | Xem trước phương án rollback và kiểm chứng |

Typo nhỏ hoặc sửa copy đơn điểm chưa hẳn cần kế hoạch chính thức, nhưng cứ khi bạn thấy «làm lệch sẽ rất phiền», đáng dừng lại trước.

## Một kế hoạch tốt tối thiểu nên có gì

Bản tối thiểu cũng nên phủ bốn mục:

1. Các bước
2. Tệp hoặc phạm vi liên quan
3. Rủi ro hoặc điểm cần xác nhận
4. Cách kiểm chứng từng bước

Thiếu mục 4 thì gần như chỉ còn «danh sách việc», chưa phải kế hoạch có thể nghiệm thu.

## Ba cách hỏi thường dùng

### Bản tối giản

```text
Chưa sửa code. Trước hết đưa kế hoạch 3–5 bước: sẽ sửa tệp nào, mỗi bước kiểm chứng thế nào.
```

Phù hợp: bạn đã biết hướng đại thể, chỉ muốn xem nó sẽ tách thế nào.

### Bản khuyến nghị

```text
Chưa thực thi. Dựa trên kho hiện tại, đưa kế hoạch gồm:
1. Hiểu mục tiêu
2. Các bước có đánh số
3. Tệp hoặc thư mục liên quan
4. Rủi ro và mục cần xác nhận
5. Cách kiểm chứng

Trước khi tôi trả lời «thực thi theo kế hoạch», đừng sửa tệp.
```

Phù hợp: phát triển hàng ngày, chỉnh tài liệu, viết lại Prompt, điều chỉnh cấu hình.

### Bản rủi ro cao

```text
Chưa thay đổi gì. Trước hết xuất kế hoạch và nêu riêng:
- Bước nào dễ gây hồi quy nhất
- Nếu thất bại thì rollback thế nào
- Thao tác nào cần tôi xác nhận
- Kiểm thử hoặc kiểm tra thủ công nào chứng minh đã xong
```

Phù hợp: sự cố production, cấu hình quyền, script tự động hóa, tái cấu trúc xuyên mô-đun.

## Kế hoạch không phải càng dài càng tốt

Bạn cần một sản phẩm trung gian **có thể phê duyệt, chỉnh hướng và thực thi**—không phải một đề án dài.

Đánh giá kế hoạch có dùng được không bằng ba điểm:

- Bạn có nói rõ được «bỏ bước 2, đổi sang cách khác» không
- Bạn có nhìn ra ngay vùng then chốt nó sẽ đụng không
- Bạn có biết cách nghiệm thu trước khi bắt đầu không

Nếu chưa được, kế hoạch vẫn chưa đủ cụ thể.

## Bạn có thể phê duyệt kế hoạch thế nào

Không cần viết lại cả đoạn—chỉ cần định hướng như dẫn đồng nghiệp.

Câu dẫn thường dùng:

```text
Giữ bước 1 và 2, bỏ bước 3.
Tách thay đổi cơ sở dữ liệu thành một bước riêng.
Chỉ phân tích chỉ-đọc trước, chưa vào triển khai.
Bổ sung kiểm thử hồi quy và phương án rollback vào kế hoạch.
```

Cách này tiết kiệm ngữ cảnh hơn «làm lại từ đầu», và dễ kéo kết quả về đúng hướng.

## So với «bắt đầu làm luôn», lợi ích là gì

| Xin kế hoạch trước | Bắt đầu luôn |
|---|---|
| Phát hiện hiểu nhầm sớm | Thường sau khi sửa xong mới thấy lệch hướng |
| Thuận phê duyệt và cộng tác | Bạn chỉ xem thụ động diff cuối |
| Dễ tách thành tác vụ con | Dễ trộn nhiều mục tiêu |
| Cách kiểm chứng hiện rõ sớm | Thường đến cuối mới nhớ kiểm thử |

Nhiều workflow tách riêng «khám phá» và «kế hoạch». Xem [Khám phá—Kế hoạch—Thực thi—Kiểm chứng](/vi/cases/workflows/explore-plan-execute-verify/).

## Vấn đề dễ gặp nhất ở kế hoạch

### Chỉ có hành động, không có ranh giới

Ví dụ «cập nhật tài liệu và tối ưu cấu trúc» nhưng không nói sửa thư mục nào, không đụng mô-đun nào. Kế hoạch kiểu này dễ phình to.

### Chỉ có triển khai, không có kiểm chứng

Ví dụ «sửa logic component, cập nhật style, commit» nhưng không viết cách chứng minh hành vi không hỏng.

### Chỉ có danh sách việc, không có mục cần xác nhận

Kế hoạch tốt thừa nhận sự không chắc chắn; không giả vờ mọi tiền đề đã đứng vững.

## Nên kết hợp với

- Cần chuỗi thực thi chính thức: [Lập kế hoạch](/vi/guide/agent-work/planning/)
- Cần viết kế hoạch tái sử dụng được: [Cấu trúc tác vụ](/vi/prompts/task-anatomy/)
- Cần chỉnh hướng giữa chừng: [Tiến độ và điều hướng](/vi/guide/agent-work/progress-and-steering/)
- Cần định nghĩa nghiệm thu rõ: [Định nghĩa hoàn thành](/vi/prompts/define-done/)

## Một thỏa thuận nội bộ nhóm rất hữu dụng

Bạn có thể ghi rõ trong `AGENTS.md`:

```md
- Thay đổi liên quan từ 3 tệp trở lên: xuất kế hoạch trước
- Không chạy lệnh phá hủy khi chưa xác nhận
- Kế hoạch phải ghi cách kiểm chứng
```

Như vậy «xin kế hoạch trước» không còn là nhắc tạm thời, mà thành mặc định của nhóm.

## Nguồn tham khảo
- Tư duy kế hoạch và thực thi trong tài liệu chính thức OpenAI Codex
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ mô tả phương pháp cộng tác «xuất kế hoạch trước»; liên kết nội bộ và cấu trúc ví dụ đã được rà lại, và nội dung không phụ thuộc phiên bản sản phẩm, giá cả hay chi tiết giao diện dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
