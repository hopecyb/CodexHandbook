const pricingData = window.__CHATGPT_PRICING__ || {};
const {
	currencies = [],
	plans = [],
	regions = [],
	translations = {},
	languages = [],
	initialLanguage = 'zh-CN',
	languageRoutes = {},
} = pricingData;

window.addEventListener('DOMContentLoaded', () => {
	const state = {
		plan: 'plus-monthly',
		currency: 'CNY',
		language: initialLanguage in translations ? initialLanguage : 'zh-CN',
	};

	const currencySelect = document.querySelector('#currency-select');
	const languageSelect = document.querySelector('#language-select');
	const dropdowns = Array.from(document.querySelectorAll('.custom-select'));
	const planButtons = Array.from(document.querySelectorAll('.plan-tab'));
	const gridContainer = document.querySelector('#price-grid');
	const chartCanvas = document.querySelector('#chart');
	const currencyByCode = Object.fromEntries(currencies.map((currency) => [currency.code, currency]));
	const languageByCode = Object.fromEntries(languages.map((language) => [language.code, language]));
	const planById = Object.fromEntries(plans.map((plan) => [plan.id, plan]));
	const regionCodes = {
		Philippines: 'PH',
		Pakistan: 'PK',
		Canada: 'CA',
		Japan: 'JP',
		Vietnam: 'VN',
		Indonesia: 'ID',
		Egypt: 'EG',
		Brazil: 'BR',
		Argentina: 'AR',
		'United States': 'US',
		'South Korea': 'KR',
		Thailand: 'TH',
		India: 'IN',
		Australia: 'AU',
		Kazakhstan: 'KZ',
		Turkey: 'TR',
		Taiwan: 'TW',
		Chile: 'CL',
		'United Arab Emirates': 'AE',
		Israel: 'IL',
		Mexico: 'MX',
		Nigeria: 'NG',
		Singapore: 'SG',
		'Saudi Arabia': 'SA',
		'South Africa': 'ZA',
		Malaysia: 'MY',
		Switzerland: 'CH',
		Norway: 'NO',
		Germany: 'DE',
		'United Kingdom': 'GB',
		Denmark: 'DK',
		Colombia: 'CO',
	};
	const chartFlagImages = new Map();
	let priceGrid;
	let distributionChart;

	function t(key) {
		return translations[state.language]?.[key] || translations['zh-CN'][key] || key;
	}

	function formatPrice(cnyValue) {
		const currency = currencyByCode[state.currency];
		const value = cnyValue * currency.rate;
		const fractionDigits = currency.decimals ?? 2;
		return `${currency.symbol}${value.toLocaleString(undefined, {
			minimumFractionDigits: fractionDigits,
			maximumFractionDigits: fractionDigits,
		})}`;
	}

	function closeDropdowns(except) {
		dropdowns.forEach((dropdown) => {
			if (dropdown === except) return;
			dropdown.classList.remove('is-open');
			dropdown.querySelector('.custom-select__trigger')?.setAttribute('aria-expanded', 'false');
		});
	}

	function updateDropdown(dropdown, selectedItem) {
		if (!dropdown || !selectedItem) return;

		const trigger = dropdown.querySelector('.custom-select__trigger');
		const icon = dropdown.querySelector('[data-selected-icon]');
		const label = dropdown.querySelector('[data-selected-label]');
		const meta = dropdown.querySelector('[data-selected-meta]');

		if (icon) icon.textContent = selectedItem.flag || selectedItem.short || '';
		if (label) label.textContent = selectedItem.label || selectedItem.code;
		if (meta) meta.textContent = selectedItem.name || selectedItem.code;

		dropdown.querySelectorAll('.custom-select__option').forEach((option) => {
			option.setAttribute('aria-selected', String(option.dataset.value === selectedItem.code));
		});
		trigger?.setAttribute('aria-expanded', 'false');
		dropdown.classList.remove('is-open');
	}

	function syncDropdowns() {
		updateDropdown(document.querySelector('[data-dropdown="currency"]'), currencyByCode[state.currency]);
		updateDropdown(document.querySelector('[data-dropdown="language"]'), languageByCode[state.language]);
	}

	function planRows() {
		const plan = planById[state.plan];
		return regions
			.map((region) => ({
				...region,
				price: Number((region.cny * plan.factor).toFixed(2)),
			}))
			.sort((a, b) => a.price - b.price);
	}

	function statusFor(index, total) {
		if (index === 0) return t('min');
		if (index === total - 1) return t('max');
		if (index < Math.ceil(total * 0.25)) return t('low');
		if (index > Math.floor(total * 0.75)) return t('high');
		return t('normal');
	}

	function statusClassFor(status) {
		if (status === t('min')) return 'min';
		if (status === t('low')) return 'low';
		if (status === t('high')) return 'high';
		if (status === t('max')) return 'max';
		return 'normal';
	}

	const statusColors = {
		min: '#0a6b58',
		low: '#3db89a',
		normal: '#3d68ff',
		high: '#d29a2e',
		max: '#c24f3e',
	};

	function colorForIndex(index, total) {
		return statusColors[statusClassFor(statusFor(index, total))];
	}

	function regionName(region) {
		const useLocalNames = state.language === 'zh-CN' || state.language === 'zh-TW' || state.language === 'ja';
		return useLocalNames ? region.country : region.countryEn;
	}

	function regionCode(region) {
		return regionCodes[region.countryEn] || region.countryEn.slice(0, 2).toUpperCase();
	}

	function flagUrl(region) {
		return `https://flagcdn.com/24x18/${regionCode(region).toLowerCase()}.png`;
	}

	function chartFlagFor(region) {
		const code = regionCode(region);
		if (chartFlagImages.has(code)) return chartFlagImages.get(code);

		const image = new Image();
		image.crossOrigin = 'anonymous';
		image.onload = () => distributionChart?.draw();
		image.src = flagUrl(region);
		chartFlagImages.set(code, image);
		return image;
	}

	const flagAxisPlugin = {
		id: 'flagAxis',
		afterDraw(chart, _args, options) {
			const rows = options.rows || [];
			const yScale = chart.scales.y;
			if (!yScale) return;

			const { ctx } = chart;
			ctx.save();
			rows.forEach((row, index) => {
				const image = chartFlagFor(row);
				const y = yScale.getPixelForTick(index) - 6.5;
				const x = Math.max(0, yScale.left - 44);
				if (image.complete && image.naturalWidth > 0) {
					ctx.drawImage(image, x, y, 18, 13);
					return;
				}

				ctx.font = '11px system-ui, sans-serif';
				ctx.textAlign = 'left';
				ctx.textBaseline = 'middle';
				ctx.fillText(row.flag, x, y + 6);
			});
			ctx.restore();
		},
	};

	function renderText() {
		document.documentElement.lang = state.language;
		document.querySelectorAll('[data-i18n]').forEach((node) => {
			node.textContent = t(node.dataset.i18n);
		});
	}

	function renderStats(data) {
		const lowest = data[0];
		const highest = data[data.length - 1];
		const median = data[Math.floor(data.length / 2)];
		const saving = Math.round((1 - lowest.price / highest.price) * 100);

		document.querySelector('#lowest-price').textContent = formatPrice(lowest.price);
		document.querySelector('#highest-price').textContent = formatPrice(highest.price);
		document.querySelector('#median-price').textContent = formatPrice(median.price);
		document.querySelector('#saving-value').textContent = `${saving}%`;
		document.querySelector('#lowest-region').textContent = `${lowest.flag} ${regionName(lowest)}`;
		document.querySelector('#highest-region').textContent = `${highest.flag} ${regionName(highest)}`;
		document.querySelector('#active-plan-label').textContent = planById[state.plan].label;
	}

	function tableColumns() {
		return [
			{ id: 'rank', name: t('rank'), width: '86px' },
			{ id: 'region', name: t('region') },
			{ id: 'original', name: t('original') },
			{ id: 'converted', name: state.currency },
			{ id: 'status', name: t('status'), width: '104px' },
		];
	}

	function tableData(data) {
		return data.map((row, index) => {
			const status = statusFor(index, data.length);
			const statusClass = statusClassFor(status);
			return [
				gridjs.html(`<span class="rank-badge">${index + 1}</span>`),
				gridjs.html(`
					<span class="region-cell">
						<span class="flag" data-fallback="${row.flag}">
							<img class="flag-img" src="${flagUrl(row)}" alt="" loading="lazy" onerror="this.parentElement.classList.add('flag--fallback'); this.remove();" />
						</span>
						<span>${regionName(row)}</span>
					</span>
				`),
				gridjs.html(`<span class="native-price">${row.native}</span>`),
				gridjs.html(`<strong class="converted-price">${formatPrice(row.price)}</strong>`),
				gridjs.html(`<span class="status ${statusClass}"><span class="status-dot"></span>${status}</span>`),
			];
		});
	}

	function renderTable(data) {
		if (!window.gridjs) return;

		const config = {
			columns: tableColumns(),
			data: tableData(data),
			search: false,
			sort: false,
			pagination: false,
			className: {
				container: 'pricing-grid-container',
				table: 'pricing-grid-table',
				th: 'pricing-grid-th',
				td: 'pricing-grid-td',
			},
		};

		if (!priceGrid) {
			priceGrid = new gridjs.Grid(config).render(gridContainer);
			return;
		}

		priceGrid.updateConfig(config).forceRender();
	}

	function renderChart(data) {
		if (!window.Chart) return;

		const labels = data.map((row) => regionCode(row));
		const values = data.map((row) => row.price * currencyByCode[state.currency].rate);
		const colors = data.map((_, index) => colorForIndex(index, data.length));

		if (distributionChart) distributionChart.destroy();

		distributionChart = new Chart(chartCanvas, {
			type: 'bar',
			data: {
				labels,
				datasets: [
					{
						label: t('chartTitle'),
						data: values,
						backgroundColor: colors,
						borderColor: colors,
						borderRadius: 4,
						borderSkipped: false,
						barPercentage: 0.68,
						categoryPercentage: 0.8,
					},
				],
			},
			options: {
				indexAxis: 'y',
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					x: {
						beginAtZero: true,
						grid: { display: false },
						border: { display: false },
						ticks: { display: false },
					},
					y: {
						grid: { display: false },
						border: { display: false },
						ticks: { color: '#607096', font: { size: 12, weight: 700 }, padding: 24 },
					},
				},
				plugins: {
					legend: { display: false },
					tooltip: {
						callbacks: {
							title(items) {
								const row = data[items[0].dataIndex];
								return `${row.flag} ${regionName(row)}`;
							},
							label(item) {
								const row = data[item.dataIndex];
								return `${row.native} / ${formatPrice(row.price)}`;
							},
						},
					},
					flagAxis: { rows: data },
				},
			},
			plugins: [flagAxisPlugin],
		});
	}

	function render() {
		renderText();
		const data = planRows();
		renderStats(data);
		renderTable(data);
		renderChart(data);
		syncDropdowns();
		planButtons.forEach((button) => {
			button.setAttribute('aria-pressed', String(button.dataset.plan === state.plan));
		});
	}

	currencySelect.addEventListener('change', (event) => {
		state.currency = event.target.value;
		render();
	});

	function switchLanguage(nextLanguage) {
		const route = languageRoutes[nextLanguage];
		if (route && route !== window.location.pathname) {
			window.location.assign(route);
			return;
		}
		state.language = nextLanguage;
		languageSelect.value = nextLanguage;
		render();
	}

	languageSelect.addEventListener('change', (event) => {
		switchLanguage(event.target.value);
	});

	planButtons.forEach((button) => {
		button.addEventListener('click', () => {
			state.plan = button.dataset.plan;
			render();
		});
	});

	dropdowns.forEach((dropdown) => {
		const trigger = dropdown.querySelector('.custom-select__trigger');
		const type = dropdown.dataset.dropdown;

		trigger?.addEventListener('click', () => {
			const willOpen = !dropdown.classList.contains('is-open');
			closeDropdowns(dropdown);
			dropdown.classList.toggle('is-open', willOpen);
			trigger.setAttribute('aria-expanded', String(willOpen));
		});

		dropdown.querySelectorAll('.custom-select__option').forEach((option) => {
			option.addEventListener('click', () => {
				if (type === 'currency') {
					state.currency = option.dataset.value;
					currencySelect.value = state.currency;
					render();
					return;
				}
				if (type === 'language') {
					switchLanguage(option.dataset.value);
					return;
				}
				render();
			});
		});
	});

	document.addEventListener('click', (event) => {
		if (!event.target.closest('.custom-select')) closeDropdowns();
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') closeDropdowns();
	});

	render();
});
