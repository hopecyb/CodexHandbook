---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: ภาพรวม Web และ Cloud
description: เวิร์กโฟลว์งานระยะไกลตั้งแต่การเชื่อม repository และสภาพแวดล้อมที่ทำซ้ำได้ ไปจนถึงการ Review และ Pull Request
locale: th
source_locale: zh-CN
source_revision: "86fa0ac"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 13
---

Codex Cloud ทำงานเขียนโค้ดในสภาพแวดล้อม Cloud ที่แยกออกมา เหมาะกับงานเบื้องหลังระยะยาว การทดลองแบบคู่ขนาน และงานที่เริ่มจาก GitHub, GitLab (Beta), Linear หรือ Slack ไม่ใช่ “การควบคุมคอมพิวเตอร์ของคุณจากระยะไกล” และไม่เห็นไฟล์ในเครื่องที่ยังไม่ได้ push โดยอัตโนมัติ

![ภาพประกอบ: repository ในเบราว์เซอร์เชื่อมกับ container แยกบน Cloud เพื่อทำงาน แล้วส่งผลกลับเป็นการ์ด Pull Request พร้อมเครื่องหมายถูกสีเขียว](/illustrations/web-and-cloud.webp)

## งาน Cloud หนึ่งงานผ่านขั้นตอนใดบ้าง

```text
เข้าสู่ระบบ ChatGPT
  → เชื่อมต่อ GitHub / GitLab
  → สร้างสภาพแวดล้อมของ repository
  → checkout branch หรือ commit ที่ระบุ
  → setup script ติดตั้ง dependency
  → Agent แก้ไขและตรวจสอบภายใต้นโยบายเครือข่าย
  → ดูสรุป, log และ diff
  → ติดตามแก้ไขหรือสร้าง PR
  → มนุษย์ Review + CI ก่อน merge
```

คุณค่าของ Cloud คือการแยกสภาพแวดล้อม การทำซ้ำได้ และการทำงานคู่ขนาน ไม่ใช่การยกเลิกการ Review

## ในเครื่องหรือ Cloud

| เลือกในเครื่อง | เลือก Cloud |
|---|---|
| พึ่งไฟล์ที่ยังไม่ commit หรือบริการบนเครื่อง | อินพุตอยู่ใน remote repository แล้ว |
| ต้องโต้ตอบกับ process แบบเรียลไทม์ | งานทำงานเบื้องหลังได้อย่างอิสระ |
| การแก้ไขรวดเร็วและขอบเขตเล็ก | build หรือทดสอบหลายขั้น หรือทดลองแบบคู่ขนาน |
| เครื่องมือมีเฉพาะในเครื่องปัจจุบัน | สร้างสภาพแวดล้อมใหม่ด้วยสคริปต์ได้ |

อ่าน [ในเครื่องกับ Cloud](/th/guide/foundations/local-vs-cloud/) ก่อน เพื่อเข้าใจขอบเขตการทำงาน

## ลำดับการเรียนรู้ที่แนะนำ

1. [เชื่อมต่อ GitHub](/th/guide/web-and-cloud/connect-github/): อนุญาตเฉพาะ repository ที่จำเป็น
2. [สภาพแวดล้อม Cloud](/th/guide/web-and-cloud/cloud-environments/): ตรึงเครื่องมือ เวอร์ชัน และ setup
3. [Secrets และตัวแปรสภาพแวดล้อม](/th/guide/web-and-cloud/secrets-and-variables/): แยก Secret ช่วงติดตั้งออกจากตัวแปรช่วงรัน
4. [การเข้าถึงอินเทอร์เน็ต](/th/guide/web-and-cloud/internet-access/): ขั้น Agent ปิดเครือข่ายโดยค่าเริ่มต้น และเปิดเฉพาะโดเมนกับวิธีที่จำเป็น
5. [มอบหมายและติดตามงาน](/th/guide/web-and-cloud/delegate-and-follow-up/): ส่งงานด้วยเป้าหมาย ข้อจำกัด และเกณฑ์ตรวจรับ
6. [สร้าง Pull Request](/th/guide/web-and-cloud/create-pull-requests/) และ [Code review](/th/guide/web-and-cloud/code-review/): เปลี่ยนผลลัพธ์เป็นงานส่งมอบที่ merge ได้
7. [แก้ปัญหา Cloud](/th/guide/web-and-cloud/troubleshooting/): วิเคราะห์ตามสี่ชั้น ได้แก่ repository, setup, เครือข่าย และงาน

หากเริ่มจาก Desktop App หรือ IDE ให้ดู [งานในเครื่องและ Cloud](/th/guide/desktop-app/local-and-cloud-tasks/) และ [งาน Cloud ใน IDE](/th/guide/ide/cloud-task-workflow/) ตามลำดับ

## แบบฝึกหัดแรก

เลือก repository ทดสอบที่ไม่มีข้อมูลประจำตัว production แล้วให้ Codex แก้เฉพาะลิงก์เอกสารและรันตัวตรวจลิงก์ เกณฑ์สำเร็จคือสภาพแวดล้อมเริ่มได้ diff มีเฉพาะไฟล์ที่คาดไว้ มองเห็นผลลัพธ์คำสั่ง และสร้าง PR จากผลลัพธ์ได้ อย่าใช้เพียงสถานะ “เสร็จแล้ว” บนหน้าเป็นเกณฑ์ตรวจรับ

## แหล่งข้อมูลทางการ

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [สภาพแวดล้อม Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
