---
title: Scheduled tasks
description: ChatGPT에서 검증된 작업을 일정에 따라 반복 실행합니다.
locale: ko
source_locale: zh-CN
source_revision: 759c38e
translation_status: draft
translated_at: 2026-09-20
---

Scheduled task(예약 작업)를 사용하면 ChatGPT가 계획된 일정에 따라 백그라운드에서 작업을 반복할 수 있습니다. 정기 보고서, 지속적인 추적, 반복 유지 관리에 적합합니다. 임의의 webhook, 저장소 이벤트, CI 자동화와 같은 개념은 아닙니다.

## 먼저 적합성 판단하기

| 적합한 경우 | 적합하지 않은 경우 |
|---|---|
| 입력 출처가 안정적이고 결과를 검토할 수 있음 | 매번 문제를 새로 정의해야 함 |
| 시간이나 간격에 따라 실행 | Git push, PR 생성 등의 이벤트에 정확히 반응해야 함 |
| 읽기 전용 검사, 요약, 초안 작성 | 사람의 감독 없이 기본 브랜치를 병합하거나 대량 삭제 |
| 변화가 없을 때의 처리와 중단 조건이 명확함 | 실패 후 무한 재시도 |

## 현재 관리 위치

- ChatGPT Web 또는 데스크톱 앱에서 예약 작업을 만들고 관리합니다.
- Codex CLI와 IDE 확장에는 Scheduled task 관리 화면이 없습니다. 이곳에서는 요청, Skill, 스크립트를 먼저 테스트하는 편이 좋습니다.
- 데스크톱 앱의 작업은 로컬 프로젝트나 격리된 worktree를 사용할 수 있지만, 컴퓨터가 켜져 있고 앱이 실행 중이며 프로젝트가 디스크에 남아 있어야 합니다.
- Web 예약 작업은 업로드한 컨텍스트, 연결된 도구, Skills, Plugins를 사용할 수 있지만 로컬 폴더에 직접 접근하지는 못합니다.

## 이 문서 모음의 시작점

- [예약 작업 전체 안내](/ko/skills/automations/scheduled-tasks/): 실행 방식 선택, 오래 사용할 요청 작성, 권한과 검수 기준 설정

## 공식 출처

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)
