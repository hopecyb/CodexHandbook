import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const source = "public/logo-origin.png";
const brandDir = "public/brand";
const assetsDir = "src/assets/brand";
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

await mkdir(brandDir, { recursive: true });
await mkdir(assetsDir, { recursive: true });

const trimmed = await sharp(source).trim({ threshold: 10 }).png().toBuffer();

async function writeIcon(input, size, outPath, padding = 0.08) {
	const padPx = Math.round(size * padding);
	const inner = size - padPx * 2;

	await sharp(input)
		.resize(inner, inner, { fit: "contain", background: transparent })
		.extend({
			top: padPx,
			bottom: padPx,
			left: padPx,
			right: padPx,
			background: transparent,
		})
		.png({ compressionLevel: 9 })
		.toFile(outPath);
}

// Header logo (2x for retina, displayed around 42px in nav).
await writeIcon(trimmed, 96, `${assetsDir}/logo.png`, 0.04);
await writeIcon(trimmed, 96, `${brandDir}/logo.png`, 0.04);

// Full lockup for social / OG reuse.
await sharp(trimmed)
	.resize({ height: 240, fit: "contain", background: transparent })
	.png({ compressionLevel: 9 })
	.toFile(`${brandDir}/logo-lockup.png`);

const faviconSizes = [16, 32, 48, 180, 512];

for (const dimension of faviconSizes) {
	const padding = dimension <= 32 ? 0.1 : 0.06;
	const target =
		dimension === 48
			? "public/favicon.png"
			: dimension === 180
				? "public/apple-touch-icon.png"
				: dimension === 512
					? "public/icon-512.png"
					: `public/favicon-${dimension}x${dimension}.png`;

	await writeIcon(trimmed, dimension, target, padding);
}

console.log("brand assets rebuilt from public/logo-origin.png");
