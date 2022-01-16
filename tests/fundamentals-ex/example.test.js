import {app} from '../../src/fundamentals-ex/index'

describe('Just an example', () => {
    test('should be 4', () => {
        expect(app(2, 2)).toBe(4);
    });
});