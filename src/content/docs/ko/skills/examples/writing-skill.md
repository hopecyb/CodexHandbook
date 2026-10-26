---
title: "예시: 출처와 문체 샘플을 갖춘 글쓰기 Skill"
description: "전체 출처 기반 글쓰기 자료를 내려받아 주장-근거 연결, 문체 수정, 충돌 보존, 사람의 검토를 연습합니다."
contentType: skill
audiences: [creator]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "출처 및 인용 구조 검사와 회귀 검사 8개가 통과했습니다. 글과 문체는 작성자가 자체 검토했고, 트리거 사례는 설계상 예상입니다. 모델의 글쓰기 품질과 자동 라우팅은 시험하지 않았습니다."
  environment: "Python 3.12.11 / Darwin arm64; 독창적인 합성 자료 세 건, 임시 복사본, 서드파티 의존성 없음."
  evidence:
    - label: "검증 범위와 작성자 자체 검토 기록"
      href: /downloads/skills/source-backed-writer/validation/record.md
assets:
  - path: /downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip
    purpose: "Skill, 문체 샘플, 합성 자료, 참고 초안, 주장 근거표, 수정 diff, 구조 검사"
    license: CC0-1.0
    version: 1.0.0
locale: ko
source_locale: zh-CN
source_revision: "cbaec37"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: "2026-10-26"
---
이 Skill은 제공된 자료를 근거를 다시 찾을 수 있는 글로 만들면서 문체 요구, 사실 근거, 미해결 항목을 보존합니다. 출처 기반 글쓰기와 사실 검토에 맞고, 오타 하나를 고치는 데에는 전체 과정이 필요하지 않습니다.

[전체 source-backed-writer v1.0.0 다운로드](/downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip) · [SKILL.md 보기](/downloads/skills/source-backed-writer/SKILL.md) · [설치 안내](/downloads/skills/source-backed-writer/README.md)

## 자료에 포함된 것

| 자료 | 용도 |
|---|---|
| 합성 자료 세 건과 해시 색인 | 가상의 제품을 실제 선택 정보로 착각하지 않고 고정 입력으로 연습 |
| 문체 샘플과 설계된 반례 | 근거 없는 효과 약속을 구체적인 행동으로 바꾸는 과정 확인 |
| 개요, 초안, 최종본, 수정 diff | 사실, 구조, 표현의 변경을 구분 |
| 주장 일곱 개의 근거표와 미해결 목록 | 원문 근거, 작성자 추론, 미확정 내용을 분리 |
| 긍정·부정 트리거 사례, 스크립트, 검증 기록 | 적용 범위와 검사 한계 명시 |

자료는 [출처 기반 기사 연습](/ko/cases/write-an-article/)의 가상 도구 “拾页”를 다시 씁니다. 먼저 그 연습을 끝내고 이 글쓰기 방법을 Skill로 저장해도 됩니다.

## 설치와 첫 호출

연습 프로젝트의 `.agents/skills/source-backed-writer/`에 전체 디렉터리를 놓고 `SKILL.md`가 바로 안에 있는지 확인하세요. 같은 이름의 Skill이 있다면 먼저 비교하고 기존 파일을 덮어쓰지 마세요. 발견 방법은 [Skill 사용하기](/ko/skills/use-a-skill/)를 보고, 클라이언트에서 선택 가능함을 확인한 후 명시적으로 호출합니다.

```text
$source-backed-writer 이 교육 자료의 sources/에 있는 자료 세 건을 읽고,
references/style.md에 따라 개인 작성자에게 소개하는 글을 쓰세요.
article.md, claim-map.csv, unresolved.md를 my-output/에 저장하세요.
합성 자료라는 성격을 유지하고 게시하지 마세요.
```

읽기와 글쓰기에 Python은 필요하지 않습니다. 선택적 구조 검사는 Python 3.10 이상 표준 라이브러리만 사용합니다. 압축을 푼 Skill 디렉터리에서 실행하세요.

