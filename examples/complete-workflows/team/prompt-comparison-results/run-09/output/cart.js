export function calculateTotal(lines, discountPercent = 0) {
	const subtotal = lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
	const discount = subtotal * (discountPercent / 100);

	return subtotal - discount;
}

