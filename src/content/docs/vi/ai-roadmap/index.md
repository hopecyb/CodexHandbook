---
title: Lộ trình ứng dụng AI
description: Hiểu Prompt Engineering, RAG, MCP, Multi-agent, Context Engineering, Skills và các mốc quan trọng khác của kỹ thuật ứng dụng AI.
locale: vi
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-08
reviewed_at: 2026-08-26
source_revision: 0333168
---

# Lộ trình ứng dụng AI

Đây là bản đồ kiến thức dành cho kỹ thuật ứng dụng AI. Nó không theo dõi số tham số mô hình, bảng xếp hạng hay từng lần ra mắt sản phẩm, mà nối các phương pháp chính theo thứ tự thời gian đảo ngược: từ các hệ thống Agent có thể tái sử dụng và kiểm chứng, nhìn lại những thực hành đã tạo ra chúng.

<div class="roadmap-timeline">
  <article>
    <time>2026-04</time>
    <h3><a href="/vi/ai-roadmap/timeline/2026-04-skills/">Skills (kỹ năng)</a></h3>
    <p>Skills đóng gói prompt, bước thực hiện, ví dụ, script và tài nguyên thành đơn vị workflow có thể tái sử dụng. Nó giúp đội nhóm lưu giữ kinh nghiệm thay vì mỗi lần lại giải thích “làm thế nào”.</p>
    <p><strong>Trọng tâm:</strong> SKILL.md, tiết lộ dần, tài nguyên phụ thuộc, ranh giới tái sử dụng, quy ước đội nhóm.</p>
  </article>
  <article>
    <time>2026-02</time>
    <h3><a href="/vi/ai-roadmap/timeline/2026-02-harness-engineering/">Harness Engineering (kỹ thuật khung thực thi)</a></h3>
    <p>Harness Engineering thiết kế môi trường giúp mô hình hoàn thành nhiệm vụ ổn định: công cụ, ngữ cảnh, phản hồi xác minh, phục hồi lỗi, cổng chất lượng và kiểm tra hồi quy.</p>
    <p><strong>Trọng tâm:</strong> khung nhiệm vụ, phản hồi xác minh, phục hồi thất bại, cổng chất lượng.</p>
  </article>
  <article>
    <time>2026-01</time>
    <h3><a href="/vi/ai-roadmap/timeline/2026-01-openspec/">OpenSpec (phát triển theo đặc tả)</a> / <a href="/vi/ai-roadmap/timeline/2026-01-openclaw/">OpenClaw (cổng trợ lý AI cá nhân)</a></h3>
    <p>Hai nút này chỉ hai hướng khác nhau: OpenSpec biến yêu cầu và thiết kế thành artefact đặc tả có thể truy vết; OpenClaw hợp nhất trợ lý cá nhân, kênh và cổng công cụ.</p>
    <p><strong>Trọng tâm:</strong> spec-driven development, gateway, phiên, kênh, artefact có thể truy vết.</p>
  </article>
  <article>
    <time>2025-09</time>
    <h3><a href="/vi/ai-roadmap/timeline/2025-09-context-engineering/">Context Engineering (kỹ thuật ngữ cảnh)</a></h3>
    <p>Context Engineering chuyển trọng tâm từ “viết prompt thế nào” sang “mô hình nên thấy gì, theo thứ tự nào, và nội dung nào cần nén hoặc loại bỏ”.</p>
    <p><strong>Trọng tâm:</strong> ưu tiên ngữ cảnh, chiến lược truy xuất, nén, bộ nhớ, chọn tệp.</p>
  </article>
  <article>
    <time>2025-06</time>
    <h3><a href="/vi/ai-roadmap/timeline/2025-06-multi-agent/">Multi-agent (phối hợp đa tác nhân)</a></h3>
    <p>Multi-agent chia việc phức tạp cho nhiều vai trò như nghiên cứu, triển khai, rà soát, xác minh và tổng hợp. Mục tiêu là cấu trúc, song song hóa và kiểm tra chéo.</p>
    <p><strong>Trọng tâm:</strong> ranh giới vai trò, định dạng bàn giao, xử lý xung đột, review và xác minh.</p>
  </article>
  <article>
    <time>2025-03</time>
    <h3><a href="/vi/ai-roadmap/timeline/2025-03-tool-use/">Tool Use (sử dụng công cụ)</a></h3>
    <p>Tool Use nói về cách mô hình chọn công cụ, gọi công cụ, đọc kết quả và tiếp tục nhiệm vụ. Đây là cầu nối từ câu trả lời một lần sang thực thi nhiều bước.</p>
    <p><strong>Trọng tâm:</strong> chọn công cụ, chuỗi lời gọi, quản lý trạng thái, phục hồi sau lỗi công cụ.</p>
  </article>
  <article>
    <time>2024-11</time>
    <h3><a href="/vi/ai-roadmap/timeline/2024-11-mcp/">MCP (giao thức ngữ cảnh mô hình)</a></h3>
    <p>MCP chuẩn hóa cách phơi bày công cụ, tài nguyên và prompt ở tầng giao thức. Giá trị của nó không chỉ là nối thêm công cụ, mà là làm tích hợp có thể tái sử dụng, khám phá và quản trị.</p>
    <p><strong>Trọng tâm:</strong> server/client, tools, resources, prompts, quyền và gỡ lỗi.</p>
  </article>
  <article>
    <time>2023-11</time>
    <h3><a href="/vi/ai-roadmap/timeline/2023-11-rag/">RAG (sinh tăng cường bằng truy xuất)</a></h3>
    <p>RAG neo câu trả lời vào tài liệu truy xuất được. Nó đưa AI từ “có thể nói” sang “có thể trả lời bằng bằng chứng truy vết được”.</p>
    <p><strong>Trọng tâm:</strong> chia đoạn, tìm kiếm vector, xếp hạng lại, trích dẫn, nén ngữ cảnh.</p>
  </article>
  <article>
    <time>2023-06</time>
    <h3><a href="/vi/ai-roadmap/timeline/2023-06-function-calling/">Function Calling (gọi hàm)</a></h3>
    <p>Function Calling đưa mô hình từ trả lời bằng văn bản sang gọi năng lực bên ngoài với tham số có cấu trúc. Đây là bước quan trọng để AI đi vào hệ thống thật.</p>
    <p><strong>Trọng tâm:</strong> thiết kế schema, xác minh tham số, ranh giới công cụ, phản hồi lỗi.</p>
  </article>
  <article>
    <time>2022-11</time>
    <h3><a href="/vi/ai-roadmap/timeline/2022-11-prompt-engineering/">Prompt Engineering (kỹ thuật prompt)</a></h3>
    <p>Điểm khởi đầu là kiểm soát đầu vào: làm rõ mục tiêu nhiệm vụ, ngữ cảnh, ràng buộc, ví dụ và định dạng đầu ra để mô hình hành xử ổn định hơn.</p>
    <p><strong>Trọng tâm:</strong> tách nhiệm vụ, đặt vai trò, ví dụ few-shot, định dạng đầu ra, thử lại khi thất bại.</p>
  </article>
</div>
