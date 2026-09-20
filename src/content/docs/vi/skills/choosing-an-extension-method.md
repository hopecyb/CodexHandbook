---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / ứng dụng máy tính / Codex CLI / IDE (phạm vi hỗ trợ tùy theo cơ chế)"
  basis: "Đã đối chiếu vai trò, điểm truy cập sản phẩm và giới hạn an toàn với tài liệu chính thức của OpenAI về Skills, Plugins, MCP, Hooks và Scheduled tasks vào ngày 2026-08-25."
  checkedAt: "2026-08-25"
title: Cách chọn phương thức mở rộng
description: Chọn câu lệnh, AGENTS.md, Skill, MCP, Hook, Plugin hoặc Scheduled task dựa trên thứ bạn muốn duy trì hoặc tự động hóa.
locale: vi
source_locale: zh-CN
source_revision: 28ae6f5
translation_status: draft
translated_at: 2026-09-20
---

Khi có nhiều cơ chế mở rộng, sai lầm thường gặp nhất là chọn tên công nghệ trước, rồi mới tìm vấn đề để áp dụng. Thứ tự vững chắc hơn là hỏi trước: **Rốt cuộc tôi muốn giữ lại điều gì, hoặc muốn điều gì tự động xảy ra?**

Những tên gọi dễ bị nhầm lẫn với nhau nhất là:

- Câu lệnh
- AGENTS.md
- Skill
- MCP
- Plugin
- Scheduled task

Cùng là “mở rộng Codex”, đôi khi một câu lệnh là đủ; chỉ trong một số trường hợp mới cần đến cơ chế phức tạp hơn.

## Sơ đồ lựa chọn

![Sơ đồ chọn phương thức mở rộng Codex](/diagrams/extension-selection-map-vi.svg)

Đây không phải cây quyết định với các lựa chọn loại trừ lẫn nhau. Một quy trình đã hoàn thiện có thể dùng đồng thời `AGENTS.md`, Skill và MCP. Sơ đồ giúp tránh giao cho một cơ chế trách nhiệm mà nó không phù hợp.

## Bảy câu hỏi để quyết định

### 1. Chỉ ảnh hưởng đến tác vụ hiện tại?

Hãy dùng câu lệnh trước. Nêu rõ mục tiêu, đầu vào, phạm vi, tiêu chí nghiệm thu và quyền hạn. Cách này ít tốn công nhất và cũng dễ quan sát vấn đề thực tế nhất.

### 2. Có phải tuân thủ mỗi lần làm việc trong kho lưu trữ này?

Hãy ghi vào `AGENTS.md`, chẳng hạn lệnh kiểm thử, phong cách mã, thư mục không được sửa và quy tắc cài phụ thuộc. Đừng đưa yêu cầu dùng một lần vào quy tắc dự án lâu dài.

### 3. Một loại tác vụ có các bước và đầu ra ổn định?

Hãy tạo Skill. Skill phù hợp để lưu hướng dẫn có thể tái sử dụng, kèm mẫu, tài liệu tham khảo, tài nguyên hoặc tập lệnh hỗ trợ khi cần. Nếu chưa có tiêu chí thành công cố định, hãy tiếp tục thử nghiệm bằng câu lệnh trước.

### 4. Cần dữ liệu hoặc thao tác ngoài kho lưu trữ?

Hãy cân nhắc MCP hoặc Connector. Trước tiên liệt kê đúng những công cụ và dữ liệu cần dùng; ưu tiên quyền chỉ đọc, phạm vi tối thiểu và cấu hình có thể kiểm tra. Nếu tệp cục bộ hoặc lệnh hiện có giải quyết được việc đó thì không cần thêm kết nối bên ngoài.

### 5. Cần kiểm tra tại một thời điểm cố định trong vòng đời thực hiện?

Hãy dùng Hook. Ví dụ: kiểm tra lệnh nguy hiểm trước khi gọi công cụ, quét bản vá sau khi ghi tệp, hoặc ghi tóm tắt khi kết thúc phiên. Hook chạy tự động, vì vậy phải kiểm thử hành vi khi quá thời gian, khi thất bại và khi báo nhầm.

### 6. Cần phân phối đồng bộ một nhóm khả năng cho người khác?

Hãy cân nhắc Plugin. Plugin là lớp tập hợp và phân phối, có thể chứa Skills, connector, MCP, Hooks và mẫu Scheduled task. Cài Plugin không đồng nghĩa với việc tự động tin cậy các kết nối, tập lệnh hoặc Hook bên trong.

### 7. Tác vụ đã chạy ổn định bằng tay và cần lặp lại theo thời gian?

Lúc đó hãy tạo Scheduled task. Trước tiên kiểm chứng câu lệnh, Skill, quyền hạn và định dạng kết quả trong một tác vụ thông thường. Sau khi lên lịch, hãy kiểm tra vài lần chạy đầu tiên và giữ bước duyệt của con người trước khi xuất bản hoặc hợp nhất.

## Đối chiếu theo tình huống

