---
title: codex exec
description: "Lối vào thực thi chế độ không tương tác — giao một Tác vụ đầy đủ trong script và CI."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nếu `codex` tương tác là vừa trò chuyện vừa làm việc, thì **`codex exec`** gần với việc giao Tác vụ một lần, chạy xong rồi trả kết quả.

Nó là lõi của [chế độ không tương tác](/guide/cli/non-interactive-mode/): không chat qua lại, không vừa làm vừa làm rõ, tiến trình kết thúc là bạn nhận kết quả hoặc trạng thái thất bại. Chương này hướng tới người tích hợp [nền tảng nhà phát triển](/guide/developer-platform/), cũng phù hợp độc giả lần đầu muốn nối Codex vào script hoặc CI.

## Nội dung trang này

- Khác biệt giữa `exec` và `codex` tương tác
- Hình thái lệnh tối thiểu và thư mục làm việc
- Yêu cầu về Phê duyệt và Sandbox khi không có người giám sát

## `exec` đang làm gì

Có thể hiểu `codex exec` như:

- Phát một phiếu công việc một lần
- Chạy xong rồi trả kết quả

Phiếu đó viết rõ rồi thì nó chạy theo mô tả đó; xong, đưa kết quả, rồi kết thúc.

Vì vậy nó phù hợp nhất khi:

- Ranh giới Tác vụ đã cố định
- Không cần làm rõ giữa chừng
- Muốn lặp lại ổn định về sau

## Vì sao nó tồn tại

Bạn sẽ không chat với Codex trong CI, cũng không kỳ vọng nó dừng giữa chừng hỏi bạn mười lần.

Vì vậy tình huống phù hợp của `codex exec` thường là:

- Tự động hóa review mã
- Tác vụ theo lịch
- Script batch
- Bước phân tích hoặc sinh nội dung một lần trong pipeline

Nó phù hợp khi «**ranh giới Tác vụ đã nói rõ**»; nếu vẫn đang khám phá mơ hồ, chế độ tương tác thường phù hợp hơn.

:::note
**Tên lệnh và tham số lấy theo CLI chính thức.** Sau khi nâng cấp, chạy `codex --help` và `codex exec --help` để đối chiếu.
:::

## Cách làm tối thiểu dùng được

```bash
cd /path/to/repo
codex exec --cwd . "Chỉ đọc: so sánh diff nhánh hiện tại với main, liệt kê 3 rủi ro bảo mật cao nhất, không sửa tệp"
```

Nguyên tắc:

- Trong shell script, `cd` trước tới worktree sạch
- Đặt Prompt trong `prompts/` của repo hoặc heredoc, tránh lỗi escape shell
- Trong CI, dùng **mã thoát** để phán thành bại

## Thực tế dễ bỏ qua nhất

Trong chế độ tương tác bạn còn có thể bổ sung «không phải ý đó».  
Trong chế độ `exec`, **lần đầu nói sai thì cả vòng có thể lệch hướng**.

Vì vậy khi viết Prompt `exec`, cần rõ hơn bình thường:

- Phải làm gì
- Không được làm gì
- Định dạng đầu ra là gì
- Thế nào là hoàn thành
- Khi thất bại muốn thoát thế nào

## Hiểu nhầm thường gặp

### `exec` phù hợp Tác vụ cố định hơn

Nhiều người lần đầu hiểu thành «chế độ nâng cao bản CLI».

Hiểu chính xác hơn: nó phù hợp để **lặp lại ổn định**.

### Prompt ngắn không đồng nghĩa Prompt rõ

Trong chế độ tương tác, nói hơi mơ hồ vẫn còn cơ hội bổ sung.

Nhưng trong `exec`, Prompt ngắn nếu bỏ ranh giới, hạn chế và tiêu chí thành công thường không phải thanh lịch hơn, mà dễ mất kiểm soát hơn.

## Quy trình khuyến nghị

```text
Chuẩn bị repo (checkout, install, token chỉ đọc)
    → Ghim phiên bản Prompt (git sha)
    → codex exec
    → Thu stdout / artifact
    → Khác 0 thì fail CI, không thử lại vô hạn
```

Nối với [Script và pipeline](/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## Có thể coi nó là gì

- Một lệnh Tác vụ một lần có thể script hóa
- Phù hợp đặt vào script, CI hoặc cron

Đó cũng là lý do nhiều đội gắn nó sau `make review`, GitHub Actions, cron hoặc nút trên nền tảng nội bộ.

## So với chế độ tương tác

| | `codex` tương tác | `codex exec` |
|---|---|---|
| Làm rõ câu hỏi | Nhiều vòng được | Phải nói rõ một lần |
| Phê duyệt | Có người tại chỗ | Phải thắt chặt chiến lược trước |
| Phù hợp | Học, khám phá | CI, cron |

## Khi chưa chắc thì chọn thế nào

- Vẫn đang mò nhu cầu, có thể đổi ý thường xuyên: ưu tiên chế độ tương tác
- Tác vụ đã thành mẫu cố định, chỉ muốn chạy lặp ổn định: dùng `codex exec`

`codex exec` phù hợp nhất với Tác vụ «đã nói rõ, sau này còn muốn chạy lại»; nếu vẫn vừa nghĩ vừa đổi ý, đừng vội nhét vào quy trình không tương tác.

## Lỗi thường gặp

- Nhét cả lịch sử chat dài vào một lần exec
- CI dùng token ghi và Prompt chứa thân PR chưa khử nhiễm
- Không ghim phiên bản CLI khiến pipeline đột ngột fail
- Bỏ qua mã thoát khác không vẫn đánh green
- Nhét Tác vụ phức tạp cần phán đoán người vào quy trình không giám sát

## Ranh giới bảo mật

- Không giám sát = [Phê duyệt của người](/cases/workflows/human-approval-patterns/) yếu đi, mặc định chỉ đọc
- Xem [Quyền và bảo mật](/guide/developer-platform/ci-cd/code-review-automation/) (tham chiếu chéo cùng chương)

## Checklist nghiệm thu

- [ ] Local và CI dùng cùng tệp Prompt
- [ ] Mã thoát được CI xử lý đúng
- [ ] Log không chứa khóa bí mật và PII
- [ ] Sandbox và quy tắc ngang hoặc chặt hơn lúc phát triển tương tác

## Chương liên quan

- [Chế độ không tương tác CLI](/guide/cli/non-interactive-mode/)
- [Đầu ra có cấu trúc](/guide/developer-platform/non-interactive/structured-output/)
- [Mã thoát và thử lại](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Nguồn tham chiếu

- Tài liệu OpenAI Codex CLI
- Chương chế độ không tương tác KimYx0207
- Hướng dẫn CI stormzhang

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI  
**Ghi chú đối chiếu:** Trang này quanh `codex exec`, `--cwd` và cách tích hợp không tương tác đưa ra hướng hữu ích, nhưng hiện thiếu tài liệu chính thức hiện hành đủ mạnh để xác nhận từng mục về lối vào lệnh, tham số và chi tiết hành vi; trước khi bổ sung căn cứ CLI mới nhất, không nên đánh dấu `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
