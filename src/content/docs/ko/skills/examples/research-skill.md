---
title: "예시: 충돌과 근거 부족을 구분하는 조사 Skill"
description: "완전한 조사 패키지를 내려받고 고정된 합성 자료로 출처 상태, 상충하는 근거, 미해결 질문, 추적 가능한 보고서를 연습합니다."
contentType: skill
audiences: [creator, developer]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "로컬 출처 검사와 회귀 테스트 8개가 통과했습니다. 참고 보고서는 작성자가 출처와 대조했으며, 모델 라우팅, 조사 품질, 네트워크 장애는 측정하지 않았습니다."
  environment: "Python 3.12.11 / Darwin arm64; 표준 라이브러리, 합성 자료 3개, 의도적으로 누락된 로컬 파일 1개."
  evidence:
    - label: "실제 검사 범위와 한계"
      href: /downloads/skills/evidence-research/validation/record.md
assets:
  - path: /downloads/skills/evidence-research/evidence-research-1.0.0.zip
    purpose: "조사 Skill, 고정 자료, 근거 표, 보고서, 출처 상태 검사기"
    license: CC0-1.0
    version: 1.0.0
locale: ko
source_locale: zh-CN
source_revision: "cf2b232"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: "2026-10-26"
---

열리지 않는 출처, 어떤 사실을 언급하지 않는 자료, 서로 다른 주장을 하는 두 자료는 각각 다르게 다뤄야 합니다. 이 Skill은 그 차이를 보존해 어떤 결론을 다시 확인할 수 있고 어떤 결론에 추가 근거가 필요한지 보여 줍니다.

[전체 evidence-research v1.0.0 다운로드](/downloads/skills/evidence-research/evidence-research-1.0.0.zip) · [SKILL.md](/downloads/skills/evidence-research/SKILL.md) · [설치 안내](/downloads/skills/evidence-research/README.md)

## 고정 질문과 자료

이 패키지는 [글쓰기 연습](/ko/cases/write-an-article/)의 가상 도구 '拾页'를 사용해 입력 형식, 진단 기본 설정, 업로드 필드를 조사합니다. 독자적으로 만든 합성 자료 세 개가 포함되어 있고, 목록의 네 번째 유지관리자 설명은 의도적으로 빠져 있습니다. 가상 제품을 실제 웹에서 검색하거나 답을 지어내지 마세요.

| 근거 상태 | 패키지 예시 | 전달 방식 |
|---|---|---|
| `supported`: 자료로 뒷받침됨 | P1은 Markdown과 일반 텍스트만 나열 | 지원 범위와 위치를 밝히고 제품을 직접 시험했다고 주장하지 않기 |
| `conflict`: 충돌 | P3은 기본 꺼짐, C2는 기본 켜짐 | 두 주장을 병기하고 버전과 조건의 공백을 남기기 |
| `unknown`: 알 수 없음 | 진단 업로드 필드가 나열되지 않음 | 부족한 정보를 명시하고 업로드 내용을 추측하지 않기 |
| `unavailable`: 출처 이용 불가 | M의 로컬 파일이 제공되지 않음 | 실패한 출처와 영향을 남기고 읽은 척하지 않기 |

[참고 보고서](/downloads/skills/evidence-research/solution/report.md) · [근거 표](/downloads/skills/evidence-research/solution/evidence.csv) · [출력 형식](/downloads/skills/evidence-research/references/evidence-format.md)

## 설치와 호출

전체 디렉터리를 연습 프로젝트의 `.agents/skills/evidence-research/`에 두고 진입점이 `SKILL.md`인지 확인하세요. 같은 이름의 기존 사용자 정의 Skill을 덮어쓰지 마세요. [Skill 사용하기](/ko/skills/use-a-skill/)를 따라 클라이언트에서 선택 가능한지 확인한 뒤 호출합니다.

