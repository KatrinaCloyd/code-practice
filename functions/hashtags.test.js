const hashtags = require('./hashtags');

describe('hashtag function test', () => {
    it('takes in a string and returns a formatted hashtag', () => {
        const answer = hashtags('Hello there thanks for visiting');
        expect(answer).toEqual('#HelloThereThanksForVisiting');
    });

    it('takes in a string and returns a formatted hashtag', () => {
        const answer = hashtags('');
        expect(answer).toEqual(false);
    });
    it('takes in a string and returns a formatted hashtag', () => {
        const answer = hashtags('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat');
        expect(answer).toEqual(false);
    });

});
