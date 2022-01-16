import { countSheeps } from "../../src/micro-ex/countingSheep";


describe('Counting Sheep', () => {
    test('should have 17 sheeps in total', () => {
        let list = [
            true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true
        ]

        expect(countSheeps(list)).toEqual('There are 17 sheep in total');
    });

    test('should have only wolfs', () => {
        let list = [
            false, false, false
        ]

        expect(countSheeps(list)).toEqual('UPS!!! Wolfs eaten Sheeps');
    });
});
