---
title: "Mức sử dụng, thời gian và lựa chọn model"
description: "Ghi riêng hạn mức thuê bao, chi phí API, thời gian chờ và công sức làm lại. So sánh model trên cùng tác vụ, không lấy mức tiêu thụ làm thước đo chất lượng."
contentType: "guide"
audiences:
  - "beginner"
  - "creator"
  - "developer"
  - "team"
level: "intermediate"
outputs:
  - "csv"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Đã đối chiếu hướng dẫn chính thức về mức sử dụng, giá API và cách tính phí token suy luận. Mẫu ghi chép và phép tính chỉ phục vụ giảng dạy; chưa có số đo thực tế về tốc độ, chi phí hoặc tỷ lệ tiết kiệm thời gian của model."
  evidence:
    - label: "Mức sử dụng và giá Codex chính thức"
      href: "https://learn.chatgpt.com/docs/pricing"
    - label: "Giá API chính thức"
      href: "https://developers.openai.com/api/docs/pricing"
    - label: "Hướng dẫn về model suy luận"
      href: "https://developers.openai.com/api/docs/guides/reasoning"
assets:
  - path: "/downloads/usage-log/usage-log-1.0.0.zip"
    purpose: "Mẫu ghi chi phí và thời gian chạy, ảnh chụp hạn mức cùng ghi chú nguồn"
    license: "CC0-1.0"
    version: "1.0.0"
locale: "vi"
source_locale: "zh-CN"
source_revision: "8b68d92"
translation_status: "reviewed"
reviewed_at: "2026-10-26"
translated_at: "2026-10-25"
---

Trước hết hãy xác định bạn đang ghi điều gì: hạn mức còn lại của tài khoản, chi phí một lần gọi API, thời gian chờ, hay thời gian con người dùng để rà soát và làm lại. Các đại lượng này có đơn vị khác nhau, không thể thay thế cho nhau.

[Tải mẫu ghi chép](/downloads/usage-log/usage-log-1.0.0.zip) · [Hướng dẫn điền](/downloads/usage-log/README.md)

## Ghi riêng bốn loại chi phí

| Chỉ số | Căn cứ ghi nhận | Cách hiểu sai thường gặp |
|---|---|---|
| Hạn mức thuê bao | Khoảng thời gian, tỷ lệ còn lại và thời điểm đặt lại hiển thị trên giao diện hiện tại | Đổi trực tiếp tỷ lệ còn lại thành đô la hoặc số tác vụ cố định |
| Chi phí API | Mức sử dụng thực tế của lần gọi, model và giá áp dụng; đối chiếu hóa đơn | Dùng giá thuê bao thay cho đơn giá API hoặc coi ước tính là khoản đã bị trừ |
| Thời gian chờ | Thời điểm bắt đầu, kết thúc, thời gian trong hàng đợi và số lần thử lại của cùng tác vụ | Chỉ ghi lần chạy thành công cuối cùng, bỏ qua thời gian của các lần thất bại |
| Công sức con người | Đo riêng thời gian rà soát và làm lại | Coi toàn bộ thời gian chờ model là nhân công được tiết kiệm |

