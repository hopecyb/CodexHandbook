const acceptedErrorStatuses = new Set([401, 403, 429]);

async function request(url, method, { fetchImpl, timeoutMs }) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeoutMs);
	try {
		return await fetchImpl(url, {
			method,
			redirect: 'follow',
			signal: controller.signal,
			headers: {
				'User-Agent': 'Codex-Handbook-Link-Checker/1.0 (+https://codex-handbook.pages.dev/)',
				...(method === 'GET' ? { Range: 'bytes=0-1023' } : {}),
			},
		});
	} finally {
		clearTimeout(timer);
	}
}

export async function checkUrl(
	url,
	{
		fetchImpl = fetch,
		timeoutMs = 12_000,
		retries = 2,
		sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)),
	} = {},
) {
	let lastError = null;
	for (let attempt = 0; attempt <= retries; attempt += 1) {
		try {
			let response = await request(url, 'HEAD', { fetchImpl, timeoutMs });
			// A 405 means HEAD is unsupported, not that the resource is healthy.
			// Confirm it with a ranged GET, as with other non-accepted responses.
			if (!response.ok && !acceptedErrorStatuses.has(response.status)) {
				response = await request(url, 'GET', { fetchImpl, timeoutMs });
			}
			if (response.ok || acceptedErrorStatuses.has(response.status)) return { url, status: response.status };
			lastError = `HTTP ${response.status}`;
		} catch (error) {
			lastError = error.name === 'AbortError' ? `timeout after ${timeoutMs}ms` : error.message;
		}
		if (attempt < retries) await sleep(400 * 2 ** attempt);
	}
	return { url, error: lastError ?? 'unknown error' };
}
