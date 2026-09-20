---
legacyVerification:
  status: "verified"
  products: "Cloud、App、IDE、CLI"
  checkedAt: "2026-08-26"
title: Giao việc và theo dõi
description: Khởi chạy một tác vụ Cloud độc lập, rồi điều chỉnh hướng thực hiện và nghiệm thu trong cùng cuộc trò chuyện.
locale: vi
source_locale: zh-CN
source_revision: "38b322f"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 60
---

Giao việc không có nghĩa là bỏ mặc vấn đề. Bạn cần đưa mục tiêu, ràng buộc, môi trường và tiêu chí hoàn thành vào một cuộc trò chuyện Cloud độc lập. Tác vụ có thể chạy ở chế độ nền; bạn có thể xem nhật ký, bổ sung bối cảnh, yêu cầu chỉnh sửa và cuối cùng đánh giá diff.

## Khi nào nên giao việc

- Tác vụ cần thời gian xây dựng hoặc kiểm thử khá lâu;
- Đầu vào đã nằm trong kho mã từ xa;
- Có thể dựng lại môi trường bằng tập lệnh;
- Tác vụ có thể tiến hành độc lập với công việc hiện tại;
- Bạn sẵn sàng đánh giá kết quả trước khi hợp nhất.

Nếu tác vụ phụ thuộc vào thay đổi cục bộ chưa commit, dịch vụ chạy trên máy của bạn hoặc thao tác liên tục của con người, hãy giữ tác vụ ở môi trường cục bộ trước.

## Một lời nhắc giao việc đầy đủ

```text
Mục tiêu: sửa lỗi ở issue #42 khiến yêu cầu đăng nhập vẫn giữ kết nối sau 30 giây.
Điểm bắt đầu: nhánh fix/42-timeout của acme/api.
Phạm vi: packages/auth/** và các bài kiểm thử tương ứng.
Không được: nâng cấp phần phụ thuộc, thay đổi API công khai, push lên main.
Xác minh: pnpm test --filter auth; pnpm typecheck.
Hoàn thành: trình bày nguyên nhân gốc, diff, các lệnh và kết quả thoát;
không tự động hợp nhất.
```

Sau khi khởi chạy, hãy xác nhận môi trường và nhánh đã chọn là đúng. Trong lúc chạy, chỉ theo dõi khi phát hiện thiếu tiền đề hoặc hướng thực hiện bị lệch:

```text
Ràng buộc bổ sung: không sửa HTTP client dùng chung; chỉ sửa trong auth adapter.
Trước khi tiếp tục, hãy giải thích ràng buộc này thay đổi phương án hiện tại ra sao.
```

Cùng một cuộc trò chuyện giữ lại bối cảnh đã có, phù hợp để sửa hướng cho cùng mục tiêu; mục tiêu hoàn toàn độc lập nên dùng cuộc trò chuyện mới. Các tác vụ song song không nên ghi vào cùng một nhánh hoặc cùng tập tệp.

## Khi có kết quả

1. Đọc bản tóm tắt và toàn bộ diff;
2. Đối chiếu các đường dẫn đã thay đổi với phạm vi được phép;
3. Xem đầu ra thực tế của từng lệnh xác minh;
4. Yêu cầu giải thích các bước thất bại hoặc chưa chạy;
5. Nếu cần sửa, đưa yêu cầu cụ thể trong cùng cuộc trò chuyện;
6. Khi đạt tiêu chí, tạo PR rồi để CI và người đánh giá tiếp quản.

Có thể khởi chạy tác vụ Cloud từ Web, IDE, GitHub, GitLab (Beta), Linear hoặc Slack; trang Cloud chính thức cũng cho biết có thể bắt đầu và đánh giá công việc từ Codex CLI. Dù dùng lối vào nào, các ranh giới về kho mã, môi trường, mạng và đánh giá vẫn giữ nguyên.

## Theo dõi khi có lỗi

Đừng chỉ nói “thử lại”. Hãy cung cấp bằng chứng lỗi và bước tiếp theo:

```text
Bài kiểm thử thất bại ở retry.test.ts:48. Trước tiên hãy giải thích lỗi này
có phải do thay đổi lần này gây ra không. Nếu có, chỉ sửa hồi quy đó và chạy lại
các bài kiểm thử auth. Nếu không, giữ nguyên lỗi và ghi nhận rõ ràng.
```

## Tài liệu chính thức

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Công việc kéo dài](https://learn.chatgpt.com/docs/long-running-work)
