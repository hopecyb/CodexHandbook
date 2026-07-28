---
title: Tác vụ hẹn giờ và nền
description: Automations — chạy Codex không người trực dưới điều kiện kích hoạt; phải thiết kế Phê duyệt và điều kiện thoát.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Automations** để Codex tự thực thi Tác vụ dưới **lịch, sự kiện repo hoặc kích hoạt ngoài** — ví dụ kiểm tra cập nhật dependency, đồng bộ tài liệu, quét sức khỏe định kỳ.

## Nội dung trang này

- Khi nào đáng tự động hóa, khi nào phải giữ người trong vòng
- Bốn điểm thiết kế: kích hoạt, thực thi, thông báo, thất bại
- Quan hệ với Tác vụ Cloud và script CLI cục bộ

## So với Tác vụ thủ công

| | Tác vụ thủ công | Automation |
|---|---|---|
| Khởi động | Bạn khởi xướng | Lịch/sự kiện |
| Giám sát | Bạn có thể ngắt bất cứ lúc | Cần thông báo và nhật ký |
| Rủi ro | Bạn phán đoán tại chỗ | Lỗi có thể lan hàng loạt |
| Phù hợp | Khám phá, refactor | Lặp, quy tắc rõ |

## Thiết kế tự động hóa an toàn

### 1. Điều kiện kích hoạt phải rõ

```text
Tốt: mỗi Thứ Hai 09:00, kiểm tra liên kết chết trên docs/
Xấu: giám sát liên tục và tự sửa code
```

### 2. Quyền tối thiểu

- Quét chỉ đọc tốt hơn tự commit
- Nếu tự mở PR, dùng tài khoản bot chuyên dụng và bảo vệ nhánh

### 3. Điều kiện thoát

- Thất bại liên tiếp N lần thì tạm dừng
- Diff vượt ngưỡng số dòng thì chuyển thủ công
- Đụng thư mục bị cấm trong `AGENTS.md` thì dừng

### 4. Thông báo

- Slack/email/mobile: hoàn thành, thất bại, cần Phê duyệt
- Giữ nhật ký để kiểm toán

### 5. Điểm đối chiếu lại thủ công

| Có thể toàn tự động | Cần thủ công |
|---|---|
| Sinh PR nháp | Merge vào main |
| Liệt kê dependency lỗi thời | Nâng cấp major |
| Đồng bộ tài liệu công khai | Phát thông báo ra ngoài |

## Mẫu điển hình

### Bảo trì định kỳ

- Báo cáo lỗ hổng dependency → mở issue, không sửa thẳng lockfile
- Nhắc diff giữa file dịch và bản nguồn

### Theo sự kiện

- PR mới mở → chạy Skill review (bình luận đề xuất, không push)
- Issue gắn nhãn `bug` → sinh bản nháp bước tái hiện

### Tác vụ dài

Tách thành nhiều đoạn Automation + [bàn giao và tiếp tục](/guide/agent-work/handoff-and-resume/), tránh hết Ngữ cảnh một lần.

## Quan hệ với Cloud / CLI

- **Cloud**: phù hợp tự động hóa từ xa tích hợp sâu với GitHub
- **CLI + cron/CI**: phù hợp mạng nội bộ, pipeline tùy chỉnh
- Chọn cách: [cục bộ và đám mây](/guide/foundations/local-vs-cloud/) và [Web và Cloud](/guide/web-and-cloud/)

## Lỗi thường gặp

- Tự động hóa `git push` thẳng lên nhánh chính
- Không có cảnh báo thất bại — repo thầm mục nát
- Đặt Tác vụ khám phá thành hẹn giờ — phí hạn mức và khó nghiệm thu

## Checklist nghiệm thu

- [ ] Điều kiện kích hoạt, Quyền, thông báo, điều kiện thoát đã ghi tài liệu
- [ ] Diễn tập một chu kỳ đầy đủ trên fork hoặc repo thử
- [ ] Nhóm biết tài khoản bot và quy tắc Phê duyệt

## Nguồn tham chiếu
- Giải thích chính thức OpenAI Codex Cloud / Automations
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud / App / CLI  
**Ghi chú tái Kiểm chứng:** Trang này mô tả năng lực sản phẩm hiện hành về chạy tự động theo lịch, sự kiện và nền, nhưng lối vào kích hoạt và cách quản trị vẫn dễ đổi, căn cứ chính thức công khai cũng chưa đủ.  
**Kiểm chứng gần nhất:** 2026-07-26
