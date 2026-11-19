---
title: GitHub 연결
description: Codex Cloud에 필요한 최소 저장소 범위로 GitHub 접근 권한을 설정합니다.
locale: ko
source_locale: zh-CN
source_revision: "b126a7e"
translation_status: stale
translated_at: 2026-09-20
sidebar:
  order: 10
legacyVerification:
  status: verified
  products: Cloud / GitHub
  checkedAt: '2026-08-26'
reviewed_at: "2026-10-26"
---

Codex Cloud에서 저장소용 환경을 만들려면 먼저 GitHub 또는 GitLab(Beta)을 연결해야 합니다. GitHub 연결 권한의 범위에 따라 Codex가 볼 수 있는 저장소가 결정됩니다. 내 컴퓨터의 clone과 아직 push하지 않은 변경 사항은 그 범위에 포함되지 않습니다.

## 연결 단계

1. Codex Cloud를 열고 ChatGPT 계정으로 로그인합니다.
2. 안내에 따라 GitHub를 연결합니다.
3. GitHub 권한 부여 화면에서 조직과 **필요한 저장소만** 선택합니다.
4. Codex로 돌아와 해당 저장소를 선택하고 Cloud 환경을 만듭니다.
5. 읽기 전용 작업이나 작은 수정 작업으로 clone, 브랜치, diff를 확인합니다.
6. PR review가 필요하면 Codex Settings에서 해당 저장소의 Code review를 활성화합니다.

이번 작업에 필요한 저장소에만 권한을 부여하세요. 팀 저장소라면 조직에서 통합 설치를 허용하는지, 현재 계정에 해당 권한이 있는지 확인하고 브랜치 보호도 유지해야 합니다.

## 연결 전후 점검

- [ ] 대상 저장소가 이름이 같은 다른 fork로 잘못 선택되지 않았습니다.
- [ ] 기본 브랜치와 작업 시작점을 확인했습니다.
- [ ] 필요한 로컬 변경 사항을 push했거나, 이번 작업에 포함하지 않는다고 명시했습니다.
- [ ] 검토 없이 기본 브랜치에 직접 쓰는 것을 금지했습니다.
- [ ] 환경에 프로덕션 수준의 모든 권한을 가진 자격 증명이 없습니다.
- [ ] 첫 작업은 위험이 낮은 파일만 변경합니다.

## GitHub에서 사용하는 두 가지 방법

### Cloud에 구현 작업 맡기기

Codex Cloud에서 저장소 환경과 시작 브랜치를 선택한 다음 목표를 설명합니다. 작업이 끝나면 diff를 검토하고 PR을 만듭니다.

### Codex에 PR 검토 맡기기

저장소에서 Code review를 활성화한 뒤 PR 댓글에 다음과 같이 적습니다.

```text
@codex review
```

Codex가 표준 GitHub review를 게시합니다. 자동 검토는 Codex Settings에서 별도로 활성화해야 합니다. 팀은 `AGENTS.md`의 `## Code Review Rules`에 저장소별 규칙을 적을 수 있습니다.

## 권한 오류 판단하기

- **저장소가 목록에 없음**: GitHub에서 허용한 저장소 범위를 확인합니다.
- **조직 저장소에서 403 발생**: 조직 정책, SSO, 통합 설치 허용 여부를 확인합니다.
- **자동 review를 켤 수 없음**: 설정에 필요한 GitHub push 또는 admin 권한이 있는지 확인합니다.
- **Cloud가 로컬 commit을 볼 수 없음**: Cloud는 원격 저장소에서만 checkout합니다. 명확한 브랜치에 먼저 push하세요.

403 오류 하나를 해결하려고 모든 비공개 저장소에 곧바로 권한을 부여하지 마세요. 대상 저장소와 실제로 부족한 권한부터 확인하세요.

## 공식 근거

- [Codex Cloud 빠른 시작](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
