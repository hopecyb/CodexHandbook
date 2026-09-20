---
title: "개발자 경로: 코드 읽기, 수정, 검토, 인계"
description: "기존 장바구니 버그 실습으로 코드 읽기, 빨강/초록 테스트, diff 검토, 작업 인계를 연결하며 작성용 템플릿 세 개를 제공합니다."
contentType: path
audiences: [developer]
level: beginner
outputs: [javascript, markdown, test-log]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "참고 실습을 다시 실행했습니다. 시작 시 세 테스트 중 하나가 실패했고, 참고 수정 후 세 개 모두 통과했으며 두 테스트 파일은 같았습니다. 경로 템플릿은 작성자가 자체 검토했지만 독립적인 독자 완료 테스트는 아직 없습니다."
  environment: "Node.js v22.16.0 / Darwin arm64; 내장 node:test, 서드파티 의존성 없음."
  evidence:
    - label: "실제 실행 요약"
      href: /downloads/developer-path/run-record.json
    - label: "작성자 검토 참고 자료와 범위 제한"
      href: /downloads/developer-path/review-reference.md
sidebar:
  order: 20
prev:
  link: /ko/guide/learning-paths/
  label: "학습 경로 선택"
next:
  link: /ko/cases/use-cases/software-development/fix-a-bug-with-verification/
  label: "검증을 포함한 버그 수정 시작"
locale: ko
source_locale: zh-CN
source_revision: 22d8bd3
translation_status: draft
translated_at: 2026-09-20
---
작은 장바구니 실습 하나로 코드 설명, 오류 수정, 차이 검토, 증거 인계라는 네 가지 작업을 합니다. 모든 클라이언트, 설정, 다중 에이전트 기능을 먼저 익힐 필요는 없습니다.

전제 조건은 간단한 JavaScript를 읽고 로컬 터미널에서 Node.js 테스트를 실행할 수 있는 것입니다. 참고 환경은 Node.js 22.16.0이며 서드파티 의존성을 설치할 필요가 없습니다. CLI, IDE 또는 로컬 파일과 터미널에 접근할 수 있는 클라이언트를 선택하세요. 테스트 동작은 Node.js가 결정합니다.

## 코드와 증거 디렉터리 준비

