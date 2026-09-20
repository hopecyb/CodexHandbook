---
legacyVerification:
  status: "verified"
  products: "Cloud、GitHub"
  checkedAt: "2026-08-26"
title: Tạo Pull Request
description: Chuyển kết quả Cloud thành PR có thể đánh giá và xác minh, không tự động hợp nhất.
locale: vi
source_locale: zh-CN
source_revision: "39371d4"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 40
---

Sau khi tác vụ Cloud hoàn tất, hãy kiểm tra bản tóm tắt và diff trước. Chỉ tạo Pull Request khi kết quả đáp ứng phạm vi và tiêu chí xác minh; nếu chưa đạt, tiếp tục sửa trong cùng cuộc trò chuyện.

## Từ tác vụ đến PR

```text
Chọn môi trường và nhánh bắt đầu
  → chạy tác vụ Cloud
  → xem bản tóm tắt, nhật ký và diff
  → theo dõi và yêu cầu sửa nếu cần
  → Create Pull Request
  → CI + Codex review bổ sung + đánh giá của con người
  → con người quyết định có hợp nhất hay không
```

Hãy ghi rõ trong lời nhắc “tạo PR, không hợp nhất”, nhưng đừng chỉ dựa vào ràng buộc bằng ngôn ngữ tự nhiên. Kho mã cũng cần bật bảo vệ nhánh và các bước kiểm tra bắt buộc.

## Mẫu tác vụ có thể dùng lại

```text
Mục tiêu: sửa hồi quy khiến đăng nhập hết thời gian chờ ở issue #42.
Điểm bắt đầu: main.
Phạm vi: chỉ packages/auth/** và các bài kiểm thử tương ứng.
Không được: nâng cấp phần phụ thuộc, thay đổi API công khai, ghi trực tiếp vào main.
Xác minh: pnpm test --filter auth; pnpm typecheck.
Bàn giao: tạo PR vào main, nhưng không hợp nhất.
Mô tả PR phải gồm nguyên nhân gốc, tóm tắt thay đổi, lệnh và kết quả kiểm thử,
rủi ro cùng cách hoàn tác.
```

## Kiểm tra trước khi tạo

- [ ] Commit bắt đầu là đúng; không bỏ sót đầu vào cục bộ chưa được push
- [ ] Diff chỉ chứa những thay đổi thuộc phạm vi tác vụ
- [ ] Tên nhánh mới dễ nhận biết và không ghi đè công việc của người khác
- [ ] Các bài kiểm thử đã thực sự chạy, lỗi không bị che trong bản tóm tắt
- [ ] Không có thông tin xác thực, nhật ký tạm, bộ nhớ đệm hoặc thay đổi định dạng không liên quan
- [ ] Thay đổi lớn đã được chia thành các PR có thể đánh giá độc lập

## Mô tả PR tối thiểu phải trả lời

1. Vì sao cần thay đổi;
2. Thực tế đã thay đổi những gì;
3. Đã xác minh bằng cách nào, gồm lệnh và kết quả;
4. Rủi ro, giới hạn và cách hoàn tác;
5. Những việc nào được xác định rõ là chưa làm.

Với thay đổi giao diện, thêm ảnh chụp màn hình thực tế; với thay đổi hành vi, thêm các bước tái hiện; với thay đổi có di chuyển dữ liệu hoặc hệ thống, giải thích khả năng tương thích và cách hoàn tác.

## Sau khi tạo

Đợi các bước kiểm tra bắt buộc hoàn tất, dùng `@codex review` để yêu cầu đánh giá bổ sung, rồi nhờ người nắm bối cảnh kiểm tra diff chính. Khi cần sửa, đưa các bình luận cụ thể trở lại cùng nhánh PR; đừng tạo một nhánh không liên quan khiến xuất hiện hai bộ kết quả.

Mở PR và hợp nhất PR là hai ranh giới quyền hạn khác nhau. Cloud có thể tạo PR không có nghĩa là được bỏ qua chính sách hợp nhất của nhóm.

## Tài liệu chính thức

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Đánh giá Pull Request trên GitHub](https://learn.chatgpt.com/docs/third-party/github)
