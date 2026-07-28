---
title: Cách chọn phương thức mở rộng
description: Cây quyết định từ Prompt đến Automations — tránh"dùng cho có".
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cơ chế mở rộng càng nhiều, chọn sai càng tốn. Trang này giúp bạn, trước khi cài Plugin hoặc viết MCP, quyết xem có thật sự cần không.

Những tên dễ lẫn nhất:

- Prompt
- AGENTS.md
- Skill
- MCP
- Plugin
- Automation

Cùng là"mở rộng Codex", đôi khi một câu Prompt là đủ, đôi khi mới cần cơ chế nặng hơn.

## Cây quyết định

```text
Tác vụ sẽ lặp ≥3 lần?
├─ Không → dùng tốt Prompt + @ tham chiếu là đủ
└─ Có → cần quy tắc bền vững?
    ├─ Có → viết vào AGENTS.md
    └─ Không → quy trình cố định và mô tả được?
        ├─ Có → làm Skill
        └─ Không → cần đọc hệ thống ngoài?
            ├─ Có → đánh giá MCP (ưu tiên chỉ đọc)
            └─ Không → cần chạy không người trực?
                ├─ Có → Automations + cổng kiểm soát thủ công
                └─ Không → giữ Skill + kích hoạt thủ công
```

Nhóm cần phân phối thống nhất nhiều Skill + MCP? Ở cuối các nhánh trên, cân nhắc **Plugin**.

## Đối chiếu kịch bản

| Kịch bản | Tổ hợp khuyến nghị |
|---|---|
| Thống nhất quy chuẩn kiểm thử và commit | AGENTS.md |
| Checklist review trước mỗi lần merge | Skill `pr-review` |
| Lấy Ngữ cảnh ticket từ Linear | MCP + Prompt Tác vụ |
| Báo cáo dependency hàng tuần | Automation → mở issue |
| Quét khóa bí mật trước commit | Hooks (doanh nghiệp) hoặc CI |
| Newbie một lần cài đủ bộ công cụ | Plugin (qua kiểm tra bảo mật) |

## Chiều chi phí

| Cơ chế | Chi phí viết | Chi phí bảo trì | Rủi ro bảo mật |
|---|---|---|---|
| Prompt | Thấp | Thấp | Thấp |
| AGENTS.md | Trung bình | Trung bình | Thấp |
| Skill | Trung bình | Trung bình | Thấp–trung bình |
| MCP | Cao | Cao | Trung bình–cao |
| Plugin | Thấp (dùng sẵn) / cao (tự làm) | Trung bình | Trung bình–cao |
| Automations | Cao | Cao | Cao |

## Phản mẫu

- **Skill phình to**: cài hàng chục Skill, description tranh khớp lẫn nhau
- **MCP như búa vạn năng**: việc vốn dùng `git` được vẫn cứng nối API
- **Tự động hóa không nghiệm thu**: hẹn giờ sửa code nhưng không ai xem diff
- **Làm lại bánh xe**: đã có Connector chính thức vẫn tự dựng MCP

## Câu hỏi thường gặp

### 1. Có phải ngay từ đầu nên cài Plugin, nối MCP?

Nhiều vấn đề chỉ cần dùng tốt Prompt, kiểm soát phạm vi và `AGENTS.md` là giải quyết được.

### 2. Đọc cây quyết định này thế nào?

Một nguyên tắc là đủ: nhẹ trước, chưa đủ mới nặng thêm.

### 3. Lần đầu thường bắt đầu từ loại nào?

Phần lớn rơi vào ba loại:

- Prompt
- `AGENTS.md`
- Skill

Thường chưa cần ngay MCP hay tự động hóa không người trực.

Quan trọng không phải cơ chế cao cấp đến đâu, mà nó có khớp vấn đề hiện tại không.

## Đọc thêm

- [Bản đồ năng lực mở rộng](/skills/capability-map/)
- [Mẫu Phê duyệt thủ công](/cases/workflows/human-approval-patterns/)
- [Đóng quy trình thành Skill](/cases/workflows/turn-a-workflow-into-a-skill/)(trang lộ trình)

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Ghi chú tái Kiểm chứng:** Cây quyết định trang này chạm ranh giới và phạm vi áp dụng hiện tại của Automations, Plugins, MCP và Connector chính thức; các hình thái sản phẩm vẫn đổi nhanh, tài liệu công khai hiện có chưa đủ để nâng đỡ ổn định toàn trang.  
**Kiểm chứng gần nhất:** 2026-07-26
