---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Trang này chỉ trình bày cách cấu trúc một tác vụ. Các ví dụ và liên kết nội bộ đã được kiểm tra lại; nội dung không phụ thuộc vào những thông tin dễ thay đổi như phiên bản sản phẩm, giá hoặc giao diện."
  checkedAt: "2026-08-25"
title: Cấu trúc của một tác vụ tốt
description: Xác định mục tiêu, bối cảnh, đầu vào, ràng buộc, tiêu chí nghiệm thu và phạm vi quyền hạn.
locale: vi
source_locale: zh-CN
source_revision: 'b933eca'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Khi mô tả yêu cầu, càng có nhiều thông tin, nội dung càng dễ trở nên rời rạc: tài liệu thì nhiều, nhưng kết quả mong muốn, giới hạn và tiêu chí nghiệm thu lại lẫn vào nhau. Codex phải tự lấp các khoảng trống đó.

Trang này đưa ra một mẫu giao việc có thể dùng ngay. Bạn sẽ thấy mỗi phần giải quyết vấn đề gì, và cách bản mô tả tác vụ đi vào vòng lặp “khảo sát, lập kế hoạch, thực hiện, kiểm chứng”.

## Ai nên đọc trang này

- Người đã biết mở Codex nhưng thường gặp tình trạng “sửa quá nhiều”, “chưa làm xong” hoặc “khó đánh giá kết quả”
- Lập trình viên, người sáng tạo và nhóm muốn giao yêu cầu nói miệng cho Agent thực hiện
- Người cần xác định phạm vi, quyền hạn và điều kiện dừng cho một tác vụ dài

## Cấu trúc tác vụ

Bạn có thể sắp xếp thông tin theo thứ tự sau:

- Kết quả cần đạt là gì
- Vì sao cần làm
- Cần những tài liệu nào
- Giới hạn nằm ở đâu
- Làm sao biết đã hoàn thành

Không nhất thiết phải giữ đúng thứ tự này, nhưng khi làm rõ được các mục trên, tác vụ sẽ được thực hiện ổn định hơn nhiều.

## Mẫu đề xuất

```text
Mục tiêu: …… (sản phẩm cuối cùng là gì)
Bối cảnh: …… (vì sao việc này quan trọng, tình trạng hiện tại)
Đầu vào: …… (tệp, liên kết, nội dung được dán vào có liên quan)
Ràng buộc: …… (phạm vi được sửa, phong cách, việc không được làm)
Tiêu chí nghiệm thu: …… (điều kiện hoàn thành có thể kiểm tra)
Phạm vi quyền hạn: …… (có được truy cập mạng, cài phụ thuộc, sửa cấu hình không)
Khi thiếu thông tin: hỏi trước, đừng đoán.
```

![Vòng lặp từ bản mô tả tác vụ đến kết quả có thể kiểm chứng](/illustrations/flow-task-loop.webp)

Sáu mục bên trái sơ đồ không nhằm kéo dài câu lệnh, mà nhằm giảm bớt những khoảng trống quan trọng. Khi tác vụ bước vào giai đoạn thực hiện, bằng chứng kiểm chứng sẽ quyết định bước tiếp theo: chỉ bàn giao khi đạt yêu cầu; nếu chưa đạt, mang thông tin về lỗi quay lại bản mô tả tác vụ hoặc kế hoạch, thay vì tiếp tục sửa mò.

## Vai trò của từng phần

- **Mục tiêu:** Tránh một tác vụ chỉ nói phải làm gì mà không nói kết quả cần có
- **Bối cảnh:** Giúp Codex hiểu vì sao cần làm theo cách đó
- **Đầu vào:** Cung cấp các tệp, liên kết và tài liệu mà Codex thực sự cần xem
- **Ràng buộc:** Tránh vượt phạm vi hoặc tiện tay sửa thêm
- **Tiêu chí nghiệm thu:** Biến câu hỏi “đã xong chưa” thành điều có thể kiểm tra
- **Phạm vi quyền hạn:** Nói rõ từ đầu có được truy cập mạng, cài phụ thuộc hoặc sửa cấu hình không

## Những hiểu lầm thường gặp

### 1. Phải viết đầy đủ và dài cho từng phần

Mẫu này giống một danh sách kiểm tra hơn là bài điền vào chỗ trống.
Một số tác vụ không cần phần bối cảnh dài, nhưng khi bỏ phần đó, bạn cũng mất đi một phần căn cứ để ra quyết định.

### 2. Mục tiêu và nghiệm thu là một

Đây là hai việc khác nhau.

- **Mục tiêu** nói bạn muốn nhận được kết quả gì
- **Nghiệm thu** nói bạn sẽ xác định kết quả đó đã đạt được bằng cách nào

