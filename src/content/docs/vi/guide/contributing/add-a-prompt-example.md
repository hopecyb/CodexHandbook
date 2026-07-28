---
title: Thêm ví dụ Prompt
description: Gửi Prompt tái hiện được vào examples/prompts, kèm siêu dữ liệu và tiêu chuẩn nghiệm thu.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ví dụ Prompt nằm ở [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts) gốc kho, được nội dung sổ tay liên kết. Quy chuẩn thiết kế xem [`docs/planning/examples-system.md`](/docs/planning/examples-system.md).

## Nội dung trang này

Các điểm kẹt thường gặp gồm:

- Không biết “Prompt thế nào mới đáng thu thập”
- Không biết viết theo định dạng nào để người khác tái sử dụng trực tiếp được

Trang này giải quyết cách gửi một ví dụ **người khác thật sự thử được, học được, tái hiện được**.

## Tiêu chuẩn thu thập

Ở đây thu “ví dụ tái hiện được kèm ngữ cảnh, ranh giới và tiêu chuẩn nghiệm thu”, không phải mảnh cảm hứng.

Một ví dụ Prompt đạt yêu cầu ít nhất trả lời ba việc:

- Khi nào dùng
- Cụ thể nói thế nào
- Dùng xong phán đoán thế nào là đã làm tốt

Nếu chỉ là đoạn nghe thông minh mà người khác không biết tiền đề, cũng không biết nghiệm thu thế nào, nó giống ghi chú hơn ví dụ.

## Đặt tên tệp

```text
examples/prompts/<category>/<slug>.md
```

Ví dụ `category`: `development`, `research`, `meta-workflows`, `team`.

## Siêu dữ liệu bắt buộc (YAML frontmatter)

```yaml
---
id: prompt.fix-bug-with-tests
title: Sửa Bug và bổ sung kiểm thử
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: YYYY-MM-DD
---
```

## Các mục bắt buộc trong thân bài

1. **Tình huống dùng**
2. **Chuẩn bị trước khi dùng** (quyền, nhánh, tệp ngữ cảnh)
3. **Prompt bản khuyến nghị** (đầy đủ, sao chép được)
4. **Tiêu chuẩn nghiệm thu** (danh sách, kiểm khách quan được)
5. **Cách thất bại thường gặp**
6. **Trang sổ tay liên quan** (liên kết tới `src/content/docs/`)

Tùy chọn: bản tối giản, phân tích bản dạy học, biến có thể thay.

## Hiểu lầm thường gặp

### Đừng để trọng tâm bị phân tán

Một số người đóng góp viết rất nhiều nền, lý thuyết, giải thích mở rộng, còn Prompt thật sự sao chép dùng được lại ẩn giữa bài.

Cách viết ổn hơn:

- Viết đủ Prompt bản khuyến nghị trước
- Rồi bổ sung tiền đề, biến và cách thất bại
- Cuối cùng mới bổ sung nội dung giải thích

### Tự dùng một lần chưa phải ví dụ đầy đủ

Bạn biết lúc đó đầu mặc định những tiền đề nào, nhưng độc giả không biết.

Vậy phải viết các tiền đề đó ra, ví dụ:

- Áp dụng lối vào sản phẩm nào
- Cần những tệp, ảnh chụp hoặc ngữ cảnh nào
- Có mặc định cho phép sửa tệp, chạy lệnh, lên mạng không

### Đừng viết thông tin nhạy cảm thật vào ví dụ

Nếu ví dụ chứa token thật, tài khoản, liên kết nội bộ hoặc thông tin khách hàng, ví dụ đó không phù hợp kho công khai.

Ví dụ dạy phương pháp, không phải lộ môi trường production của bạn.

## Ví dụ tiêu chuẩn nghiệm thu

```markdown
## Tiêu chuẩn nghiệm thu

- [ ] Kiểm thử thất bại ban đầu đã qua
- [ ] Bộ kiểm thử trong phạm vi đã thỏa thuận đã qua
- [ ] Diff chỉ liên quan tệp của tác vụ
- [ ] Không chạy git push
```

## Ngưỡng chất lượng

- Mục tiêu và định nghĩa hoàn thành rõ
- Có mô tả quyền và ranh giới an toàn
- Không chứa khóa bí mật thật và PII
- Trạng thái `verified` cần [kiểm chứng độc lập](/guide/contributing/verify-technical-content/)

## Quy trình gửi

Thứ tự sau thường ổn hơn:

1. Xác định ví dụ này giải quyết loại tác vụ thật nào
2. Viết một bản Prompt người khác sao chép trực tiếp được
3. Đưa điều kiện tiên quyết và ranh giới tối thiểu cần thiết
4. Viết rõ “thế nào là thành công”
5. Cuối cùng kiểm có lộ thông tin nhạy cảm không, có đặt sai thư mục không

## Kiểm tra PR

- [ ] Đường dẫn tệp mới đã có trong chỉ mục `examples/README.md` (nếu đang duy trì chỉ mục)
- [ ] Ít nhất một trang case hoặc quy trình liên kết tới ví dụ này (tùy chọn nhưng khuyến nghị)

Một ví dụ Prompt tốt phải để người khác làm theo tái hiện được và nhận kết quả gần tương tự.

---

**Trạng thái:** verified  
**Căn cứ kiểm chứng:** Đã rà từng mục theo thư mục `examples/` hiện tại của kho, frontmatter ví dụ, cách lập chỉ mục và quy trình đóng góp; yêu cầu trang đã khớp cấu trúc liên kết case/quy trình hiện có, không phụ thuộc hành vi dễ thay đổi của một client Codex nào.  
**Kiểm chứng gần nhất:** 2026-07-26
