---
title: "Lộ trình nhà phát triển: đọc mã, sửa lỗi, rà soát và bàn giao"
description: "Bài tập lỗi giỏ hàng hiện có kết nối đọc mã, kiểm thử đỏ/xanh, rà soát diff và bàn giao, kèm ba mẫu có thể điền."
contentType: "path"
audiences:
  - "developer"
level: "beginner"
outputs:
  - "javascript"
  - "markdown"
  - "test-log"
editorialStatus: "review"
verification:
  kind: "run-tested"
  checkedAt: "2026-09-18"
  summary: "Đã chạy lại bài tập tham khảo: ban đầu một trong ba bài kiểm thử thất bại, sau khi sửa theo bản tham khảo cả ba đều đạt và hai tệp kiểm thử giống nhau. Tác giả đã tự rà soát các mẫu; chưa có người học độc lập hoàn thành lộ trình."
  environment: "Node.js v22.16.0 / Darwin arm64; node:test tích hợp, không cần thư viện phụ thuộc bên thứ ba."
  evidence:
    - label: "Tóm tắt lần chạy thực tế"
      href: "/downloads/developer-path/run-record.json"
    - label: "Tài liệu rà soát tham khảo và giới hạn phạm vi của tác giả"
      href: "/downloads/developer-path/review-reference.md"
sidebar:
  order: 20
prev:
  link: "/vi/guide/learning-paths/"
  label: "Chọn lộ trình học"
next:
  link: "/vi/cases/use-cases/software-development/fix-a-bug-with-verification/"
  label: "Bắt đầu sửa bug có kiểm chứng"
locale: "vi"
source_locale: "zh-CN"
source_revision: "22d8bd3"
translation_status: "reviewed"
translated_at: "2026-09-20"
reviewed_at: "2026-10-26"
---
Dùng một bài tập giỏ hàng nhỏ để làm bốn việc: giải thích mã, sửa lỗi, rà soát thay đổi và bàn giao bằng chứng. Bạn không cần học trước mọi ứng dụng khách, cấu hình hoặc tính năng nhiều Agent.

Điều kiện tiên quyết: đọc được JavaScript đơn giản và chạy kiểm thử Node.js trong terminal cục bộ. Môi trường tham khảo dùng Node.js 22.16.0; không cần cài thư viện phụ thuộc bên thứ ba. Bạn có thể dùng CLI, IDE hoặc ứng dụng có quyền truy cập tệp và terminal cục bộ. Hành vi kiểm thử do Node.js quyết định.

## Chuẩn bị mã và thư mục bằng chứng

