---
title: Hiểu codebase
description: Khám phá kho mã lạ ở chế độ chỉ đọc để xây bản đồ nhận thức có thể hành động.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Hiểu codebase

## Siêu dữ liệu

| Trường | Nội dung |
|---|---|
| Đối tượng | Nhà phát triển |
| Client | CLI / IDE |
| Thời gian ước tính | 30–60 phút |

## 1. Mục tiêu và ngữ cảnh

**Mục tiêu:** Trước khi sửa, làm rõ ranh giới module, điểm vào và vùng rủi ro.

**Tiêu chí thành công:** Có thể giải thích cho người khác đường đi chính «từ request đến response» hoặc «từ lệnh đến đầu ra».

## 2. Prompt đề xuất

```text
Chưa sửa code. Đọc @src/ và @README, nêu trong tối đa 8 điểm:
1. Mục đích dự án và tech stack
2. Trách nhiệm các thư mục chính
3. Điểm vào khởi chạy/kiểm thử
4. 3 tệp liên quan nhất tới 【mục tiêu của tôi】
5. 3 câu hỏi cần tôi xác nhận
```

## 3. Kiểm chứng

- Đối chiếu mẫu với `package.json` / tệp entry thực tế
- Ghi kết luận vào issue hoặc tóm tắt `AGENTS.md`

## 4. Liên quan

- [Mẫu hiểu codebase](/prompts/templates/understand/)
- [Khám phá—Lập kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/)
---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Use cases Codex hiện tại trên OpenAI Developers vẫn gồm “Understand large codebases”, trọng tâm là theo dõi đường đi chính, nhận diện module then chốt và nhanh chóng định vị tệp liên quan; ví dụ trang này thuộc kịch bản khám phá chỉ đọc, khớp định vị hiện tại của tài liệu chính thức.  
**Kiểm chứng gần nhất:** 2026-07-26
