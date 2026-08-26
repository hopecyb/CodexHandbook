---
title: Chọn client Codex
description: Chọn App máy tính, CLI, tích hợp IDE hoặc Cloud theo nơi làm việc và cách tương tác.
sidebar:
  order: 2
locale: vi
source_locale: zh-CN
source_revision: 1e89f67
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Khi chọn điểm vào Codex lần đầu, bạn không cần so sánh hàng chục tính năng. Hãy trả lời một câu hỏi trước: **công việc lần này chủ yếu diễn ra ở đâu?**

![Sơ đồ chọn client Codex: chọn App máy tính, CLI, tích hợp IDE hoặc Cloud theo nơi làm việc](/diagrams/codex-client-selection-vi.svg)

## Chọn trong 30 giây

| Công việc chủ yếu diễn ra ở | Điểm vào ưu tiên | Kiểu tương tác phù hợp nhất |
|---|---|---|
| Nhiều dự án và tác vụ song song trên máy cục bộ | **App máy tính** | Xem tác vụ, rà soát diff, xử lý phê duyệt, quản lý công việc dài |
| Terminal, script hoặc quy trình dòng lệnh hiện có | **CLI** | Giao tác vụ, chạy lệnh, kết hợp script và tự động hóa |
| VS Code, trình soạn thảo tương thích, Xcode hoặc JetBrains | **Tích hợp IDE** | Hỏi kèm ngữ cảnh trình soạn thảo, sửa và rà soát tại chỗ |
| Kho mã từ xa đã kết nối và môi trường cô lập | **Cloud** | Giao tác vụ cho đám mây, xử lý song song, rà soát kết quả sau |

Nếu chưa có sở thích rõ ràng, **App máy tính** thường là điểm bắt đầu trực quan nhất. Nếu đã dùng terminal hoặc VS Code lâu dài, ở lại bề mặt làm việc quen thuộc sẽ giảm chi phí chuyển đổi.

## Bốn điểm vào giải quyết vấn đề gì

### App máy tính: bảng điều khiển công việc cục bộ

App máy tính phù hợp khi bạn cần thấy rõ trạng thái tác vụ, thay đổi tệp và quy trình phê duyệt. Nó đặc biệt hữu ích để:

- Theo dõi nhiều tác vụ hoặc dự án cùng lúc
- Cô lập các thay đổi song song bằng worktree
- Rà soát diff rồi hỏi tiếp hoặc yêu cầu sửa
- Quản lý công việc cần tiếp tục chạy trong dự án cục bộ

Ví dụ: giao một tác vụ sửa lỗi hồi quy đăng nhập, một tác vụ khác chỉ đọc để phân tích nút thắt hiệu năng, rồi rà soát từng kết quả riêng.

### CLI: đưa Codex vào quy trình terminal

CLI phù hợp với người đã quản lý dự án bằng dòng lệnh. Nó ở gần lệnh kiểm thử, Git và script, đồng thời giúp ghi cùng thao tác vào tài liệu nhóm.

```bash
codex
```

Ví dụ: khởi động Codex tại gốc kho mã, yêu cầu chạy kiểm thử thất bại, định vị nguyên nhân gốc, thực hiện sửa đổi tối thiểu rồi xác minh lại bằng chính lệnh kiểm thử đó.

### Tích hợp IDE: làm việc quanh mã hiện tại

Tích hợp IDE phù hợp khi vấn đề gắn chặt với “tệp, vùng chọn hoặc diff đang xem”. Hiện có hai cách hỗ trợ: VS Code, Cursor, Windsurf và các trình soạn thảo tương thích dùng phần mở rộng Codex; Xcode và IDE JetBrains dùng điểm vào tích hợp Codex riêng.

Ví dụ: chọn một hàm khó hiểu, yêu cầu Codex giải thích đầu vào, đầu ra và đường lỗi, sau đó bổ sung các kiểm thử cho điều kiện biên.

### Cloud: giao việc cho môi trường từ xa cô lập

Cloud phù hợp khi kho mã từ xa đã được kết nối và bạn muốn tác vụ chạy độc lập với máy cục bộ. Tác vụ đám mây chạy trong môi trường cô lập, phù hợp cho khám phá song song, tác vụ dài và rà soát tập trung sau khi hoàn tất.

Ví dụ: giao ba vấn đề kho mã độc lập cho ba tác vụ đám mây, chờ chúng trả về thay đổi và bằng chứng xác minh rồi rà soát từng kết quả.

## Không phải chọn một trong bốn

Một quy trình có thể tiếp nối qua nhiều điểm vào:

1. Làm rõ vấn đề quanh tệp hiện tại trong IDE.
2. Giao phần cần khám phá lâu cho App máy tính hoặc Cloud.
3. Chạy lệnh kiểm tra theo quy ước nhóm trong CLI.
4. Quay lại App máy tính hoặc giao diện rà soát mã để xác nhận diff cuối.

Nguyên tắc không phải “cái nào mạnh nhất”, mà là **cái nào gần ngữ cảnh hiện tại và giúp kiểm tra kết quả dễ nhất**.

## Hai tình huống thường gặp

### Tình huống 1: lần đầu sửa bug trong dự án thật

Ưu tiên App máy tính. Bạn có thể thấy cuộc trò chuyện tác vụ, thay đổi và yêu cầu quyền cùng lúc. Sau khi hoàn thành một vòng kín đầy đủ, hãy thử CLI hoặc IDE.

### Tình huống 2: nhóm đã có lệnh cố định và quy ước CI

Ưu tiên CLI và ghi lệnh cài đặt, kiểm thử, định dạng vào `AGENTS.md`. Nhờ đó Codex có thể tuân theo cùng quy tắc dự án trong mọi tác vụ.

## Xác minh ngay sau khi chọn

Đừng chỉ xác nhận client “mở được”. Hãy hoàn thành vòng kín sau trong một kho mã thực hành:

1. Yêu cầu Codex đọc và giải thích một tệp.
2. Yêu cầu một thay đổi nhỏ có thể hoàn tác.
3. Kiểm tra diff thay vì chỉ đọc câu trả lời cuối.
4. Chạy một lệnh xác minh.
5. Xác nhận bạn biết cách từ chối hoặc thu hẹp yêu cầu quyền.

Xem bảng đầy đủ tại [so sánh tính năng](/vi/guide/reference/feature-comparison/) và ranh giới an toàn tại [quyền và sandbox](/vi/guide/permissions-and-sandbox/).

---

**Trạng thái:** verified

**Sản phẩm áp dụng:** App / CLI / IDE / Cloud

**Căn cứ xác minh:** Đã đối chiếu với tài liệu chính thức hiện hành về App máy tính ChatGPT, Codex CLI, IDE và Cloud. Trang này chọn theo nơi làm việc và cách tương tác, đồng thời phân biệt phần mở rộng tương thích VS Code với các tích hợp riêng của Xcode và JetBrains.

**Xác minh gần nhất:** 2026-08-26