### 3. Đầu vào nghĩa là dán tất cả tài liệu vào

Đầu vào không phải càng nhiều càng tốt; sự liên quan quan trọng hơn.
Điều cốt yếu là chỉ rõ những tài liệu “bắt buộc phải xem”.

## Mẫu tác vụ tối giản

Nếu chỉ muốn viết một phiên bản đủ dùng trước, bạn có thể rút gọn như sau:

```text
Mục tiêu: biến cái gì thành kết quả như thế nào
Đầu vào: các tệp hoặc trang liên quan ở đây
Ràng buộc: chỉ được sửa ở đâu, không được đụng đến gì
Nghiệm thu: tôi sẽ kiểm tra việc hoàn thành bằng cách nào
Khi không chắc chắn: hỏi trước
```

## Từ yêu cầu mơ hồ đến tác vụ có thể thực hiện

### Yêu cầu ban đầu

```text
Giúp tôi cải thiện trang chủ tài liệu.
```

Câu này chưa nêu người đọc mục tiêu, phạm vi được sửa và thế nào mới được coi là “tốt hơn”. Dù Codex tạo ra nội dung, bạn cũng khó đánh giá liệu nó có vượt phạm vi hay không.

### Phiên bản có thể thực hiện

```text
Mục tiêu: Viết lại nội dung màn hình đầu tiên của trang chủ tài liệu, để người mới biết đến Codex hiểu trong 30 giây đây là gì và nên bắt đầu từ đâu.
Bối cảnh: Trang chủ hiện giả định người đọc đã hiểu Agent, ngữ cảnh và Skill; phần giới thiệu điểm bắt đầu chưa đủ rõ.
Đầu vào: src/content/docs/guide/index.md
Ràng buộc: Chỉ sửa tệp này; không sửa điều hướng, kiểu hiển thị hay thành phần giao diện. Khi nhắc đến Agent lần đầu, thêm một câu giải thích dễ hiểu.
Tiêu chí nghiệm thu:
- Màn hình đầu tiên nêu rõ mục đích của sổ tay, đối tượng đọc và điểm bắt đầu đọc
- Giữ nguyên frontmatter và cấp bậc tiêu đề hiện có
- Không thêm thuật ngữ chuyên môn khi chưa giải thích
- Lệnh pnpm build chạy thành công
Phạm vi quyền hạn: Được đọc các trang liên quan trong cùng website; không truy cập mạng, cài phụ thuộc hoặc tạo Git commit.
Khi thiếu thông tin: Trước tiên liệt kê thông tin còn thiếu và phạm vi dự kiến sửa, rồi chờ tôi xác nhận.
```

### Quy trình thực hiện dự kiến

1. Đọc trang chủ và các trang mở đầu liên quan, nêu vấn đề hiện tại.
2. Đưa ra kế hoạch ngắn chỉ liên quan đến một tệp.
3. Sửa nội dung và trình bày tóm tắt diff.
4. Chạy `pnpm build`.
5. Báo cáo bằng chứng cho từng tiêu chí trong bốn tiêu chí nghiệm thu.

## Cách tự kiểm tra bản mô tả tác vụ

Trước khi gửi, hãy tự hỏi:

- Mục tiêu mô tả kết quả, hay chỉ có những hành động như “cải thiện”, “xử lý”, “xem thử”?
- Đầu vào có chỉ gồm các tệp và tài liệu thực sự liên quan không?
- Ràng buộc đã nói rõ những gì không được đụng đến chưa?
- Người khác có thể đánh giá từng tiêu chí nghiệm thu là “đạt / không đạt” không?
- Việc truy cập mạng, cài phụ thuộc, ghi ra hệ thống bên ngoài và commit mã có cần được cho phép trước không?
- Khi thiếu thông tin, Agent nên hỏi, tự tìm hiểu hay dừng lại?

Có thể rút gọn mẫu theo quy mô tác vụ, nhưng bỏ một phần cũng đồng nghĩa với bớt đi một loại căn cứ để quyết định. Sửa lỗi chính tả trong một tệp không cần bối cảnh dài; chuyển đổi nhiều mô-đun thì không thể chỉ có một câu nêu mục tiêu.

## Bước tiếp theo

- [Định nghĩa tiêu chí hoàn thành](/vi/prompts/define-done/)
- [Ràng buộc và giới hạn](/vi/prompts/constraints-and-boundaries/)
- [Yêu cầu lập kế hoạch trước](/vi/prompts/ask-for-a-plan/)
- [Khảo sát — lập kế hoạch — thực hiện — kiểm chứng](/vi/cases/workflows/explore-plan-execute-verify/)
