---
title: Cập nhật và sửa lỗi của cẩm nang
description: Xem thay đổi nội dung, bài thực hành bị ảnh hưởng, giới hạn xác minh và cách báo lỗi gắn với một trang cụ thể.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Tổng hợp từ nội dung kho mã và nhật ký chạy hiện tại. Đây là lịch sử thay đổi của cẩm nang, không phải thông báo sản phẩm OpenAI hay bằng chứng rằng website đã triển khai công khai.
locale: vi
source_locale: zh-CN
source_revision: "3c99d35"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Trang này ghi cẩm nang đã thay đổi gì, tác vụ nào bị ảnh hưởng và đã xác minh đến đâu. Ngày tháng là ngày chuẩn bị nội dung; tình trạng xuất bản thực tế phụ thuộc vào phiên bản website bạn đang xem. Với thay đổi khả năng sản phẩm, hãy xem nguồn chính thức được dẫn trong bài hướng dẫn tương ứng.

## 2026-09-18: tài liệu có thể làm theo và giới hạn xác minh

| Thay đổi | Ý nghĩa với người đọc | Hồ sơ xác minh |
|---|---|---|
| [Báo cáo doanh số hằng tuần](/vi/cases/analyze-a-spreadsheet/) có đủ đầu vào và sản phẩm | Tải 46 dòng dữ liệu tổng hợp để thực hành hoàn tiền, loại trùng và so sánh giữa các kỳ | [Kiểm tra phép tính độc lập](/downloads/sales-weekly-report/record.md) |
| [Bài viết có nguồn](/vi/cases/write-an-article/) có bảng ánh xạ dữ kiện và tài liệu mâu thuẫn | Luyện giữ lại điểm chưa biết, không coi phỏng vấn tổng hợp là lời chứng thật | [Kiểm tra nguồn và cấu trúc](/downloads/source-backed-article/validation/record.md) |
| [Bộ slide](/vi/cases/create-a-slide-deck/) có PPTX, PDF và bản xem trước tám trang | Kiểm tra văn bản chỉnh sửa được và hình thức trang; không bảo đảm tương thích mọi phần mềm | [Hồ sơ phần mềm và kết xuất](/downloads/article-to-slides/validation/record.md) |
| [Lộ trình nhà sáng tạo](/vi/guide/learning-paths/creator/) và [lộ trình lập trình viên](/vi/guide/learning-paths/developer/) đi theo sản phẩm tạo ra | Mỗi bước có tài liệu, tiêu chí nghiệm thu và bước kế tiếp; lập trình viên có thể ghi kiểm thử đỏ rồi xanh | [Hồ sơ chạy lại cho lập trình viên](/downloads/developer-path/run-record.json) |
| [Bốn loại Skill](/vi/skills/examples/) có gói tải xuống hoàn chỉnh | Rà soát, viết, nghiên cứu và tự động hóa đều có tài liệu tham chiếu và phép kiểm tra; mẫu kích hoạt không phải phép đo định tuyến | “Môi trường và bằng chứng xác minh” trên các trang chi tiết |
| [Phân loại Issue](/vi/cases/use-cases/team-automation/issue-triage-suggestions/) sửa schema và ngưỡng triển khai | Không còn dùng “ba mẫu, tỷ lệ đồng thuận 80%” làm căn cứ triển khai; vẫn khuyên có người rà soát | [Hồ sơ chạy thử](/downloads/issue-triage/validation/record.md) |
| [Kiểm tra liên kết](/vi/cases/use-cases/team-automation/scheduled-link-check/) và [khôi phục lỗi](/vi/guide/reference/troubleshooting/failure-recovery-lab/) có tài liệu chạy thật | Tái hiện lỗi cục bộ và cách khôi phục; liên kết ngoài, lịch chạy thật và lỗi đăng nhập chưa được kiểm thử | [Hồ sơ khôi phục](/downloads/failure-recovery/validation/record.md) |

## 2026-09-18: lọc tình huống và điều hướng lộ trình

[Danh mục tình huống](/vi/cases/) cho phép lọc theo loại tác vụ và từ khóa, tạo URL lọc có thể chia sẻ. Thẻ lấy sản phẩm và trạng thái xác minh từ siêu dữ liệu của tình huống. Trong bản tiếng Trung giản thể và phồn thể, thanh bên lộ trình chỉ hiển thị lộ trình hiện tại, các bước và trợ giúp liên quan; trang tổng quan cho người mới nằm trên cùng và năm bước được đánh số. Có thể đặt lại bộ lọc khi không có kết quả. Nếu không chạy script, vẫn đọc được tất cả tình huống.

## 2026-09-18: mười hai lần chạy so sánh prompt

[Ba bộ so sánh prompt](/vi/prompts/comparison-lab/) hiện có sản phẩm thực tế, thời gian và điểm theo từng tiêu chí từ hai lần chạy A/B cho mỗi việc: báo cáo doanh số, bài viết có nguồn và sửa lỗi. [Gói kết quả](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) giữ lỗi công cụ, trường nhật ký còn thiếu và hash đường dẫn đã ẩn thông tin. Agent chính rà soát không làm mù nhãn, model thực tế chưa biết, nên không kết luận tỷ lệ thành công chung hoặc thời gian tiết kiệm.

## 2026-09-18: bài thực hành website hoàn chỉnh

[Tạo website](/vi/cases/build-a-website/) bổ sung yêu cầu cố định, trang HTML ban đầu, kết quả tham chiếu, mẫu nghiệm thu và lỗi neo của nút bấm. Trang tham chiếu đã được kiểm tra trên desktop và màn hình rộng 375px; các sửa chữa thực tế cùng nhật ký liên kết được giữ lại. Không có tuyên bố về triển khai, đăng ký người dùng hay hiệu quả model.

