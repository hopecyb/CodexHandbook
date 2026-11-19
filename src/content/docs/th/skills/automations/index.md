---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / Desktop App; CLI และ IDE ใช้สำหรับเตรียมและทดสอบเท่านั้น ไม่มีอินเทอร์เฟซจัดการ"
  checkedAt: "2026-08-26"
title: Scheduled tasks
description: รันงานที่ตรวจสอบแล้วซ้ำตามเวลาใน ChatGPT
locale: th
source_locale: zh-CN
source_revision: 'c6510bf'
translation_status: stale
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

Scheduled task (งานตามกำหนดเวลา) ให้ ChatGPT ทำงานซ้ำในเบื้องหลังตามแผน เหมาะกับรายงานเป็นคาบ การติดตามต่อเนื่อง และงานดูแลซ้ำ ไม่ใช่ webhook, event ของรีโพซิทอรี หรือ CI automation แบบใดก็ได้

![ภาพประกอบ: สายพานวนอยู่เหนือนาฬิกาเรือนใหญ่และปฏิทิน การ์ดงานที่ตรวจสอบแล้วรันตามเวลาและสร้างรายงาน ผู้ตรวจที่เป็นมนุษย์อ่านรายงานแล้วกดถูกใจ และกดพักได้ทุกเมื่อ](/illustrations/automations-schedule.webp)

## ตัดสินก่อนว่าเหมาะหรือไม่

| เหมาะ | ไม่เหมาะ |
|---|---|
| แหล่งอินพุตเสถียรและผลลัพธ์ตรวจทานได้ | ต้องนิยามปัญหาใหม่ทุกครั้ง |
| ขับเคลื่อนด้วยเวลาหรือช่วงห่าง | ต้องทริกเกอร์ตรงกับ event เช่น Git push หรือเปิด PR |
| การตรวจ read-only, สรุป หรือ draft | merge main branch หรือ bulk delete แบบไม่มีผู้ดูแล |
| มีเงื่อนไข “ไม่มีการเปลี่ยนแปลง” และหยุดที่ชัด | ลองใหม่ไม่สิ้นสุดหลังล้มเหลว |

## จุดจัดการปัจจุบัน

- สร้างและจัดการงานตามกำหนดเวลาใน ChatGPT Web หรือ Desktop App
- Codex CLI และ IDE extension ไม่มีอินเทอร์เฟซจัดการ Scheduled task แต่เหมาะสำหรับทดสอบพรอมป์ Skill หรือสคริปต์ก่อน
- Desktop App ให้ task ใช้โปรเจกต์ในเครื่องหรือ worktree ที่แยกได้ แต่ต้องเปิดเครื่อง App ทำงาน และโปรเจกต์ยังอยู่บนดิสก์
- Scheduled task บน Web ใช้บริบทที่อัปโหลด เครื่องมือเชื่อมต่อ Skills และ Plugins ได้ แต่เข้าถึงโฟลเดอร์ในเครื่องโดยตรงไม่ได้

## จุดเริ่มในชุดนี้

- [คู่มือ Scheduled task ฉบับเต็ม](/th/skills/automations/scheduled-tasks/): เลือกวิธีรัน เขียนพรอมป์ที่ทนทาน ตั้งสิทธิ์ และเกณฑ์การยอมรับ

## แหล่งข้อมูลทางการ

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)
