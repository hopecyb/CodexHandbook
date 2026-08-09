---
title: Lập kế hoạch
description: Để Codex nói rõ bước, rủi ro và cách kiểm chứng trước, rồi mới quyết định có thực thi không.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Khi nói thẳng “bắt đầu sửa đi”, vấn đề thường gặp là:

- Tuyến đường nghĩ sai
- Phạm vi làm quá lớn
- Rủi ro không lộ trước
- Cách kiểm chứng vốn không đủ

Lập kế hoạch là đưa “định làm thế nào” ra cho bạn xem trước.

Ý nghĩa của kế hoạch là biến “tôi tưởng bạn sẽ làm vậy” thành **artifact trung gian có thể rà soát**. Đặc biệt với tác vụ phức tạp, thứ bạn thật sự phê duyệt là một đường thực thi, không chỉ là nhấn nút “bắt đầu”.

## Đưa kế hoạch trước đang xác nhận gì

Khi bạn bảo Codex “đưa kế hoạch trước”, thực ra đang xác nhận hai việc:

- Xác nhận nó có thật sự hiểu mục tiêu của bạn không
- Xác nhận tuyến đường nó chuẩn bị đi, bạn có sẵn sàng chịu không

## Một kế hoạch đạt yêu cầu ít nhất nên gồm gì

| Yếu tố | Vai trò |
|---|---|
| Các bước | Để tác vụ có thứ tự, không lao vào làm một cục |
| Tệp hoặc phạm vi liên quan | Lộ diện ảnh hưởng sớm |
| Rủi ro và mục cần xác nhận | Tránh coi giả định là sự thật |
| Cách kiểm chứng | Để “hoàn thành” có thể chứng minh |

Nếu chỉ có “sửa A, rồi sửa B” mà không có rủi ro và kiểm chứng, đó gần với danh sách việc hơn là kế hoạch thật sự.

## Sai lầm thường gặp

### 1. Kế hoạch có phải chỉ là liệt kê bước?

Kế hoạch thật sự hữu ích còn phải cho bạn biết:

- Ảnh hưởng những tệp hoặc vùng nào
- Chỗ nào còn không chắc chắn
- Làm xong thì chứng minh thế nào là thật sự hoàn thành

### 2. Tác vụ nhỏ thì mãi không cần kế hoạch?

Không tuyệt đối. Có tác vụ dù thay đổi không lớn, nhưng nếu:

- Bạn chưa quen kho
- Liên quan quyền hoặc phê duyệt
- Một khi lệch thì khó thu hồi

thì vẫn đáng dừng lại để nó nói rõ rồi mới làm.

### 3. Để nó đưa kế hoạch trước có phải chỉ thêm hình thức?

Với điều kiện bạn thật sự sẽ rà. Nếu bạn bảo nó đưa kế hoạch mà chẳng xem phạm vi, rủi ro và kiểm chứng, bước này thành hình thức; nhưng nếu nhờ đó phát hiện lệch sớm, làm lại thường giảm nhiều.

## Khi nào bắt buộc lập kế hoạch trước

- Liên quan nhiều tệp hoặc nhiều module
- Bạn chưa quen kho
- Cần phê duyệt thủ công rồi mới thực thi
- Thay đổi có thể ảnh hưởng hành vi production hoặc quy tắc cộng tác nhóm
- Bạn đã cảm thấy “làm lệch sẽ rất khó thu dọn”

Chỉnh văn bản nhỏ chưa chắc cần kế hoạch chính thức, nhưng tác vụ vừa và lớn tốt nhất nên dừng lại trước.

## Khi chưa chắc thì phán đoán thế nào

Nếu chưa chắc có cần lập kế hoạch trước không, hãy tự hỏi:

> **Nếu nó bắt đầu làm ngay bây giờ mà lệch, tôi có khó thu dọn không?**

Nếu câu trả lời là “có”, hãy yêu cầu kế hoạch trước.

## Cách yêu cầu kế hoạch khuyến nghị

Để Codex đưa kế hoạch trước, đừng bắt đầu ngay:

```text
Chưa sửa tệp. Hãy đưa kế hoạch dựa trên kho hiện tại, gồm:
1. Hiểu mục tiêu
2. Các bước đánh số
3. Tệp liên quan
4. Rủi ro hoặc mục cần xác nhận
5. Mỗi bước kiểm chứng thế nào
```

