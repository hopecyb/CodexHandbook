---
title: Phục hồi thất bại
description: Khi tác vụ lệch hướng, test đỏ hoặc ngữ cảnh hết — cách hoàn tác an toàn rồi tiếp tục.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Phục hồi thất bại** nói về việc sau khi tác vụ lệch hoặc bị ngắt, làm sao giữ hiện trường rồi tiếp tục tiến. Chương này đưa bộ bước **phát hiện → chặn thiệt hại → phục hồi → rút kinh nghiệm** có thể lặp lại; dùng kèm [hoàn tác và phục hồi](/guide/getting-started/undo-and-recover/) cũng như [quản lý tác vụ dài](/cases/workflows/long-running-task-management/).

## Trọng tâm trang này

- Khi nào nên `git stash`, hoàn commit, mở Thread mới
- Cách đưa thông tin thất bại vào prompt vòng sau
- Nhóm ghi nhận vấn đề tái diễn thế nào

## Tín hiệu thất bại

| Tín hiệu | Hành động có thể |
|---|---|
| Test thất bại diện rộng | Dừng thực thi, thu hẹp diff |
| Sửa sai thư mục/nhánh | Hoàn tác, `@` lại đường dẫn đúng |
| Kế hoạch và triển khai lệch nặng | Quay lại giai đoạn khám phá hoặc kế hoạch |
| Ngữ cảnh quá dài, quên ràng buộc | Thread mới + bàn giao tóm tắt |
| Phê duyệt/quy tắc từ chối lặp | Kiểm tra quy tắc và tác vụ có mâu thuẫn không |

## Quy trình phục hồi tối thiểu dùng được

```text
1. Dừng sửa tiếp (nói rõ «chưa viết code»)
2. Lưu hiện trạng: git status / stash / ghi thread ID
3. Tóm tắt trong tối đa 5 điểm: mục tiêu, đã làm, hiện tượng thất bại, giả thuyết
4. Chọn: hoàn tác / thu hẹp phạm vi / Thread mới tiếp tục
5. Thành công thì ghi vào AGENTS.md hoặc rút kinh nghiệm case
```

Ví dụ prompt:

```text
Thay đổi hiện tại làm 12 test thất bại. Chưa sửa tiếp.
Liệt kê tệp bị ảnh hưởng bởi 3 commit gần nhất, đề xuất điểm hoàn tác tối thiểu,
và đưa một kế hoạch sửa nhỏ hơn.
```

## Quy trình đề xuất

```text
Phát hiện (test/người/CI)
    → Chặn thiệt hại (dừng viết, cô lập nhánh)
    → Chẩn đoán (xem «chẩn đoán trước khi sửa»)
    → Thử lại bước nhỏ
    → Rút kinh nghiệm đóng gói
```

Kịch bản nhiều Agent xem [phối hợp nhiều Agent](/cases/workflows/multi-agent-coordination/): khi thất bại phải rõ tác vụ con nào chịu trách nhiệm hoàn tác.

## Lỗi thường gặp

- Trên hướng sai còn «thêm một chút» chồng patch
- Không lưu log thất bại, Thread mới lặp cùng lỗi
- Ép `git push` để cứu tình
- Không phân biệt môi trường (cục bộ vs Cloud) khiến bước phục hồi vô hiệu

## Ranh giới an toàn

- Bản thân thao tác phục hồi cũng chịu [quy tắc lệnh](/guide/customization/rules/command-rules/)
- Sự cố production: hoàn tác trước rồi phân tích nguyên nhân gốc; không để Agent nối thẳng production sửa dữ liệu

## Checklist nghiệm thu

- [ ] Giải thích được chiến lược phục hồi đã chọn và lý do
- [ ] Kho trở lại trạng thái build/test được
- [ ] Nguyên nhân thất bại và bài học đã ghi (issue hoặc AGENTS.md)
- [ ] Nếu cần Thread mới, có tóm tắt ràng buộc then chốt

## Chương liên quan

- [Chẩn đoán trước khi sửa](/cases/workflows/diagnose-before-fixing/)
- [Bàn giao và tiếp tục](/guide/agent-work/handoff-and-resume/)
- [Tham chiếu lỗi](/guide/reference/error-reference/)

## Nguồn tham chiếu

- Rút kinh nghiệm và playbook freestylefly/CodexGuide
- Chương gỡ lỗi của stormzhang

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo các chương bàn giao và phục hồi, chẩn đoán, quy tắc lệnh và tham chiếu lỗi đã kiểm chứng của sổ tay; trang này mô tả phương pháp chung để chặn thiệt hại khi thất bại rồi tiếp tục, không lấy nút hoặc lệnh phục hồi của một phía làm quy tắc cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
