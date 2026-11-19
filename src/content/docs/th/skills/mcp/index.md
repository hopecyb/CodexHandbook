---
legacyVerification:
  status: "verified"
  products: "ChatGPT Desktop App / Codex CLI / IDE; ChatGPT Web ใช้เครื่องมือ MCP ระยะไกลผ่าน Plugin"
  basis: "การรองรับไคลเอนต์ การตั้งค่าร่วม วิธีรับส่งข้อมูล และคำสั่ง CLI"
  checkedAt: "2026-08-25"
title: MCP
description: เชื่อมเครื่องมือและบริบทจากภายนอกเข้ากับ ChatGPT และ Codex อย่างมีการควบคุม
locale: th
source_locale: zh-CN
source_revision: '8d9ec38'
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

MCP (Model Context Protocol) แก้ปัญหาว่า “Agent เรียกเครื่องมือและข้อมูลนอกรีโพซิทอรีอย่างไร” ไม่ใช่ “เขียน workflow อย่างไร”

## เหมาะกับใคร

- นักพัฒนารายบุคคลที่ต้องการให้ Codex ค้นเอกสาร แบบดีไซน์ ticket หรือเครื่องมือภายใน
- ทีมที่ต้องทำมาตรฐานการตั้งค่าเครื่องมือภายนอก OAuth และ least privilege
- ผู้ดูแลที่กำลังแก้ปัญหา “ตั้งค่าเซิร์ฟเวอร์แล้ว แต่เครื่องมือไม่ปรากฏหรือเรียกไม่สำเร็จ”

หากงานอ่านและเขียนเฉพาะรีโพซิทอรีปัจจุบัน ให้ใช้ความสามารถไฟล์และเทอร์มินัลในตัวก่อน เชื่อม MCP เฉพาะเมื่อต้องใช้บริบทหรือการกระทำจากภายนอกจริง ๆ

## ลำดับการอ่าน

1. [ภาพรวม MCP](/th/skills/mcp/mcp-overview/): แยกหน้าที่ MCP, Skill และ Plugin
2. [เชื่อมต่อเซิร์ฟเวอร์ MCP](/th/skills/mcp/connect-an-mcp-server/): ใช้ CLI หรือ `config.toml` เชื่อมเซิร์ฟเวอร์แรก
3. [แก้ปัญหาการเชื่อมต่อ MCP](/th/skills/mcp/debugging-mcp/): ตรวจสี่ชั้นตามลำดับ “การตั้งค่า การเริ่มทำงาน การยืนยันตัวตน เครื่องมือ”

## ขอบเขตการรองรับปัจจุบัน

- ChatGPT Desktop App, Codex CLI และ IDE extension แชร์การตั้งค่า MCP บน Codex host เดียวกัน
- ไคลเอนต์ Codex ในเครื่องรองรับเซิร์ฟเวอร์ STDIO และ Streamable HTTP
- ChatGPT Web ไม่อ่าน `~/.codex/config.toml` ในเครื่อง แต่ทำงานผ่านเครื่องมือ MCP ระยะไกลที่ Plugin ติดตั้งไว้

## จำสามเรื่องก่อน

1. MCP เปิดเผยเครื่องมือ แต่ไม่ได้กำหนด workflow ที่เชื่อถือได้แทนคุณ workflow ที่เสถียรยังควรเขียนไว้ใน Skill หรือ `AGENTS.md`
2. เซิร์ฟเวอร์ทำอะไรได้ขึ้นกับเครื่องมือที่เปิดเผยและขอบเขต credential เบื้องหลัง
3. การเชื่อมต่อครั้งแรกให้เริ่มจาก read-only, tenant ทดสอบ และเครื่องมือจำนวนน้อย อย่าทดลองด้วย token ผู้ดูแล production

## แหล่งข้อมูลทางการ

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [ข้อกำหนด Model Context Protocol](https://modelcontextprotocol.io/)
