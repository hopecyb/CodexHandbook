---
title: Quyền và sandbox
description: Hiểu sandbox, phê duyệt, truy cập mạng và ranh giới thực thi cục bộ so với Cloud qua một chuỗi quyết định.
sidebar:
  order: 14
locale: vi
source_locale: zh-CN
source_revision: 6b29dc6
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Để dùng Codex an toàn, cần xem đồng thời hai lớp kiểm soát: **sandbox quyết định về mặt kỹ thuật có thể chạm tới đâu, còn chính sách phê duyệt quyết định có phải hỏi bạn trước khi vượt ranh giới hiện tại hay không.**

![Luồng sandbox và phê duyệt của Codex: hành động đi qua ranh giới sandbox, yêu cầu con người phê duyệt khi vượt biên và cuối cùng để lại bằng chứng xác minh](/diagrams/sandbox-approval-flow-vi.svg)

## Trước hết hãy nhớ sự khác biệt này

| Kiểm soát | Câu hỏi được trả lời | Đối tượng điển hình |
|---|---|---|
| Sandbox | Hành động này có thể chạm tối đa đến đâu? | Tệp dự án, đường dẫn ngoài dự án, năng lực hệ thống, mạng |
| Chính sách phê duyệt | Có phải hỏi con người trước khi vượt ranh giới hiện tại không? | Cài dependency, truy cập mạng, ghi thư mục ngoài, khởi động ứng dụng |
| Ràng buộc tác vụ | Công việc lần này nên và không nên làm gì? | Thư mục được phép sửa, hành động cấm, lệnh chấp nhận |
| Con người rà soát | Kết quả đã thực thi có chấp nhận được không? | diff, nhật ký, kiểm thử, tác dụng phụ bên ngoài |

Ràng buộc tác vụ không thay thế sandbox; sandbox cũng không thay thế bước rà soát cuối. Chúng lần lượt phụ trách ý định, ranh giới thực thi và chấp nhận kết quả.

## Một hành động đi qua ranh giới an toàn thế nào

Khi Codex chuẩn bị chạy lệnh hoặc gọi công cụ, có thể hiểu theo thứ tự sau:

1. Xác định hành động có nằm trong phạm vi sandbox hiện tại hay không.
2. Nếu nằm trong phạm vi, thực thi và ghi lại đầu ra; không nhất thiết xuất hiện hộp thoại.
3. Nếu vượt phạm vi, yêu cầu quyền theo chính sách phê duyệt hoặc bị từ chối trực tiếp.
4. Bạn có thể từ chối, yêu cầu hành động hẹp hơn hoặc chỉ phê duyệt thao tác cụ thể lần này.
5. Sau khi chạy, vẫn phải xem diff, kiểm thử và trạng thái hệ thống ngoài để xác nhận kết quả đáp ứng mục tiêu.

Sandbox cũng giới hạn tiến trình con và lệnh do Codex khởi động. Đừng giả định một hành động có thể vượt ranh giới chỉ vì nó nằm trong script.

## Ranh giới cục bộ và Cloud khác nhau

| Môi trường | Cách cô lập chính | Điểm chính về mạng | Điều cần kiểm tra |
|---|---|---|---|
| Tác vụ cục bộ trong App / CLI / IDE | Sandbox cấp hệ điều hành và chính sách phê duyệt hiện tại | Tác vụ cục bộ thường không nên mặc định phụ thuộc mạng ngoài; khi cần phải phê duyệt hoặc cấu hình rõ | Phạm vi workspace, lệnh, đường dẫn ngoài dự án, mục đích kết nối |
| Tác vụ Cloud | Container cô lập do OpenAI quản lý | Giai đoạn thiết lập có thể dùng mạng theo cấu hình môi trường; giai đoạn Agent mặc định tắt mạng trừ khi bật rõ ràng | Kho mã, cấu hình môi trường, tên miền cho phép, diff và bằng chứng xác minh trả về |

Secrets trong môi trường Cloud chỉ dùng ở giai đoạn thiết lập và bị loại bỏ trước khi giai đoạn Agent bắt đầu. Vẫn phải áp dụng quyền tối thiểu và không đưa thông tin xác thực production không liên quan vào môi trường tác vụ.

## Đánh giá yêu cầu phê duyệt theo bốn bước

