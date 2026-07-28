---
title: Bản đồ năng lực mở rộng
description: Quan hệ giữa Skill, MCP, Plugin, Hooks, lệnh slash và AGENTS.md.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Cơ chế mở rộng không ít và thật sự dễ lẫn. Trang này chỉ nói quan hệ giữa chúng, không mở bước cài đặt.

## Sơ đồ quan hệ

```text
                    ┌─────────────────┐
                    │ Mục tiêu Tác vụ của bạn │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
   ┌───────────┐      ┌─────────────┐     ┌──────────────┐
   │ AGENTS.md │      │ Prompt/template │     │ Lệnh slash      │
   │ Quy tắc bền vững │      │ Tác vụ lần này │     │ Bạn chủ động kích hoạt │
   └───────────┘      └─────────────┘     └──────────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                    ┌─────────────────┐
                    │      Skill       │
                    │ Gói workflow tái dùng │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐  ┌──────────┐  ┌─────────────┐
        │   MCP    │  │  Hooks   │  │  Scripts    │
        │ Công cụ ngoài │  │ Kiểm tra kiểm toán │  │ Script trong Skill │
        └──────────┘  └──────────┘  └─────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Plugin       │
                    │ Phân phối và đóng gói tổ hợp │
                    └────────┬────────┘
                             ▼
                    ┌─────────────────┐
                    │  Automations     │
                    │ Không người trực / hẹn giờ │
                    └─────────────────┘
```

## Bảng so sánh

| | Ai kích hoạt | Độ bền | Nối hệ thống ngoài | Phân phối nhóm |
|---|---|---|---|---|
| AGENTS.md | Tự nạp | Cao (Git) | Dễ |
| Prompt | Bạn | Thấp | Khó |
| Lệnh slash | Bạn | Trung bình | Tùy sản phẩm |
| Skill | Bạn hoặc model khớp | Cao | Dễ (thư mục/Git) |
| MCP | Model gọi công cụ | Cấp cấu hình | Cần quản trị |
| Plugin | Sau cài có hiệu lực tổng hợp | Cao | Kênh chính thức/nhóm |
| Hooks | Sự kiện hệ thống | Cấp cấu hình | Doanh nghiệp hay gặp |
| Automations | Thời gian/sự kiện | Cấp cấu hình | Cần luồng Phê duyệt |

## Quan hệ thường gặp

| Nhu cầu | Gợi ý chọn |
|---|---|
| Thống nhất phong cách code và lệnh kiểm thử | AGENTS.md |
| Chuẩn hóa quy trình"review PR" | Skill |
| Đọc ticket Jira/Linear | MCP |
| Cài một bộ tích hợp cho cả nhóm | Plugin |
| Quét khóa bí mật trước mỗi lần commit | Hooks |
| Thứ Hai hàng tuần tự sinh bản nháp báo cáo tuần | Automations (+ phát hành thủ công) |

Logic nhánh chi tiết: [Cách chọn phương thức mở rộng](/skills/choosing-an-extension-method/).

## Không phụ thuộc lối vào sản phẩm

Các cơ chế này **không gắn** một giao diện duy nhất: mức hỗ trợ Skill/MCP của CLI, Desktop App, IDE có thể khác nhau — lấy [đối chiếu tính năng](/guide/reference/feature-comparison/) và tài liệu chính thức làm chuẩn.

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Ghi chú tái Kiểm chứng:** Trang này vẽ Skill, MCP, Plugin, Hooks, Automations thành sơ đồ quan hệ cố định và ngầm hàm cấp hỗ trợ hiện tại; các ranh giới và lối vào này trong tài liệu công khai chính thức ngày 2026-07-26 chưa phủ đủ, cần viết lại theo sản phẩm hiện hành.  
**Kiểm chứng gần nhất:** 2026-07-26
