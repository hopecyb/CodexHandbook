---
legacyVerification:
  status: "verified"
  products: "IDE"
  basis: "คู่มือเริ่มต้น IDE ทางการปัจจุบันระบุ VS Code, Cursor, Windsurf, VS Code Insiders รวมถึงวิธีผสานกับ Xcode และ JetBrains แยกกันอย่างชัดเจน หน้านี้จึงแบ่งคำแนะนำติดตั้งตามสองแนวทางดังกล่าว"
  checkedAt: "2026-08-26"
title: ติดตั้งการผสานกับ IDE
description: เปิดใช้ Codex ในเอดิเตอร์ที่เข้ากันได้กับ VS Code, Xcode หรือ JetBrains IDE
locale: th
source_locale: zh-CN
source_revision: "e8f88ec"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 50
---

ปัจจุบัน IDE ที่รองรับไม่ได้ใช้วิธีติดตั้งแบบเดียวทั้งหมด:

| IDE | วิธีติดตั้งหรือเปิดใช้ |
|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | ติดตั้งหรือเปิดใช้ส่วนขยาย Codex |
| Xcode | เลือก Codex Agent ใน coding assistant ของ Xcode |
| JetBrains IDEs | เลือก Codex ใน AI Chat |

เปิดช่องทางทางการที่ตรงกับ IDE ของคุณจาก [หน้า Codex IDE ทางการ](https://learn.chatgpt.com/docs/codex/ide) อย่าเดาตำแหน่งปุ่มจากภาพหน้าจอของ IDE อื่น

## เอดิเตอร์ที่เข้ากันได้กับ VS Code

1. ติดตั้งส่วนขยาย Codex จากช่องทาง Marketplace ทางการ
2. เปิดรากเวิร์กสเปซของโปรเจกต์จริง
3. เลือกไอคอน Codex หากไม่เห็น ให้เปิด Command Palette แล้วเรียก `Codex: Open Codex Sidebar`
4. ลงชื่อเข้าใช้ด้วย ChatGPT หรือ API key

## Xcode และ JetBrains

- Xcode: เปิด coding assistant สร้างแชตใหม่ แล้วเลือก Codex เป็น Agent
- JetBrains: เปิด AI Chat แล้วเลือก Codex

ช่องทางเหล่านี้มาจาก IDE แต่ละตัว หน้าตาจึงไม่เหมือนส่วนขยาย VS Code ทั้งหมด

## ตรวจบริบทหนึ่งครั้งหลังติดตั้ง

เปิดไฟล์ซอร์ส เลือกโค้ดสั้น ๆ แล้วถามว่า:

```text
อธิบายเฉพาะอินพุต เอาต์พุต และเส้นทางความล้มเหลวของส่วนที่เลือกอยู่ ห้ามแก้ไฟล์ และให้อ้างชื่อฟังก์ชันที่เกี่ยวข้อง
```

หากคำตอบไม่เกี่ยวกับส่วนที่เลือกอย่างชัดเจน ให้ตรวจว่า:

- เปิดรากโปรเจกต์ที่ถูกต้องอยู่หรือไม่
- แนบไฟล์หรือส่วนที่เลือกเข้า composer แล้วหรือไม่
- ข้อมูลประจำตัวและเวิร์กสเปซที่ลงชื่อเข้าใช้อยู่ถูกต้องหรือไม่
- เอดิเตอร์เปิดส่วนขยาย AI หรือคีย์ลัดอื่นที่ขัดแย้งกันอยู่หรือไม่

เรียนต่อที่ [เวิร์กโฟลว์งานในเครื่องของ IDE](/th/guide/ide/local-task-workflow/) ดูขอบเขตการรองรับทั้งหมดที่ [เอดิเตอร์ที่รองรับ](/th/guide/ide/supported-editors/)
