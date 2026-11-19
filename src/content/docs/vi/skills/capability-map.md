---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / ứng dụng máy tính / Codex CLI / IDE (xem phạm vi hỗ trợ của từng cơ chế trong nội dung)"
  basis: "Mô hình trách nhiệm và ranh giới sử dụng đã được xây dựng lại theo tài liệu chính thức của OpenAI về Skills, Plugins, MCP, Hooks, Scheduled tasks và Subagents có thể truy cập ngày 2026-08-25."
  checkedAt: "2026-08-25"
title: Bản đồ các khả năng mở rộng
description: "Hiểu hệ thống mở rộng của Codex qua tám vai trò: tác vụ, quy tắc, quy trình, công cụ, bảo vệ, phân phối, kích hoạt và làm việc song song."
locale: vi
source_locale: zh-CN
source_revision: '32771c6'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Các cơ chế mở rộng dễ gây nhầm lẫn vì chúng thường xuất hiện trong cùng một quy trình, nhưng mỗi cơ chế giải quyết một loại vấn đề khác nhau.

Trang này bắt đầu bằng một sơ đồ tổng thể: lời nhắc và `AGENTS.md` cung cấp tác vụ cùng quy tắc; Skill cung cấp quy trình có thể tái sử dụng; MCP cung cấp công cụ bên ngoài; Hook kiểm soát những thời điểm trong vòng đời thực hiện; Plugin tập hợp và phân phối các khả năng; Scheduled task kích hoạt công việc theo thời gian. Chúng có thể kết hợp với nhau và không có một “thứ tự nâng cấp” cố định.

## Kiến trúc hệ thống

![Kiến trúc hệ thống làm việc có thể tái sử dụng của Codex](/illustrations/arch-work-system.webp)

Khi đọc sơ đồ, hãy chú ý ba điểm:

- **Đầu vào của tác vụ** xác định việc cần làm trong lần này; quy tắc dự án xác định những điều phải tuân thủ trong mọi lần.
- **Khả năng thực thi** có thể mở rộng phạm vi công việc, nhưng không tự chứng minh kết quả là đúng. MCP, Agent con và tập lệnh đều phải tuân theo giới hạn quyền hạn và tiêu chí nghiệm thu.
- **Phân phối và kích hoạt** không phải bản thân quy trình làm việc. Plugin tập hợp các khả năng; Scheduled task bắt đầu một lần chạy vào thời điểm đã định.

## Tám nhóm trách nhiệm

| Trách nhiệm | Cơ chế | Phù hợp nhất để giải quyết | Không chịu trách nhiệm về |
|---|---|---|---|
| Tác vụ hiện tại | Lời nhắc | Việc cần làm lần này, phạm vi và tiêu chí nghiệm thu | Quy tắc dự án lâu dài |
| Quy tắc bền vững | `AGENTS.md` | Lệnh của kho lưu trữ, quy ước, giới hạn thư mục | Toàn bộ các bước của một loại tác vụ |
| Quy trình tái sử dụng | Skill | Các bước ổn định, tài liệu tham khảo, mẫu và tập lệnh hỗ trợ | Tự tạo quyền truy cập vào hệ thống bên ngoài |
| Công cụ bên ngoài | MCP / Connector | Cho Codex dùng dữ liệu và thao tác ngoài kho lưu trữ | Quyết định mục tiêu nghiệp vụ có đúng hay không |
| Bảo vệ theo vòng đời | Hook | Ghi nhận, kiểm tra, bổ sung ngữ cảnh hoặc chặn trước và sau một phiên hay lời gọi công cụ | Thay thế kiểm thử và xem xét thủ công |
| Tập hợp và phân phối | Plugin | Đóng gói Skills, connector, MCP, Hooks và mẫu tác vụ | Tự động khiến mọi khả năng trở nên đáng tin cậy |
| Kích hoạt theo thời gian | Scheduled task | Chạy tác vụ đã kiểm chứng theo lịch hoặc định kỳ | Thay thế lời nhắc rõ ràng và điều kiện dừng |
| Phân công song song | Agent con | Giao các việc khảo sát, kiểm thử hoặc xem xét độc lập cho bên khác | Tự loại bỏ xung đột ghi tệp và chi phí điều phối |

## Kết hợp các khả năng trong một tác vụ

Giả sử một nhóm kiểm tra rủi ro từ các gói phụ thuộc hằng tuần:

