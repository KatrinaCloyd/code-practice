const pickPeaks = require('./peaks');

describe('tests peaks function', () => {
    it('1 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]);
        expect(answer).toEqual({ pos: [3, 7], peaks: [6, 3] });
    });

    it('2 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]);
        expect(answer).toEqual({ pos: [3, 7], peaks: [6, 3] });
    });

    it('3 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]);
        expect(answer).toEqual({ pos: [3, 7, 10], peaks: [6, 3, 2] });
    });

    it('4 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]);
        expect(answer).toEqual({ pos: [2, 4], peaks: [3, 2] });
    });

    it('5 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]);
        expect(answer).toEqual({ pos: [2], peaks: [3] });
    });

    it('52 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]);
        expect(answer).toEqual({ pos: [2], peaks: [3] });
    });

    it('6 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]);
        expect(answer).toEqual({ pos: [2], peaks: [3] });
    });

    it('7 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]);
        expect(answer).toEqual({ pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] });
    });

    it('8 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([]);
        expect(answer).toEqual({ pos: [], peaks: [] });
    });

    it('8 takes in an array and returns an object with array of peaks an array of peak positions', () => {
        const answer = pickPeaks([1, 1, 1, 1, 1]);
        expect(answer).toEqual({ pos: [], peaks: [] });
    });

});
