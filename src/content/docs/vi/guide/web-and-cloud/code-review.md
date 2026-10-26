---
legacyVerification:
  status: "verified"
  products: "Cloud / GitHub"
  checkedAt: "2026-08-26"
title: Đánh giá mã trên Cloud và GitHub
description: Xem xét diff trên Cloud và dùng Codex trên GitHub để bổ sung một lượt đánh giá tập trung vào các vấn đề quan trọng.
locale: vi
source_locale: zh-CN
source_revision: "ea6796a"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 50
reviewed_at: 2026-10-26
---

Khi một tác vụ Cloud hoàn tất, bạn sẽ nhận được bản tóm tắt và diff. Bạn có thể hỏi tiếp, yêu cầu chỉnh sửa hoặc tạo PR. Việc hoàn tất tác vụ không đồng nghĩa với chấp thuận hợp nhất: quyết định cuối cùng vẫn phải dựa trên CI, quy tắc bảo vệ nhánh của dự án và đánh giá của con người.

## Hai hình thức đánh giá

| Hình thức | Nội dung xem xét | Kết quả |
|---|---|---|
| Đánh giá kết quả Cloud | Bản tóm tắt, nhật ký và diff của tác vụ | Quyết định tiếp tục chỉnh sửa hay tạo PR |
| Codex review trên GitHub | Diff của PR thuộc kho mã đã kết nối và các quy tắc trong `AGENTS.md` | Đăng một lượt code review trên GitHub |

Bình luận trong PR trên GitHub:

```text
@codex review
```

Codex đăng các phát hiện dưới dạng một lượt review GitHub thông thường. Theo tài liệu chính thức hiện tại, bình luận trên GitHub tập trung vào vấn đề ưu tiên cao P0/P1; nếu không phát hiện vấn đề, Codex có thể chỉ để lại một reaction. Ít bình luận không phải là lý do để bỏ qua đánh giá của con người.

## Thứ tự đánh giá

1. **Phạm vi**: tệp, thư mục, phần phụ thuộc và các tệp được tạo có đúng với tác vụ không;
2. **Hành vi**: các trường hợp bình thường, lỗi và biên có đáp ứng yêu cầu không;
3. **Bảo mật**: kiểm tra xác thực, quyền truy cập, xử lý đầu vào, thông tin xác thực và kết nối mạng ra ngoài;
4. **Bằng chứng**: những bài kiểm thử nào đã thực sự chạy, các lỗi có được công khai không;
5. **Khả năng hoàn tác**: có thể hoàn tác trong phạm vi nhỏ không, có lẫn phần tái cấu trúc không liên quan không.

Ví dụ về lời nhắc:

```text
Đánh giá PR này. Chỉ báo cáo những phát hiện có thể gây ra hành vi sai,
hỏng dữ liệu, vấn đề bảo mật hoặc hồi quy tương thích.
Mỗi phát hiện phải nêu mức độ nghiêm trọng, vị trí cụ thể, điều kiện gây lỗi
và tác động. Đừng coi sở thích về phong cách là lỗi.
```

## Quy tắc riêng của kho mã

Thêm vào `AGENTS.md` trong thư mục áp dụng:

```md
## Code Review Rules

### Authentication boundaries

- Flag any path that logs access tokens or sends them to non-allowlisted hosts.
  Safe path: keep tokens in the credential provider and redact diagnostic output.
```

Quy tắc ở thư mục gốc áp dụng cho toàn bộ kho mã; `AGENTS.md` lồng bên trong có thể bổ sung các bước kiểm tra cụ thể cho từng dịch vụ. Hãy bắt đầu với hai hoặc ba quy tắc ổn định lâu dài, nêu rõ cách xử lý an toàn, thay vì liệt kê quá nhiều tên hàm dễ lỗi thời.

## Giới hạn của review tự động

Người dùng có quyền push hoặc quyền admin cần thiết trên GitHub có thể bật review tự động cho kho mã trong Codex Settings. Review tự động là một lớp kiểm tra bổ sung và không nên có quyền tự động hợp nhất. Với kho mã có rủi ro cao, vẫn cần giữ người đánh giá bắt buộc, CI và bảo vệ nhánh.

## Danh sách nghiệm thu

- [ ] Một người đã đọc diff của phần logic chính
- [ ] Các phát hiện P0/P1 đã được sửa hoặc rủi ro đã được chấp nhận bằng văn bản
- [ ] CI đã qua và có thể giải thích mọi lần chạy lại sau lỗi
- [ ] Không có Secret, tệp được tạo ngoài ý muốn hoặc thay đổi lockfile không liên quan
- [ ] Mô tả tác vụ, mô tả PR và các thay đổi thực tế khớp nhau

## Tài liệu chính thức

- [Đánh giá Pull Request trên GitHub](https://learn.chatgpt.com/docs/third-party/github)
- [Đánh giá mã trên nhiều ứng dụng](https://learn.chatgpt.com/docs/code-review)