1. `AGENTS.md` quy định trình quản lý gói được phép dùng, lệnh kiểm thử và những thư mục không được sửa.
2. Skill `dependency-audit` cố định các bước thu thập thông tin phụ thuộc, đối chiếu cảnh báo, phân loại mức độ và kiểm chứng.
3. MCP của GitHub hoặc nguồn gói cung cấp thông tin bên ngoài; ưu tiên quyền chỉ đọc.
4. Hook có thể chặn đầu ra chứa khóa bí mật thật hoặc ghi lại những lần gọi công cụ bên ngoài.
5. Plugin phân phối Skill, cấu hình MCP và Hook cho cả nhóm.
6. Scheduled task kích hoạt mỗi tuần một lần và chỉ tạo báo cáo hoặc issue nháp; con người xem xét trước khi xuất bản.

Thiếu một tầng không có nghĩa là giải pháp “kém tiên tiến”. Nếu chỉ kiểm tra gói phụ thuộc trên máy một lần, một lời nhắc rõ ràng cùng các lệnh terminal sẵn có có thể đã đủ.

## Cách chọn thường gặp

| Nhu cầu | Lựa chọn đề xuất |
|---|---|
| Thống nhất phong cách mã và lệnh kiểm thử | AGENTS.md |
| Chuẩn hóa quy trình xem xét PR | Skill |
| Đọc issue trên Jira/Linear | MCP |
| Cài một bộ tích hợp cho cả nhóm | Plugin |
| Quét khóa bí mật trước mỗi lần commit | Hooks |
| Tự động tạo bản nháp báo cáo tuần vào thứ Hai | Automations (và con người xuất bản) |

## Từ một lần thành công đến tài sản dùng chung của nhóm

Bạn có thể dùng tiến trình sau để quyết định có nên tiếp tục chuẩn hóa cách làm hay không:

| Giai đoạn | Hình thức | Khi nào phù hợp |
|---|---|---|
| Lời nhắc dùng một lần | Mô tả tác vụ trong cuộc trò chuyện hiện tại | Chỉ làm một lần hoặc vẫn đang tìm hiểu vấn đề |
| Mẫu | Khung cố định gồm “mục tiêu, ngữ cảnh, ràng buộc, nghiệm thu” | Loại tác vụ sẽ lặp lại nhưng các bước vẫn đang điều chỉnh |
| Skill | `SKILL.md` kèm mẫu, tài liệu tham khảo hoặc tập lệnh | Quy trình đã ổn định và tiêu chí thành công rõ ràng |
| Plugin | Gói kết hợp Skills, connector, MCP, Hooks và mẫu | Cần thống nhất việc cài đặt, cập nhật và quản trị |
| Scheduled task | Tác vụ đã lưu, quy tắc thời gian và lịch sử chạy | Đã kiểm chứng thủ công và đáng để chạy định kỳ |

MCP, Hook và Agent con không phải các bước bắt buộc trên tiến trình này. Chỉ thêm chúng khi tác vụ thật sự cần công cụ bên ngoài, cơ chế bảo vệ theo vòng đời hoặc phân công song song.

Để xem các nhánh quyết định chi tiết, hãy đọc [Cách chọn phương thức mở rộng](/vi/skills/choosing-an-extension-method/).

## Giới hạn của sản phẩm hiện tại

- Một Codex Skill được định nghĩa bằng thư mục chứa `SKILL.md`, có thể kèm tập lệnh, tài liệu tham khảo và tài nguyên; Codex tải nội dung hướng dẫn đầy đủ khi cần.
- Ứng dụng máy tính, Codex CLI và tiện ích IDE dùng chung cấu hình MCP khi chạy trên cùng một Codex host.
- Plugins hiện dùng được trên các điểm truy cập ChatGPT được hỗ trợ, ứng dụng Codex cho máy tính và Codex CLI; tiện ích IDE không hỗ trợ duyệt hoặc dùng Plugin.
- Scheduled task được tạo và quản lý trên ChatGPT Web hoặc ứng dụng máy tính. CLI và IDE có thể hỗ trợ kiểm thử lời nhắc, Skill hoặc tập lệnh trước, nhưng không có giao diện quản lý Scheduled task.
- Agent con phù hợp với việc khảo sát chỉ đọc, kiểm thử và xem xét độc lập; nhiều Agent cùng ghi vào một nhóm tệp sẽ làm tăng chi phí xử lý xung đột.

Các điểm truy cập sản phẩm vẫn có thể thay đổi. Trước khi cấu hình cụ thể, hãy xem [bảng đối chiếu tính năng](/vi/guide/reference/feature-comparison/) và các nguồn chính thức bên dưới.

## Nguồn chính thức

- [Skills và Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Xây dựng Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Codex Agent con](https://learn.chatgpt.com/docs/agent-configuration/subagents)
