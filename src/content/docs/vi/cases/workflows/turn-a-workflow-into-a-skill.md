---
title: Đóng gói quy trình thành Skill
description: Quy trình lặp lần thứ ba đáng viết thành Skill — tích hợp kích hoạt, hướng dẫn và nghiệm thu.
locale: vi
source_locale: zh-CN
source_revision: bc54539
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Khi cùng loại tác vụ (kiểm tra phát hành, đồng bộ tài liệu, quét bảo mật) **lần thứ ba** vẫn hoàn thành bằng copy-paste prompt, nên cân nhắc [Skill](/vi/skills/overview/). Chương này nối [phương pháp quy trình](/vi/cases/workflows/) với hệ mở rộng.

## Trang này giải quyết gì

- Khi nào nâng mẫu prompt thành Skill
- Skill nên gồm những phần nào (hướng dẫn, tài nguyên, script)
- Cách chia sẻ và phiên bản hóa với nhóm

## Tín hiệu nên đóng gói

- Bước cố định + checklist nghiệm thu cố định
- Cần tham chiếu mẫu hoặc script trong kho
- Nhiều người cần hành vi nhất quán
- Muốn model **tự nhớ** quy trình khi gặp tác vụ liên quan

Không cần đóng gói: khám phá một lần, sửa nhỏ phụ thuộc mạnh ngữ cảnh ngày hôm đó.

## Cách làm tối thiểu dùng được

1. **Viết rõ SKILL.md:** khi nào kích hoạt, đầu vào đầu ra, mục cấm
2. **Kèm `references/`:** checklist, ví dụ diff
3. **Tùy chọn `scripts/`:** lệnh kiểm chứng chạy lại được (khớp [quy tắc lệnh](/vi/guide/customization/rules/command-rules/))
4. **Nhắc tên Skill** trong README kho hoặc AGENTS.md
5. **Thử chạy 2–3 lần**, rồi gắn `verified`

Nhập môn: [tạo Skill đầu tiên](/vi/skills/create-your-first-skill/)

## Quy trình đề xuất

```text
Từ case thành công rút prompt và mục nghiệm thu
    → Cắt gọn thành thân Skill (bỏ khẩu ngữ, giữ ràng buộc)
    → Thêm mô tả kích hoạt («trước merge», «trước phát hành»)
    → Nhóm PR review
    → Ghi vào thư mục examples/ theo quy ước kho, plugin nhóm hoặc thư viện skill nội bộ
```

So với [biến quy trình thành tự động hóa](/vi/skills/automations/scheduled-tasks/): Skill nghiêng về **hướng dẫn tương tác**; Automation nghiêng về **theo lịch / không người trông**.

## Lỗi thường gặp

- Skill quá dài, đọc còn mệt hơn `AGENTS.md`
- Không có checklist nghiệm thu, chất lượng thực thi trôi
- Script cần bí mật máy cục bộ mà không ghi SECURITY
- Trùng và mâu thuẫn với quy tắc Hooks

## Ranh giới an toàn

- Xem [bảo mật và phiên bản Skill](/vi/skills/security/)
- Skill nhóm nên vào danh sách phê duyệt mở rộng (xem [rủi ro Plugin và MCP](/vi/guide/team-enterprise/security/plugin-and-mcp-risk/))

## Checklist nghiệm thu

- [ ] Đồng nghiệp mới chỉ nhờ Skill hoàn thành được một lần tác vụ
- [ ] Điều kiện kích hoạt rõ, ít kích hoạt nhầm
- [ ] Có phiên bản hoặc CHANGELOG (cấp nhóm)
- [ ] Liên kết chéo với tài liệu quy trình nguồn

## Nguồn tham chiếu
- [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md) và [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md) trong kho
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo use cases “Save workflows as skills” công khai hiện tại trên OpenAI Developers, cùng các chương Skills, tự động hóa, quy tắc lệnh và rủi ro mở rộng đã kiểm chứng của sổ tay; nội dung trang giới hạn ở phương pháp ổn định “khi nào đóng gói quy trình lặp thành Skill, cách tổ chức hướng dẫn và nghiệm thu”.  
**Kiểm chứng gần nhất:** 2026-07-26
