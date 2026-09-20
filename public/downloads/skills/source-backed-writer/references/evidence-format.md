# 教学材料与事实表

本包 sources/ 与已完成的文章练习使用同一组原创 CC0 合成资料。产品“拾页”、访谈与人物均虚构。输入事实不因包装成 Skill 而改变。

练习输出到 my-output/：article.md、claim-map.csv、unresolved.md。表字段：

```csv
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

evidence_type 为原文支持、作者推断或未确认；多个 source_id/locator 用分号分隔。正文用 [F1] 等编号，小节名与表对应。

关键不变量：P3 与 C2 的诊断设置冲突保留；I3 没有计时或准确率依据；P1 不支持 PDF/图片；所有素材的虚构身份仍可见。

参考 solution/ 包含初稿、终稿、事实表与修订差异。初稿为作者设计反例，不是模型历史输出。结构脚本不能判断语义支持，完成后仍需逐项阅读原文与风格样本。
