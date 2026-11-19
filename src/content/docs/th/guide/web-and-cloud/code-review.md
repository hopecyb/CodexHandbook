---
legacyVerification:
  status: "verified"
  products: "Cloud / GitHub"
  checkedAt: "2026-08-26"
title: Code review บน Cloud และ GitHub
description: ตรวจ diff จาก Cloud และใช้ Codex บน GitHub เป็น Review เสริมที่มีสัญญาณสูง
locale: th
source_locale: zh-CN
source_revision: "ea6796a"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 50
---

เมื่องาน Cloud เสร็จ ระบบจะแสดงสรุปและ diff คุณถามต่อ ขอแก้ไข หรือสร้าง PR ได้ งานเสร็จไม่ได้หมายถึงอนุมัติให้ merge ผลลัพธ์ยังต้องผ่าน CI การป้องกัน branch และดุลยพินิจของมนุษย์ในโปรเจกต์

## Review สองประเภท

| ประเภท | ตรวจอะไร | ผลลัพธ์ |
|---|---|---|
| Review ผลลัพธ์ Cloud | สรุป, log และ diff ของงานนี้ | ตัดสินใจว่าจะติดตามต่อหรือสร้าง PR |
| GitHub Codex review | diff ของ PR ใน repository ที่เชื่อมต่อ และกฎใน `AGENTS.md` | เผยแพร่ GitHub code review |

เขียนความคิดเห็นใน GitHub PR ว่า:

```text
@codex review
```

Codex จะเผยแพร่สิ่งที่พบในรูปแบบ GitHub review ปกติ เอกสารทางการปัจจุบันระบุว่าความคิดเห็นบน GitHub เน้นปัญหาความสำคัญสูงระดับ P0/P1 และอาจแสดงเพียง reaction เมื่อไม่พบปัญหา อย่าข้ามการ Review โดยมนุษย์เพียงเพราะมีความคิดเห็นน้อย

## ลำดับการ Review

1. **ขอบเขต**: ไฟล์ ไดเรกทอรี dependency และไฟล์ที่สร้างขึ้นตรงตามงานหรือไม่
2. **พฤติกรรม**: เส้นทางปกติ ล้มเหลว และกรณีขอบเขตตรงตามข้อกำหนดหรือไม่
3. **ความปลอดภัย**: การยืนยันตัวตน สิทธิ์ การจัดการอินพุต ข้อมูลประจำตัว และเครือข่ายขาออก
4. **หลักฐาน**: รันทดสอบอะไรจริง และเปิดเผยรายการที่ล้มเหลวหรือไม่
5. **การย้อนกลับ**: ยกเลิกเฉพาะส่วนได้หรือไม่ และมีการ refactor ที่ไม่เกี่ยวข้องปะปนหรือไม่

ตัวอย่างพรอมต์:

```text
Review PR นี้ และรายงานเฉพาะสิ่งที่ทำให้พฤติกรรมผิด ข้อมูลเสียหาย เกิดปัญหาความปลอดภัย
หรือ compatibility regression แต่ละรายการต้องระบุความรุนแรง ตำแหน่งที่ชัดเจน เงื่อนไขที่ทำให้เกิด และผลกระทบ
อย่านับความชอบด้านสไตล์เป็นข้อบกพร่อง
```

## กฎเฉพาะ repository

เพิ่มใน `AGENTS.md` ของไดเรกทอรีที่เกี่ยวข้อง:

```md
## Code Review Rules

### Authentication boundaries

- Flag any path that logs access tokens or sends them to non-allowlisted hosts.
  Safe path: keep tokens in the credential provider and redact diagnostic output.
```

กฎที่รากมีผลทั่ว repository ส่วน `AGENTS.md` ที่ซ้อนอยู่เพิ่มการตรวจเฉพาะบริการได้ เริ่มจากกฎระยะยาวสองสามข้อที่อธิบายเส้นทางปลอดภัยได้ และอย่าใส่ชื่อฟังก์ชันที่ล้าสมัยง่ายมากเกินไป

## ขอบเขตของ Review อัตโนมัติ

ผู้ใช้ที่มีสิทธิ์ GitHub push หรือ admin ตามที่กำหนด เปิด automatic reviews ให้ repository ได้ใน Codex Settings Review อัตโนมัติเป็น gate เสริมและไม่ควรมีสิทธิ์ merge อัตโนมัติ repository ความเสี่ยงสูงยังต้องมี required reviewers, CI และการป้องกัน branch

## เช็กลิสต์ตรวจรับ

- [ ] มนุษย์อ่าน diff ของตรรกะหลักแล้ว
- [ ] แก้ข้อค้นพบ P0/P1 แล้ว หรือยอมรับความเสี่ยงเป็นลายลักษณ์อักษร
- [ ] CI ผ่าน และอธิบายบันทึกการรันซ้ำหลังล้มเหลวได้
- [ ] ไม่มี Secret, ไฟล์ที่สร้างโดยไม่ตั้งใจ หรือการอัปเดต lockfile ที่ไม่เกี่ยวข้อง
- [ ] คำอธิบายงาน คำอธิบาย PR และการเปลี่ยนแปลงจริงตรงกัน

## แหล่งข้อมูลทางการ

- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
- [Code review ข้ามไคลเอนต์](https://learn.chatgpt.com/docs/code-review)
