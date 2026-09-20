# 完整案例：一页阅读分享会网站

版本1.0.0，全部活动资料为虚构。无报名、发送、部署或支付功能。

## 开始练习

把 starter 复制成新的 work 目录，让模型编辑 work/index.html。提供包根目录的 facts.md、brief.md 与 prompt.md 作为只读输入，先不要提供 solution 答案。无需安装前端依赖。

用浏览器打开 work/index.html 即可预览。若使用本地服务器，可在包根目录运行 `python3 -m http.server 4181 --bind 127.0.0.1`，浏览器访问 `http://127.0.0.1:4181/work/`；结束后在该终端按 Ctrl+C。端口占用时换一个空闲端口，不终止未知进程。主练习可直接打开文件，不要求 Python。

## 参考与验收

完成后对照 solution/index.html 和 wireframe.md，逐项填写 review-template.md。重点是事实正确、按钮可用、手机阅读和编辑范围，不要求复制参考外观。参考页面的内容与视觉由作者编写，不是独立模型实验结果。

## 一次可复现的失败

fixtures/broken.html 与参考页只有主按钮的 href 不同：错误版本指向不存在的 #signup，正确目标是 #participation。

可选验证：在包根目录运行 `python3 validation/reproduce.py`。它在临时目录运行真实链接检查，保存到标准输出的 before/after 包括退出码与检查器输出；不修改原始包。可单独用 `python3 scripts/check_links.py solution` 检查参考页。

检查器只能验证静态本地HTML链接与锚点，不能证明排版、键盘体验、事实正确或模型表现。浏览器检查范围另见 validation/browser-review.md。

## 交付与恢复

交付工作副本的 index.html 和自己填写的验收记录。修改前保留工作副本；失败后只恢复这个练习目录中的文件，不重置整个仓库。发布网站是后续独立任务，本包没有发布凭证或自动部署脚本。
