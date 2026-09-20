---
title: 실제 실행 로그로 배우는 다섯 가지 실패 복구 연습
description: 실제 CLI 로그로 출처, 인용, 입력 결합, 디렉터리 범위, 상태 파일 문제를 진단하고 한 번에 한 변수만 바꿉니다.
contentType: case
audiences: [creator, developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 의도적으로 설계한 실패 다섯 개를 실제로 실행하고 각각 한 변수만 수정해 다시 실행했습니다. 원본 입력 해시는 그대로였습니다. 운영 사고나 모델 성공률 실험이 아닙니다.
  environment: Python 3.12.11 / Darwin arm64. 임시 복사본과 합성 입력을 사용했으며 네트워크나 모델 호출은 없었습니다.
  evidence:
    - label: 다섯 실제 실행의 요약
      href: /downloads/failure-recovery/validation/summary.json
    - label: 검증 범위
      href: /downloads/failure-recovery/validation/record.md
assets:
  - path: /downloads/failure-recovery/failure-recovery-1.0.0.zip
    purpose: 재현 가능한 다섯 오류, 필요한 스크립트와 입력, 수정 전후 로그와 실행 안내
    license: CC0-1.0
    version: 1.0.0
locale: ko
source_locale: zh-CN
source_revision: fc91872
translation_status: draft
translated_at: 2026-09-20
---

먼저 오류를 보존하고 어떤 층에서 실패했는지 판단한 뒤 한 변수만 바꾸어 다시 실행하세요. 이 페이지는 고정 입력 다섯 개로 그 과정을 보여 줍니다. 작성자가 일부러 만든 오류이며 로그는 실제 명령줄 실행에서 나온 것으로 고객 사고를 가장하지 않습니다.

[전체 복구 연습 패키지 다운로드](/downloads/failure-recovery/failure-recovery-1.0.0.zip) · [README](/downloads/failure-recovery/README.md)

## 먼저 재현하기

Python 3.10 이상 표준 라이브러리만 있으면 되고 계정이나 네트워크는 필요 없습니다. 압축을 푼 디렉터리에서 실행하세요.

```sh
python3 scripts/reproduce.py --output my-recovery-logs
```

이전 증거를 덮어쓰지 않도록 출력 디렉터리는 아직 존재하지 않아야 합니다. 스크립트는 임시 복사본에서 실행됩니다. 다섯 개 모두 수정 전에는 0이 아닌 종료 코드, 수정 후에는 0을 내고 원본 입력은 변하지 않아야 합니다. 각 로그에는 명령, 종료 코드, 표준 출력과 오류 출력이 들어 있습니다. 임시 경로는 `<WORK>`로 정규화됩니다.

## 1. 출처 해시 불일치

**증상:** `FAIL: Source changed: P`, 종료 코드 1.

**진단:** 고정된 출처 파일에 실수로 문단이 추가되었지만 출처 색인은 그대로입니다. 먼저 원본 자료와 비교하고 검사만 통과시키려고 해시를 바꾸지 마세요.

**유일한 수정:** 해당 출처 파일 하나를 알려진 원본 바이트로 복구합니다. 다른 자료, 글, 색인은 건드리지 않습니다. 다시 실행하면 코드 0으로 끝납니다.

[실패 로그](/downloads/failure-recovery/validation/01-source-changed-before.json) · [복구 로그](/downloads/failure-recovery/validation/01-source-changed-after.json)

실제 출처가 정말 바뀌었다면 버전, 내용, 결론을 다시 확인하고 새로운 출처 기록을 남기세요. 이 예에서 옛 파일로 되돌리는 것은 명백한 실수로 수정되었기 때문입니다.

## 2. 본문 인용이 사실표에 없음

**증상:** `FAIL: Unmapped or unused claim ID`, 종료 코드 1.

**진단:** 본문에서 F1 대신 F99를 썼고 사실표에 F99는 없습니다. P1을 다시 확인하면 해당 문장은 여전히 F1에 대응합니다.

**유일한 수정:** 잘못 쓴 번호만 F1로 바꾸고 다시 실행합니다. 종료 코드는 0입니다. 알 수 없는 인용을 덮기 위해 새 사실표 항목을 만들지 마세요.

[실패 로그](/downloads/failure-recovery/validation/02-unmapped-citation-before.json) · [복구 로그](/downloads/failure-recovery/validation/02-unmapped-citation-after.json)

번호가 맞아도 출처가 문장을 뒷받침한다는 증거는 아닙니다. 문장별로 확인하세요. [글쓰기 Skill](/ko/skills/examples/writing-skill/)을 참고하세요.

## 3. 분류 제안이 입력과 맞지 않음

**증상:** `FAIL: Stale input hash`, 종료 코드 1.

**진단:** 제안의 입력 해시가 현재 고정 Issue와 다릅니다. 이 연습에서는 입력 결합 검사를 작동시키려고 제안 해시를 일부러 훼손했습니다.

**유일한 수정:** 현재 입력과 대조하여 이미 확인된 완전한 참조 제안으로 교체합니다. 입력과 schema는 그대로 두고 다시 실행하면 코드 0입니다. 모델로 Issue를 다시 분류하지 않았고 해시만 다시 계산해 옛 결론을 재사용하지도 않았습니다.

[실패 로그](/downloads/failure-recovery/validation/03-stale-proposal-before.json) · [복구 로그](/downloads/failure-recovery/validation/03-stale-proposal-after.json)

실제 Issue 내용이 바뀌면 변화가 결론에 미치는 영향을 다시 분석해야 합니다. [Issue 분류 사례](/ko/cases/use-cases/team-automation/issue-triage-suggestions/)를 참고하세요.

## 4. 상태 파일을 다른 디렉터리에 사용

**증상:** `State version/site mismatch`, 종료 코드 3.

**진단:** 상태는 fixed 사이트에 결합되어 있지만 명령의 `--site`는 broken을 가리킵니다. 범위 검사에서 생긴 오류이지 링크가 갑자기 고장 난 것은 아닙니다.

**유일한 수정:** `--site`만 원래 디렉터리로 되돌리고 상태 파일과 다른 인자는 유지합니다. 다시 실행하면 코드 0이며 잘못된 호출은 기존 상태를 덮어쓰지 않았습니다.

[실패 로그](/downloads/failure-recovery/validation/04-wrong-site-scope-before.json) · [복구 로그](/downloads/failure-recovery/validation/04-wrong-site-scope-after.json)

정말 다른 사이트를 모니터링해야 한다면 별도 상태를 만드세요. 범위 보호를 우회하려고 예전 상태를 삭제하지 마세요.

## 5. 상태 JSON 손상

**증상:** JSON 파싱이 실패하고 실행기가 `stopped`라고 보고하며 코드 3으로 끝납니다.

**진단:** 상태 파일이 중간에 잘려 이력과 중복 제거 기준을 안전하게 읽을 수 없습니다. 프로그램은 진행을 거부하고 손상된 내용을 남기며 몰래 빈 상태로 초기화하지 않습니다.

**유일한 수정:** 연습 전에 저장한 정상 백업을 복원합니다. 명령과 사이트는 그대로 둡니다. 다시 실행하면 코드 0입니다.

[실패 로그](/downloads/failure-recovery/validation/05-corrupt-state-before.json) · [복구 로그](/downloads/failure-recovery/validation/05-corrupt-state-after.json)

백업이 없으면 손상된 파일을 보존하고 실행 기록을 확인한 뒤 상태를 수동으로 재구성하세요. 상태를 바로 삭제하면 전송 대기 이벤트를 잃고 중복 후보가 생길 수 있습니다. [자동화 Skill](/ko/skills/examples/automation-skill/)을 참고하세요.

## 내 작업에 적용하기

입력 버전, 실제 명령, 전체 오류를 보존하세요. 문제가 입력, 구조, 범위, 상태 중 어디에 있는지 판단하고 검증할 원인을 하나 적습니다. 해당 변수만 바꾼 뒤 같은 검사를 다시 실행하고 결과를 남깁니다. 복구 후에는 종료 코드만 보지 말고 원래 목표가 달성되었는지도 확인하세요.

이 연습은 실제 로그인 실패, 클라이언트에서 Skill이 호출되지 않는 문제, 네트워크 제한, 승인 오류를 다루지 않습니다. 이런 문제에는 [증상별 문제 해결 목차](/ko/guide/reference/troubleshooting/)로 돌아가 실제 환경 정보를 보존하세요. 여기서 본 스크립트 동작을 클라이언트 동작의 보장으로 해석하지 마세요.
