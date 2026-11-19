---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "ตรวจสอบไขว้กับบทการระดมความคิด EPXV test-driven และ `AGENTS.md` ที่ผ่านการยืนยันในคู่มือฉบับปัจจุบันแล้ว เนื้อหาหน้านี้จำกัดอยู่ที่วิธีทำงานที่เสถียร คือ ‘เขียน specification ที่ยอมรับได้ก่อน แล้วจึงทำตาม specification’"
  checkedAt: "2026-07-26"
title: งานที่ขับเคลื่อนด้วย specification
description: เขียน specification ที่ยอมรับได้ให้ชัดก่อน แล้วให้ Codex implement ตามแผน เหมาะกับงานส่งมอบที่ข้อกำหนดชัดเจน
locale: th
source_locale: zh-CN
source_revision: "70fd8a4"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

**ขับเคลื่อนด้วย specification** หมายถึงเตรียม specification สั้น ๆ ก่อนแก้ไฟล์จำนวนมาก โดยระบุเป้าหมาย ขอบเขต interface และเกณฑ์ยอมรับให้ชัด ใช้ต่อจาก [การระดมความคิด](/th/cases/workflows/brainstorm-before-building/) หรือเข้าสู่ [EPXV](/th/cases/workflows/explore-plan-execute-verify/) โดยตรงเมื่อข้อกำหนดชัดแล้วก็ได้

## ประเด็นสำคัญของหน้านี้

- specification ต้องละเอียดเพียงใดจึงพอ
- ให้ Codex ทำตาม specification โดยไม่ขยาย scope เองอย่างไร
- ความสัมพันธ์ระหว่าง specification กับคำอธิบาย PR และ issue

## เทมเพลต specification ขั้นต่ำ

```markdown
## เป้าหมาย
คุณค่าต่อผู้ใช้หนึ่งประโยค

## ขอบเขต
- รวม: …
- ไม่รวม: …

## Interface/พฤติกรรม
- อินพุต / เอาต์พุต / กรณีข้อผิดพลาด

## เกณฑ์ยอมรับ
- [ ] รายการที่ตรวจอัตโนมัติได้
- [ ] รายการที่ต้องให้คนตรวจ

## ข้อจำกัด
- โมดูลที่ห้ามแก้ ประสิทธิภาพ ความเข้ากันได้
```

เก็บเทมเพลตไว้ใน `docs/specs/` ของ repository หรือในเนื้อหา issue แล้วอ้างด้วย `@` ในงานได้

## เวิร์กโฟลว์ที่แนะนำ

```text
① ร่าง specification (Codex ช่วยได้ คนตรวจ)
② ยืนยัน specification → ตอบ “ทำตาม specification”
③ ลงมือเป็นขั้น และเทียบกับเกณฑ์ยอมรับทุกขั้น
④ การเปลี่ยน specification ต้องแก้หมายเลขเวอร์ชันหรือ changelog อย่างชัดเจน
```

ตัวอย่างพรอมป์:

```text
อ่าน @docs/specs/export-csv.md เทียบ specification แล้วแสดงแผน implementation กับความเสี่ยงก่อน
ห้ามเพิ่มความสามารถที่ specification ไม่ได้ระบุ รอฉันยืนยันแล้วค่อยเขียนโค้ด
```

## ใช้ร่วมกับ test-driven

เกณฑ์ยอมรับใน specification ควร **ทดสอบได้** มากที่สุด รายการที่เขียนเป็นการทดสอบได้ให้เขียนการทดสอบก่อน ดู [งานแบบ test-driven](/th/cases/workflows/test-driven-work/)

## ข้อผิดพลาดที่พบบ่อย

- specification ยาวเหมือนเอกสารออกแบบจนหาข้อจำกัดสำคัญไม่พบ
- ขอบเขตค่อย ๆ โตระหว่างลงมือ แต่ไม่อัปเดต specification
- เกณฑ์ยอมรับคลุมเครือ (“ใช้ง่ายขึ้น”) จนถกเถียง
- specification ขัดกับข้อตกลงสถาปัตยกรรมใน `AGENTS.md`

## ขอบเขตความปลอดภัย

- เฉพาะข้อความ “อนุญาตให้เรียก external API” ใน specification เท่านั้นที่อนุญาต implementation ซึ่งใช้เครือข่าย
- การจัดการฟิลด์ที่มี PII ต้องระบุใน specification

## Checklist การยอมรับ

- [ ] ระบุเรื่องนอกขอบเขตอย่างชัดเจน
- [ ] มีเกณฑ์ยอมรับที่ตรวจได้อย่างน้อย 3 ข้อ
- [ ] มีการยืนยันจากคนหรือลายลักษณ์อักษรก่อนลงมือ
- [ ] ซิงก์การเปลี่ยนแปลงกลับไปยังไฟล์ specification แล้ว
