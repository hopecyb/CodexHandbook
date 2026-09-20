---
title: "AGENTS.md의 적용 범위와 우선순위"
description: "전역, 프로젝트 루트, 현재 디렉터리의 규칙을 Codex가 어떻게 찾고 병합하는지 정확히 이해합니다."
contentType: reference
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "공식 문서의 발견 및 병합 규칙을 항목별로 대조했습니다. 디렉터리 예시와 로딩 확인 안내는 교육용이며 모든 클라이언트에서 실행해 검증했다고 주장하지 않습니다."
  evidence:
    - label: "AGENTS.md"
      href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE、Cloud"
  checkedAt: "2026-08-26"
locale: ko
source_locale: zh-CN
source_revision: b5f31cc
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Codex는 실행을 시작할 때마다 지침 체인을 구성합니다. 조직 정책, 설정, 프롬프트를 한데 섞어 우선순위를 추측하기보다 `AGENTS.md` 파일 자체를 어떤 순서로 찾는지 먼저 정확히 이해해야 합니다.

## 공식 탐색 순서

1. **전역 계층**: Codex 홈 디렉터리(기본값 `~/.codex`)에서 `AGENTS.override.md`를 먼저 찾고, 없으면 `AGENTS.md`를 읽습니다. 이 계층에서는 비어 있지 않은 첫 번째 파일만 사용합니다.
2. **프로젝트 계층**: 프로젝트 루트(보통 Git 루트)부터 현재 작업 디렉터리까지 이동하며, 각 디렉터리에서 `AGENTS.override.md`, `AGENTS.md`, 설정된 대체 파일 이름을 차례로 확인합니다. 디렉터리마다 최대 한 파일만 채택합니다.
3. **병합**: 루트에서 현재 디렉터리 방향으로 내용을 이어 붙입니다. 현재 디렉터리에 가까운 파일이 뒤에 놓이므로 앞선 지침을 덮어쓸 수 있습니다.

Codex는 빈 파일을 건너뜁니다. 병합된 내용이 `project_doc_max_bytes`에 도달하면 로딩을 멈추며, 기본 한도는 32 KiB입니다.

## Monorepo 예시

```text
repo/
├── AGENTS.md
├── apps/
│   └── web/
│       └── AGENTS.md
└── services/
    └── payments/
        ├── AGENTS.md
        └── AGENTS.override.md
```

`services/payments`에서 시작하면 루트의 `AGENTS.md`가 먼저 로드됩니다. 해당 디렉터리에 `AGENTS.override.md`가 있으면 같은 디렉터리의 `AGENTS.md`는 무시됩니다.

패키지 관리자, 공통 테스트, 보안상 금지 사항처럼 저장소 전체에 적용되는 규칙은 루트 파일에 적습니다. 중첩된 파일에는 해당 서비스에 추가로 필요한 규칙만 적고, 내용의 80%를 복사하지 마세요.

## 작업 프롬프트와 함께 사용하기

`AGENTS.md`에는 오래 유지하며 버전 관리할 프로젝트 규칙을 담습니다. 프롬프트에는 이번 작업의 목표, 범위, 수락 기준을 담습니다. 예:

```text
적용되는 AGENTS.md를 따르세요. 이번에는 services/payments/retry.ts와
관련 테스트만 수정하세요. 키를 교체하지 마세요. make test-payments를
실행하고 실제 결과를 보고하세요.
```

프롬프트만으로 시스템, 조직, 샌드박스 또는 권한의 한계를 넘어 사용할 수 없는 기능을 사용할 수 있게 만들 수는 없습니다. 지침이 충돌하면 Codex에 관련 지침의 출처와 적용 범위를 나열하도록 요청하세요. 조정 가능한 프로젝트 기본 규칙과 실제 실행 제한을 구분해야 합니다. 범위가 분명하고 이미 승인되었으며 상위 지침과 충돌하지 않으면 계속 진행하고, 정보나 권한이 실제로 부족할 때만 구체적인 차단 사유를 설명하세요. 전체 비교는 [컨텍스트 우선순위](/ko/guide/context/context-priority/)를 참고하세요.

## 실제로 로드된 내용 확인하기

대상 디렉터리에서 새 세션을 시작하고 다음과 같이 질문합니다.

```text
작업을 시작하기 전에 이번 실행에서 로드된 AGENTS.md /
AGENTS.override.md의 출처를 순서대로 나열하고, 각 파일이 추가한
제약을 별도로 요약하세요. 파일은 수정하지 마세요.
```

`AGENTS.md`는 시작할 때 읽습니다. 수정했다면 새 실행이나 세션에서 확인하고, 현재 세션에 자동으로 반영되었다고 가정하지 마세요.

## 대체 파일과 용량 한도

기존에 `TEAM_GUIDE.md`가 있다면 다음처럼 설정할 수 있습니다.

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

대체 파일은 같은 디렉터리에 우선순위가 더 높은 파일이 없을 때만 적용됩니다. 한도를 늘리기 전에 중복 내용과 불필요한 배경 설명을 제거하여 중요한 규칙이 컨텍스트에서 밀려나지 않도록 하세요.

## 공식 근거

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
