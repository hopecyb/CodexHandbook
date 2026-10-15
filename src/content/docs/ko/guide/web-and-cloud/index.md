---
title: Web와 Cloud 개요
description: 저장소 연결과 재현 가능한 환경에서 검토 및 Pull Request까지 이어지는 원격 작업 흐름입니다.
sidebar:
  order: 13
locale: ko
source_locale: zh-CN
source_revision: 86fa0ac
translation_status: draft
translated_at: 2026-09-20
---

Codex Cloud는 격리된 클라우드 환경에서 코딩 작업을 실행합니다. 백그라운드의 긴 작업, 병렬 시도, GitHub·GitLab(Beta)·Linear·Slack에서 시작하는 작업에 적합합니다. 사용자 컴퓨터를 원격 제어하는 방식이 아니며, 로컬에서 아직 푸시하지 않은 파일도 자동으로 볼 수 없습니다.

![일러스트: 브라우저의 저장소가 클라우드의 격리 컨테이너로 연결되고, 결과가 초록 체크가 붙은 풀 리퀘스트 카드로 돌아온다](/illustrations/web-and-cloud.webp)

## Cloud 작업의 흐름

```text
ChatGPT에 로그인
  → GitHub / GitLab 연결
  → 저장소 환경 생성
  → 지정한 브랜치 또는 commit checkout
  → setup script로 의존성 설치
  → Agent가 네트워크 정책 범위에서 수정하고 검증
  → 요약, 로그, diff 확인
  → 후속 수정 또는 PR 생성
  → 사람이 검토하고 CI를 확인한 뒤 병합
```

Cloud의 장점은 격리, 재현 가능성, 병렬 실행입니다. 검토 과정을 생략해 주지는 않습니다.

## 로컬과 Cloud 중 선택하기

| 로컬을 선택할 때 | Cloud를 선택할 때 |
|---|---|
| 커밋하지 않은 파일이나 로컬 서비스가 필요할 때 | 입력이 원격 저장소에 이미 있을 때 |
| 프로세스와 실시간으로 상호작용해야 할 때 | 작업을 백그라운드에서 독립적으로 실행할 수 있을 때 |
| 빠르고 범위가 작은 수정일 때 | 여러 단계의 빌드·테스트 또는 병렬 시도가 필요할 때 |
| 도구가 현재 컴퓨터에만 있을 때 | 스크립트로 환경을 다시 만들 수 있을 때 |

실행 경계를 이해하려면 먼저 [로컬과 Cloud](/ko/guide/foundations/local-vs-cloud/)를 읽으세요.

## 권장 학습 순서

1. [GitHub 연결](/ko/guide/web-and-cloud/connect-github/): 필요한 저장소에만 권한을 부여합니다.
2. [Cloud 환경](/ko/guide/web-and-cloud/cloud-environments/): 도구, 버전, setup을 고정합니다.
3. [Secrets와 환경 변수](/ko/guide/web-and-cloud/secrets-and-variables/): 설치 단계의 Secret과 실행 단계의 변수를 구분합니다.
4. [인터넷 접근](/ko/guide/web-and-cloud/internet-access/): Agent 단계는 기본적으로 인터넷이 차단되므로 필요한 도메인과 메서드만 엽니다.
5. [위임과 후속 작업](/ko/guide/web-and-cloud/delegate-and-follow-up/): 목표, 제약, 검수 기준을 포함해 작업을 맡깁니다.
6. [Pull Request 만들기](/ko/guide/web-and-cloud/create-pull-requests/)와 [코드 검토](/ko/guide/web-and-cloud/code-review/): 결과를 병합 가능한 산출물로 만듭니다.
7. [Cloud 문제 해결](/ko/guide/web-and-cloud/troubleshooting/): 저장소, setup, 네트워크, 작업의 네 계층에서 원인을 찾습니다.

데스크톱 앱이나 IDE에서 시작한다면 각각 [로컬 및 Cloud 작업](/ko/guide/desktop-app/local-and-cloud-tasks/)과 [IDE Cloud 작업](/ko/guide/ide/cloud-task-workflow/)을 참고하세요.

## 첫 연습

운영 환경 자격 증명이 없는 테스트 저장소를 선택하고, Codex에게 문서 링크를 수정한 뒤 링크 검사를 실행하도록 요청하세요. 성공 기준은 환경이 시작되고, diff가 예상한 파일에만 있으며, 명령 출력이 보이고, 결과로 PR을 만들 수 있는 것입니다. 화면에 '완료'라고 표시된 것만으로 검수를 끝내지 마세요.

## 공식 출처

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Cloud 환경](https://learn.chatgpt.com/docs/environments/cloud-environment)
