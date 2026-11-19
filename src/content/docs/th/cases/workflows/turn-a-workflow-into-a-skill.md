---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE"
  basis: "ตรวจสอบไขว้กับกรณีใช้งาน ‘Save workflows as skills’ ที่ OpenAI Developers เผยแพร่ในปัจจุบัน รวมถึงบท Skills ระบบอัตโนมัติ กติกาคำสั่ง และความเสี่ยงของส่วนขยายที่ผ่านการยืนยันในคู่มือนี้แล้ว เนื้อหาหน้านี้จำกัดอยู่ที่วิธีที่เสถียร ได้แก่ ‘เมื่อใดควรจัดกระบวนการซ้ำเป็น Skill และวิธีจัดคำอธิบายกับเกณฑ์ยอมรับ’"
  checkedAt: "2026-07-26"
title: จัดเวิร์กโฟลว์เป็น Skill
description: กระบวนการที่ทำซ้ำเป็นครั้งที่สามควรเขียนเป็น Skill โดยรวม trigger คำอธิบาย และเกณฑ์ยอมรับไว้ด้วยกัน
locale: th
source_locale: zh-CN
source_revision: "3dd18c5"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

เมื่อทำงานประเภทเดียวกัน (ตรวจการเผยแพร่ ซิงก์เอกสาร สแกนความปลอดภัย) ด้วยการคัดลอกพรอมป์เป็น **ครั้งที่สาม** ควรพิจารณา [Skill](/th/skills/overview/) บทนี้เชื่อม [วิธีจัดเวิร์กโฟลว์](/th/cases/workflows/) กับระบบส่วนขยาย

## หน้านี้แก้ปัญหาอะไร

- เมื่อใดควรยกระดับจากเทมเพลตพรอมป์เป็น Skill
- Skill ควรมีส่วนใดบ้าง (คำอธิบาย ทรัพยากร สคริปต์)
- แชร์และจัดเวอร์ชันร่วมกับทีมอย่างไร

## สัญญาณว่าเหมาะจะเก็บเป็น Skill

- ขั้นตอนตายตัว + checklist การยอมรับตายตัว
- ต้องอ้างเทมเพลตหรือสคริปต์ใน repository
- หลายคนต้องการพฤติกรรมที่สอดคล้องกัน
- ต้องการให้โมเดล **นึกถึง** กระบวนการนี้อัตโนมัติเมื่องานเกี่ยวข้อง

ไม่ต้องเก็บ: การสำรวจครั้งเดียว หรือการแก้เล็กน้อยที่พึ่งบริบทของวันนั้นมาก

## วิธีขั้นต่ำที่ใช้ได้

1. **เขียน SKILL.md ให้ชัด:** trigger เมื่อใด อินพุต/เอาต์พุต และข้อห้าม
2. **แนบ `references/`:** checklist และตัวอย่าง diff
3. **`scripts/` แบบเลือกทำ:** คำสั่งยืนยันที่รันซ้ำได้และสอดคล้องกับ [กติกาคำสั่ง](/th/guide/customization/rules/command-rules/)
4. **กล่าวถึงใน README หรือ AGENTS.md ของ repository:** ชื่อ Skill
5. **ทดลองรัน 2–3 ครั้ง** แล้วจึงระบุ `verified`

เริ่มต้น: [สร้าง Skill แรก](/th/skills/create-your-first-skill/)

## เวิร์กโฟลว์ที่แนะนำ

```text
สกัดพรอมป์และเกณฑ์ยอมรับจากกรณีที่สำเร็จ
    → ย่อเป็นเนื้อหา Skill (ลบภาษาสนทนา เก็บข้อจำกัด)
    → เพิ่มคำอธิบาย trigger (“ก่อน merge” “ก่อนเผยแพร่”)
    → ทีม review PR
    → เขียนลงไดเรกทอรี examples/ ที่ repository กำหนด Plugin ของทีม หรือคลัง Skill ภายใน
```

เทียบกับ [เปลี่ยนกระบวนการเป็นระบบอัตโนมัติ](/th/skills/automations/scheduled-tasks/): Skill เน้น **คำแนะนำแบบโต้ตอบ** ส่วน Automation เน้น **ตามกำหนดเวลา/ไร้ผู้ดูแล**

## ข้อผิดพลาดที่พบบ่อย

- Skill ยาวจนอ่านเหนื่อยกว่า `AGENTS.md`
- ไม่มี checklist การยอมรับ ทำให้คุณภาพการทำงานแกว่ง
- สคริปต์ต้องใช้ secret ในเครื่อง แต่ไม่เขียนคำอธิบาย SECURITY
- ซ้ำและขัดกับกติกา Hooks

## ขอบเขตความปลอดภัย

- ดู [ความปลอดภัยและเวอร์ชันของ Skill](/th/skills/security/)
- Skill ของทีมควรอยู่ในรายการส่วนขยายที่อนุมัติ (ดู [ความเสี่ยงของ Plugin และ MCP](/th/guide/team-enterprise/security/plugin-and-mcp-risk/))

## Checklist การยอมรับ

- [ ] สมาชิกใหม่ทำงานหนึ่งครั้งสำเร็จด้วย Skill เพียงอย่างเดียว
- [ ] เงื่อนไข trigger ชัดเจนและไม่เรียกผิดบ่อย
- [ ] มีเวอร์ชันหรือ CHANGELOG (ระดับทีม)
- [ ] cross-link กับเอกสารเวิร์กโฟลว์ต้นทาง

## แหล่งอ้างอิง
- [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md) และ [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md) ใน repository
