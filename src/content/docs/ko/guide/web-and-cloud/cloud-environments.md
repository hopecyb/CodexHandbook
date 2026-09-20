---
title: Cloud 환경
description: Codex Cloud의 런타임, 의존성, setup, 캐시, 저장소 시작점을 설정합니다.
locale: ko
source_locale: zh-CN
source_revision: 1745f70
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Cloud 환경은 Codex가 특정 저장소에 무엇을 설치하고 실행할지 정의합니다. 내 노트북 설정을 그대로 물려받지는 않습니다. 로컬에서는 실행되지만 Cloud에서 실패한다면 런타임, 의존성, 변수, 네트워크부터 비교하세요.

## 채팅마다 실행되는 순서

1. 컨테이너를 만들고 선택한 브랜치 또는 commit SHA를 checkout합니다.
2. setup script를 실행합니다. 캐시를 재사용할 때는 maintenance script도 실행할 수 있습니다.
3. 인터넷 접근 정책을 적용합니다.
4. Agent가 적용되는 `AGENTS.md`를 읽고 명령 실행, 편집, 검증을 반복합니다.
5. 답변과 diff를 돌려주며, 이를 바탕으로 추가 질문을 하거나 PR을 만들 수 있습니다.

기본 `universal` 이미지에는 일반적인 언어, 패키지, 도구가 미리 설치되어 있습니다. 환경 설정에서 Python, Node.js 등의 버전을 고정하거나 setup script로 추가 의존성을 설치할 수 있습니다.

## 최소 재현 가능 설정

pnpm 프로젝트라면 먼저 환경의 Node.js 버전을 CI와 맞춘 뒤 다음 명령을 준비합니다.

```bash
corepack enable
pnpm install --frozen-lockfile
```

저장소 루트의 `AGENTS.md`에 다음을 명시합니다.

```md
## Validation

- Run `pnpm test` after code changes.
- Run `pnpm typecheck` before reporting completion.
- Do not update the lockfile unless dependency changes are requested.
```

setup과 Agent 단계는 서로 다른 Bash 세션입니다. setup에서 일시적으로 `export`한 값이 자동으로 이어지지는 않습니다. 민감하지 않은 값은 환경 설정에 등록하거나 공식 안내에 따라 shell 설정에 영구 저장하세요.

## 캐시와 maintenance

Cloud는 새 채팅과 후속 작업을 빠르게 처리하기 위해 컨테이너 상태를 최대 12시간 캐시할 수 있습니다. 캐시를 복원한 뒤에는 채팅에서 지정한 브랜치를 checkout하고, maintenance script로 의존성을 업데이트할 수 있습니다.

setup, maintenance, 환경 변수 또는 secrets를 바꾸면 캐시가 자동으로 무효화됩니다. 저장소 변경으로 캐시가 호환되지 않을 때는 **Reset cache**를 수동으로 실행하세요. Business와 Enterprise의 환경 캐시는 해당 환경에 접근할 수 있는 사용자가 공유할 수 있으므로, 재설정이 작업 공간의 다른 사용자에게 영향을 줄 수 있습니다.

## 환경 변수와 Secret

- 환경 변수는 setup과 Agent 단계 전체에서 사용할 수 있습니다.
- Secret은 setup 단계에서만 복호화되고 Agent가 시작하기 전에 제거됩니다.
- setup 단계에는 인터넷 접근이 허용됩니다.
- Agent 단계는 기본적으로 인터넷이 차단되며 환경별로 따로 열 수 있습니다.

이 경계는 혼동하기 쉽습니다. 다음 장인 [Secrets와 환경 변수](/ko/guide/web-and-cloud/secrets-and-variables/)에서 자세히 설명합니다.

## 환경 맞춤 점검표

| 점검 항목 | 목표 |
|---|---|
| 시작 브랜치/commit | 작업 설명과 일치 |
| 런타임 버전 | CI 또는 프로덕션 제약과 일치 |
| lockfile | 고정 설치 사용 |
| setup | 반복 가능하고, 대화형 입력이 필요 없으며, 실패하면 즉시 중단 |
| 검증 명령 | `AGENTS.md`에 기록 |
| 네트워크 | Agent에는 필요한 도메인과 방식만 허용 |

## 공식 근거

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [codex-universal 이미지](https://github.com/openai/codex-universal)
