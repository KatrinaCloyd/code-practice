const reverse = require('./reverse');

describe('reverse function test', () => {
    it('takes in a number and returns the reversed number', () => {
        const answer = reverse(120);
        expect(answer).toEqual(21);
    });
    it('takes in a number and returns the reversed number', () => {
        const answer = reverse(123);
        expect(answer).toEqual(321);
    });
    it('takes in a number and returns the reversed number', () => {
        const answer = reverse(0);
        expect(answer).toEqual(0);
    });
    it('takes in a number and returns the reversed number', () => {
        const answer = reverse(-321);
        expect(answer).toEqual(-123);
    });
    it('takes in a number and returns the reversed number', () => {
        const answer = reverse(-87362);
        expect(answer).toEqual(-26378);
    });

});
