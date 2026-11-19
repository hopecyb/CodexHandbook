---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  checkedAt: "2026-08-26"
title: เมทริกซ์สิทธิ์
description: แยกความแตกต่างระหว่าง Permission Profile ภายในเครื่อง, sandbox แบบเดิม และนโยบายเครือข่ายของ Cloud
locale: th
source_locale: zh-CN
source_revision: "c38e374"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 70
---

อย่าใช้ตารางตายตัวที่บอกว่า “App/CLI/IDE/Cloud จะแสดงกล่องโต้ตอบหรือไม่” เพื่อคาดเดาสิทธิ์ พฤติกรรมจริงขึ้นอยู่กับตำแหน่งที่ทำงาน การกำหนดค่าที่มีผล requirements ขององค์กร ระบบปฏิบัติการ และการทำงานของงานนั้นร่วมกัน

![ลำดับการตัดสินใจระหว่างการบล็อกโดย sandbox การอนุมัติจากมนุษย์ และผลการทำงาน](/illustrations/flow-sandbox-approval.webp)

## แยกกลไกทั้งสามให้ชัดเจนก่อน

| กลไก | ขอบเขต | การควบคุมหลัก |
|---|---|---|
| Permission Profiles ภายในเครื่อง (Beta) | คำสั่งภายในเครื่องบน macOS, Linux, WSL และ Windows แบบเนทีฟ | read/write/deny ของระบบไฟล์และปลายทางเครือข่าย |
| การตั้งค่า sandbox แบบเดิม | Codex ภายในเครื่อง | `read-only`, `workspace-write`, `danger-full-access` และนโยบายการอนุมัติ |
| นโยบายสภาพแวดล้อม Cloud | Codex Cloud | คอนเทนเนอร์แบบแยก การเชื่อมต่อเครือข่ายระหว่าง setup และ allowlist/เมธอด HTTP สำหรับเครือข่ายของ Agent |

Permission Profiles จะไม่ทำงานร่วมกับ `sandbox_mode` แบบเดิม หากการกำหนดค่าที่โหลดมี `sandbox_mode`, ส่ง `--sandbox` ผ่านบรรทัดคำสั่ง หรือ Profile การกำหนดค่าตั้งค่า sandbox ไว้ Codex จะใช้การตั้งค่า sandbox แบบเดิมแทน `default_permissions`

## Permission Profiles ในตัวสำหรับเครื่อง

| ชื่อ | ขอบเขต | เหมาะสำหรับ |
|---|---|---|
| `:read-only` | คำสั่งภายในเครื่องอ่านได้อย่างเดียว | ทำความเข้าใจโค้ด, Review และเริ่มทำงานกับ repository ที่ยังไม่คุ้นเคย |
| `:workspace` | เขียนได้ใน workspace roots ปัจจุบันและไดเรกทอรีชั่วคราวของระบบ | งานพัฒนาทั่วไป |
| `:danger-full-access` | ยกเลิกข้อจำกัดของ sandbox ภายในเครื่อง | ใช้เฉพาะเมื่อมีการแยกสภาพแวดล้อมจากภายนอกแล้วและจำเป็นอย่างชัดเจน |

Profile แบบกำหนดเองสามารถตั้ง `read`, `write` และ `deny` ให้แต่ละพาธ พร้อมใช้กฎที่เฉพาะเจาะจงกว่าเพื่อแยกไฟล์สำคัญอย่าง `.env` ออกจากขอบเขตกว้างได้ เมื่อกฎขัดแย้งกันบนพาธเดียวกัน `deny` มีลำดับความสำคัญเหนือ `write` และ `write` เหนือ `read`

## ตัวอย่างสิทธิ์ขั้นต่ำ

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true` อนุญาตให้คำสั่งเชื่อมต่อเครือข่ายเท่านั้น คุณยังต้องเปิด `features.network_proxy` ด้วย กฎโดเมนจึงจะถูกบังคับใช้ผ่านพร็อกซี

## ประเมินตามการทำงาน

| การทำงาน | ความเสี่ยงหลัก | ขอบเขตขั้นต่ำ |
|---|---|---|
| อ่านซอร์สโค้ด | ไฟล์สำคัญถูกนำเข้าสู่บริบท | อ่าน workspace และกำหนด deny สำหรับ credentials อย่างชัดเจน |
| แก้ไขไฟล์ | เขียนทับหรือลบเกินขอบเขต | เขียนเฉพาะ workspace เป้าหมายและตรวจ diff ก่อน |
| รันการทดสอบ | ผลข้างเคียงจากสคริปต์ | ตรวจสคริปต์และใช้สภาพแวดล้อมที่ควบคุมได้ |
| ติดตั้ง dependency | ความเสี่ยงด้าน supply chain และเครือข่าย | ตรึงเวอร์ชันและจำกัดโดเมน |
| Git push / PR | การเปลี่ยนสถานะภายนอก | แยก branch ใช้การป้องกัน branch และให้มนุษย์ Review |
| เครื่องมือ MCP/Plugin | ข้อมูลจากบุคคลที่สามและการเขียนข้อมูล | ใช้ scope ขั้นต่ำ อนุมัติทีละรายการ และเก็บบันทึก |

`AGENTS.md` ระบุได้ว่า “อย่า push” แต่ไม่ใช่ขอบเขตบังคับเชิงเทคนิค ต้องใช้กฎนี้ร่วมกับ sandbox/permissions, สิทธิ์ GitHub และการ Review โดยมนุษย์

## วิธีตรวจสอบสำหรับทีม

1. บันทึกเวอร์ชันของไคลเอนต์และ Codex
2. แสดงรายการชั้นการกำหนดค่าทั้งหมดที่โหลด
3. ยืนยันว่าใช้ Permission Profile หรือ sandbox แบบเดิม
4. ใช้ไดเรกทอรีทดสอบที่ไม่มีข้อมูลสำคัญเพื่อตรวจ read, write, deny และเครือข่ายแยกกัน
5. จากนั้นจึงเชื่อม repository จริง พร้อมคงด่านควบคุมของ Git และองค์กรไว้

Permission Profiles ยังอยู่ในสถานะ Beta จึงควรรันชุดการตรวจสอบนี้อีกครั้งหลังอัปเกรด

## แหล่งอ้างอิงอย่างเป็นทางการ

- [Permissions (Beta)](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
