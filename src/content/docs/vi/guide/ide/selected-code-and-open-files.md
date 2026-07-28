---
title: Vùng chọn và tệp mở
description: Dùng mã đã chọn và tệp đang mở để giới hạn chính xác phạm vi tác vụ IDE.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Tiện ích IDE rất phù hợp thay đổi **phạm vi nhỏ, độ chính xác cao**: bạn chọn một đoạn mã, nêu ý định, Codex sửa trong ngữ cảnh lân cận. Ở đây chủ yếu nói cách dùng vùng chọn và tệp mở để thắt phạm vi, tránh sửa sai chỗ.

Vai trò của vùng chọn rất đơn giản: bảo Codex tập trung vào đây, đừng tự phóng to phạm vi.

## Nội dung trang

- Chọn vùng chọn vs cả tệp vs đường dẫn @ thế nào
- Khi refactor nhiều tệp, tổ chức ngữ cảnh ra sao
- Giảm «sửa một đống tệp không liên quan»

## Ba cách giới hạn

| Cách | Khi nào dùng | Ví dụ |
|---|---|---|
| **Vùng chọn** | Một hàm, một component, gần stack lỗi | Chọn `parseUser()`, yêu cầu bổ sung xử lý giá trị rỗng |
| **Tệp mở** | Cần hiểu nhiều chỗ liên quan trong tệp | Mở `auth.ts` + `auth.test.ts` |
| **Đường dẫn @** | Xuyên thư mục, tệp chưa mở | `@src/api/client.ts` căn chỉnh kiểu với backend |

Độ sâu khái niệm: [Ngữ cảnh tệp và thư mục](/guide/context/file-and-folder-context/)

## Cách làm tối thiểu dùng được

1. Chọn **đoạn liên quan nhỏ nhất** (thường 10–80 dòng), trong Prompt viết rõ mục tiêu và [định nghĩa hoàn thành](/prompts/define-done/)
2. Nếu liên quan bên gọi, mở thêm hoặc @ 1–2 tệp thượng nguồn
3. Yêu cầu «chỉ sửa tệp liên quan X; liệt kê tệp sẽ sửa rồi mới làm»
4. Trong diff IDE chấp nhận từng khối — không chấp nhận hết một lần

## Tác vụ nhiều tệp

```text
Mở: tệp triển khai + tệp kiểm thử + định nghĩa kiểu
Vùng chọn: tùy chọn — bắt đầu từ hàm lối vào
Prompt: nêu biên mô-đun, thư mục cấm sửa
```

Refactor lớn nên dùng [cây làm việc Desktop App](/guide/desktop-app/worktrees/) hoặc [chế độ lập kế hoạch](/guide/agent-work/planning/). IDE hợp hơn cho kết thúc và commit bước nhỏ.

## Câu hỏi thường gặp

### 1. Mỗi lần đều phải chọn vùng?

Không nhất thiết. Nhưng nếu bạn đã biết trọng tâm nằm trong một đoạn nhỏ, chọn vùng thường ổn hơn chỉ gửi một câu «giúp tôi sửa hàm này».

### 2. Chọn càng nhiều không nhất thiết càng an toàn

Chọn quá lớn bằng cách nới lại phạm vi; chọn quá nhỏ lại thiếu ngữ cảnh cần thiết. Tiêu chuẩn thực dụng hơn là «vừa đủ dùng».

### 3. Tệp mở và đường dẫn `@` khác gì?

Có thể phân:

- **Tệp mở**: để nó thấy bạn đang xem gì
- **Đường dẫn @**: bạn nêu rõ một tệp bắt buộc phải đưa vào

Dùng vùng chọn và tệp mở, nói cho cùng, là cố gắng đừng mang theo phạm vi không liên quan.

## Phối hợp với rà soát

Trước khi chấp nhận, đối chiếu [Rà soát diff](/guide/quality/review-diffs/):

- Có chỉ các tệp đã ước định thay đổi không
- Ngoài vùng chọn có xóa bất ngờ không
- Kiểm thử có phủ nhánh mới không

Phía sản phẩm: [Rà soát thay đổi trong IDE](/guide/ide/reviewing-changes/)

## Lỗi thường gặp

| Lỗi | Hậu quả |
|---|---|
| Chọn cả tệp hàng nghìn dòng | Lãng phí ngữ cảnh, mặt thay đổi quá lớn |
| Không chọn vùng, chỉ nói «tối ưu một chút» | Mô hình tự mở rộng phạm vi |
| Chấp nhận hết gợi ý chưa đọc diff | Đưa vào lệch phong cách hoặc lỗ hổng bảo mật |

## Nguồn tham khảo

- [Định nghĩa ràng buộc](/prompts/constraints-and-boundaries/)
- `09-ide.md` của stormzhang

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** IDE  
**Căn cứ kiểm chứng:** Trang này nói phương pháp kiểm soát phạm vi ổn định nhất trong tiện ích IDE: kết hợp vùng chọn, tệp mở và đường dẫn `@` tường minh; đây là cách tổ chức ngữ cảnh chung khi sống cùng mã trong trình soạn thảo, không phụ thuộc tên nút tiện ích cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
