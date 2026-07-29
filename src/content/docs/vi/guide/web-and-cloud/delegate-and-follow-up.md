---
title: Ủy thác và theo dõi
description: "Giao Tác vụ cho Cloud từ App, IDE hoặc điện thoại — rồi xem xét, phê duyệt và lặp lại sau khi rời bàn làm việc."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

**Ủy thác** gửi một Tác vụ sang Cloud chạy trong môi trường từ xa; **theo dõi** là kiểm tiến độ, bổ sung Ngữ cảnh, phê duyệt bước rủi ro và yêu cầu chỉnh sửa trong hoặc sau Tác vụ. Đây là quy trình trung tâm để tiến triển khi xa bàn làm việc.

## Nội dung phủ

- Khi nào ủy thác Cloud thay vì chạy cục bộ
- Khác biệt theo lối vào
- Theo dõi hiệu quả và tránh «gửi rồi quên»

## Luồng này hoạt động thế nào

Tác vụ Cloud thường giống:

- Bạn giải thích Tác vụ rõ
- Nó chạy từ xa
- Giữa chừng bạn có thể cần thêm ràng buộc hoặc phê duyệt
- Sau khi xong, bạn vẫn xem Diff, PR và quyết định bước tiếp

Cloud chỉ chuyển thực thi khỏi máy bạn — bạn vẫn giữ trách nhiệm theo dõi và quyết định.

## Dành cho ai

| Tình huống | Gợi ý |
|---|---|
| Build/kiểm thử dài | Ủy thác Cloud; tiếp tục làm việc cục bộ |
| Trên đường / giữa họp | Kiểm trạng thái trên điện thoại; phê duyệt bước quan trọng |
| Cần môi trường chuẩn hóa | Cloud + [cấu hình môi trường](/guide/web-and-cloud/cloud-environments/) |
| Thí nghiệm cục bộ nhanh | Ưu tiên [App máy tính](/guide/desktop-app/) hoặc [IDE](/guide/ide/local-task-workflow/) |

## Khi nào ủy thác có ý nghĩa

Nếu chưa chắc:

- Vẫn đang lặp và muốn điều hướng trực tiếp: ở lại cục bộ
- Runtime dài, muốn rời đi, hoặc cần môi trường dùng chung: ủy thác Cloud

## Checklist trước khi ủy thác

- [ ] [GitHub đã kết nối](/guide/web-and-cloud/connect-github/); chiến lược nhánh rõ
- [ ] Mô tả Tác vụ gồm mục tiêu, phạm vi, điều cấm và nghiệm thu (xem [cấu trúc Tác vụ](/prompts/task-anatomy/))
- [ ] Commit cục bộ cần thiết đã push — hoặc làm việc cục bộ
- [ ] Secrets và [truy cập đi ra](/guide/web-and-cloud/internet-access/) sẵn sàng

## Hiểu nhầm thường gặp

### 1. Ủy thác xong là có thể bỏ qua

Điều này lãng phí nhiều thời gian nhất. Phát hiện lệch càng muộn, làm lại càng lớn.

### 2. Theo dõi nghĩa là «hỏi trạng thái»

Theo dõi hữu ích hơn:

- Bổ sung Ngữ cảnh thiếu
- Thu hẹp phạm vi
- Từ chối thao tác không an toàn
- Yêu cầu sửa sau khi xong

### 3. Ủy thác vs cục bộ là hoặc/hoặc

Mẫu thực tế phổ biến:  
**khám phá cục bộ → ủy thác chạy dài → hoàn thiện cục bộ.**

## Ủy thác theo lối vào (khái niệm)

| Lối vào | Đặc điểm |
|---|---|
| [App máy tính · Tác vụ cục bộ và Cloud](/guide/desktop-app/local-and-cloud-tasks/) | Cùng khung dự án; chuyển cục bộ/Cloud |
| [IDE · Tác vụ Cloud](/guide/ide/cloud-task-workflow/) | Mang lựa chọn editor và Ngữ cảnh tệp đang mở |
| Web / mobile | Trạng thái nhẹ, Phê duyệt, theo dõi ngắn |

Nút và tên tùy sản phẩm hiện tại.

## Nhịp theo dõi khuyến nghị

```text
Ủy thác → xác nhận môi trường đã khởi động → (tùy chọn) xem log đang chạy
    → phê duyệt bước rủi ro → khi xong xem Diff/PR
    → nếu chưa hài lòng: thêm chỉ dẫn hoặc khởi động Tác vụ theo dõi
```

Tối thiểu thực dụng:  
**Sau khi gửi, nhìn một lần khi đang chạy và một lần khi xong.**

### Can thiệp giữa chừng

- **Bổ sung Ngữ cảnh**: nếu thiếu tệp hoặc ràng buộc, nói trong tin theo dõi để giữ lịch sử
- **Thu hẹp phạm vi**: nếu lệch, nói «dừng sửa X; chỉ làm Y»
- **Phê duyệt**: xem [mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/) — ưu tiên chậm và tường minh hơn phê duyệt hàng loạt shell lạ

### Sau khi xong

- Xem Diff trong luồng [tạo PR](/guide/web-and-cloud/create-pull-requests/)
- Kiểm chứng bằng [review mã Cloud](/guide/web-and-cloud/code-review/) hoặc checkout nhánh cục bộ
- Cần thêm thay đổi: ủy thác lại trên cùng PR hoặc tiếp tục cục bộ

## Thông báo

Bật [thông báo máy tính](/guide/desktop-app/notifications/) hoặc push mobile để Tác vụ không kẹt chờ Phê duyệt. Đội nên thỏa thuận ai được phê duyệt repo liên quan production và khi nào.

## Lỗi thường gặp

- Ủy thác mơ hồ dẫn tới refactor lớn không yêu cầu
- Sửa cục bộ dở dang trong khi Cloud bắt đầu từ main từ xa
- Không bao giờ kiểm giữa chừng; đến cuối mới thấy sai hướng
- «LGTM» trên PR mà không chạy kiểm thử
- Coi «thực thi từ xa» là «trách nhiệm từ xa»

## Checklist nghiệm thu

- [ ] Đã khởi động và hoàn thành thành công một Tác vụ Cloud từ ít nhất một lối vào
- [ ] Đã thêm ràng buộc hiệu quả trong khi Tác vụ chạy
- [ ] Đã tạo PR hoặc nhánh được người xem Diff qua

## Tham chiếu

- Tài liệu Tác vụ OpenAI Codex Cloud

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud / App / IDE / Mobile  
**Ghi chú đối chiếu:** Trang phụ thuộc hành vi sản phẩm hiện tại để khởi động hoặc theo dõi Tác vụ Cloud từ App, IDE, Web và điện thoại — năng lực đổi nhanh; căn chỉnh từng dòng với tài liệu chính thức trước khi thoát `outdated`.  
**Kiểm chứng gần nhất:** 2026-07-26
