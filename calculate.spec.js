const mathOperations = require('./calculator')

describe (`Unit testing for calculator module`,() => {
    it(`should return 7`,() => {
        calcInput = sum(2,5);
        expect (calcInput).toBe(7);
    })

});