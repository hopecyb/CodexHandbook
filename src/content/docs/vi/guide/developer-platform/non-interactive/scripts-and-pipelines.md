---
title: Script và pipeline
description: "Điều phối `codex exec` trong shell, Makefile và GitHub Actions — lặp lại được, kiểm toán được."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ở đây nói về cách biến Codex từ thao tác tạm thời thành bước tự động hóa mà **đội có thể chạy lại, khi lỗi thì lần ra được, người khác cũng tiếp quản được**.

Nói ngắn: script cố định quy trình; pipeline lặp lại theo quy tắc.

Chương này giải thích cách nhúng [codex exec](/guide/developer-platform/non-interactive/codex-exec/) vào shell, Makefile hoặc pipeline CI.

## Nội dung trang này

- Phân công giữa script local và CI job
- Cách quản lý Prompt và khóa bí mật
- Kết hợp với [Tự động hóa review mã](/guide/developer-platform/ci-cd/code-review-automation/)

## Ở đây giải quyết gì

«Script và pipeline» chủ yếu biến «hôm nay tôi làm tay một lần» thành «đội sau này đều làm lại ổn định theo cùng cách».

Vì vậy ở đây coi trọng ba việc:

- Lặp lại được
- Kiểm toán được
- Bàn giao được

## Vì sao nhiều đội không «dán Prompt thẳng vào trang CI»

Vì khó bảo trì:

- Người khác tiếp quản không biết lúc đầu thiết kế thế nào
- Đổi một chỗ logic không đi được code review bình thường
- Tác vụ fail khó biết Prompt đổi, môi trường đổi, hay script đổi

Đưa Prompt, script và quy tắc vào Git chính là «quản lý phiên bản» cho quy trình tự động.

## Hiểu nhầm thường gặp

### Tự động hóa coi trọng ổn định, không phải càng sớm càng tốt

Nhiều người lần đầu tự động hóa vội nối cả bộ quy trình.

Nhưng nếu Prompt còn đổi thường xuyên, tiêu chí thành công chưa rõ, ranh giới quyền chưa siết, càng sớm tự động hóa càng khó lần lỗi sau này.

### Script phù hợp hơn để cố định cách làm

Một script tốt biến bước dựa vào trí nhớ người thành tệp ai cũng đọc được và review được.

## Đoạn Shell tối thiểu dùng được

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cwd "$ROOT" "$(cat "$PROMPT_FILE")"
```

Đưa `prompts/ci/security-review.md` vào Git; thay đổi đi review.

## Thói quen đáng nuôi trước nhất

Lần đầu tự động hóa, đừng theo đuổi «toàn diện»; hãy cố định ba thứ dưới đây trước:

1. Tệp Prompt đặt ở đâu
2. Script lối vào tên gì
3. Thành công và thất bại phán thế nào

Sau đó thêm log, schema, thông báo sẽ thuận hơn nhiều.

## Minh họa GitHub Actions

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install Codex CLI
        run: |
          # Ghim số phiên bản; lấy theo tài liệu cài đặt chính thức
          npm install -g @openai/codex@<pinned-version>
      - name: Run review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec --cwd . "$(cat prompts/ci/pr-review.md)"
```

:::caution
Cách cài và phạm vi quyền trong ví dụ phải chỉnh theo yêu cầu bảo mật tổ chức; **không** `echo` khóa bí mật trong workflow.
:::

## Quy trình khuyến nghị

| Tầng | Nội dung |
|---|---|
| Repo | `prompts/`, `tools/run-codex.sh` |
| CI | Checkout chỉ đọc, CLI ghim phiên bản, upload log artifact |
| Callback | Tùy chọn [Webhook](/guide/developer-platform/webhooks/overview/) cập nhật hệ thống nội bộ |

## Cách phán đoán

Nếu việc nào thỏa hai điều sau, rất phù hợp vào script hoặc pipeline:

- Bạn sẽ làm lại nhiều lần
- Bạn muốn mỗi lần làm càng thống nhất càng tốt

Ví dụ: review PR, tóm tắt thay đổi, quét bảo mật, kiểm tra tài liệu.

Đừng vội «toàn tự động» khi quy trình chưa ổn; cố định cách làm thành script rồi mới nối pipeline thường ổn định hơn.

## Lỗi thường gặp

- Nối động Prompt `${{ github.event.pull_request.body }}` chưa escape (injection)
- Cùng PR không kiểm soát đồng thời, chạy trùng tốn quota
- Local chạy được, CI thiếu dependency (chưa `npm ci`)
- Tiêu chí thành công chỉ là «chạy xong», không parse kết luận có cấu trúc
- Tự động hóa ngay từ đầu trao quyền ghi quá cao

## Ranh giới bảo mật

- Token CI quyền tối thiểu; cấm `git push` trừ khi có job Phê duyệt độc lập
- Workflow trên fork PR thận trọng với khóa (dùng `pull_request_target` cần đánh giá bảo mật)

## Checklist nghiệm thu

- [ ] Prompt và script có phiên bản trong Git
- [ ] CI fail sẽ chặn merge (nếu chính sách yêu cầu)
- [ ] Chính sách giữ artifact phù hợp tuân thủ
- [ ] Hành vi thống nhất với `make review` local

## Nguồn tham chiếu

- Tài liệu tích hợp OpenAI Codex + GitHub
- Chương tự động hóa tại codex.bozhouai.com

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI  
**Ghi chú đối chiếu:** Nguyên tắc «đưa Prompt, script và pipeline vào Git để review» vẫn đứng vững, nhưng ví dụ phụ thuộc `codex exec`, cách cài CLI và cách nối GitHub Actions cụ thể — đều là chi tiết triển khai biến động cao; bổ sung tài liệu pipeline chính thức hiện hành rồi mới khôi phục `verified`.  
**Kiểm chứng gần nhất:** 2026-07-26
