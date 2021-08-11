const getPINs = require('./spyCode');

describe('tests spyCode function get PINs', () => {
    it('takes in observed pin and returns all possible pins', () => {
        const answer = getPINs('8');
        expect(answer).toEqual(expect.arrayContaining(['5', '7', '8', '9', '0']));
    });

    it('takes in observed pin and returns all possible pins', () => {
        const answer = getPINs('11');
        expect(answer).toEqual(expect.arrayContaining(['11', '22', '44', '12', '21', '14', '41', '24', '42']));
    });

    it('takes in observed pin and returns all possible pins', () => {
        const answer = getPINs('369');
        expect(answer).toEqual(expect.arrayContaining(['339', '366', '399', '658', '636', '258', '268', '669', '668', '266', '369', '398', '256', '296', '259', '368', '638', '396', '238', '356', '659', '639', '666', '359', '336', '299', '338', '696', '269', '358', '656', '698', '699', '298', '236', '239']));
    });

});
