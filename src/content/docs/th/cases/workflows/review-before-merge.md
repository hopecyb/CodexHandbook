---
legacyVerification:
  status: "verified"
  products: "CLI / IDE / Cloud"
  basis: "ตรวจสอบไขว้กับกรณีใช้งาน code review / pull request ที่ OpenAI Developers เผยแพร่ในปัจจุบัน รวมถึงบทคุณภาพ การตรวจ diff และ Cloud ที่ผ่านการยืนยันในคู่มือนี้แล้ว หน้านี้ยืนยันเฉพาะหลักการที่เสถียร ได้แก่ ‘ตรวจอย่างเป็นระบบก่อน merge ใช้สิทธิ์อ่านอย่างเดียวในการตรวจ และให้คนลงนามขั้นสุดท้าย’"
  checkedAt: "2026-07-26"
title: ตรวจสอบก่อน merge
description: ใช้ Codex ตรวจ diff และความเสี่ยงอย่างเป็นระบบก่อน merge โดยแบ่งหน้าที่คนกับระบบให้ชัด
locale: th
source_locale: zh-CN
source_revision: "78d5c03"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

**ตรวจสอบก่อน merge** คือการนำ [คุณภาพและการยืนยัน](/th/guide/quality/) มาใส่ในกระบวนการ Git ก่อน merge PR ให้ Codex ตรวจ diff การทดสอบ ความปลอดภัย และความสอดคล้องกับ specification comment อัตโนมัติไม่สามารถแทนการ merge อัตโนมัติได้

## ประเด็นสำคัญของหน้านี้

- แบ่งหน้าที่ระหว่างการตรวจในเครื่องกับ Cloud/CI
- พรอมป์ตรวจควรครอบคลุมมิติใดบ้าง
- เมื่อใดต้องให้คนลงนามขั้นสุดท้าย

## วิธีขั้นต่ำที่ใช้ได้

**ในเครื่อง (ผู้เขียนตรวจเอง)**

```text
เปรียบเทียบ diff ระหว่าง branch ปัจจุบันกับ main (ยังไม่ต้องแก้โค้ด):
1. มีส่วนใดเกินขอบเขตของ issue หรือไม่
2. มีความเสี่ยงด้านความปลอดภัยที่เห็นได้ชัดหรือไม่ (secret, injection, permission)
3. ขาดการทดสอบหรือเอกสารหรือไม่
ส่งออกเป็น checklist และระบุ P0/P1
```

**CI (ประตูของทีม)**

- ตรึงเวอร์ชันพรอมป์ + token แบบอ่านอย่างเดียว
- เขียนผลลง PR comment หรือ check run
- ดู [ระบบตรวจโค้ดอัตโนมัติ](/th/guide/developer-platform/ci-cd/code-review-automation/)

## มิติการตรวจที่แนะนำ

| มิติ | จุดที่ต้องดู |
|---|---|
| ความถูกต้อง | ตรรกะ ขอบเขต และการจัดการข้อผิดพลาด |
| การทดสอบ | พฤติกรรมใหม่มี coverage หรือไม่ |
| ความปลอดภัย | secret, injection และเบาะแสช่องโหว่ของ dependency |
| การบำรุงรักษา | การตั้งชื่อ ความซ้ำ และ public API |
| specification | ตรงกับ issue/เอกสาร specification หรือไม่ |

ใช้ร่วมกับ [ตรวจ diff](/th/guide/quality/review-diffs/) ได้ รายการความเสี่ยงสูงให้ผ่าน [รูปแบบการอนุมัติโดยคน](/th/cases/workflows/human-approval-patterns/)

## ข้อผิดพลาดที่พบบ่อย

- ให้โมเดลตอบเพียง “LGTM” โดยไม่มีหลักฐาน
- นำคำอธิบาย PR ทั้งหมดที่ยังไม่ sanitize ต่อเข้า CI prompt โดยตรง (เสี่ยง injection)
- การตรวจผ่านแต่ยังไม่ได้รันการทดสอบ CI
- เปิด Bot merge อัตโนมัติโดยไม่มี branch protection

## ขอบเขตความปลอดภัย

- ใช้สิทธิ์อ่านอย่างเดียวในการตรวจ ส่วนการแก้ต้องอยู่ใน **commit ใหม่** ที่คนเป็นผู้ trigger
- ห้ามบันทึก PII ของผู้ใช้หรือ secret ใน log การตรวจ

## Checklist การยอมรับ

- [ ] ผลการตรวจย้อนกลับไปยังไฟล์/บรรทัดที่เจาะจงได้
- [ ] ประเด็น P0 หยุดการ merge หรือได้รับการแก้แล้ว
- [ ] สอดคล้องกับ review checklist ของทีม
- [ ] maintainer ที่เป็นคนตัดสินรายการที่มีข้อโต้แย้งขั้นสุดท้าย

## บทที่เกี่ยวข้อง

- [ตรวจโค้ดบน Cloud](/th/guide/web-and-cloud/code-review/)
- [สร้าง Pull Request](/th/guide/web-and-cloud/create-pull-requests/)
