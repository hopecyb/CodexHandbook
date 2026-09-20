# 证据状态与输出格式

本包问题：拾页 1.2 支持哪些输入？诊断默认设置及上传字段能否确认？维护者补充说明是否已取得？拾页及访谈均为原创合成材料，不能用于真实采购决定。

`sources/catalog.json` 是预期来源清单。P/I/C 有固定哈希，M 的补充说明故意未提供。检查器实际读取本地文件并产生 available、missing、changed、unreadable 或 unverified 状态；有文件但没有预期哈希不能算已核验。路径越出 sources/ 则拒绝。M 缺失是教学设计，不是互联网 404 实验。

报告使用 [R1] 等编号。`evidence.csv` 字段：claim_id,status,statement,source_ids,locators,note。多值用分号分隔。

| status | 含义 | 写法 |
|---|---|---|
| supported | 资料明确支持 | 有已读取来源及定位，仍需人工判断语义 |
| conflict | 来源互相冲突 | 至少两个可读取来源，各有定位，说明适用条件缺口 |
| unknown | 已读资料没有答案 | 定位到相关已读内容，说明缺什么；不是来源打不开 |
| unavailable | 来源未能取得或完整性不符 | 保留来源编号，定位留空，说明无法据此确认什么 |

输出目录包含 report.md 与 evidence.csv。CLI 可检查该格式：`python3 scripts/check_evidence.py --output my-output`。`--inspect-only` 仅打印当前来源状态。缺失来源允许报告局限后继续；哈希变化应重新核对版本与内容，不为让检查变绿而盲目替换预期哈希。

结构检查要求所有不可用来源出现在证据表中，避免悄悄略去失败。它不能证明两段话真的冲突、supported 真的受支持，或 unknown 真的是全量资料中未提供。人工需逐条阅读。
