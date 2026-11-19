---
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
title: "เทอร์มินัลในตัว"
description: "รันคำสั่งในโปรเจกต์หรือ worktree ปัจจุบัน และใช้ output จริงตรวจสอบผลลัพธ์ของงาน"
locale: th
source_locale: zh-CN
source_revision: "727e93e"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 60
---

แต่ละแชตใน ChatGPT Desktop App มีเทอร์มินัลซึ่งทำงานภายในโปรเจกต์หรือ worktree ปัจจุบัน เทอร์มินัลไม่ได้มีไว้เพียง “ดู log” แต่เป็นหน้าต่างหลักฐานสำหรับตรวจข้อสรุปของ Codex

เปิดได้จากไอคอนเทอร์มินัลมุมขวาบนของแอป หรือกด `Ctrl` พร้อมปุ่ม backtick ChatGPT อ่าน output ปัจจุบันของเทอร์มินัลได้ คุณจึงขอให้ช่วยวิเคราะห์ build ที่ล้มเหลวหรือ development server ที่กำลังทำงานได้

## ขั้นตอนตรวจสอบขั้นต่ำ

ในโปรเจกต์ JavaScript ให้รันตามลำดับ:

```bash
git status --short
pnpm test
pnpm run lint
```

แต่ละโปรเจกต์ใช้คำสั่งต่างกัน ควรตรวจ `README.md`, `package.json` หรือกฎของโปรเจกต์ก่อน ใส่คำสั่งที่ยืนยันแล้วลงในพรอมต์:

```text
หลังแก้ไข โปรดรัน pnpm test และ pnpm run lint
รายงาน exit status ของแต่ละคำสั่ง หากมีคำสั่งใดล้มเหลว อย่าอ้างว่างานเสร็จ
```

อย่างน้อยให้บันทึกว่า รันอะไร สำเร็จหรือไม่ ข้อผิดพลาดที่มีความหมายรายการแรกคืออะไร และไม่ได้รันการตรวจใดบ้าง

## จัดการ process ที่ทำงานนานอย่างไร

development server จะทำงานต่อเนื่อง ซึ่งไม่ได้แปลว่าคำสั่งค้าง หลังเริ่มแล้วให้ตรวจ:

- output แสดงที่อยู่ในเครื่องหรือไม่
- เปิดหน้าในเบราว์เซอร์ได้หรือไม่
- หลังจากนั้นเทอร์มินัลมี runtime error หรือไม่

ส่ง interrupt signal เมื่อต้องการหยุด อย่าเปิด server ซ้ำหลายตัวเพียงเพราะยังไม่มี output ใหม่ชั่วคราว

## Action ที่ใช้ซ้ำได้

หากรันคำสั่งเดิมบ่อย คุณสามารถกำหนด Action ใน local environment ได้ Action จะเป็นคำสั่งลัดใน Desktop App และทำงานในเทอร์มินัลในตัว เหมาะสำหรับรวมการตรวจความเสี่ยงต่ำ เช่น `test`, `lint` และ `build` แต่ไม่ควรใช้ซ่อนขั้นตอน deploy production หรือทำความสะอาดฐานข้อมูล

## ขอบเขตความปลอดภัย

- อย่าวาง production secret ในแชตหรือประวัติเทอร์มินัล
- หากไม่เข้าใจคำสั่ง ให้ขอคำอธิบายเป้าหมาย ขอบเขตผลกระทบ และวิธีย้อนกลับก่อน
- อย่ารันคำสั่งลบ migration หรือ deploy ซ้ำใน production โดยไม่ตรวจสอบ
- การรันได้ในเทอร์มินัลไม่ได้แปลว่าได้รับอนุมัติทางธุรกิจแล้ว

คำสั่งที่เอกสารทางการยกตัวอย่าง ได้แก่ `git status`, `git pull --rebase`, การทดสอบ และ lint แต่โปรเจกต์นี้ต้องยึดเอกสารของตนเป็นแหล่งคำสั่งสุดท้าย

## แหล่งอ้างอิงทางการ

- [Integrated terminal](https://learn.chatgpt.com/docs/integrated-terminal)
- [Local environments](https://learn.chatgpt.com/docs/environments/local)
