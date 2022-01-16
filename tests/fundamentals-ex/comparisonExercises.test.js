import {isJane, compareNumbers, isGreaterThan10, isGreaterThan10AndEqualTo20} from '../../src/fundamentals-ex/comparisonExercises'
describe('Comparison Exercises', () => {
    test('using == should be equal to Jane', () => {
        /* Completa el test y modifica la function isJane */
        expect(isJane('Joel')).toEqual('Jane');
    });

    test('using === should return 10', () => {
        /* Completa el test y modifica la function compareNumbers */
        expect(compareNumbers(1)).toEqual(10);
    });

    test('quantity are greater than 10', () => {
        /* Completa el test y modifica la function isGreaterThan10 */
        expect(isGreaterThan10(24)).toBeGreaterThan(10);
        expect(isGreaterThan10(5)).toBeGreaterThan(10);
    });
});

describe('Logical comparison', () => {
    test('should be greater than 10 and equal to 20', () => {
        /* Completa el test y modifica la function isGreaterThan10AndEqualTo20 */
        expect(isGreaterThan10AndEqualTo20(5)).toBeGreaterThan(10);
        expect(isGreaterThan10AndEqualTo20(2)).toEqual(20);
    });
});