---
title: "Phạm vi và thứ tự ưu tiên của AGENTS.md"
description: "Hiểu chính xác cách Codex tìm và kết hợp quy tắc toàn cục, ở gốc dự án và trong thư mục hiện tại."
contentType: reference
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Đã đối chiếu từng quy tắc tìm kiếm và kết hợp với tài liệu chính thức; ví dụ thư mục và gợi ý kiểm tra tệp được nạp chỉ nhằm hướng dẫn, không khẳng định đã chạy thử trên mọi ứng dụng khách."
  evidence:
    - label: "AGENTS.md"
      href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE、Cloud"
  checkedAt: "2026-08-26"
locale: vi
source_locale: zh-CN
source_revision: "b5f31cc"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 20
---

Codex xây dựng một chuỗi chỉ dẫn khi bắt đầu mỗi lần chạy. Trước hết cần hiểu đúng thứ tự Codex tìm các tệp `AGENTS.md`, thay vì tự suy đoán một bảng xếp hạng trộn lẫn chính sách tổ chức, cấu hình và prompt.

## Thứ tự tìm kiếm theo tài liệu chính thức

1. **Tầng toàn cục**: trong thư mục home của Codex (mặc định là `~/.codex`), Codex tìm `AGENTS.override.md` trước; nếu không có mới đọc `AGENTS.md`. Tầng này chỉ dùng tệp không rỗng đầu tiên.
2. **Tầng dự án**: từ gốc dự án (thường là gốc Git) đến thư mục làm việc hiện tại, Codex lần lượt kiểm tra `AGENTS.override.md`, `AGENTS.md` và các tên tệp dự phòng đã cấu hình trong mỗi thư mục. Mỗi thư mục chỉ đóng góp tối đa một tệp.
3. **Ghép nội dung**: Codex nối nội dung từ gốc đến thư mục hiện tại. Tệp càng gần thư mục hiện tại càng xuất hiện sau, nên có thể ghi đè chỉ dẫn trước đó.

Codex bỏ qua tệp rỗng. Việc nạp dừng khi nội dung đã ghép đạt `project_doc_max_bytes`; giới hạn mặc định là 32 KiB.

## Ví dụ monorepo

```text
repo/
├── AGENTS.md
├── apps/
│   └── web/
│       └── AGENTS.md
└── services/
    └── payments/
        ├── AGENTS.md
        └── AGENTS.override.md
```

Khi bắt đầu từ `services/payments`, Codex nạp `AGENTS.md` ở gốc trước. Nếu thư mục này có `AGENTS.override.md`, tệp `AGENTS.md` cùng thư mục sẽ bị bỏ qua.

Đặt quy tắc áp dụng cho toàn kho mã ở tệp gốc, chẳng hạn trình quản lý gói, các bài kiểm thử chung và những điều cấm về bảo mật. Tệp lồng bên trong chỉ nên ghi các quy tắc bổ sung cho dịch vụ đó. Tránh sao chép 80% nội dung giống nhau.

## Kết hợp với prompt của tác vụ

`AGENTS.md` lưu các quy ước lâu dài của dự án để quản lý bằng phiên bản. Prompt nêu mục tiêu, phạm vi và tiêu chí nghiệm thu của tác vụ hiện tại. Ví dụ:

```text
Tuân thủ các tệp AGENTS.md áp dụng. Lần này chỉ sửa services/payments/retry.ts
và các bài kiểm thử; không luân chuyển khóa. Chạy make test-payments và báo cáo
kết quả thực tế.
```

Prompt không thể biến một khả năng bị giới hạn bởi hệ thống, tổ chức, sandbox hoặc quyền truy cập thành khả năng sẵn có. Khi có xung đột, hãy yêu cầu Codex liệt kê nguồn và phạm vi của các chỉ dẫn liên quan. Phân biệt quy ước mặc định của dự án có thể điều chỉnh với giới hạn thực thi thực sự. Nếu phạm vi rõ ràng, đã được cho phép và không xung đột với chỉ dẫn cấp cao hơn, hãy tiếp tục; chỉ nêu trở ngại cụ thể khi thực sự thiếu thông tin hoặc quyền. Xem đối chiếu đầy đủ tại [Thứ tự ưu tiên của ngữ cảnh](/vi/guide/context/context-priority/).

## Kiểm tra nội dung thực sự được nạp

Bắt đầu một phiên mới trong thư mục đích và hỏi:

```text
Trước khi làm việc, hãy liệt kê theo thứ tự các nguồn AGENTS.md /
AGENTS.override.md được nạp cho lần chạy này và tóm tắt riêng những ràng buộc
mà từng tệp bổ sung. Không sửa tệp nào.
```

`AGENTS.md` được đọc khi khởi động. Sau khi chỉnh sửa, hãy kiểm tra bằng một lần chạy hoặc phiên mới; đừng giả định phiên hiện tại tự động nạp lại tệp.

## Tên tệp dự phòng và giới hạn dung lượng

Nếu đã có `TEAM_GUIDE.md`, bạn có thể cấu hình:

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

Tên tệp dự phòng chỉ có hiệu lực khi cùng thư mục không có tệp ưu tiên cao hơn. Trước khi tăng giới hạn, hãy bỏ nội dung trùng lặp và bối cảnh không liên quan để quy tắc quan trọng không bị đẩy khỏi ngữ cảnh.

## Nguồn chính thức

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
