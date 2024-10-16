const oddInt = require('./oddInt');

describe(oddInt, () => {
	test('should return the number if it occurs once', () => {
		expect(oddInt([7])).toBe(7);
	});
});
