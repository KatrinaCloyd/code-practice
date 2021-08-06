const cake = require('./cake');
//a is recipe
//b is what we have

describe('tests cake function', () => {
    it('takes in two objects 1-recipe and 2-onHand and returns count of cakes that can be made', () => {
        const answer = cake(
            { flour: 1, sugar: 2, eggs: 3, butter: 1 },
            { flour: 1, sugar: 2, eggs: 3, butter: 1 });
        expect(answer).toEqual(1);
    });

    it('takes in two objects 1-recipe and 2-onHand and returns count of cakes that can be made', () => {
        const answer = cake(
            { flour: 5, sugar: 2, eggs: 3, butter: 1 },
            { flour: 10, sugar: 5, eggs: 7, butter: 4 });
        expect(answer).toEqual(2);
    });

    it('takes in two objects 1-recipe and 2-onHand and returns count of cakes that can be made', () => {
        const answer = cake(
            { flour: 2, sugar: 2, eggs: 3, butter: 1 },
            { sand: 10, sugar: 5, eggs: 7, butter: 4 });
        expect(answer).toEqual(0);
    });

    it('takes in two objects 1-recipe and 2-onHand and returns count of cakes that can be made', () => {
        const answer = cake(
            { flour: 2, sugar: 2, eggs: 3, butter: 1 },
            { sugar: 4, eggs: 7, butter: 4, flour: 100 });
        expect(answer).toEqual(2);
    });
});
