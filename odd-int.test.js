const oddInt = require('./oddInt');

describe(oddInt, () => {
	test('should return the number if it occurs once', () => {
		expect(oddInt([1, 2, 1])).toBe(2);
		expect(oddInt([7])).toBe(7);
		expect(oddInt([0])).toBe(0);
		expect(oddInt([1, 1, 2])).toBe(2);
	});

	// test('should return 3 if it occurs 3 times'), () => {};
});
