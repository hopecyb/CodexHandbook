---
title: Đóng góp
description: Cách đóng góp nội dung, case, ví dụ Prompt và bản dịch cho sổ tay — quy trình và chuẩn chất lượng.
sidebar:
  order: 80
locale: vi
source_locale: zh-CN
source_revision: b13e05c
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

**Sổ tay hướng dẫn Codex** là trang tài liệu do cộng đồng duy trì. Hoan nghênh sửa lỗi, bổ sung trang, thêm case tái hiện được và ví dụ Prompt trong [examples/](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md).

## Nội dung trang này

- Loại đóng góp và lối vào
- Chuẩn viết và kiểm chứng
- Kỳ vọng PR và phát hành

## Đóng góp nào có giá trị nhất

Nếu bạn thấy trên trang có:

- Chỗ bản thân đọc không hiểu
- Mục lục có lối vào nhưng nội dung chưa dẫn đường đủ
- Lệnh, ảnh chụp, mô tả đã lỗi thời

thì đó đã là manh mối đóng góp rất có giá trị.

Bạn không cần trở thành “người hiểu nhất lĩnh vực” rồi mới bắt đầu giúp. Nhiều cải tiến thật sự hữu ích đến đúng từ người lần đầu dùng, chỉ ra “chỗ này mặc định bạn đã biết, nhưng tôi thật sự chưa hiểu”.

## Loại đóng góp

| Loại | Mô tả | Hướng dẫn |
|---|---|---|
| Sửa/chỉnh nhỏ | Chính tả, liên kết, một câu lỗi thời | PR trực tiếp |
| Trang hướng dẫn mới | Nội dung chương dưới `src/content/docs/` | [Viết trang hướng dẫn](/vi/guide/contributing/write-a-guide/) |
| Case | `src/content/docs/cases/` | [Mẫu case](/vi/cases/use-cases/case-study-template/) |
| Ví dụ Prompt | `examples/prompts/` | [Thêm ví dụ Prompt](/vi/guide/contributing/add-a-prompt-example/) |
| Kiểm chứng kỹ thuật | Đánh dấu `verified`, cập nhật ngày | [Kiểm chứng nội dung kỹ thuật](/vi/guide/contributing/verify-technical-content/) |
| Bản dịch | `en/`, `zh-tw/`, v.v. | Lộ trình M6; ổn định nguồn trước |

## Hiểu lầm thường gặp

### Đóng góp không đồng nghĩa phải viết mới cả một chương lớn

Nhiều người lần đầu tham gia nghĩ “đóng góp” phải bổ sung cả bộ nội dung nặng.

Thật ra những việc sau đều rất có giá trị:

- Bổ sung một đoạn giải thích để người mới hiểu
- Sửa một diễn đạt gây hiểu nhầm
- Bổ sung một lối vào mục lục bị thiếu
- Hạ cấp hoặc ghi ngày lệnh lỗi thời

### “Tôi không phải chuyên gia” không bằng “phản hồi của tôi vô dụng”

Nếu độc giả mục tiêu vốn gồm người mới, chỗ bạn bị kẹt khi đọc chính là tín hiệu giá trị cao.

Chỉ cần: nói cụ thể vấn đề, và cố bổ sung thành diễn đạt rõ hơn, chứ không chỉ để lại câu “chỗ này không hiểu”.

## Nguyên tắc cơ bản

1. **Tiếng Trung giản thể `root` là nguồn** (trừ khi có ghi chú khác)
2. **Không sao chép** nguyên văn tutorial bên ngoài; tham khảo [kế hoạch tích hợp nguồn ngoài](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/external-source-integration.md)
3. **Sự kiện dễ thay đổi** phải ghi ngày `Kiểm chứng gần nhất`
4. **Mỗi sidebar slug** phải có markdown tương ứng, nếu không `npm run build` thất bại
5. Trang mới phải cập nhật đồng bộ sidebar trong `astro.config.mjs`

## Lần đóng góp đầu, có thể bắt đầu vậy

Nếu là lần đầu đóng góp, thứ tự vào ổn nhất là:

1. Chọn một điểm bạn vừa thật sự bị kẹt
2. Phán đoán thuộc sửa văn bản, bổ sung trang, bổ sung ví dụ hay kiểm chứng thông tin lỗi thời
3. Chỉ sửa khối nhỏ đó, nhưng nói rõ tiền đề và góc nhìn độc giả
4. Chạy build, xác nhận không làm hỏng cấu trúc site

Cách này dễ thành công hơn và dễ được review hơn so với lao vào sửa cả chương ngay.

## Phát triển cục bộ

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm install
pnpm dev
```

Trước khi gộp chạy:

```bash
npm run build
```

## Quy tắc ứng xử

- Tôn trọng công sức người khác; thảo luận việc, không công kích người
- Không gửi khóa bí mật thật, dữ liệu khách hàng
- Trước tái cấu trúc phạm vi lớn, thảo luận issue hoặc RFC trước

Đóng góp đầu không cần viết nhiều. Làm rõ một chỗ thật sự làm người mới bị kẹt, rồi xác nhận qua được kiểm chứng build, đã rất có giá trị.

## Liên kết liên quan

- Kho: <https://github.com/hopecyb/CodexHandbook>
- [Dàn ý chương](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md) (dùng cho lập kế hoạch)

---

**Trạng thái:** verified  
**Căn cứ kiểm chứng:** Đã rà từng mục theo cấu trúc thư mục hiện tại của kho, cách duy trì sidebar, hệ trạng thái trang và quy trình đóng góp; nội dung trang thuộc quy tắc duy trì sổ tay, không phụ thuộc hành vi UI dễ thay đổi của một client Codex nào.  
**Kiểm chứng gần nhất:** 2026-07-26
