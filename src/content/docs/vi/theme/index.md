---
title: Giao diện Codex
description: "Hiểu Codex Dream Skin là gì, cách cài đặt và đổi nền, vì sao dùng CDP injection, và ranh giới an toàn cần kiểm tra trước khi dùng theme."
locale: vi
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-07-29
reviewed_at: 2026-08-26
source_revision: 8c0e360
---

# Giao diện Codex

Đổi skin cho Codex nghe như một việc nhỏ để giao diện đẹp hơn. Nhưng Codex Dream Skin thực chất là một giải pháp theme đầy đủ cho desktop: giữ nguyên tương tác gốc của Codex, không sửa gói cài đặt chính thức, và dùng injection từ bên ngoài để đưa nền, màu sắc và không khí thị giác vào giao diện thật.

## Codex Dream Skin là gì

Codex Dream Skin là dự án mã nguồn mở để đổi giao diện cho app Codex trên desktop. Nó đặt một hình nền 16:9 phía sau Codex và tự thích ứng với chế độ sáng/tối, vị trí trọng tâm và bảng màu. Sidebar, thẻ gợi ý, chọn dự án và ô nhập vẫn là control gốc có thể tương tác.

![Codex Dream Skin áp dụng nền 16:9 cho màn hình chính Codex](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

_Màn hình chính thật của Codex sau khi áp theme; sidebar, thẻ gợi ý và ô nhập vẫn là control gốc._

Cách này rất khác với kiểu cũ là sửa binary để đổi skin:

| Cách làm | Sửa file chính thức | Làm hỏng chữ ký | Control gốc dùng được | Tự do đổi ảnh |
| --- | --- | --- | --- | --- |
| CDP injection (Dream Skin) | Không | Không | Có | Cao |
| Sửa `app.asar` | Có | Có | Một phần | Trung bình |
| Sáng/tối chính thức | Không | Không | Có | Không |

Sửa `app.asar` từng là cách phổ biến: mở gói tài nguyên của Codex, đổi CSS và ảnh rồi đóng gói lại. Vấn đề là chữ ký mất hiệu lực, mỗi lần Codex cập nhật có thể phải làm lại, và phần mềm bảo mật có thể chặn.

CDP injection không sửa binary chính thức. Nó inject style và script từ bên ngoài Codex qua cổng debug, không chạm vào `.app`, `app.asar` hay chữ ký code.

Có thể làm: đổi skin, đổi nền, lưu nhiều theme, khôi phục giao diện chính thức bằng một thao tác.

Không làm:

- Script cài đặt không âm thầm ghi API Key hoặc Base URL bên thứ ba; skin và cấu hình relay tách biệt.
- Không sửa thư mục cài đặt chính thức và chữ ký.
- CDP chỉ bind vào `127.0.0.1`; khi theme đang chạy vẫn nên tránh chương trình local không rõ nguồn gốc.

Dự án nói rõ đây không phải sản phẩm chính thức của OpenAI. Khi chọn khôi phục và gỡ cài đặt, Codex quay về giao diện chính thức và kết nối CDP bị ngắt.

Liên kết dự án:

| Loại | URL | Mục đích |
| --- | --- | --- |
| GitHub dự án | [github.com/Fei-Away/Codex-Dream-Skin](https://github.com/Fei-Away/Codex-Dream-Skin) | Xem mã nguồn, README, issue và hướng dẫn cài đặt |
| Website dự án | [codex-dream-skin.org](https://codex-dream-skin.org/) | Đọc mô tả dự án, nguyên lý, ranh giới an toàn và hướng dẫn |
| Tải xuống | [GitHub Releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) | Tải bộ cài macOS `.dmg` và Windows `.exe` |
| Thư viện theme / Online Studio | [DreamSkin.cc](https://dreamskin.cc/) | Duyệt theme, thử online, tạo và gửi theme |

## Cài đặt và bắt đầu

Trước khi cài, hãy mở Codex một lần và xác nhận app desktop khởi động, đăng nhập và thoát bình thường. Như vậy công cụ theme sẽ tìm được đúng môi trường Codex local.

### macOS

Trên macOS, thường tải file `.dmg` từ Releases của dự án. Sau khi cài, kéo `Codex Dream Skin.app` vào Applications, rồi quản lý theme, đổi nền và khôi phục giao diện chính thức từ thanh menu.

Nếu hệ thống báo app "bị hỏng" hoặc không thể mở, thường là Gatekeeper chặn app chưa ký. Chỉ cho phép mở trong System Settings > Privacy & Security sau khi đã xác nhận nguồn đáng tin.

### Windows

Trên Windows, thường tải bộ cài từ Releases hoặc làm theo quy trình PowerShell trong tài liệu dự án. Sau khi cài, mở công cụ từ system tray để quản lý theme và đổi nền.

Nếu SmartScreen hiện cảnh báo xanh, nguyên nhân thường là bộ cài thiếu chứng chỉ ký code. Chỉ tiếp tục khi nguồn đáng tin.

### Vấn đề thường gặp

| Hiện tượng | Nguyên nhân | Cách xử lý |
| --- | --- | --- |
| macOS báo app "bị hỏng" | App chưa ký bị Gatekeeper chặn | System Settings -> Privacy & Security -> Open Anyway |
| Windows SmartScreen cảnh báo xanh | Thiếu chứng chỉ ký code | More info -> Run anyway |
| Cài xong không có hiệu lực | Codex chưa từng được mở trước đó | Mở Codex, đăng nhập, thoát, rồi cài Dream Skin |
| Theme lỗi sau khi Codex cập nhật | Bản cập nhật có thể đổi đường dẫn nội bộ | Tải bộ cài mới nhất và cài đè |

Cài đè không xóa theme và ảnh đã lưu.

## Đổi nền và quản lý theme

Sau khi cài, chọn "Change Background" từ thanh menu macOS hoặc system tray Windows, rồi chọn một ảnh.

![Xem trước và đổi theme trong Codex Dream Skin](/theme/codex-dream-skin/article/codex-dream-skin-gallery.jpg)

_Sau khi đổi ảnh, hãy kiểm tra trang chủ, sidebar, ô nhập và trang task để đảm bảo khi dùng thật vẫn rõ và dễ đọc._

Khi chọn ảnh, engine phân tích local độ sáng, màu chủ đạo, vị trí trọng tâm và bên nào ít thông tin hơn, rồi tạo biến theme phù hợp với ảnh đó. Theme có thể lưu, đặt tên và chuyển bằng một thao tác.

Gothic Void Crusade là theme mặc định trong bộ cài public, do cộng đồng đóng góp. Bạn cũng có thể import bất kỳ ảnh nền 16:9 thuần nào.

Quy tắc ảnh:

- Khuyến nghị `2560 x 1440` 16:9, không có cửa sổ, sidebar, chữ hoặc logo được chèn sẵn.
- Không đặt chủ thể đè lên ô nhập, sidebar và khu vực thẻ gợi ý của Codex.
- Tránh nền quá sáng, quá rối hoặc tương phản quá mạnh.
- Trước khi chia sẻ công khai hoặc dùng thương mại, xác nhận quyền với ảnh nền, nhân vật, nhãn hiệu, font và IP.

Ảnh không đạt bố cục vẫn dùng được, nhưng nội dung gốc có thể che chủ thể hoặc làm chữ khó đọc.

## Cách hoạt động

### CDP injection

CDP, Chrome DevTools Protocol, là giao thức debug từ xa của trình duyệt Chromium. Chrome DevTools dùng CDP khi debug trang mobile từ xa: trình duyệt mở một cổng debug local, công cụ bên ngoài kết nối và inject CSS, JavaScript vào trang.

Codex desktop được xây trên Electron, bên dưới cũng là Chromium. Luồng của Dream Skin có thể rút gọn như sau:

![Sơ đồ CDP injection trong bài](/theme/codex-dream-skin/article/cdp-injection-flow.png)

```text
Khởi động công cụ theme
  -> Mở Codex desktop với endpoint CDP local
  -> Kết nối vào tiến trình renderer Chromium của Codex
  -> Inject CSS theme và DOM trang trí
  -> Codex tiếp tục chạy bình thường, giao diện do lớp theme đảm nhiệm
```

Khi dừng injector, công cụ kiểm tra đồng thời PID, đường dẫn executable và thời gian khởi động để tránh dừng nhầm tiến trình.

CSS được inject giữ nguyên tương tác gốc của sidebar, ô nhập và thẻ gợi ý. Wallpaper nằm dưới control gốc, ở giữa có lớp gradient bán trong suốt để giữ độ dễ đọc.

### Màu thích ứng: tính local, không upload

Sau khi đổi ảnh, Dream Skin downsample ảnh local trong Canvas, trích xuất màu chủ đạo, độ sáng và vị trí trọng tâm, rồi tính các biến CSS trong không gian HSL, gồm màu nhấn, màu phụ, màu highlight.

Ở dark mode, nó bắt đầu từ màu chủ đạo tối hơn; ở light mode, nó bắt đầu từ xám sáng trung tính rồi tính màu chữ và màu nhấn tối hơn. Khi ảnh đổi, toàn bộ bảng màu được tính lại tự động.

Theo route, trang chủ giữ wallpaper đầy đủ và lớp gradient; khi vào trang task, nền tự chuyển thành lớp môi trường ít gây nhiễu để ưu tiên nội dung.

## Kết luận

Ý tưởng CDP injection là inject style từ bên ngoài ứng dụng mà không sửa binary chính thức. Cách này không chỉ áp dụng cho Codex; về lý thuyết, app Electron nào hỗ trợ cổng CDP debug cũng có thể tùy biến theme tương tự.

Nhu cầu cá nhân hóa môi trường phát triển là thật. Một theme tốt không chỉ "ngầu hơn"; nó cần giữ tương tác gốc, có thể khôi phục, có thể kiểm tra, và không trộn cải tiến thị giác với cấu hình model.
