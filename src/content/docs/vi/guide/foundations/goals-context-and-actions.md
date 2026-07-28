---
title: Mục tiêu, ngữ cảnh và hành động
description: Tách một lần tương tác thành công thành mục tiêu, bối cảnh, hành động và nghiệm thu.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Có tác vụ chạy xuôi rất nhanh, có tác vụ càng chat càng lệch — khác biệt không phải model đột nhiên thông minh hay kém đi, mà ở chỗ bạn đã tách rõ tác vụ hay chưa.

Bản tối giản như sau: mục tiêu nói cho nó «cuối cùng cần gì», ngữ cảnh nói «dựa trên gì để làm», hành động nói «được phép làm thế nào», nghiệm thu nói «làm đến mức nào mới tính là xong».

Một lần tương tác Codex ổn định hơn thường gồm bốn khối:

1. **Mục tiêu**: cuối cùng cần giao gì
2. **Ngữ cảnh**: bối cảnh, tệp, ràng buộc liên quan
3. **Hành động**: các bước Codex được phép làm (đọc, sửa, chạy)
4. **Nghiệm thu**: thế nào là hoàn thành, kiểm tra ra sao

Phần dạy Prompt triển khai bốn khối này thành khung ổn định — xem [Cấu trúc tác vụ tốt](/prompts/task-anatomy/).

## Bốn khối này mỗi khối lo gì

Có thể coi việc này như giao việc cho một trợ lý thực thi:

- **Mục tiêu**: bạn thực sự muốn nó giao thứ gì
- **Ngữ cảnh**: trước khi phán đoán nó phải biết những tiền đề nào
- **Hành động**: nó có được đọc tệp, sửa tệp, chạy lệnh, tìm trên mạng không
- **Nghiệm thu**: xong rồi bạn dùng tiêu chuẩn gì để nói «được»

Thiếu khối nào cũng dễ sinh vấn đề:

- Không mục tiêu: nó sẽ bận, nhưng chưa chắc bận đúng chỗ
- Không ngữ cảnh: nó sẽ đoán
- Không ranh giới hành động: nó có thể làm thừa, hoặc không dám làm
- Không nghiệm thu: hai bên hiểu «hoàn thành» khác nhau

## Hiểu nhầm thường gặp

### 1. Chỉ nói rõ mục tiêu vẫn chưa đủ

Chưa đủ.

Ví dụ bạn nói «giúp tôi sửa trang chủ một chút» — đó chỉ là hướng, chưa đủ để nó thực thi ổn định. Nó còn cần biết:

- Sửa tệp nào
- Giữ lại gì
- Đừng đụng gì
- Bạn muốn kết quả cuối trình bày ra sao

### 2. Ngữ cảnh càng nhiều càng tốt

Ngữ cảnh quá ít khiến nó đoán lung tung; ngữ cảnh quá nhiều khiến trọng tâm bị nhấn chìm. Then chốt là đưa **ngữ cảnh liên quan**, không phải đổ hết mọi thông tin vào.

### 3. Hành động có thể không nói, để nó tự phán đoán?

Đôi khi được, nhưng với người mới thì không ổn định.

Nếu bạn viết rõ:

- Được chỉnh sửa tệp nào
- Đừng cài dependency
- Đừng sửa cấu hình
- Đưa phương án trước rồi mới làm

Kết quả sẽ ổn định hơn nhiều.

## Khi chưa biết viết thế nào, có thể sắp theo thứ tự này

Nếu chưa biết tổ chức tác vụ, có thể sắp theo bốn câu này:

1. Tôi muốn bạn cuối cùng hoàn thành gì
2. Bạn phải dựa trên những bối cảnh và ràng buộc nào
3. Bạn được làm gì, không được làm gì
4. Tôi sẽ dùng tiêu chuẩn gì để kiểm tra bạn đã xong chưa

Rõ hơn nhiều so với chỉ viết một câu «giúp tôi xử lý vấn đề này».

## Ví dụ nhỏ

> Mục tiêu: sắp xếp rõ cấp tiêu đề trong `notes.md`.  
> Ngữ cảnh: chỉ sửa một tệp này; giữ nguyên thứ tự đoạn gốc.  
> Hành động: được chỉnh sửa tệp đó; đừng cài dependency.  
> Nghiệm thu: mở tệp ra thì tiêu đề liên tục từ H1 đến H3, không nhảy cấp.

Một tác vụ ổn định hơn ít nhất phải nói rõ mục tiêu, ngữ cảnh, ranh giới hành động và cách nghiệm thu.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ giải thích khung tách tác vụ gồm mục tiêu, ngữ cảnh, hành động và nghiệm thu; liên kết nội bộ và cấu trúc ví dụ đã được rà lại, và nội dung không phụ thuộc vào chi tiết sản phẩm dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
