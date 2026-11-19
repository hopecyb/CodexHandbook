---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE"
  basis: "Quy tắc nạp Skill của runtime Codex hiện tại (`SKILL.md`, đọc file kỹ năng đầy đủ khi cần) khớp định nghĩa Skill như workflow tái sử dụng trong OpenAI Help “Skills in ChatGPT”; trang này tập trung khái niệm và tổ chức thư mục, không phụ thuộc UI hay đổi."
  checkedAt: "2026-07-26"
title: Tổng quan Skills
description: Dùng SKILL.md để dạy Codex workflow tái sử dụng — viết một lần, gọi khi cần.
locale: vi
source_locale: zh-CN
source_revision: "3147d2c"
translation_status: stale
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---

**Skill** là một thư mục chứa `SKILL.md` (có thể kèm script và tài liệu tham chiếu), đóng gói một quy trình cố định thành năng lực mà Codex có thể **gọi tự động hoặc tường minh**.

Nó phù hợp để chứa những cách làm đã lặp lại và sẽ tiếp tục được tái sử dụng.

![Minh họa: một quy trình thành công được đóng vào hộp công cụ rồi nhân bản giao cho nhiều agent dùng lại](/illustrations/skills-toolkit.webp)

## Khái niệm cốt lõi

### Khác với lệnh slash

| | Lệnh slash | Skill |
|---|---|---|
| Kích hoạt | Bạn gõ `/xxx` | Bạn có thể gọi `$name`, hoặc model khớp theo mô tả |
| ngữ cảnh | Thường mở rộng ngay | **Tiết lộ dần**: lúc thường chỉ chiếm tên + mô tả; chọn rồi mới đọc toàn bộ |
| Phù hợp | Lối vào cố định, tần suất cao, bạn nhớ được | Quy trình dài, cần tài liệu, muốn model tự quyết khi nào dùng |

### Tiết lộ dần

Khi Codex khởi động, nó chỉ thấy **name, description, đường dẫn** của mỗi Skill; chỉ khi quyết định dùng mới tải toàn bộ `SKILL.md`. Vì vậy phần thân có thể viết checklist chi tiết mà không lo chiếm hết ngữ cảnh.

Lưu ý: danh sách Skill có **ngân sách ký tự ban đầu** (một phần nhỏ của ngữ cảnh). Hãy đặt kịch bản kích hoạt cốt lõi của `description` ở **đầu**, tránh bị cắt cụt rồi khớp thất bại.

## Cấu trúc thư mục Skill

```text
my-skill/
├── SKILL.md          # bắt buộc
├── scripts/          # tùy chọn: bước xác định
└── references/       # tùy chọn: tài liệu tham chiếu dài
```

Ví dụ tối thiểu `SKILL.md`:

```md
---
name: pr-review
description: Review diff của nhánh hiện tại so với main, đánh dấu rủi ro và khoảng trống kiểm thử. Dùng khi người dùng yêu cầu review, review PR hoặc kiểm tra trước khi merge.
---

## Các bước
1. Lấy diff so với main
2. Phân loại theo file: lỗi logic, bảo mật, hiệu năng, kiểm thử
3. Xuất danh sách phân cấp: chặn / đề xuất / nit
4. Không tự động push hoặc merge
```

## Vị trí lưu trữ

| Loại | Vị trí điển hình | Ghi chú |
|---|---|---|
| Skill dự án | `.agents/skills/<name>/` | Theo repo, chia sẻ nhóm |
| Skill người dùng | Thư mục skills của người dùng (xem tài liệu chính thức) | Cá nhân, đa dự án |
| Tuyển chọn chính thức | Cài qua installer | Đường dẫn do installer quản lý; đừng lẫn với thư mục tự viết |

**Đừng** copy đường dẫn sai hoặc trường `trigger:` hư cấu từ tutorial cũ; lấy [tài liệu Skills chính thức](https://developers.openai.com/codex/skills) làm chuẩn.

## Cách kích hoạt

1. **Tường minh**: trong môi trường hỗ trợ, gọi bằng `$skill-name` (tên khớp `name` trong frontmatter)
2. **Ngầm**: model dựa trên ngữ nghĩa `description` để quyết định tác vụ hiện tại có phù hợp không

Điểm then chốt khi viết `description`:

- Nói rõ “khi nào dùng” và “khi nào không dùng”
- Gồm từ khóa người dùng có thể nói (review, phát hành, changelog)
- Tránh câu chung chung kiểu “giúp người dùng viết code”

## Workflow khuyến nghị

1. Phát hiện một quy trình đã lặp lại vài lần
2. Soạn `SKILL.md`, trước hết chỉ bước bằng chữ
3. Thử `$name` và khớp ngầm trên tác vụ nhỏ
4. Khi cần tính xác định, bổ sung `scripts/`
5. Commit vào `.agents/skills/` và mở PR cho nhóm

Thực hành: [Tạo Skill đầu tiên](/vi/skills/create-your-first-skill/)

## Thắc mắc thường gặp

### 1. Skill khác Prompt thế nào?

- **Prompt**: lời bạn nói tạm thời cho tác vụ lần này
- **Skill**: bộ quy trình có thể tái dùng cho tác vụ tương tự sau này

### 2. Có phải học viết Skill ngay từ đầu không?

Không. Hãy nói rõ tác vụ thường trước; khi một quy trình lặp rất nhiều lần, mới cân nhắc đóng thành Skill.

### 3. Nó có giống lệnh slash không?

Không hoàn toàn giống. Lệnh slash giống lối tắt; Skill giống gói công việc kèm hướng dẫn và quy trình đầy đủ.

Skill không phải thứ bắt buộc lúc mới bắt đầu — phù hợp hơn để sắp xếp những quy trình đã xuất hiện lặp lại.

## Ranh giới bảo mật

- Script và lời gọi MCP trong Skill kế thừa chính sách phê duyệt hiện tại
- Đừng hard-code khóa trong Skill; dùng biến môi trường hoặc xác thực MCP
- Nhóm nên review Skill bên thứ ba như review dependency

## Lỗi thường gặp

- `description` quá dài hoặc quá chung, dẫn đến không bao giờ kích hoạt hoặc kích hoạt nhầm
- Nhét mười quy trình không liên quan vào một Skill
- Dùng script thay cho bước vốn có thể mô tả rõ bằng chữ, khó bảo trì

## Nguồn tham chiếu
- Tài liệu OpenAI Codex Skills
