# 从三份资料写成带来源的文章

版本 1.0.0。练习用产品说明、合成访谈和版本记录写一篇中文短文，读者能够追溯每个关键事实，也能看到仍未解决的冲突。

拾页是本站虚构产品，小林是合成访谈角色。所有材料原创、CC0 1.0，可修改与再分发；不要将它们改作真实产品宣传或用户证言。

## 跟做

1. 解压后以本目录为工作文件夹，阅读 brief.md 和 sources/index.csv。
2. 使用 prompts/01-evidence.md，先列事实、缺失信息和冲突，不急于成稿。
3. 使用 prompts/02-outline-and-write.md，按已明确的四段大纲连续写稿到 my-output/。
4. 使用 prompts/03-review.md，逐句核对，再比较 solution 的参考稿与事实表。
5. 保留 unresolved.md 中确实缺少答案的问题。完成练习不等于消除所有不确定性。

预计练习 45—60 分钟，为编辑预估，尚未经读者计时验证。只读写 Markdown 不要求 Python；可选结构校验需要 Python 3.10+，只使用标准库。

```sh
python3 validation/check.py
python3 validation/check.py --output my-output
```

第一条核对参考材料，第二条核对你自己的 article.md、claim-map.csv 和 unresolved.md。脚本检查来源哈希、编号、定位与小节，**不会判断句子是否忠于来源**。必须逐项阅读事实表和原文，不把 PASS 当作“无幻觉”保证。

## 对照材料

- solution/draft.md：作者设计的错误初稿，明确不是模型日志。
- solution/article.md：参考终稿，保留虚构身份和未决事项。
- solution/claim-map.csv：七条关键事实/建议与小节定位。
- solution/revision.diff：从设计初稿到终稿的文本差异。
- solution/revision-notes.md：事实修正与表达修正的区别。
- validation/record.md：实际检查和未覆盖范围。

## 恢复

引用文件找不到时核对工作目录与来源索引，不猜测内容；编号校验失败时查事实表，不删除仍有必要的引用；出现来源冲突时并列两种说法和待确认问题，不按日期或多数意见投票。

交付停在本地稿件，不自动发布。演示稿练习可以复用这份终稿，但必须同时保留它的合成身份与不确定性。
