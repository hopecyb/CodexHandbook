# 용어집（한국어）

Codex Handbook 번역·작성에 쓰는 권장 역어. 안정된 용어 ID는 [`terms.yml`](./terms.yml)을 참고하세요. 소스 언어는 중국어 간체（`zh-CN`）입니다.

## 원칙

- 제품명·프로토콜명·파일명은 번역하지 않습니다: Codex, MCP, Skill, Hook, Plugin, AGENTS.md, Token.
- 기계적 직역보다 기술 문서로서 자연스러운 한국어를 우선합니다.
- 동일 페이지·핸드북 전체에서 용어를 통일합니다（제품 UI가 다른 표기인 경우 제외）.

## 권장 역어

| Term ID | 영어 | 한국어 | 비고 |
|---|---|---|---|
| agent | Agent | Agent | 영어 유지 |
| approval | Approval | 승인 | 고위험 작업 전 사람 확인 |
| artifact | Artifact | 산출물 | 생성된 파일 등 |
| cloud-environment | Cloud environment | Cloud 환경 | |
| cloud-task | Cloud task | Cloud 작업 | |
| compaction | Compaction | 압축 | 컨텍스트 요약 |
| context | Context | 컨텍스트 | |
| diff | Diff | diff / 차이 | UI에서는 diff 우선 |
| handover | Handoff | 인수인계 | |
| hook | Hook | Hook | 영어 유지 |
| interactive | Interactive mode | 대화형 모드 | |
| mcp | MCP | MCP | 번역하지 않음 |
| non-interactive | Non-interactive mode | 비대화형 모드 | `codex exec` 등 |
| permission | Permission | 권한 | |
| plugin | Plugin | Plugin | 영어 유지 |
| profile | Profile | Profile | 설정 번들 이름 |
| prompt | Prompt | 프롬프트 | |
| reasoning | Reasoning | 추론 | |
| sandbox | Sandbox | 샌드박스 | |
| skill | Skill | Skill | 영어 유지 |
| steering | Steering | 궤도 수정 / 유도 | |
| subagent | Subagent | Subagent | 영어 유지 |
| task | Task | 작업 | |
| thread | Thread | 스레드 | OS 스레드가 아님 |
| thread-session | Thread / session | 스레드 / 세션 | 초보자용 |
| token | Token | Token | 영어 유지 |
| tool | Tool | 도구 | |
| verification | Verification | 검증 | 수락 기준 확인 |
| worktree | Worktree | 작업 트리 | git worktree |

## 피해야 할 표기

| 피할 것 | 권장 | 이유 |
|---|---|---|
| Skill을 「스킬 팩」으로 Plugin과 혼용 | Skill / Plugin | 제품상 메커니즘이 다름 |
| Thread를 「대화」만으로 표기 | 스레드 / 세션 | 누적 컨텍스트를 강조 |
| Sandbox를 「감옥」 등으로 의역 | 샌드박스 | 핸드북 표준 |
| AGENTS.md를 번역 | AGENTS.md | 파일명 |
