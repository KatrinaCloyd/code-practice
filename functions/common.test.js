const common = require('./common');

describe('common variable test', () => {
    it('takes an array and returns value that occours more than half the time', () => {
        const answer = common([3, 2, 3]);
        expect(answer).toEqual(3);
    });

    it('takes an array and returns value that occours more than half the time', () => {
        const answer = common([2, 2, 1, 1, 1, 2, 2]);
        expect(answer).toEqual(2);
    });

});
