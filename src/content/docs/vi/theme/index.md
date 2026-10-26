---
title: "Giao diện chủ đề Codex"
description: "Kiểm tra nguồn, phiên bản, khả năng tương tác và cách khôi phục của giao diện bên thứ ba; phân biệt lời mô tả dự án với kiểm thử của sổ tay."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Đã đọc kho mã, trang phát hành và tài liệu cài đặt của dự án. Chưa cài giao diện, thử tương tác hoặc chạy quy trình gỡ và khôi phục; không bảo đảm tương thích."
  evidence:
    - label: "Mô tả dự án Dream Skin"
      href: https://github.com/Fei-Away/Codex-Dream-Skin
    - label: "Hướng dẫn cài và gỡ trên macOS"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md
    - label: "Gói phát hành và lịch sử phiên bản"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/releases
locale: vi
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "4ecfa1c"
reviewed_at: 2026-10-26
---

Codex Dream Skin là dự án giao diện bên thứ ba cho ứng dụng máy tính. Tài liệu dự án nói rằng nó thay đổi diện mạo qua kết nối CDP cục bộ mà không sửa gói cài đặt chính thức. Đây là cách dự án mô tả; sổ tay chưa xác minh hành vi tệp, mạng hoặc độ tương thích giao diện trên mọi phiên bản.

