---
title: Chạy tác vụ đầu tiên
description: Dùng Prompt rõ ràng để hoàn thành một thay đổi nhỏ.
locale: vi
source_locale: zh-CN
source_revision: 766820b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

Ví dụ dưới đây mặc định **Desktop App**; CLI/IDE cũng dùng được cùng một đoạn Prompt.

Nhiều người lần đầu dùng Codex muốn ngay lập tức bảo nó «làm cả một website» hoặc «refactor cả dự án». Như vậy rất dễ mất kiểm soát ngay.

Tác vụ lần đầu làm nhỏ hơn sẽ ổn hơn. Chạy thông cả bộ quy trình quan trọng hơn làm lớn ngay từ đầu.

## Vì sao tác vụ lần đầu nên chọn nhỏ như vậy

Tác vụ lần đầu tốt nhất thỏa ba điều kiện này:

- Phạm vi thay đổi nhỏ
- Kết quả một nhìn là kiểm được
- Dù làm sai cũng dễ hoàn tác

Vì vậy ở đây dùng một ví dụ luyện tập rất nhỏ.

## Ví dụ tác vụ

Trong dự án luyện tập nói với Codex:

```text
Mục tiêu: ở cuối hello.md thêm một mục «Bài luyện hôm nay», gồm danh sách ba dòng điểm chính.
Ràng buộc: chỉ sửa hello.md; đừng xóa nội dung đã có; đừng chạy yêu cầu mạng.
Nghiệm thu: cuối tệp xuất hiện tiêu đề đó và đúng ba mục danh sách.
Nếu thiếu thông tin hãy hỏi tôi trước, đừng đoán.
```

## Vai trò từng phần của Prompt

Đoạn Prompt này tách rõ vài việc then chốt:

- **Mục tiêu**: nói cho nó cần làm gì
- **Ràng buộc**: nói cho nó không được sửa lung tung chỗ nào
- **Nghiệm thu**: nói cho nó «thế nào mới tính là xong»
- **Nếu thiếu thông tin hãy hỏi tôi trước**: ngăn nó tự ý đoán

Đây không phải mẫu cố định — chỉ là viết rõ phần dễ nói mơ hồ nhất.

## Hiểu nhầm thường gặp

### 1. Tác vụ lần đầu càng lớn càng học được bản lĩnh thật

Lần đầu quan trọng hơn là đi một vòng khép kín đầy đủ — không phải một hơi làm việc lớn.

### 2. Prompt đã viết ra rồi thì phía sau giao cho nó tự phát huy

Trong tác vụ lần đầu, trọng tâm là giữ mắt vào ba việc:

- Phạm vi có vượt không
- Nó có đang làm trên tệp bạn nói không
- Kết quả cuối có khớp nghiệm thu không

### 3. Lần đầu làm sai nghĩa là tôi không biết dùng

Tác vụ lần đầu vốn gồm các nội dung sau:

- Phát hiện chỗ nào chưa đúng
- Chỉ ra được vấn đề
- Biết cách để nó thu lại

## Lưu ý khi thực thi

1. Để nó đưa kế hoạch ngắn (hoặc bạn chủ động yêu cầu kế hoạch)
2. Khi phê duyệt ghi tệp, xác nhận đường dẫn đúng
3. Xong rồi vào [Kiểm tra kết quả](/vi/guide/getting-started/review-the-result/)

## Thứ tự thực thi

Có thể đi theo 5 bước này:

1. Chọn một dự án luyện tập an toàn
2. Giao một tác vụ nhỏ chỉ sửa một tệp
3. Trước khi phê duyệt, nhìn rõ nó muốn đụng chỗ nào
4. Xong rồi kiểm tra phạm vi và kết quả
5. Không hài lòng thì hoàn tác hoặc tiếp tục chỉnh hướng chính xác

5 bước này đi xong, bạn sẽ quen hơn một chút với nhịp cộng tác tổng thể.

## Xong rồi bạn nên kiểm tra gì

Trọng tâm xem ba việc này:

1. Nó có chỉ sửa `hello.md` không
2. Cuối tệp có thật sự thêm mục đó không
3. Số mục danh sách có đúng ba không

Ba mục đều đúng thì tác vụ nhỏ lần này về cơ bản đã chạy xuôi.

## Nếu nó làm sai

Lần đầu làm sai rất bình thường. Bạn có thể tiếp tục như sau:

```text
Bạn sửa thừa rồi. Hãy hoàn tác thay đổi trên các tệp khác, chỉ giữ sửa đổi trên hello.md.
```

Hoặc:

```text
Tạm đừng sửa tiếp. Cho tôi biết vừa rồi bạn đã sửa những chỗ nào.
```

Nguyên lý Prompt: [Cơ bản về Prompt](/vi/prompts/basics/).

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE  
**Cơ sở kiểm chứng:** Đã đối chiếu chéo với các chương cơ bản Prompt, kiểm tra kết quả, hoàn tác/khôi phục và dự án luyện tập liên quan đã được kiểm chứng trong cẩm nang hiện tại; nội dung trang giới hạn ở phương pháp luyện tập ổn định «lần đầu chỉ làm tác vụ phạm vi nhỏ, kiểm tra được, hoàn tác được».  
**Kiểm chứng gần nhất:** 2026-07-26