### 1. Đối chiếu với tác vụ

Bước này có thật sự phục vụ mục tiêu hiện tại không? “Có thể hữu ích” chưa đủ để phê duyệt.

### 2. Đối chiếu phạm vi

Yêu cầu chạm vào dự án hiện tại, thư mục ngoài, mạng hay ứng dụng hệ thống? Đường dẫn, tên miền và lệnh càng cụ thể càng dễ đánh giá.

### 3. Đối chiếu tác dụng phụ

Nó chỉ đọc hay còn ghi tệp, cài phần mềm, gửi dữ liệu hoặc sửa trạng thái từ xa? Tác dụng phụ bên ngoài thường cần thận trọng hơn thay đổi cục bộ có thể hoàn tác.

### 4. Đối chiếu xác minh và khôi phục

Xác nhận thành công thế nào? Có thể hoàn tác khi thất bại không? Nếu chưa có câu trả lời, hãy yêu cầu Codex giải thích hoặc đưa ra phương án nhỏ hơn trước.

## Ví dụ cụ thể: cài dependency

Giả sử Codex yêu cầu chạy:

```bash
pnpm install
```

Đừng chỉ nhìn lệnh có quen thuộc hay không. Hãy xác nhận:

- Tác vụ hiện tại thực sự cần dependency đang thiếu
- Lệnh chạy trong đúng thư mục kho mã
- Cần truy cập registry gói nào
- Có sửa tệp khóa hay không
- Sau khi cài sẽ chạy kiểm thử hoặc build nào

Nếu chỉ xác minh mã hiện có và dependency đã được cài, bạn có thể từ chối và yêu cầu dùng môi trường hiện tại trước.

## Khai báo ranh giới trong prompt

Có thể ghi trực tiếp phạm vi thực thi vào tác vụ:

```text
Chỉ sửa src/auth và tests/auth.
Trước hết dùng dependency đã cài; không truy cập mạng hoặc nâng phiên bản.
Nếu thật sự cần đường dẫn ngoài dự án hoặc mạng, hãy giải thích trước mục đích, đích và thao tác tối thiểu.
Khi hoàn tất, chạy pnpm test --filter auth và báo cáo đầu ra cùng rủi ro còn lại.
```

Đoạn này làm rõ ý định, nhưng giới hạn thực thi thực tế vẫn do sandbox, chính sách phê duyệt và cấu hình quản trị của nhóm đảm nhiệm.

## Hiểu nhầm thường gặp

- **Có hộp thoại phê duyệt thì chắc chắn nguy hiểm**: cài đặt, truy cập mạng hoặc ghi ngoài dự án bình thường cũng có thể kích hoạt. Hãy xem tính cần thiết và phạm vi.
- **Không có hộp thoại thì hoàn toàn an toàn**: hành động có thể vốn đã nằm trong sandbox. Vẫn phải rà soát thay đổi thực tế.
- **Phê duyệt một lần là mở vĩnh viễn**: thời hạn và phạm vi tùy sản phẩm và chính sách; hãy đọc nội dung yêu cầu.
- **Agent con có bộ quyền khác**: Agent con kế thừa sandbox và chế độ quyền của tác vụ chính, không tự nhiên có quyền cao hơn.
- **Hooks có thể thay sandbox**: Hook là lớp bảo vệ và kiểm toán bổ sung, không thay thế cô lập cưỡng chế của hệ điều hành.

Xem thiết lập sản phẩm tại [phê duyệt và sandbox CLI](/vi/guide/cli/approvals-and-sandbox/) và [cài đặt App máy tính](/vi/guide/desktop-app/settings/); xem cách viết tác vụ tại [ràng buộc và biên](/vi/prompts/constraints-and-boundaries/).

---

**Trạng thái:** verified

**Sản phẩm áp dụng:** App / CLI / IDE / Cloud

**Căn cứ xác minh:** Đã đối chiếu với tài liệu hiện hành về sandbox, phê duyệt và an toàn của Codex. Trang này phân biệt ranh giới thực thi cấp hệ điều hành, chính sách phê duyệt, ràng buộc tác vụ và bước con người rà soát, đồng thời giải thích riêng mô hình mạng cục bộ và Cloud.

**Xác minh gần nhất:** 2026-08-26
