function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}
sum([2, 3, 4])

let { expect } = require('chai')

describe('Sum checker', () => {
    it('works with positive numbers', () => {
        expect(sum([2, 3, 4])).to.equal(9)
    })
    it('works with negative numbers', () => {
        expect(sum([-2,-3, 4])).to.equal(-1)
    })
    it('works with one number', () => {
        expect(sum([2])).to.equal(2)
    })
})