import {checkVariable, checkIfIsNumber, checkIfIsInteger, checkIfNumberIsInfinite, sum, subtract, multiply, divide, checkIfNumbIsDivisibleByThree} from '../../src/fundamentals-ex/numberExercises'
describe('Variables can be a number', () => {

    test('should be 1', () => {
        /* Completa el test */
        expect(checkVariable(3)).toBe(1);
    });

    test('should return "number"', () => {
        /* Añade las líneas necesarias al test y modifica la function checkVariable*/      
        expect(checkIfIsNumber(303.33)).toBe("number");
    });

    test('should return false if is not an integer', () => {
        /* Añade las líneas necesarias al test y Modifica la function checkIfIsInteger */
        expect(checkIfIsInteger('Hello')).toBe(false);
    });

    test('should return "Number is Infinite"', () => {
        /* Añade las líneas necesarias al test y modifica la function checkIfNumberIsInfinite */
        
        expect(checkIfNumberIsInfinite(5 * Infinity)).toBe("Number is Infinite");
    });

});

describe('Arithmetic operators', () => {
    test('should return 25', () => {
        /* Añade las líneas necesarias al test / Modifica la function sum */

        expect(sum(20)).toBe(25);
    });

    test('should return 30 after subtract', () => {
        /* Añade las líneas necesarias al test / Modifica la function subtract */
        expect(subtract(50)).toBe(30);
    });

    test('should return 15 after multiply', () => {
        /* Añade las líneas necesarias al test / Modifica la function multiplication */
        expect( multiply(3)).toBe(15);
    });

    test('should return 25 after divide', () => {
        /* Añade las líneas necesarias al test / Modifica la function divide */
        expect(divide(50)).toBe(25);
    });

    test('should return 0 after use modulus operator', () => {
        /* Añade las líneas necesarias al test / Modifica la function checkIfNumbIsDivisibleByThree */
        expect(checkIfNumbIsDivisibleByThree(3)).toBe('Number is divisible by 3');
    });
});