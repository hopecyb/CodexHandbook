---
legacyVerification:
  status: "verified"
  products: "CLI / API"
  basis: "เอกสารโมเดลและการเปรียบเทียบของ OpenAI API ปัจจุบันยังระบุความสามารถ `Structured outputs` เนื้อหาหน้านี้จำกัดอยู่ที่แนวปฏิบัติทั่วไปในการ “ออกแบบ output interface ที่เสถียรสำหรับงานแบบไม่โต้ตอบ” ส่วน JSON schema การตรวจสอบ และกลยุทธ์ fallback ในตัวอย่างเป็นคำอธิบายรูปแบบทางวิศวกรรม"
  checkedAt: "2026-07-26"
title: "Structured output"
description: "ให้ exec สร้างผลลัพธ์ที่เครื่อง parse ได้ สำหรับขั้นตอน downstream, dashboard และ gate"
locale: th
source_locale: zh-CN
source_revision: "e80b5d7"
translation_status: reviewed
translated_at: 2026-11-19
reviewed_at: 2026-11-19
sidebar:
  order: 30
---

เมื่อเริ่มทำ automation หลายคนให้ Codex ตอบเป็นข้อความที่ “ดูสมเหตุสมผล” โดยค่าเริ่มต้น ซึ่งพอสำหรับคนอ่าน แต่ไม่เป็นมิตรกับสคริปต์

Structured output แก้ปัญหาโดยตรง: ให้ Codex คืนผลตามรูปแบบที่คุณกำหนด

หากงานแบบไม่โต้ตอบมีแต่ข้อความอิสระ ขั้นตอนถัดไปจะตัดสินอัตโนมัติได้ยากว่า “ผ่านหรือล้มเหลว” “พบกี่ปัญหา” หรือ “รุนแรงเพียงใด” Structured output ทำให้ผลลัพธ์พร้อมสำหรับการประมวลผลต่อด้วยเครื่อง

## เนื้อหาในหน้านี้

- เมื่อใดควรกำหนด JSON / ตาราง Markdown / field คงที่
- กำหนด schema ใน Prompt อย่างไร
- กลยุทธ์ fallback เมื่อ parse ไม่สำเร็จ

## ความเข้าใจผิดที่พบบ่อย

### Structured output มีไว้ให้ขั้นตอนถัดไปรับต่อได้

หลายคนมองคำว่า JSON และ schema ว่าเป็นความพิถีพิถันเกินจำเป็น

เหตุผลจริงคือ หากขั้นต่อไปต้องให้สคริปต์ตัดสินสำเร็จหรือล้มเหลว ให้ bot ส่งความคิดเห็น หรือให้ dashboard แสดงผล คุณต้องมีรูปแบบที่เสถียร ไม่ใช่ให้โปรแกรมเดาความหมายทุกครั้ง

### รูปแบบเสถียรไม่ได้แปลว่าข้อสรุปเชื่อถือได้

Structured output รับประกันได้เพียงว่า “มีรูปแบบตามที่ขอ” ไม่ได้รับประกันว่าเข้าใจงานถูกต้อง

จึงแก้ปัญหา output interface แต่ไม่แทนการกำหนดงานและตรวจสอบผล

## ความต่างโดยตรง

- ข้อความอิสระ: เหมาะให้คนอ่าน
- Structured output: เหมาะให้โปรแกรมอ่าน

หากขั้นตอนถัดไปคือ `jq`, สคริปต์, dashboard, กฎ gate หรือ bot แสดงความคิดเห็น คุณไม่ควรพึ่งเพียงภาษาธรรมชาติแบบอิสระ

## วิธีขั้นต่ำที่ใช้ได้

กำหนดรูปแบบไว้ท้าย prompt:

