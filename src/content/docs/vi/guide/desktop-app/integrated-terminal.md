---
title: Terminal tích hợp
description: Dùng terminal trong App để phối hợp tác vụ.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Terminal tích hợp tiện để xem đầu ra lệnh Agent chạy, hoặc tự chạy lệnh kiểm chứng.

Không cần rời ứng dụng Desktop, bạn vẫn thấy quá trình và kết quả chạy lệnh tại đây.

Lúc mới dùng, có thể chú ý:

- Nó thực sự đã chạy gì
- Vì sao nó nói kiểm chứng đã qua
- Một bước nào đó vì sao thất bại

## Lưu ý khi dùng

- Viết «lệnh kiểm chứng» vào tiêu chí nghiệm thu của Prompt
- Không dán khóa production vào terminal tích hợp
- Lệnh chưa hiểu thì đừng tự chạy lại trên môi trường production

## Hiểu nhầm thường gặp

### 1. Phải biết dùng terminal mới dùng được Desktop App?

Nhiều tác vụ cơ bản không cần bạn tự gõ lệnh.  
Nhưng nên biết vùng terminal làm gì, để khi cần đối chiếu không hoàn toàn không hiểu.

### 2. Nó in một đống chữ — nên xem gì?

Có thể chú ý:

- Có lỗi rõ ràng không
- Nó chạy lệnh nào
- Cuối cùng thành công, thất bại, hay hoàn thành một phần

### 3. Có thể chép lệnh của nó rồi tự chạy lại không?

Được, nhưng điều kiện là bạn hiểu nó sẽ làm gì — đặc biệt đừng chạy lại mù quáng trên production.

Terminal tích hợp đặt thẳng quá trình kiểm chứng ra trước mặt, cũng giúp bạn quen dần dòng lệnh đang làm gì.

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** App  
**Ghi chú tái kiểm:** Trang này giả định Desktop App có trải nghiệm «terminal tích hợp» ổn định để xem và chạy lại, nhưng tài liệu chính thức hiện chủ yếu chỉ xác nhận Codex có thể làm việc cùng folders, repositories, terminals, developer tools local — chưa đủ để chống đỡ cách viết giao diện cụ thể ở đây.  
**Kiểm chứng gần nhất:** 2026-07-26
