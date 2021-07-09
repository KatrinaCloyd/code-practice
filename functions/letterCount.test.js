const ltrCount = require('./letterCount');

describe('test letter count function', () => {

    it('takes in an array and removes any duplicates', () => {
        const answer = ltrCount('a', 'b', 'There is an elephant in the bedroom.');
        expect(answer).toEqual([2, 1]);
    });
    //upper and lower case should count
    it('takes in an array and removes any duplicates', () => {
        const answer = ltrCount('z', 'e', 'Zebra zebra ZEBRA zebra ZeBrA zEbRa');
        expect(answer).toEqual([6, 6]);
    });
});