| Tình huống | Cách kết hợp đề xuất |
|---|---|
| Thống nhất quy tắc kiểm thử và commit | AGENTS.md |
| Danh sách kiểm tra trước mỗi lần hợp nhất | Skill `pr-review` |
| Lấy ngữ cảnh ticket từ Linear | MCP + câu lệnh cho tác vụ |
| Báo cáo phụ thuộc hằng tuần | Scheduled task → mở issue nháp |
| Quét khóa bí mật trong bản vá sau khi ghi tệp | Hook hoặc CI; dùng cả hai trong tình huống rủi ro cao |
| Cài đồng bộ quy trình xem xét và công cụ GitHub cho cả nhóm | Plugin (xem xét quyền hạn và Hooks trước khi cài) |
| Tạo báo cáo rủi ro phụ thuộc hằng tuần | Skill đã kiểm chứng + Scheduled task + xem xét thủ công |
| Xem xét song song về bảo mật, kiểm thử và khả năng bảo trì | Nhiều Agent con chỉ đọc; Agent chính tổng hợp |

## Các chiều chi phí

| Cơ chế | Công viết ban đầu | Công bảo trì | Rủi ro bảo mật |
|---|---|---|---|
| Câu lệnh | Thấp | Thấp | Thấp |
| AGENTS.md | Trung bình | Trung bình | Thấp |
| Skill | Trung bình | Trung bình | Thấp–trung bình |
| MCP | Cao | Cao | Trung bình–cao |
| Hook | Trung bình | Trung bình–cao | Trung bình–cao |
| Plugin | Thấp (cài đặt) / cao (tự xây dựng) | Trung bình–cao | Trung bình–cao |
| Scheduled task | Trung bình | Cao | Cao |

## Những cách làm nên tránh

- **Phình to Skills:** Cài hàng chục Skill có phần mô tả chồng lấn, khiến chúng tranh nhau được chọn
- **Dùng MCP cho mọi việc:** Ép kết nối API vào việc vốn có thể giải quyết bằng `git`
- **Lên lịch thiếu tiêu chí nghiệm thu:** Tự động sửa mã theo lịch nhưng không có điều kiện dừng, bằng chứng chạy và xem xét thủ công
- **Làm lại thứ đã có:** Tự xây MCP dù đã có Connector chính thức
- **Đặt quy tắc sai chỗ:** Ghi yêu cầu dùng một lần vào `AGENTS.md`, khiến các tác vụ sau vẫn phải mang ràng buộc cũ
- **Hook quá tải:** Nhét quy trình nghiệp vụ tốn thời gian vào mọi lần gọi công cụ, làm chậm công việc thường ngày hoặc chặn nhầm

## Câu hỏi thường gặp

### 1. Tôi có nên cài Plugin và kết nối MCP ngay từ đầu?

Nhiều vấn đề đã giải quyết được bằng cách dùng tốt câu lệnh, kiểm soát phạm vi và `AGENTS.md`.

### 2. Tác vụ cần lặp lại bao nhiêu lần mới đáng tạo Skill?

Không có con số cố định. Số lần lặp lại chỉ là một dấu hiệu; điều quan trọng hơn là các bước đã ổn định chưa, tiêu chí thành công có rõ không và chi phí thất bại có đáng để kiểm tra tự động không.

### 3. Lần đầu sử dụng, tôi thường nên bắt đầu từ loại nào?

Phần lớn trường hợp sẽ bắt đầu với ba loại sau:

- Câu lệnh
- `AGENTS.md`
- Skill

Thông thường chưa cần đến MCP hoặc tự động hóa không có người giám sát ngay từ đầu.

Điều cốt yếu không phải cơ chế tiên tiến đến đâu, mà là trách nhiệm có phù hợp không, quyền hạn có được giới hạn tối thiểu không và kết quả có thể kiểm chứng không.

## Bài thực hành tối giản

Lấy việc “xem xét diff hiện tại trước khi hợp nhất” làm ví dụ:

1. Trước tiên chạy cùng một câu lệnh hai lần, ghi lại những mục kiểm tra phải nhắc lại mỗi lần.
2. Ghi các lệnh cố định của kho lưu trữ vào `AGENTS.md`, chẳng hạn `pnpm test` và quy định không sửa thư mục được tạo tự động.
3. Ghi các bước xem xét, mức độ nghiêm trọng và định dạng đầu ra vào Skill `pr-review`.
4. Chỉ thêm MCP/Connector khi cần bình luận trên GitHub PR hoặc xem trạng thái CI.
5. Chỉ thêm Hook hoặc Scheduled task khi cần kiểm tra tự động tại một sự kiện cố định.
6. Khi nhiều nhóm đều cần cài đặt, hãy đóng gói các khả năng đó thành Plugin.

Mỗi khi thêm một lớp, hãy trả lời lại ba câu hỏi: đã thêm quyền hạn nào, kiểm chứng bằng cách nào và tắt hoặc hoàn tác ra sao.

## Đọc thêm

- [Bản đồ các khả năng mở rộng](/vi/skills/capability-map/)
- [Mẫu phê duyệt của con người](/vi/cases/workflows/human-approval-patterns/)
- [Chuyển quy trình thành Skill](/vi/cases/workflows/turn-a-workflow-into-a-skill/) (trang lộ trình)

## Nguồn chính thức

- [Skills và Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Xây dựng Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)

---

**Trạng thái:** verified

**Áp dụng cho:** ChatGPT Web / ứng dụng máy tính / Codex CLI / IDE (phạm vi hỗ trợ tùy theo cơ chế)

**Căn cứ kiểm chứng:** Đã đối chiếu vai trò, điểm truy cập sản phẩm và giới hạn an toàn với tài liệu chính thức của OpenAI về Skills, Plugins, MCP, Hooks và Scheduled tasks vào ngày 2026-08-25.

**Kiểm chứng gần nhất:** 2026-08-25