## 2026-09-18: điểm vào bản tiếng Trung gọn hơn

Trang chủ được tổ chức theo làm tác vụ, lộ trình vai trò, tra cứu vấn đề và tài liệu dùng lại, bỏ các đoạn giới thiệu vị trí và khả năng lặp lại. Điều hướng chính của bản giản thể và phồn thể nhấn mạnh tác vụ, lộ trình và mục tham khảo. Lộ trình phát triển chuyển vào menu tài nguyên; giao diện di động dùng cùng các điểm vào.

## 2026-09-18: tài liệu cố định cho người mới và bài phục hồi

[Lộ trình năm bước cho người mới](/vi/guide/learning-paths/beginner/) dùng cùng một bộ tài liệu sự kiện tổng hợp, thông báo tham chiếu, bốn mẫu lỗi và mẫu rà soát, bàn giao. Bài thực hành đi từ chỉ đọc, sửa một tệp đến khôi phục bản sao thật. Nhật ký script của tác giả chỉ chứng minh quy trình thao tác tệp; chưa có đánh giá model độc lập hoặc bằng chứng người đọc hoàn thành.

## 2026-09-18: ngày tháng trên lộ trình và bài tập thực tế

[Lộ trình ứng dụng AI](/vi/ai-roadmap/) giờ phân biệt bài nghiên cứu, công bố sản phẩm, bài kỹ thuật và chủ đề dự án không được sắp theo ngày đầu tiên xuất hiện. Mỗi chủ đề có nguồn cụ thể và điểm vào thực hành. Ngày của một bài viết không còn đại diện cho thời điểm phổ biến toàn ngành, và phép kiểm tra cấu trúc gói Skill không được gọi là đo kích hoạt trong ứng dụng khách. URL cũ vẫn giữ; tháng năm lịch sử không phải ngày của sự kiện hiện tại. Nguồn và phạm vi kiểm tra ở đầu từng trang chủ đề.

## 2026-09-18: sửa các giải thích dễ gây hiểu nhầm

- Điểm vào giá đổi thành “Tham khảo giá”. Bản ghi giá tại một thời điểm có nguồn, theo đồng tiền gốc được tách khỏi dữ liệu chưa biết; ước tính không còn dùng để xếp giá cao thấp toàn cầu. Trước khi mua, hãy kiểm tra giá thực tế hiển thị ở kênh bán.
- Đầu trang phân biệt trạng thái biên tập, đối chiếu nguồn, ví dụ đã chạy và ghi chú lịch sử. “Đã chạy” chỉ bao gồm script và môi trường được liệt kê, không phải tỷ lệ tin cậy của đầu ra model.
- [Thứ tự ưu tiên chỉ dẫn](/vi/guide/context/context-priority/) phân biệt vai trò thông điệp, quy tắc tìm hướng dẫn dự án và quyền thực thi, tránh khẳng định chung rằng chỉ dẫn mới hơn hoặc nghiêm hơn luôn ưu tiên.
- [SDK](/vi/guide/developer-platform/sdk-overview/) và [Webhook](/vi/guide/developer-platform/webhooks/overview/) phân biệt chạy cục bộ, dịch vụ tự vận hành và thiết kế callback; giao diện được đề xuất không được mô tả như hợp đồng chính thức.
- [Phân cấp tác vụ](/vi/prompts/ask-for-a-plan/) phân biệt thực hiện ngay, lập kế hoạch trước và phê duyệt hành động, không dừng ở mọi bước một cách máy móc.

Nguồn và phạm vi xác minh các cơ chế này nằm ở đầu những trang tương ứng. Bản tóm tắt cập nhật này không phải tài liệu giao diện đầy đủ.

## Khi phát hiện vấn đề trên trang

Cuối mỗi bài tiếng Trung có liên kết “Báo vấn đề của trang này (bản nháp GitHub)”. Liên kết mở bản nháp Issue chưa gửi, điền tiêu đề trang, đường dẫn nội bộ và ngày xác minh đã ghi. Hãy xem nội dung rồi tự gửi; cần tài khoản GitHub.

Nên nêu đoạn cụ thể, chênh lệch giữa kỳ vọng và thực tế, môi trường cần thiết và nguồn công khai nếu có. Chỉ chia sẻ thông tin đã ẩn dữ liệu: không dán khóa API, dữ liệu tài khoản, thư mục riêng, dữ liệu khách hàng hoặc nhật ký thô đầy đủ. Bản nháp không tự thu thập nhật ký tác vụ và không gồm tham số truy vấn của trang.

Nếu không có tài khoản GitHub, hãy lưu đường dẫn trang và mô tả vấn đề vào ghi chú cục bộ, rồi nhờ cộng tác viên có quyền gửi. Không cam kết thời gian xử lý và không tự gửi tin nhắn.

## Cách người duy trì xử lý

Sau khi tái hiện hoặc đối chiếu nguồn, hãy ghi lý do tiếp nhận, sửa hoặc chưa thể xác nhận. Khi thay đổi thông tin thực tế về sản phẩm, cập nhật bằng chứng tương ứng, không làm mới hàng loạt ngày xác minh của trang khác. Khi thay bài thực hành, đồng bộ tài liệu nguồn, gói tải và nội dung bài. Nếu kết luận cũ không còn đúng, giải thích tác động của cách làm cũ và các bước chuyển đổi, thay vì chỉ viết “đã tối ưu nội dung”.

Khi cập nhật trang này, hãy liên kết đến trang và hồ sơ xác minh cụ thể, giữ rõ phần chưa kiểm thử. Đây là lịch sử thay đổi của cẩm nang cộng đồng, không phải nhật ký phát hành chính thức của OpenAI.
