import {countdown, createNumberList, makePizza, addSpanishInternationalPrefixes} from '../../src/fundamentals-ex/loopsExercises'
describe('Loops', () => {
    test('while loop, should return GO when count arrive to 0', () => {
        /* Utilizando el bucle while y modifica la function de cuenta atrás. Caution: ten cuidado de no generar un bucle infinito */
        expect(countdown(15)).toEqual('GO');
    });

    test('do ... while', () => {
        /* Con el bucle do..while crea un array de 10 números. Modifica la function createNumberList */
        // expect(createNumberList(4)).toEqual(1); // comprueba que el primer número sea el uno
        // expect(createNumberList(4)).toContain(10); // comprueba que el array contiene el número 10
        expect(createNumberList(4)).toHaveLength(10); // comprueba que la longitud del array es de 10
    });

    test('for loop', () => {
        /* Con el bucle for crea una pizza de 4 quesos, creando un objeto. Ingredientes: masa, tomate, mozzarella, cheddar, gorgonzola, parmesano. Modifica la function makePizza */
        let pizza = {
            ingredient1: 'masa',
            ingredient2: 'tomate',
            ingredient3: 'mozzarella',
            ingredient4: 'cheddar',
            ingredient5: 'gorgonzola',
            ingredient6: 'parmesano'
        }

        expect(makePizza()).toStrictEqual(pizza);
    });

    test('foreach loop', () => {
        /* Completa el test y modifica la function addSpanishInternationalPrefixes */
        let phoneNumberList = ['+34-054060719','+34-029830776','+34-159949736','+34-663170151','+34-513407584'];

        expect(addSpanishInternationalPrefixes()).toContain('+34-159949736');
        expect(addSpanishInternationalPrefixes()).toEqual(expect.arrayContaining(phoneNumberList));;
        
    });
});