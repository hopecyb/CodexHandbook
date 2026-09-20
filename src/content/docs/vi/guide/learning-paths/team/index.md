---
title: "Lộ trình nhóm: thử nghiệm hai tuần, kiểm tra mẫu và quyết định mở rộng"
description: "Bắt đầu bằng một tác vụ ít rủi ro, dùng mười ngày làm việc để thu thập bằng chứng về vai trò, bản ghi chạy, rà soát, hoàn tác và mở rộng có giới hạn."
contentType: path
audiences: [team]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Tác giả đã diễn tập trên bàn lộ trình hai tuần, sáu mẫu tài liệu và ba tình huống ngoại lệ. Chưa có thử nghiệm với nhóm thật, rà soát độc lập hay số liệu tăng năng suất."
assets:
  - path: /downloads/two-week-pilot/two-week-pilot-1.0.0.zip
    purpose: "Quy định thử nghiệm, danh sách tác vụ, biểu mẫu rà soát, sự cố và hoàn tác, quyết định và lịch mười ngày"
    license: CC0-1.0
    version: 1.0.0
sidebar:
  order: 30
locale: vi
source_locale: zh-CN
source_revision: "3b46738"
translation_status: draft
translated_at: 2026-09-20
---

Bắt đầu bằng một tác vụ có phạm vi hạn chế và kết quả kiểm tra được. Dùng hai tuần thu thập bằng chứng để quyết định có nên mở rộng sử dụng hay không. Hai tuần ở đây là mười ngày làm việc. Nếu chưa đủ tác vụ, hãy kéo dài thử nghiệm; đừng tuyên bố thành công chỉ vì đã đến hạn.

[Tải bộ mẫu thử nghiệm hai tuần](/downloads/two-week-pilot/two-week-pilot-1.0.0.zip) · [Hướng dẫn sử dụng](/downloads/two-week-pilot/README.md) · [Lịch mười ngày](/downloads/two-week-pilot/templates/06-schedule.md)

## Trước khi bắt đầu: chọn tác vụ và người chịu trách nhiệm

Nên bắt đầu bằng [gợi ý phân loại Issue](/vi/cases/use-cases/team-automation/issue-triage-suggestions/) hoặc [kiểm tra liên kết cục bộ](/vi/cases/use-cases/team-automation/scheduled-link-check/). Trước tiên chạy thủ công với đầu vào tổng hợp, giữ bước rà soát của con người và đầu ra ở máy cục bộ.

Chỉ định người phụ trách, người thực hiện, người rà soát, quản trị hệ thống và đầu mối bảo mật, cùng người thay thế. Có thể kiêm nhiệm, nhưng quyết định liên quan đến ghi ra bên ngoài hoặc sự cố bảo mật cần được rà soát độc lập. Nếu chưa có người rà soát, giới hạn ở đầu vào tổng hợp và bản nháp cục bộ, đồng thời ghi nhận đó là tác giả tự kiểm tra.

Điều kiện tiên quyết: biết lưu nhật ký, đánh giá kết quả, dừng thực thi và nêu rõ dữ liệu cùng hành động được phép. Nếu quyền chưa rõ, hãy hoàn tất chuẩn bị cục bộ trước; đừng tự mở rộng sang hệ thống sản xuất.

## D1–D2: lập quy định và chạy thủ công

Điền [quy định thử nghiệm](/downloads/two-week-pilot/templates/01-charter.md) và [danh sách tác vụ](/downloads/two-week-pilot/templates/02-tasks.csv): vấn đề nghiệp vụ, mốc thủ công, phạm vi đầu vào, hành động được phép, điều loại trừ, cách rà soát, điều kiện dừng và thời gian lưu bản ghi.

Thống nhất điều kiện cụ thể để đánh giá tác vụ đúng trước khi chạy. Đừng dùng ngưỡng chung kiểu '80% đạt là được triển khai'. Rà soát riêng từng kết quả rủi ro cao; ghi cách lấy mẫu và lý do cho những tác vụ khác trong quy định.

Điều kiện hoàn thành: một lần chạy thủ công có đầu vào, đầu ra, bước kiểm tra thực tế và người phụ trách. Nhóm phân biệt được thành công, thất bại và tạm dừng. Sau đó mới chạy trên mẫu giới hạn.

## D3–D5: ghi nhận lần chạy và rà soát đầu tiên

Dùng [biểu mẫu rà soát](/downloads/two-week-pilot/templates/03-review.csv) để lưu từng lần chạy, lỗi, gián đoạn, phiên bản đầu vào, cấu hình, bằng chứng và lý do chấp nhận, sửa hoặc từ chối.

