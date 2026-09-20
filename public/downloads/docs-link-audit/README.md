# 静态文档链接检查练习

v1.0.0，Python 3.10+ 标准库；原创合成文档按 CC0 提供。无需模型、API、账号或网络。检查构建后的 HTML，而非猜测 Markdown 路由。

在本目录执行：

```sh
python3 scripts/check_links.py fixtures/site
python3 scripts/check_links.py solution/site
python3 validation/test_links.py
```

第一条预期退出码 1：index.html 第 4 行目标不存在，第 5 行锚点不存在。第二条退出码 0：本地引用通过，但外部 example.com 仍列为 unchecked。第三条七项测试通过。

## 自己修复一次

复制 fixtures/site 到自己的 work/，只把 `/missing/` 改成 `/guide/`，再把 `#old-anchor` 改成 `#install`。每次修改后重跑，观察问题从两个降为一个，再降为零。不更改原 fixtures。参考结果在 solution/site；运行与恢复记录在 validation/。

## 检查实际项目

先按项目说明构建站点，再执行 `python3 scripts/check_links.py /absolute/path/to/dist`。程序只读指定目录并向标准输出写 JSON，可由调用者重定向保存。只支持目录 index.html 与明确文件路径；框架自定义重写、动态 JavaScript 导航、CSS URL、srcset 和外链不在检查范围。带 base href 的页面直接退出 2，避免相对路径被错误解释。

返回 0 为本地检查通过；1 为发现断链；2 为无法完成检查（目录不存在、没有 HTML、无法读取或不支持的 base）。外链、mailto、data 等保留在 unchecked，不能据 local_pass 宣称全站链接有效。

## 放进周期任务

先手动完成检查和失败恢复，再把“构建命令 → 此检查命令 → 保存 JSON/退出码”交给已有调度器。固定工作目录和依赖版本；构建失败就停止，不检查旧 dist。保存完整日志，禁止并发覆盖同一输出文件。

读取新的 findings 与上次结果比较：未变化不重复通知；新增失败、检查进程异常或恢复时才准备变化摘要。通知仍需单独授权。本包不创建定时任务，不发送消息、不提交修改。真实调度器或 CI 尚未实测；本地重跑记录不是 CI 成功证据。

外链另设经授权的有限范围检查，区分 404、认证限制、超时和临时服务错误；不要把一次访问失败都当作应删除的链接。本包没有模拟 HTTP 响应来冒充真实网络检查。
