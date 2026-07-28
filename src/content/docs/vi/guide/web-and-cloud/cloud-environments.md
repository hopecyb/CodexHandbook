---
title: Môi trường Cloud
description: "Thành phần, vòng đời và điểm cấu hình đội của môi trường chạy từ xa Codex Cloud."
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Một **môi trường Cloud** là máy worker Codex dùng khi chạy Tác vụ từ xa.

Nó ảnh hưởng trực tiếp kết quả — gồm OS, phiên bản ngôn ngữ, chuỗi công cụ, chính sách mạng và nhánh repository nào được checkout. Trang này chủ yếu trả lời một câu hỏi phổ biến:

> **Vì sao cục bộ chạy được nhưng Cloud fail?**

## Nội dung phủ

- Môi trường Cloud khác máy dev cục bộ thế nào
- Môi trường gắn với repo và nhánh GitHub thế nào
- Đội giữ cấu hình Cloud tái lập được thế nào

## Bắt đầu từ ba điểm này

Giữ trước trong đầu:

- Cloud không «đọc hết máy hiện tại của bạn» — chỉ thấy những gì tồn tại trong môi trường từ xa
- Tác vụ Cloud vẫn gặp ràng buộc thế giới thật: dependency, lệch phiên bản và mạng có tới được thứ cần không
- Mọi thứ bạn chưa commit hoặc push cục bộ mặc định vô hình với Cloud

Hãy coi Cloud như chuyển sang máy khác để làm việc.

## Khái niệm nền

```text
Repo GitHub (một nhánh)
        ↓ clone / checkout
Instance môi trường Cloud (container hoặc VM — tùy sản phẩm)
        ↓
Agent chạy Tác vụ: cài deps, sửa code, kiểm thử, push
```

Dùng kèm [Kết nối GitHub](/guide/web-and-cloud/connect-github/); môi trường **không thể** truy cập commit chưa push trên laptop.

## Cục bộ vs Cloud

- **Tác vụ cục bộ**: Codex làm quanh máy hiện tại của bạn, trước mặt bạn
- **Tác vụ Cloud**: Codex chạy trên máy từ xa bạn ủy thác

Khoảng cách này là nguồn nhầm lẫn phổ biến lần đầu dùng Cloud:

- «Vì sao nó không thấy tệp tôi vừa sửa cục bộ?»
- «Vì sao nó không có công cụ tôi cài global trên máy?»
- «Vì sao nó không tới được DB tôi đang chạy cục bộ?»

Phần lớn lúc **máy từ xa đó đơn giản không có những thứ đó** — vấn đề là bản thân môi trường.

## Một môi trường gồm gì (khái niệm)

| Thành phần | Mô tả |
|---|---|
| Image nền | OS, công cụ build phổ biến |
| Runtime | Node, Python, Go, v.v. (tùy image và Tác vụ) |
| Thư mục làm việc | Đường dẫn repo đã clone |
| Chính sách mạng | Có cho phép đi ra và domain nào |
| Tiêm chứng chỉ | [Secrets và biến](/guide/web-and-cloud/secrets-and-variables/) |

