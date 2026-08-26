---
title: 账号、套餐与访问
description: 区分 ChatGPT 计划、API key 用量和组织工作区权限。
sidebar:
  order: 10
---

Codex 当前可通过 **ChatGPT 计划**或 **API key 按量计费**使用，但两种方式并不提供完全相同的入口与治理边界。

## 先选访问方式

| 方式 | 适合 | 可用边界 |
|---|---|---|
| 使用 ChatGPT 登录 | 个人交互、桌面、Cloud、组织工作区 | 按 ChatGPT 计划额度、工作区角色和管理员策略运行 |
| 使用 API key | 本地 Codex、脚本与 CI | 按 API 用量计费；部分依赖 ChatGPT 工作区或 Cloud 的能力不可用 |

当前官方 Pricing 页面把 ChatGPT Work 和 Codex 纳入 Free、Go、Plus、Pro、Business、Edu、Enterprise 等计划，但价格、额度、模型和功能包含项会变化。本手册不复制价格表，请直接查看 [官方实时 Pricing 页面](https://learn.chatgpt.com/docs/pricing)。

## 有账号为什么仍可能不能用

登录只是第一层，最终访问还取决于：

1. 当前计划是否覆盖目标入口或功能。
2. 所在地区和当前产品是否可用。
3. 组织是否已为你分配席位、角色和工作区权限。
4. 管理员是否通过托管配置限制登录方式、模型或本地能力。
5. 你的用量是否已达到当前窗口或周限额。

## 个人用户检查清单

- 能在官方页面登录正确的 ChatGPT 账号
- 知道自己使用的是计划额度还是 API 按量计费
- 能在目标客户端看见正确身份
- 遇到额度提示时查看实时用量，而不是反复重装客户端

## 团队与企业用户检查清单

- 当前选择的是正确工作区，不是同邮箱下的个人空间
- 管理员已经完成成员、席位和角色配置
- SSO、MFA、数据保留和区域策略符合组织要求
- 本地登录方式未被托管配置强制为另一种模式
- API key 属于正确 API organization，且不与 ChatGPT 工作区策略混为一谈

## 一个判断例子

如果 CLI 能用 API key 登录，但 Cloud 按钮不可用，这不一定是安装故障。Cloud 要求 ChatGPT 登录，并受 ChatGPT 计划和工作区权限控制；API key 主要覆盖本地与程序化流程。

下一步见 [登录与身份验证](/guide/getting-started/sign-in-and-authentication/)。

---

**状态：** verified

**适用产品：** App / CLI / IDE / Cloud

**核验依据：** 已对照当前官方 Pricing 与 Authentication 页面；本页记录访问模型和排查顺序，不固化价格、额度或高波动功能清单。

**最近核验：** 2026-08-26
