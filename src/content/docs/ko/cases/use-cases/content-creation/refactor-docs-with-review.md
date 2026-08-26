---
title: 검토와 함께 문서 사이트 리팩터
description: "사례: Astro/Starlight 문서 프로젝트에서 링크와 장을 일괄 갱신—작은 걸음 diff, 빌드 검증."
locale: ko
source_locale: zh-CN
source_revision: 3acaf23
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

이 사례는 **콘텐츠 엔지니어링** 작업을 보여 줍니다: 여러 Markdown 파일, 사이드바 설정, 빌드 검증. 기술 스택은 이 핸드북과 비슷하지만, 시나리오는 임의의 정적 사이트로 옮길 수 있습니다.

## 메타데이터

| 항목 | 값 |
|---|---|
| 영역 | 콘텐츠 창작 / 문서 엔지니어링 |
| 진입점 | CLI 또는 IDE |
| 위험 | 중간(대량 링크와 내비게이션) |
| 소요 시간 | 1～3시간(규모에 따라) |

템플릿 설명: [사례 템플릿](/ko/cases/use-cases/case-study-template/)

## 배경

문서 사이트에 장을 추가한 뒤 필요한 일:

1. `astro.config` 사이드바 slug 갱신
2. 본문 상대 링크 수정
3. `npm run build` 오류 제로

사람은 slug를 놓치기 쉽습니다. Agent가 **체크리스트대로 실행 + 빌드 인수**하기에 적합합니다.

## 준비

- [ ] 깨끗한 git 브랜치
- [ ] 로컬에서 `npm run build`가 통과
- [ ] 새 페이지 경로와 목표 sidebar 위치를 나열

## 작업 prompt(예시)

```text
목표: 12-reference에 environment-variables.md를 추가하고 사이드바와 index 링크에 연결하세요.
제약: src/content/docs 와 astro.config.mjs 만 수정하세요. 의존성을 업그레이드하지 마세요.
인수: npm run build 성공; 죽은 링크 없음.
단계: 먼저 config를 고치고, 이어서 md를 쓰고, 마지막에 12-reference/index.md를 갱신하세요.
```

## 실행 포인트

- **먼저 config, 그다음 콘텐츠**: build의 missing slug를 피함
- 배치당 3～5개 파일을 커밋해 review하기 쉽게
- [탐색—계획—실행—검증](/ko/cases/workflows/explore-plan-execute-verify/) 사용

## 검사

- [ ] 사이드바 각 항목 slug에 대응 파일이 있음
- [ ] 사이트 내 링크가 상대 경로 규약을 따름
- [ ] build 로그에 Starlight 경고 없음(팀이 경고 제로를 요구하는 경우)

## 실패 복구

| 문제 | 처리 |
|---|---|
| Sidebar slug 오류 | astro 문서에 맞춰 slug를 고치거나 md를 보완 |
| 죽은 링크 | 목표 경로를 `grep`; 링크를 고치거나 페이지를 보완 |
| 빌드 OOM | 배치로 수정; 로컬 Node 메모리 증가 |

## 회고

- 같은 「새 장+사이드바」가 세 번째면 Skill로 정착
- ROADMAP에서 완료 항목을 체크해 문서와 계획이 어긋나지 않게

## 참고 출처
- 이 저장소의 실제 M2 문서 반복 흐름
---

**상태:** verified  
**적용 제품:** CLI / IDE  
**검증 근거:** 이 핸드북에서 이미 검증된 콘텐츠 산출물, EPXV, 빌드 인수, 사례 템플릿 장과 교차 확인했습니다. 이 페이지 내용은 “여러 파일 문서 사이트를 작은 걸음으로 수정하고, 빌드 검증하며, 실패를 복구”하는 안정적인 콘텐츠 엔지니어링 사례로 한정됩니다.  
**최근 검증:** 2026-07-26