Theo [phương pháp đánh giá quy trình](/vi/guide/quality/workflow-evaluation/), xem riêng cách kích hoạt, ranh giới, định dạng và chất lượng. Ghi riêng thời gian chờ mô hình và công sức làm lại của con người. Khi so với mốc thủ công, xác nhận độ khó và đầu vào tương đương; phần không so được thì để là chưa biết.

Ở D5, kiểm tra dạng lỗi và độ bao phủ của mẫu. Gặp vấn đề ranh giới nghiêm trọng thì tạm dừng, thêm mẫu tái hiện và hồi quy; không xóa bản ghi lỗi hoặc hạ tiêu chuẩn để che vấn đề.

Điều kiện hoàn thành: lô kết quả đầu tiên có bản ghi rà soát truy lại được và mỗi vấn đề có người phụ trách cùng trạng thái xử lý. Nếu còn vấn đề nghiêm trọng chưa giải quyết, ở lại giai đoạn này.

## D6–D8: mở rộng giới hạn và diễn tập hoàn tác

Tăng mẫu hoặc loại tác vụ trong phạm vi đã phê duyệt. Mỗi lần chỉ điều chỉnh một yếu tố chính; không cùng lúc mở rộng quyền, thay mô hình và đổi tác vụ. Ghi phiên bản cấu hình để xác định nguồn thay đổi.

Dùng [mẫu sự cố và hoàn tác](/downloads/two-week-pilot/templates/04-incident.md) để diễn tập tạm dừng tác vụ, kiểm tra tiến trình và hàng đợi đang hoạt động, giữ bằng chứng, khôi phục phiên bản tốt đã biết và kiểm tra lại. Dừng lượt chạy mới không xóa tác động bên ngoài đã xảy ra.

Có thể tập trước bằng [bài phục hồi sau lỗi](/vi/guide/reference/troubleshooting/failure-recovery-lab/) trong thư mục cô lập. Nếu chưa kiểm tra lên lịch thật, thu hồi quyền hoặc gửi thông điệp, hãy ghi là chưa kiểm tra. Diễn tập cục bộ không chứng minh hoàn tác trong sản xuất.

Điều kiện hoàn thành: giải thích được ai tạm dừng, xác nhận đã dừng thế nào, giữ trạng thái chống trùng lặp ra sao và khi nào được tiếp tục. Sau đó mới đến rà soát độc lập và quyết định.

## D9–D10: quyết định mở rộng, tiếp tục hay dừng

Để người rà soát kiểm tra kết quả quan trọng, thiên lệch mẫu và vấn đề chưa giải quyết, rồi điền [quyết định thử nghiệm](/downloads/two-week-pilot/templates/05-decision.md).

| Quyết định | Cần giải thích |
|---|---|
| Mở rộng có giới hạn | Tác vụ, người và quyền được bằng chứng hỗ trợ; lấy mẫu liên tục và trách nhiệm hoàn tác |
| Tiếp tục thử nghiệm | Mẫu hoặc bằng chứng phục hồi còn thiếu, người phụ trách và ngày rà soát tiếp theo |
| Dừng | Cách tắt lịch chạy, xử lý quyền, lưu bản ghi và xử lý sự kiện chưa hoàn tất |

Đối chiếu từng tiêu chí D1, không dùng điểm trung bình chung để bù lỗi nghiêm trọng. Nếu thiếu rà soát độc lập, mẫu không đủ hoặc mốc thủ công không so sánh được, hãy nêu hạn chế và không công bố kết luận về tăng năng suất nhóm.

Điều kiện hoàn thành: có quyết định ghi rõ người phụ trách, bằng chứng, phạm vi và bước tiếp theo. Ngay cả khi mở rộng cũng chỉ áp dụng cho tác vụ và điều kiện đã kiểm chứng, không cho phép mọi thành viên tự động hóa mọi công việc.

## Các mẫu đã được kiểm tra ra sao

Tác giả đã làm [ba bài diễn tập trên bàn](/downloads/two-week-pilot/references/tabletop-review.md): kết quả đúng nhưng vượt quyền, mẫu không đủ và sự kiện chưa gửi vẫn còn sau khi tắt lịch. Chúng dùng để kiểm tra mẫu có bao phủ điểm ra quyết định không, không phải trường hợp thật của nhóm hay thành tích chạy hai tuần.

Khi sửa quy tắc dự án về sau, hãy đọc [cấu hình dự án](/vi/guide/customization/) và [định nghĩa hoàn thành](/vi/guide/quality/definition-of-done/), rồi đưa yêu cầu cụ thể học được từ thử nghiệm vào quy trình chung.
