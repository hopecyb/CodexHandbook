---
title: Subagent
description: Ủy thác tác vụ con cho ngữ cảnh độc lập — khi nào tách, bàn giao thế nào, nghiệm thu thế nào.
locale: vi
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

**Subagent** là **đơn vị làm việc độc lập** mà Agent chính khởi động cho một vấn đề con cụ thể; nó có ngữ cảnh tương đối cách ly, hoàn thành rồi tổng hợp kết quả về thread chính.

Có thể hiểu Subagent là: giao một tác vụ nhỏ rõ ràng cho một trợ lý chỉ tập trung vào việc đó. Giá trị không nằm ở “ngầu hơn”, mà ở “sạch hơn, tập trung hơn, dễ song song hơn”.

## Một khái niệm cốt lõi

| Agent chính | Subagent |
|---|---|
| Giữ mục tiêu toàn cục và hội thoại với người dùng | Tập trung vào một tác vụ con |
| Ngữ cảnh gồm lịch sử đầy đủ | Ngữ cảnh sạch hơn, phù hợp đào sâu |
| Phối hợp và gộp kết quả | Thực thi khám phá, truy xuất, hiện thực chuyên biệt |

Khác với [Agent song song](/guide/desktop-app/parallel-agents/): Subagent thường là đơn vị tác vụ do **Agent chính chủ động ủy thác**, chứ không phải người dùng tự mở nhiều cửa sổ (hiện thực sản phẩm có thể chồng lấn; lấy UI hiện tại làm chuẩn).

## Khi nào đáng tách

Không phải tác vụ lớn là phải tách, mà khi bạn thấy:

- Một vấn đề con bản thân cần đào sâu riêng
- Vấn đề con đó không cùng loại công việc với dòng chính
- Bạn muốn nó đưa kết luận độc lập trước rồi mới quay về

Lúc đó tách thành Subagent thường ổn hơn để thread chính vừa lo toàn cục vừa lo chi tiết.

## Tình huống phù hợp

| Phù hợp | Không phù hợp |
|---|---|
| Trong kho lớn, tìm có hướng «module xác thực kiểm tra token thế nào» | Cần liên tục hỏi lại người dùng để làm rõ yêu cầu |
| Nghiên cứu song song hai phương án kỹ thuật | Tác vụ con phụ thuộc mạnh việc sửa loại trừ trên cùng một tệp |
| Phân tích chỉ đọc lâu, tránh làm bẩn ngữ cảnh chính | «Xem tạm» không có artifact giao rõ |

## Vai trò subagent đáng chuẩn hóa

Từ các lần ủy quyền một lần, thứ đáng giữ lại không phải là “một Agent vạn năng”, mà là vai trò có ranh giới rõ và định dạng bàn giao ổn định.

| Vai trò | Artifact mạnh | Ràng buộc nên có |
|---|---|---|
| Người review mã | Vấn đề theo mức độ, vị trí tệp, test còn thiếu | Mặc định chỉ đọc; không sửa nếu chưa yêu cầu |
| Kỹ sư kiểm thử | Lỗ hổng coverage, test nên bổ sung, lệnh cần chạy | Mỗi lần chỉ một package hoặc workflow |
| Người viết tài liệu | Mô tả API, hướng dẫn migration, guide người dùng | Bám mã nguồn và văn phong sẵn có |
| Debugger | Bước tái hiện, nguyên nhân nghi ngờ, kế hoạch kiểm chứng | Kết luận phải dựa trên log, test hoặc đường mã |
| Người review bảo mật | Điểm đe dọa, đường vượt quyền, rủi ro secret | Chỉ đọc, phạm vi rõ |
| Người phân tích hiệu năng | Giả thuyết nút thắt, kế hoạch đo, đề xuất ít rủi ro | Cần benchmark hoặc thử nghiệm tái hiện được |

Với tác vụ có hiện thực, nên yêu cầu subagent trả về “kế hoạch patch” trước. Hợp nhất và kiểm chứng cuối cùng vẫn thuộc về luồng chính.

## Hiểu lầm thường gặp

### 1. Subagent không phải càng nhiều càng tốt

Tách quá nhiều mang chi phí mới:

