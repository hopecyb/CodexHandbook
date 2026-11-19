---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: สภาพแวดล้อม Cloud
description: กำหนด runtime, dependency, setup, cache และจุดเริ่มต้นของ repository สำหรับ Codex Cloud
locale: th
source_locale: zh-CN
source_revision: "1745f70"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 20
---

สภาพแวดล้อม Cloud กำหนดว่า Codex จะติดตั้งและรันอะไรสำหรับ repository หนึ่ง สภาพแวดล้อมนี้ไม่สืบทอดการตั้งค่าจากแล็ปท็อปของคุณ หากรันในเครื่องได้แต่ Cloud ล้มเหลว ให้เปรียบเทียบ runtime, dependency, ตัวแปร และเครือข่ายก่อน

## ลำดับการทำงานของแต่ละแชต

1. สร้าง container แล้ว checkout branch หรือ commit SHA ที่เลือก
2. รัน setup script และอาจรัน maintenance script เมื่อใช้ cache ซ้ำ
3. ใช้นโยบายอินเทอร์เน็ต
4. Agent วนรันคำสั่ง แก้ไข และตรวจสอบ พร้อมอ่าน `AGENTS.md` ที่มีผล
5. ส่งคำตอบและ diff กลับมา เพื่อให้คุณติดตามต่อหรือสร้าง PR

อิมเมจ `universal` เริ่มต้นติดตั้งภาษา แพ็กเกจ และเครื่องมือทั่วไปไว้แล้ว คุณตรึงเวอร์ชัน Python, Node.js และ runtime อื่นได้ในการตั้งค่าสภาพแวดล้อม หรือใช้ setup script ติดตั้ง dependency เพิ่มเติม

## การกำหนดค่าขั้นต่ำที่ทำซ้ำได้

สำหรับโปรเจกต์ pnpm ให้ตรึง Node.js ในสภาพแวดล้อมเป็นเวอร์ชันเดียวกับ CI แล้วกำหนด:

```bash
corepack enable
pnpm install --frozen-lockfile
```

ระบุใน `AGENTS.md` ที่ราก repository ว่า:

```md
## Validation

- Run `pnpm test` after code changes.
- Run `pnpm typecheck` before reporting completion.
- Do not update the lockfile unless dependency changes are requested.
```

ขั้น setup กับ Agent อยู่คนละเซสชัน Bash ค่าที่ `export` ชั่วคราวใน setup จะไม่ส่งต่อโดยอัตโนมัติ ค่าที่ไม่อ่อนไหวควรกำหนดในการตั้งค่าสภาพแวดล้อม หรือบันทึกถาวรใน shell configuration ตามคำแนะนำทางการ

## Cache และ maintenance

Cloud อาจเก็บสถานะ container ไว้ใน cache สูงสุด 12 ชั่วโมง เพื่อเร่งแชตใหม่และการติดตาม เมื่อกู้คืน cache แล้ว ระบบจะ checkout branch ที่แชตกำหนด และอาจรัน maintenance script เพื่ออัปเดต dependency

การแก้ setup, maintenance, ตัวแปรสภาพแวดล้อม หรือ secrets จะทำให้ cache หมดอายุอัตโนมัติ หากการเปลี่ยนแปลงใน repository ทำให้ cache ใช้ร่วมกันไม่ได้ ให้กด **Reset cache** ด้วยตนเอง Cache ของสภาพแวดล้อม Business และ Enterprise อาจใช้ร่วมกันระหว่างผู้ใช้ที่มีสิทธิ์เข้าถึง การรีเซ็ตจึงกระทบผู้ใช้คนอื่นใน workspace ได้

## ตัวแปรสภาพแวดล้อมและ Secret

- ตัวแปรสภาพแวดล้อมมีผลตลอดขั้น setup และ Agent
- Secret ถอดรหัสเฉพาะขั้น setup และจะถูกนำออกก่อน Agent เริ่ม
- ขั้น setup เข้าถึงอินเทอร์เน็ตได้
- ขั้น Agent ปิดอินเทอร์เน็ตโดยค่าเริ่มต้น และเปิดแยกตามสภาพแวดล้อมได้

ขอบเขตเหล่านี้มักถูกสับสน บทถัดไปอธิบายเพิ่มเติม: [Secrets และตัวแปรสภาพแวดล้อม](/th/guide/web-and-cloud/secrets-and-variables/)

## เช็กลิสต์การจัดแนว

| รายการตรวจ | เป้าหมาย |
|---|---|
| Branch/commit เริ่มต้น | ตรงกับคำอธิบายงาน |
| เวอร์ชัน runtime | ตรงกับข้อจำกัดของ CI หรือ production |
| lockfile | ติดตั้งแบบ frozen |
| setup | ทำซ้ำได้ ไม่โต้ตอบ และหยุดทันทีเมื่อผิดพลาด |
| คำสั่งตรวจสอบ | บันทึกใน `AGENTS.md` |
| เครือข่าย | Agent เปิดเฉพาะโดเมนและวิธีที่จำเป็น |

## แหล่งข้อมูลทางการ

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [อิมเมจ codex-universal](https://github.com/openai/codex-universal)