Dùng `examples/complete-workflows/developer/verified-bug-fix/` trong [kho mã nguồn của sổ tay](https://github.com/hopecyb/CodexHandbook). Đọc `brief.md` và `README.md` trước, chưa xem `solution/`. Các bước đầy đủ nằm ở [Sửa bug kèm kiểm chứng](/vi/cases/use-cases/software-development/fix-a-bug-with-verification/).

Chạy trong thư mục bài tập:

```sh
# work/ phải chưa tồn tại; nếu đã có bài tập của mình, chọn tên mới thay vì ghi đè.
cp -R starter work
mkdir -p evidence
```

Sửa trong `work/`, giữ `starter/` làm trạng thái ban đầu thất bại và `solution/` làm đáp án tham khảo. Lưu các mẫu dưới đây vào `evidence/`. Mẫu tải từ sổ tay không có toàn bộ mã; phải dùng cùng bài tập trong kho mã nguồn.

| Mốc | Điều kiện trước | Sản phẩm | Điều kiện hoàn thành |
|---|---|---|---|
| 1. Đọc mã | `brief.md` và `starter/` | `code-map.md` | Đầu vào, luồng dữ liệu, lỗi và nguyên nhân có căn cứ trong tệp |
| 2. Sửa và kiểm chứng | Nguyên nhân và kiểm thử chưa sửa | `work/cart.js`, `red.txt`, `green.txt` | Tái hiện thất bại trước, rồi cho cùng bộ kiểm thử đạt |
| 3. Rà soát diff | Thay đổi và hai đầu ra kiểm thử | `review.md`, diff triển khai | Không đổi kỳ vọng hay API, không có thay đổi ngoài phạm vi |
| 4. Bàn giao | Bằng chứng ba bước đầu | `handoff.md` | Người tiếp nhận tìm được tệp hiện tại và chạy lại bước tiếp theo |

## 1. Đọc mã và lập bản đồ có thể kiểm chứng

[Tải mẫu đọc mã](/downloads/developer-path/code-map-template.md). Cho Codex đọc `brief.md`, `starter/cart.js` và `starter/cart.test.js`, rồi giải thích theo chế độ chỉ đọc điểm vào, luồng dữ liệu, đầu vào gây lỗi, giá trị thực tế và mong đợi, dòng gây lỗi và giới hạn phạm vi.

Ghi kết quả vào `evidence/code-map.md`. Bài tập chỉ có hai tệp cốt lõi, không cần vẽ sơ đồ kiến trúc phức tạp. Điều kiện hoàn thành là giải thích được `10` nghĩa là mười phần trăm, vì sao cách tính sai biến tổng phụ 40 thành tổng -360 và vì sao kết quả đúng là 36.

Có thể xem [tài liệu đọc mã tham khảo của tác giả](/downloads/developer-path/code-map-reference.md), nhưng kết luận của bạn vẫn phải đối chiếu với mã thực tế. Sau đó mới sửa phần triển khai.

## 2. Lưu kết quả đỏ rồi sửa tối thiểu

Các lệnh sau đều chạy trong `verified-bug-fix/`:

```sh
node --test work/cart.test.js > evidence/red.txt 2>&1
```

Mã thoát mong đợi là 1: một trong ba bài kiểm thử thất bại. Mở `evidence/red.txt` và xác nhận bài kiểm thử giảm giá hiển thị giá trị thực -360, giá trị mong đợi 36. Nếu tất cả đều đạt, kiểm tra xem bạn dùng đáp án tham khảo hoặc sửa tệp trước hay không; đừng mặc định đã tái hiện kết quả đỏ.

Có thể giới hạn toàn bộ phạm vi thực thi như sau:

```text
Dựa trên brief.md và evidence/code-map.md, chỉ sửa phần quy đổi phần trăm trong work/cart.js.
Giữ nguyên chữ ký hàm và các khẳng định trong work/cart.test.js; không thêm thư viện phụ thuộc hay tái cấu trúc.
Sau đó chạy node --test work/cart.test.js và lưu đầu ra thực vào evidence/green.txt.
Nếu kết quả không như mong đợi, giữ bằng chứng thất bại và tìm nguyên nhân; không sửa khẳng định cho khớp phần triển khai.
Bàn giao mô tả thay đổi và kết quả kiểm thử; không commit hoặc push.
```

Hoàn thành khi cả ba bài kiểm thử gốc đạt với mã thoát 0 và thay đổi chỉ chạm tới nguyên nhân. Lệnh kiểm thử thất bại vẫn có thể tạo log; chỉ có `green.txt` không chứng minh kiểm thử đạt.

## 3. Rà soát diff và phần bỏ sót

[Tải mẫu rà soát](/downloads/developer-path/review-template.md) và ghi phạm vi so sánh thực tế: `starter/` được giữ lại so với `work/` của bạn, không mặc định so với `main` và không phụ thuộc kho có thay đổi chưa commit hay không.

```sh
diff -u starter/cart.js work/cart.js
diff -u starter/cart.test.js work/cart.test.js
```

Lệnh đầu phải hiện phần thay đổi quy đổi phần trăm; mã thoát 1 nghĩa là có khác biệt, không phải lệnh lỗi. Lệnh thứ hai phải không có đầu ra và có mã thoát 0. Cho Codex rà soát chỉ đọc diff thực và log đỏ/xanh, rồi ghi phát hiện, bằng chứng, phần chưa bao phủ và quyết định vào `evidence/review.md`.

Xác nhận kiểm thử không bị nới lỏng, API không đổi, không thêm thư viện phụ thuộc hoặc sửa ngoài phạm vi. Độ chính xác tiền tệ, thuế và đầu vào không hợp lệ chưa được bao phủ; ba kiểm thử đạt không có nghĩa hệ thống an toàn cho production. Đối chiếu với [tài liệu rà soát tham khảo của tác giả](/downloads/developer-path/review-reference.md).

## 4. Viết bàn giao rồi khôi phục từ tệp

[Tải mẫu bàn giao](/downloads/developer-path/handoff-template.md). Trong `evidence/handoff.md`, ghi thư mục hiện tại, tệp đã sửa, ràng buộc còn hiệu lực, đường dẫn bằng chứng, lệnh tiếp theo và kết quả mong đợi. Với dự án Git thật, ghi thêm nhánh, commit và trạng thái cây làm việc.

Có thể viết tác vụ chỉ đọc sau bàn giao như sau:

```text
Đọc evidence/handoff.md, trước hết kiểm tra các tệp hiện tại trong work/ có khớp mô tả bàn giao không.
Ở thư mục gốc bài tập, chạy node --test work/cart.test.js và ghi mã thoát cùng bản tóm tắt thực tế.
So sánh phần triển khai và kiểm thử trong work với starter. Nếu trạng thái khác, chỉ rõ khác biệt; đừng dùng lại kết quả xanh trong quá khứ.
Không sửa mã nữa, không commit hoặc push.
```

Có thể chạy trong tác vụ mới hoặc nhờ người cộng tác khác kiểm tra. Tự mở lại chỉ là bài tập khôi phục, không phải rà soát độc lập của con người. Xem định dạng trong [bản ghi bàn giao của tác giả](/downloads/developer-path/handoff-reference.md).

Hoàn thành khi chỉ dựa vào tệp bàn giao đã tìm được mã, kiểm thử, ranh giới và thật sự chạy được kết quả hiện tại. Nếu chưa chạy lượt này, giữ ghi chú “chờ kiểm chứng sau bàn giao”.

## Gặp vấn đề thì quay lại bước nào

- Không tìm thấy tệp: kiểm tra thư mục terminal và sự tồn tại của `work/`, rồi quay về chuẩn bị.
- Không có kết quả đỏ: kiểm tra điểm bắt đầu và bài kiểm thử gốc; kết quả xanh của đáp án tham khảo không thay thế việc tái hiện lỗi.
- Kiểm thử chỉ đạt sau khi sửa kiểm thử: khôi phục khẳng định gốc và quay lại phân tích nguyên nhân.
- Có thay đổi ngoài phạm vi: giữ diff, thu hẹp phần sửa và chạy lại kiểm thử.
- Bàn giao không khớp tệp: lấy tệp hiện tại làm căn cứ, cập nhật ghi chép rồi tiếp tục.

Trong dự án thật, bổ sung lint, kiểm tra kiểu và toàn bộ kiểm thử mà kho yêu cầu vào cấu trúc bằng chứng này. Xác định cần chạy gì từ hướng dẫn dự án thực tế. Bài tập này không có các kiểm tra bổ sung đó, nên đừng bịa kết quả đạt.