Danh sách image cụ thể và tùy chỉnh xem [tài liệu Cloud chính thức](https://developers.openai.com/codex).

## Hiểu nhầm thường gặp

### 1. Giả định Cloud tự kế thừa môi trường cục bộ

Không.

Node, Python, Homebrew, Chrome hoặc client DB trên máy bạn không xuất hiện trong Cloud chỉ vì chúng có cục bộ.

### 2. Giả định push repo nghĩa là mọi thứ sẵn sàng

Code repository chỉ là điểm xuất phát. Thành công Tác vụ còn phụ thuộc:

- Dependency cài thế nào
- Lệnh nào khởi động hoặc kiểm thử dự án
- Secrets nào bắt buộc
- Chính sách mạng có cho tới tài nguyên ngoài không

### 3. Giả định Cloud fail nghĩa Codex không làm được Tác vụ

Nhiều fail Cloud là môi trường cấu hình sai, không phải không làm được việc.

Thứ tự xử lý sự cố hợp lý:

1. Repo và nhánh đúng chưa?
2. Dependency và phiên bản runtime đúng chưa?
3. Secrets và truy cập mạng sẵn chưa?
4. Prompt Tác vụ đủ rõ chưa?

## Luồng cấu hình khuyến nghị

1. Hoàn thành Tác vụ Cloud đầu trong **repo thử** và ghi lệnh cài dependency
2. Đưa bước tái lập vào tài liệu repo (`README`, `AGENTS.md`, hoặc tệp cấu hình môi trường chính thức)
3. Cấu hình [Secrets](/guide/web-and-cloud/secrets-and-variables/) (registry riêng, API key)
4. Xác nhận chính sách [truy cập Internet](/guide/web-and-cloud/internet-access/) khớp yêu cầu bảo mật
5. Kiểm chứng vòng issue → PR với cùng mẫu môi trường

## Khi nào Cloud là lựa chọn tốt

Dùng khung này:

- Đổi dự án trên máy và muốn phản hồi ngay: bắt đầu cục bộ
- Tác vụ dài, môi trường đội dùng chung, hoặc quy trình GitHub từ xa: dùng Cloud

Nếu quy trình cục bộ chưa trôi, đừng vội biến mọi vấn đề thành «vấn đề cấu hình Cloud».

## Căn chỉnh với cục bộ

Tránh «xanh cục bộ, đỏ Cloud»:

| Thực hành | Vì sao |
|---|---|
| Ghim phiên bản dependency (lockfile) | Cài đặt tái lập được |
| Ghi install và lệnh kiểm thử trong `AGENTS.md` | Agent không đoán |
| Giữ phiên bản Node/Python gần giữa CI và Cloud | Ít lệch phiên bản hơn |
| Dùng Git LFS hoặc tải khi build cho tệp lớn | Kích thước clone kiểm soát được |

## Vòng đời

Tác vụ Cloud điển hình:

1. **Tạo hoặc tái sử dụng** instance môi trường
2. **Chuẩn bị**: clone, checkout nhánh, cài dependency
3. **Chạy**: Agent sửa code, chạy lệnh
4. **Đầu ra**: push nhánh, PR, artifact log
5. **Hủy hoặc tái chế** (chính sách tùy sản phẩm)

Với Tác vụ dài, theo dõi qua [thông báo App máy tính](/guide/desktop-app/notifications/) hoặc mobile.

## Lỗi thường gặp

- Giả định Cloud pre-install cả chuỗi công cụ monorepo riêng của bạn
- Phụ thuộc dịch vụ `localhost` (DB, API mock) mà không cung cấp trong môi trường
- Lần đầu thử đã chạy Tác vụ không giới hạn trên repo production
- Hiểu vấn đề môi trường thành vấn đề năng lực mô hình

## Ranh giới bảo mật

- Coi môi trường là **bán đáng tin**: vẫn yêu cầu code review và bảo vệ nhánh
- Chỉ tiêm chuỗi kết nối DB production qua Secrets, không bao giờ trong Prompt
- Định kỳ dọn mẫu môi trường và Secrets không dùng

## Tham chiếu

- OpenAI Codex Cloud environments

---

**Trạng thái:** outdated  
**Sản phẩm áp dụng:** Cloud  
**Ghi chú đối chiếu:** Trang phủ hình dạng instance môi trường, vòng đời, mẫu và gắn nhánh GitHub — chi tiết chúng ta chưa xác nhận đầy đủ với tài liệu Cloud chính thức hiện hành đủ mạnh; không nên đánh `verified` đến khi có tài liệu môi trường Cloud chính thức.  
**Kiểm chứng gần nhất:** 2026-07-26
