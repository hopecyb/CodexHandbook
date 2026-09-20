---
caseCategory: development
directoryOrder: 50
contentType: case
outputs: [code, tests, markdown]
legacyVerification:
  status: "verified"
  products: "CLI / IDE"
  basis: "Mã khởi đầu đã được kiểm chứng: 1 trong 3 phép thử thất bại như dự kiến. Đáp án tham khảo đã được kiểm chứng: cả 3 phép thử đều thành công. Trang trình bày chuỗi bằng chứng theo thứ tự phép thử thất bại, nguyên nhân gốc, bản sửa tối thiểu, phép thử thành công, kiểm thử hồi quy và xem xét thủ công."
  checkedAt: "2026-08-25"
title: "Tình huống: sửa lỗi có kiểm chứng"
description: Dùng lỗi tính chiết khấu có thể chạy thử để tái hiện phép thử thất bại, tìm nguyên nhân, sửa tối thiểu, chạy kiểm thử hồi quy và xem xét diff.
locale: vi
source_locale: zh-CN
source_revision: 42d842e
translation_status: draft
translated_at: 2026-09-20
---

Đây không phải mẫu câu lệnh chỉ cần thay tên tệp là xong. Bạn sẽ dùng mã khởi đầu thực tế trong kho lưu trữ: trước tiên quan sát một phép thử thất bại, rồi kiểm tra cách bản sửa tham khảo giúp cùng bộ phép thử đó chạy thành công.

## Thông tin cơ bản

| Mục | Nội dung |
|---|---|
| Đối tượng | Lập trình viên |
| Công cụ | CLI hoặc IDE (kho lưu trữ trên máy) |
| Thời gian dự kiến | 25–45 phút |
| Kiến thức cần có | Chạy được một lệnh Node.js trong terminal và đọc được JavaScript cơ bản |
| Phụ thuộc của ví dụ | `node:test` tích hợp trong Node.js; không cần cài gói bên thứ ba |
| Ngày kiểm chứng | 2026-08-25 |

## 1. Mục tiêu và bối cảnh

**Bối cảnh nghiệp vụ:** Hàm `calculateTotal` của giỏ hàng nhận tỷ lệ chiết khấu theo phần trăm. Khi không có chiết khấu, kết quả đúng. Nhưng khi truyền `10` để chỉ mức giảm 10%, hàm lại dùng `10` như một hệ số nhân trực tiếp và cho ra tổng tiền âm.

**Mục tiêu:** Tìm lỗi tính chiết khấu, sửa ở mức tối thiểu và dùng cùng một bộ phép thử để chứng minh trạng thái chuyển từ thất bại sang thành công.

**Tiêu chí hoàn thành:**

- Bộ phép thử ban đầu luôn có 1 ca thất bại, với giá trị mong đợi là 36 và giá trị thực tế là -360.
- Sau khi sửa, cả 3 phép thử đều thành công.
- Bản sửa chỉ thay đổi cách quy đổi phần trăm chiết khấu, không viết lại API của giỏ hàng.
- Giải thích được vì sao phải lưu cả bằng chứng thất bại trước khi sửa lẫn kết quả thành công sau khi sửa.

**Ngoài phạm vi:** Thư viện xử lý độ chính xác tiền tệ, thuế, đổi tiền, nâng cấp phụ thuộc và giao diện người dùng.

![Quy trình sửa lỗi có kiểm chứng](/diagrams/verified-bug-fix-workflow-vi.svg)

Hai đường quay lại trong sơ đồ là quan trọng nhất: nếu phép thử liên quan vẫn thất bại, quay lại bản sửa tối thiểu; nếu kiểm thử hồi quy toàn bộ hoặc bước xem xét diff thất bại, quay lại phân tích nguyên nhân gốc. Đừng xóa các khẳng định kiểm thử hoặc mở rộng phạm vi sửa đổi chỉ để sớm có kết quả xanh.

## 2. Chuẩn bị tài liệu

Nếu muốn học theo một trình tự đầy đủ, hãy dùng [lộ trình dành cho lập trình viên](/vi/guide/learning-paths/developer/). Lộ trình này kết nối bài thực hành với việc đọc mã, xem xét thay đổi và mẫu bàn giao, đồng thời yêu cầu luyện tập trên bản sao `work/` riêng. [Bản tóm tắt lần chạy ngày 2026-09-18](/downloads/developer-path/run-record.json) mới được bổ sung ghi lại việc kiểm chứng lại điểm khởi đầu và đáp án tham khảo; ngày 2026-08-25 ở dưới là ngày kiểm chứng ban đầu của tình huống này.

