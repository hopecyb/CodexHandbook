---
title: AGENTS.md trong Monorepo
description: Mẫu đặt chỉ thị dự án, phạm vi và lệnh kiểm thử trong cấu trúc một kho nhiều gói.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Trong Monorepo nhiều app, gói chia sẻ, stack kỹ thuật khác nhau cùng tồn tại — một `AGENTS.md` khổng lồ dễ để Agent **sửa nhầm gói** hoặc chạy nhầm kiểm thử. Trang này đưa mẫu **mô tả phân tầng** tái sử dụng được (ví dụ, hãy cắt theo kho).

## Trang này sẽ nói gì

- Gốc và gói con phân công viết chỉ thị thế nào
- Làm sao để ràng buộc @ tệp và đường dẫn khớp ranh giới gói
- Khớp lệnh môi trường CI / Cloud

## Vì sao loại kho này càng cần mô tả phân tầng

Nếu kho thường như một căn nhà, monorepo giống hơn một tòa nhà.

Trong tòa có phòng khác nhau, cư dân khác nhau, quy tắc khác nhau.  
Lúc đó nếu chỉ dán một tờ tổng dài ở cửa lớn, Codex dễ gặp hai vấn đề:

- Thấy hết nhưng không biết tầng hiện tại nên tuân cái nào
- Rõ ràng chỉ muốn sửa một gói, kết quả tiện tay đụng chỗ khác

Trọng tâm là để quy tắc rõ theo ranh giới thư mục, chứ không máy móc viết thêm vài bản `AGENTS.md`.

## Cấu trúc khuyến nghị (ví dụ)

```text
repo-root/
  AGENTS.md              # Toàn cục: chiến lược nhánh, quy chuẩn commit, mục cấm
  apps/web/AGENTS.md     # Frontend: khung, lệnh kiểm thử, ước định routing
  apps/api/AGENTS.md     # Backend: phong cách API, kỷ luật migration
  packages/shared/       # Có thể chỉ liên kết trong tài liệu gốc, hoặc mô tả con ngắn
```

`AGENTS.md` gốc nên gồm:

- Thư mục nào **cấm** Agent sửa (như `infra/prod/`)
- **Người phụ trách hoặc liên kết tài liệu** của từng gói con
- Lệnh cài toàn cục: `pnpm install` chạy ở gốc

## Hiểu lầm thường gặp

### 1. Thư mục nhiều lên, đừng chất hết mô tả vào gốc

Nhiều người lần đầu làm chỉ thị monorepo, bản năng nhét mọi ràng buộc vào `AGENTS.md` gốc.

Kết quả:

- Tệp rất dài
- Quy tắc thật sự liên quan tác vụ hiện tại không nổi
- Ước định đặc biệt của gói con dễ bị nhấn chìm

Cách ổn hơn thường là: gốc viết đồng thuận toàn cục, gói con viết quy tắc đặc biệt cục bộ.

### Vai trò mô tả gói con là thu hẹp phạm vi sửa nhầm, không phải lặp quy tắc gốc

Nếu lệnh phát triển, lệnh kiểm thử, cách ràng buộc của `apps/web` và `apps/api` đều khác, thì viết khác biệt đó trong thư mục riêng của chúng ngược lại giúp Codex ít đi đường vòng hơn.

## Đoạn mẫu AGENTS.md gói con

```markdown
## Phạm vi
Chỉ sửa `apps/web/**`, trừ khi tác vụ yêu cầu rõ thay đổi xuyên gói.

## Phát triển
- Cài: ở gốc kho `pnpm install`
- Phát triển: `pnpm --filter web dev`
- Kiểm thử: `pnpm --filter web test`
- Kiểm kiểu: `pnpm --filter web typecheck`

## Dependency
Kiểu chia sẻ import từ `@acme/shared`, không sao chép dán.
```

## Phối hợp Prompt tác vụ

Khi tái cấu trúc xuyên gói **liệt kê tường minh đường dẫn**:

```text
Mục tiêu: Trong apps/web dùng API client mới
Cho phép sửa: apps/web/**, packages/api-client/**
Cấm: Sửa thẳng phía server apps/api
Nghiệm thu: pnpm --filter web test && pnpm --filter api-client test
```

Xem [Ngữ cảnh tệp và thư mục](/guide/context/file-and-folder-context/)

## Cloud và CI

Monorepo trên Cloud thường thất bại vì **chưa cài ở gốc** hoặc filter sai. Trong `AGENTS.md` gốc ghi rõ:

- Thư mục làm việc mặc định là gốc kho
- Lệnh filter của tác vụ một gói
- Chiến lược cache (nếu dùng turborepo/nx, ghi đồ thị tác vụ)

[Môi trường Cloud](/guide/web-and-cloud/cloud-environments/)

## Lỗi thường gặp

- Chỉ viết mô tả ở `apps/web`, Agent lại sửa lung tung lockfile ở gốc
- Lệnh kiểm thử các gói con không nhất quán và chưa tài liệu hóa
- AGENTS.md gói con xung đột tài liệu gốc

## Phán đoán nên viết ở gốc hay thư mục gói con

Nếu chưa chắc một mô tả nên viết ở gốc hay thư mục gói con, hỏi trước:

1. Có phải đồng thuận mọi gói đều phải tuân không
2. Có phải chỉ đúng với một thư mục không
3. Quy tắc này nếu đặt sai chỗ có khiến Agent sửa sai phạm vi không

Gần điều 1 hơn thì vào gốc; gần điều 2, 3 hơn thì phù hợp vào thư mục gói con.

## Danh sách nghiệm thu

- [ ] Gốc và gói con ít nhất mỗi bên có một mô tả scope đọc được
- [ ] Bất kỳ gói nào cũng chạy thông lệnh kiểm thử riêng
- [ ] Tác vụ xuyên gói trong Prompt viết rõ đường dẫn cho phép

AGENTS.md trong Monorepo không cần tập trung một cục; cách phù hợp hơn là để “đồng thuận toàn cục” và “quy tắc cục bộ thư mục” mỗi thứ đặt đúng chỗ.

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / IDE / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với các chương `AGENTS.md`, ngữ cảnh thư mục tệp và môi trường Cloud hiện tại của sổ tay; nội dung trang giới hạn ở mẫu mô tả phân tầng monorepo và phương pháp tổ chức lệnh, không coi lối vào sản phẩm cụ thể hoặc hiện thực quản trị là hợp đồng cố định.  
**Kiểm chứng gần nhất:** 2026-07-26
