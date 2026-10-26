---
title: "Thú cưng và chủ đề: hồ sơ tương thích và khôi phục"
description: Ghi lại nguồn gốc, việc tải, tương tác, vô hiệu hóa và khôi phục tài nguyên hình ảnh theo từng phiên bản; không xem việc đọc tài liệu là thử nghiệm cài đặt.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Cung cấp quy trình thử nghiệm cần điền. Hiện website này chưa có hồ sơ hoàn tất về việc cài đặt và gỡ thú cưng hoặc chủ đề trong ứng dụng khách.
locale: vi
source_locale: zh-CN
source_revision: "96ff34f"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Tính tương thích phải gắn với một tổ hợp phiên bản cụ thể. Cấu trúc gói hợp lệ, ảnh đúng kích thước hoặc giao diện mở được đều không tự chứng minh rằng các trạng thái hoạt ảnh hay quá trình gỡ và khôi phục hoạt động bình thường.

## Bằng chứng hiện có

Ngày 2026-09-18, tệp `Info.plist` của ứng dụng trên máy được kiểm tra ở chế độ chỉ đọc. Mã định danh ứng dụng khách là `com.openai.codex`, phiên bản `26.911.61220`, build `9647`. Việc kiểm tra này không tải thú cưng hoặc chủ đề và không thay đổi cấu hình ứng dụng. **Tổ hợp phiên bản đã được thử đầy đủ việc cài đặt, phát hoạt ảnh, chuyển đổi và khôi phục: hiện chưa có.**

Hãy dùng hướng dẫn [cài đặt thú cưng](/vi/pets/install/), [tạo thú cưng](/vi/pets/create/) và [chủ đề](/vi/theme/) cùng với đúng phiên bản tài nguyên và ứng dụng khách. Các tuyên bố của dự án bên thứ ba phải được gắn với nguồn của họ; không trình bày chúng như kết quả thử nghiệm của trang này.

## Mẫu hồ sơ có thể sao chép

```text
Loại hồ sơ: thú cưng / chủ đề
Trạng thái: chưa chạy / đang chạy / đạt / thất bại / chưa xác nhận kết quả
Ngày thử nghiệm:
Người thử nghiệm:
Hệ điều hành và kiến trúc:
Phiên bản và build ứng dụng khách:
Tên và phiên bản tài nguyên hoặc công cụ:
URL nguồn gốc và tag/commit tương ứng:
Tên tệp tải xuống và SHA-256:
Tác giả tài nguyên và giấy phép:
Trạng thái trước khi cài và vị trí sao lưu (ẩn thông tin trước khi công bố):
Các bước cài đặt thực tế:
Bằng chứng tải và giao diện:
Kiểm tra hoạt ảnh hoặc tương tác:
Các bước và kết quả vô hiệu hóa:
Các bước và kết quả khôi phục:
Kiểm tra lại sau khi khởi động:
Nhật ký lỗi và vấn đề còn mở:
Nền tảng, trạng thái hoặc chức năng chưa thử:
```

Để trống hoặc đánh dấu chưa chạy đối với các mục chưa thực hiện. Không điền thời gian bằng 0, đánh dấu đạt hoặc đoán phiên bản. Hồ sơ công khai cần dùng đường dẫn đã ẩn thông tin và ảnh chụp thử nghiệm không chứa nội dung tác vụ thật.

## Kiểm tra thú cưng

Trước tiên, xác thực JSON và đường dẫn tài nguyên. Sau đó kiểm tra trong ứng dụng khách việc chọn, tải, nền trong suốt, đổi hành động và thay đổi kích thước cửa sổ. Nếu atlas có trường phiên bản, hãy xác nhận trường này phù hợp với quy ước hàng và cột. Việc mở được ảnh không có nghĩa ứng dụng đã phân tích ảnh theo đúng phiên bản định dạng.

Khi vô hiệu hóa, trước tiên hãy chuyển về tài nguyên tích hợp hoặc tắt thú cưng. Chuyển gói tùy chỉnh đến vị trí sao lưu bên ngoài thư mục được quét, rồi tải lại hoặc khởi động lại để xác nhận nó không còn xuất hiện. Muốn khôi phục, đưa cùng gói trở lại và kiểm tra việc tải. Chỉ đổi tên gói trong thư mục được quét là chưa đủ; đừng xóa toàn bộ thư mục cấu hình.

## Kiểm tra chủ đề

Ghi lại giao diện và tương tác của cùng những trang trước và sau khi bật chủ đề. Ít nhất hãy kiểm tra trang chủ, tác vụ, ô nhập, tìm kiếm, thông báo lỗi và các màn hình phê duyệt có thể truy cập. Đánh dấu những màn hình không thể mở là chưa thử; đừng thực hiện hành động rủi ro cao thật chỉ để kiểm tra một nút.

Sau khi khôi phục, mở lại ứng dụng khách bình thường và xác nhận giao diện cùng thao tác hoạt động đúng, chủ đề không tự khởi động hoặc được chèn lại. Kiểm tra riêng việc giao diện trở lại và kết nối gỡ lỗi đã đóng. Nếu chưa xác nhận được một trong hai, hãy giữ mục đó là chưa giải quyết.

## Khi nào cần xác minh lại

Lặp lại các bước sau khi ứng dụng khách, hệ điều hành, công cụ chủ đề, định dạng thú cưng hoặc gói tài nguyên thay đổi. Giữ hồ sơ cũ và bổ sung tổ hợp phiên bản mới; đừng chỉ cập nhật ngày xác minh. Nếu có lỗi, trước hết khôi phục cấu hình đã biết là hoạt động rồi mới tìm nguyên nhân của thay đổi mới.
