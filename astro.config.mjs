// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Codex 指南手册',
			customCss: ['./src/styles/custom.css'],
			components: {
				PageFrame: './src/components/PageFrame.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				LanguageSelect: './src/components/LanguageSelect.astro',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
				en: { label: 'English', lang: 'en' },
				'zh-tw': { label: '繁體中文', lang: 'zh-TW' },
				fr: { label: 'Français', lang: 'fr' },
				ja: { label: '日本語', lang: 'ja' },
				ko: { label: '한국어', lang: 'ko' },
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/cyberhope/codex-handbook',
				},
			],
			sidebar: [
				{
					label: '从这里开始',
					items: [
						{ slug: '00-start-here' },
						{ slug: '00-start-here/what-is-codex' },
						{ slug: '00-start-here/who-is-this-handbook-for' },
						{ slug: '00-start-here/choose-your-path' },
						{ slug: '00-start-here/codex-capability-map' },
						{ slug: '00-start-here/prerequisites' },
						{ slug: '00-start-here/terminology-for-beginners' },
						{ slug: '00-start-here/handbook-version-policy' },
					],
				},
				{
					label: '基础概念',
					items: [
						{ slug: '01-foundations' },
						{ slug: '01-foundations/ai-and-language-models' },
						{ slug: '01-foundations/agent-basics' },
						{ slug: '01-foundations/goals-context-and-actions' },
						{ slug: '01-foundations/files-tools-and-commands' },
						{ slug: '01-foundations/local-vs-cloud' },
						{ slug: '01-foundations/threads-tasks-and-projects' },
						{ slug: '01-foundations/permissions-and-approvals' },
						{ slug: '01-foundations/sandbox-and-network' },
						{ slug: '01-foundations/models-and-reasoning' },
						{ slug: '01-foundations/tokens-context-and-compaction' },
						{ slug: '01-foundations/verification-and-human-review' },
						{ slug: '01-foundations/common-misconceptions' },
					],
				},
				{
					label: '快速上手',
					items: [
						{ slug: '02-getting-started' },
						{ slug: '02-getting-started/account-plans-and-access' },
						{ slug: '02-getting-started/choose-your-codex-client' },
						{ slug: '02-getting-started/install-desktop-app' },
						{ slug: '02-getting-started/install-cli' },
						{ slug: '02-getting-started/install-ide-extension' },
						{ slug: '02-getting-started/sign-in-and-authentication' },
						{ slug: '02-getting-started/create-your-first-project' },
						{ slug: '02-getting-started/run-your-first-task' },
						{ slug: '02-getting-started/review-the-result' },
						{ slug: '02-getting-started/undo-and-recover' },
						{ slug: '02-getting-started/first-30-minutes' },
						{ slug: '02-getting-started/beginner-safety-checklist' },
					],
				},
				{
					label: '学习路径',
					items: [
						{ slug: '03-learning-paths' },
						{
							label: '初学者',
							items: [
								{ slug: '03-learning-paths/beginner/01-talk-to-codex' },
								{ slug: '03-learning-paths/beginner/02-work-with-files' },
								{ slug: '03-learning-paths/beginner/03-give-clear-tasks' },
								{ slug: '03-learning-paths/beginner/04-review-results' },
								{ slug: '03-learning-paths/beginner/05-complete-first-project' },
							],
						},
						{ slug: '03-learning-paths/creator' },
						{ slug: '03-learning-paths/developer' },
						{ slug: '03-learning-paths/team' },
					],
				},
				{
					label: '产品手册',
					items: [
						{ slug: '04-product-guides' },
						{
							label: '桌面 App',
							items: [
								{ slug: '04-product-guides/desktop-app' },
								{ slug: '04-product-guides/desktop-app/installation-and-interface' },
								{ slug: '04-product-guides/desktop-app/projects-and-tasks' },
								{ slug: '04-product-guides/desktop-app/parallel-agents' },
								{ slug: '04-product-guides/desktop-app/worktrees' },
								{ slug: '04-product-guides/desktop-app/diffs-comments-and-review' },
								{ slug: '04-product-guides/desktop-app/integrated-terminal' },
								{ slug: '04-product-guides/desktop-app/local-and-cloud-tasks' },
								{ slug: '04-product-guides/desktop-app/notifications' },
								{ slug: '04-product-guides/desktop-app/settings' },
								{ slug: '04-product-guides/desktop-app/troubleshooting' },
							],
						},
						{
							label: 'CLI',
							items: [
								{ slug: '04-product-guides/cli' },
								{ slug: '04-product-guides/cli/installation-and-updates' },
								{ slug: '04-product-guides/cli/interactive-mode' },
								{ slug: '04-product-guides/cli/troubleshooting' },
							],
						},
						{
							label: 'IDE',
							items: [
								{ slug: '04-product-guides/ide' },
								{ slug: '04-product-guides/ide/installation' },
								{ slug: '04-product-guides/ide/local-task-workflow' },
								{ slug: '04-product-guides/ide/troubleshooting' },
							],
						},
						{ slug: '04-product-guides/web-and-cloud' },
						{ slug: '04-product-guides/mobile-and-remote' },
						{ slug: '04-product-guides/integrations' },
					],
				},
				{
					label: '核心能力',
					items: [
						{ slug: '05-core-capabilities' },
						{
							label: '提示词',
							items: [
								{ slug: '05-core-capabilities/prompting' },
								{ slug: '05-core-capabilities/prompting/prompt-basics' },
								{ slug: '05-core-capabilities/prompting/anatomy-of-a-good-task' },
								{ slug: '05-core-capabilities/prompting/provide-goals-and-context' },
								{ slug: '05-core-capabilities/prompting/define-constraints' },
								{ slug: '05-core-capabilities/prompting/define-done' },
								{ slug: '05-core-capabilities/prompting/ask-for-a-plan' },
								{ slug: '05-core-capabilities/prompting/iterative-prompting' },
								{ slug: '05-core-capabilities/prompting/prompting-with-images' },
								{ slug: '05-core-capabilities/prompting/prompting-for-long-tasks' },
								{ slug: '05-core-capabilities/prompting/prompting-anti-patterns' },
								{ slug: '05-core-capabilities/prompting/prompt-debugging' },
							],
						},
						{
							label: '上下文',
							items: [
								{ slug: '05-core-capabilities/context' },
								{ slug: '05-core-capabilities/context/project-context' },
								{ slug: '05-core-capabilities/context/file-and-folder-context' },
								{ slug: '05-core-capabilities/context/conversation-context' },
								{ slug: '05-core-capabilities/context/context-priority' },
								{ slug: '05-core-capabilities/context/compaction' },
								{ slug: '05-core-capabilities/context/keep-context-focused' },
								{ slug: '05-core-capabilities/context/sensitive-context' },
							],
						},
						{
							label: '质量与验证',
							items: [
								{ slug: '05-core-capabilities/quality' },
								{ slug: '05-core-capabilities/quality/review-diffs' },
								{ slug: '05-core-capabilities/quality/run-tests' },
								{ slug: '05-core-capabilities/quality/verify-artifacts' },
								{ slug: '05-core-capabilities/quality/validate-sources' },
								{ slug: '05-core-capabilities/quality/handle-uncertainty' },
								{ slug: '05-core-capabilities/quality/definition-of-done' },
							],
						},
						{
							label: '工具',
							items: [
								{ slug: '05-core-capabilities/tools' },
								{ slug: '05-core-capabilities/tools/tool-selection' },
								{ slug: '05-core-capabilities/tools/shell-and-terminal' },
								{ slug: '05-core-capabilities/tools/web-search' },
							],
						},
						{
							label: 'Agent 工作',
							items: [
								{ slug: '05-core-capabilities/agent-work' },
								{ slug: '05-core-capabilities/agent-work/planning' },
								{ slug: '05-core-capabilities/agent-work/progress-and-steering' },
								{ slug: '05-core-capabilities/agent-work/handoff-and-resume' },
							],
						},
					],
				},
				{
					label: '参考资料',
					items: [
						{ slug: '12-reference' },
						{ slug: '12-reference/glossary' },
						{ slug: '12-reference/faq' },
						{ slug: '12-reference/feature-comparison' },
						{ slug: '12-reference/troubleshooting' },
						{ slug: '12-reference/official-resources' },
					],
				},
			],
		}),
	],
});
