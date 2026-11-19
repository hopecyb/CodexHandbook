---
legacyVerification:
  status: "verified"
  products: "IDE"
  checkedAt: "2026-08-26"
title: การตั้งค่าส่วนขยาย IDE
description: แยกการกำหนดค่า Agent ที่ใช้ร่วมกันออกจากการตั้งค่าพฤติกรรมของเอดิเตอร์ตระกูล VS Code
locale: th
source_locale: zh-CN
source_revision: "6f28910"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 80
---

IDE มีการตั้งค่าสองชั้น:

| ชั้นการตั้งค่า | ตำแหน่งจัดเก็บ | ควบคุมอะไร |
|---|---|---|
| การตั้งค่า Codex Agent | `config.toml` | โมเดล ระดับการให้เหตุผล สิทธิ์ แซนด์บ็อกซ์ MCP การปรับเฉพาะบุคคล; ใช้ร่วมกับ CLI |
| การตั้งค่าเอดิเตอร์ | `chatgpt.*` ในระบบการตั้งค่า VS Code | แถบด้านข้าง คิวข้อความ ปุ่มส่ง การแสดง review ภาษา และฟอนต์ |

กฎรีโพซิทอรียังควรเขียนใน `AGENTS.md` อย่าใส่ไว้ในการตั้งค่าเอดิเตอร์ส่วนตัว

## เปิดการตั้งค่า

เลือกไอคอนเฟืองในแถบด้านข้าง Codex แล้วเลือก **Codex Settings** ตัวเลือก Agent ที่ใช้บ่อยแก้ได้ในแผง หรือเลือก **Open config.toml** เพื่อแก้ชั้นการกำหนดค่าที่มีผลอยู่

ค้นหา `@ext:openai.chatgpt`, `Codex` หรือชื่อคีย์เฉพาะใน Settings ของเอดิเตอร์เพื่อแก้พฤติกรรมเอดิเตอร์

## การตั้งค่าที่ควรเข้าใจก่อน

| คีย์ | ค่าเริ่มต้น | เปลี่ยนเมื่อใด |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | ต้องการให้ส่วนขยายโฟกัสแถบด้านข้างโดยอัตโนมัติหลังเริ่ม |
| `chatgpt.followUpQueueMode` | `queue` | เปลี่ยนเป็น `steer` เพื่อให้ข้อความใหม่ชี้นำการทำงานปัจจุบัน |
| `chatgpt.composerEnterBehavior` | `enter` | มักส่งพรอมต์หลายบรรทัดโดยไม่ตั้งใจ |
| `chatgpt.reviewDelivery` | `inline` | ต้องการให้ `/review` แสดงในแชตแยก โดยใช้ `detached` |
| `chatgpt.localeOverride` | อัตโนมัติ | ต้องการตรึงภาษา UI |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | เปิดเมื่อรีโพซิทอรีและ toolchain อยู่ใน WSL2 |

`chatgpt.cliExecutable` ใช้สำหรับพัฒนา Codex CLI เท่านั้น ผู้ใช้ทั่วไปไม่ควรแทน executable ที่มากับส่วนขยายด้วยตนเอง มิฉะนั้นบางฟีเจอร์อาจใช้ไม่ได้

## ทำความเข้าใจลำดับความสำคัญของการกำหนดค่า

- นโยบายองค์กรกำหนดขีดบนที่ห้ามฝ่า
- `config.toml` กำหนดพฤติกรรมเริ่มต้นของ Agent
- `AGENTS.md` กำหนดกฎของรีโพซิทอรีและไดเรกทอรี
- การตั้งค่าเอดิเตอร์เปลี่ยนเฉพาะประสบการณ์ใน IDE
- พรอมต์แต่ละครั้งเติมเป้าหมายและขอบเขตของงานนั้น

หาก “การตั้งค่าไม่มีผล” ให้ยืนยันก่อนว่าแก้ชั้นใด แล้วตรวจว่าถูกนโยบายชั้นสูงกว่าจำกัดหรือไม่ ดูหลักการทั้งหมดที่ [ขอบเขตและลำดับความสำคัญ](/th/guide/customization/agents-md/scope-and-precedence/)

## ตรวจหลังแก้ไข

แก้ครั้งละหนึ่งค่า เช่น หลังเปลี่ยน `chatgpt.reviewDelivery` เป็น `detached` ให้เรียก `/review` ใน Git repository แล้วตรวจว่าเปิดแชตตรวจทานแยกหรือไม่ จดค่าเดิมไว้ หากผลไม่ตรงให้คืนค่าและ reload เอดิเตอร์

## แหล่งข้อมูลทางการ

- [ข้อมูลอ้างอิงการตั้งค่า Codex IDE](https://learn.chatgpt.com/docs/ide/settings)
- [พื้นฐานการกำหนดค่า](https://learn.chatgpt.com/docs/config)
