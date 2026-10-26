---
title: 기능 비교
description: 작업 환경, 실행 위치, 검토 방법을 기준으로 데스크톱 App, CLI, IDE, Cloud를 비교합니다.
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "현재 공식 App, CLI, IDE, Cloud, Authentication, Pricing 페이지를 대조했습니다. 이 표는 작업 위치, 컨텍스트, 검토 방법, 로그인 경계처럼 명확한 기능만 담으며, 변화가 빠른 기능을 '강함/보통/약함'으로 추측하지 않습니다."
  checkedAt: "2026-08-26"
locale: ko
source_locale: zh-CN
source_revision: 'b3d30b0'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 30
reviewed_at: '2026-10-26'
---

이 표는 **안정적인 주요 작업 방식**만 비교하며, 빠르게 달라지는 세부 기능을 영구적인 약속처럼 제시하지 않습니다. 먼저 [클라이언트 선택 안내](/ko/guide/choose-your-client/)로 선택한 다음 여기에서 차이를 확인하세요.

## 핵심 비교

| 진입점 | 작업이 이루어지는 곳 | 가장 풍부한 컨텍스트 | 주요 검토 방법 | 대표적인 작업 |
|---|---|---|---|---|
| ChatGPT 데스크톱 App | 로컬 프로젝트, 채팅, 파일 | 열린 폴더, 프로젝트, 작업 | 작업 요약, 파일, diff, 승인 화면 | 여러 프로젝트 조율, 장기 작업, 파일 및 컴퓨터 조작 |
| Codex CLI | 현재 터미널과 로컬 저장소 | 작업 디렉터리, 명령 출력, Git 상태 | 터미널의 명령, diff, 결과 요약 | 탐색, 수정, 테스트, 스크립트, CI |
| IDE 통합 | 현재 편집기 | 열린 파일, 선택 영역, 최근 대화 | 코드 옆 변경 요약과 diff | 특정 부분 설명, 작은 단계의 수정, 편집기 안의 검토 |
| Codex Cloud | 격리된 원격 환경 | 연결된 저장소와 환경 설정 | Cloud 로그, 요약, diff, PR | 백그라운드 장기 작업, 병렬 시도, 원격 협업 |

## 설치와 로그인

| 항목 | 데스크톱 App | CLI | IDE | Cloud |
|---|---|---|---|---|
| 진입점 | macOS / Windows / Linux 데스크톱 앱 | 로컬 명령줄 | VS Code 호환 확장 프로그램; Xcode와 JetBrains는 각각 별도 통합 | Web 및 지원되는 원격 통합 |
| ChatGPT 로그인 | 지원 | 지원 | 지원 | 필수 |
| 로컬 API key 로그인 | 지원 | 지원 | 지원 | 미지원 |
| 주요 요금 관계 | ChatGPT 요금제 또는 API 사용량 | ChatGPT 요금제 또는 API 사용량 | ChatGPT 요금제 또는 API 사용량 | ChatGPT 요금제와 작업 공간 권한 |

API key로 로그인한 로컬 작업과 ChatGPT 로그인은 요금, 관리, 데이터 처리 정책이 서로 다릅니다. API key만으로 ChatGPT 작업 공간이나 Cloud가 필요한 기능을 사용할 수도 없습니다. 구체적인 요금제와 한도는 언제나 공식 최신 페이지를 확인하세요.

## 자주 쓰는 조합

### 개인 개발의 전체 흐름

```text
IDE에서 국소 문제 찾기 → CLI에서 정확한 테스트 실행 → 데스크톱 App에서 장기 작업과 diff 검토
```

### 팀의 원격 작업 흐름

```text
GitHub / GitLab / Linear / Slack에서 시작 → Cloud의 격리 환경에서 실행 → 사람이 요약과 diff 검토 → PR 만들기
```

### 초보자의 학습 흐름

```text
데스크톱 App에서 연습 폴더 열기 → 작은 작업 요청 → 권한 요청 확인 → diff 확인 → 검증 실행
```

## 표를 현장 확인 대신 사용하지 마세요

플러그인, Scheduled tasks, 알림, 모델, 조직 정책은 빠르게 바뀝니다. 다음이 궁금하다면 현재 클라이언트 화면과 공식 문서를 직접 확인하세요.

- 현재 계정에 특정 기능이 표시되는가?
- 기능이 요금제, 지역, 관리자 정책의 제한을 받는가?
- 현재 버전에서 명령, 단축키, UI 이름이 무엇인가?
- API key 로그인으로 특정 ChatGPT 또는 Cloud 기능을 사용할 수 있는가?

선택 원칙은 단순합니다. **특정 코드 부분에는 IDE, 터미널 작업의 전체 흐름에는 CLI, 로컬 작업 조율에는 데스크톱 App, 격리된 원격 실행에는 Cloud를 사용하세요.**
