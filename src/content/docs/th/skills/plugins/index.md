---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / Desktop App / Mobile; Codex บนเดสก์ท็อปและ CLI; IDE extension ไม่รองรับ Plugin"
  checkedAt: "2026-08-26"
title: Plugins
description: เรียกดู ติดตั้ง และกำกับชุด Skills, connectors, MCP, Hooks และเทมเพลตงานที่นำกลับมาใช้ได้
locale: th
source_locale: zh-CN
source_revision: '8917a59'
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

Plugin คือหน่วยสำหรับรวมและแจกจ่ายความสามารถ สามารถมี Skills, connectors, MCP servers, browser extensions, Hooks และเทมเพลต Scheduled task ส่วนประกอบเหล่านี้ต่างหากที่ทำงานจริง

## เหมาะกับใคร

- ผู้ใช้ที่ต้องการติดตั้งชุดความสามารถสำเร็จรูปจากไดเรกทอรีสาธารณะ
- ผู้ดูแลที่ต้องการแจก workflow เครื่องมือ และราวกั้นของทีมเป็นหน่วยที่กำหนดเวอร์ชันได้
- ผู้ดูแลระบบที่ต้องตรวจแหล่งที่มา สิทธิ์บริการภายนอก และ Plugin Hook

## พื้นผิวที่รองรับปัจจุบัน

| พื้นผิว | เรียกดู/ติดตั้ง | ใช้ |
|---|---|---|
| ChatGPT Web และ Desktop App | แท็บ Plugins | Chat และ Work |
| ChatGPT Mobile | ไม่ใช่จุดจัดการหลัก | ใช้ Plugin ที่บัญชีมีอยู่ |
| Codex ใน ChatGPT Desktop App | แท็บ Plugins | งาน Codex |
| Codex CLI | browser `/plugins`; เปิด session ใหม่หลังติดตั้ง | สภาพแวดล้อม Codex |
| IDE extension | **ไม่รองรับ Plugin** | ใช้ MCP, Skill และความสามารถอื่นที่ IDE รองรับแยกกันได้ |

## จุดเริ่มอ่าน

- [ภาพรวม Plugins](/th/skills/plugins/plugins-overview/): ทำความเข้าใจส่วนประกอบ ขอบเขตการรองรับ การตรวจหลังติดตั้ง และการตรวจความปลอดภัย
- [แผนที่ความสามารถส่วนขยาย](/th/skills/capability-map/): เปรียบเทียบ Plugin, Skill, MCP, Hook และ Scheduled task

## ถามก่อนติดตั้ง

1. ใครคือแหล่งที่มาและผู้ดูแล
2. มี Skills, connectors, MCP, ความสามารถเบราว์เซอร์ และ Hooks ใดบ้าง
3. ต้องเชื่อมบัญชีภายนอกหรือไม่ และจะได้ scope ใด
4. ตรวจและเชื่อถือ Hook ใน `/hooks` แล้วหรือไม่
5. ทีมจะปิด อัปเกรด ย้อนกลับ และถอนสิทธิ์อย่างไร

## แหล่งข้อมูลทางการ

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
