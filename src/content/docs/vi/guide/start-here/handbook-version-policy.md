---
title: Chính sách phiên bản cẩm nang
description: Giải thích trạng thái nội dung, ngày kiểm chứng và cách cập nhật liên tục.
locale: vi
source_locale: zh-CN
source_revision: 3f4e05e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 8
---

## Cập nhật liên tục

Cẩm nang này không gắn với một số phiên bản Codex duy nhất để đóng băng lâu dài. Sản phẩm sẽ thay đổi, nên các trang dùng trạng thái và ngày kiểm chứng để đánh dấu mức độ tin cậy hiện tại.

## Nội dung

- Vì sao cẩm nang này không thể giả định mãi không đổi
- Cách đọc trạng thái và ngày kiểm chứng ở cuối trang
- Khi xung đột với tài liệu chính thức thì tin ai

## Trạng thái trang

| Trạng thái | Ý nghĩa |
|---|---|
| planned | Đã lên kế hoạch, chưa viết |
| draft | Đang viết |
| review | Nội dung xong, chờ rà soát lại |
| verified | Đã kiểm chứng theo cơ sở đã ghi |
| outdated | Sau thay đổi sản phẩm cần cập nhật |
| archived | Giữ lịch sử, không vào điều hướng chính |

## Cách đọc trạng thái trang

- `planned`: chưa viết
- `draft`: đang viết, nhưng chưa ổn định
- `review`: phần chính đã thành hình, nhưng còn cần rà soát lại
- `verified`: đã kiểm chứng theo cơ sở đã ghi
- `outdated`: trước đây có thể đúng, nhưng giờ cần cảnh giác lỗi thời
- `archived`: giữ để tham khảo, không coi là nội dung dòng chính hiện tại

## Ba dòng cuối trang

Ở giai đoạn MVP, mỗi trang ghi cuối trang: **Trạng thái / Sản phẩm áp dụng / Kiểm chứng gần nhất**. Nội dung dễ lỗi thời (cài đặt, tài khoản, quyền, model) nên kèm liên kết chính thức.

## Cơ sở chính thức

Hành vi sản phẩm lấy tài liệu OpenAI làm chuẩn: [https://developers.openai.com/codex](https://developers.openai.com/codex). Kho này là hướng dẫn cộng đồng; nếu xung đột với chính thức, lấy chính thức làm chuẩn và hoan nghênh mở issue.

## Hiểu nhầm thường gặp

### 1. Chỉ cần ghi vào cẩm nang là nghĩa là lâu dài không đổi

Đặc biệt các nội dung sau dễ thay đổi nhất:

- Cách cài đặt
- Quy trình đăng nhập và tài khoản
- Quyền, model, mục cấu hình
- Hành vi Cloud và lối vào sản phẩm

### 2. `review` không có nghĩa là không được xem

`review` nghĩa là nội dung chính đã có, nhưng chưa tới mức xác nhận mạnh nhất — không phải không được tham khảo.

### 3. Khi cẩm nang cộng đồng xung đột với tài liệu chính thức, không được tin mỗi bên một nửa

Có thể phân như sau:

- Hiểu và giải thích lộ trình xem cẩm nang
- Hành vi mới nhất và cách viết tham số xem chính thức

## Cách phán đoán một trang có đáng tin không

Nếu lo một trang đã lỗi thời, xem ba việc này:

1. Trạng thái cuối trang là `review`, `verified` hay `outdated`
2. Ngày kiểm chứng gần nhất cách hiện tại xa không
3. Đang nói khái niệm, hay đang nói cài đặt, cấu hình, quyền — những thứ dễ đổi

Phàm liên quan hành vi, tham số và quy tắc mới nhất, cuối cùng đều phải lấy tài liệu chính thức hiện hành làm chuẩn.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Cơ sở kiểm chứng:** Đã đối chiếu với hệ thống 6 trạng thái hiện dùng của cẩm nang, quy tắc ghi chú chân trang và nguyên tắc ưu tiên tài liệu chính thức; trang này giải thích chính sách phiên bản nội bộ và cách đọc, không phụ thuộc tham số phiên bản sản phẩm cụ thể.  
**Kiểm chứng gần nhất:** 2026-07-26
