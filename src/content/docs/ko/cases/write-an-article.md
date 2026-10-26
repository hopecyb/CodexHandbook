---
caseCategory: creation
directoryOrder: 20
title: 자료 세 개로 출처가 있는 글 쓰기
description: 제품 설명, 합성 인터뷰, 버전 기록으로 사실 대응, 충돌 처리, 수정을 연습한다. 전체 글 패키지를 내려받을 수 있다.
contentType: case
audiences: [creator, beginner]
task: source-backed-writing
level: beginner
estimatedMinutes: 50
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: 직접 만든 합성 자료 세 개와 주요 사실 일곱 개를 항목별로 대조했고 구조 검증을 통과했다. 작성자의 자체 점검이며 실제 모델 비교 실험이나 두 번째 사람의 검토는 하지 않았다.
  evidence:
    - label: 합성 제품 설명
      href: /downloads/source-backed-article/sources/01-product.md
    - label: 합성 인터뷰
      href: /downloads/source-backed-article/sources/02-interview.md
    - label: 미해결 충돌이 포함된 버전 요약
      href: /downloads/source-backed-article/sources/03-changelog.md
    - label: 작성자 점검 기록과 검증 경계
      href: /downloads/source-backed-article/validation/record.md
assets:
  - path: /downloads/source-backed-article/source-backed-article-1.0.0.zip
    purpose: 자료 세 개, 프롬프트, 초기·최종 초안, 사실표, 수정 diff, 검사 도구
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /ko/cases/
  label: 실습 작업 선택하기
next:
  link: /ko/cases/create-a-slide-deck/
  label: 글을 발표 자료로 만들기
locale: ko
source_locale: zh-CN
source_revision: "e2bb5ea"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: "2026-10-26"
---

이 실습의 목표는 모든 주요 사실을 자료로 되짚을 수 있는 짧은 중국어 글이다. 서로 모순되는 설명을 다루고 자료의 뒷받침, 작성자의 추론, 미확인 문제를 구분한 뒤 오류가 뚜렷한 의도적으로 오류를 넣은 초안을 고친다.

난이도는 입문이다. 예상 45~60분은 편집상 추정이며 독자 시간 측정은 아직 하지 않았다. Codex에 로컬 파일을 제공하고 Markdown을 읽을 수 있어야 한다. 선택적인 구조 검증에는 Python 3.10+가 필요하다.

[전체 실습 패키지 v1.0.0(ZIP) 내려받기](/downloads/source-backed-article/source-backed-article-1.0.0.zip)

모든 자료는 이 사이트가 직접 만들었다. 제품 ‘拾页’와 인터뷰 대상 ‘小林’은 가상이며 실제 제품이나 실제 사용자 증언을 나타내지 않는다.

## 최종 결과물

참고 최종 글은 “요약 하나를 먼저 확인한 뒤 사용 확대를 결정한다”를 중심으로 입력 경계, 소규모 시험, 요약 대조, 미해결 사항을 담는다.

| 결과물 | 용도 |
|---|---|
| `outline.md` | 독자의 질문과 글 순서 설명 |
| `article.md` | 사실 ID가 달린 중국어 글 |
| `claim-map.csv` | 주요 사실·조언 일곱 개, 출처 ID와 절, 증거 유형 |
| `unresolved.md` | 자료로 답할 수 없는 문제 보존 |
| `revision.diff` | 의도적으로 오류를 넣은 초안과 최종 글 사이의 실제 텍스트 차이 |

[참고 글 보기](/downloads/source-backed-article/solution/article.md) · [사실 대응표 보기](/downloads/source-backed-article/solution/claim-map.csv)

## 내려받아 준비하기

`source-backed-article`의 압축을 풀고 연다. `brief.md`와 `sources/index.csv`를 읽는다. CC0 1.0은 수정과 재배포를 허용한다. 먼저 자신이 작성할 때는 solution을 나중에 봐도 된다.

자료 세 개는 P 제품 설명, I 합성 인터뷰, C 버전 요약이다. P1, I2, C3처럼 안정적인 절 번호가 있다. 인용은 “자료에 따르면”에 그치지 말고 구체적인 절을 가리켜야 한다.

## 1. 먼저 사실과 충돌 정리하기

```text
brief.md, sources/index.csv, 여기에 나열된 자료 세 개를 읽는다.
직접 뒷받침되는 사실, 빠진 정보, 모순되는 주장을 먼저 나열하고 각각 출처 ID와 절을 붙인다.
가상 제품 정보를 인터넷으로 보충하거나 합성 인터뷰를 실제 사용자 증언으로 만들지 않는다.
문서 날짜만으로 충돌을 자동 해결하지 않는다. 글보다 사실표를 먼저 제출한다.
```

