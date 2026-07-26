const sitemapUrl = new URL('/sitemap-index.xml', import.meta.env.SITE).href;

export function GET() {
	return new Response(
		[
			'User-agent: *',
			'Allow: /',
			'',
			`Sitemap: ${sitemapUrl}`,
			'',
		].join('\n'),
		{
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
			},
		}
	);
}
