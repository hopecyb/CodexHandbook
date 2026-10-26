import { z } from 'astro/zod';

const date = z.iso.date();
export const verification = z.object({
	kind: z.enum(['editorial', 'source-checked', 'run-tested']),
	checkedAt: date,
	summary: z.string().min(1),
	environment: z.string().min(1).optional(),
	evidence: z.array(z.object({ label: z.string().min(1), href: z.string().min(1) })).default([]),
}).superRefine((value, ctx) => {
	if (value.kind === 'run-tested' && (!value.environment || value.evidence.length === 0)) {
		ctx.addIssue({ code: 'custom', message: '实跑记录必须提供环境和可追溯的验证证据。' });
	}
	if (value.kind === 'source-checked' && value.evidence.length === 0) {
		ctx.addIssue({ code: 'custom', message: '来源核对必须提供具体来源链接。' });
	}
});

export const handbookSchema = z.object({
	reviewed_at: z.preprocess(value => value instanceof Date ? value.toISOString().slice(0, 10) : value, date).optional(),
	contentType: z.enum(['guide', 'reference', 'prompt', 'skill', 'case', 'path']).optional(),
	audiences: z.array(z.string()).optional(),
	task: z.string().optional(),
	caseCategory: z.enum(["office", "creation", "development", "team"]).optional(),
	directoryOrder: z.number().int().nonnegative().optional(),
	level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
	estimatedMinutes: z.number().positive().optional(),
	outputs: z.array(z.string()).optional(),
	editorialStatus: z.enum(['planned', 'draft', 'review', 'verified', 'outdated', 'archived']).optional(),
	verification: verification.optional(),
	legacyVerification: z.object({
		status: z.string(),
		products: z.string().optional(),
		basis: z.string().optional(),
		checkedAt: z.string().optional(),
	}).optional(),
	assets: z.array(z.object({
		path: z.string(), purpose: z.string(), license: z.string(), version: z.string(),
	})).optional(),
	canonicalTopic: z.string().optional(),
});
