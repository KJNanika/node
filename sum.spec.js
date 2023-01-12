const { sum } = require('./sum');

describe (`Unit testing for sum module`,() => {
    it(`should return 7`,() => {
        sumInput = sum(2,5);
        expect (sumInput).toBe(7);
    })

});