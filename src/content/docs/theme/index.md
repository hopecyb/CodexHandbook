---
title: Codex 主题皮肤
description: 核对第三方主题的来源、版本、交互与恢复步骤，并区分项目说明和本站实测。
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: 已读取项目仓库、发行页和安装文档；尚未安装主题、测试界面或实跑卸载恢复，不提供兼容性保证。
  evidence:
    - label: Dream Skin 项目说明
      href: https://github.com/Fei-Away/Codex-Dream-Skin
    - label: macOS 安装与卸载说明
      href: https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md
    - label: 发行包与版本记录
      href: https://github.com/Fei-Away/Codex-Dream-Skin/releases
---

Codex Dream Skin 是第三方桌面主题项目。项目说明采用本机 CDP 连接注入外观，不修改官方安装包。这是项目方描述的实现方式；本站没有据此验证所有版本的文件行为、网络行为或界面兼容性。

![主题外观示意](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

本站已有的外观示意图不作为本次版本测试证据，也不能证明输入框、审批按钮和所有任务视图都正常。

## 版本与验证状态

| 项目 | 本次核对结果 |
|---|---|
| 来源 | [项目仓库](https://github.com/Fei-Away/Codex-Dream-Skin)与[发行页](https://github.com/Fei-Away/Codex-Dream-Skin/releases) |
| 发行页观察 | 2026-09-18 核对 [v1.5.18](https://github.com/Fei-Away/Codex-Dream-Skin/releases/tag/v1.5.18)，提交 `34335d27d54300eccb325cc652f6c93fef428b84`；未安装 |
| 本机客户端信息 | 只读 Info.plist：26.911.61220，build 9647，标识 com.openai.codex |
| 已测试的主题与客户端组合 | 无；尚未进行主题安装、交互或卸载测试 |
| Windows 兼容性 | 本站未测试 |
| 恢复结果 | 尚未实测；下面是操作与验收方法 |

发行说明提到部分界面修正经过上游 macOS Codex 26.901.41123 核对；这与本站只读记录的 26.911.61220 不同，不能外推为该组合兼容。本页 macOS 安装链接已固定到 v1.5.18，其他版本请查对应 tag。

客户端版本读取得到的只是环境信息，不能充当主题兼容证据。可使用[资源兼容与恢复记录](/guide/reference/resource-compatibility/)保存实际测试。

## 安装前准备

1. 从项目发行页选择明确版本，记录包名、下载地址与 SHA-256；若发布者提供校验文件，与下载包核对。哈希一致只证明文件匹配，不证明程序安全。
2. 保存当前客户端版本、系统版本、主题配置及有权使用的自定义图片副本，记录备份位置。
3. 先检查原始外观下的首页、任务页、输入、滚动、搜索与审批界面，作为对照。
4. 阅读与发行版本相匹配的安装、更新和卸载说明。仓库 main 分支文档可能比安装包更新。

macOS 请阅读[项目安装说明](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md)，Windows 请阅读[项目安装说明](https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/docs/install-windows.md)。本站不把“已损坏”或系统拦截一律归因于缺少签名；应先核对来源、包完整性和具体错误，再决定是否继续。

## 换图后检查什么

项目提供背景图与主题管理功能；菜单名称以对应版本为准。使用你有权使用的图片，并检查浅色、深色、窗口缩放和实际任务页面。

- 输入框、按钮和审批信息是否仍可看清、点击、聚焦。
- 搜索结果、长输出、代码差异和错误提示是否被背景遮挡。
- 切换页面和重新启动后，显示的主题是否与选择一致。
- 关闭主题后，原始界面是否恢复；问题是否仍可复现。

如果出现遮挡或无法操作，先停止使用该主题并执行恢复，不通过继续叠加样式掩盖问题。

## 卸载与恢复

项目 macOS 文档要求先在菜单栏执行“恢复原状并卸载”，再移除主题应用；用户主题和图片另行保留或清理。执行前备份自定义资源。Windows 按对应版本文档操作，不套用 macOS 路径。

下面是本站建议的恢复验收，并非已经完成的运行记录：

1. 保存客户端中的工作，记录当前主题和需要保留的文件。
2. 使用主题工具提供的恢复流程；保留完成、失败或状态未确认的提示。
3. 从正常客户端入口重新打开，检查背景、文字、输入与任务导航。
4. 确认主题工具不再自动启动或重新注入；需要技术检查时核对进程与调试连接，不随意终止同名进程。
5. 验收通过后再移除应用。自定义图片先保留，确认不再需要时单独处理。

备份存在、卸载程序退出或主题窗口关闭，都不能单独证明恢复成功。若结果未确认，保存日志并查项目 Issue，不写“已恢复”。不要删除整个 Codex 配置目录来卸载主题。

## 适用边界

CDP 能改变页面内容，因此“不修改官方安装包”不等于不会影响操作。界面结构更新后应重新验证。项目关于本机处理、网络访问和恢复机制的说明也需按具体版本审阅；本站不承诺所有素材不上传、所有版本都可一键恢复或覆盖更新永不丢数据。
