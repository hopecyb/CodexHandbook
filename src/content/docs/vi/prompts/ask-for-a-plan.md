---
title: "Khi nào thực hiện ngay và khi nào cần lập kế hoạch trước"
description: "Dựa vào phạm vi, độ bất định và tác động bên ngoài để chọn thực hiện ngay, lập kế hoạch trước hoặc chờ phê duyệt một hành động cụ thể; kèm hai cặp prompt đối chiếu."
contentType: prompt
audiences: [beginner, developer, creator]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Ba loại tác vụ và hai cặp đối chiếu là khuyến nghị biên tập về cách cộng tác. Đã kiểm tra ranh giới cấp quyền và thực thi; đây không phải chế độ cố định của ứng dụng khách hay thí nghiệm đo tỷ lệ thành công của mô hình."
locale: vi
source_locale: zh-CN
source_revision: 706f11b
translation_status: draft
translated_at: 2026-09-20
---

Có cần lập kế hoạch trước hay không phụ thuộc vào những quyết định còn bỏ ngỏ. Thay đổi có phạm vi rõ ràng và dễ hoàn tác có thể thực hiện ngay. Nếu chưa rõ hướng đi, hãy lập kế hoạch trước. Dừng lại trước một hành động cụ thể cần thêm quyền cho phép. Yêu cầu lập kế hoạch không có nghĩa là phải chờ người dùng trả lời sau từng bước.

## Trước tiên hãy xác định loại tác vụ

| Loại | Dấu hiệu nhận biết | Nên nêu rõ | Khi nào tạm dừng |
|---|---|---|---|
| Thực hiện ngay | Đầu vào, phạm vi và tiêu chí nghiệm thu rõ ràng; có thể hoàn tác thay đổi | Vị trí sửa, điều kiện hoàn thành và phần loại trừ | Khi vượt phạm vi hoặc thiếu thông tin thiết yếu |
| Lập kế hoạch trước | Có lựa chọn kiến trúc, phạm vi chưa rõ hoặc nhiều bước ảnh hưởng lẫn nhau | Khảo sát hiện trạng rồi nêu lộ trình, tác động và cách kiểm tra | Khi cần người dùng quyết định một phương án hoặc người dùng yêu cầu xem kế hoạch trước |
| Hành động cần phê duyệt | Một hành động cụ thể tạo tác động bên ngoài chưa được cho phép hoặc chạm giới hạn quyền thực thi | Chuẩn bị kết quả để xem xét rồi nêu rõ hành động, đối tượng và tác động | Trước hành động đó; giữ lại phần chuẩn bị đã hoàn tất |

“Liên quan đến ba tệp” không phải ngưỡng phê duyệt chung; chỉ một tệp cấu hình môi trường production cũng có thể gây tác động lớn. Xem [Quyền và sandbox](/vi/guide/permissions-and-sandbox/) về hộp thoại của sản phẩm và quyền thực thi thực tế. Đừng xem bảng này là cấu hình quyền của mọi ứng dụng khách.

## Đối chiếu 1: sửa câu chữ cục bộ

Tác vụ: sửa hai lỗi chữ trong README mà không thay đổi cấu trúc.

**Ví dụ phản diện với quá nhiều lần tạm dừng:**

```text
Trước khi đọc tệp, hãy lập kế hoạch và chờ tôi phê duyệt.
Đọc xong, hãy liệt kê hai chỗ định sửa và chờ tôi phê duyệt lần nữa.
Sau mỗi chỗ sửa lại dừng hỏi tôi, rồi hỏi có cần kiểm tra không.
```

Những lần chờ này không giúp quyết định điều gì cần thiết; chúng chỉ chia nhỏ một việc đã được cho phép và xác định rõ.

**Cách yêu cầu với phạm vi rõ ràng:**

```text
Trong phần nội dung của README.md, đổi hai chỗ “帐户” thành “账户”.
Giữ nguyên khối mã, liên kết và mọi nội dung khác. Sửa trực tiếp,
kiểm tra diff và báo cáo đã sửa ở đâu. Nếu số chỗ khớp thực tế không
phải hai, trước tiên hãy giải thích chênh lệch; đừng mở rộng thành
việc biên tập toàn bộ tài liệu.
```

Nghiệm thu đòi hỏi đúng hai thay đổi chính xác và nội dung không liên quan vẫn nguyên vẹn. Loại thay đổi này thường không cần thêm bài kiểm thử; hãy kiểm tra thích hợp theo quy tắc hiện có của dự án.

## Đối chiếu 2: sửa và xuất bản trang web

Tác vụ: cập nhật ba bài hướng dẫn và xuất bản lên trang production. Cần tách việc chuẩn bị nội dung khỏi tác động của xuất bản.