```sh
# 포함된 참고 초안 검사
python3 scripts/check_article.py
# 자료 형식으로 만든 내 초안 검사
python3 scripts/check_article.py --output my-output
# 임시 복사본에서 검사 8개 재현
python3 validation/test_checks.py
```

이 페이지에서 실제로 실행한 것은 스크립트이며 특정 클라이언트의 자동 발견이나 모델 호출은 검증하지 않았습니다. 실제 작업에서 다른 출력 형식을 사용한다면 자신이 정한 기준에 맞춰 검사하고 교육 자료 형식으로 억지로 바꾸지 마세요.

## 문체가 글에 미치는 영향

[문체 샘플](/downloads/skills/source-backed-writer/references/style.md)은 설계된 비교를 보여 줍니다.

> 반례: 拾页는 어떤 형식이든 손쉽게 처리하고 생산성을 두 배로 높이는 만능 도구입니다.

“설명에는 Markdown과 일반 텍스트만 나옵니다. 먼저 적은 양의 메모 복사본으로 시험하고, 요약이 가리키는 원문을 다시 확인하세요.”로 바꿉니다. 첫 문장은 자료에서, 둘째 문장은 작성자의 조언에서 왔으므로 근거표에서 구분해야 합니다. 사용자가 다른 어조나 구조를 요구하면 실제 요청을 따르세요.

[참고 최종본](/downloads/skills/source-backed-writer/solution/article.md) · [주장 근거표](/downloads/skills/source-backed-writer/solution/claim-map.csv) · [수정 diff](/downloads/skills/source-backed-writer/solution/revision.diff)

## 충돌과 누락 처리

제품 설명 P3은 진단 업로드가 기본적으로 꺼져 있다고 하고 버전 요약 C2는 새 설치에서 켜져 있다고 합니다. 최종본은 둘을 나란히 설명하고 날짜가 늦은 자료를 자동으로 옳다고 판단하지 않습니다. 업로드되는 필드는 알려지지 않아 [미해결 목록](/downloads/skills/source-backed-writer/solution/unresolved.md)에 남깁니다.

합성 인터뷰에는 시간 측정이나 고정 평가 샘플이 없어 “효율 두 배” 또는 정확도 수치를 쓸 수 없습니다. 근거 없는 숫자를 제거하고 제한 조건을 되살리고 근거표를 업데이트하세요. 가상의 제품에 대해 그럴듯한 답을 검색하는 것은 해결책이 아닙니다.

## 완료 기준과 검사 한계

글을 쓴 뒤 하나씩 확인하세요.

- 중요한 주장에 추적 가능한 위치가 있고 사실, 조언, 미지의 내용이 분리되어 있습니다.
- 합성 자료라는 정체, 입력 제한, 미해결 충돌이 본문에 남아 있습니다.
- 문체 수정이 필요한 제한을 없애거나 사용자가 요구한 구조를 바꾸지 않았습니다.
- 인용 형식이 통과한 뒤 번호 존재만 보지 말고 모든 문장을 자료와 대조합니다.

스크립트는 출처 해시 변경과 인용 구조 오류를 찾지만 출처가 주장을 의미상 뒷받침하는지는 판단하지 못합니다. 자료는 유효한 번호만 있으면 구조 검사를 통과하는 거짓 기능 보장을 의도적으로 시험합니다. 사람의 사실 검토는 여전히 필요합니다.

## Skill을 작동시키지 말아야 할 때

오타 수정, Git 패치 검토, 소프트웨어 기능 추가가 자동으로 전체 기사 작성 작업이 되어서는 안 됩니다. 글을 완료해도 게시 권한은 생기지 않습니다. [트리거 사례](/downloads/skills/source-backed-writer/fixtures/trigger-cases.json)는 설계상 예상이지 라우팅 성공률 보고가 아닙니다.

완료 후 [창작자 경로](/ko/guide/learning-paths/creator/)로 돌아가 이번에 사용한 문체와 완료 기준을 재사용 설명에 기록하세요.
