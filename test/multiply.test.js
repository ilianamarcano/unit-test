const {expect, describe,it, toEqual,spyOn } = require('@jest/globals') ;
const usersController = require('controllers/users');

describe('test case multiplying two numbers',()=>{
    it('should get 0 when multiply any number',()=>{
        const a = 0
        const b = 1;
        const expected = 0;

        let result = usersController.multiply(a, b);
        expect(result).toEqual(expected);

        result = usersController.multiply(b, a);
        expect(result).toEqual(expected);
    });

    it('given 2 and 5, it should loop 5 times', () => {
        usersController.loop = jest.fn()
        const forSpy = jest.spyOn(usersController,'loop');

        const a = 2;
        const b = 5;

        usersController.multiply(a, b);

        expect(forSpy).toHaveBeenCalledTimes(1);
    });
});