Thư mục ví dụ:

```text
examples/complete-workflows/developer/verified-bug-fix/
├── brief.md
├── starter/
│   ├── cart.js
│   └── cart.test.js
├── prompts/
│   ├── 01-explore.md
│   ├── 02-fix-and-verify.md
│   └── 03-review.md
├── solution/
│   ├── cart.js
│   └── cart.test.js
└── validation.md
```

`starter/` là điểm bắt đầu bài thực hành và cố ý chứa một lỗi; `solution/` là đáp án tham khảo có thể chạy độc lập. Đừng thực hành trực tiếp trên đáp án.

## 3. Bước 1: tái hiện phép thử thất bại

Chạy lệnh sau từ thư mục gốc của kho lưu trữ:

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js
```

Kết quả mong đợi: lệnh thoát với mã khác 0; trong 3 phép thử có 1 phép thử thất bại. Bằng chứng chính có dạng:

```text
Expected values to be strictly equal:

-360 !== 36
```

Nếu phép thử không thất bại, hãy dừng lại. Kiểm tra xem bạn có chạy đúng `starter/` hay không, phiên bản Node.js và liệu các tệp đã bị sửa trước đó chưa. Không có trạng thái thất bại ổn định thì không có bằng chứng cơ sở về lỗi ban đầu.

## 4. Bước 2: khảo sát chỉ đọc

### Khảo sát

```text
Chưa sửa tệp nào. Hãy đọc:
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.js
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

Trình bày trong tối đa 6 ý:
1. Đầu vào nào gây ra lỗi;
2. Giá trị mong đợi và giá trị thực tế;
3. Sự khác nhau giữa phần trăm và hệ số tỷ lệ trong công thức;
4. Dòng nào cần sửa để thay đổi là nhỏ nhất;
5. Những hành vi công khai nào phải giữ nguyên;
6. Cần chạy những bước kiểm chứng nào sau khi sửa.
```

Một lời giải thích nguyên nhân gốc đạt yêu cầu phải chỉ ra rằng bên gọi truyền `10` với nghĩa 10%, nhưng phần triển khai lại tính trực tiếp `subtotal * 10`, thiếu bước chia cho `100`.

## 5. Bước 3: lên kế hoạch và thực hiện bản sửa tối thiểu

```text
Chỉ sửa phép quy đổi phần trăm chiết khấu trong starter/cart.js.
Không thay tên hàm, tham số, khẳng định kiểm thử hay cấu trúc tệp; không thêm phụ thuộc.

