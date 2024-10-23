function oddInt(nums) {
	let countmap = {};
	nums.forEach((num) => {
		if (countmap[num]) {
			countmap[num]++;
		} else countmap[num] = 1;
	});

	console.log(countmap);
	for (const key in countmap) {
		if (countmap[key] % 2 !== 0) {
			return +key;
		}
	}
}

module.exports = oddInt;
