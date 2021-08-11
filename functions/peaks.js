// FROM CODEWARS : write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// Ex, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5.

// The output will be returned as an object with two properties: pos and peaks. 

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// PLATEAUS:  [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// Have fun!

function pickPeaks(arr) {
    const ans = { pos: [], peaks: [] };

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            ans.pos.push(i);
            ans.peaks.push(arr[i]);
        }
        else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
            //check if anything following this is greater
            // for (let j = i + 2; j < arr.length; j++) {
            //     if (arr[j] > arr[i]) {
            //         i = j;
            //     }
            //     // if (arr[j] < arr[i]) {
            //     //     ans.pos.push(i);
            //     //     ans.peaks.push(arr[i]);
            //     //     i = j;
            //     // }
            // }
            // ans.pos.push(i);
            // ans.peaks.push(arr[i]);
            let temp = i + 1;
            while (arr[i] === arr[temp]) { temp++; }
            if (arr[temp] < arr[i]) {
                ans.pos.push(i);
                ans.peaks.push(arr[i]);
            }
        }

    }
    return ans;
}

module.exports = pickPeaks;

