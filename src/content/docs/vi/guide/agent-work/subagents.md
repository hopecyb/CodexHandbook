---
legacyVerification: {"status": "verified", "products": "App / CLI / IDE", "basis": "Đã đối chiếu với tài liệu chính thức hiện tại về Agent con của Codex. Trang này nêu rõ việc tách biệt ngữ cảnh, kế thừa quyền, nơi xem hoạt động, chi phí token và xung đột khi ghi song song; Agent chính vẫn chịu trách nhiệm tổng hợp và kiểm chứng cuối cùng.", "checkedAt": "2026-08-26"}
title: Agent con
description: Giao các tác vụ con có ranh giới rõ ràng cho ngữ cảnh độc lập, để Agent chính tổng hợp bằng chứng, xử lý xung đột và nghiệm thu.
locale: vi
source_locale: zh-CN
source_revision: "a3f2be5"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 30
---

**Agent con (Subagent)** là đơn vị làm việc độc lập do Agent chính khởi chạy để xử lý một vấn đề con cụ thể. Mỗi Agent con có ngữ cảnh riêng và gửi lại kết luận cùng bằng chứng cho luồng chính khi hoàn thành. Agent chính vẫn chịu trách nhiệm về các quyết định tổng thể và nghiệm thu cuối cùng.

![Kiến trúc điều phối Agent con trong Codex: Agent chính phân công tác vụ con có ranh giới rõ ràng, Agent con trả về bằng chứng, Agent chính tổng hợp và kiểm tra](/diagrams/subagent-orchestration-vi.svg)

## Trước hết, hiểu ba lớp quan hệ

| Lớp | Có tách biệt không? | Ý nghĩa |
|---|---|---|
| Ngữ cảnh hội thoại | Có | Mỗi Agent con tập trung vào tác vụ riêng, không cần mang theo mọi chi tiết của luồng chính |
| Sandbox và chế độ quyền | Kế thừa | Chạy độc lập không giúp Agent con có quyền cao hơn |
| Tệp trong không gian làm việc | Không nhất thiết | Nhiều Agent có thể nhìn thấy cùng một không gian làm việc; ghi đồng thời vào cùng một tệp sẽ gây xung đột |

Điều quan trọng nhất là: **tách biệt ngữ cảnh không đồng nghĩa với tách biệt tệp.** Nếu muốn sửa mã song song, trước tiên hãy phân quyền sở hữu theo thư mục, thành phần hoặc worktree.

## Hiện có thể dùng ở đâu

Các phiên bản Codex hiện tại cung cấp Agent con theo mặc định. Bạn có thể xem hoạt động của chúng trong giao diện tương ứng của ứng dụng máy tính, CLI và IDE. Chi tiết giao diện có thể thay đổi, nhưng cách dùng ổn định là yêu cầu Codex giao rõ các tác vụ con độc lập, còn luồng chính chịu trách nhiệm tổng hợp.

Trong CLI, có thể dùng `/agent` để xem hoặc chuyển luồng; IDE hiển thị Agent chạy nền trong các giao diện được hỗ trợ; ứng dụng máy tính hiển thị hoạt động của các luồng trong tác vụ. Việc có thấy một điều khiển cụ thể hay không phụ thuộc vào phiên bản ứng dụng và khả năng của tài khoản hiện tại.

## Khi nào nên chia việc

Nếu tác vụ con đáp ứng hai trong ba điều kiện sau, hãy cân nhắc tách ra:

1. Có thể mô tả độc lập, không cần thường xuyên đồng bộ chi tiết với luồng chính.
2. Có đầu ra rõ ràng, chẳng hạn danh sách tệp, kết quả kiểm thử hoặc kết luận dài một trang.
3. Có thể làm song song với tác vụ khác, hoặc việc đào sâu riêng giúp giảm đáng kể nhiễu trong luồng chính.

### Công việc phù hợp để làm song song

- Rà soát chỉ đọc riêng phần frontend, backend và phạm vi kiểm thử.
- Điều tra đồng thời nhiều bài kiểm thử lỗi không phụ thuộc nhau.
- Thu thập bằng chứng riêng cho hai phương án kỹ thuật.
- Giao vai trò chuyên trách rà soát bảo mật, phân tích hiệu năng hoặc kiểm tra tài liệu.

### Công việc nên giữ trong luồng chính

- Yêu cầu chưa rõ và cần liên tục trao đổi với người dùng.
- Nhiều bước phải thực hiện theo thứ tự nghiêm ngặt.
- Các thay đổi tập trung nhiều vào cùng một tệp hoặc đoạn mã.
- Tác vụ con không có tiêu chí hoàn thành rõ ràng, chỉ là “xem thử”.

Agent con làm tăng lượng token tiêu thụ và công sức tổng hợp. Với tác vụ nhỏ có thể hoàn thành trong một luồng rõ ràng, không cần chia việc chỉ để chạy song song.

