---
title: Customization and Project Configuration
description: Personal preferences, AGENTS.md, configuration, and rule precedence—so Codex keeps working your way over time.
sidebar:
  order: 40
locale: es
source_locale: en
source_revision: 8fa97f5
translation_status: fallback
translated_at: '2026-07-28'
---


Codex does not rely only on “how you ask this time”; it also relies on **persistent configuration** to remember your conventions and your team’s. This chapter mainly separates what should stay in the conversation from what should sink into the project.

If you have started repeating the same things—such as “don’t touch this directory,” “run tests first,” or “use this model by default”—this chapter addresses that kind of problem.

## Contents

- Who overrides whom among personal preferences, project instructions, team rules, and temporary prompts
- What belongs in `AGENTS.md` and what does not
- Which layer owns configuration files and approval/sandbox policy

## Who This Is For

| Reader | Start here |
|---|---|
| Just got your first task working | [Project Instructions](/guide/customization/project-instructions/) |
| Want to codify collaboration norms in the repo | [What Is AGENTS.md](/guide/customization/agents-md/what-is-agents-md/) |
| Want consistent CLI/App behavior | [Configuration Basics](/guide/customization/configuration/config-basics/) |

## What This Chapter Addresses

After using Codex for a while, many people run into the same kind of problem: they have written plenty of rules, but things do not feel fully effective, or different places contradict each other.

This chapter is mainly about how to layer collaboration rules well:

- What is my personal habit
- What is a shared repo rule
- What is an organization-level hard boundary
- What is only a temporary requirement for this task

When layering is unclear, it is easy to end up with “wrote a lot, but it did not take effect when it should have.”

## Common Layers (Conceptual)

Understanding the layers helps avoid the confusion of “I wrote rules but they did not apply.” Different clients, organization-managed capabilities, and version implementations may differ, but you can usually start with the layers below:

```text
1. Organization/team managed policy (if deployed)
2. Project-level AGENTS.md / project instructions (in the repo)
3. User-level configuration and preferences (local machine, e.g. ~/.codex)
4. Temporary requirements and @ references in the current task
```

**Principle:** The closer something is to “organization-mandated,” the less it should be casually relaxed by a single task; the closer it is to “the current task,” the more flexible it is—and the easier it is to lose when the session ends. For actual precedence, follow the current client and official documentation.

## Common Misconceptions

### 1. If I can write prompts, I do not need long-term configuration?

For short tasks that may barely suffice, but once you start ongoing collaboration, you increasingly want to sink repeated requirements downward.

### 2. Can I just put every rule into `AGENTS.md`?

Not really.  
Some things fit better in:

- Personal preferences
- Configuration files
- Organization-managed policy
- The current task prompt

### 3. More configuration is not always better

When configuration is scattered, rules are too long, and layers are messy, both people and tools have a harder time knowing what to follow.

## Chapter Navigation

| Topic | Pages |
|---|---|
| AGENTS.md | [Overview](/guide/customization/agents-md/what-is-agents-md/) · [Scope and Precedence](/guide/customization/agents-md/scope-and-precedence/) · [Writing Effective Instructions](/guide/customization/agents-md/writing-effective-instructions/) |
| Project instructions | [Project Instructions](/guide/customization/project-instructions/) |
| Memory | [Memories and Persistent Context](/guide/customization/memories-and-persistent-context/) |
| Mechanism selection | [Choosing the Right Mechanism](/guide/customization/choosing-the-right-mechanism/) |
| Configuration | [Configuration Basics](/guide/customization/configuration/config-basics/) · [Profiles](/guide/customization/configuration/profiles/) |
| Personal preferences | [Personal Preferences](/guide/customization/personal-preferences/) |
| Rules | [Allow and Deny](/guide/customization/rules/allow-and-deny-patterns/) · [Command Rules](/guide/customization/rules/command-rules/) · [Team Policy](/guide/customization/rules/team-rules/) |
| Examples | [AGENTS.md in a Monorepo](/guide/customization/examples/monorepo-agents-md/) |

Rules coverage has started; more configuration detail pages will be added as the customization module grows.

## Suggested Order

When you are organizing Codex collaboration rules for the first time, you can follow this order:

1. Organize project rules first
2. Then add `AGENTS.md`
3. Then separate personal preferences
4. Finally handle configuration files and finer rule controls

This is less chaotic than changing a pile of config keys right away.

Rules do not need to be numerous; putting them in the right place matters more.

## Common Mistakes

- Stuffing a long architecture document into `AGENTS.md`, drowning out key constraints
- Repeating team norms in chat without committing them to the repo, so collaborators get inconsistent experiences
- Relaxing the sandbox on your personal machine while assuming teammates in a shared repo have the same permissions

## Acceptance Checklist

- [ ] You can explain the priority of the four configuration layers
- [ ] The repo has a short `AGENTS.md` (or equivalent project instructions)
- [ ] Sensitive operations still go through approval instead of relying on text rules to “scare” the model

## References

- OpenAI Codex documentation: [https://developers.openai.com/codex](https://developers.openai.com/codex)
- Community practice structure references: freestylefly/CodexGuide AGENTS.md topics, stormzhang/ai-coding-guide `11-agents-md.md`

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** OpenAI’s current Help Center and Codex configuration materials still clearly describe layering among user-level `~/.codex` configuration, organization-managed capabilities, and project-level collaboration instructions; this page rewrites “precedence” as a more conservative common layering description to avoid writing specific implementation details as absolute rules.  
**Last verified:** 2026-07-26
