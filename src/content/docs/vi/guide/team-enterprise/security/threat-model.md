---
title: Mô hình mối đe dọa
description: "Các bề mặt rủi ro chính của Codex trong môi trường đội — dữ liệu, công cụ, mở rộng và chuỗi cung ứng."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Mô hình mối đe dọa nghĩa là nghĩ về rủi ro trước khi nó xảy ra:

> **Nếu Codex thật sự nối vào code, lệnh và công cụ ngoài của chúng ta, điều gì dễ đi sai nhất?**

**Mô hình hóa mối đe dọa** tách điều đó. Codex không phải «chỉ thêm một cửa sổ chat» — nó có thể **đọc code, chạy lệnh, gọi công cụ ngoài**. Chương này map các bề mặt rủi ro chính; kiểm soát nằm ở [Ma trận quyền](/guide/reference/permission-matrix/) và [Sandbox](/guide/foundations/sandbox-and-network/).

## Trang này sẽ nói gì

- Tài sản và ranh giới tin cậy
- Mối đe dọa điển hình và hướng giảm thiểu
- Quy tắc, Hooks và CI phân trách nhiệm thế nào

## Không chỉ việc của «đội bảo mật»

Nếu bạn xây dựng, vận hành nền tảng, viết tài liệu hoặc dẫn dự án, bạn quan tâm khi đội:

- Trao token quyền quá cao cho tự động hóa
- Chạy hành động rủi ro cao trên đầu vào không đáng tin
- Không biết dữ liệu nào có thể rời tổ chức
- Thêm mở rộng vì tính năng mà bỏ qua quyền và nguồn gốc

Mô hình hóa mối đe dọa giúp cố định ranh giới trước sự cố.

## Tài sản và ranh giới

| Tài sản | Ví dụ |
|---|---|
| Mã nguồn và IP | Repo riêng, thiết kế chưa công bố |
| Chứng chỉ | API key, `.env`, IAM cloud |
| Dữ liệu người dùng | PII, nội dung ticket khách hàng |
| Hạ tầng | CI, pipeline deploy production |

**Ranh giới tin cậy:** mô hình và mở rộng mặc định ở phía **không hoàn toàn đáng tin**; review người và chính sách thực thi tại biên.

## Hai câu hỏi trung tâm

Trước khi triển khai quy mô đội, hỏi:

1. Điều gì chúng ta không được phép mất?
2. Codex không được phép làm nhầm điều gì?

Câu đầu xác định tài sản quan trọng; câu hai xác định hành động nguy hiểm. Hầu hết kiểm soát bao quanh hai điều này.

## Tình huống

- Codex đọc repo riêng của bạn
- Truy cập hệ thống ticket có quyền
- Chạy lệnh shell
- Đăng kết quả vào bình luận

Rồi chú ý:

- Thấy điều không nên thấy
- Làm điều không nên làm
- Đưa thông tin nội bộ ra ngoài

Khung này biến mô hình hóa mối đe dọa thành checklist rủi ro trước khi ra mắt.

## Tổng quan mối đe dọa

| Mối đe dọa | Mô tả | Hướng giảm thiểu |
|---|---|---|
| Prompt injection | Issue/web độc hại định hướng quyền vượt mức | Vệ sinh đầu vào, CI chỉ đọc, [chủ đề injection](/guide/team-enterprise/security/prompt-injection/) |
| Quyền quá mức | Token, Sandbox quá rộng | Quyền tối thiểu, bảo vệ nhánh |
| Exfiltration dữ liệu | Lệnh/MCP lộ repo | Chính sách mạng, DLP, Hook kiểm toán |
| Mở rộng độc hại | Plugin/MCP chưa review | [Rủi ro mở rộng](/guide/team-enterprise/security/plugin-and-mcp-risk/) |
| Chuỗi cung ứng | Can thiệp dependency/script | SCA sẵn có, code review |
| Thao tác sai | Agent drop DB, push nhầm | Deny lệnh, CI no-push |

## Khi nào ưu tiên trong mô hình mối đe dọa

Nếu một năng lực vừa:

- Chạm tài sản quan trọng
- Thực thi hành động thật

Ví dụ: đọc repo riêng, gọi API production, MCP có ghi, tự push code.

## Đừng phủ hết ngày đầu

Nhiều đội cố viết cả chính sách một lúc rồi không ship gì.

Lần triển khai đầu thường chỉ cần:

1. Top 3 lớp tài sản
2. Top 3 hành động bạn sợ nhất
3. Một kiểm soát trực tiếp cho mỗi mục

Ví dụ:

- Sợ lộ DB prod → hạn chế creds prod và đường xuất
- Sợ push nhầm lên main → bảo vệ nhánh và phê duyệt
- Sợ issue/web định hướng → siết đầu vào ngoài và review chỉ đọc

Chưa đầy đủ — nhưng hữu ích hơn một siêu tài liệu không ai đọc.

## Kiểm soát nhiều tầng khuyến nghị

```text
L1 Danh tính và tenant (SSO, nhóm)
L2 Cấu hình quản lý tổ chức và chính sách mô hình
L3 Quy tắc repo + AGENTS.md
L4 Sandbox / phê duyệt / Hooks
L5 Review người và bảo vệ nhánh
```

## Lỗi thường gặp

- Chỉ đào tạo, không kiểm soát kỹ thuật
- Giả định «mô hình đủ thông minh»
- Secrets production trên đường Agent ghi được
- Dồn hết rủi ro vào «review người sẽ bắt»

## Phiên bản tối thiểu khả dụng

Thiết lập:

- Hành động rủi ro cao cần phê duyệt
- Dữ liệu nhạy cảm deny mặc định
- Tự động hóa chỉ đọc mặc định

Đã loại bỏ nhiều rủi ro đội; tinh chỉnh quản trị sau.

## Checklist nghiệm thu

- [ ] Liệt kê được Top 3 tài sản tổ chức đáng lo
- [ ] Mỗi mối đe dọa có kiểm soát hoặc ghi nhận rủi ro chấp nhận
- [ ] Liên hệ ứng phó sự cố đã căn chỉnh

## Liên quan

- [Ngữ cảnh nhạy cảm](/guide/context/sensitive-context/)
- [Mẫu phê duyệt của người](/cases/workflows/human-approval-patterns/)

## Nguồn tham chiếu
- White paper bảo mật doanh nghiệp OpenAI (chính thức)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** Đội / doanh nghiệp  
**Cơ sở kiểm chứng:** Tài liệu plugin, ứng dụng và tích hợp OpenAI vẫn phân biệt truy cập dữ liệu ngoài, quyền hành động, yêu cầu phê duyệt và ranh giới hệ thống nguồn; trang tổ chức rủi ro đội thành tài sản, ranh giới tin cậy, mối đe dọa điển hình và kiểm soát nhiều tầng — không phụ thuộc một toggle sản phẩm cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
