---
title: '예시: diff 범위를 명시한 리뷰 Skill'
description: 완전한 scoped-review 패키지를 내려받아 staged, unstaged, branch 검토를 구분하고 놓치기 쉬운 Git 상황을 재현합니다.
contentType: skill
audiences:
- developer
level: intermediate
outputs:
- markdown
- json
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: diff 수집기의 회귀 검사 일곱 건과 Skill 구조 검사를 통과했습니다. 트리거 예시와 검토 결론은 작성자가 설계했으며 여러 모델의 자동 라우팅이나 결함 탐지율 실험은 하지 않았습니다.
  environment: Python 3.12.11 / Git / Darwin arm64, 임시 합성 저장소 사용, 타사 의존성 없음.
  evidence:
  - label: 실제 실행 범위와 한계
    href: /downloads/skills/scoped-review/validation/record.md
assets:
- path: /downloads/skills/scoped-review/scoped-review-1.0.0.zip
  purpose: Skill, 수집기, 범위 안내, 합성 입력, 참고 검토, 회귀 테스트
  license: CC0-1.0
  version: 1.0.0
locale: ko
source_locale: zh-CN
source_revision: e29d1b3
translation_status: draft
translated_at: '2026-09-20'
---

검토 전에 무엇을 비교할지 명확히 하세요. 이 Skill은 '현재 커밋되지 않은 변경'을 'main 대비 커밋'으로 잘못 이해하거나 작업 트리가 정상으로 보여 인덱스의 오류를 놓치는 일을 막습니다.

[scoped-review v1.0.0 다운로드](/downloads/skills/scoped-review/scoped-review-1.0.0.zip) · [SKILL.md 보기](/downloads/skills/scoped-review/SKILL.md) · [설치 및 사용 안내](/downloads/skills/scoped-review/README.md)

## 할 수 있는 일

| 사용자 요청 | 수집 범위 | 포함되지 않음 |
|---|---|---|
| staged 변경만 검토 | HEAD → 인덱스 | unstaged 내용 |
| unstaged 변경만 검토 | 인덱스 → 작업 트리 | staged 패치 |
| 현재 커밋되지 않은 변경 검토 | 두 패치를 분리해 보존하고 새 파일 나열 | 새 파일 내용은 따로 읽어야 함 |
| 지정한 브랜치 대비 커밋 검토 | 고유한 merge-base → HEAD | 로컬의 미커밋 내용 |

`main`을 기본값으로 추측하지 않습니다. 기준이 없으면 범위를 조용히 바꾸지 않고 오류를 냅니다. 수집기는 증거만 제공하며 결함 판단에는 관련 코드와 테스트 검토가 여전히 필요합니다.

## 설치와 첫 호출

Python 3.10 이상, Git, 하나 이상의 커밋이 있는 로컬 연습 저장소가 필요합니다. 압축을 푼 `scoped-review/`를 대상 프로젝트의 `.agents/skills/`에 넣고 진입점이 `.agents/skills/scoped-review/SKILL.md`인지 확인하세요. 같은 이름의 Skill이 있으면 덮어쓰기 전에 비교하세요.

로컬 Skill의 발견 및 진입점은 [공식 안내](https://learn.chatgpt.com/docs/build-skills)를 따르세요. 설치 후 선택 가능한지 확인하고 명시적으로 호출합니다.

```text
$scoped-review 이 연습 저장소에서 현재 커밋되지 않은 코드 변경을 검토하세요.
파일을 수정하지 마세요. 먼저 findings를 나열한 뒤 staged, unstaged,
새 파일의 검토 범위를 설명하세요.
```

이 교육용 패키지는 개인 설정에 자동 설치되지 않습니다. 설치하지 않고도 포함된 스크립트를 직접 실행해 수집 범위를 확인할 수 있습니다.

## 놓치기 쉬운 상황 재현

합성 입력은 `fixtures/scenario.json`에 있습니다.

1. 기준 할인 공식은 올바릅니다.
2. 잘못된 공식 `amount * (1 - percent)`를 stage에 올립니다.
3. 작업 트리에서 올바른 공식 `amount * (1 - percent / 100)`으로 되돌리지만 수정본은 stage에 올리지 않습니다.

이때 `git diff HEAD`에는 변화가 없어 보일 수 있지만 인덱스를 커밋하면 여전히 오류가 들어갑니다. `amount=40, percent=10`이면 staged 버전의 결과는 36이 아니라 -360입니다.

올바른 검토는 staged 버전의 오류와 unstaged 패치가 이를 수정한다는 점을 각각 보고해야 합니다. [작성자 참고 자료](/downloads/skills/scoped-review/fixtures/expected-review.md)는 브랜치 모드를 이 로컬 문제에 섞지 말아야 하는 이유도 설명합니다. 실제 모델 출력은 아닙니다.

## 포함된 검증 실행

압축을 푼 Skill 디렉터리에서 실행하세요.

```sh
python3 validation/test_scopes.py
```

임시 Git 저장소에서 수행하는 일곱 테스트는 범위, 누락 검토 회귀, 잘못된 기준 거부, 새 파일 목록, 검토 대상 저장소의 무변경을 확인합니다. 성공하면 종료 코드 0입니다. 테스트는 실제 프로젝트에 쓰지 않습니다.

수집기를 저장소에 사용하려면:

```sh
python3 scripts/collect_diff.py --repo /path/to/your/repo --mode working-tree
```

경로를 검토 권한이 있는 저장소로 바꾸세요. 브랜치 모드에는 `--base`가 추가로 필요합니다. JSON 출력에는 비공개 코드가 포함될 수 있지만 자동 업로드하지 않습니다. 전체 명령은 [범위 안내](/downloads/skills/scoped-review/references/scopes.md)를 참조하세요.

## 트리거하면 안 되는 경우

글 다듬기나 새 기능 구현은 이 Skill의 대상이 아닙니다. 모호한 '리뷰해 줘' 요청은 문맥으로 범위를 정하고 그래도 모호할 때 질문하세요. 패키지의 [트리거 사례](/downloads/skills/scoped-review/fixtures/trigger-cases.json)에는 예상 요청 일곱 가지가 있습니다. 실제 자동 라우팅 측정은 아직 하지 않았습니다.

## 완료 조건과 한계

- 보고서에 실제로 검토한 스냅샷, 기준선, 파일 범위를 밝힙니다.
- findings에는 위치, 발생 조건, 영향, 증거를 담고 스타일 선호를 차단 사유로 삼지 않습니다.
- 관련 미추적 파일 내용을 확인하거나 미검토로 분명히 표시합니다. 바이너리, 무시 파일, 서브모듈을 검토한 것처럼 말하지 않습니다.
- 실행한 검증과 실행하지 않은 검증을 밝힙니다. findings가 없다고 결함이 없음을 보증하지 않습니다.
- 검토는 보고서로 끝나며 자동으로 수정, 커밋, 푸시하지 않습니다.

[개발자 학습 경로](/ko/guide/learning-paths/developer/)의 검토·인계 템플릿으로 결과를 저장할 수 있습니다. 이전의 짧은 `pr-review` 골격은 구조 이해에 여전히 유용하지만, 이 패키지는 개인 버전을 덮어쓰지 않도록 다른 이름을 사용합니다.
