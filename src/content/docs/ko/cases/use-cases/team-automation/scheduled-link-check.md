---
caseCategory: team
directoryOrder: 100
title: '사례: 문서 링크 검사와 실패 복구'
description: 정적 HTML 링크 검사 연습을 내려받아 누락된 페이지와 잘못된 앵커를 단계별로 수정한 뒤 정기 실행을 준비합니다.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- html
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: 스크립트 테스트 일곱 건이 통과했습니다. 임시 복사본에서 한 번에 한 문제씩 고치자 실패 건수가 2건에서 1건, 다시 0건으로 줄었습니다. 외부 링크는 온라인으로 검사하지 않았고 실제 CI나 스케줄러도 실행하지 않았습니다.
  environment: Python 3.12.11 / Darwin arm64, 표준 라이브러리와 독자적인 합성 정적 HTML 사용, 토큰 없음.
  evidence:
  - label: 실제 실행 및 복구 기록
    href: /downloads/docs-link-audit/validation/record.md
assets:
- path: /downloads/docs-link-audit/docs-link-audit-1.0.0.zip
  purpose: 링크 검사 스크립트, 오류 입력, 참고 수정본, 테스트, 단계별 복구 기록
  license: CC0-1.0
  version: 1.0.0
locale: ko
source_locale: zh-CN
source_revision: 0d21aa9
translation_status: draft
translated_at: '2026-09-20'
---

정기 검사를 예약하기 전에 스크립트가 실제로 문제를 찾아내고 무엇을 검사했는지 설명하는지 확인하세요. 이 연습은 의도적으로 만든 끊어진 링크 두 개로 시작합니다. 대상 하나씩 수정하고 결과 변화를 관찰합니다.

[전체 연습 패키지 다운로드](/downloads/docs-link-audit/docs-link-audit-1.0.0.zip) · [README](/downloads/docs-link-audit/README.md) · [실제 복구 기록](/downloads/docs-link-audit/validation/recovery.json)

## 먼저 오류 예시 실행하기

Python 3.10 이상이 필요하며 타사 의존성, API 키, 네트워크 접근은 필요하지 않습니다. 압축을 푼 디렉터리에서 실행하세요.

```sh
python3 scripts/check_links.py fixtures/site
```

예상 종료 코드는 1입니다. 보고서에는 파일, 줄 번호, URL, 이유가 나옵니다. `index.html` 4번째 줄의 `/missing/`에는 대응 페이지가 없고, 5번째 줄의 `#old-anchor`는 대상 페이지에 없습니다. 다른 외부 링크는 `unchecked`로 표시되며 검사 통과로 조용히 계산하지 않습니다.

## 한 번에 한 문제씩 수정하기

`fixtures/site`를 자신의 `work/`에 복사하고 원본 입력은 보존합니다. 먼저 `/missing/`를 `/guide/`로 바꾼 후 실행하세요.

```sh
python3 scripts/check_links.py work
```

종료 코드는 여전히 1이지만 앵커 문제만 남습니다. `#old-anchor`를 `#install`로 바꾸어 다시 실행하면 종료 코드는 0입니다. `solution/site` 및 [사람 검토 참고 자료](/downloads/docs-link-audit/solution/review.md)와 비교해 다른 내용은 변경하지 않았는지 확인하세요.

작성자의 실제 자체 검사에서 실패 건수는 차례로 2, 1, 0이었고 원본 예시의 해시는 변하지 않았습니다. [수정 전 JSON](/downloads/docs-link-audit/validation/stage-0.json) · [수정 후 JSON](/downloads/docs-link-audit/validation/stage-2.json)

## 결과와 한계 이해하기

| 결과 | 의미 | 다음 단계 |
|---|---|---|
| 종료 0 | 로컬 참조 통과 | `unchecked` 확인. 외부 링크 접속 가능성을 증명하지 않음 |
| 종료 1 | 누락 페이지, 앵커 또는 범위 밖 경로 발견 | 링크 의도를 하나씩 확인하고 수정 |
| 종료 2 | 검사를 마치지 못함 | 디렉터리, 빌드 결과, 읽기 오류, 지원되지 않는 `base` 태그 확인 |

스크립트는 빌드된 HTML을 읽고 디렉터리 `index.html`, 상대·루트 경로, HTML 앵커를 지원합니다. 동적 JavaScript 라우트, CSS URL, `srcset`, 프레임워크별 재작성은 분석하지 않습니다. `base href`를 만나면 상대 경로의 잘못된 해석을 피하려고 중단합니다. 외부 URL과 다른 프로토콜은 검사하지 않았다고 명시합니다.

포함된 일곱 건의 테스트를 실행하세요.

```sh
python3 validation/test_links.py
```

실제 프로젝트를 검사할 때는 프로젝트 안내에 따라 먼저 빌드하고 출력 디렉터리를 스크립트에 전달합니다. 이 사이트에는 내부 참조 전용 검사기가 이미 있습니다. 이 교육 패키지가 프레임워크에 필요한 모든 검증을 대체하지는 않습니다.

## 이후 정기 절차에 연결하기

기존 스케줄러에 '프로젝트 빌드 → 링크 검사 → 종료 코드와 JSON 저장'을 전달하고 작업 디렉터리와 의존성 환경을 고정합니다. 빌드 실패 시 오래된 출력을 읽지 말고 중단하세요. 동일 기록에 동시에 쓰지 마세요.

먼저 한 번 수동 실행하고 대상 스케줄 환경에서 수동으로 시작한 뒤에야 주기를 설정합니다. 이전 결과와 비교해 변화가 없으면 조용히 두고, 새 실패·검사 오류·복구가 있으면 변경 요약을 준비합니다. 실제 알림 발송은 승인된 범위를 따라야 합니다.

이 패키지는 예약 작업 생성, 알림 전송, 실제 사이트 수정, CI 실행을 하지 않았습니다. 여기의 일정 단계는 연결 지침이지 스케줄러 실행 증거가 아닙니다. 다음으로 [예약 작업 가이드](/ko/skills/automations/scheduled-tasks/)를 참고하세요.

## 외부 링크 처리

외부 링크는 별도 승인된 검사 범위와 빈도를 정하세요. 404, 인증 제한, 시간 초과, 일시적인 서비스 오류는 뜻이 다릅니다. 한 번의 접근 실패만으로 링크를 삭제하면 안 됩니다. 이 패키지는 실제 외부 링크를 검사하지 않았고 모의 응답을 실제 네트워크 오류로 제시하지 않았습니다.

[Issue 분류 연습](/ko/cases/use-cases/team-automation/issue-triage-suggestions/)과 결합할 때는 티켓 생성 여부를 결정하기 전에 로컬 보고서와 사람의 검토 의견을 먼저 만드세요.