## Trách nhiệm của Agent chính vẫn còn nguyên

Agent chính luôn phải giữ bốn trách nhiệm:

- Mục tiêu tổng thể, các ràng buộc của người dùng và quyết định cuối cùng.
- Ranh giới tác vụ con và quyền sở hữu tệp.
- Lựa chọn khi kết luận của nhiều Agent mâu thuẫn.
- Kiểm thử, build và giải thích rủi ro sau khi hợp nhất.

Agent con báo “hoàn thành” chỉ là tín hiệu cho tác vụ con đó, không phải bằng chứng toàn bộ công việc đã xong.

## Viết thỏa thuận giao việc có thể nghiệm thu

Đây là một tác vụ điều tra chỉ đọc:

```text
Hãy khởi chạy một Agent con để phân tích chỉ đọc logic làm mới session trong packages/auth.

Phạm vi: packages/auth và các bài kiểm thử tương ứng; không sửa tệp.
Câu hỏi: sau khi làm mới thất bại, token cũ có còn khả năng được tái sử dụng không?
Đầu ra: kết luận, tệp và số dòng quan trọng, đường đi tái hiện được, bài kiểm thử đề xuất.
Kiểm chứng: mọi kết luận đều phải đối chiếu được với mã nguồn hoặc bài kiểm thử hiện có.
Phản hồi: không quá 500 chữ; luồng chính quyết định có sửa hay không.
```

Yêu cầu này nêu rõ sáu điều: phụ trách việc gì, xem ở đâu, trả lời câu hỏi nào, không được làm gì, kiểm chứng ra sao và ai ra quyết định.

## Ví dụ làm song song theo ba hướng

Giả sử chức năng đăng nhập thỉnh thoảng bị lỗi hồi quy, Agent chính có thể chia như sau:

| Tác vụ con | Quyền và phạm vi | Đầu ra |
|---|---|---|
| A: đường đi mã nguồn | Chỉ đọc `src/auth/` | Chuỗi lời gọi từ điểm vào đến nhánh gây lỗi |
| B: bằng chứng kiểm thử | Chỉ đọc bài kiểm thử và log | Bài kiểm thử tối thiểu tái hiện ổn định |
| C: thay đổi gần đây | Chỉ đọc lịch sử Git liên quan | Thay đổi có khả năng cao nhất gây lỗi hồi quy và căn cứ |

Khi cả ba trả kết quả, Agent chính nên so sánh bằng chứng trước khi chọn hướng sửa. Đừng để A, B và C cùng sửa `src/auth/session.ts`.

## Cách tách biệt khi cần ghi song song

Ưu tiên giảm xung đột theo thứ tự sau:

1. Chia các tác vụ ghi theo thư mục hoặc thành phần không chồng lấp.
2. Cấp worktree hoặc nhánh riêng cho từng phần triển khai song song.
3. Ghi rõ danh sách tệp mà mỗi Agent được phép sửa.
4. Để Agent chính hợp nhất và chạy lại các bước kiểm tra sau khi hợp nhất.

Ngay cả khi từng tác vụ con đều vượt qua bài kiểm thử riêng, phần kết hợp sau khi hợp nhất vẫn có thể lỗi. Vì vậy, không được bỏ qua bước kiểm tra cuối cùng.

## Danh sách nghiệm thu

- Kết quả trả về có giải đáp câu hỏi ban đầu thay vì mở rộng phạm vi không?
- Có đính kèm vị trí tệp, log hoặc kiểm thử làm bằng chứng có thể đối chiếu không?
- Có tuân thủ giới hạn chỉ đọc, thư mục hoặc lệnh không?
- Các kết quả có mâu thuẫn không và mâu thuẫn đã được xử lý rõ ràng chưa?
- Đã chạy lại đầy đủ kiểm thử và build sau khi hợp nhất chưa?
- Đã nêu các vấn đề chưa giải quyết và rủi ro còn lại chưa?

## Kết hợp với các khả năng khác

- **Skill** chuẩn hóa phương pháp và định dạng đầu ra của tác vụ con, chẳng hạn danh sách kiểm tra khi rà soát mã.
- **MCP** cung cấp công cụ hoặc dữ liệu bên ngoài được kiểm soát cho Agent con.
- **Hook** bổ sung quy tắc bảo vệ khi Agent con bắt đầu, dừng hoặc gọi công cụ.
- **Worktree** tách biệt các thay đổi tệp song song; nó giải quyết xung đột trong không gian làm việc, không phải vấn đề ngữ cảnh.

Đọc tiếp [Phối hợp nhiều Agent](/vi/cases/workflows/multi-agent-coordination/) và [Bàn giao và tiếp tục](/vi/guide/agent-work/handoff-and-resume/).
