---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: การแก้ปัญหา Cloud
description: วิเคราะห์ความล้มเหลวของ Cloud ตามห้าชั้น ได้แก่ repository, setup, เครือข่าย, Agent และการส่งมอบ
locale: th
source_locale: zh-CN
source_revision: "019fac1"
translation_status: stale
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 80
---

การลอง Cloud ใหม่ใช้เวลาอีกครั้ง แต่ไม่เติมสิทธิ์ dependency หรือการกำหนดค่าเครือข่ายที่ขาดให้อัตโนมัติ ให้ระบุก่อนว่าความล้มเหลวเกิดในขั้นใด

## การวิเคราะห์ห้าชั้น

| ขั้น | อาการทั่วไป | จุดตรวจแรก |
|---|---|---|
| การเชื่อม repository | repository ไม่อยู่ในรายการ, 403 หรือไม่มี branch | ขอบเขตสิทธิ์ GitHub นโยบายองค์กร และ branch เริ่มต้น |
| Container/setup | `command not found` หรือติดตั้ง dependency ไม่สำเร็จ | runtime ที่ตรึงไว้, setup script และ Secret |
| เครือข่าย Agent | setup ดาวน์โหลดได้ แต่ Agent ใช้ `curl` ไม่ได้ | Agent access เป็น Off โดยค่าเริ่มต้น, allowlist และ HTTP method |
| การทำงานของ Agent | แก้ไขผิดทิศทางหรือไม่มีคำสั่งทดสอบ | ขอบเขตพรอมต์, `AGENTS.md` และ log การทำงาน |
| การส่งมอบ | diff ไม่ครบหรือเปิด PR ไม่ได้ | สถานะ branch สิทธิ์เขียน และกฎป้องกัน |

## เก็บหลักฐานก่อน

บันทึก repository, commit เริ่มต้น, ชื่อสภาพแวดล้อม, ขั้นที่ล้มเหลว, ข้อผิดพลาดแรกที่มีความหมาย และคำสั่งเต็ม อย่าเก็บเพียงข้อความสุดท้ายว่า “exit 1”

```text
สภาพแวดล้อม: api-node22
จุดเริ่มต้น: main@abc123
ขั้น: setup
คำสั่ง: pnpm install --frozen-lockfile
ข้อผิดพลาดแรก: ERR_PNPM_FETCH_401 ...
ความต่างจากในเครื่อง: เครื่องใช้ ~/.npmrc แต่ Cloud ไม่ได้กำหนด NPM_TOKEN
```

บันทึกแบบนี้ชี้ไปยังวิธีแก้ได้โดยตรง แทนการให้รอบถัดไปคาดเดาใหม่

## ปัญหาที่พบบ่อย

### setup อ่าน Secret ได้ แต่ Agent เห็นค่าว่าง

นี่เป็นพฤติกรรมตามการออกแบบ: Secret ถูกนำออกก่อนขั้น Agent ให้วางการติดตั้งที่ใช้ข้อมูลประจำตัวไว้ใน setup และอย่าเปลี่ยนเป็นตัวแปรสภาพแวดล้อมทั่วไปเพื่อข้ามการป้องกัน

### setup เชื่อมอินเทอร์เน็ตได้ แต่ Agent เชื่อมไม่ได้

นี่ก็เป็นพฤติกรรมเริ่มต้น หากงานต้องให้ Agent เชื่อมต่อจริง ให้เปิดในการตั้งค่าสภาพแวดล้อม จำกัดโดเมนกับ HTTP method แล้วตรวจ log ภายหลัง

### Cache ทำให้ dependency เก่า

การแก้ setup, maintenance, ตัวแปร หรือ secrets จะทำให้ cache หมดอายุอัตโนมัติ หากการเปลี่ยนแปลงใน repository ทำให้ cache ใช้ร่วมกันไม่ได้ ให้กด Reset cache ในหน้าสภาพแวดล้อม สำหรับสภาพแวดล้อมที่ทีมใช้ร่วมกัน ให้ประเมินผลต่อผู้ใช้อื่นก่อน

### ในเครื่องผ่าน แต่ Cloud ไม่ผ่าน

เปรียบเทียบเวอร์ชัน Node/Python, lockfile, system dependency, การกำหนดค่าที่ซ่อนในเครื่อง, บริการ VPN/localhost และพาธที่แยกตัวพิมพ์เล็กใหญ่ เปลี่ยนความแตกต่างเหล่านี้ให้เป็น setup และกฎ repository ที่ชัดเจน

### PR review ไม่ทำงาน

ยืนยันว่าได้กำหนด Cloud ให้ repository เปิด Code review แล้ว ความคิดเห็นคือ `@codex review` และตรวจสิทธิ์การเชื่อมต่อ GitHub ส่วน automatic reviews ต้องเปิดแยกต่างหาก

## เมื่อใดควรกลับมาทำในเครื่อง

หากปัญหาพึ่งบริการบนเครื่อง หรือสองรอบติดต่อกันหมดไปกับการแก้สภาพแวดล้อมแทนโค้ดธุรกิจ ให้สร้างกรณีทำซ้ำขั้นต่ำในเครื่องก่อน แล้วเขียนคำสั่ง เวอร์ชัน และการทดสอบที่สำเร็จกลับเข้า `AGENTS.md`/setup ก่อนมอบให้ Cloud อีกครั้ง

## ตรวจรับหลังแก้ไข

- [ ] สภาพแวดล้อมเดียวกันรันซ้ำจากจุดเริ่มต้นที่สะอาดได้
- [ ] ไม่ใช้สิทธิ์ repository ที่กว้างขึ้นหรือเครือข่าย unrestricted เพื่อกลบปัญหา
- [ ] log ไม่รั่ว Secret
- [ ] diff และการทดสอบยังผ่านการ Review โดยมนุษย์

## แหล่งข้อมูลทางการ

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
