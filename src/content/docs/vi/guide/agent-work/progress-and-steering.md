---
title: Tiến độ và điều hướng
description: Khi thực thi lệch hướng, dùng lệnh ngắn để kéo Codex về đúng quỹ đạo.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Phản ứng thường gặp giữa chừng thực thi thường chỉ có hai:

- Không nói gì, cố để nó tiếp tục lệch
- Một câu “dừng, làm lại hết”

Cách phổ biến hơn là liên tục **điều hướng** trong lúc thực thi: giữ phần đã đúng, chỉ sửa chỗ lệch.

## Điều hướng đang làm gì

“Điều hướng” ở đây là bổ sung bước hiện tại nên đi thế nào, ví dụ:

- Phần nào đúng, giữ
- Phần nào bắt đầu lệch, đừng tiếp
- Bước tiếp theo ưu tiên cái gì

## “Điều hướng” là gì

Điều hướng là **chỉnh hướng cục bộ** trên trạng thái thực thi hiện tại.

Bạn thường cần nó khi:

- Nó hiểu đúng mục tiêu, nhưng thứ tự bước chưa lý tưởng
- Đã làm đúng một nửa, không muốn lật toàn bộ
- Bạn vừa bổ sung thông tin mới, cần chỉnh hành động sau
- Bạn thấy nó sắp vào tái cấu trúc hoặc mở rộng không cần thiết

## Một mẫu dùng nhiều nhất

Điều hướng giữa chừng có thể rất ngắn:

```text
Dừng ở bước hiện tại. Giữ A và B; hủy hướng sửa với C; bước tiếp theo chỉ làm D. Đừng bắt đầu E.
```

Loại lệnh này có bốn phần then chốt:

1. Dừng ở đâu
2. Giữ gì
3. Bỏ gì
4. Bước tiếp theo chỉ làm gì

## Sai lầm thường gặp

### 1. Phát hiện lệch thì có phải dừng hết làm lại?

Nếu đã có một nửa đúng, lật toàn bộ thường nghĩa là:

- Bạn phải giải thích lại ngữ cảnh
- Phần đã khớp cũng mất theo
- Vòng mới vẫn có thể lệch lần nữa

### 2. Chỉ cần nói “sai” là nó biết chỗ nào sai?

Thường chưa đủ.

Hiệu quả hơn là chỉ rõ:

- Giữ gì
- Bỏ gì
- Ưu tiên gì ngay bây giờ

### 3. Điều hướng và lập kế hoạch lại có phải một thứ?

- **Điều hướng**: tuyến đường cơ bản đúng, chỉ sửa cục bộ
- **Lập kế hoạch lại**: mục tiêu, tiền đề hoặc phạm vi ảnh hưởng đã đổi

## Vì sao chỉnh từng bước nhỏ hiệu quả hơn

| Chỉnh từng bước nhỏ | Lật làm lại |
|---|---|
| Giữ phần đã khớp | Phần trước đúng cũng mất |
| Tiết kiệm ngữ cảnh hơn | Cần giải thích lại nền |
| Dễ kiểm soát phạm vi hơn | Dễ lệch lần nữa |
| Giống cộng tác thật hơn | Giống đặt hàng lại |

## Khi nào điều hướng trước, khi nào quay lại lập kế hoạch

Bạn có thể phán đoán vậy:

- **Chỉ sai thứ tự, phạm vi lớn, dạng đầu ra sai**: điều hướng trước
- **Mục tiêu đổi, tiền đề đổi, mặt ảnh hưởng đổi**: quay lại lập kế hoạch

## Ba cách điều hướng thường gặp

### 1. Thu hẹp phạm vi

Khi nó bắt đầu làm quá lớn:

```text
Trước hết chỉ xử lý trang đăng nhập, đừng mở rộng sang đăng ký và quên mật khẩu.
```

### 2. Đổi thứ tự

Khi việc nó làm không sai, nhưng trước sau chưa hợp:

```text
Bổ sung kiểm chứng và kiểm thử trước, rồi mới tiếp tục sửa hiện thực.
```

### 3. Đổi dạng đầu ra

Khi bạn muốn xem phân tích trước chứ không đưa vào hiện thực ngay:

```text
Chưa sửa tệp. Hãy đưa bảng so sánh, nói rõ khác biệt giữa phương án hiện tại và phương án bạn đề xuất.
```

## Một điều hướng tốt nên cố gồm gì

- Vị trí cần dừng hiện tại
- Phần giữ lại
- Hướng không tiếp tục
- Ưu tiên mới
- Có cho phép tiếp tục thực thi không

Câu sau khá rõ:

```text
Giữ phán đoán của bạn về nguyên nhân vấn đề, nhưng chưa vào tái cấu trúc. Bước tiếp theo chỉ bổ sung một phương án sửa tối thiểu và bước kiểm chứng.
```

## Khi nào nên quay lại “lập kế hoạch lại”

Điều hướng phù hợp với lệch cục bộ, nhưng các trường hợp sau đáng quay về [Lập kế hoạch](/guide/agent-work/planning/) hơn:

- Bản thân mục tiêu tác vụ đã đổi
- Thông tin mới lật tiền đề cũ
- Phạm vi ảnh hưởng rõ ràng mở rộng
- Bạn đã chỉnh hai ba lần liên tiếp mà vẫn trôi

Nếu vấn đề không còn là lệch cục bộ, hãy quay thẳng về giai đoạn kế hoạch.

## Lỗi thường gặp

- Chỉ nói “sai”, không nói chỗ nào sai
- Bảo nó “tự quyết cách sửa” mà không cho ưu tiên
- Chỉ muốn tạm dừng một bước mà dùng lời dễ kích hoạt làm lại toàn bộ
- Đã thành tác vụ mới rồi vẫn cố nối bằng một câu bổ sung

Khi phát hiện lệch trong thực thi, dùng lệnh ngắn nói rõ “giữ gì, dừng gì, bước tiếp theo chỉ làm gì”.

## Kết hợp khuyến nghị

- Cần làm rõ đường thực thi trước: xem [Lập kế hoạch](/guide/agent-work/planning/)
- Cần viết quy trình thành chuỗi chính đầy đủ: xem [Khám phá—Kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/)
- Cần tách tác vụ cho người khác: xem [Subagent](/guide/agent-work/subagents/)
- Tác vụ gián đoạn rồi tiếp tục: xem [Bàn giao và khôi phục](/guide/agent-work/handoff-and-resume/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với mô tả hiện tại của OpenAI Developers về tác vụ dài, kiểm chứng và đẩy theo từng bước, cùng các chương kế hoạch, chất lượng và ngữ cảnh đã kiểm chứng trong sổ tay; trang này chỉ giữ nguyên tắc cộng tác ổn định “chỉnh cục bộ tốt hơn lật cả đoạn”.  
**Kiểm chứng gần nhất:** 2026-07-26