**Ví dụ phản diện với quyền cho phép chưa rõ:**

```text
Trước tiên viết kế hoạch, sau đó sửa toàn bộ trang web và đưa lên production.
```

Lời yêu cầu này không nêu nội dung nào cần sửa, xuất bản đến đâu, hay có được phép thay thế phiên bản đang hoạt động không.

**Cách yêu cầu với ranh giới cụ thể:**

```text
Cập nhật ba bài hướng dẫn này và sửa các liên kết nội bộ liên quan.
Đọc hiện trạng, đưa ra kế hoạch ngắn, rồi liên tục hoàn thành việc
sửa trong các tệp này và phần điều hướng liên quan, build và kiểm tra
bản xem trước mà không phải chờ sau từng bước. Giao bản xem trước,
tóm tắt thay đổi và kết quả xác minh. Việc xuất bản lên production
chưa được cho phép. Khi chuẩn bị xong, nêu phiên bản sẽ xuất bản,
môi trường đích và cách hoàn tác, rồi chờ tôi xác nhận hành động
xuất bản.
```

Lúc này nên hoàn tất công việc cục bộ trước khi xin quyền xuất bản cuối cùng. Nếu người dùng đã cho phép rõ ràng đích và hành động xuất bản cụ thể, hãy dựa vào chính sách hiện hành để quyết định có thể tiếp tục hay không; đừng xin lại cùng một quyền chỉ vì mẫu này có câu chờ xác nhận.

Hai cặp đối chiếu trên chỉ là ví dụ hướng dẫn, không phải đầu ra thực tế của mô hình hay phép đo hiệu suất.

## Khi nào chỉ lập kế hoạch

Nếu bạn còn so sánh các phương án, cần quyết định ngân sách hoặc nói rõ muốn xem thiết kế trước, có thể giới hạn tác vụ ở phần kế hoạch:

```text
Lần này chỉ lập phương án. Đọc cách triển khai hiện tại rồi đưa ra
hai lựa chọn, phạm vi ảnh hưởng và cách nghiệm thu. Chỉ ra những
đánh đổi thực sự cần tôi quyết định. Không sửa phần triển khai.
Chỉ thực hiện sau khi đã chọn phương án.
```

Phải tuân theo giới hạn giai đoạn đã nêu rõ này. Việc tác nhân thường có quyền tự chủ không cho phép bỏ qua để chuyển thẳng sang triển khai.

## Nên giữ gì trong kế hoạch

Một kế hoạch đủ dùng nêu rõ mục tiêu, phạm vi ảnh hưởng, các bước, cách kiểm tra và những lựa chọn chưa được giải quyết. Không cần biến câu trả lời đã biết thành câu hỏi chờ xác nhận. Tác vụ ngắn, ít rủi ro cũng không cần thêm mục hoàn tác chỉ để điền mẫu.

Khi có tình huống mới trong lúc thực hiện, hãy phân biệt chi tiết triển khai thông thường với thay đổi mục tiêu. Xử lý và giải thích các vấn đề nhỏ trong phạm vi ban đầu. Nếu xuất hiện phụ thuộc mới, phạm vi sửa rộng hơn, thay đổi giao diện hoặc một hành động bên ngoài mới, trước tiên hãy xem chúng còn nằm trong quyền đã được cho phép không.

## Quy tắc mặc định có thể ghi vào hướng dẫn dự án

```md
- Thực hiện ngay tác vụ có phạm vi rõ ràng và có thể hoàn tác, rồi kiểm tra
  ở mức phù hợp.
- Với tác vụ phức tạp, nêu kế hoạch ngắn trước. Chỉ chờ phản hồi khi
  người dùng muốn duyệt trước hoặc có đánh đổi cần họ quyết định.
- Tiếp tục trong phạm vi đã được cho phép, không hỏi lại ở từng bước.
- Nêu vấn đề cụ thể khi thiếu dữ liệu quan trọng, vượt phạm vi hoặc
  cần hành động chưa được cho phép.
- Không xem việc hoàn thành chỉnh sửa cục bộ là tự động được phép
  xuất bản, gửi tin nhắn hoặc xóa dữ liệu.
```

Đây là gợi ý về cách làm việc có thể điều chỉnh, không thay thế quy tắc hệ thống, chính sách tổ chức hay sandbox. Xem [Thứ tự ưu tiên của ngữ cảnh](/vi/guide/context/context-priority/), [Lập kế hoạch](/vi/guide/agent-work/planning/) và [Mẫu phê duyệt của con người](/vi/cases/workflows/human-approval-patterns/).
