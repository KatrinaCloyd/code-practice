const sumDups = require('./sumDups');

describe('test sum duplicates function', () => {
    it('takes in an array and sums any duplicates', () => {
        const answer = sumDups([1, 1, 2, 2, 3, 4]);
        expect(answer).toEqual([2, 4, 3, 4]);
    });

    it('takes in an array and sums any duplicates', () => {
        const answer = sumDups([1, 4, 4, 4, 0, 4, 3, 3, 1]);
        expect(answer).toEqual([1, 12, 0, 4, 6, 1]);
    });

});
