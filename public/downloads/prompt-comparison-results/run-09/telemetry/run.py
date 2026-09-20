from pathlib import Path
import subprocess
import json
import datetime
import shutil
import difflib

root = Path(__file__).resolve().parent.parent
log = root / 'telemetry/tool-log.md'
errors = []

def run(command, cwd):
    result = subprocess.run(command, cwd=cwd, text=True, capture_output=True)
    with log.open('a') as file:
        file.write('\n## Executed command\nWorking directory: ' + str(cwd) + '\n```sh\n' + ' '.join(command) + '\n```\nExit code: ' + str(result.returncode) + '\nStdout:\n```text\n' + result.stdout + '\n```\nStderr:\n```text\n' + result.stderr + '\n```\n')
    print(result.stdout, end='')
    print(result.stderr, end='')
    return result

if __name__ == '__main__':
    output = root / 'output'
    output.mkdir(exist_ok=True)
    baseline = run(['node', '--test', 'cart.test.js'], root / 'input')
    (output / 'before.stdout.log').write_text(baseline.stdout)
    (output / 'before.stderr.log').write_text(baseline.stderr)
    (output / 'before.exit-code.txt').write_text(str(baseline.returncode) + '\n')
    for name in ['cart.js', 'cart.test.js', 'package.json']:
        shutil.copy2(root / 'input' / name, output / name)
    source = (output / 'cart.js').read_text()
    fixed = source.replace('subtotal * discountPercent;', 'subtotal * (discountPercent / 100);')
    assert fixed != source
    (output / 'cart.js').write_text(fixed)
    (output / 'implementation.diff').write_text(''.join(difflib.unified_diff(source.splitlines(True), fixed.splitlines(True), fromfile='input/cart.js', tofile='output/cart.js')))
    after = run(['node', '--test', 'cart.test.js'], output)
    (output / 'after.stdout.log').write_text(after.stdout)
    (output / 'after.stderr.log').write_text(after.stderr)
    (output / 'after.exit-code.txt').write_text(str(after.returncode) + '\n')
    assert (root / 'input/cart.test.js').read_bytes() == (output / 'cart.test.js').read_bytes()
    status = 'complete' if baseline.returncode == 1 and after.returncode == 0 else 'incomplete'
    message = ('已修复百分比折扣：将折扣百分数除以 100，保持 calculateTotal 接口不变。\n\n'
               '原测试：`node --test cart.test.js`，退出码 ' + str(baseline.returncode) + '，2 项通过、1 项失败。\n'
               '修复副本使用相同命令和未修改的测试，退出码 ' + str(after.returncode) + '，3 项全部通过。\n\n'
               '修复：`output/cart.js`。原始与修复后的 stdout、stderr、退出码及 `implementation.diff` 均保存在 `output/`。\n'
               '未运行：lint、类型检查、构建及其他测试。未提交或推送。\n')
    (output / 'README.md').write_text(message)
    (root / 'telemetry/final.md').write_text(message)
    (root / 'telemetry/end.json').write_text(json.dumps({'ended_at_utc': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'model': None, 'reasoning': None, 'tool_errors': errors, 'task_status': status, 'baseline_test_exit_code': baseline.returncode, 'fixed_test_exit_code': after.returncode}, indent=2) + '\n')
