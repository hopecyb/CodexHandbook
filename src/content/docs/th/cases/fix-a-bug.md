---
legacyVerification:
  status: "verified"
  products: "CLI / IDE"
  basis: "หน้านี้ทำหน้าที่เป็นทางเข้า จึงดูแลเฉพาะการเลือกเส้นทางและวงจรวิศวกรรมที่เสถียร คำสั่งที่คาดว่าจะล้มเหลวและผ่านในตัวอย่างได้รับการรันยืนยันใน repository ปัจจุบันแล้ว"
  checkedAt: "2026-08-25"
title: แก้ Bug เริ่มจากตรงไหน
description: เลือกเส้นทางแก้ Bug ให้เหมาะกับปัญหา แล้วไปยังกรณีศึกษาเต็มพร้อมสื่อที่รันได้
locale: th
source_locale: zh-CN
source_revision: "405a687"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

หน้านี้เป็นทางเข้าสั้น ๆ ขั้นตอนเต็ม โค้ดที่รันได้ หลักฐานการทดสอบแดง-เขียว และพรอมป์รายช่วงถูกรวมไว้ที่ [การแก้ Bug พร้อมการยืนยันผล](/th/cases/use-cases/software-development/fix-a-bug-with-verification/) เพื่อไม่ให้สองหน้าซ้ำกันและค่อย ๆ ขัดแย้งกัน

## ก่อนอื่น ดูว่าตอนนี้คุณขาดขั้นตอนไหน

| สถานการณ์ปัจจุบัน | เริ่มจากที่นี่ |
|---|---|
| รู้เพียงว่า “ผลลัพธ์ผิด” แต่ยังทำซ้ำไม่ได้อย่างเสถียร | [วินิจฉัยก่อนแก้](/th/cases/workflows/diagnose-before-fixing/) |
| มีการทดสอบที่ล้มเหลวอย่างเสถียรแล้ว | [การแก้ Bug พร้อมการยืนยันผล](/th/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| ยังไม่คุ้นกับโมดูลที่เกี่ยวข้อง | [ทำความเข้าใจ codebase](/th/cases/understand-a-codebase/) |
| แก้เสร็จแล้วและเตรียม merge | [ตรวจ PR](/th/cases/review-a-pr/) |
| ตัวการทดสอบเองไม่เสถียร | อ่าน [การรันทดสอบ](/th/guide/quality/run-tests/) ก่อน อย่าใช้ flaky test เป็นหลักฐานว่าแก้แล้ว |

## วงจรขั้นต่ำ

ไม่ว่าจะใช้ภาษาหรือเฟรมเวิร์กใด ต้องรักษาห่วงโซ่หลักฐานนี้ไว้:

1. ทำให้ปัญหาเดิมเกิดซ้ำอย่างเสถียรด้วยคำสั่งที่ชัดเจน
2. เก็บ assertion ที่ล้มเหลว เอาต์พุตข้อผิดพลาด และเงื่อนไขอินพุต
3. อธิบายสาเหตุต้นตอก่อน แล้วจึงแก้ให้น้อยที่สุด
4. ทำให้การทดสอบเดิมที่ล้มเหลวและการทดสอบขอบเขตที่เพิ่มใหม่ผ่าน
5. รันการตรวจ regression ในขอบเขตที่กว้างขึ้น
6. อ่าน diff ด้วยคนและยืนยันว่าไม่มีการเปลี่ยนแปลงที่ไม่เกี่ยวข้อง

มีเพียงขั้นที่ 4 แต่ไม่มีขั้นที่ 1 ยังพิสูจน์ไม่ได้ว่าการทดสอบครอบคลุมปัญหาเดิม และมีเพียง “การทดสอบทั้งหมดเป็นสีเขียว” แต่ไม่ตรวจ diff ก็ยังพิสูจน์ไม่ได้ว่าขอบเขตการแก้ไขถูกต้อง

## แบบฝึกที่รันได้ทันที

repository มีตัวอย่างส่วนลดรถเข็น JavaScript ที่ไม่พึ่งแพ็กเกจภายนอก:

```bash
# โค้ดเริ่มต้น: คาดว่า 1 การทดสอบจะล้มเหลว
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# การแก้อ้างอิง: คาดว่าทั้ง 3 การทดสอบจะผ่าน
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

สื่อฉบับเต็มอยู่ที่ [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix)
