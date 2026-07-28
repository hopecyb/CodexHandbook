---
title: Codex là gì
description: Giải thích bằng ngôn ngữ đời thường Codex làm được gì, không làm được gì, và các lối vào chính.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 2
---

Codex là **Agent lập trình và làm việc bằng AI** do OpenAI cung cấp. Bạn đưa cho nó một mục tiêu; nó kết hợp tệp dự án, công cụ và sự phê duyệt của bạn để đọc, sửa, chạy lệnh, tạo kết quả, rồi giao quá trình và thay đổi cho bạn kiểm tra.

Nó giống một đồng nghiệp số biết dùng công cụ. Bạn chịu trách nhiệm nêu mục tiêu, ranh giới và tiêu chí chấp nhận; nó tìm tài liệu, sửa tệp, chạy các bước — nhưng quyết định cuối cùng vẫn thuộc về bạn.

Tài liệu sản phẩm chính thức lấy [OpenAI Codex](https://developers.openai.com/codex) làm chuẩn; cẩm nang này là hướng dẫn mã nguồn mở của cộng đồng, giúp học có hệ thống và bắt tay làm thực tế, không thay thế tài liệu chính thức.

## Khác gì so với chat AI thông thường

Nhiều người mới thấy Codex hay hiểu nó như «AI chat mạnh hơn một chút». Khác biệt chính nằm ở khả năng thực thi.

| Thứ bạn thường dùng | Có thể hiểu như |
|---|---|
| Chatbot thông thường | Đưa lời khuyên, giải thích khái niệm, viết một đoạn văn |
| Codex | Ngoài trả lời, còn có thể **đọc tệp, sửa tệp, chạy lệnh, tạo artifact** |

Công cụ chat thông thường chủ yếu dừng ở trả lời; Codex trong phạm vi bạn cho phép sẽ trực tiếp làm việc.

## Tác vụ nào phù hợp giao cho nó

Nếu một tác vụ ngoài «trò chuyện» còn cần đọc tài liệu, sửa thứ gì đó, chạy các bước, tạo ra kết quả — rất phù hợp để làm cùng Codex.

Nếu chỉ hỏi một khái niệm, cần một câu cảm hứng, hay một lời khuyên chung chung, AI dạng chat thông thường cũng đủ.

## Có thể dùng cho những việc gì

Dù bạn không phải lập trình viên, vẫn có thể hiểu qua các tình huống sau:

- **Đọc và sắp xếp tài liệu**: tóm tắt tài liệu, biên bản họp, ảnh chụp màn hình, bảng biểu
- **Viết và chỉnh nội dung**: chỉnh văn, bổ sung mục lục, sửa tài liệu hướng dẫn
- **Làm dự án nhỏ**: dựng một trang, sửa cấu hình, bổ sung mẫu
- **Tìm và sửa vấn đề**: giúp định vị chỗ lỗi, bước tiếp theo nên xem gì
- **Tự động hóa việc lặp lại**: giao quy trình cố định cho nó chạy thử trước

Người biết viết mã có thể đưa nó vào quy trình phát triển; người không viết mã cũng có thể coi nó như trợ lý biết thực thi các bước.

## Làm được gì

- **Hiểu**: tóm tắt thông tin trong kho mã, tài liệu, bảng biểu và ảnh chụp
- **Tạo và sửa**: viết bản nháp, sửa mã, tạo trang và cấu hình
- **Thực thi**: chạy lệnh terminal, tìm kiếm và duyệt web trong phạm vi bạn ủy quyền
- **Cộng tác**: tiếp tục tác vụ giữa các lối vào App, CLI, IDE, Cloud
- **Mở rộng**: kết nối quy trình lặp lại và hệ thống ngoài qua Skills, Plugins, MCP, Hooks… (các chương nâng cao sẽ bổ sung sau)

## Không làm được gì (quan trọng)

- Không thay thế trách nhiệm cuối cùng của bạn về sự thật, an toàn và quyết định nghiệp vụ
- Không đảm bảo lần tạo đầu đã hoàn toàn đúng; kết quả phải kiểm tra được
- Không được vượt Sandbox, mạng hay chính sách tổ chức khi chưa được ủy quyền
- Không nên coi như «pipeline phát hành tự động không cần nghiệm thu»

## Phán đoán cơ bản khi dùng

Cứ coi Codex là trợ lý; đừng giao luôn trách nhiệm đi cùng.

Có thể để nó làm trước, tìm trước, sửa trước — cuối cùng vẫn phải tự xác nhận:

- Nó có sửa đúng chỗ không
- Nó có hiểu sai mục tiêu của bạn không
- Sự thật nó đưa ra có đáng tin không
- Thay đổi nó làm có gây tác dụng phụ không

## Quy trình thường gặp

Quy trình phổ biến thường như sau:

1. Bạn nêu một mục tiêu
2. Nó trả lời hoặc đưa kế hoạch trước
3. Nếu cần sửa tệp hoặc chạy lệnh, có thể yêu cầu phê duyệt của bạn
4. Xong việc, nó cho bạn biết đã thay đổi gì
5. Bạn kiểm tra kết quả có đúng kỳ vọng không

Ví dụ đầy đủ của quy trình này xem tại [Chạy tác vụ đầu tiên](/guide/getting-started/run-your-first-task/).

## Các lối vào chính

| Lối vào | Phù hợp |
|---|---|
| Desktop App | Mặc định cho người mới; dự án, tác vụ, rà soát Diff trực quan |
| CLI | Người dùng terminal, script và tự động hóa |
| Phần mở rộng IDE | Làm việc trong trình soạn thảo với tệp đang mở và vùng chọn |
| Web / Cloud | Kết nối kho mã, môi trường đám mây và tác vụ dài |
| Di động và từ xa | Giám sát, phê duyệt và theo dõi nhẹ |

Bảng đối chiếu xem [So sánh tính năng](/guide/reference/feature-comparison/). Quan hệ khái niệm xem [Bản đồ năng lực](/guide/start-here/).

## Xem tiếp

Nếu chỉ muốn nhớ ba điểm trước, ghi các câu sau:

1. Codex không chỉ chat — sau khi được ủy quyền nó còn thực thi hành động
2. Tác vụ cần nói rõ mục tiêu, ranh giới và «thế nào là xong»
3. Mọi kết quả đều phải kiểm tra, đừng tin mù quáng

Các trang liên quan có thể xem tiếp:

1. [Chọn client Codex](/guide/choose-your-client/)
2. [Thuật ngữ cho người mới](/guide/start-here/terminology-for-beginners/)
3. [Chạy tác vụ đầu tiên](/guide/getting-started/run-your-first-task/)


---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Trang này chỉ giải thích định vị cơ bản của Codex, tác vụ phù hợp và cách cộng tác; liên kết nội bộ và cách diễn đạt khái niệm đã được rà lại, và nội dung không giữ giá trị mặc định sản phẩm chi tiết, dễ thay đổi.  
**Kiểm chứng gần nhất:** 2026-07-26
