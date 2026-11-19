---
caseCategory: development
directoryOrder: 70
contentType: case
outputs: [markdown]
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "กรณีใช้งาน Codex ปัจจุบันใน OpenAI Developers ยังมี ‘Review GitHub pull requests’ ซึ่งเน้นค้นหา regression และปัญหาที่อาจเกิดขึ้นก่อนการตรวจโดยคน ตัวอย่างในหน้านี้กำหนดเพียงให้ตรวจ diff อย่างเป็นโครงสร้าง พร้อมระบุ P0/P1 และพาธไฟล์ จึงไม่ผูกกับหน้าจอหรือคำสั่งตายตัว"
  checkedAt: "2026-07-26"
title: ตรวจ PR
description: ใช้ Codex ตรวจ diff อย่างเป็นระบบก่อน merge
locale: th
source_locale: zh-CN
source_revision: "84638f0"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

## ข้อมูลเมตา

| ฟิลด์ | เนื้อหา |
|---|---|
| ผู้อ่านที่เหมาะสม | นักพัฒนา / ทีม |
| ไคลเอนต์ | CLI / IDE / Cloud |
| เวลาโดยประมาณ | 20–40 นาที |

## 1. เป้าหมายและบริบท

**เป้าหมาย:** ค้นหาขอบเขตงานที่บานปลาย ความเสี่ยงด้านความปลอดภัย และช่องว่างของการทดสอบก่อน merge

**เกณฑ์ความสำเร็จ:** ผลการตรวจย้อนกลับไปยังไฟล์/บรรทัดที่เจาะจงได้ และประเด็น P0 ถูกแก้แล้วหรือใช้หยุดการ merge

## 2. พรอมป์ที่แนะนำ

```text
เปรียบเทียบ diff ระหว่าง branch ปัจจุบันกับ main (ยังไม่ต้องแก้โค้ด):
1. มีส่วนใดเกินขอบเขตของ issue หรือไม่
2. มีความเสี่ยงด้านความปลอดภัยที่เห็นได้ชัดหรือไม่ (secret, injection, permission)
3. ขาดการทดสอบหรือเอกสารหรือไม่
ส่งออกเป็น checklist ระบุ P0/P1 และแนบพาธไฟล์
```

## 3. เก็บเป็นแนวปฏิบัติของทีม

- ใช้ Skill [`$pr-review`](/th/skills/examples/review-skill/)
- ดูการเชื่อมกับ CI ที่ [ระบบตรวจโค้ดอัตโนมัติ](/th/guide/developer-platform/ci-cd/code-review-automation/)

## 4. เนื้อหาที่เกี่ยวข้อง

- [เทมเพลตการตรวจ](/th/prompts/templates/review/)
- [ตรวจสอบก่อน merge](/th/cases/workflows/review-before-merge/)
