---
title: Xử lý sự cố
description: Định vị theo triệu chứng tới hướng dẫn và trang sản phẩm tương ứng.
locale: vi
source_locale: zh-CN
source_revision: d1ad457
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 18
---

Nếu đã có vấn đề nhưng chưa biết thuộc loại nào — có thể vào từ trang này.

Bạn không cần ngay từ đầu phán đoán là vấn đề CLI, IDE, Cloud, quyền hay Prompt. Phân loại theo triệu chứng trước, rồi vào chương tương ứng.

## Ở đây làm được gì

- Khi có vấn đề nên phân luồng đi đâu trước
- Khi không phán đoán được loại lỗi, tối thiểu nên bắt đầu xử lý thế nào
- Những vấn đề nào thuộc cài đặt, quyền, ngữ cảnh hoặc mô tả tác vụ

# Xử lý sự cố

| Triệu chứng | Đi tới |
|---|---|
| Cài đặt thất bại | [Xử lý sự cố desktop](/vi/guide/desktop-app/troubleshooting/) · [Xử lý sự cố CLI](/vi/guide/cli/troubleshooting/) · [Xử lý sự cố IDE](/vi/guide/ide/troubleshooting/) |
| Đăng nhập/xác thực thất bại | [Đăng nhập](/vi/guide/getting-started/sign-in-and-authentication/) |
| Không biết chọn client nào | [Chọn client](/vi/guide/choose-your-client/) · [So sánh tính năng](/vi/guide/reference/feature-comparison/) |
| Kết quả vượt phạm vi / rất tệ | [Case tác vụ đầu tiên](/vi/cases/first-task/) · [Gỡ lỗi Prompt](/vi/prompts/prompt-debugging/) · [Hoàn tác](/vi/guide/getting-started/undo-and-recover/) |
| Ngữ cảnh rối | [Giữ tập trung](/vi/guide/context/keep-context-focused/) |
| Thắc mắc về quyền/Sandbox | [Quyền và Sandbox](/vi/guide/permissions-and-sandbox/) |

## Cách phân khi không biết bắt đầu từ đâu

Khi xử lý sự cố lần đầu, có thể phán đoán trước mình thuộc loại nào:

- Cơ bản không bắt đầu được
- Bắt đầu được nhưng giữa đường báo lỗi
- Không báo lỗi nhưng kết quả sai
- Không phải báo lỗi — mà không biết chọn lối vào hoặc không biết giao tác vụ

Phân vào bốn loại này trước — định vị phía sau thường nhanh hơn nhiều.

## Hiểu nhầm thường gặp

### 1. Xử lý sự cố chắc chắn phải biết thuật ngữ rất chuyên trước

Không cần.

Lần đầu xử lý sự cố quan trọng hơn là phân vấn đề vào nhóm lớn trước — không phải thuộc thuật ngữ trước.

### 2. Chỉ cần không báo lỗi là không thuộc vấn đề xử lý sự cố

«Kết quả sai», «luôn lệch hướng», «không biết bắt đầu thế nào» — cũng đều thuộc vấn đề cần phân luồng.

### 3. Khi lỗi nên ngay lập tức bấm lung tung thêm nhiều trang để thử

Thường không bằng dừng lại một chút, phán đoán trước mình thuộc loại vấn đề nào, rồi mới tới trang tương ứng.

Xử lý sự cố phân loại trước — không nhất thiết phải bắt đầu sửa ngay.

Thêm tham chiếu: [FAQ](/vi/guide/reference/faq/) · [Tham chiếu lỗi](/vi/guide/reference/error-reference/) · [Tài liệu Codex chính thức](https://developers.openai.com/codex)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ đảm nhận vai trò phân luồng theo triệu chứng tới các chương cài đặt, đăng nhập, quyền, ngữ cảnh và chất lượng kết quả; đường dẫn các chương được liên kết đã kiểm từng mục, và trang không phụ thuộc mã lỗi cụ thể, số phiên bản hay văn bản giao diện.  
**Kiểm chứng gần nhất:** 2026-07-26
