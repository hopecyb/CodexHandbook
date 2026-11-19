---
caseCategory: team
directoryOrder: 115
contentType: case
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "ข้อมูลแผน Codex ปัจจุบันใน OpenAI Help Center ยังระบุว่าแอปเดสก์ท็อปรองรับ Codex agents แบบขนาน มี worktree ในตัว และมอบหมายงานไปยัง Cloud ได้ หน้านี้สรุปเฉพาะรูปแบบการทำงานร่วมกัน ได้แก่ ‘สำรวจแบบขนาน แยกขอบเขตด้วยไดเรกทอรี หลีกเลี่ยงการ push พร้อมกัน และให้คนรวมข้อสรุป’ โดยไม่ผูกกับขั้นตอน UI ใดขั้นตอนหนึ่ง"
  checkedAt: "2026-07-26"
title: ประสานงาน Agent หลายตัว
description: กรณีศึกษาการสำรวจแบบขนาน แบ่งงาน และรวมผลลัพธ์
locale: th
source_locale: zh-CN
source_revision: "7b143fc"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

## ข้อมูลเมตา

| ฟิลด์ | เนื้อหา |
|---|---|
| ผู้อ่านที่เหมาะสม | นักพัฒนา / ทีม |
| ไคลเอนต์ | แอปเดสก์ท็อป |
| เวลาโดยประมาณ | ขึ้นอยู่กับงาน |

## 1. เป้าหมายและบริบท

**เป้าหมาย:** แยกปัญหาย่อยที่ทำพร้อมกันได้ให้ Agent หลายตัว แล้วให้คนรวมข้อสรุป

**เกณฑ์ความสำเร็จ:** Agent ย่อยแต่ละตัวมีนิยามความสำเร็จของตนเอง และไม่เขียนทับไฟล์เดียวกัน

## 2. รูปแบบที่แนะนำ

### สำรวจแบบขนาน แล้วให้คนเลือกแนวทาง

```text
Agent 1: ข้อดี ข้อเสีย และปริมาณงานของแนวทาง A
Agent 2: ข้อดี ข้อเสีย และปริมาณงานของแนวทาง B
(หลังจากคุณเลือกแนวทาง ให้ Agent ตัวเดียวลงมือทำ)
```

### แยกด้วย worktree

ให้ Agent แต่ละตัวแก้คนละ branch ใน [git worktree](/th/guide/desktop-app/worktrees/) แล้วให้คน merge ในตอนท้าย

## 3. กติกาการประสานงาน (แนะนำให้เขียนใน AGENTS.md)

- กำหนดขอบเขตไดเรกทอรีของ Agent แต่ละตัวให้ชัดเจน
- ห้าม `git push` พร้อมกัน
- รัน CI ชุดเดียวกันก่อน merge

## 4. เนื้อหาที่เกี่ยวข้อง

- [การทำงานร่วมกันของ Agent หลายตัว](/th/cases/workflows/multi-agent-coordination/)
- [Agent ย่อย](/th/guide/agent-work/subagents/)
