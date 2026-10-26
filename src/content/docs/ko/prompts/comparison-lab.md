---
title: "프롬프트 세 쌍 비교: 12회 실행과 항목별 검토"
description: 주간 보고서, 기사, 버그 수정으로 A/B 비교를 연습합니다. 긴 프롬프트가 더 낫다고 가정하지 않고 고정 입력, 프롬프트, 기록 양식을 내려받을 수 있습니다.
contentType: prompt
audiences: [creator, developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  environment: Darwin arm64; Codex 26.911.61220 / build 9647; 독립적인 Agent 컨텍스트 12개. 실제 모델과 추론 설정은 알 수 없음.
  summary: 세 쌍의 A/B를 각각 두 번 실행하고 결과물, 소요 시간, 도구 오류를 보관했습니다. 주 담당 Agent가 눈가림 없이 검토했으며 일부 로그가 누락되었습니다. 일반적인 효과나 실제 독자 대상 실험을 보여 주지는 않습니다.
  evidence:
    - label: 12회 실행의 항목별 점수와 한계
      href: /downloads/prompt-comparison-results/review.md
    - label: 실제 실행과 소요 시간
      href: /downloads/prompt-comparison-results/runs.json
    - label: 사후 결과물 검증 기록
      href: /downloads/prompt-comparison-results/reviewer-checks.json
assets:
  - path: /downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip
    purpose: 12개 작업, 입력, 원본 결과물의 공개 사본, 로그, 소요 시간, 항목별 점수, 검토 스크립트
    license: CC0-1.0
    version: 1.0.0
  - path: /downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip
    purpose: 고정 입력 파일 9개, 프롬프트 6개, 공통 채점 항목, 사람의 검토 기준, 빈 실행 기록 양식
    license: CC0-1.0
    version: 1.0.0
locale: ko
source_locale: zh-CN
source_revision: "e6a23bb"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: "2026-10-26"
---

비교의 목적은 어떤 요구가 결과물에 영향을 미치는지 알아보는 것이지, 긴 프롬프트가 더 낫다고 증명하는 것이 아닙니다. 이 페이지에는 세 묶음의 고정 입력과 2026년 9월 18일에 완료한 실제 실행 12회의 기록이 있습니다. 이 작은 표본은 주로 제출된 검증 자료의 차이를 보여 줄 뿐, 일반적인 효과를 입증하지 못합니다.

[비교 자료 전체 다운로드](/downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip) · [실행 절차](/downloads/prompt-comparisons/README.md) · [빈 기록 양식](/downloads/prompt-comparisons/blank-run.json)

## 세 작업, 동일한 비교 방식

각 쌍의 A와 B는 동일한 입력과 도구 범위를 사용합니다. B는 A의 작업을 그대로 유지하고 명시적인 완료 기준 한 묶음을 추가합니다. 따라서 차이가 나타나더라도 그 묶음의 특정 단어 하나 때문이라고 단정할 수 없습니다.

| 작업 | 고정 입력 | B에서 추가한 조건 | 관찰할 점 |
|---|---|---|---|
| 주간 판매 보고서 | 46행의 합성 CSV와 데이터 사전 | 행별 판단, 이상치 설명, 독립적인 확인 기록 | 숫자의 정확성 외에 환불, 중복, 기준값 0을 추적할 수 있는가? |
| 출처 기반 기사 | 의도적으로 충돌하는 내용을 담은 합성 자료 세 개 | 사실 표, 미해결 질문 목록, 충돌하는 자료를 근거 없이 선택하지 않기 | 알려지지 않은 점을 남겨 두는가? 개별 주장마다 출처의 근거가 있는가? |
| 버그 수정 | 장바구니 구현과 원본 테스트 | 수정 전 실패와 수정 후 성공, 로그와 차이점 | 오류를 피하려고 테스트를 바꾸지 않고 실제로 수정 사항을 검증했는가? |

[보고서 A](/downloads/prompt-comparisons/cases/sales/A.md) / [B](/downloads/prompt-comparisons/cases/sales/B.md) · [기사 A](/downloads/prompt-comparisons/cases/article/A.md) / [B](/downloads/prompt-comparisons/cases/article/B.md) · [버그 A](/downloads/prompt-comparisons/cases/bug/A.md) / [B](/downloads/prompt-comparisons/cases/bug/B.md)

A도 스스로 자료를 확인하고 테스트를 실행할 수 있으며, B도 실패할 수 있습니다. 예상한 결과를 실제 결과로 취급하지 마세요.

## 공통 채점 항목 다섯 가지

A와 B는 같은 [rubric.json](/downloads/prompt-comparisons/rubric.json)을 사용합니다. 항목은 작업의 정확성, 근거의 추적 가능성, 범위 관리, 불확실성 처리, 재현 가능성입니다. 각 항목에서 0은 미충족, 1은 일부 충족, 2는 확인 가능한 근거를 갖춘 충족입니다. 실행하지 않았거나 판단할 수 없다면 null을 사용합니다.

모든 점수에는 구체적인 근거가 필요합니다. 문장이 매끄러워도 숫자가 틀린 보고서에는 높은 점수를 줄 수 없습니다. 기사에 링크가 있다고 해서 사실이 정확한 것은 아닙니다. 코드가 “테스트 통과”라고 주장하는 것만으로 검증이 끝난 것도 아닙니다. 평균 점수로 중요한 사실 오류를 가리지 마세요.

## 실제 실행 12회

[결과와 로그 다운로드](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) · [항목별 점수와 소요 시간](/downloads/prompt-comparison-results/review.md) · [표본 수집 조건](/downloads/prompt-comparison-results/README.md)

각 작업은 A1 → B1 → B2 → A2 순서로 실행했고, 매 라운드에 서로 다른 작업 세 개를 병렬로 진행했습니다. 매번 새로운 Agent 컨텍스트와 작업 디렉터리를 사용하고 채점 답안은 제공하지 않았습니다. 모델과 추론 설정을 명시적으로 고정하지 않아 실제 값은 알 수 없습니다. 디렉터리 분리는 지침에 의존했으며 운영체제 수준의 격리는 아닙니다. 주 담당 Agent가 눈가림 없이 검토했고 독립적인 사람의 점수는 없습니다.

| 작업 | A의 두 차례 관찰 | B의 두 차례 관찰 | 이번 실행이 보여 주는 점 |
|---|---|---|---|
| 주간 판매 보고서 | 숫자, 장부, 이상치 처리가 정확했고 자발적인 확인도 수행함 | 숫자가 정확하고 확인 설명도 추가했지만 한 번은 전체 계산 명령을 저장하지 않음 | 추가 조건이 로그의 완전성을 보장하지는 않음 |
| 출처 기반 기사 | 사실, 출처, 충돌을 정확하게 다루고 본문을 제출함 | 같은 사실의 경계를 지키면서 사실 표와 미해결 질문 목록을 추가함 | 검토에 사용할 자료가 늘어남 |
| 버그 수정 | 원본 테스트를 바꾸지 않았고 수정 후 세 테스트가 통과했지만 수정 전 실패 로그는 저장하지 않음 | 원본 테스트의 실패와 수정 후 성공, 종료 코드, 차이점을 보관함 | 검증 과정이 더 완전하지만 네 번 모두 사용한 Node 버전을 기록하지 않음 |

전체 표에는 다섯 항목 각각의 0~2점이 제시되며 종합 순위는 계산하지 않습니다. 기사 A에 사실 표가 없는 것은 합의한 ‘재현 가능성’ 기준에 영향을 주지만 기사 자체가 틀렸다는 뜻은 아닙니다. 버그 수정 A와 B는 모두 재현 가능성을 부분 충족했지만 이유는 다릅니다. 점수만으로는 이를 알 수 없습니다.

입력과 작업 텍스트의 해시는 실행 간에 일치했습니다. 사후 검토에서는 판매 CSV를 다시 계산하고 원본 테스트를 수정하지 않은 채 네 건의 버그 수정을 확인했습니다. [사후 검증 기록](/downloads/prompt-comparison-results/reviewer-checks.json)은 실험 중 Agent가 직접 실행한 명령 로그와 별도로 보관합니다.

## 실패와 한계도 남기기

- 판매 작업의 공통 프롬프트에는 `data-dictionary.md`라고 적혀 있지만 실제 파일은 `input/data-dictionary.md`에 있습니다. 네 번 모두 처음에는 경로 오류를 만났다가 복구했습니다. 이는 자료의 결함이며 A/B 완료 기준의 효과가 아닙니다. 입력을 고정하기 위해 이 실험 도중 프롬프트를 수정하지 않았습니다.
- `run-07`의 Python 명령은 요약만 남고 전체 코드는 보관되지 않았습니다. 결과 묶음은 이 공백을 그대로 남기며 당시 전체 명령을 기록했다고 주장하지 않습니다.
- 로그는 Agent들이 직접 정리했으며 플랫폼의 완전한 감사 로그가 아닙니다. 공개 사본에서는 로컬 절대 경로만 대체했습니다. 원본과 공개 파일의 해시는 별도로 보관합니다.
- 소요 시간에는 도구 대기와 로그 작성이 포함되고 작업은 병렬로 실행됐습니다. 사람의 기준 작업이나 비용 측정은 없습니다. 실제 모델과 추론 설정도 알 수 없어 모델 속도나 절약 시간의 순위를 매길 수 없습니다.

작업과 변형별로 단 두 번씩 실행했습니다. 채점은 눈가림 없이 진행됐고 일부 채점 항목은 B의 추가 요구와 겹칩니다. 이 연습은 결과물과 검증 근거의 차이를 보여 줍니다. 일반적인 성공률을 발표하거나 “B가 이긴다”, “길수록 좋다”고 주장하지 않습니다.

## 직접 실행하고 기록하기

1. A와 B에 별도의 작업 디렉터리를 만들고 동일한 입력을 복사한 다음 해시를 확인합니다. 채점 정답을 모델에 제공하지 마세요.
2. 매번 새로운 작업을 시작합니다. 모델, 추론 설정, 클라이언트, 도구 범위, 제한 시간을 고정하고 알 수 없는 설정은 그대로 기록합니다. 이전 실행의 결과를 다음 실행과 공유하지 마세요.
3. 반복 횟수와 중단 조건을 미리 정하고 A→B와 B→A 순서를 번갈아 적용합니다. 가장 좋은 결과만이 아니라 실패, 중단, 재시도도 보관합니다.
4. 실제 출력 경로, 모델명, 환경, 소요 시간, 도구 오류, 입력 해시를 기록합니다. 사람의 재작업 시간은 따로 기록하고 실행하지 않은 항목에 0을 넣지 마세요.
5. 같은 기준으로 항목별 채점을 하고 가능하면 검토자에게 변형 라벨을 숨깁니다. 추가 조건을 채택할지 결정하기 전에 항목과 실패 유형을 비교합니다.

적은 수의 관찰은 이번 입력과 환경에만 적용됩니다. 일반적인 성공률을 뜻하지 않으며 특정 문장 하나가 개선을 일으켰다는 인과관계를 증명하지 못합니다.

## 확인한 내용과 아직 확인하지 못한 내용

다음 명령으로 자료를 검사할 수 있습니다.

```sh
python3 scripts/check_materials.py
```

고정 입력 파일 9개, 추가형 A/B 프롬프트 세 쌍, 빈 기록에 허구의 점수가 없는지를 확인했습니다. 이 스크립트는 모델을 호출하거나 프롬프트의 효과를 시험하지 않습니다.

12회의 실행, 항목별 점수, 소요 시간은 기록했습니다. 실제 모델명, 완전한 플랫폼 로그, 독립적인 사람의 검토는 아직 없습니다. 결과 묶음의 `python3 scripts/check_results.py`로 저장한 결과물을 다시 검사할 수 있지만 모델을 다시 실행하지는 않습니다. 전체 원본 연습은 [주간 보고서](/ko/cases/analyze-a-spreadsheet/), [기사](/ko/cases/write-an-article/), [개발자 학습 경로](/ko/guide/learning-paths/developer/)를 참고하세요.
