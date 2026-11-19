---
title: "ขอบเขตของ Webhook และ event งาน"
description: "แยกผลการทำงานในเครื่องของ Codex, event จาก App Server และ HTTP callback ที่ออกแบบเอง"
locale: th
source_locale: zh-CN
source_revision: "8a84ab8"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
contentType: reference
audiences: [developer]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "ตรวจโมเดลการทำงานและ event ของ SDK กับ App Server แล้ว ส่วน HTTP callback เป็นคำแนะนำสำหรับสถาปัตยกรรมที่สร้างเอง และไม่ได้อ้างว่ามี contract ของ Codex Cloud Webhook แบบรวมศูนย์"
  evidence:
    - label: "เอกสาร SDK ทางการ"
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: "Protocol และ event ของ App Server"
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
---

เมื่อทำงานเสร็จ คุณสามารถแจ้งระบบภายในผ่าน return value ของโปรแกรม process exit status, event stream หรือ HTTP callback ให้ระบุผู้ส่งและ protocol ก่อน แล้วจึงตัดสินใจว่าต้องใช้ Webhook หรือไม่

## อย่าปะปนกลไกสามแบบ

| กลไก | วิธีรับ | ขอบเขต |
|---|---|---|
| การทำงานผ่าน SDK / CLI ในเครื่อง | ผลลัพธ์โปรแกรมหรือสถานะ process | ไม่ใช่ managed HTTP callback interface |
| event ของ App Server | การแจ้งเตือน JSON-RPC ภายในการเชื่อมต่อ | ต้องเชื่อมต่อ initialize และจัดการข้อความตาม protocol |
| callback จาก runner ที่สร้างเอง | บริการของคุณส่ง HTTP request | คุณกำหนดชื่อ event ลายเซ็น การลองใหม่ และ storage เอง |

`turn/completed` ของ App Server เป็นการแจ้งเตือนใน protocol โดยสถานะสุดท้ายอาจเป็นเสร็จ ถูกขัดจังหวะ หรือล้มเหลว หลังรับแล้วยังต้องตรวจสถานะและผลลัพธ์ทางธุรกิจ ไม่ควร trigger deployment จากชื่อ event เพียงอย่างเดียว ดู [คำอธิบาย event ทางการ](https://learn.chatgpt.com/docs/app-server)

บทความนี้ยังไม่ได้ตรวจสอบ registration endpoint, signature header หรือ contract ของ event `task.completed` สำหรับ Codex Cloud Webhook แบบรวมศูนย์ จึงไม่ให้ URL, Header หรือตาราง event ที่ทำเสมือนเป็น interface ทางการ หากผลิตภัณฑ์ที่คุณใช้มี Webhook ให้เชื่อมตามเอกสารแบบมีเวอร์ชันของผลิตภัณฑ์นั้น

## เมื่อใดต้องสร้าง callback เอง

งาน CI ครั้งเดียวมักส่งขั้นตอนถัดไปได้ด้วย exit status และ output ที่บันทึกไว้ ไม่จำเป็นต้องเพิ่ม public receiver เพียงเพราะต้องการ “asynchronous”

หากระบบจัดตารางงานข้าม process และต้องอัปเดต ticket หลังงานเสร็จ คุณออกแบบเส้นทางภายในได้ดังนี้:

```text
queue ของคุณ → runner ที่ควบคุมรัน SDK/CLI → บันทึกผลลัพธ์และสถานะ
                                        → บริการแจ้งเตือนของคุณ → ticket ภายใน
```

นี่เป็นคำแนะนำด้านสถาปัตยกรรมของเว็บไซต์ ไม่ใช่ความสามารถ deployment ที่ SDK มีให้ในตัว ดูตำแหน่งทำงานและขอบเขต integration ของ SDK ที่ [ภาพรวม SDK](/th/guide/developer-platform/sdk-overview/)

## Protocol ที่สร้างเองต้องระบุอะไร

- **ตัวตนและความครบถ้วน**: กำหนดวิธีที่ผู้รับตรวจสอบผู้ส่ง ใช้รูปแบบ authentication ที่ผ่านการทบทวน และอย่าสร้าง “signature header ทางการ” ขึ้นเอง
- **ID เสถียรและ deduplication**: บันทึก task ID, event ID และจำนวนครั้งที่ลอง การส่งซ้ำต้องไม่สร้างผลกระทบภายนอกซ้ำ
- **สถานะและเวอร์ชัน**: แยกการทำงานเสร็จ ล้มเหลว ถูกขัดจังหวะ และผลตรวจรับทางธุรกิจ พร้อมบันทึก payload version
- **การรับแบบทนทาน**: ยืนยันการรับเฉพาะเมื่อ event ถูกบันทึกหรือเข้าคิวอย่างเชื่อถือได้ หากล้มเหลวต้องลองใหม่ได้ อย่าตอบว่าสำเร็จก่อนแล้วทำ event หาย
- **ขอบเขตข้อมูล**: ส่งเฉพาะสรุปผลและ reference ที่ปลอดภัยซึ่ง downstream ต้องใช้ และอย่าบันทึก credential ใน log
- **เงื่อนไขหยุด**: กำหนดจำนวน retry สูงสุด กลไกให้มนุษย์รับช่วง และการยกเลิกการทำงานถัดไป

รายการเหล่านี้เป็น requirement ด้านการออกแบบที่ยังต้อง implement และตรวจสอบ ไม่ใช่ตัวอย่างที่รันได้ทันที หน้านี้จะไม่เชื่อมระบบ ticket ส่งข้อความ หรือสร้าง deployment workflow โดยอัตโนมัติ

## สถานการณ์ตรวจรับขั้นต่ำ

ในสภาพแวดล้อมทดสอบ ให้ตรวจอย่างน้อยผลสำเร็จ การทำงานล้มเหลว การยกเลิก event ซ้ำ ตัวตนไม่ถูกต้อง และ receiver ใช้งานไม่ได้ชั่วคราว ยืนยันว่าการส่งซ้ำสร้างผลทางธุรกิจเพียงครั้งเดียว การยกเลิกไม่ถูกนับว่าสำเร็จ และผลที่สร้างแต่ยังไม่ผ่านการตรวจรับจะไม่ถูกเผยแพร่โดยตรง

เริ่มฝึกจาก [กรณีคัดแยก Issue](/th/cases/use-cases/team-automation/issue-triage-suggestions/) และ [การตรวจลิงก์ตามกำหนดเวลา](/th/cases/use-cases/team-automation/scheduled-link-check/) โดยให้ยึดสถานะเนื้อหาของแต่ละหน้า
