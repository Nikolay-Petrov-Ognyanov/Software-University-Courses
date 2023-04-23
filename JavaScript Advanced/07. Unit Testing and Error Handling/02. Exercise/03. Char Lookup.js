function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require('chai').expect

describe('lookupChar', () => {
    it('p1 is not a string', () => {
        expect(lookupChar({}, 3)).equal(undefined)
    })
    it('p2 is not a number', () => {
        expect(lookupChar('asdf', [])).equal(undefined)
    })
    it('p2 is not an integer', () => {
        expect(lookupChar('asdf', 2.2)).equal(undefined)
    })
    it('p2 === string.length', () => {
        expect(lookupChar('asdf', 4)).equal('Incorrect index')
    })
    it('p2 is a negative number', () => {
        expect(lookupChar('asdf', -4)).equal('Incorrect index')
    })
    it('works', () => {
        expect(lookupChar('asdf', 3)).equal('f')
    })
})