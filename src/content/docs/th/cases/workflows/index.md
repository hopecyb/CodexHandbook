---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "ตรวจสอบไขว้กับบทพรอมป์ คุณภาพ งานของ Agent และ Skills ที่ผ่านการยืนยันในคู่มือฉบับปัจจุบันแล้ว หน้านี้ทำหน้าที่นำทางวิธีการและอธิบายจุดตรวจตามช่วงเท่านั้น ไม่ถือว่าขั้นตอนของไคลเอนต์ใดเป็นสัญญาระยะยาว"
  checkedAt: "2026-07-26"
title: วิธีจัดเวิร์กโฟลว์
description: วิธีทำงานร่วมกันที่ทำซ้ำได้ ไม่ผูกกับหน้าจอผลิตภัณฑ์เดียว และเน้นจุดตรวจและการยอมรับ
locale: th
source_locale: zh-CN
source_revision: "d058896"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

[พรอมป์](/th/prompts/) สอนวิธี **พูด** ส่วนเวิร์กโฟลว์สอนวิธี **จัดงานหนึ่งชิ้นให้ครบ** วิธีในบทนี้ใช้กับ App, CLI, IDE และ Cloud

## เหตุใดจึงต้องมีเวิร์กโฟลว์

บทเรียนภายนอกมักเล่าแบบ “จบได้ในบทสนทนาเดียว” แต่โปรเจกต์จริงมักเป็น:

```text
สำรวจ → วางแผน → ลงมือ → ยืนยันผล → (อาจ) ส่งต่อหรือทำเป็นอัตโนมัติ
```

หากไม่มีจุดตรวจ จะเกิดปัญหาง่าย เช่น แก้ผิดไดเรกทอรี ไม่รันทดสอบ merge ผิด หรือบริบทเต็มแล้วข้อสรุปหาย

## เวิร์กโฟลว์หลัก

| เวิร์กโฟลว์ | แก้ปัญหาอะไร |
|---|---|
| [สำรวจ—วางแผน—ลงมือ—ยืนยันผล](/th/cases/workflows/explore-plan-execute-verify/) | เส้นทางหลักทั่วไป เหมาะกับงานส่วนใหญ่ |
| [ระดมความคิดก่อนลงมือ](/th/cases/workflows/brainstorm-before-building/) | ขยายและคัดทางเลือกเมื่อแนวทางยังไม่ชัด |
| [งานที่ขับเคลื่อนด้วย specification](/th/cases/workflows/specification-driven-work/) | เขียน specification ที่ยอมรับได้ก่อน implement |
| [งานแบบ test-driven](/th/cases/workflows/test-driven-work/) | ใช้การทดสอบนำ implementation |
| [รูปแบบการอนุมัติโดยคน](/th/cases/workflows/human-approval-patterns/) | เมื่อใดควรหยุด อนุมัติ หรือปฏิเสธ |
| [วินิจฉัยก่อนแก้](/th/cases/workflows/diagnose-before-fixing/) | ป้องกันการ “เดาแล้วแก้” |
| [ตรวจสอบก่อน merge](/th/cases/workflows/review-before-merge/) | ตรวจอย่างเป็นระบบก่อน merge PR |
| [การวิจัยพร้อมแหล่งอ้างอิง](/th/cases/workflows/research-with-sources/) | ค้น เปรียบเทียบ และยืนยันแหล่งข้อมูล |
| [เริ่มจากผลงาน](/th/cases/workflows/artifact-first-work/) | ตกลงผลงานก่อน แล้วย้อนหาขั้นตอน |
| [การทำงานร่วมกันของ Agent หลายตัว](/th/cases/workflows/multi-agent-coordination/) | ทำงานขนานและแบ่งหน้าที่ |
| [จัดการงานระยะยาว](/th/cases/workflows/long-running-task-management/) | จุดตรวจข้าม session และเงื่อนไขออก |
| [การกู้คืนจากความล้มเหลว](/th/cases/workflows/failure-recovery/) | ย้อนกลับเมื่องานหลุดทิศหรือการทดสอบแดง |
| [จัดเป็น Skill](/th/cases/workflows/turn-a-workflow-into-a-skill/) | เขียนกระบวนการซ้ำเป็น Skill |

## บทอื่นที่เกี่ยวข้องกับเวิร์กโฟลว์

- คุณภาพ: [ความสามารถหลัก · คุณภาพและการยืนยัน](/th/guide/quality/)
- Agent: [การวางแผน](/th/guide/agent-work/planning/), [Agent ย่อย](/th/guide/agent-work/subagents/)
- การเก็บใช้ซ้ำ: [Skill](/th/skills/overview/), [AGENTS.md](/th/guide/customization/agents-md/what-is-agents-md/)
- กรณีศึกษา: [สถานการณ์และคลังกรณีศึกษา](/th/cases/use-cases/)

## หลักการออกแบบ

1. **แต่ละช่วงมีผลงาน:** แผน diff รายงานการทดสอบ และบันทึกการตัดสินใจ
2. **ทำทีละน้อยเป็นค่าเริ่มต้น:** การเพิ่มทีละส่วนที่ตรวจได้ดีกว่าการเปลี่ยนครั้งใหญ่ครั้งเดียว
3. **กู้คืนได้เมื่อผิดพลาด:** รู้วิธีย้อนและวิธี fork thread เพื่อทำต่อ
4. **หากเก็บใช้ซ้ำได้ ให้ทำ:** กระบวนการที่เกิดครั้งที่สามให้เขียนเป็น Skill หรือเทมเพลต
