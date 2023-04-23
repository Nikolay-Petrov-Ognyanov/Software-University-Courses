function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
isOddOrEven('asdf')

let expect = require('chai').expect

describe('isOddOrEven', () => {
    it('should return even', () => {
        expect(isOddOrEven('asdf')).equal('even')
    })
    it('should return odd', () => {
        expect(isOddOrEven('asd')).equal('odd')
    })
    it('should now works with an object', () => {
        expect(isOddOrEven({})).equal(undefined)
    })
    it('should now works with an array', () => {
        expect(isOddOrEven([])).equal(undefined)
    })
    it('should now works with a number', () => {
        expect(isOddOrEven(5)).equal(undefined)
    })
})