충돌 하나는 의도적이다. P3은 진단 업로드가 기본적으로 꺼져 있다고 하고, C2는 새 설치에서 켜져 있다고 하며, C3은 유지관리자의 정정 설명이 없다고 밝힌다. 최신 자료 한쪽을 최종 답으로 선택하지 말고 미확인으로 남겨야 한다.

## 2. 확정된 범위에서 이어서 쓰기

`prompts/02-outline-and-write.md`에는 대상 독자와 네 부분(무엇을 할 수 있는가, 어떻게 시험하는가, 무엇을 확인해야 하는가, 무엇이 남았는가)이 있다. 구조를 확인하면 문단마다 멈추지 않고 이어 쓸 수 있다.

모든 결과물을 `my-output/`에 두고 입력 자료를 보관한다. 주요 사실에는 `[F1]` 같은 번호를 붙이고 대응표에 다음 열을 기록한다.

```text
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

증거 유형은 “원문 뒷받침”, “작성자 추론”, “미확인”뿐이다. 몇 개의 복사 파일로 시험해 보자는 제안은 작성자 판단이며 제품 약속이나 필수 단계로 쓰면 안 된다.

## 3. 말투보다 사실을 먼저 고치기

`solution/draft.md`는 작성자가 설계한 반례이며 실제 모델 출력이 아니다. 자료가 뒷받침하지 않는 PDF·이미지 지원, 완전 오프라인, 효과 보장, 실제 사용자 증언을 일부러 담았다.

| 초안 문제 | 수정 | 이유 |
|---|---|---|
| “PDF와 여러 이미지를 지원” | Markdown과 일반 텍스트로 제한 | P1이 입력 범위를 명시 |
| “완전 오프라인, 진단 기본 꺼짐” | 충돌을 병기하고 미확인으로 남김 | P3/C2가 반대이며 업로드 항목도 불명 |
| “小林이 정확도와 시간 절약을 증명” | 가상 인물이라는 표시을 유지하고 효과 수치를 쓰지 않음 | I3에는 시간 측정이나 고정 평가 표본이 없음 |
| “만능 도구로 쉽게 생산성 향상” | 구체적인 입력, 행동, 검사를 작성 | 새 사실 없이 과장 제거 |

[수정 diff](/downloads/source-backed-article/solution/revision.diff)와 [수정 설명](/downloads/source-backed-article/solution/revision-notes.md)을 본다. 잘못된 기능을 남겨둔 채 말투만 다듬으면 완료가 아니다.

## 4. 구조를 검사하고 출처를 문장별로 읽기

Python 3.10+가 있다면 실습 폴더에서 실행한다.

```sh
python3 validation/check.py --output my-output
```

스크립트는 자료 세 개의 해시, 본문 ID, 출처 절, 미해결 파일을 확인한다. 참고 글은 통과했고 존재하지 않는 F99를 임시 복사본에 넣으면 거부한다.

**구조 통과가 사실의 정확성을 뜻하지 않는다.** 각 주장마다 원문을 열어 그 문장을 뒷받침하는지, “~에만 해당”, “아직 미확인” 조건이 남았는지 확인한다. 합성 내용이 실제 증언처럼 쓰였다면 인용 ID가 있어도 잘못이다.

스크립트를 실행할 수 없다면 대응표에 따라 원본 파일 세 개를 하나씩 열어 ID와 표현을 확인한다. 하지 않은 검사를 통과했다고 주장하지 않는다.

## 실패 시 복구

- 파일이 없음: 압축 해제 폴더와 출처 색인을 확인하고 내용을 지어내지 않는다.
- 인용 ID가 없음: 정확한 대응을 보완하거나 근거 없는 사실을 삭제하며 타당한 불확실성은 남긴다.
- 자료가 충돌: 두 설명과 누가 어떤 증거를 보완해야 하는지 쓴다. 날짜·다수결·말투로 정하지 않는다.
- 글이 광고 같음: 근거 없는 효과 약속을 먼저 지우고 구체적인 작업과 제한을 쓴다.

## 완료 조건

주요 사실의 위치를 찾을 수 있고 작성자 조언을 따로 표시하며 충돌과 누락이 보이고 가상 인물이라는 표시을 유지한다. 결과물은 로컬에 두고 자동 게시하지 않는다.

최종 글로 [편집 가능한 8장 발표 자료 만들기](/ko/cases/create-a-slide-deck/)를 이어 한다. 발표 패키지에는 독립 입력, PPTX, PDF, 미리보기 8장, 검증 기록이 있다. 연속 학습이라면 자신이 완성하고 확인한 글을 우선 사용한다.
