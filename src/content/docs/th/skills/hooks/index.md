---
legacyVerification:
  status: "verified"
  products: "สภาพแวดล้อมที่ใช้ Codex host ในเครื่อง การตรวจความน่าเชื่อถือและการจัดการ `/hooks` ให้ยึดคำอธิบายทางการของ Codex CLI"
  checkedAt: "2026-08-25"
title: Hooks
description: รันสคริปต์หรือเครื่องมือ MCP ในวงจรชีวิตของ Codex เพื่อทำการตรวจ บันทึก และควบคุมนโยบาย
locale: th
source_locale: zh-CN
source_revision: 'a0312e9'
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

Hook คือตัวประมวลผลอัตโนมัติในวงจรชีวิตของ Codex สามารถรันสคริปต์หรือเครื่องมือ MCP เมื่อ session เริ่ม เมื่อส่งพรอมป์ ก่อนและหลังเรียกเครื่องมือ เมื่อบีบอัดบริบท เมื่อ Agent ย่อยหยุด หรือเมื่อ thread หลักจบ

## ชุดนี้แก้ปัญหาอะไร

- เลือก event ที่ถูกต้อง แทนการสร้างชื่อที่ไม่มีจริงอย่าง `pre_tool`
- แยก “บล็อกก่อนลงมือ” ออกจาก “ให้ feedback หลังลงมือ”
- เริ่มจาก Hook ที่ทดสอบได้และมีความเสี่ยงต่ำ
- ตรวจขอบเขตความน่าเชื่อถือของ Hook ระดับโปรเจกต์และ Hook ที่มากับ Plugin

## ลำดับการอ่าน

1. [ภาพรวม Hooks](/th/skills/hooks/hooks-overview/): ทำความเข้าใจชั้นการตั้งค่า ความน่าเชื่อถือ และพฤติกรรมขณะรัน
2. [ประเภท event ของ Hook](/th/skills/hooks/hook-event-types/): เลือก event และ matcher ตามวงจรชีวิต
3. [ตัวอย่างการตั้งค่า Hook](/th/skills/hooks/hooks-examples/): รันตัวอย่าง guard `PreToolUse` ที่ทดสอบแบบ unit test ได้

## การเลือกอย่างสั้นที่สุด

| เป้าหมาย | พิจารณาก่อน |
|---|---|
| ปฏิเสธหรือแก้อินพุตก่อนเครื่องมือทำงาน | `PreToolUse` |
| ตัดสินใจเมื่อ Codex กำลังจะขอเพิ่มสิทธิ์ | `PermissionRequest` |
| บันทึกหรือเพิ่ม feedback หลังเครื่องมือจบ | `PostToolUse` |
| ตรวจหรือเพิ่มบริบทเมื่อส่งพรอมป์ | `UserPromptSubmit` |
| ให้ thread หลักหรือ Agent ย่อยทำต่ออีกหนึ่งรอบ | `Stop` / `SubagentStop` |

Hook แทน sandbox การอนุมัติ กฎคำสั่ง หรือสิทธิ์ฝั่งเซิร์ฟเวอร์ไม่ได้ Hook เป็นชั้นเฝ้าระวังเพิ่มเติม และ path เครื่องมือแบบ hosted บางส่วนไม่ผ่าน Hook เครื่องมือในเครื่อง

## แหล่งข้อมูลทางการ

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
