---
caseCategory: creation
directoryOrder: 40
title: 搭建网站：从活动资料到可预览页面
description: 下载需求、起始页面和参考成品，练习响应式布局、键盘操作及一次可复现的按钮故障修复。
contentType: case
audiences: [creator, developer]
level: beginner
outputs: [html, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  environment: Python 3.12.11 / Darwin arm64；Codex内置浏览器（精确引擎版本未知），1280×720与375×812视口。
  summary: 参考页经桌面/窄屏浏览器、按钮与键盘检查；链接故障真实复现并修正。不代表跨浏览器兼容、模型效果或读者通关。
  evidence:
    - label: 浏览器复核与实际视觉修正
      href: /downloads/reading-event/validation/browser-review.md
    - label: 链接故障与修复日志
      href: /downloads/reading-event/validation/recovery.json
assets:
  - path: /downloads/reading-event/reading-event-1.0.0.zip
    purpose: 固定需求、合成事实、起始HTML、参考页面、错误样本、验收模板与验证脚本
    license: CC0-1.0
    version: 1.0.0
---

把一份活动资料做成可在浏览器打开的单页网站。此次交付是本地静态页面和验收记录；活动与地点均为虚构，报名方式尚未确定。

[下载完整练习包](/downloads/reading-event/reading-event-1.0.0.zip) · [打开参考成品](/downloads/reading-event/solution/index.html) · [材料说明](/downloads/reading-event/README.md)

## 目标与准备

页面包含活动介绍、时间、地点、名额、费用、准备事项和待确认信息。主按钮只跳到本页参与说明，不伪装成可以报名。

解压后将 starter 复制为新的 work 目录，让模型只编辑 work/index.html。把包根目录的 facts.md、brief.md 和 prompt.md 作为只读输入，完成后再看 solution 答案。可直接用浏览器打开HTML，无需安装前端依赖。

如果要用本地服务器，按 README 的可选 Python 命令操作。若端口占用，换空闲端口，不终止未知服务。

## 提交任务

```text
根据 facts.md 和 brief.md，将当前 index.html 完成一页阅读分享会网站。
只改 index.html，使用 HTML 和内联 CSS，不新增依赖，不联网，不部署或发送。
报名方式保持待确认，主按钮只跳到页面参与说明。
完成后检查桌面、375px窄屏、键盘焦点和页内链接；
列出实际检查结果与未完成项，不把未运行写成通过。
```

[布局参考](/downloads/reading-event/wireframe.md)说明桌面双列与手机单列的阅读顺序。配色和装饰可以不同，活动事实、未知项与验收条件不能改变。

## 检查成品

| 检查 | 完成标准 |
|---|---|
| 事实 | 2026-10-17 14:00—15:30、虚构阅览室、18人、免费、自愿带书均与资料对应 |
| 未知 | 报名方式保留待确认，不编二维码、电话或链接 |
| 手机 | 375px窄屏可阅读，页面不横向溢出 |
| 操作 | Tab可到主按钮，焦点可见；Enter或点击能到参与说明 |
| 范围 | 只修改work/index.html，没有新增依赖、表单收集或外部发布 |

将[验收模板](/downloads/reading-event/review-template.md)复制到工作目录之外，填写自己的结果。参考成品由作者编写，不能拿作者记录代替本次模型产物的验收。

## 跟做一次按钮故障修复

包中 fixtures/broken.html 的按钮错误地指向 #signup，页面实际区块是 #participation。页面看起来完整，但按钮找不到正确目的地。

可选运行：

```sh
python3 validation/reproduce.py
```

复现器在临时目录检查错误页，退出1并报告missing-fragment；只替换href后再检查，退出0。原始fixture保持不变。[保存的日志](/downloads/reading-event/validation/recovery.json)包含两次检查的输出。

不要通过删除按钮或忽略检查来“修复”。只改目标链接，再实际点击核对。链接脚本不理解设计、事实或键盘体验，这些仍需单独检查。

## 实际视觉修正与验证边界

作者首次手机检查发现装饰书本文字挤出卡面，调整窄屏字级和内边距后重新检查。桌面与手机页面、键盘焦点、主按钮和F1—F7事实的观察记录见[浏览器复核](/downloads/reading-event/validation/browser-review.md)。

本次未测试所有浏览器、真实手机、完整屏幕阅读器操作或独立读者通关；没有发布网站，也没有测量模型成功率。需要发布时，另行确认托管位置、公开内容与部署权限。

下一步：[审查差异](/guide/quality/review-diffs/) · [失败恢复实录](/guide/reference/troubleshooting/failure-recovery-lab/)
