---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / ứng dụng máy tính; CLI và IDE dùng để chuẩn bị và kiểm thử"
  checkedAt: "2026-08-26"
title: Hướng dẫn đầy đủ về tác vụ định kỳ
description: Chọn tác vụ độc lập hoặc tác vụ trong cuộc trò chuyện, cấu hình dự án cục bộ, worktree, quyền, prompt và quy trình rà soát.
locale: vi
source_locale: zh-CN
source_revision: "fa792dc"
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: 2026-10-26
---

Phần khó thực sự của tác vụ định kỳ không phải là “chạy lúc mấy giờ”, mà là bảo đảm mỗi lần chạy không có người giám sát đều có đầu vào ổn định, quyền hạn hẹp, đầu ra có thể rà soát và điều kiện dừng.

![Vòng lặp an toàn từ xác minh thủ công đến chạy định kỳ, con người rà soát và điều chỉnh](/illustrations/flow-scheduled-safety.webp)

## Phù hợp với ai

- Người dùng cá nhân muốn tạo báo cáo, kiểm tra tài liệu hoặc theo dõi PR hằng ngày hoặc hằng tuần.
- Lập trình viên cần chạy tác vụ bảo trì định kỳ trong dự án cục bộ hoặc worktree tách biệt.
- Người bảo trì đánh giá quyền, cách xử lý thất bại và Skill dùng chung trong nhóm.

## Giới hạn hỗ trợ

| Nền tảng | Có thể làm gì | Giới hạn quan trọng |
|---|---|---|
| ChatGPT Web | Tạo, quản lý, xem lần chạy; dùng tệp tải lên, công cụ kết nối, Skills, Plugins | Không truy cập trực tiếp thư mục trên máy cục bộ |
| Ứng dụng ChatGPT trên máy tính | Tạo, quản lý; có thể chọn dự án cục bộ hoặc Git worktree | Tác vụ dùng tệp cục bộ cần máy đang bật, ứng dụng đang chạy và dự án vẫn tồn tại |
| Codex CLI | Chuẩn bị và kiểm thử thủ công prompt, Skill, script | Không có giao diện quản lý Scheduled |
| Phần mở rộng IDE | Xác minh lệnh và thay đổi trong workspace | Không có giao diện quản lý Scheduled |

## 1. Chọn tác vụ độc lập hay tác vụ trong cuộc trò chuyện

### Scheduled task độc lập

Mỗi lần chạy bắt đầu từ prompt đã lưu và xuất hiện như một lần chạy riêng trong Scheduled. Phù hợp với báo cáo ngày, báo cáo tuần và kiểm tra sức khỏe dự án độc lập với nhau; một tác vụ cũng có thể bao phủ nhiều dự án.

### Scheduled task trong cuộc trò chuyện

Theo lịch, tác vụ quay lại cùng cuộc trò chuyện và tiếp tục dùng ngữ cảnh hiện có. Phù hợp để thăm dò tác vụ dài, theo dõi trạng thái PR, nghiên cứu liên tục hoặc công việc cần giữ lại các trao đổi trước đó.

Tiêu chí chọn: nếu mỗi lần chạy cần “bắt đầu lại”, hãy chọn tác vụ độc lập; nếu cần tiếp tục ngữ cảnh của cùng một vấn đề, hãy chọn tác vụ trong cuộc trò chuyện.

## 2. Chọn tài liệu và môi trường chạy

### Chạy trên Web

Đưa hướng dẫn lâu dài vào prompt tác vụ hoặc Skill, và đặt tài liệu cần dùng trong tệp tải lên, Project hoặc dịch vụ đã kết nối. Đừng viết “đọc latest.csv trong thư mục Desktop của tôi”; Web không thể truy cập trực tiếp đường dẫn cục bộ.

### Dùng dự án cục bộ trong ứng dụng máy tính

Với kho Git, bạn có thể chọn:

- **Dự án cục bộ:** làm việc trực tiếp trong checkout chính, có thể chạm vào tệp bạn đang sửa.
- **Worktree riêng:** tách thay đổi chạy nền khỏi công việc chưa hoàn tất, phù hợp với tác vụ sẽ sửa tệp.

Dự án không dùng Git chạy trực tiếp trong thư mục dự án. Các tác vụ worktree chạy thường xuyên sẽ tích lũy cây làm việc; hãy lưu trữ những lần chạy không còn cần thiết để tránh giữ lại quá nhiều worktree ngoài ý muốn.

## 3. Xác minh thủ công trước

Trong cuộc trò chuyện thông thường, trước tiên hãy chạy đúng cùng prompt, mô hình, mức độ suy luận và công cụ. Tối thiểu cần xác nhận:

- Đầu vào vẫn rõ ràng khi không có lời giải thích thêm tại chỗ.
- Khi “không có thay đổi”, tác vụ kết thúc yên lặng.
- Con người có thể rà soát đầu ra nhanh chóng.
- Lệnh, Skill và công cụ kết nối đều hoạt động.
- Khi thiếu quyền hoặc tài liệu, tác vụ dừng và giải thích thay vì đoán.

