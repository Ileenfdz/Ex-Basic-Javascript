import { arrSum } from '../../src/micro-ex/arrayPlusArray';

describe('Fundamentals level 1 - Array Plus Array', () => {
    test('should return 21', () => {
        expect(arrSum([1, 2, 3], [4, 5, 6])).toEqual(21);
    });

    test('should return -21', () => {
        expect(arrSum([-1, -2, -3], [-4, -5, -6])).toEqual(-21);
    });

    test('should return 15', () => {
        expect(arrSum([0, 0, 0], [4, 5, 6])).toEqual(15);
    });

    test('should return 2100', () => {
        expect(arrSum([100, 200, 300], [400, 500, 600])).toEqual(2100);
    });
});
