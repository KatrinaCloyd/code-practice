const rmvDups = require('./rmvDups');

describe('test remove duplicates function', () => {
    it('takes in an array and removes any duplicates', () => {
        const answer = rmvDups([1, 1, 2, 2, 3, 4]);
        expect(answer).toEqual([1, 2, 3, 4]);
    });

    it('takes in an array and removes any duplicates', () => {
        const answer = rmvDups([1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4]);
        expect(answer).toEqual([1, 2, 3, 4]);
    });

    it('takes in an array and removes any duplicates', () => {
        const answer = rmvDups([1, 3, 2, 2, 4, 2, 3, 3, 3, 3, 3, 4, 4]);
        expect(answer).toEqual([1, 2, 3, 4]);
    });
});
