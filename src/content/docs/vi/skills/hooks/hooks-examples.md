---
title: Ví dụ cấu hình Hook
description: Khung cấu hình và script Hook có thể chỉnh — quét khóa, nhật ký kiểm toán, kiểm tra định dạng.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Khi xem ví dụ Hook, trước hết xác nhận nó muốn phòng gì, rồi chỉnh thành phiên bản phù hợp môi trường của bạn.

Chương này cung cấp cấu hình và script **minh họa**, tiện nhóm chỉnh lại. Tên trường, đường dẫn lấy [tài liệu chính thức](https://developers.openai.com/codex) và `codex --help` cục bộ làm chuẩn; trước khi copy hãy thử trong repo cách ly.

Đọc trước: [Tổng quan Hooks](/skills/hooks/hooks-overview/) · [Loại sự kiện Hook](/skills/hooks/hook-event-types/)

## Trước khi dùng xác nhận phạm vi

Đừng coi các ví dụ này là"đáp án chuẩn"copy nguyên.  
Hãy xem chúng như ba mẫu:

- Chỉ ghi
- Chặn trước
- Kiểm tra đầu vào nhẹ trước

Xem ý tưởng trước, rồi quyết có mở rộng xuống không.

## Ví dụ 1: sau gọi công cụ ghi nhật ký kiểm toán (chỉ đọc)

**Mục tiêu:** ghi ai khi nào đã ghi những đường dẫn nào; nếu ẩn danh thất bại thì không ghi khóa xuống đĩa.

`hooks.json` (minh họa):

```json
{
  "hooks": [
    {
      "event": "tool.call.after",
      "command": ".codex/hooks/audit-log.sh",
      "timeout_ms": 500
    }
  ]
}
```

`.codex/hooks/audit-log.sh`:

```bash
#!/usr/bin/env bash
# stdin: JSON payload (cấu trúc theo chính thức)
payload=$(cat)
tool=$(echo "$payload" | jq -r '.tool // "unknown"')
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$ts tool=$tool" >> "${CODEX_AUDIT_LOG:-/tmp/codex-audit.log}"
exit 0
```

**Nghiệm thu:** sau một lần ghi file, nhật ký có một dòng; mã thoát script luôn là 0.

Loại ví dụ này chỉ ghi, không đổi hành vi — rủi ro thấp nhất, thường phù hợp làm điểm bắt đầu.

## Ví dụ 2: trước gọi công cụ chặn khóa nghi vấn

**Mục tiêu:** khi diff hoặc nội dung ghi khớp mẫu AWS access key thì `block`.

```json
{
  "hooks": [
    {
      "event": "tool.call.before",
      "command": ".codex/hooks/secret-scan.sh",
      "on_failure": "block",
      "timeout_ms": 300
    }
  ]
}
```

Logic lõi `secret-scan.sh` (minh họa):

```bash
#!/usr/bin/env bash
payload=$(cat)
text=$(echo "$payload" | jq -r '.arguments // empty' 2>/dev/null)
if echo "$text" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  echo "Blocked: possible AWS access key in tool arguments" >&2
  exit 1
fi
exit 0
```

**Nghiệm thu:** chuỗi thử chứa `AKIA` bị chặn; `git status` bình thường thì qua.

:::caution
Quét bằng regex có báo giả/sót — chỉ là lớp bổ sung; khóa thật nên đi secret scanner và pre-commit, xem [Ngữ cảnh nhạy cảm](/guide/context/sensitive-context/).
:::

Loại ví dụ này thường dùng sau khi bạn đã chắc muốn chặn hành động thật. Bắt đầu thẳng từ Hook kiểu block thì chi phí điều tra cao hơn nhiều.

## Ví dụ 3: chiến lược độ dài và từ khóa khi gửi Prompt

**Mục tiêu:** từ chối cụm rõ ràng định ghi đè hướng dẫn hệ thống (ví dụ đơn giản hóa).

```bash
#!/usr/bin/env bash
prompt=$(cat | jq -r '.prompt // empty')
if [ "${#prompt}" -gt 50000 ]; then
  echo "Prompt too long" >&2
  exit 1
fi
if echo "$prompt" | grep -qi 'ignore previous instructions'; then
  echo "Blocked: possible injection pattern" >&2
  exit 1
fi
exit 0
```

**Nghiệm thu:** quá dài và khớp mẫu thì thất bại; Tác vụ bình thường thì qua.

Loại ví dụ này ít nhất cần:

- Đọc được đầu vào
- Đưa được lý do thất bại rõ
- Không làm tổn thương yêu cầu bình thường quá mức

## Hiểu lầm thường gặp

### 1. Ví dụ chạy được là đưa thẳng production

Giá trị ví dụ nằm ở cấu trúc và ý tưởng, không phải copy nguyên lên production.

### 2. Hook kiểu block chưa chắc chín hơn kiểu log

Nhiều nhóm bắt đầu từ log, xác nhận báo giả và hiệu năng chấp nhận được rồi mới nâng lên warn hoặc block.

### 3. Ví dụ Hook không chỉ để xem cách viết script

Chỉ xem script chưa đủ — còn phải xem:

- Gắn sự kiện nào
- Chiến lược thất bại là gì
- Nhóm có giải thích được vì sao chặn vậy không

## Kiểm thử Hook

```bash
# Dùng fixture test script (minh họa)
echo '{"tool":"shell","arguments":"git status"}' | .codex/hooks/secret-scan.sh
echo $?
```

## Thứ tự thường gặp

Nhiều nhóm tiến theo thứ tự:

1. Làm kiểu nhật ký chỉ đọc trước
2. Rồi kiểu warn
3. Rồi kiểu block

Dễ hơn để tách"logic viết đúng"và"nhóm thật sự muốn để nó chặn".

Ví dụ Hook chủ yếu để học ý tưởng và cấu trúc — không phù hợp chuyển nguyên vào môi trường chính thức.

## Lỗi thường gặp

- Script thiếu `chmod +x`, thất bại im lặng
- `timeout_ms` quá ngắn gây chặn nhầm
- Đường nhật ký không ghi được khiến cả chuỗi Hook thất bại
- Trong Hook `curl` gửi nguyên payload ra ngoài

## Checklist nghiệm thu

- [ ] Mỗi Hook có fixture test tương ứng
- [ ] Chiến lược thất bại (block/warn) khớp chính sách nhóm
- [ ] Cấu hình và script cùng repo, cùng PR review
- [ ] Tài liệu ghi ngày Kiểm chứng và phiên bản CLI áp dụng

## Nguồn tham chiếu
- Ví dụ OpenAI Codex Hooks
---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** CLI / App(tùy phiên bản)  
**Ghi chú tái Kiểm chứng:** Trang này gồm cấu trúc cấu hình Hook, tên sự kiện, trường payload và ví dụ script; các ví dụ phụ thuộc mạnh triển khai hiện tại, thiếu căn cứ công khai chính thức đủ ổn định.  
**Kiểm chứng gần nhất:** 2026-07-26