[핸드북 소스 저장소](https://github.com/hopecyb/CodexHandbook)의 `examples/complete-workflows/developer/verified-bug-fix/`를 사용합니다. `solution/`을 보지 말고 먼저 `brief.md`와 `README.md`를 읽으세요. 자세한 절차는 [검증을 포함해 버그 수정하기](/ko/cases/use-cases/software-development/fix-a-bug-with-verification/)에 있습니다.

실습 디렉터리에서 실행합니다.

```sh
# work/는 아직 없어야 합니다. 기존 실습이 있다면 덮어쓰지 말고 다른 이름을 선택하세요.
cp -R starter work
mkdir -p evidence
```

수정은 `work/`에서 하고, `starter/`는 실패하는 원래 상태로, `solution/`은 참고 답안으로 보관하세요. 아래 템플릿을 `evidence/`에 따로 저장합니다. 다운로드한 템플릿에는 전체 코드가 없으므로 위 저장소 실습과 함께 사용해야 합니다.

| 단계 | 전제 | 산출물 | 완료 조건 |
|---|---|---|---|
| 1. 코드 읽기 | `brief.md`와 `starter/` | `code-map.md` | 입력, 데이터 경로, 실패, 원인에 파일 근거가 있음 |
| 2. 수정과 검증 | 원인과 변경하지 않은 테스트 | `work/cart.js`, `red.txt`, `green.txt` | 실패를 먼저 재현한 뒤 같은 테스트 통과 |
| 3. diff 검토 | 수정 내용과 두 테스트 출력 | `review.md`, 구현 차이 | 기대값과 API가 그대로이고 무관한 변경 없음 |
| 4. 인계 | 앞 세 단계의 증거 | `handoff.md` | 다음 담당자가 현재 파일을 찾고 다음 단계를 다시 실행 가능 |

## 1. 코드를 읽고 검증 가능한 지도 만들기

[코드 읽기 템플릿을 다운로드](/downloads/developer-path/code-map-template.md)하세요. Codex에게 `brief.md`, `starter/cart.js`, `starter/cart.test.js`를 읽히고 진입점, 데이터 경로, 실패를 일으키는 입력, 실제값과 기대값, 원인 줄, 범위 제한을 읽기 전용으로 설명하게 하세요.

결과를 `evidence/code-map.md`에 기록합니다. 핵심 파일이 두 개뿐이므로 복잡한 아키텍처 그림은 필요하지 않습니다. `10`이 10퍼센트를 뜻하고, 잘못된 구현이 소계 40을 합계 -360으로 만드는 이유와 올바른 결과가 36인 이유를 설명할 수 있어야 완료입니다.

필요하면 [작성자의 코드 읽기 참고 자료](/downloads/developer-path/code-map-reference.md)를 보되, 자기 결론을 실제 코드로 다시 확인하세요. 그 후에 구현을 바꾸세요.

## 2. 빨간 결과를 저장한 뒤 최소한으로 수정하기

아래 명령은 모두 `verified-bug-fix/`에서 실행합니다.

```sh
node --test work/cart.test.js > evidence/red.txt 2>&1
```

예상 종료 코드는 1이고 테스트 세 개 중 하나가 실패합니다. `evidence/red.txt`를 열어 할인 테스트의 실제값이 -360, 기대값이 36인지 확인하세요. 모두 통과하면 참고 답안을 사용했거나 파일을 미리 수정했는지 확인하고, 빨간 결과를 재현했다고 가정하지 마세요.

실행 범위는 다음과 같이 직접 제한할 수 있습니다.

```text
brief.md와 evidence/code-map.md를 근거로 work/cart.js의 퍼센트 변환만 수정하세요.
함수 시그니처와 work/cart.test.js의 단언은 그대로 두고 의존성을 추가하거나 리팩터링하지 마세요.
그다음 node --test work/cart.test.js를 실행하고 실제 출력을 evidence/green.txt에 저장하세요.
결과가 예상과 다르면 실패 증거를 보관하고 원인을 찾으세요. 구현에 맞추려고 단언을 바꾸지 마세요.
변경 설명과 테스트 결과를 제출하세요. 커밋하거나 push하지 마세요.
```

원래 테스트 세 개가 종료 코드 0으로 모두 통과하고 수정이 원인에만 국한되어야 완료입니다. 실패한 테스트 명령도 로그를 만들 수 있으므로 `green.txt`가 있다는 것만으로 통과를 증명하지 못합니다.

## 3. 차이와 빠진 부분 검토하기

[검토 템플릿을 다운로드](/downloads/developer-path/review-template.md)하고 실제 비교 범위를 적으세요. 이 실습은 보관한 `starter/`와 자신의 `work/`를 비교하며 기본적으로 `main`과 비교하지 않습니다. 저장소에 미커밋 변경이 있는지도 관계없습니다.

```sh
diff -u starter/cart.js work/cart.js
diff -u starter/cart.test.js work/cart.test.js
```

첫 명령은 퍼센트 변환 차이를 보여야 합니다. 종료 코드 1은 차이가 있다는 뜻이지 명령 오류가 아닙니다. 둘째 명령은 출력 없이 코드 0으로 끝나야 합니다. Codex에게 실제 diff와 빨강/초록 로그를 읽기 전용으로 검토하게 하고 발견, 증거, 미검증 항목, 결정을 `evidence/review.md`에 적으세요.

테스트가 완화되지 않았고 API가 그대로이며 추가 의존성이나 무관한 변경이 없는지 확인하세요. 화폐 정밀도, 세금, 잘못된 입력은 이 실습 범위 밖입니다. 테스트 세 개의 통과를 운영 환경의 안전성으로 쓰지 마세요. [작성자의 검토 참고 자료](/downloads/developer-path/review-reference.md)와 대조할 수 있습니다.

## 4. 인계 문서를 쓰고 파일에서 재개하기

[인계 템플릿을 다운로드](/downloads/developer-path/handoff-template.md)해 `evidence/handoff.md`에 현재 디렉터리, 수정 파일, 유효한 제약, 증거 경로, 다음 명령과 예상 결과를 기록하세요. 실제 Git 프로젝트라면 브랜치, 커밋, 작업 트리 상태도 적으세요.

인계 후 읽기 전용 작업은 이렇게 작성할 수 있습니다.

```text
evidence/handoff.md를 읽고 먼저 work/의 현재 파일이 인계 설명과 일치하는지 확인하세요.
실습 루트에서 node --test work/cart.test.js를 실행하고 실제 종료 코드와 요약을 기록하세요.
work와 starter의 구현과 테스트를 비교하세요. 상태가 다르면 차이를 설명하고 과거의 초록 결과를 재사용하지 마세요.
코드를 다시 수정하거나 커밋, push하지 마세요.
```

새 작업에서 실행하거나 다른 협력자에게 확인을 부탁할 수 있습니다. 자신이 다시 열어 보는 것은 복구 연습이지 독립적인 사람의 검토가 아닙니다. 형식은 [작성자의 인계 기록](/downloads/developer-path/handoff-reference.md)을 참고하세요.

인계 파일만으로 코드, 테스트, 경계를 찾고 현재 결과를 실제로 실행할 수 있으면 완료입니다. 그 실행을 하지 않았다면 기록에 “인계 후 검증 대기”로 남겨 두세요.

## 문제가 생겼을 때 돌아갈 단계

- 파일이 없다면 터미널 디렉터리와 `work/` 존재 여부를 확인하고 준비 단계로 돌아갑니다.
- 빨간 결과가 없다면 원래 시작 상태와 테스트를 확인합니다. 참고 답안의 초록 결과는 실패 재현이 아닙니다.
- 테스트를 수정한 뒤에만 통과한다면 원래 단언을 복원하고 원인을 다시 분석합니다.
- 무관한 변경을 발견했다면 diff를 보관하고 수정을 좁힌 뒤 테스트를 다시 실행합니다.
- 인계 내용이 파일과 다르면 현재 파일을 기준으로 기록을 갱신하고 계속합니다.

실제 프로젝트에서는 저장소가 요구하는 lint, 타입 검사, 전체 테스트를 이 증거 구조에 추가하세요. 필요 여부와 명령은 실제 프로젝트 지침에서 확인해야 합니다. 이 실습에는 그런 추가 검사가 없으므로 통과 기록을 지어내지 마세요.
