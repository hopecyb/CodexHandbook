---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "ตรวจสอบไขว้กับหน้ารวมการแก้ปัญหา การเข้าสู่ระบบ/การเลือกไคลเอนต์ การตรวจผลลัพธ์ บริบท และหัวข้อเกี่ยวกับสิทธิ์ใน repository ปัจจุบันแล้ว หน้านี้ทำหน้าที่เพียงเป็นดัชนีที่ชี้จากอาการไปยังหน้าถัดไป โดยไม่กำหนดข้อความผิดพลาดหรือพฤติกรรมผลิตภัณฑ์ใดเป็นข้อตกลงระยะยาว"
  checkedAt: "2026-07-26"
title: ดัชนีการแก้ปัญหา
description: ค้นหาบทเรียนและหน้าผลิตภัณฑ์ที่เกี่ยวข้องตามอาการ
locale: th
source_locale: zh-CN
source_revision: "da350d0"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 110
---

หากพบปัญหาแต่ไม่รู้ว่าควรเปิดดูหน้าใดของ App, CLI, IDE หรือ Cloud ให้เริ่มหาแนวทางจากที่นี่ได้

การค้นหาตามอาการรวดเร็วกว่าการเปิดหาทั่วทั้งเว็บไซต์ไปมา

| อาการ | ไปที่ |
|---|---|
| ติดตั้งไม่สำเร็จ | [การแก้ปัญหา App เดสก์ท็อป](/th/guide/desktop-app/troubleshooting/) · [การแก้ปัญหา CLI](/th/guide/cli/troubleshooting/) · [การแก้ปัญหา IDE](/th/guide/ide/troubleshooting/) |
| เข้าสู่ระบบ/ยืนยันตัวตนไม่สำเร็จ | [การเข้าสู่ระบบ](/th/guide/getting-started/sign-in-and-authentication/) |
| ไม่รู้ว่าควรเลือกไคลเอนต์ใด | [เลือกไคลเอนต์](/th/guide/choose-your-client/) · [เปรียบเทียบฟังก์ชัน](/th/guide/reference/feature-comparison/) |
| ผลลัพธ์เกินขอบเขต/แย่มาก | [ตรวจผลลัพธ์](/th/guide/getting-started/review-the-result/) · [แก้ปัญหา prompt](/th/prompts/prompt-debugging/) · [เลิกทำ](/th/guide/getting-started/undo-and-recover/) |
| บริบทสับสน | [รักษาจุดสนใจ](/th/guide/context/keep-context-focused/) |
| ข้อสงสัยเรื่องสิทธิ์/sandbox | [สิทธิ์](/th/guide/foundations/permissions-and-approvals/) · [sandbox](/th/guide/foundations/sandbox-and-network/) |

## ทำตามพร้อมกับ log

[บันทึกการกู้คืนจากความล้มเหลวห้ารูปแบบ](/th/guide/reference/troubleshooting/failure-recovery-lab/) มีอินพุตให้ดาวน์โหลดและ log จากคำสั่งจริง เพื่อฝึกแก้ไขแหล่งที่มาที่เปลี่ยนโดยผิดพลาด หมายเลขอ้างอิง การผูกข้อเสนอกับอินพุต ขอบเขตไดเรกทอรี และสถานะที่เสียหาย แต่ละกรณีมีการแก้ไขตัวแปรเดียวและบันทึกการกู้คืน ทั้งหมดเป็นแบบฝึกที่ออกแบบขึ้นบนเครื่อง ไม่ใช่เหตุขัดข้องด้านการเข้าสู่ระบบหรือเครือข่ายของไคลเอนต์

## เมื่อไม่รู้ว่าปัญหาอยู่ในประเภทใด

หากยังอธิบายไม่ได้ว่าปัญหาอยู่ในประเภทใด ให้แยกตามสถานการณ์ต่อไปนี้ก่อน:

1. “เข้าใช้งานไม่ได้” ใช่หรือไม่
2. “รันไม่ได้” ใช่หรือไม่
3. “รันแล้วแต่ผลลัพธ์ไม่ถูกต้อง” ใช่หรือไม่
4. “ไม่รู้ว่าควรเลือกเครื่องมือหรือช่องทางเข้าใด” ใช่หรือไม่

วิธีนี้มักช่วยให้ไปถึงหน้าที่เกี่ยวข้องได้เร็วขึ้น

บริการช่วยเหลือและเอกสารอย่างเป็นทางการ: [https://developers.openai.com/codex](https://developers.openai.com/codex)
