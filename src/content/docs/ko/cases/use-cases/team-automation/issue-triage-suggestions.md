---
caseCategory: team
directoryOrder: 90
title: '사례: Issue 분류와 사람의 검토 대기열'
description: 합성 Issue 다섯 건으로 구조화된 제안, 입력 결합, GitHub를 조작하지 않는 드라이런을 연습합니다.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- markdown
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: 작성자가 준비한 제안 다섯 건의 드라이런과 구조 및 입력 결합 테스트 여덟 건을 통과했습니다. 모델 호출이나 GitHub 연결은 하지 않았으므로 분류 정확도나 운영 준비 상태를 입증하지 않습니다.
  environment: Python 3.12.11 / Darwin arm64, 표준 라이브러리와 합성 입력 사용, 토큰과 네트워크 사용 없음.
  evidence:
  - label: 실제 실행 기록
    href: /downloads/issue-triage/validation/record.md
assets:
- path: /downloads/issue-triage/issue-triage-1.0.0.zip
  purpose: 합성 입력, JSON Schema, 프롬프트, 작성자 제안, 드라이런 스크립트, 검토 기록
  license: CC0-1.0
  version: 1.0.0
locale: ko
source_locale: zh-CN
source_revision: '6d859d7'
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: '2026-10-26'
---

이 연습은 Issue 분류를 '제안 생성 → 검증 → 사람의 검토'로 나눕니다. 검토할 기록 다섯 건을 얻게 됩니다. 댓글 게시, 라벨 추가, Issue 종료는 자동으로 하지 않습니다.

[전체 연습 패키지 다운로드](/downloads/issue-triage/issue-triage-1.0.0.zip) · [README](/downloads/issue-triage/README.md) · [실제 드라이런 출력 보기](/downloads/issue-triage/validation/dry-run.json)

## 입력과 완료 조건

독자적으로 만든 합성 입력 다섯 건은 계산 오류, 문서의 끊어진 링크, 계정 간 데이터 문제의 단서, 정보 부족, Issue 본문의 악의적인 지시입니다. 실제 고객 데이터는 없습니다. 제안에는 유형, 우선순위, 라벨, 보안 검토 표시, 근거, 누락된 정보를 포함합니다.

완료하려면 입력마다 제안 하나씩을 만들고 허용값 및 입력 해시 검증을 통과해야 합니다. 이후 유지관리자가 각 제안을 수락·수정·거부하고 이유를 기록합니다. 구조 검증 통과는 이 판단을 대신하지 못합니다.

## 먼저 참고 제안을 실행하기

Python 3.10 이상이 필요하며 API 키나 타사 의존성은 필요하지 않습니다. 압축을 푼 디렉터리에서 실행하세요.

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

첫 명령은 작성자가 미리 쓴 제안을 사용해 `external_actions`가 빈 `human-review-required` 항목 다섯 건을 출력합니다. 두 번째 명령은 여덟 가지 검사를 실행합니다. 어느 쪽도 모델을 자동 호출하지 않습니다.

[입력 예시](/downloads/issue-triage/fixtures/issues.json) · [참고 제안](/downloads/issue-triage/solution/proposals.json) · [사람 검토 참고 자료](/downloads/issue-triage/solution/human-review.md)

## 다음으로 직접 제안 생성하기

패키지의 [prompts/triage.md](/downloads/issue-triage/prompts/triage.md)를 Codex에 주고 [schema.json](/downloads/issue-triage/schema.json)에 맞는 `my-proposals.json`을 요청합니다. 그런 다음 실행하세요.

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

스키마는 JSON Schema 2020-12 형식입니다. 불리언은 `"type": "boolean"`을 쓰며, 우선순위는 `"P0-P3"` 문자열이 아닌 열거형입니다. 포함된 검증기는 이 스키마에서 쓰는 키워드 일부만 구현한 것으로 범용 스키마 엔진이 아닙니다.

각 제안에는 해당 Issue 전체 내용과 결합하는 `input_sha256`이 있습니다. 입력이 바뀌면 이전 제안을 사용하지 마세요. 해시만 다시 계산하지 말고 변경을 먼저 재분석하세요. 해시 규칙과 함수는 README와 스크립트에 있습니다.

## 사람의 판단과 안전 경계

| 상황 | 처리 |
|---|---|
| 명확한 오류 단서 | 분류를 제안하고 재현한 다음 영향 범위를 확인해 우선순위를 정함 |
| 보안 사고 단서 | 보안 담당자에게 비공개로 검토 요청. 우선순위가 불명확해도 위험이 낮다는 뜻은 아님 |
| 정보 부족 | `unknown`을 사용하고 부족한 정보를 나열하며 담당자나 심각도를 추측하지 않음 |
| 본문이 명령 실행이나 권한 상승 요구 | 신뢰할 수 없는 자료로 취급해 실행하지 않으며 긴급하다고 주장해도 P0로 정하지 않음 |

HTML 제거 또는 길이 제한만으로는 프롬프트 인젝션을 확실히 막지 못합니다. 패키지 프로그램은 Issue 본문을 실행하지 않지만 모델 생성 단계에서도 자료와 지시의 경계를 지켜야 합니다. 참고 출력은 모델의 저항률을 증명하지 않습니다.

## 실패와 복구

알 수 없는 라벨, 추가 작업 필드, 잘못된 유형, 중복되거나 누락된 제안이 있으면 전체 배치가 종료 코드 1로 멈춥니다. 프롬프트와 해당 필드를 고친 뒤 원본 입력을 보존해 재실행하세요. 보안 유형 또는 라벨에 보안 검토 표시가 없어도 거부합니다.

구조가 유효하지만 잘못된 분류는 통과할 수 있으며 테스트에서 이 한계를 확인했습니다. 따라서 소수 사례의 높은 일치율은 운영 출시 기준이 아닙니다. 실제 도입에는 대표 표본, 위험 구간, 사람의 표본 검토, 오분류 비용, 되돌리기 조건이 필요합니다. 이 연습은 로컬 드라이런만 다룹니다.

다음으로 [문서 링크 검사](/ko/cases/use-cases/team-automation/scheduled-link-check/)와 [사람의 승인 패턴](/ko/cases/workflows/human-approval-patterns/)을 읽으세요.