- Bạn phải đọc nhiều kết quả trả về hơn
- Các Subagent khác nhau có thể kết luận xung đột
- Chi phí phối hợp có thể cao hơn lợi ích

### 2. Chỉ cần tác vụ phức tạp là nên tách Subagent ngay?

Không nhất thiết.  
Nếu vấn đề gắn chặt, cần xác nhận với bạn thường xuyên, đẩy thẳng trên thread chính lại tiết kiệm hơn.

### 3. Subagent có thể tiện tay làm hết thay đổi giúp tôi?

Có làm được hay không tùy cách bạn ủy thác; nhưng cách mặc định ổn hơn là:

- Để Subagent làm phân tích chỉ đọc, so sánh, định vị trước
- Thread chính xem xong kết luận rồi mới quyết có vào sửa hay không

## Quy trình khuyến nghị

### 1. Agent chính viết rõ hợp đồng tác vụ con

```text
Tác vụ con: Phân tích chỉ đọc logic làm mới session trong packages/auth.
Giao: Tóm tắt trong 1 trang + đường dẫn tệp then chốt + điểm rủi ro.
Cấm: Sửa bất kỳ tệp nào, đừng push.
```

Ở đây quan trọng không phải định dạng, mà viết rõ 4 việc:

- Nó thật sự chỉ chịu trách nhiệm gì
- Đầu ra phải trông như thế nào
- Hành động nào không được làm
- Sau khi trả về ai quyết

### 2. Subagent thực thi và trả kết quả có cấu trúc

Định dạng kỳ vọng:

```text
## Kết luận
## Bằng chứng (tệp:số dòng)
## Bước tiếp theo đề xuất
## Vấn đề chưa giải quyết
```

### 3. Agent chính gộp và quyết định

Thread chính (hoặc bạn) quyết chọn đường nào, rồi vào giai đoạn thực thi của [Khám phá—Kế hoạch—Thực thi—Kiểm chứng](/cases/workflows/explore-plan-execute-verify/).

### 4. Nghiệm thu

- Đầu ra Subagent có kiểm chứng độc lập được không (mở tệp đối chiếu được)
- Có vượt quyền sửa kho không
- Khi nhiều Subagent xung đột kết luận, đã đánh dấu chưa

## Có thể phán đoán theo vài điều kiện này

Nếu một tác vụ con thỏa 2 trong 3 điều sau, có thể cân nhắc tách:

1. Có thể mô tả độc lập
2. Có artifact giao rõ
3. Không cần thường xuyên chia sẻ cùng một đống ngữ cảnh vụn với thread chính

## Phối hợp với Skill và MCP

- **Skill**: định nghĩa định dạng giao chuẩn của tác vụ con (ví dụ danh sách rà soát bảo mật)
- **MCP**: Subagent truy vấn chỉ đọc ticket bên ngoài; Agent chính tổng hợp quyết định

## Lỗi thường gặp

- Phạm vi Subagent quá lớn, thành Agent chính thứ hai
- Không yêu cầu trả về có cấu trúc, thread chính phải đọc lại nhật ký dài
- Nhiều Subagent sửa cùng một thư mục cùng lúc

Subagent phù hợp nhất với vấn đề con “ranh giới rõ, giao rõ, hoàn thành độc lập được”; không phù hợp để copy lại cả tác vụ chính.

## Đọc thêm

- [Phối hợp nhiều Agent](/cases/workflows/multi-agent-coordination/)
- [Bàn giao và khôi phục](/guide/agent-work/handoff-and-resume/)

---

**Trạng thái:** verified  
**Sản phẩm áp dụng:** App / CLI / Cloud  
**Căn cứ kiểm chứng:** Đã đối chiếu chéo với mô tả công khai hiện tại của OpenAI Developers về multi-agent, tác vụ dài hạn và quy trình song song; trang này chỉ xác nhận nguyên tắc ổn định “tác vụ con độc lập, ranh giới rõ, giao rõ”; chỗ liên quan UI hiện tại hoặc hiện thực điều phối cụ thể đều giữ diễn đạt không mang tính hợp đồng theo kiểu “lấy sản phẩm hiện tại làm chuẩn”.  
**Kiểm chứng gần nhất:** 2026-07-26
