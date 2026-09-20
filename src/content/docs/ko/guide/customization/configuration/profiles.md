---
legacyVerification:
  status: "verified"
  products: "CLI"
  checkedAt: "2026-08-26 (로컬 `codex-cli 0.148.0`)"
title: 설정 Profile
description: 별도 설정 파일로 Codex CLI의 기본 사용자 설정 위에 이름을 붙인 설정 묶음을 덧씌웁니다.
locale: ko
source_locale: zh-CN
source_revision: 6ab30c5
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 20
---

현재 Codex CLI의 `--profile <name>`은 `$CODEX_HOME/<name>.config.toml`을 기본 사용자 설정 위에 덧씌웁니다. 주로 CLI에서 사용하는 기능으로, 데스크톱 앱 전체에 적용되는 범용 “원클릭 모드”라고 설명해서는 안 됩니다.

## 최소 예시

기본 설정에는 공통 기본값을 둡니다.

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

읽기 전용 검토 profile을 만듭니다.

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

다음과 같이 실행합니다.

```bash
codex --profile review
# 짧은 형식
codex -p review
```

로컬에 설치된 버전에서 의미를 확인합니다.

```bash
codex --help
```

현재 도움말에는 profile 파일 경로와 설정이 덧씌워지는 관계가 설명되어 있어야 합니다. 버전이 다르다면 로컬 출력과 공식 설정 참고 문서를 기준으로 하세요.

## Profile이 적합한 경우

| Profile | 목적 | 경계 예시 |
|---|---|---|
| `review` | 읽기 전용 점검 | read-only, 쓰기 작업 없음 |
| `workspace` | 일상적인 프로젝트 수정 | 작업 공간에만 쓰기, 필요할 때 승인 |
| `ci` | 비대화형 검사 | 고정된 출력, push 없음 |

Profile은 설정의 시작점을 묶어 저장할 뿐입니다. 조직 requirements를 무시하게 만들지도 않고, prompt를 자동으로 안전하게 만들지도 않습니다. 특히 `danger-full-access`를 언제든 쓰는 기본 profile로 만들지 마세요.

## Permission Profile과 혼동하지 않기

- **설정 Profile**: `--profile name`으로 `<name>.config.toml`을 선택하고 여러 Codex 설정을 덧씌웁니다.
- **Permission Profile(Beta)**: `default_permissions`와 `[permissions.<name>]`으로 파일 시스템 및 네트워크 경계를 정의합니다.

둘 다 profile이라는 이름을 쓰지만 목적과 설정 구조가 다릅니다. 현재 Permission Profile은 이전의 `sandbox_mode`와 조합하지 않습니다. 두 권한 시스템 중 하나를 선택해 설정하세요.

## 팀에서 사용할 때의 경계

설정 Profile은 사용자 Codex home에 있으며, 현재 버전에서 곧바로 커밋할 수 있는 프로젝트 설정이 아닙니다. 팀은 검토된 예제 파일을 문서로 제공하고 구성원이 명시적으로 설치하고 확인하도록 할 수 있습니다. 저장소를 clone하면 개인 profile이 자동으로 활성화된다고 가정하지 마세요.

## 검수

1. `codex --help`를 실행해 현재 버전이 `-p/--profile`을 지원하는지 확인합니다.
2. 읽기 전용 작업으로 `review`를 시험합니다.
3. 작업 공간 밖의 파일을 읽거나 파일에 쓰기를 요청해 경계가 예상대로 차단되는지 확인합니다.
4. 파일 이름만 믿지 말고 실제로 적용된 설정을 확인합니다.

## 공식 근거

- [Codex 설정 schema](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [Codex CLI 소스의 설정 계층](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)
