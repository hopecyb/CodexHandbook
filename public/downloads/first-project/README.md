# 新手五步：完成一份可核对的活动通知

版本 1.0.0。所有活动信息为合成教学数据，不实际报名、发布或发送。

## 准备

解压后，将 starter 文件夹完整复制为一个新的 work 文件夹，再让 Codex 打开 work。仅让模型使用 work 内的三个文件；references 是作者答案，templates 是供你填写的记录，先放在工作目录之外。无需 Git、Python 或安装依赖即可完成主练习；可用系统编辑器查看文件与差异。

## 五步

1. 只读 work 三个文件，说明各自用途，找出未知信息。核对原文件没有变化。参考 references/folder-map.md。
2. 仅在 notice.md 首行新增 `<!-- 状态：练习草稿，未发布 -->`，其他内容不变。参考 references/step-2-notice.md。
3. 依据 facts.md 整理 notice.md，使用 references/reusable-prompt.md 的任务说明。按事实核对，文字不必与参考完全相同。先自己完成，再看 references/notice.md。
4. 只读 references/flawed-notice.md，独立找错后再看 review-key.md。它是作者设计的坏样本，不是模型对照实验。用 templates/review.md 保存自己的复核。
5. 将 work 复制为新的 backup-final，在另一个新的 recovery-drill 目录做恢复练习。只把 recovery-drill/notice.md 改为“恢复演练中的错误版本”，然后从 backup-final 复制回来；核对三个文件与备份完全一致。真实 work 不参与破坏。填写 templates/handoff.md，连同最终通知、事实文件和复核记录交付。

建议把第4、5步记录保存到工作目录之外的 records 文件夹。要求模型不得编辑的参考与记录，不要在第3步顺便要求它改写。

## 完成条件

通知准确保留时间、地点、18人、免费、自愿带书与报名未知；只编辑约定文件；原始事实和便条不变；指出坏样本四项事实错误；实际恢复演练有证据；交接记录如实区分已做和未做。没有获得实际发布授权。

## 验证边界

validation/reproduce.py 仅在系统临时目录检查参考材料与复制/恢复流程，默认不会修改解压目录。它不调用模型，也不能证明读者已学会、客户端可靠率或任意通知语义正确。读取 validation/record.json 可见保存的真实脚本结果。

可选作者检查：在包根目录运行 `python3 validation/reproduce.py`。主练习不要求安装 Python。