Sau khi sửa, lần lượt:
1. Chạy starter/cart.test.js;
2. Hiển thị bản tóm tắt kết quả kiểm thử thực tế;
3. Tóm tắt dòng đã sửa và lý do;
4. Không commit hoặc push Git.
```

Cốt lõi của bản sửa tối thiểu là:

```js
const discount = subtotal * (discountPercent / 100);
```

Đừng đổi `36` trong phép thử thành `-360` để có kết quả xanh. Việc đó chỉ sửa giá trị mong đợi, không sửa quy tắc nghiệp vụ.

## 6. Bước 4: kiểm chứng phép thử thành công

Nếu không muốn thay đổi mã khởi đầu của bài thực hành, bạn có thể chạy trực tiếp đáp án tham khảo:

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Kết quả mong đợi: cả 3 phép thử đều thành công và tiến trình thoát với mã 0.

Bản ghi kiểm chứng tối thiểu cần có:

| Bằng chứng | Câu hỏi cần trả lời |
|---|---|
| Lệnh thất bại trước khi sửa | Lỗi ban đầu có tái hiện ổn định không? |
| Khẳng định kiểm thử thất bại | Phép thử có thực sự bao phủ lỗi này không? |
| Diff của mã | Thay đổi có chỉ tác động đến nguyên nhân gốc không? |
| Phép thử liên quan sau khi sửa | Hành vi cũ nay đã đúng chưa? |
| Phép thử phạm vi rộng hơn | Các chức năng lân cận có bị ảnh hưởng không? |

Thư mục thực hành này chỉ có một bộ phép thử. Trong dự án thực tế, còn phải chạy lint, kiểm tra kiểu và toàn bộ phép thử theo `AGENTS.md`.

## 7. Bước 5: xem xét bản sửa

```text
Xem xét bản sửa này mà không chỉnh sửa tệp. Liệt kê phát hiện trước, rồi kết luận:
- Bản sửa có thực sự quy đổi phần trăm, thay vì nới lỏng phép thử không;
- Có thay đổi chữ ký hàm hoặc logic không liên quan không;
- Giỏ hàng trống, không chiết khấu và chiết khấu 10% đều được bao phủ chưa;
- Những rủi ro nào về độ chính xác tiền tệ vẫn nằm ngoài phạm vi tình huống này.
```

Người xem xét cũng cần xác nhận không có phụ thuộc mới, log gỡ lỗi, định dạng lại toàn bộ tệp hoặc thao tác Git ngoài yêu cầu.

## 8. Thất bại và cách khắc phục

| Vấn đề | Cách xử lý |
|---|---|
| Phép thử ban đầu không thất bại | Xác nhận đã chạy `starter/cart.test.js` và khôi phục mã khởi đầu chưa bị sửa |
| Đổi phép thử rồi mới có kết quả xanh | Khôi phục khẳng định kiểm thử; chỉ sửa phép quy đổi phần trăm trong mã triển khai |
| Phép thử liên quan vẫn thất bại | So sánh các giá trị thất bại và kiểm tra vị trí đặt `/ 100` |
| Toàn bộ bộ phép thử xuất hiện lỗi mới | Quay lại phân tích nguyên nhân gốc, hành vi công khai và phạm vi thay đổi |
| Phép thử thất bại không ổn định | Ổn định môi trường kiểm thử trước; một lần chạy xanh không đủ làm bằng chứng |

## 9. Áp dụng bài thực hành vào kho lưu trữ thực tế

Thay các đường dẫn ví dụ bằng tệp của bạn, nhưng giữ nguyên cấu trúc bằng chứng:

```text
Mục tiêu: sửa [hành vi sai có thể quan sát được].
Lệnh tái hiện: [lệnh chính xác]; lỗi hiện tại xảy ra ổn định ở [khẳng định kiểm thử quan trọng].
Phạm vi: chỉ sửa [tệp triển khai] và các phép thử cần thiết; không tái cấu trúc hoặc nâng cấp phụ thuộc.
Nghiệm thu: phép thử từng thất bại nay thành công; phép thử biên mới thành công; [lệnh chạy toàn bộ] thành công; diff không có thay đổi không liên quan.
Quyền hạn: không được push, phát hành hoặc sửa dữ liệu sản xuất; nếu cần thêm quyền, hãy dừng lại và giải thích.
Trước tiên chỉ đọc để xác định nguyên nhân gốc và rủi ro; chờ tôi xác nhận kế hoạch rồi mới sửa.
```

## 10. Đúc kết thành quy trình

- Nếu loại lỗi này lặp lại, hãy thêm một quy ước vào `AGENTS.md`.
- Có thể tạo Skill `regression-guard` để bắt buộc ghi lại bằng chứng thất bại, thành công và kiểm thử hồi quy.
- Đưa các phép thử biên thường gặp vào CI, thay vì chỉ giữ chúng trong cuộc trò chuyện.

## 11. Các chương liên quan

- [Chẩn đoán trước khi sửa](/vi/cases/workflows/diagnose-before-fixing/)
- [Lộ trình học dành cho lập trình viên](/vi/guide/learning-paths/developer/)
- [Chạy kiểm thử](/vi/guide/quality/run-tests/)
- [Xem xét diff](/vi/guide/quality/review-diffs/)
- [Định nghĩa tiêu chí hoàn thành](/vi/prompts/define-done/)

---

**Trạng thái:** verified

**Áp dụng cho:** CLI / IDE

**Căn cứ kiểm chứng:** Mã khởi đầu đã được kiểm chứng: 1 trong 3 phép thử thất bại như dự kiến. Đáp án tham khảo đã được kiểm chứng: cả 3 phép thử đều thành công. Trang trình bày chuỗi bằng chứng theo thứ tự phép thử thất bại, nguyên nhân gốc, bản sửa tối thiểu, phép thử thành công, kiểm thử hồi quy và xem xét thủ công.

**Kiểm chứng gần nhất:** 2026-08-25