```text
…(เนื้อหางาน)…

ข้อกำหนด output:
- ส่งออกเฉพาะ JSON object เดียว ห้ามใช้ markdown code fence
- Field: {"pass": boolean, "findings": [{"severity":"P0|P1|P2", "file":"", "message":""}]}
- หากไม่พบปัญหา ให้ findings เป็น array ว่าง
```

การ parse ด้วย Shell เป็นเพียงตัวอย่าง:

```bash
result=$(codex exec --cd . "$(cat prompts/structured-review.md)")
echo "$result" | jq -e '.pass == true'
```

## จุดที่พลาดบ่อย

### 1. บอกเพียง “ส่งออก JSON” แต่ไม่ได้บอกว่า “ส่งออกได้เฉพาะ JSON”

โมเดลอาจอธิบายก่อนแล้วค่อยให้ JSON ทำให้ parse ล้มเหลว

### 2. วันนี้ใช้ชื่อ field หนึ่ง พรุ่งนี้ใช้อีกชื่อ

เมื่อสคริปต์พึ่งพา field แล้ว ต้องดูแล schema เหมือน interface ไม่ใช่เปลี่ยนตามใจ

### 3. คาดว่า Structured output จะแก้ความกำกวมทั้งหมด

มันแก้ได้เฉพาะ “ความเสถียรของรูปแบบ” หากนิยามงานไม่ชัด JSON ก็เพียงสร้างผลลัพธ์ที่สับสนอย่างสม่ำเสมอ

## Workflow ที่แนะนำ

```text
กำหนด schema (เวอร์ชัน v1)
    → prompt อ้างไฟล์ schema @schemas/review-output.json
    → รัน exec
    → ตรวจด้วย jq / validator ที่สร้างเอง
    → หากไม่ผ่าน ให้ exit 1
```

สำหรับ output ขนาดใหญ่ ให้กำหนด field เป็นพาธไฟล์ แล้วให้ Agent เขียนลง `artifacts/` และให้ CI อัปโหลด artifact

## วิธีตัดสิน

หากผลลัพธ์ต้องส่งต่อให้ “โปรแกรมขั้นถัดไป” ให้จัดโครงสร้างเท่าที่ทำได้  
หากผลลัพธ์มีไว้ให้คนอ่านและหารือ ข้อความอิสระมักเป็นธรรมชาติกว่า

เมื่อโปรแกรมต้องประมวลผลต่อ ควรให้ Codex คืนค่าตาม field ที่ตกลงไว้อย่างสม่ำเสมอ

## เปรียบเทียบกับ SDK

| | CLI + JSON prompt | SDK |
|---|---|---|
| ต้นทุน integration | ต่ำ | ปานกลาง |
| Type safety | อาศัยข้อตกลง + validation | ใช้ type ของ SDK ได้ |
| เหมาะกับ | สคริปต์ CI | บริการหลาย tenant |

ดู [ภาพรวม SDK](/th/guide/developer-platform/sdk-overview/)

## ข้อผิดพลาดที่พบบ่อย

- output ของโมเดลมีคำอธิบายปะปนจน parse JSON ไม่ได้ ให้เน้น “เฉพาะ JSON” ใน prompt
- เปลี่ยน Schema โดยไม่เพิ่มเวอร์ชัน ทำให้ CI เก่า parse ผิด
- ส่ง secret กลับมาใน field JSON และบันทึกลง log
- ไม่กำหนดพฤติกรรม exit ที่ชัดเจนเมื่อ parse ล้มเหลว

## Checklist การตรวจรับ

- [ ] มีไฟล์ schema หรือเอกสาร field
- [ ] CI ล้มเหลวอย่างชัดเจนเมื่อ parse ไม่ได้
- [ ] เก็บ output ตัวอย่างใน `fixtures/` สำหรับ regression
- [ ] สอดคล้องกับกลยุทธ์ [exit code](/th/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## แหล่งอ้างอิง
- แนวปฏิบัติทั่วไปของ OpenAI structured outputs ในระดับแนวคิด
