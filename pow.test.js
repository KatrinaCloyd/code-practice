const powerOf = require('./pow');

describe('power of function test', () => {
    it('takes a base and exponent and raises the base to the exponent power', () => {
        const answer = powerOf(4, 2);
        expect(answer).toEqual(16);
    });

});