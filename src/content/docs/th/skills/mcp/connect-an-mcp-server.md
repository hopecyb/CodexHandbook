---
legacyVerification:
  status: "verified"
  products: "ChatGPT Desktop App / Codex CLI / IDE"
  checkedAt: "2026-08-25"
title: เชื่อมต่อเซิร์ฟเวอร์ MCP
description: ใช้ CLI หรือ config.toml ตั้งค่า ยืนยันตัวตน และตรวจเซิร์ฟเวอร์ MCP แรก
locale: th
source_locale: zh-CN
source_revision: '67b417d'
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
---

บทนี้ใช้ interface ทางการปัจจุบันทำวงจรขั้นต่ำให้ครบ: **เพิ่มเซิร์ฟเวอร์ -> ดู config -> ยืนยันเครื่องมือใน session -> เรียกแบบ read-only หนึ่งครั้ง**

![ภาพประกอบ: ผู้ช่วยตัวเล็กเสียบ connector เข้ากับเซิร์ฟเวอร์ ไฟเขียวติดหลังอนุญาต คำขอทดสอบส่งตามสายไปฐานข้อมูลและได้รับผลกลับ](/illustrations/mcp-connect.webp)

## ก่อนเริ่ม

- อ่าน [ภาพรวม MCP](/th/skills/mcp/mcp-overview/) แล้ว
- รัน `codex mcp --help` ในเครื่องได้
- การเชื่อมครั้งแรกใช้แหล่งที่เชื่อถือได้และสถานการณ์ read-only
- ไม่เขียน token จริงลงประวัติคำสั่ง พรอมป์ หรือรีโพซิทอรี

## เส้นทาง A: เพิ่มเซิร์ฟเวอร์ STDIO ด้วย CLI

ตัวอย่างทางการใช้เซิร์ฟเวอร์เอกสาร Context7:

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

คำสั่งนี้เขียนเซิร์ฟเวอร์ลง config ของ Codex ส่วนหลัง `--` คือคำสั่งเริ่มเซิร์ฟเวอร์ STDIO การรันครั้งแรกอาจต้องดาวน์โหลด npm package จึงควรยืนยันชื่อแพ็กเกจและแหล่งที่มาก่อน

## เส้นทาง B: แก้ config.toml โดยตรง

ค่าเริ่มต้นของ config ระดับผู้ใช้อยู่ที่ `~/.codex/config.toml` โปรเจกต์ที่เชื่อถือได้ใช้ `.codex/config.toml` ระดับโปรเจกต์ได้

ตัวอย่าง STDIO:

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

ตัวอย่าง Streamable HTTP ระยะไกล:

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

`internal_docs`, ที่อยู่ และชื่อเครื่องมือเป็นเพียงตัวอย่างโครงสร้าง ต้องแทนด้วยค่าจริงจากเอกสารของเซิร์ฟเวอร์ `bearer_token_env_var` เก็บชื่อ environment variable ไม่ใช่ตัว token

## เซิร์ฟเวอร์ OAuth

หลังตั้งค่าเซิร์ฟเวอร์ที่รองรับ OAuth ให้รัน:

```bash
codex mcp login <server-name>
```

รายการ MCP ใน Desktop App และ IDE จะแสดงเซิร์ฟเวอร์ที่ต้องใช้ OAuth พร้อมการกระทำ Authenticate

## วิธีดูในไคลเอนต์สามแบบ

| พื้นผิว | จุดตั้งค่าหรือดู |
|---|---|
| ChatGPT Desktop App | Settings -> MCP servers; Restart หลังบันทึก; พิมพ์ `/mcp` เพื่อดูการเชื่อมต่อ |
| Codex CLI | `codex mcp add/list/login`; พิมพ์ `/mcp` ใน TUI |
| IDE extension | เมนูเฟือง -> MCP servers; Restart extension หลังบันทึก |

ทั้งสามแชร์ config บน Codex host เดียวกัน ไม่ต้องดูแลสามไฟล์แยก ChatGPT Web ไม่อ่าน config ในเครื่อง

## พรอมป์ตรวจสอบ

```text
ใช้เฉพาะเซิร์ฟเวอร์ MCP ที่เชื่อมต่ออยู่ในขณะนี้ทำการตรวจต่อไปนี้:
1. ระบุชื่อเครื่องมือที่ใช้ค้นเอกสารพัฒนาทั้งหมด;
2. เลือกเครื่องมือ read-only หนึ่งรายการเพื่อค้นวิธีใช้พื้นฐานของ Node.js test runner;
3. ระบุว่าเรียกเครื่องมือใดจริง;
4. ห้ามเขียนข้อมูลและห้ามเชื่อมบริการอื่น
```

หลักฐานการยอมรับ: เซิร์ฟเวอร์ปรากฏใน `codex mcp list` หรือ `/mcp`, เครื่องมือ read-only ส่งผลลัพธ์แบบมีโครงสร้างสำเร็จ และไม่มีการขอสิทธิ์ที่ไม่เกี่ยวข้อง

## ตัวเลือก least privilege

- `enabled_tools`: อนุญาตเฉพาะเครื่องมือที่ระบุ
- `disabled_tools`: ตัดเครื่องมือเพิ่มหลังใช้ allowlist
- `enabled = false`: เก็บ config ไว้แต่ปิดชั่วคราว
- `required = true`: ให้การเริ่มระบบล้มเหลวเมื่อเซิร์ฟเวอร์เริ่มไม่สำเร็จ เหมาะกับ dependency ที่ขาดไม่ได้จริง ๆ

## เมื่อล้มเหลว

อย่าเดาแล้วแก้หลายฟิลด์พร้อมกัน ให้บันทึก error ต้นฉบับ แล้วทำตาม [แก้ปัญหาการเชื่อมต่อ MCP](/th/skills/mcp/debugging-mcp/) เพื่อตรวจการอ่าน config, process/เครือข่าย, การยืนยันตัวตน และเครื่องมือแต่ละรายการตามลำดับ

## แหล่งข้อมูลทางการ

- [OpenAI: เชื่อม Codex กับเซิร์ฟเวอร์ MCP](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)
