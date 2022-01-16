import { twiceAsOld } from '../../src/micro-ex/twiceAsOld';

describe('Sample tests', () => {
    test("Testing for dad's age: 36 and son's age: 7", () => {
        expect(twiceAsOld(36, 7)).toEqual(22);
    });

    test("Testing for dad's age: 55 and son's age: 30", () => {
        expect(twiceAsOld(55, 30)).toEqual(5);
    });

    test("Testing for dad's age: 42 and son's age: 21", () => {
        expect(twiceAsOld(42, 21)).toEqual(0);
    });

    test("Testing for dad's age: 22 and son's age: 1", () => {
        expect(twiceAsOld(22, 1)).toEqual(20);
    });

    test("Testing for dad's age: 29 and son's age: 0", () => {
        expect(twiceAsOld(29, 0)).toEqual(29);
    });
});
