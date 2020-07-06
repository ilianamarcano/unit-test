const {expect, describe,it } = require('@jest/globals') ;

describe('test case multiplying two numbers',()=>{
    it('should get 0 when multiply any number',()=>{
        const a = 0
        const b = 1;
        const expected = 0;

        let result = multiply(a, b);
        expect(result).toEqual(expected);

        result = multiply(b, a);
        expect(result).toEqual(expected);
    });
});