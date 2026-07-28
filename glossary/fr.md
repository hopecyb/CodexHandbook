# Glossaire (français)

Formulations recommandées pour les traductions du Codex Handbook. Les ID stables sont dans [`terms.yml`](./terms.yml). Langue source : chinois simplifié (`zh-CN`).

## Principes

- Ne **pas** traduire les noms de produits, protocoles ou fichiers : Codex, MCP, Skill, Hook, Plugin, AGENTS.md, Token.
- Préférer un français technique naturel aux calques.
- Garder le même terme dans une page et dans tout le manuel, sauf si l’UI produit utilise un autre libellé.

## Termes recommandés

| Term ID | Anglais | Français | Notes |
|---|---|---|---|
| agent | Agent | Agent | Conserver l’anglais |
| approval | Approval | Approbation | Confirmation humaine avant une action à risque |
| artifact | Artifact | Artefact / livrable | Sorties générées |
| cloud-environment | Cloud environment | Environnement Cloud | |
| cloud-task | Cloud task | Tâche Cloud | |
| compaction | Compaction | Compression | Résumé du contexte |
| context | Context | Contexte | |
| diff | Diff | Diff / écart | Préférer « diff » côté UI |
| handover | Handoff | Passation | |
| hook | Hook | Hook | Conserver l’anglais |
| interactive | Interactive mode | Mode interactif | |
| mcp | MCP | MCP | Ne jamais traduire |
| non-interactive | Non-interactive mode | Mode non interactif | `codex exec` / scripts |
| permission | Permission | Permission | |
| plugin | Plugin | Plugin | Conserver l’anglais |
| profile | Profile | Profile | Bundle de config nommé |
| prompt | Prompt | Prompt | Ou « invite » si besoin pédagogique ; ici on garde Prompt |
| reasoning | Reasoning | Raisonnement | |
| sandbox | Sandbox | Bac à sable | |
| skill | Skill | Skill | Conserver l’anglais |
| steering | Steering | Pilotage / recentrage | |
| subagent | Subagent | Subagent | Conserver l’anglais |
| task | Task | Tâche | |
| thread | Thread | Fil / thread | Conversation + contexte accumulé |
| thread-session | Thread / session | Fil / session | Alias débutant |
| token | Token | Token | Conserver l’anglais |
| tool | Tool | Outil | |
| verification | Verification | Vérification | Critères d’acceptation |
| worktree | Worktree | Arbre de travail | git worktree |

## À éviter

| À éviter | Préférer | Pourquoi |
|---|---|---|
| Traduire Skill en « compétence » seule | Skill | Nom produit |
| Confondre Thread et Task | Fil / Tâche | Rôles distincts |
| Traduire AGENTS.md | AGENTS.md | Nom de fichier |
