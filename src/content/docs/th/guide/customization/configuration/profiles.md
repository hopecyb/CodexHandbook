---
legacyVerification:
  status: "verified"
  products: "CLI"
  checkedAt: "2026-08-26 (บนเครื่องนี้ใช้ `codex-cli 0.148.0`)"
title: ตั้งค่า Profile
description: ใช้ไฟล์กำหนดค่าแยกต่างหากเพื่อซ้อนชุดการตั้งค่าที่ตั้งชื่อไว้ให้ Codex CLI
locale: th
source_locale: zh-CN
source_revision: "6ab30c5"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 20
---

ปัจจุบัน `--profile <name>` ของ Codex CLI จะนำไฟล์ `$CODEX_HOME/<name>.config.toml` มาซ้อนบนการตั้งค่าพื้นฐานของผู้ใช้ ฟังก์ชันนี้ใช้กับ CLI เป็นหลัก จึงไม่ควรอธิบายว่าเป็น “โหมดคลิกเดียว” แบบทั่วไปในแอปเดสก์ท็อป

## ตัวอย่างขั้นต่ำ

เก็บค่าเริ่มต้นที่ใช้ร่วมกันไว้ในการตั้งค่าพื้นฐาน:

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

Profile สำหรับ Review แบบอ่านอย่างเดียว:

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

เริ่มใช้งาน:

```bash
codex --profile review
# แบบย่อ
codex -p review
```

ยืนยันความหมายของตัวเลือกด้วยเวอร์ชันที่ติดตั้งบนเครื่อง:

```bash
codex --help
```

ข้อความช่วยเหลือปัจจุบันควรอธิบายพาธของไฟล์ Profile และวิธีซ้อนเข้ากับการตั้งค่าพื้นฐาน หากใช้เวอร์ชันอื่น ให้ยึดเอาต์พุตบนเครื่องและเอกสารอ้างอิงการตั้งค่าอย่างเป็นทางการเป็นหลัก

## Profile เหมาะกับอะไร

| Profile | จุดประสงค์ | ตัวอย่างขอบเขต |
|---|---|---|
| `review` | ตรวจสอบแบบอ่านอย่างเดียว | read-only ไม่มีการเขียน |
| `workspace` | แก้ไขโปรเจกต์ในงานประจำวัน | เขียนได้เฉพาะใน Workspace และอนุมัติเมื่อจำเป็น |
| `ci` | ตรวจสอบแบบไม่โต้ตอบ | เอาต์พุตคงที่ ไม่มี push |

Profile เก็บเพียงจุดเริ่มต้นของชุดการตั้งค่าเท่านั้น โดยจะไม่เขียนทับข้อกำหนดขององค์กร และไม่ได้ทำให้พรอมต์ปลอดภัยขึ้นโดยอัตโนมัติ ที่สำคัญ อย่าตั้ง `danger-full-access` เป็น Profile เริ่มต้นที่เรียกใช้ได้ง่าย ๆ

## อย่าสับสนกับ Permission Profile

- **Profile สำหรับการตั้งค่า**: `--profile name` เลือกไฟล์ `<name>.config.toml` ซึ่งซ้อนการตั้งค่า Codex ได้หลายประเภท
- **Permission Profile (Beta)**: `default_permissions` และ `[permissions.<name>]` ใช้กำหนดขอบเขตระบบไฟล์และเครือข่าย

ทั้งสองอย่างเรียกว่า Profile เหมือนกัน แต่มีวัตถุประสงค์และโครงสร้างการตั้งค่าต่างกัน ปัจจุบัน Permission Profile ยังใช้ร่วมกับ `sandbox_mode` แบบเดิมไม่ได้เช่นกัน จึงควรเลือกระบบสิทธิ์เพียงแบบเดียวในการตั้งค่า

## ขอบเขตการใช้งานในทีม

Profile สำหรับการตั้งค่าอยู่ใน Codex home ของผู้ใช้ และในเวอร์ชันปัจจุบันไม่ใช่การตั้งค่าระดับโปรเจกต์ที่ commit ร่วมกับ repository ได้โดยตรง ทีมสามารถจัดเตรียมไฟล์ตัวอย่างที่ผ่านการ Review ไว้ในเอกสาร เพื่อให้สมาชิกติดตั้งและตรวจสอบอย่างชัดเจน แต่อย่าคิดว่าเมื่อ clone repository แล้ว Profile ส่วนบุคคลจะเปิดใช้งานเอง

## การตรวจรับ

1. รัน `codex --help` เพื่อยืนยันว่าเวอร์ชันปัจจุบันรองรับ `-p/--profile`
2. ใช้งานแบบอ่านอย่างเดียวเพื่อทดสอบ `review`
3. ลองขอให้อ่านไฟล์นอก Workspace หรือเขียนไฟล์ แล้วยืนยันว่าขอบเขตป้องกันการกระทำนั้นตามที่คาดไว้
4. ตรวจสอบการตั้งค่าที่มีผลจริง อย่าเชื่อเพียงชื่อไฟล์

## แหล่งอ้างอิงอย่างเป็นทางการ

- [Schema การตั้งค่า Codex](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [ชั้นการตั้งค่าในซอร์สโค้ด Codex CLI](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)