[Giải thích giá chính thức](https://learn.chatgpt.com/docs/pricing) cho biết mức sử dụng của một tác vụ phụ thuộc vào model, ngữ cảnh, suy luận, công cụ và bộ nhớ đệm. Ước tính số tin nhắn không phải giới hạn cố định. Hãy xem bảng mức sử dụng để biết hạn mức hiện tại; trong phiên CLI có thể dùng `/status`. Sử dụng bằng khóa API được tính theo giá API.

Ảnh chụp hạn mức có thể bao gồm tác vụ khác hoặc thời điểm cửa sổ được đặt lại. Mức giảm 5% giữa hai lần chụp không chứng minh tác vụ này luôn tiêu thụ 5%, càng không cho phép hứa còn chạy được bao nhiêu lần.

## Xác nhận cách tính phí trước khi ước tính chi phí API

Tra giá theo model, loại token đầu vào, bộ nhớ đệm và đầu ra cùng điều kiện dịch vụ; sau đó tính bằng mức sử dụng thực tế. Nếu có hạng mục tính phí khác, hãy cộng riêng. Cẩm nang này không duy trì một bảng giá model cố định thứ hai. Xem [giá API](https://developers.openai.com/api/docs/pricing).

Token suy luận được tính phí như token đầu ra. Kiểm tra xem trường mức sử dụng đã bao gồm phần suy luận hay chưa để tránh cộng hai lần. Các mức suy luận có thể chọn cũng cần được đối chiếu với hỗ trợ của từng model trong [hướng dẫn model suy luận](https://developers.openai.com/api/docs/guides/reasoning).

Ví dụ giảng dạy: giả sử dùng 10.000 token đầu vào và 2.000 token đầu ra, không có bộ nhớ đệm hay phí khác. Với mức giá **giả định** 2 USD cho một triệu token đầu vào và 10 USD cho một triệu token đầu ra, chi phí ước tính là 0,04 USD. Ví dụ chỉ minh họa cách đổi đơn vị, không phải báo giá model hay hóa đơn thật.

## So sánh thiết lập trên cùng một nhóm tác vụ

Chọn các tác vụ có tiêu chí nghiệm thu rõ ràng và lập mốc tham chiếu bằng thiết lập hiện có. Giữ nguyên đầu vào, quyền công cụ, hướng dẫn dự án và phương pháp đánh giá. Mỗi lần chỉ thay đổi một yếu tố chính: model hoặc thiết lập suy luận.

So sánh riêng độ đúng, giới hạn, bằng chứng và công sức làm lại, thay vì chỉ xem tốc độ trả lời. Nếu thiết lập nhẹ hơn không đáp ứng ổn định tiêu chí nghiệm thu, hãy xác định nguyên nhân là thiếu tài liệu, phạm vi không rõ hay suy luận chưa đủ trước khi tăng mức. Thiết lập cao hơn không thay thế việc kiểm tra nguồn và kiểm thử.

Đây là phương pháp đánh giá do cẩm nang đề xuất, không phải kết quả thực nghiệm cho thấy model nào luôn thắng. Bạn có thể dùng [ba bộ so sánh prompt](/vi/prompts/comparison-lab/) và [mẫu đánh giá quy trình](/vi/guide/quality/workflow-evaluation/) để ghi quan sát của mình.

## Ghi điều kiện lấy mẫu

[Bảng các lần chạy](/downloads/usage-log/runs.csv) ghi hash đầu vào, nhãn model thực tế, ứng dụng khách, thiết lập suy luận, phương thức tính phí, thời gian, lần thử lại, kết quả và bằng chứng chi phí. [Bảng ảnh chụp hạn mức](/downloads/usage-log/allowance-snapshots.csv) ghi riêng khoảng thời gian và lúc đặt lại.

Giữ lại cả lần thất bại và bị gián đoạn. Ghi riêng thời gian rà soát và làm lại của con người. Để trống và giải thích các trường chưa biết; điền 0 sẽ tạo ấn tượng sai rằng không phát sinh chi phí. Dùng bí danh tài khoản và không đưa khóa, dữ liệu tài khoản hoặc nhật ký riêng tư vào tài liệu công khai.

Các bảng tải về hiện chưa có dòng đo thực tế nào. Không có mốc so sánh tương ứng với công việc của con người thì không tính tỷ lệ tiết kiệm; không có mẫu lặp lại thì không khẳng định lợi thế tốc độ ổn định. Ngay cả khi model chờ ít hơn, lượng việc phải làm lại nhiều hơn vẫn có thể khiến lựa chọn đó không đáng dùng.

## Xử lý khi gần chạm giới hạn

Lưu kết quả hiện tại, các vấn đề còn mở và cách tiếp tục. Kiểm tra xem tác vụ có đang lặp lại vô ích hoặc đọc tài liệu không liên quan hay không. Thu hẹp phần việc không thiết yếu theo mục tiêu nhưng giữ tiêu chí nghiệm thu về chất lượng và an toàn. Đừng bỏ qua bước kiểm tra quan trọng chỉ để hoàn tất trước khi hết hạn mức.

Nếu cần tiếp tục, hãy kiểm tra hạn mức hiện tại và phương thức tính phí trước khi chọn. Bài này không tự chuyển sang tính phí API, mua tín dụng hoặc chỉnh cài đặt tài khoản. Nhóm có thể dùng [lộ trình thử nghiệm hai tuần](/vi/guide/learning-paths/team/) để ghi lý do chọn và điều kiện quay lại.

Xem model hiện tại, khác biệt giữa sản phẩm và khuyến nghị tác vụ: [Chọn model: tìm điểm bắt đầu theo tác vụ](/vi/guide/reference/model-selection/).