Cách viết đầy đủ hơn xem [Yêu cầu kế hoạch trước](/prompts/ask-for-a-plan/).

## Bạn đang rà gì

Khi xem kế hoạch, đừng chỉ xem “nghe có đúng không”, mà xem các câu hỏi này:

1. Nó có hiểu đúng mục tiêu thật không
2. Phạm vi ảnh hưởng có hợp lý không
3. Có bỏ qua kiểm tra tiền đề rõ ràng không
4. Cách kiểm chứng có đủ để chứng minh hoàn thành không

Nhiều lần làm lại không phải vì hiện thực kém, mà vì đã phê duyệt một kế hoạch mơ hồ.

Xem kế hoạch trước thường giúp nói rõ tuyến đường và rủi ro trước khi sửa tệp, chi phí cũng thấp hơn.

## Cách phản hồi kế hoạch

Bạn không cần viết lại cả kế hoạch, chỉ cần chỉ ra chỗ lệch:

```text
Giữ bước 1, chưa làm tái cấu trúc ở bước 2.
Tách thay đổi cơ sở dữ liệu thành bước độc lập.
Bổ sung phương án rollback khi thất bại.
Chỉ phân tích chỉ đọc trước, chưa vào hiện thực.
```

Kiểu “chỉnh từng bước nhỏ” này thường hiệu quả hơn “lật toàn bộ làm lại”.

## Ranh giới giữa kế hoạch và thực thi

Một thói quen cộng tác quan trọng là tách hai giai đoạn:

- **Giai đoạn kế hoạch**: cho phép khám phá, liệt kê lựa chọn, lộ sự không chắc chắn
- **Giai đoạn thực thi**: đẩy theo đường đã xác nhận

Nếu trong thực thi phát hiện tiền đề đổi, hãy quay lại kế hoạch, đừng cố lao. Xem [Tiến độ và điều hướng](/guide/agent-work/progress-and-steering/).

## Tác vụ rủi ro cao cần thêm ba mục trong kế hoạch

Nếu tác vụ đụng nhiều tệp, hệ thống ngoài, cấu hình quyền, script tự động hóa hoặc quy tắc nhóm, kế hoạch còn phải nêu rõ:

| Mục bổ sung | Vì sao quan trọng |
|---|---|
| Ranh giới quyền | Thao tác nào chỉ đọc, thao tác nào cần người xác nhận |
| Cách khôi phục | Nếu đi sai hướng thì quay lại trạng thái an toàn thế nào |
| Triển khai theo giai đoạn | Kiểm chứng trước trong thư mục test, dự án ví dụ hoặc phạm vi nhỏ |

Hãy yêu cầu kế hoạch chia thành: phân tích chỉ đọc, thay đổi tối thiểu, kiểm chứng, rollback. Bước ghi hệ thống ngoài hoặc ghi hàng loạt phải được liệt kê trước, không thực thi ngay.

## Lỗi thường gặp

- Kế hoạch không có cách kiểm chứng
- Chưa xác nhận đã nhảy từ kế hoạch sang thực thi
- Nhét nhiều mục tiêu độc lập vào cùng một kế hoạch
- Rõ ràng cần xác nhận mà chỉ viết “tôi bắt đầu làm rồi”

## Kết hợp khuyến nghị

- Cần chuỗi chính đầy đủ: xem [Khám phá—Kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/)
- Cần nói rõ Prompt: xem [Yêu cầu kế hoạch trước](/prompts/ask-for-a-plan/)
- Cần chỉnh hướng giữa chừng: xem [Tiến độ và điều hướng](/guide/agent-work/progress-and-steering/)
- Cần quy tắc dài hạn: xem [AGENTS.md là gì](/guide/customization/agents-md/what-is-agents-md/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với cách làm tác vụ “hiểu trước, lập kế hoạch, rồi thực thi và kiểm chứng” hiện tại của OpenAI Developers về Codex, cùng các chương Prompt, chất lượng và quy trình đã kiểm chứng trong sổ tay; nội dung trang giới hạn ở phương pháp lập kế hoạch tác vụ ổn định, không trích tham số phiên bản dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
