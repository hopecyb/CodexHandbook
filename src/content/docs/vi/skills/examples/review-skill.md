---
title: 'Ví dụ: Skill rà soát với phạm vi diff được xác định rõ'
description: Tải trọn bộ scoped-review, phân biệt rà soát staged, unstaged và branch, rồi tái hiện tình huống Git dễ bị bỏ sót.
contentType: skill
audiences:
- developer
level: intermediate
outputs:
- markdown
- json
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Bảy phép kiểm tra hồi quy của bộ thu thập diff và kiểm tra cấu trúc Skill đều đạt. Ví dụ kích hoạt và kết luận rà soát do tác giả thiết kế; chưa thử định tuyến tự động qua nhiều mô hình hoặc đo tỷ lệ phát hiện lỗi.
  environment: Python 3.12.11 / Git / Darwin arm64; kho tổng hợp tạm thời, không có phụ thuộc bên thứ ba.
  evidence:
  - label: Phạm vi và giới hạn chạy thực tế
    href: /downloads/skills/scoped-review/validation/record.md
assets:
- path: /downloads/skills/scoped-review/scoped-review-1.0.0.zip
  purpose: Skill, bộ thu thập, hướng dẫn phạm vi, đầu vào tổng hợp, bản rà soát tham chiếu và kiểm tra hồi quy
  license: CC0-1.0
  version: 1.0.0
locale: vi
source_locale: zh-CN
source_revision: e29d1b3
translation_status: draft
translated_at: '2026-09-20'
---

Trước khi rà soát, hãy xác định rõ cần so sánh những gì. Skill này tránh nhầm “thay đổi hiện chưa commit” với “các commit so với main”, hoặc bỏ sót lỗi trong index vì cây làm việc trông bình thường.

[Tải scoped-review v1.0.0](/downloads/skills/scoped-review/scoped-review-1.0.0.zip) · [Xem SKILL.md](/downloads/skills/scoped-review/SKILL.md) · [Hướng dẫn cài đặt và sử dụng](/downloads/skills/scoped-review/README.md)

## Skill làm được gì

| Yêu cầu | Phạm vi thu thập | Không bao gồm |
|---|---|---|
| Chỉ rà soát thay đổi staged | HEAD → index | Nội dung unstaged |
| Chỉ rà soát thay đổi unstaged | Index → cây làm việc | Bản vá staged |
| Rà soát thay đổi hiện chưa commit | Giữ riêng hai bản vá; liệt kê tệp mới | Cần đọc riêng nội dung tệp mới |
| Rà soát commit so với branch được chỉ định | Merge-base duy nhất → HEAD | Nội dung cục bộ chưa commit |

Skill không tự đoán `main` làm mặc định. Nếu không có mốc cơ sở, nó báo lỗi thay vì âm thầm đổi phạm vi. Bộ thu thập cung cấp chứng cứ; muốn kết luận lỗi vẫn cần xem mã và bài kiểm tra liên quan.

## Cài đặt và gọi lần đầu

Cần Python 3.10+, Git và một kho luyện tập cục bộ đã có ít nhất một commit. Đặt `scoped-review/` đã giải nén vào `.agents/skills/` của dự án đích và xác nhận tệp vào là `.agents/skills/scoped-review/SKILL.md`. Nếu đã có Skill cùng tên, hãy so sánh trước khi ghi đè.

Việc phát hiện Skill cục bộ và tệp vào tuân theo [hướng dẫn chính thức](https://learn.chatgpt.com/docs/build-skills). Sau khi cài, xác nhận có thể chọn rồi gọi rõ ràng:

```text
$scoped-review Rà soát các thay đổi mã hiện chưa commit trong kho luyện tập này.
Đừng sửa tệp. Trước tiên liệt kê findings, sau đó giải thích phạm vi
đã bao phủ đối với tệp staged, unstaged và tệp mới.
```

Đây là gói học tập, không tự cài vào cấu hình cá nhân. Nếu chưa muốn cài, bạn có thể chạy trực tiếp tập lệnh đi kèm để xem phạm vi nó thu thập.

## Tái hiện tình huống dễ bỏ sót

Đầu vào tổng hợp nằm trong `fixtures/scenario.json`:

1. Công thức giảm giá ban đầu đúng.
2. Đưa công thức sai vào staged: `amount * (1 - percent)`.
3. Khôi phục công thức đúng trong cây làm việc: `amount * (1 - percent / 100)`, nhưng không stage lần sửa này.

Lúc này chỉ xem `git diff HEAD` có thể không thấy thay đổi, nhưng commit index vẫn đưa lỗi vào. Với `amount=40, percent=10`, phiên bản staged cho -360 thay vì 36.

Rà soát đúng phải nêu riêng phiên bản staged bị sai và bản vá unstaged sửa lỗi đó. [Tài liệu tham chiếu đầy đủ của tác giả](/downloads/skills/scoped-review/fixtures/expected-review.md) còn giải thích vì sao không nên trộn chế độ branch vào vấn đề cục bộ này; đây không phải đầu ra mô hình thật.

## Chạy các phép kiểm tra đi kèm

Trong thư mục Skill đã giải nén, chạy:

```sh
python3 validation/test_scopes.py
```

Bảy bài kiểm tra trong các kho Git tạm xác nhận phạm vi, hồi quy bỏ sót rà soát, việc từ chối mốc cơ sở sai, danh sách tệp mới và kho được rà soát không bị sửa. Thành công thì mã thoát là 0. Các bài kiểm tra không ghi vào dự án thật của bạn.

Để dùng bộ thu thập với một kho:

```sh
python3 scripts/collect_diff.py --repo /path/to/your/repo --mode working-tree
```

Thay đường dẫn bằng kho bạn được phép rà soát. Chế độ branch còn cần `--base`. Đầu ra JSON có thể chứa mã riêng tư nhưng không tự tải lên. Xem các lệnh đầy đủ trong [hướng dẫn phạm vi](/downloads/skills/scoped-review/references/scopes.md).

## Khi nào không nên kích hoạt

Biên tập bài viết hay xây dựng tính năng mới không thuộc Skill này. Với yêu cầu mơ hồ như “review giúp”, dùng ngữ cảnh để xác định phạm vi và hỏi lại nếu vẫn chưa rõ. [Các tình huống kích hoạt](/downloads/skills/scoped-review/fixtures/trigger-cases.json) ghi bảy yêu cầu dự kiến; chưa đo định tuyến tự động thực tế.

## Điều kiện hoàn thành và giới hạn

- Báo cáo nêu snapshot, mốc cơ sở và phạm vi tệp đã thực sự rà soát.
- Findings có vị trí, điều kiện gây lỗi, tác động và chứng cứ; sở thích về phong cách không bị coi là lỗi chặn.
- Nội dung tệp chưa theo dõi nhưng liên quan đã được xem hoặc được đánh dấu rõ là chưa rà soát. Không nhận đã bao phủ tệp nhị phân, tệp bị bỏ qua hay submodule.
- Nêu phép kiểm tra đã chạy và chưa chạy. Không có findings không bảo đảm không có lỗi.
- Việc rà soát dừng ở báo cáo, không tự sửa, commit hoặc push.

Bạn có thể dùng mẫu rà soát và bàn giao trong [lộ trình dành cho nhà phát triển](/vi/guide/learning-paths/developer/) để lưu kết quả. Khung ngắn `pr-review` trước đây vẫn hữu ích để hiểu cấu trúc; gói này dùng tên khác để tránh ghi đè phiên bản cá nhân.
