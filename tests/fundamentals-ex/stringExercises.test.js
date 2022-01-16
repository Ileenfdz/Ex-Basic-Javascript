import { returnAString, concatenateStrings, giveOneLetter, giveTheIndexOfWord, replaceFishWords, giveAllLettersInUppercase, removeWhiteSpaces } from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
    test('should say Hello', () => {
        /* agrega la línea que falta */
        expect(returnAString('Hello')).toBe('Hello');
    });

    test('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises */
        expect(returnAString('Hello World')).toBe('Hello World');
    });

    test('should be return I Love JS', () => {
        /* Añade las líneas necesarias al test / Modifica la function concatenateStrings */
        expect(concatenateStrings('JS')).toBe('I Love JS');
    });

    test('should return letter g', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
        expect(giveOneLetter('dog')).toBe('g');
    });

    test('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */
        expect(giveTheIndexOfWord()).toEqual(-1);
    });

    test('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */
        expect(replaceFishWords()).toBe('Give a Man a Pussy Cat');
    });

    test('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        expect(giveAllLettersInUppercase()).toBe('RIDE HIM, COWBOY');
    });

    test('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */
        expect(removeWhiteSpaces()).toBe('Hands Down');
    });
});