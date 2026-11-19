---
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
title: "Worktree"
description: "ใช้ Git worktree แยกแชตแบบขนาน และส่งงานกลับมายัง local workspace อย่างปลอดภัย"
locale: th
source_locale: zh-CN
source_revision: "3569716"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 40
---

Worktree ทำให้ Git repository เดียวมีไดเรกทอรี checkout แยกกันหลายชุด แต่ละชุดมีไฟล์และสถานะ branch ของตนเอง ขณะเดียวกันก็ใช้ Git metadata ร่วมกัน จึงเหมาะสำหรับให้แชตเขียนโค้ดหลายรายการทำงานขนานโดยไม่เขียนทับไฟล์กัน

## ข้อกำหนดก่อนใช้

- โปรเจกต์ต้องอยู่ใน Git repository
- ขอบเขตงานต้องอธิบายและตรวจรับแยกกันได้
- งานขนานไม่ควรแก้ชุดไฟล์หลักเดียวกัน

หากเพิ่งฝึกใช้ Codex ให้ทำงานตามลำดับในโหมด Local ก่อน เมื่อเวลารอหรือ file conflict เป็นปัญหาจริง จึงค่อยใช้ worktree

## สร้างใน App

1. เลือก **Worktree** ใต้ช่องป้อนข้อความของแชตใหม่
2. เลือก branch เริ่มต้น ซึ่งอาจเป็น branch หลัก feature branch หรือ branch ปัจจุบันที่มีการเปลี่ยนแปลงซึ่งยังไม่ stage
3. ส่งพรอมต์ แล้วแอปจะสร้าง Git worktree
4. ตรวจ ทดสอบ และทบทวนในแชตแยก
5. ใช้ **Handoff** เมื่อพร้อมส่งกลับไปยัง local checkout

Worktree ที่สร้างโดยค่าเริ่มต้นอยู่ในสถานะ detached HEAD ซึ่งไม่ขัดขวางการทำงานของ Codex แต่ก่อนเก็บหรือแชร์ commit ต้องกำหนด branch เป้าหมายและวิธี merge ให้ชัดเจน

## ตัวอย่างทำขนานสองทาง

| แชต | งานใน worktree | เจ้าของไฟล์ | การตรวจรับ |
|---|---|---|---|
| A | แก้ข้อผิดพลาดการลงชื่อเข้าใช้ | `src/auth/**` | การทดสอบ authentication ผ่าน |
| B | เพิ่มเอกสาร authentication | `docs/auth/**` | การตรวจลิงก์ผ่าน |

อย่าให้ A และ B แก้ shared lockfile หรือ config เดียวกันพร้อมกัน หากจำเป็น ให้ตกลงว่าแชตหนึ่งเป็นผู้แก้ ส่วนอีกแชตให้ข้อสรุปจากการวิเคราะห์เท่านั้น

## ตรวจสอบก่อนส่งมอบ

```bash
git status --short
git diff --check
git diff --stat
```

จากนั้นรันการทดสอบของงาน ทำ Handoff, commit หรือ merge เฉพาะเมื่อรู้ชัดว่าการเปลี่ยนแปลงแต่ละส่วนมาจากแชตใด branch เป้าหมายคืออะไร และการตรวจสอบผ่านหรือไม่

## ความสัมพันธ์กับงานตามกำหนดเวลาและ Remote

- งานตามกำหนดเวลาใน Git repository ใช้ worktree เบื้องหลังเฉพาะได้ เพื่อไม่ให้ชนกับงานปัจจุบัน
- Remote ใช้อุปกรณ์เคลื่อนที่ควบคุมแชต worktree บนคอมพิวเตอร์ที่เชื่อมต่อได้ โดย repository และคำสั่งยังอยู่บนคอมพิวเตอร์นั้นหรือใน remote development environment
- โปรเจกต์ที่ไม่ใช่ Git ไม่มีการแยกด้วย worktree งานตามกำหนดเวลาจะใช้ไดเรกทอรีโปรเจกต์โดยตรง

## แหล่งอ้างอิงทางการ

- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Long-running work and parallel chats](https://learn.chatgpt.com/docs/long-running-work)
