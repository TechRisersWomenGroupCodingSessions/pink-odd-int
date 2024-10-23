const oddInt = require('./oddInt');

describe(oddInt, () => {
	test('should return the number if it occurs once', () => {
		expect(oddInt([7])).toBe(7);
		expect(oddInt([0])).toBe(0);
		expect(oddInt([1,1,2])).toBe(2);
	});	
});