Xem vài lần chạy định kỳ đầu tiên, rồi điều chỉnh prompt hoặc tần suất.

## 4. Mẫu prompt tác vụ có thể chỉnh sửa ngay

```text
Hãy tạo một Scheduled task độc lập:

Tên: Kiểm tra liên kết tài liệu bị hỏng hằng tuần
Thời gian: Thứ Hai hằng tuần lúc 09:00, theo múi giờ hiện tại
Nơi chạy: worktree riêng của dự án Git hiện tại

Mỗi lần chạy, hãy:
1. Chỉ đọc docs/, src/content/docs/, examples/ và public/diagrams/.
2. Chạy pnpm check:links.
3. Nếu kiểm tra thành công, chỉ báo cáo số tệp và số liên kết đã kiểm tra; không sửa tệp.
4. Nếu kiểm tra thất bại, liệt kê kết quả theo “tệp nguồn, đích không hợp lệ, cách sửa đề xuất”; không tự động sửa liên kết.
5. Không truy cập mạng, không cài phụ thuộc, không commit, không push, không tạo PR.
6. Nếu không có lệnh, thiếu phụ thuộc hoặc kết quả không chắc chắn, hãy dừng và nêu rõ việc cần người xử lý.

Điều kiện hoàn thành: kết thúc lần chạy này sau khi xuất một báo cáo có thể rà soát; không thử lại nhiều lần.
```

Mẫu này ghi rõ thời gian, dự án, phạm vi đọc, lệnh, nhánh thành công/thất bại, hành động bị cấm và điều kiện kết thúc. Lịch chỉ kích hoạt lại tác vụ; nó không thay thế mô tả tác vụ.

## 5. Quyền và rà soát của con người

Tác vụ định kỳ chạy không có người giám sát và sử dụng cài đặt sandbox mặc định.

| Chế độ sandbox | Kết quả thường gặp |
|---|---|
| read-only | Các lệnh gọi sửa tệp, truy cập mạng hoặc điều khiển ứng dụng cục bộ thất bại |
| workspace-write | Có thể ghi trong workspace; việc ghi ngoài workspace, truy cập mạng hoặc điều khiển ứng dụng mặc định thất bại |

Bắt đầu bằng quyền hẹp nhất vẫn hoàn thành được tác vụ. Nếu cần mạng hoặc truy cập tệp rộng hơn, hãy định nghĩa allowlist rõ ràng; đừng nâng cả tác vụ lên quyền cao chỉ để tránh một lần thất bại.

Nên giữ bước con người rà soát đối với:

- Gửi tin nhắn ra ngoài hoặc xuất bản nội dung.
- Thay đổi trạng thái production.
- Merge PR hoặc push nhánh chính.
- Xóa hàng loạt, migration hoặc thay đổi quyền.
- Diff vượt phạm vi dự kiến hoặc kiểm thử thất bại.

## 6. Thiết kế các nhánh “không thay đổi”, thất bại và dừng

Tác vụ chạy lâu dài phải xác định ba trường hợp:

1. **Có phát hiện:** xuất bằng chứng, mức độ nghiêm trọng và bước tiếp theo.
2. **Không thay đổi:** báo cáo ngắn gọn phạm vi đã kiểm tra, không tạo vấn đề giả.
3. **Không thể hoàn thành:** nêu tài liệu/quyền còn thiếu, dừng và chờ con người.

Với tác vụ thăm dò trong cuộc trò chuyện, cần thêm điều kiện kết thúc, chẳng hạn “dừng khi PR được merge, đóng, gặp cùng một lỗi trong 3 lần liên tiếp hoặc cần con người phê duyệt”.

## Scheduled task không phải CI kích hoạt theo sự kiện

Nếu tác vụ phải chạy ngay sau một sự kiện trong kho mã như `push`, tạo PR hoặc hoàn tất phát hành, hãy dùng GitHub Actions, CI, webhook hoặc Codex SDK làm điểm kích hoạt. Đừng coi việc “thăm dò mỗi phút” là bộ kích hoạt sự kiện chính xác.

## Danh sách kiểm tra nghiệm thu

- [ ] Prompt đã chạy thành công trọn vẹn trong cuộc trò chuyện thông thường.
- [ ] Đã chọn tác vụ độc lập hoặc tác vụ trong cuộc trò chuyện.
- [ ] Tài liệu trên Web hoặc dự án cục bộ có sẵn lúc chạy.
- [ ] Sandbox mặc định đủ dùng; quyền bổ sung có lý do rõ ràng.
- [ ] Đã ghi rõ điều kiện có phát hiện, không thay đổi, thất bại và dừng.
- [ ] Con người đã kiểm tra ngẫu nhiên ba lần chạy đầu tiên.
- [ ] Worktree tần suất cao có chiến lược lưu trữ và dọn dẹp.
- [ ] Các thao tác ghi quan trọng vẫn yêu cầu con người xác nhận.

## Nguồn chính thức

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [OpenAI: Sandboxing](https://learn.chatgpt.com/docs/permissions/sandboxing)
