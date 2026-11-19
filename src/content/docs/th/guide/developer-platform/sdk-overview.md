---
title: "ภาพรวม SDK: งานในเครื่องและการผสานรวมไคลเอนต์"
description: "แยกความแตกต่างระหว่าง Codex SDK, CLI แบบไม่โต้ตอบ, App Server และบริการงานระยะไกลที่สร้างเอง"
locale: th
source_locale: zh-CN
source_revision: "e888ae6"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
contentType: reference
audiences: [developer]
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "ตรวจตำแหน่งทำงาน thread interface และขอบเขต integration เทียบกับเอกสาร SDK และ App Server ทางการแล้ว ตัวอย่างขั้นต่ำผ่านเฉพาะการตรวจ syntax และยังไม่ได้เรียกโมเดลด้วยการยืนยันตัวตน"
  evidence:
    - label: "เอกสาร Codex SDK ทางการ"
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: "เอกสาร Codex App Server ทางการ"
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
---

Codex SDK ให้โปรแกรมควบคุม Codex Agent ในเครื่อง คำว่า “ในเครื่อง” หมายถึงเครื่องที่รัน SDK/Agent ซึ่งอาจเป็นคอมพิวเตอร์ของคุณหรือ CI runner ที่คุณดูแล อย่าตีความว่าเป็นบริการ HTTP ที่ OpenAI ให้บริการสำหรับ “สร้างงาน Cloud, poll งาน และดาวน์โหลด artifact” โดยตรง ดู [คำอธิบาย SDK ทางการ](https://learn.chatgpt.com/docs/codex-sdk)

## เลือกจุดเข้าตามเป้าหมาย integration

| เป้าหมาย | จุดเริ่มต้น | สิ่งที่ยังต้องรับผิดชอบเอง |
|---|---|---|
| รันงานครั้งเดียวในสคริปต์ | [codex exec](/th/guide/developer-platform/non-interactive/codex-exec/) | working directory, input, exit status และการเก็บผลลัพธ์ |
| รันและทำงานต่อในโปรแกรม | Codex SDK | วงจรชีวิตโปรแกรม สภาพแวดล้อม การจัดการความล้มเหลว และการตรวจสอบ |
| สร้างไคลเอนต์ที่มี session การอนุมัติ และ streaming event | App Server | การโต้ตอบของไคลเอนต์ การเชื่อมต่อ การจัดการตัวตน และ deployment |
| ให้บริการแพลตฟอร์มงานระยะไกลหลายผู้ใช้ | สถาปัตยกรรมบริการที่สร้างเอง | queue, tenant isolation, credential, storage, การยกเลิก และ callback |

แถวสุดท้ายเป็นทางเลือกเชิงวิศวกรรม ไม่ใช่ความสามารถแพลตฟอร์ม managed ที่ SDK มีให้ในตัว เอกสารทางการใช้ SDK สำหรับ automation และ CI ส่วน App Server ใช้กับไคลเอนต์ที่ผสานรวมลึกกว่า โดยแลกเปลี่ยน request และ event ผ่าน JSON-RPC สองทาง ดู [เอกสาร App Server](https://learn.chatgpt.com/docs/app-server)

## การเรียก TypeScript SDK ขั้นต่ำ

แพ็กเกจ TypeScript ทางการชื่อ `@openai/codex-sdk` และต้องใช้ Node.js 18 ขึ้นไป ตัวอย่างนี้ใช้ syntax ของ JavaScript module เพื่อแสดง interface พื้นฐานของแพ็กเกจเดียวกัน ไม่ใช่บริการ production ที่สมบูรณ์

ติดตั้ง dependency ในไดเรกทอรีฝึกเฉพาะ และเก็บเวอร์ชันที่ resolve จริงกับ lockfile:

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

เตรียม `README.md` ที่ไม่มีข้อมูลอ่อนไหว แล้วบันทึกเนื้อหาต่อไปนี้เป็น `example.mjs`:

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  'อ่านเฉพาะ README.md ในไดเรกทอรีปัจจุบัน และสรุปวัตถุประสงค์เป็นภาษาจีน 3 ข้อ ห้ามแก้ไฟล์หรือดำเนินการภายนอก'
);
console.log(answer.finalResponse);
```

จากนั้นรัน `node example.mjs` ก่อนรันต้องยืนยันตัวตนตามสภาพแวดล้อมที่เลือก และตรวจการตั้งค่า sandbox กับการอนุมัติจริง คำว่า “อ่านอย่างเดียว” ใน prompt เป็นข้อจำกัดของงาน ไม่ได้แทนข้อจำกัดของสภาพแวดล้อมการทำงาน การเรียกโมเดลอาจใช้โควตาบัญชี บทความนี้ไม่ได้ติดตั้งหรือเรียกโมเดลแทนคุณ

ตรวจชื่อ method และ return field เทียบกับ [ตัวอย่างทางการ](https://learn.chatgpt.com/docs/codex-sdk) แล้ว เว็บไซต์นี้ตรวจเฉพาะ syntax ของ JavaScript ไม่ได้ล็อกและทดสอบ SDK release ใดโดยเฉพาะ และไม่ได้สร้าง output สำเร็จปลอม เมื่อทดลองจริง ให้บันทึกเวอร์ชันแพ็กเกจ CLI/runtime ระบบ วิธีการยืนยันตัวตนโดยไม่เก็บ credential และผลลัพธ์

## ทำงานต่อและกู้คืนงาน

เรียก `run()` ซ้ำบน thread object เดิมได้ และส่ง thread ID ที่มีอยู่ให้ `resumeThread()` เพื่อกู้คืน ความสามารถในการกู้คืน thread ขึ้นอยู่กับสภาพแวดล้อมเก็บสถานะ อย่าถือว่า ID เป็น Cloud URL ที่ค้นจากเครื่องใดก็ได้ นอกจากนี้ยังมี Python interface ทางการ ให้ตรวจชื่อ interface และ dependency ในหัวข้อของแต่ละภาษา และอย่าผสมโค้ดสองภาษา ดู [การเรียก thread และ interface แต่ละภาษา](https://learn.chatgpt.com/docs/codex-sdk)

หลังการกู้คืน ให้ตรวจว่าไฟล์ปัจจุบันตรงกับคำอธิบายในประวัติหรือไม่ ดู [การส่งต่องานและกู้คืน](/th/guide/agent-work/handoff-and-resume/)

## ตรวจอะไรหลังเรียกสำเร็จ

1. **ตำแหน่งทำงาน**: บันทึก working directory และไฟล์ที่อ่านหรือแก้จริง ไม่ใช่เฉพาะ prompt
2. **ผลลัพธ์ของงาน**: ตรวจคำตอบ diff และการทดสอบ การได้รับ `finalResponse` ไม่ได้แปลว่าผ่านการตรวจรับทางธุรกิจ
3. **ประเภทความล้มเหลว**: แยกปัญหา dependency/process ในเครื่อง การยืนยันตัวตน บริการโมเดล และการตรวจสอบงาน อย่ารวมทุกข้อผิดพลาดเป็น 400/429
4. **ผลกระทบของการลองใหม่**: ตรวจว่ามีไฟล์หรือผลกระทบภายนอกเกิดขึ้นแล้วหรือไม่ ก่อนตัดสินใจลองใหม่ อย่าส่ง request เดิมซ้ำอย่างเดียว
5. **สิทธิ์**: คุณรับผิดชอบสภาพแวดล้อมและเครื่องมือที่ใช้ได้ อย่าอนุมานจากชื่อ SDK ว่าจะได้รับ Cloud การจัดการองค์กร หรือ tenant isolation โดยอัตโนมัติ

รายการเหล่านี้เป็นคำแนะนำของเว็บไซต์สำหรับตรวจ integration ไม่ใช่รายการ return field ของ SDK ให้ยึด type ของเวอร์ชันที่ติดตั้งและเอกสารทางการเป็นหลัก

## ความสัมพันธ์กับ callback, queue และการทำงานระยะไกล

คุณสามารถให้ runner ของตนรัน SDK แล้วให้บริการของตนส่งการแจ้งเตือนเมื่อเสร็จ ในกรณีนี้สถานะ queue, HTTP callback, รูปแบบลายเซ็น และนโยบายลองใหม่เป็น protocol ของระบบคุณเอง สตรีม event ของ App Server ก็ใช้เป็นที่อยู่ Webhook โดยตรงไม่ได้

อ่านต่อที่ [ขอบเขตของ Webhook และ event งาน](/th/guide/developer-platform/webhooks/overview/) และ [สคริปต์และ pipeline](/th/guide/developer-platform/non-interactive/scripts-and-pipelines/) หน้านี้ไม่รับรองว่าการเรียก SDK จะสร้างงาน Codex Cloud โดยอัตโนมัติ สร้าง artifact URL หรือมอบสิทธิ์ OAuth
