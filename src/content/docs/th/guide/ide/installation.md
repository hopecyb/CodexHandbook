---
legacyVerification:
  status: "verified"
  products: "IDE"
  checkedAt: "2026-08-26"
title: ติดตั้งและเปิดใช้การผสานกับ IDE
description: เปิด Codex อย่างถูกต้องในเอดิเตอร์ตระกูล VS Code, Xcode และ JetBrains IDE
locale: th
source_locale: zh-CN
source_revision: "85e1691"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 20
---

ช่องทาง IDE แบ่งเป็นสองประเภท และใช้วิธีติดตั้งปะปนกันไม่ได้:

| เอดิเตอร์ | ช่องทางปัจจุบัน | วิธีเปิด |
|---|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | ส่วนขยาย Codex | เลือกไอคอน Codex หรือเรียก `Codex: Open Codex Sidebar` |
| Xcode | การผสานกับ coding assistant ที่มากับ Xcode | สร้างแชตใหม่แล้วเลือก Codex agent |
| JetBrains IDEs | การผสานกับ JetBrains AI Chat | เปิด AI Chat แล้วเลือก Codex |

ดูขอบเขตการรองรับและช่องทางทางการทั้งหมดที่ [เอดิเตอร์ที่รองรับ](/th/guide/ide/supported-editors/)

## ติดตั้งและยอมรับผลในตระกูล VS Code

1. ติดตั้งส่วนขยาย Codex จากลิงก์ Marketplace ทางการ
2. เปิดโปรเจกต์ฝึก ไม่ใช่หน้าต่างว่าง
3. เลือกไอคอน Codex หากไม่แสดง ให้เรียก `Codex: Open Codex Sidebar` จาก Command Palette
4. ยืนยันตัวตนด้วยบัญชี ChatGPT หรือ API key
5. สร้างแชตใหม่ อ้างอิงไฟล์ที่เปิดอยู่ และถามคำถามแบบอ่านอย่างเดียว

พรอมต์ยอมรับงานขั้นต่ำ:

```text
อ่านเฉพาะไฟล์ที่ฉันเปิดอยู่ ห้ามแก้โค้ด
อธิบายหน้าที่ อินพุต และเอาต์พุตเป็นสามข้อ โดยแต่ละข้อให้อ้างชื่อสัญลักษณ์ที่เจาะจง
```

หากคำตอบตรงกับไฟล์และสัญลักษณ์ปัจจุบัน แปลว่าบริบทเอดิเตอร์ถูกส่งเข้าไปถูกต้อง ก่อนเริ่มงานเขียน ให้สร้าง checkpoint ใน Git ก่อน

## ปัญหาที่พบบ่อย

- **หาแถบด้านข้างไม่พบ**: เรียก `Codex: Open Codex Sidebar` จาก Command Palette
- **บริบทไม่ถูกต้อง**: ยืนยันว่าหน้าต่างโปรเจกต์ ไฟล์ปัจจุบัน และส่วนที่เลือกอยู่ในรีโพซิทอรีที่ต้องการ
- **หน้าลงชื่อเข้าใช้ปรากฏซ้ำ**: CLI กับ IDE แชร์การยืนยันตัวตนที่แคชไว้ ให้ตรวจบัญชีปัจจุบันแล้วลงชื่อเข้าใช้อีกครั้ง
- **toolchain ของ Windows อยู่ใน WSL**: เปิด `chatgpt.runCodexInWindowsSubsystemForLinux` เมื่อจำเป็น การเปลี่ยนค่านี้จะ reload VS Code
- **เอดิเตอร์บุคคลที่สามทำงานต่างกัน**: ตรวจว่าเวอร์ชันเข้ากันได้กับส่วนขยาย VS Code ก่อน อย่านำช่องทาง Xcode/JetBrains มาใช้ตรง ๆ

ดูขั้นตอนสำหรับผู้เริ่มต้นแบบละเอียดที่ [ติดตั้งส่วนขยาย IDE](/th/guide/getting-started/install-ide-extension/)

## แหล่งข้อมูลทางการ

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [การตั้งค่า IDE](https://learn.chatgpt.com/docs/ide/settings)
