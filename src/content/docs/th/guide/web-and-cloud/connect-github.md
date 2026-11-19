---
legacyVerification:
  status: "verified"
  products: "Cloud / GitHub"
  checkedAt: "2026-08-26"
title: เชื่อมต่อ GitHub
description: กำหนดการเข้าถึง GitHub ให้ Codex Cloud เฉพาะ repository ที่จำเป็น
locale: th
source_locale: zh-CN
source_revision: "b126a7e"
translation_status: stale
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 10
---

Codex Cloud ต้องเชื่อมต่อ GitHub หรือ GitLab (Beta) ก่อน แล้วจึงสร้างสภาพแวดล้อมให้ repository ขอบเขตการเชื่อมต่อ GitHub กำหนดว่า Codex มองเห็น repository ใด ส่วน clone ในเครื่องและการเปลี่ยนแปลงที่ยังไม่ push อยู่นอกขอบเขตนี้

## ขั้นตอนการเชื่อมต่อ

1. เปิด Codex Cloud แล้วเข้าสู่ระบบด้วยบัญชี ChatGPT
2. เชื่อมต่อ GitHub ตามคำแนะนำ
3. เลือกองค์กรและ **repository ที่จำเป็น** ในหน้าการอนุญาตของ GitHub
4. กลับไปที่ Codex เลือก repository แล้วสร้างสภาพแวดล้อม Cloud
5. ใช้งานแบบอ่านอย่างเดียวหรือแก้ไขเล็กน้อย เพื่อตรวจ clone, branch และ diff
6. หากต้องการ PR review ให้เปิด Code review สำหรับ repository ใน Codex Settings

อนุญาตเฉพาะ repository ที่งานนี้ต้องใช้ สำหรับ repository ของทีม ต้องตรวจด้วยว่าองค์กรอนุญาตให้ติดตั้งการเชื่อมต่อ บัญชีปัจจุบันมีสิทธิ์ที่เหมาะสม และยังคงใช้การป้องกัน branch

## ตรวจสอบก่อนและหลังเชื่อมต่อ

- [ ] repository เป้าหมายไม่ใช่ fork ชื่อเดียวกันที่เลือกผิด
- [ ] ยืนยัน branch เริ่มต้นและจุดเริ่มงานแล้ว
- [ ] push การเปลี่ยนแปลงในเครื่องที่จำเป็นแล้ว หรือระบุชัดว่าไม่รวมในงาน
- [ ] ห้ามเขียนตรงไปยัง branch หลักโดยไม่ผ่านการ Review
- [ ] สภาพแวดล้อมไม่มีข้อมูลประจำตัวสิทธิ์เต็มระดับ production
- [ ] งานแรกแก้เฉพาะไฟล์ความเสี่ยงต่ำ

## การใช้งานสองแบบบน GitHub

### ให้ Cloud ทำงาน

เลือกสภาพแวดล้อม repository และ branch เริ่มต้นใน Codex Cloud แล้วอธิบายเป้าหมาย เมื่องานเสร็จให้ตรวจ diff ก่อนสร้าง PR

### ให้ Codex Review PR

หลังเปิด Code review ให้ repository แล้ว ให้เขียนในความคิดเห็นของ PR ว่า:

```text
@codex review
```

Codex จะเผยแพร่ GitHub review มาตรฐาน การ Review อัตโนมัติต้องเปิดแยกใน Codex Settings ทีมเขียนกฎเฉพาะ repository ได้ใน `## Code Review Rules` ของ `AGENTS.md`

## วิธีวิเคราะห์ปัญหาสิทธิ์

- repository ไม่อยู่ในรายการ: ตรวจขอบเขต repository ที่อนุญาตใน GitHub
- repository ขององค์กรตอบ 403: ตรวจนโยบายองค์กร, SSO และสิทธิ์ติดตั้ง
- เปิด automatic review ไม่ได้: ตรวจว่ามีสิทธิ์ GitHub push หรือ admin ที่จำเป็น
- Cloud มองไม่เห็น commit ในเครื่อง: Cloud checkout จาก remote repository เท่านั้น ให้ push ไปยัง branch ที่ระบุชัดก่อน

อย่าอนุญาต repository ส่วนตัวทั้งหมดเพียงเพื่อแก้ 403 หนึ่งครั้ง ให้ยืนยัน repository เป้าหมายและสิทธิ์ที่ขาดโดยเฉพาะก่อน

## แหล่งข้อมูลทางการ

- [เริ่มต้นใช้งาน Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
