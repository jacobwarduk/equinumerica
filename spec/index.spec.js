'use strict';

const equinumerica = require('../index');

describe('equinumerica', () => {
	describe('when invoked', () => {
		describe('with no arguments', () => {
			it('should return NaN', () => {
				expect(equinumerica()).toEqual(NaN);
			});
		});

		describe('with non-array arguments', () => {
			it('should return NaN', () => {
				expect(equinumerica({})).toEqual(NaN);
				expect(equinumerica(Function.prototype)).toEqual(NaN);
				expect(equinumerica('string')).toEqual(NaN);
				expect(equinumerica(23)).toEqual(NaN);
				expect(equinumerica(null)).toEqual(NaN);
			});
		});

		describe('with an array that contains non-numeric items', () => {
			it('should return an empty array', () => {
				expect(equinumerica([23, {}, 'foo', Function.prototype, 42])).toBeNaN();
			});
		});

		describe('with an array that contains no equinumeric points', () => {
			it('should return NaN', () => {
				expect(equinumerica([1, 2, 3, 4, 5])).toBeNaN();
			});
		});

		describe('with an array that contains a single equinumeric point', () => {
			it('should return an array with a single element being the index of the equinumeric point', () => {
				const singleResultArray = [1, 2, 0, 3];

				expect(equinumerica(singleResultArray)).toBeArrayOfSize(1);
				expect(equinumerica(singleResultArray)).toContain(2);
			});
		});

		describe('with an array that contains multiple equinumeric points', () => {
			it('should return an array containing the indices of the equinumeric points', () => {
				const multipleResultArray = [-1, 3, -4, 5, 1, -6, 2, 1];

				expect(equinumerica(multipleResultArray)).toBeArrayOfSize(3);
				expect(equinumerica(multipleResultArray)).toContain(1);
				expect(equinumerica(multipleResultArray)).toContain(3);
				expect(equinumerica(multipleResultArray)).toContain(7);
			});
		});
	});
});
