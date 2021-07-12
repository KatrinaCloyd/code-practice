const splitStrings = require('./splitStrings');

describe('test split strings function', () => {
    it('takes in a string and returns an array of two character strings', () => {
        const answer = splitStrings('abcdef');
        expect(answer).toEqual(['ab', 'cd', 'ef']);
    });
    it('takes in a string and returns an array of two character strings', () => {
        const answer = splitStrings('abcdefg');
        expect(answer).toEqual(['ab', 'cd', 'ef', 'g_']);
    });
    it('takes in a string and returns an array of two character strings', () => {
        const answer = splitStrings('');
        expect(answer).toEqual([]);
    });

});
