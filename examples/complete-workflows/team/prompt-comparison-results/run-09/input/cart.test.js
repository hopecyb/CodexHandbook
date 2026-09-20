import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateTotal } from './cart.js';

test('returns zero for an empty cart', () => {
	assert.equal(calculateTotal([]), 0);
});

test('adds line totals when there is no discount', () => {
	assert.equal(calculateTotal([{ price: 20, quantity: 2 }]), 40);
});

test('applies a percentage discount', () => {
	assert.equal(calculateTotal([{ price: 20, quantity: 2 }], 10), 36);
});