![Hình minh họa diện mạo giao diện](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

Hình minh họa sẵn có trên trang không phải bằng chứng kiểm thử phiên bản lần này. Nó cũng không chứng minh ô nhập, nút phê duyệt và mọi màn hình tác vụ đều hoạt động tốt.

## Phiên bản và trạng thái kiểm chứng

| Mục | Kết quả kiểm tra lần này |
|---|---|
| Nguồn | [Kho mã dự án](https://github.com/Fei-Away/Codex-Dream-Skin) và [trang phát hành](https://github.com/Fei-Away/Codex-Dream-Skin/releases) |
| Bản phát hành quan sát | [v1.5.18](https://github.com/Fei-Away/Codex-Dream-Skin/releases/tag/v1.5.18), đối chiếu 18/09/2026, commit `34335d27d54300eccb325cc652f6c93fef428b84`; chưa cài |
| Thông tin client cục bộ | Đọc Info.plist ở chế độ chỉ đọc: 26.911.61220, build 9647, định danh com.openai.codex |
| Tổ hợp giao diện và client đã thử | Không có; chưa thử cài, tương tác, gỡ |
| Tương thích Windows | Sổ tay chưa thử |
| Kết quả khôi phục | Chưa thử; quy trình và cách nghiệm thu ở dưới |

Ghi chú phát hành nói một số sửa đổi giao diện đã được kiểm tra với macOS Codex 26.901.41123 ở thượng nguồn. Phiên bản này khác 26.911.61220 được ghi ở đây nên không thể suy ra tổ hợp này tương thích. Liên kết cài đặt macOS trên trang cố định ở v1.5.18; với bản khác hãy xem tag tương ứng.

Chỉ đọc phiên bản client là thông tin môi trường, không phải bằng chứng tương thích giao diện. Dùng [bản ghi tương thích và khôi phục tài nguyên](/vi/guide/reference/resource-compatibility/) để lưu kết quả tự thử.

## Chuẩn bị trước khi cài

1. Chọn phiên bản rõ ràng từ trang phát hành; ghi tên gói, địa chỉ tải và SHA-256. Nếu nhà phát hành có tệp checksum, so sánh với gói tải về. Hash khớp chỉ chứng minh tệp trùng nhau, không chứng minh chương trình an toàn.
2. Lưu phiên bản client, hệ điều hành, cài đặt giao diện và bản sao ảnh tùy chỉnh bạn có quyền dùng; ghi vị trí sao lưu.
3. Trước tiên kiểm tra màn hình chính, tác vụ, ô nhập, cuộn, tìm kiếm và phê duyệt ở giao diện gốc làm mốc đối chiếu.
4. Đọc hướng dẫn cài, cập nhật và gỡ đúng bản phát hành. Tài liệu nhánh main có thể mới hơn bộ cài.

Trên macOS, xem [hướng dẫn cài của dự án](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md); trên Windows, xem [hướng dẫn Windows](https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/docs/install-windows.md). Đừng tự quy cảnh báo 'bị hỏng' hay bị hệ thống chặn là do thiếu chữ ký. Hãy kiểm tra nguồn, tính toàn vẹn gói và lỗi cụ thể rồi mới quyết định tiếp tục.

## Cần kiểm tra gì sau khi đổi ảnh

Dự án có chức năng quản lý ảnh nền và giao diện; tên menu tùy phiên bản. Hãy dùng ảnh bạn có quyền sử dụng và kiểm tra chế độ sáng/tối, co giãn cửa sổ và màn hình tác vụ thực tế.

- Ô nhập, nút và thông tin phê duyệt còn đọc được, nhấp được và nhận tiêu điểm bàn phím được không?
- Ảnh nền có che kết quả tìm kiếm, đầu ra dài, diff mã hoặc thông báo lỗi không?
- Sau khi chuyển trang và khởi động lại, giao diện hiện ra có đúng lựa chọn không?
- Sau khi tắt giao diện, màn hình gốc có trở lại và vấn đề có còn tái hiện không?

Nếu nội dung bị che hoặc không thao tác được, hãy dừng sử dụng và thực hiện khôi phục. Đừng thêm lớp kiểu khác để che vấn đề.

## Gỡ và khôi phục

Tài liệu macOS của dự án yêu cầu chọn 'Khôi phục gốc và gỡ cài đặt' trên thanh menu trước khi xóa ứng dụng giao diện. Giao diện và ảnh của người dùng được giữ hoặc dọn riêng. Hãy sao lưu tài nguyên tùy chỉnh trước. Windows phải theo tài liệu của phiên bản tương ứng, không dùng đường dẫn macOS.

Các bước sau là cách sổ tay đề xuất nghiệm thu khôi phục, không phải bản ghi chạy thử đã hoàn thành:

1. Lưu công việc trong client, ghi giao diện đang dùng và các tệp cần giữ.
2. Dùng quy trình khôi phục của công cụ; giữ thông báo hoàn tất, thất bại hoặc trạng thái chưa rõ.
3. Mở lại Codex qua lối vào thông thường, kiểm tra nền, chữ, ô nhập và điều hướng tác vụ.
4. Xác nhận công cụ không tự khởi động hoặc chèn lại mã thay đổi giao diện. Khi cần kiểm tra kỹ thuật, xem tiến trình và kết nối gỡ lỗi, không tùy tiện kết thúc tiến trình cùng tên.
5. Chỉ xóa ứng dụng sau khi nghiệm thu đạt. Giữ ảnh tùy chỉnh cho đến khi quyết định riêng là không cần nữa.

Có bản sao lưu, chương trình gỡ kết thúc hoặc cửa sổ giao diện đóng đều chưa đủ chứng minh khôi phục thành công. Nếu kết quả chưa rõ, lưu nhật ký và xem Issue của dự án, không ghi 'đã khôi phục'. Đừng xóa toàn bộ thư mục cấu hình Codex để gỡ giao diện.

## Phạm vi áp dụng

CDP có thể thay đổi nội dung trang; 'không sửa gói chính thức' không có nghĩa là không ảnh hưởng thao tác. Hãy kiểm tra lại sau khi giao diện cập nhật. Cần xem lời mô tả của dự án về xử lý cục bộ, mạng và cơ chế khôi phục theo từng phiên bản. Sổ tay không cam kết mọi tài nguyên đều không tải lên, mọi phiên bản đều khôi phục bằng một nhấp hoặc cập nhật đè không bao giờ mất dữ liệu.
