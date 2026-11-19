---
legacyVerification:
  status: "verified"
  products: "สภาพแวดล้อมที่ใช้ Codex host ในเครื่อง การจัดการความน่าเชื่อถือใช้ `/hooks` ของ Codex CLI"
  checkedAt: "2026-08-25"
title: ตัวอย่างการตั้งค่า Hook
description: ใช้ hooks.json จริงและสคริปต์ Python standard library สร้าง guard PreToolUse ที่ทดสอบได้
locale: th
source_locale: zh-CN
source_revision: 'a8abc38'
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

บทนี้นำชื่อ event และฟิลด์ config ตัวอย่างจากเวอร์ชันเก่าออกแล้ว ตัวอย่างเป็นไปตามโครงสร้าง `hooks.json` ทางการปัจจุบันและมีการทดสอบที่รันได้

ไฟล์ทั้งหมดอยู่ที่ [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard)

![ภาพประกอบ: ประตูเรืองแสงบนเส้นทางเรียกเครื่องมือ ตัวสแกนปล่อยคำสั่งปลอดภัยผ่านช่องสีเขียว คำสั่งอันตรายถูกกำแพงสีแดงบล็อก และแผงทดสอบด้านข้างแสดงไฟเขียว](/illustrations/hooks-guardrail.webp)

## เป้าหมายและขอบเขต

เป้าหมาย: เมื่ออินพุตคำสั่ง `Bash` หรือ `apply_patch` มีสตริงทดสอบที่มีรูปทรงเหมือน AWS Access Key ID ให้ปฏิเสธก่อนเครื่องมือทำงาน

ตัวอย่างนี้แสดงเพียงโครงสร้างอินพุต ผลลัพธ์ และการทดสอบของ Hook:

- แทน secret scanner แบบมืออาชีพไม่ได้
- regex มีทั้ง false positive และ false negative
- ไม่สแกน Hosted tools
- ไม่ควรบันทึกอินพุตเครื่องมือฉบับเต็ม

## 1. ตั้งค่า hooks.json

```json
{
  "description": "Block obvious secret-shaped strings before local writes.",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|apply_patch",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$(git rev-parse --show-toplevel)/examples/hooks/secret-guard/pre_tool_use_guard.py\"",
            "timeout": 3,
            "statusMessage": "Checking tool input for secret-shaped strings"
          }
        ]
      }
    ]
  }
}
```

เมื่อใช้จริงในรีโพซิทอรี โดยทั่วไปวาง config ที่ `.codex/hooks.json` และสคริปต์ที่ `.codex/hooks/` ตัวอย่างนี้คง path examples ไว้ เพื่อให้ตรวจวัสดุทั้งหมดในรีโพซิทอรีคู่มือได้โดยตรง

## 2. ผลลัพธ์เมื่อปฏิเสธ

สคริปต์อ่าน event JSON จาก stdin และตรวจเฉพาะ `tool_input.command` เมื่อพบ จะส่ง:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

เมื่อไม่พบ ให้ออกด้วย `0` โดยไม่ส่งเนื้อหา ข้อความ stdout ทั่วไปจะไม่กลายเป็นการตัดสินใจ `PreToolUse` ที่ใช้ได้

## 3. รันการทดสอบ

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

ผลที่คาด: การทดสอบสามรายการผ่าน ครอบคลุมคำสั่งปกติ secret ที่น่าสงสัย และ `tool_input` ที่ไม่ใช่ dictionary

สามารถป้อน fixture ด้วยตนเองได้:

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

อินพุตปกติจะไม่สร้าง stdout

## 4. เปิดใช้ในโปรเจกต์

1. วาง config และสคริปต์ในรีโพซิทอรีเป้าหมาย แล้วเปลี่ยนเป็น path ที่เสถียรภายในรีโพซิทอรีนั้น
2. รัน unit test และคำสั่งปกติจริงหนึ่งครั้งในรีโพซิทอรีแยก
3. เริ่ม Codex แล้วเปิด `/hooks` เพื่อตรวจแหล่งที่มาและนิยามที่แม่นยำ
4. หลังเชื่อถือ ให้ตรวจทั้ง “ผ่านตามปกติ” และ “สตริงทดสอบถูกปฏิเสธ”
5. หลังแก้สคริปต์ ให้ตรวจใหม่ เพราะ hash ที่เปลี่ยนทำให้ Hook ที่ไม่ได้รับการจัดการกลับไปสู่สถานะรอความเชื่อถือ

## จากการเตือนสู่การบล็อก

โดยทั่วไปทีม production เริ่มจาก audit ที่ไม่บล็อกหรือเพิ่มบริบท แล้วจึงยกระดับเป็น deny ก่อนยกระดับ อย่างน้อยต้องตอบว่า:

- fixture ครอบคลุม false positive ที่ทราบหรือไม่
- เมื่อสคริปต์ timeout หรือ crash ผู้ใช้เข้าใจสิ่งที่เกิดขึ้นหรือไม่
- CI หรือนโยบายฝั่งเซิร์ฟเวอร์รองรับกฎนี้ด้วยหรือไม่
- การ bypass และกู้คืนฉุกเฉิน audit ได้หรือไม่

## แหล่งข้อมูลทางการ

- [OpenAI: การตั้งค่า Hooks และผลลัพธ์ PreToolUse](https://learn.chatgpt.com/docs/hooks)
