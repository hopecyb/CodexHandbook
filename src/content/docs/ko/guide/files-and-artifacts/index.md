---
title: 파일과 산출물
description: Codex가 각종 파일을 읽고 쓰고, 생성물을 관리·검증하는 요점.
sidebar:
  order: 30
locale: ko
source_locale: zh-CN
source_revision: 3a5cc3b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Codex의 핵심 산출은 종종 **저장소 안 파일 변경**이거나 **새로 생성된 산출물**(문서, 이미지, 설정)입니다. 이 특집은 파일 유형별 모범 실천을 설명해 “생성됐지만 쓸 수 없음”을 줄입니다.

같은 “파일”이라도 유형마다 설명 방식과 검증 방법이 다릅니다.

“코드 수정”, “표 처리”, “스크린샷 생성”, “PPT보내기”는 모두 파일 작업처럼 보이지만, 가장 틀리기 쉬운 지점은 같지 않습니다.

## 장 탐색

| 주제 | 페이지 |
|---|---|
| 코드와 텍스트 | [텍스트와 코드 파일](/ko/guide/files-and-artifacts/text-and-code-files/) |
| 스크린샷·디자인 입력 | [이미지와 스크린샷](/ko/guide/files-and-artifacts/images-and-screenshots/) |
| PDF와 긴 문서 | [PDF와 문서](/ko/guide/files-and-artifacts/pdf-and-documents/) |
| 표 데이터 | [표와 스프레드시트](/ko/guide/files-and-artifacts/tables-and-spreadsheets/) |
| 슬라이드 | [프레젠테이션](/ko/guide/files-and-artifacts/presentations/) |
| Agent 출력물 | [생성물 검증](/ko/guide/files-and-artifacts/generated-artifacts/) |

일반 방법은 [산출물 검증](/ko/guide/quality/verify-artifacts/)을 보세요.

## 이 장이 말하는 것

이 장은 주로 세 가지를 다룹니다.

- 작업을 어떻게 분명히 설명할지
- 어디에 몰래 틀리기 쉬운지
- 마지막에 어떻게 검증할지

그래서 파일 유형별로 쪼갠 조작 설명에 가깝고, 단순 기능 목록이 아닙니다.

## 통일 원칙

1. **경로 명확**: prompt에 출력 경로와 이름 규칙을 씀
2. **형식 약속**: 확장자, 인코딩(UTF-8), 줄바꿈을 프로젝트와 맞춤
3. **용량 의식**: 큰 바이너리는 Git에 넣지 않거나 LFS/CDN 사용
4. **사람 검증**: 생성 ≠ 완료; [완료 정의](/ko/guide/quality/definition-of-done/)와 대조
5. **민감 데이터**: [민감 컨텍스트](/ko/guide/context/sensitive-context/) 참고

## 흔한 오해

### 1. 파일이 생성됐다고 작업이 끝난 것은 아님

많은 파일형 작업의 문제는 “생성 여부”가 아니라:

- 형식이 맞는지
- 내용이 정확한지
- 경로가 맞는지
- 하류에서 계속 쓸 수 있는지

### 2. 파일 유형마다 설명 방식이 비슷하다?

다릅니다.  
예:

- 코드 파일은 범위·논리·테스트를 더 봄
- 표는 열·타입·집계 규칙을 더 봄
- 이미지는 시각 내용·크기를 더 봄
- 문서는 구조·어조·사실을 더 봄

### 3. 열리기만 하면 문제없다?

그렇게 보면 안 됩니다.  
“열림”은 가장 기초일 뿐이며, 커밋·배포·납품에 이미 적합하다는 뜻은 아닙니다.

## 권장 읽는 순서

Codex로 파일을 처음 다룰 때:

1. 현재 작업과 가장 비슷한 파일 유형을 찾음
2. 그 유형에서 가장 틀리기 쉬운 점을 봄
3. 대응하는 검증 방식을 봄

처음부터 장 전체에 압도되지 않기 쉽습니다.

## 도구와의 관계

- 파일 읽기/쓰기: 파일 도구 + 터미널
- 이미지 보기: [이미지 프롬프트](/ko/prompts/prompting-with-images/)
- 페이지 보기: [브라우저 도구](/ko/guide/tools/browser/)
- 이미지 생성: [이미지 생성](/ko/guide/tools/image-generation/)

파일형 작업에서 흔한 경우는, 결과는 이미 생성됐는데 형식·규칙·내용이 몰래 빗나간 것입니다.

---

**상태:** verified  
**적용 제품:** App / CLI / IDE / Cloud  
**검증 근거:** 본 저장소의 현재 files-and-artifacts 하위 구조와, 본 핸드북에서 이미 검증한 산출물 검증·완료 정의·민감 컨텍스트·이미지 관련 장을 교차 확인했습니다. 이 페이지는 파일 유형에 따라 설명·검증 방법을 고르는 안정 원칙만 설명합니다.  
**최근 검증:** 2026-07-26
