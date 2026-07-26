---
title: references/ 目录
description: 在 Skill 中组织长参考文档，实现渐进式披露。
---

`references/` 适合放那些不需要每次都立刻展开的长资料，避免主流程写得又长又乱。

它不只是“多放几个文档”，也在于把那些**不是每次都要立刻读、但在某一步又确实有用**的资料单独收起来，需要时再读。

# references/ 目录

当 `SKILL.md` 正文过长时，把详细规范、API 说明、检查清单移到 `references/`，在步骤中按需引用。

## 示例

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

在 `SKILL.md` 中写：

```md
审查代码风格时，读取 references/style-guide.md 并按其中规则检查。
```

## 它在做什么

- `SKILL.md` 负责主线流程
- `references/` 负责“需要时再打开的资料”

也可以直接理解为：

- `SKILL.md` 是工作说明
- `references/` 是资料柜

这样读 Skill 时不会先被大段背景说明压住，需要细节时也能找到依据。

## 什么时候值得拆出 `references/`

如果 `SKILL.md` 里开始出现这些情况，就可以考虑拆分：

- 一大段规范说明每次都占地方
- 有多个不同主题的参考资料混在一起
- 主流程已经被背景材料打断，初次阅读时很难抓主线

第一次做 Skill 时，不一定非要有 `references/`。  
常见顺序是**先跑通，再在内容真的变长时拆出来**。

## 常见误解

### 1. `references/` 不只是把内容复制出去一点

它更重要的作用，是让主流程保持短、清楚、能先跑通。

### 2. 参考资料不一定越多越好

如果什么都往 `references/` 塞，最后只是把混乱从一个文件搬到了多个文件。

### 3. 有了 `references/`，`SKILL.md` 就可以写得很简略

主流程仍然应该留在 `SKILL.md`，否则别人第一次读还是不知道该怎么执行。

## 原则

- 主流程留在 `SKILL.md`，参考资料按需加载
- 单文件聚焦一个主题，便于维护
- 避免在 references 中重复 SKILL.md 已有步骤

## 何时放进 `references/`

如果某段内容回答的是“**按什么规则做**”，一般放进 `references/` 更合适；如果回答的是“**先做哪一步**”，就更该留在主流程里。

`references/` 适合用来缩短主流程，需要细节时再展开。
---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25
