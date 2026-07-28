---
title: Web와 Cloud(개요)
description: Cloud 작업, 환경, Secrets, PR 리뷰의 입구 내비입니다.
sidebar:
  order: 13
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cloud는 **표준화된 원격 환경**에서 작업을 돌리고, GitHub에 연결하고, PR을 내는 데 맞습니다. 시작 전에 [로컬과 클라우드](/guide/foundations/local-vs-cloud/)를 보고, [공식 Cloud 문서](https://developers.openai.com/codex)를 읽으세요.

작업은 당신 컴퓨터가 아니라 원격 환경에서 계속 실행됩니다.

이런 시나리오에서 흔합니다.

- 작업이 오래 걸림
- 본기기를 계속 지키고 싶지 않음
- 원격 저장소와 PR 흐름에 바로 연결해야 함

Cloud가 가장 먼저 만나는 부분은 아닐 수 있지만, 원격 저장소·PR·비동기 장시간 작업을 다루기 시작하면 거의 쓰게 됩니다.

## 장 내비

| 단계 | 페이지 |
|---|---|
| 연결 | [GitHub 연결](/guide/web-and-cloud/connect-github/) |
| 환경 | [Cloud 환경](/guide/web-and-cloud/cloud-environments/) |
| 자격 증명 | [Secrets와 환경 변수](/guide/web-and-cloud/secrets-and-variables/) |
| 산출 | [Pull Request 만들기](/guide/web-and-cloud/create-pull-requests/) |
| 품질 | [Cloud 코드 리뷰](/guide/web-and-cloud/code-review/) |
| 협업 | [위임과 후속](/guide/web-and-cloud/delegate-and-follow-up/) |
| 네트워크 | [인터넷 접근](/guide/web-and-cloud/internet-access/) |
| 장애 분석 | [Cloud 장애 분석](/guide/web-and-cloud/troubleshooting/) |
| 통합 | [GitHub 통합](/guide/integrations/github/) |

데스크톱 App에서 클라우드 작업 시작：[로컬과 클라우드 작업](/guide/desktop-app/local-and-cloud-tasks/). IDE에서 위임：[IDE 클라우드 작업](/guide/ide/cloud-task-workflow/).

## 권장 읽기 순서

Cloud를 처음 볼 때 이 순서로 읽으세요.

1. [GitHub 연결](/guide/web-and-cloud/connect-github/)
2. [Secrets와 환경 변수](/guide/web-and-cloud/secrets-and-variables/)
3. PR, 코드 리뷰, 협업 흐름

“저장소에 어떻게 연결하고, 권한을 어떻게 받으며, 키를 어떻게 다루는지”를 먼저 분명히 한 뒤 자동화 세부사항을 보면 더 수월합니다.

Cloud는 본기기를 떠나 계속 도는 원격 저장소 작업에 맞습니다. 로컬 흐름을 웹으로만 옮기는 것이 아닙니다.

---

**상태：** outdated  
**적용 제품：** Cloud  
**재검토 설명：** Cloud 내비 페이지로서 구조 가치는 있지만, GitHub 연결·Secrets·PR·모바일 후속·네트워크 접근 등 의존 능력이 모두 변동이 큰 제품 영역입니다. 페이지별로 현행 공식 Cloud 문서를 보강하기 전에는 `outdated`가 더 맞습니다.  
**최근 검증：** 2026-07-26
