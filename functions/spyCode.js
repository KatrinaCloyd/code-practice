// Observed pin is a close guess on this keypad
// The keypad:
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// Observed = 1357, but each of the digits could be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
// No limit to number of combinations.
// Answer should include initial observed combo.
// Return all variations as an array of all variations as strings.

//done with help from ryunp on github... 


function getPINs(observed) {
    const value = {
        1: ['1', '2', '4'],
        2: ['2', '1', '5', '3'],
        3: ['3', '2', '6'],
        4: ['4', '1', '5', '7'],
        5: ['5', '2', '4', '6', '8'],
        6: ['6', '3', '5', '9'],
        7: ['7', '4', '8'],
        8: ['8', '5', '7', '9', '0'],
        9: ['9', '6', '8'],
        0: ['0', '8']
    };

    const ans = [];

    getCombos(observed, 0, '');
    return ans;

    // First combo traversal
    function getCombos(obs, i, curCombo) {
        // Get possible candidates
        //if we used an array here we would have to check for duplicates 
        //a set automatically does that 
        const candidates = new Set(value[obs[i]]);
        candidates.add(obs[i]);

        //console.log(obs, i, curCombo, candidates); // Pretty cool
        candidates.forEach((e) =>
            //check if last element in observed numbers
            i === obs.length - 1 ?
                //push to answer array 
                ans.push(curCombo + e) :
                //if not loop through with function again to get more options
                getCombos(obs, i + 1, curCombo + e));
    }
}

module.exports = getPINs;
