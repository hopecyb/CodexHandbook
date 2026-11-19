---
legacyVerification:
  status: "verified"
  products: "CLI / GitHub Actions"
  basis: "ตรวจเทียบกับเอกสาร Non-interactive mode และคำแนะนำ Codex GitHub Action ปัจจุบันแล้ว แก้ `--cd` ให้ถูกต้อง และกำหนดการแยก job ที่เก็บ API key ออกจากสิทธิ์เขียน repository เป็นขอบเขตความปลอดภัยเริ่มต้น"
  checkedAt: "2026-08-26"
title: "สคริปต์และ pipeline"
description: "จัดงาน codex exec ใน shell, Makefile และ GitHub Actions ให้ทำซ้ำและตรวจสอบย้อนหลังได้"
locale: th
source_locale: zh-CN
source_revision: "07aeb4f"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 20
---

หน้านี้อธิบายวิธีเปลี่ยน Codex จากการทำงานเฉพาะครั้ง ให้เป็นขั้นตอน automation ที่ **ทีมรันซ้ำได้ ติดตามปัญหาได้ และส่งต่อให้คนอื่นได้**

กล่าวโดยย่อ สคริปต์ตรึงกระบวนการ ส่วน pipeline รันกระบวนการซ้ำตามกฎ

บทนี้อธิบายวิธีฝัง [codex exec](/th/guide/developer-platform/non-interactive/codex-exec/) ใน shell, Makefile หรือ CI pipeline

## เนื้อหาในหน้านี้

- การแบ่งหน้าที่ระหว่างสคริปต์ในเครื่องกับ CI job
- วิธีจัดการ Prompt และ secret
- การใช้ร่วมกับ [ระบบตรวจทานโค้ดอัตโนมัติ](/th/guide/developer-platform/ci-cd/code-review-automation/)

## หน้านี้แก้ปัญหาอะไร

“สคริปต์และ pipeline” เปลี่ยน “วันนี้ฉันทำด้วยมือแบบนี้ครั้งหนึ่ง” เป็น “หลังจากนี้ทีมทำซ้ำแบบเดิมได้อย่างสม่ำเสมอ”

จึงเน้นสามเรื่อง:

- ทำซ้ำได้
- ตรวจสอบย้อนหลังได้
- ส่งต่องานได้

## ทำไมหลายทีมไม่วาง prompt ลงในหน้า CI โดยตรง

เพราะดูแลรักษายาก:

- ผู้รับช่วงไม่รู้ว่าออกแบบไว้แบบใด
- เมื่อแก้ logic จะผ่าน code review ตามปกติไม่ได้
- เมื่องานล้มเหลว แยกยากว่า prompt สภาพแวดล้อม หรือสคริปต์เปลี่ยน

การเก็บ prompt สคริปต์ และกฎใน Git คือการทำ version control ให้กระบวนการ automation

## ความเข้าใจผิดที่พบบ่อย

### Automation เน้นความเสถียร ไม่ใช่ยิ่งเร็วสุดยิ่งดี

ผู้เริ่มทำ automation มักรีบเชื่อมกระบวนการทั้งหมดเข้าด้วยกัน

แต่หาก prompt ยังเปลี่ยนบ่อย เกณฑ์สำเร็จยังไม่ชัด และขอบเขตสิทธิ์ยังไม่นิ่ง ยิ่งทำอัตโนมัติเร็วก็ยิ่งหาสาเหตุยาก

### สคริปต์เหมาะสำหรับตรึงวิธีทำงาน

สคริปต์ที่ดีเปลี่ยนขั้นตอนที่เคยอาศัยความจำของคน ให้เป็นไฟล์ที่ทุกคนอ่านและ Review ได้

## Shell snippet ขั้นต่ำ

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cd "$ROOT" --ephemeral "$(cat "$PROMPT_FILE")"
```

นำ `prompts/ci/security-review.md` เข้า Git และให้การเปลี่ยนแปลงผ่าน Review

## นิสัยที่ควรสร้างก่อน

เมื่อทำ automation ครั้งแรก อย่าเริ่มจากระบบใหญ่ครบทุกอย่าง ให้ตรึงสามสิ่งนี้ก่อน:

1. เก็บไฟล์ Prompt ที่ไหน
2. สคริปต์จุดเข้าชื่ออะไร
3. ตัดสินสำเร็จหรือล้มเหลวอย่างไร

จากนั้นการเพิ่ม log, schema หรือการแจ้งเตือนจะง่ายขึ้น

## GitHub Actions: ใช้ Action ทางการ

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0
      - name: Run review
        uses: openai/codex-action@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          prompt-file: prompts/ci/pr-review.md
```

:::caution
ใน GitHub Actions ให้เลือกใช้ `openai/codex-action` ทางการ อย่าตั้ง API key เป็น environment variable ของทั้ง job ที่จะรันโค้ดจาก repository หากภายหลังต้องเขียน PR ให้แยกสิทธิ์เขียนออกจาก secret คนละ job และส่งต่อผ่าน patch artifact
:::

## Workflow ที่แนะนำ

| ระดับ | เนื้อหา |
|---|---|
| Repository | `prompts/`, `tools/run-codex.sh` |
| CI | checkout แบบอ่านอย่างเดียว ตรึง CLI อัปโหลด log artifact |
| Callback | ใช้ [Webhook](/th/guide/developer-platform/webhooks/overview/) อัปเดตระบบภายในได้ตามต้องการ |

## วิธีตัดสิน

งานเหมาะกับสคริปต์หรือ pipeline เมื่อมีสองเงื่อนไข:

- คุณจะทำซ้ำ
- คุณต้องการให้แต่ละครั้งใช้วิธีที่สอดคล้องกัน

ตัวอย่าง ได้แก่ การตรวจ PR สรุปการเปลี่ยนแปลง security scan และตรวจเอกสาร

อย่ารีบ “อัตโนมัติทั้งหมด” ขณะที่กระบวนการยังไม่นิ่ง ให้ตรึงวิธีเป็นสคริปต์ก่อน แล้วค่อยเชื่อมสคริปต์เข้ากับ pipeline

## ข้อผิดพลาดที่พบบ่อย

- ต่อ Prompt แบบ dynamic จาก `${{ github.event.pull_request.body }}` โดยไม่ escape จนเกิด injection
- ไม่มี concurrency control สำหรับ PR เดียว ทำให้รันซ้ำและเสียโควตา
- ในเครื่องผ่าน แต่ CI ขาด dependency เพราะไม่ได้รัน `npm ci`
- เกณฑ์สำเร็จมีเพียง “รันจบ” โดยไม่ parse ข้อสรุปแบบมีโครงสร้าง
- ให้สิทธิ์เขียนสูงเกินไปตั้งแต่เริ่มทำ automation

## ขอบเขตความปลอดภัย

- CI token ใช้สิทธิ์ขั้นต่ำ ห้าม `git push` เว้นแต่มี approval job แยก
- ใช้ secret อย่างระมัดระวังใน workflow ของ fork PR การใช้ pull_request_target ต้องผ่าน security review

## Checklist การตรวจรับ

- [ ] Prompt และสคริปต์มีเวอร์ชันใน Git
- [ ] CI ที่ล้มเหลวจะกั้นการ merge หากนโยบายกำหนด
- [ ] นโยบายเก็บ Artifact ตรงตามข้อกำหนด compliance
- [ ] พฤติกรรมตรงกับ `make review` ในเครื่อง

## แหล่งอ้างอิง
- เอกสาร OpenAI Codex + GitHub integration
