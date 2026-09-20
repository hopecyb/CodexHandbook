"""Serialize the primary agent's reading review, not an automatic quality grader."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[5]/'examples/complete-workflows/team/prompt-comparison-results'
runs=json.loads((ROOT/'runs.json').read_text())['runs']
checks=json.loads((ROOT/'reviewer-checks.json').read_text())['runs']
assert all(r['artifact_check']=='pass' for r in checks)
axes=json.loads((ROOT/'rubric.json').read_text())['dimensions']
scores=[]
for r in runs:
    rid,case=r['run_id'],r['case']
    def item(value,note,paths):
        return {'score':value,'reason':note,'evidence':[f'{rid}/{p}' for p in paths]}
    if case=='sales':
        entries=[
            item(2,'逐行、地区和产品 CSV 与原始行重算一致；正文两周总额、增减、环比及异常金额一致。',['output/weekly-report.md','output/region-summary.csv','output/top-products.csv','output/row-ledger.csv']),
            item(2,'台账覆盖46条记录，纳入44条；重复、缺日期、退款均能定位到原始行。',['output/row-ledger.csv','output/weekly-report.md']),
            item(2,'输入哈希未变，报告没有虚构实际经营原因。',['input/sales.csv','output/weekly-report.md']),
            item(2,'缺日期199.99隔离，西南零基数N/A，零金额有效。',['output/weekly-report.md','output/region-summary.csv']),
            item(1 if rid=='run-07' else 2,'有核对表，但Python命令只保留摘要，不能完整重放当次计算。' if rid=='run-07' else '计算与实际校验在命令日志中可回查；报告给出口径和汇总核对。',['telemetry/tool-log.md','telemetry/end.json','output/weekly-report.md'])]
    elif case=='article':
        main=next(p for p in r['output_paths'] if 'introduction' in p or '介绍' in p)
        tables=[p for p in r['output_paths'] if 'fact-table' in p]
        entries=[
            item(2,'正文保持md/txt范围、路径摘要与版本修复事实，没有新增PDF能力或效果数据。',[main]),
            item(2,'关键段落有P/I/C小节定位，三个本地来源可打开；逐项阅读核对支持正文。',[main,'input/01-product.md','input/02-interview.md','input/03-changelog.md']),
            item(2,'保留虚构产品、合成访谈身份；输入哈希未变，已记录的操作局限本次材料。',[main,'telemetry/tool-log.md']),
            item(2,'P3/C2冲突并列，未按日期择一；上传字段、效果及其他缺失信息保留未知。',[main]),
            item(2 if tables else 1,'有逐项事实表及采用/保留依据，可回到原文复核。' if tables else '正文来源定位可回查，但未提供既定评分依据要求的逐项事实表；这是交付形式缺项，不代表正文事实错误。',tables+[main])]
    else:
        is_b=r['variant']=='B'
        entries=[
            item(2,'公式将百分数除100，40元10%折扣为36；交付测试3项通过，复核使用原测试重跑也通过。',['output/cart.js','output/cart.test.js','telemetry/tool-log.md']),
            item(2,'最终说明或README说明百分比换算根因，对应一行公式改动可回查。',['output/cart.js','telemetry/final.md']),
            item(2,'保持接口；实现仅改折扣公式，输入与测试文件哈希未变。',['input/cart.js','output/cart.js','input/cart.test.js','output/cart.test.js']),
            item(2,'测试通过声明有实际日志；未将审阅代码冒充测试。',['telemetry/tool-log.md','telemetry/final.md']),
            item(1,'有原测试失败、修复后成功、退出码及差异，但未记录当次Node版本。' if is_b else '只有修复后通过日志，没有原测试失败记录，也未记录当次Node版本。',['telemetry/tool-log.md','telemetry/end.json'])]
    scores.append({'run_id':rid,'case':case,'variant':r['variant'],'repetition':r['repetition'],'scores':dict(zip(axes,entries))})
(ROOT/'scores.json').write_text(json.dumps({'reviewer':'primary agent, non-blind, no human reviewer','method':'Five frozen axes; editorial reading plus separate artifact checks. Scores concern this checklist, not general model capability.','runs':scores},ensure_ascii=False,indent=2)+'\n')
lines=['# 12 次运行的逐项复核','', '五项顺序：正确性、可追溯、范围控制、不确定性、可复现。0不满足、1部分满足、2满足且可回查。主 Agent 非盲审；没有人工独立复核。完整逐项说明及证据路径见 [scores.json](scores.json)。','', '| 运行 | 任务 / 变体 / 重复 | 正确性 | 可追溯 | 范围 | 未知处理 | 可复现 | 记录耗时（秒） | 工具错误条数 |','|---|---|---:|---:|---:|---:|---:|---:|---:|']
for r,s in zip(runs,scores):
    values=' | '.join(str(s['scores'][a]['score']) for a in axes)
    lines.append(f"| [{r['run_id']}]({r['run_id']}/telemetry/final.md) | {r['case']} / {r['variant']} / {r['repetition']} | {values} | {r['elapsed_seconds']:.2f} | {len(r['tool_failures'])} |")
lines.extend(['','## 这批材料显示了什么','','- 四份周报数字和逐行处理均正确，A也主动给出了异常说明与核对。B增加了单独核对材料；run-07却丢失完整计算命令，说明追加要求仍可能执行不全。','- 四篇文章均保留了虚构身份、来源冲突与未知。B两次交付事实表和未决清单，A两次只交付正文；A正文没有因此判为事实错误。','- 四次Bug修复均只改公式、保留原测试并通过。B两次均先复现失败再验证修复，A两次只保存修复后测试。四次都没有记录当次Node版本，因此可复现项均为1；同分不掩盖红绿证据的差别。','','## 失败与方法限制','','- 销售A/B的共同基线提示写成 `data-dictionary.md`，实际文件位于 `input/data-dictionary.md`。这是实验材料的路径缺陷，四次均遇到读文件错误后恢复；未在中途修提示。下一批应同时修正A/B并使用新版本，不能把这类错误归因到新增验收要求。','- 工具错误包含路径读取、命令/代码拼写和补丁错误；正确复现的失败测试、diff退出1不算工具故障。完整错误见 runs.json 与各 telemetry/end.json。run-04核对记录也披露了初稿摘要数字修正；最终产物评分没有抹去修正历史。','- run-07明确报告Python heredoc源代码未完整留存；公开包保留原缺口。其余日志也来自Agent自行整理，不能当作独立平台审计。','- 所有输入和task.md哈希与运行前冻结值一致。复核脚本重新计算销售CSV、检查文章来源路径，并在临时目录用原测试复跑Bug；这些是后续复核，不填补实验自身缺失的红灯测试或Node版本。','- 每组每变体只有两次；模型标签及推理设置未知、三任务并发、评分非盲。耗时包括记录日志，不能解释为模型速度或人类省时。没有普遍成功率、费用或B必然胜出的结论。','- 量表中的事实表、红绿测试要求与B提醒有重合，分数适合讨论交付证据完整性，不是无偏模型能力排名。','','## 检查边界','','[reviewer-checks.json](reviewer-checks.json) 保存后续真实检查。脚本无法自动验证文章的每个推断，也不能证明Agent未做未记录的操作；这些范围已经与读取评分分开。实验不等于真实读者跟做或客户端兼容性测试。',''])
(ROOT/'review.md').write_text('\n'.join(lines))
print('Wrote scores.json and review.md')
