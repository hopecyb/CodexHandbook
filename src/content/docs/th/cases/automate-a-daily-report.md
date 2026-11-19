---
caseCategory: team
directoryOrder: 110
contentType: case
outputs: [markdown]
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "กรณีใช้งาน Codex ปัจจุบันใน OpenAI Developers ยังครอบคลุมงานอัตโนมัติที่ทำซ้ำได้ เช่น ‘Automate bug triage’ และ ‘Turn feedback into actions’ หน้านี้กำหนดรายงานประจำวันเป็น ‘Markdown รูปแบบตายตัว + exit code ชัดเจน + สคริปต์หรือ Skill ที่นำกลับมาใช้ได้’ ซึ่งเป็นรูปแบบเวิร์กโฟลว์อัตโนมัติที่เสถียรและไม่ผูกกับ integration ใดโดยเฉพาะ"
  checkedAt: "2026-07-26"
title: ทำรายงานประจำวันอัตโนมัติ
description: เปลี่ยนงานสรุปที่ทำซ้ำให้เป็นสคริปต์หรือ Skill ที่นำกลับมาใช้ได้
locale: th
source_locale: zh-CN
source_revision: "2149e0a"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

## ข้อมูลเมตา

| ฟิลด์ | เนื้อหา |
|---|---|
| ผู้อ่านที่เหมาะสม | ทีม |
| ไคลเอนต์ | CLI |
| เวลาโดยประมาณ | 1–2 ชั่วโมง (เวอร์ชันแรก) |

## 1. เป้าหมายและบริบท

**เป้าหมาย:** สร้างสรุปการเปลี่ยนแปลง ผลการทดสอบ และรายการสิ่งที่ต้องทำของแต่ละวันโดยอัตโนมัติ

**เกณฑ์ความสำเร็จ:** คำสั่งเดียวหรือ Skill เดียวสร้าง Markdown ในรูปแบบตายตัวได้ และเมื่อทำงานล้มเหลวต้องมี exit code ที่ชัดเจน

## 2. พรอมป์ที่แนะนำ

```text
เป้าหมาย: สร้างรายงานประจำวันแบบ Markdown ตั้งแต่เมื่อวานถึงวันนี้
เนื้อหา: สรุป git log, สถานะ CI (ถ้าอ่านได้), รายการ PR ที่เปิดอยู่
เอาต์พุต: reports/daily-YYYY-MM-DD.md
ข้อจำกัด: อ่าน git เท่านั้น ห้าม push และให้สร้าง scripts/generate-daily.sh เพื่อเรียกใช้ซ้ำ
```

## 3. เก็บไว้ใช้ซ้ำ

- [ตัวอย่าง Skill สำหรับงานอัตโนมัติ](/th/skills/examples/automation-skill/)
- [งานตามกำหนดเวลา](/th/skills/automations/scheduled-tasks/)
