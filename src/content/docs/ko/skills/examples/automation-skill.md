---
title: '예시: 변경 사항만 기록하는 자동화 Skill'
description: quiet-link-monitor를 내려받아 반복 검사, 실패 복구, 지속 이벤트, 중지 동작을 수동으로 확인합니다.
contentType: skill
audiences: [developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: 상태 테스트 8개와 CLI 실행 3회가 통과했습니다. 같은 오류가 반복되면 새 이벤트를 만들지 않고, 수정 뒤에는 복구를 기록합니다. 실제 예약 실행, 모델 라우팅, 메시지 전달은 검증하지 않았습니다.
  environment: Python 3.12.11 / Darwin arm64; 임시 합성 정적 사이트, 표준 라이브러리만 사용, 네트워크 없음.
  evidence:
    - label: 실제 실행 기록
      href: /downloads/skills/quiet-link-monitor/validation/record.md
assets:
  - path: /downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip
    purpose: 자동화 Skill, 링크 검사기, 지속 상태 스크립트, 오류 예제, 검증 기록
    license: CC0-1.0
    version: 1.0.0
locale: ko
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "6c758b9"
reviewed_at: "2026-10-26"
---

검사를 반복한다고 매번 알림을 보내야 하는 것은 아닙니다. 이 Skill은 [링크 검사 사례](/ko/cases/use-cases/team-automation/scheduled-link-check/)를 재사용해 변경, 복구, 실행 오류를 기록합니다. 결과가 같으면 조용히 유지합니다.

[quiet-link-monitor v1.0.0 다운로드](/downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip) · [SKILL.md](/downloads/skills/quiet-link-monitor/SKILL.md) · [README](/downloads/skills/quiet-link-monitor/README.md)

## 설치와 수동 연습

전체 디렉터리를 연습 프로젝트의 `.agents/skills/quiet-link-monitor/`에 놓고 같은 이름의 기존 Skill은 덮어쓰지 마세요. [Skill 사용법](/ko/skills/use-a-skill/)에 따라 선택 가능한지 확인한 뒤 호출합니다.

```text
$quiet-link-monitor 패키지의 샘플로 실패, 반복 검사, 복구를 연습하세요.
임시 사본에서 작업하고 별도의 상태 파일을 저장하세요. 마지막에 이벤트
변경을 보고하고 알림은 보내지 마세요.
```

모델이나 계정 없이 스크립트만 먼저 실행할 수 있습니다. Python 3.10 이상의 표준 라이브러리만 필요합니다.

```sh
python3 validation/test_monitor.py
```

수동 작업에서는 `fixtures/broken`을 자신의 `work-site`에 복사합니다. Skill 디렉터리에서 두 번 연속 실행합니다.

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

첫 실행은 종료 코드 1로 끝나고 실패 이벤트를 기록합니다. 두 번째도 종료 코드 1이지만 `new_event`는 null입니다. `fixtures/fixed`를 참고해 같은 디렉터리를 수정한 다음 다시 실행하면 종료 코드 0과 `recovered`가 나옵니다. 다른 사이트 경로로 바꾸어 복구를 흉내 내지 마세요. 상태 검증이 범위 변경을 거부합니다.

[실제 CLI 3회 실행 요약](/downloads/skills/quiet-link-monitor/validation/manual-run.json)

## 무엇을 기록하고 언제 멈추는가

상태 파일은 검사 대상 디렉터리 밖에 두어야 합니다. 매번 실행 결과, 연속된 실행 실패 횟수, 지속 이벤트를 저장합니다. 스크립트는 이 파일과 인접한 잠금 파일을 쓰므로 완전히 읽기 전용인 작업은 아닙니다. 사이트 내용은 바꾸지 않습니다.

| 상황 | 동작 |
|---|---|
| 첫 실행부터 정상 | 기준 상태를 만들고 새 이벤트 없음 |
| 첫 오류 또는 발견된 문제의 변경 | 변경 이벤트 저장 |
| 같은 결과가 다시 발생 | 새 이벤트 없음 |
| 오류 수정 | 복구 이벤트 저장 |
| 검사 실행 오류 3회 연속 | 중지 이벤트를 저장하고 일시 중지 |
| 상태 손상, 잠금 충돌 또는 사이트 불일치 | 원래 상태를 덮어쓰지 않고 즉시 중지 |

끊어진 링크는 유효한 검사 결과이며 실행 오류 횟수에 포함되지 않습니다. 일시 중지 후에는 일반 호출로 재검사하지 않습니다. 원인을 확인하고 수정한 다음 명시적으로 재개합니다.

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

실패를 우회하려고 잠금이나 상태를 자동 삭제하지 마세요. 프로세스가 비정상 종료되면 잠금이 남을 수 있으므로 먼저 활성 프로세스가 없는지 확인하세요. [상태 및 복구 안내](/downloads/skills/quiet-link-monitor/references/operations.md)에는 종료 코드, 보존, 동시 실행의 범위가 나옵니다.

## 알림 후보는 전송된 메시지가 아님

스크립트는 로컬 이벤트만 기록합니다. 모든 `delivery`는 `not-sent`이며 예약을 만들거나 메시지를 보내지 않습니다. 이벤트마다 그 기록에 대해 안정적인 ID가 있고, 같은 결과가 반복되어도 동일 상태의 이벤트를 새로 만들지 않습니다.

승인된 전송기를 연결한다면 저장된 미전달 이벤트를 읽고 ID로 중복 제거한 뒤 전달 확인을 저장하세요. 이번 실행의 터미널 `new_event`만 읽으면 프로세스 중단 뒤의 이벤트를 놓칠 수 있습니다. 이 패키지는 전송기를 제공하지 않으며 시스템 간 정확히 한 번 전달을 보장하지 않습니다.

## 수동 실행에서 주기 실행으로

빌드가 성공했는지 먼저 확인하고 최신 결과를 검사하세요. 빌드가 실패하면 중지하고 오래된 디렉터리를 검사하지 마세요. 예약 실행마다 같은 사이트와 상태 파일을 사용하고 동시 쓰기를 방지하세요. 목표 환경에서 먼저 수동으로 실행해 로그와 중지 동작을 확인한 뒤 주기를 설정합니다. 실제 알림의 채널, 수신자, 범위는 이미 받은 승인에 근거해야 합니다.

실제 예약 실행과 메시지 전달은 여기서 테스트하지 않았습니다. 외부 링크는 여전히 `unchecked`이며 로컬 상태가 정상이라고 “사이트의 모든 링크가 정상”인 것은 아닙니다.

## 적용 범위와 검수

문서 링크를 반복적으로 감사하는 데 적합합니다. 일반 판매 일보, 창작, 운영 환경에 자동 설치하는 작업은 이 패키지의 범위가 아닙니다. 트리거 사례는 설계상 예상이며 모델 라우팅을 측정한 결과가 아닙니다.

연습을 마치려면 첫 실패, 반복 실행의 무알림, 수정 후 복구, 일시 중지와 명시적 재개의 기록이 있어야 합니다. 패키지의 테스트 8개는 이러한 로컬 상태 동작을 검증했습니다. 모델 판단, 네트워크 접근성, 실제 운영의 신뢰성을 입증하지는 않습니다.
