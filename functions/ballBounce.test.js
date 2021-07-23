const ballBounce = require('./ballBounce');

//test copied from codewars

describe('ball bounce function test', () => {
    it('takes in an origin height, a bounce, and a window height retuning the count of timese the ball passes the window', () => {
        expect(ballBounce(2.0, 0.5, 1)).toEqual(1);
        expect(ballBounce(3.0, 0.66, 1.5)).toEqual(3);
        expect(ballBounce(30.0, 0.66, 1.5)).toEqual(15);
        expect(ballBounce(30, 0.75, 1.5)).toEqual(21);
        expect(ballBounce(30, 0.4, 10)).toEqual(3);
        expect(ballBounce(40, 0.4, 10)).toEqual(3);
        expect(ballBounce(10, 0.6, 10)).toEqual(-1);
        expect(ballBounce(40, 1, 10)).toEqual(-1);
        expect(ballBounce(-5, 0.66, 1.5)).toEqual(-1);
        expect(ballBounce(5, -1, 1.5)).toEqual(-1);
        expect(ballBounce(4.0, 0.25, 1)).toEqual(1);
    });
});

describe('Random tests', () => {
    function bouncingBallTest(h, bounce, window) {
        if ((h <= 0) || (window >= h) || (bounce <= 0) || (bounce >= 1))
            return -1;
        let seen = -1;
        while (h > window) {
            seen += 2;
            h = h * bounce;
        }
        return seen;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    it('random selected 10 tests', () => {
        const someheights = [12, 10.5, 144, 233, 15.25, 61, 98, 15.9, 25.8, 41.8, 67,
            109, 17, 28, 46, 7.5, 12.20, 19, 3, 5,
            83, 13, 21, 35.5, 57, 92, 14,
            24, 39, 6.5];
        const someBounces = [0.6, 0.6, 0.6, 0.6, 0.6, 1.1, 9, 1, 0.6, 0.6, 0.6,
            0.75, 0.75, 0.75, 0.75, 0.75, 12.20, 0.75, 0.75,
            0.83, 0.13, 0.21, 0.35, 0.57, 0.9, 0.14,
            0.24, 0.39, 0.65, 0.65];
        const somewin = [1.5, 1.5, 1.44, 2.33, 1, 6.1, 9.8, 1.9, 2.8, 4.8, 3,
            1.09, 1.7, 2.8, 46, 7.5, 12.20, 1.9, 3, 5,
            0.83, 1.3, 2.1, 3.5, 0.57, 0.92, 1.4,
            2.4, 3.9, 6.5];

        for (let k = 0; k < 10; k++) {
            const rn = getRandomInt(29);
            const f1 = someheights[rn];
            const f2 = someBounces[rn];
            const f3 = somewin[rn];
            console.log('Random test %s', k);
            expect(ballBounce(f1, f2, f3)).toEqual(bouncingBallTest(f1, f2, f3));
        }
    });
});
