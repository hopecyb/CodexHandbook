---
title: Chính sách sử dụng chấp nhận được
description: "Thỏa thuận cấp đội về Codex được làm gì và không được làm gì — căn chỉnh với kiểm soát kỹ thuật và đào tạo."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Một **Chính sách sử dụng chấp nhận được (AUP)** biến «có được dùng Codex cho việc này không?» thành đồng thuận tổ chức thay vì phán đoán cá nhân. Nó bổ sung [mô hình mối đe dọa](/guide/team-enterprise/security/threat-model/): mô hình mối đe dọa bao rủi ro; AUP bao **ranh giới hành vi**.

## Trang này sẽ nói gì

- Chủ đề một AUP nên phủ
- Nối HR/tuân thủ với kiểm soát kỹ thuật
- Dàn ý điều khoản khởi đầu (cần bản địa hóa pháp lý)

## AUP quản trị cái gì

Dù kỹ thuật làm được, trong đội chúng ta có được phép không?

Nó không thay thế chính sách kỹ thuật — nó nêu ranh giới người có thể đọc và tuân theo.

:::caution
Phần sau là **dàn ý giáo dục**, không phải tư vấn pháp lý. Cần pháp chế và tuân thủ xem xét trước khi công bố.
:::

## Hiểu nhầm thường gặp

### AUP quan trọng với người thực hành

Không chỉ «giấy tờ». Câu hỏi hàng ngày gồm:

- Dữ liệu nào không được đưa vào Codex
- Khi nào bắt buộc review của người
- Mở rộng và kết nối ngoài nào bị cấm

### Chính sách không thực thi sẽ suy yếu

Nếu chính sách nói «thay đổi prod cần phê duyệt» nhưng công cụ cho phép lách, AUP không còn tác dụng.

AUP phải căn chỉnh với đào tạo, quyền, cấu hình và kiểm toán — không chỉ độ dài văn bản.

## Chủ đề khuyến nghị

| Chủ đề | Điểm |
|---|---|
| Sử dụng được phép | Phát triển, tài liệu, nghiên cứu, tự động hóa nội bộ |
| Sử dụng bị cấm | Truy cập trái phép, quấy rối, lách bảo mật |
| Phân loại dữ liệu | Repo/dữ liệu nào được phép; quy tắc PII khách hàng |
| Trách nhiệm đầu ra | Review người trước merge; không tư vấn pháp lý/y tế ra ngoài |
| Mở rộng | Chỉ danh sách Plugin/MCP được phê duyệt |
| Tài khoản | Không chia sẻ ghế cá nhân; thu hồi khi offboarding |
| Sự cố | Cách báo cáo hành vi đáng ngờ |

## Cấu trúc cơ bản

1. **Mục tiêu và phạm vi**
2. **Tình huống được phép** (liên kết [Bản đồ năng lực](/guide/start-here/codex-capability-map/))
3. **Tình huống bị cấm**
4. **Dữ liệu và bảo mật**
5. **Giám sát của người** (merge, thay đổi production)
6. **Hậu quả** (tham chiếu sổ tay nhân viên)
7. **Liên hệ và ngày rà soát**

## Căn chỉnh với kiểm soát kỹ thuật

| Điều khoản AUP | Triển khai kỹ thuật |
|---|---|
| Không exfiltrate mã nguồn | Chính sách mạng, phê duyệt MCP |
| Thay đổi prod cần phê duyệt | Bảo vệ nhánh, deny `git push` |
| Chỉ mô hình được phê duyệt | Cấu hình quản lý tổ chức |

## Lỗi thường gặp

- Công bố AUP, không đào tạo
- Chính sách mâu thuẫn thực tế công cụ (cấm nhưng vẫn cho phép)
- Nhiều năm không cập nhật trong khi tính năng đổi (Computer Use, v.v.)

## AUP có hiệu quả không?

Hỏi:

1. Nó có trả lời ranh giới thật của đội không?
2. Có map được sang đào tạo, cấu hình hoặc quy trình phê duyệt không?
3. Khi vi phạm, đội có phát hiện và ứng phó được không?

Càng nhiều «có» → càng có khả năng hiệu quả.

## Checklist nghiệm thu

- [ ] Onboarding gồm xác nhận đã nhận AUP
- [ ] Không xung đột với [Quy tắc đội](/guide/customization/rules/team-rules/)
- [ ] Rà soát hàng năm hoặc khi phát hành tính năng lớn

Giá trị của AUP là ranh giới đội rõ cho việc dùng Codex — và căn chỉnh với kiểm soát thật.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** Tổ chức / đội  
**Cơ sở kiểm chứng:** Tài liệu doanh nghiệp OpenAI vẫn nhấn mạnh truy cập theo vai trò, quyền hành động và ranh giới hệ thống nguồn cho plugin và ứng dụng; trang định nghĩa AUP là ranh giới hành vi tổ chức kèm «dàn ý giáo dục, cần bản địa hóa pháp lý» — không phải mẫu chính sách chính thức.  
**Kiểm chứng gần nhất:** 2026-07-26
