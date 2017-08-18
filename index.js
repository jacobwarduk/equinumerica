'use strict';

function equinumerica(arr) {
	if (!Array.isArray(arr)) {
		return NaN;
	}

	const points = [];
	let sum = 0;

	arr.forEach((currentValue, index, array) => {
		if (sum - array.slice([index + 1]).reduce((p, c) => {
			return p + c;
		}, 0) === 0) {
			points.push(index);
		}

		sum += currentValue;
	});

	return points.length ? points : NaN;
}

module.exports = equinumerica;
