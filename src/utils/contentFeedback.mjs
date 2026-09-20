/** Build a user-reviewed draft. Never include query strings, task logs or user data. */
export function feedbackUrl({ pathname, title, verificationDate }) {
  const page = new URL(pathname, 'https://handbook.invalid').pathname;
  const body = [
    '## 页面',
    `${title}\n站内路径：${page}`,
    `页面核验日期：${verificationDate || '未登记'}`,
    '\n## 问题位置与现象\n请填写具体段落、预期与实际差异。',
    '\n## 复现环境或依据\n仅提供必要的公开来源、客户端版本及脱敏步骤；无法确认请写未知。',
    '\n## 建议修正\n可留空。',
    '\n## 提交前自查\n请删除密钥、私人项目路径、账号、客户数据和未经脱敏的日志。此页面是公开 Issue 草稿，尚未提交。',
  ].join('\n');
  const url = new URL('https://github.com/hopecyb/CodexHandbook/issues/new');
  url.searchParams.set('title', `[内容纠错] ${title}`);
  url.searchParams.set('body', body);
  return url.href;
}