```text
$evidence-research 이 패키지의 sources/catalog.json 자료를 바탕으로
拾页 1.2의 입력 형식, 진단 기본 설정, 업로드 필드를 확인할 수 있는지 판단해 줘.
my-output/report.md와 evidence.csv를 만들고 충돌과 열리지 않는 출처를 명시해 줘.
합성 자료의 정체성을 유지하고 가상 제품의 실제 웹페이지를 검색하지 마.
```

`fixtures/trigger-cases.json`에는 긍정·부정 예시가 있습니다. 출처 비교와 근거 확인에는 적합하지만 창작 시나 단순한 파일 개수 세기에는 조사 흐름이 필요 없습니다. 이는 설계상 예상이며 자동 트리거는 측정하지 않았습니다.

## 출처와 보고서 확인

선택적 검사는 Python 3.10+가 필요하며 타사 의존성은 없습니다. 압축을 푼 디렉터리에서 실행하세요.

```sh
# 각 출처의 실제 상태 출력
python3 scripts/check_evidence.py --inspect-only
# 참고 보고서 확인
python3 scripts/check_evidence.py
# 패키지 형식으로 만든 보고서 확인
python3 scripts/check_evidence.py --output my-output
# 임시 복사본에서 회귀 검사 실행
python3 validation/test_checks.py
```

정상 참고 결과는 P/I/C가 `available`, M이 `missing`이며 근거 네 항목이 구조 검사를 통과하는 것입니다. 종료 코드 0은 검사가 끝나고 구조가 맞는다는 뜻이지, 모든 출처가 이용 가능하다는 뜻은 아닙니다. 특히 `--inspect-only`에서는 각 status를 읽으세요.

검사기는 내용 해시 변경, 파일 누락·읽기 불가, 예상 해시가 없는 파일을 알아냅니다. 이용할 수 없는 출처를 읽은 근거로 사용하거나 보고서에서 조용히 삭제해서는 안 됩니다. 스크립트는 로컬 파일만 처리하며 HTTP 상태나 웹페이지 접근성을 시험하지 않습니다.

## 실패 후 복구

- **파일 누락:** 경로를 확인하세요. 실제로 제공되지 않았다면 이용 불가 상태를 보존하고 나머지 근거 있는 결론을 제출하세요.
- **내용 변경:** 버전과 차이를 비교하고 인용을 재확인하세요. 검사를 통과하려고 해시만 바꾸지 마세요.
- **근거 충돌:** 버전, 설치 조건, 적용 대상을 확인하세요. 해결되지 않으면 날짜만으로 답을 고르지 말고 미해결로 남기세요.
- **사실 부족:** 유지관리자에게 필요한 필드나 설명을 나열하세요. 제안을 확인된 사실로 쓰지 마세요.

이 예시에서는 고정 입력에 답이 없는 질문을 해결할 필요가 없습니다. 실제 조사에서 대체 출처 탐색이 허용되었다면 선택 근거와 실제 접근 결과를 기록하세요.

## 완료 조건과 한계

보고서는 조사 질문, 읽은 출처, 실패한 출처, 각 결론의 근거, 추가로 확보할 증거를 포함해야 합니다. 작성자가 참고 보고서를 고정 자료와 대조했지만 독립 독자나 두 번째 검토자의 검증은 없습니다.

스크립트 테스트 8개는 맹점도 보여 줍니다. '모든 형식을 완벽한 정확도로 지원한다'는 거짓 주장이 유효한 인용을 달면 구조 검사를 통과할 수 있습니다. 스크립트는 의미상 뒷받침을 증명하거나 두 문장이 실제로 충돌하는지 판단할 수 없습니다. 제출 전에 원문을 하나씩 읽으세요.

다음으로 [글쓰기 Skill](/ko/skills/examples/writing-skill/)을 사용해 확인된 결론을 글로 만들되 충돌과 알 수 없는 상태를 계속 유지할 수 있습니다.
