import {getPhrase} from "../../src/micro-ex/vocalsInPhrase.js";

describe('Vocals in phrase', () => {

    test('Should return a', () => {
        expect(getPhrase("la")).toEqual('a');
        expect(getPhrase("la li")).toEqual('ai');
        expect(getPhrase("li li")).toEqual('i');
        expect(getPhrase("aeiou")).toEqual('aeiou');
        expect(getPhrase("liluli")).toEqual('iu');
        expect(getPhrase("Hello World")).toEqual('eo');
        expect(getPhrase("Hola que tal")).toBe('oaue');
    });
});