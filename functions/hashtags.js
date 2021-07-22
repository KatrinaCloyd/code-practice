// Problem from CODEWARS 
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function hashtags(x) {
    //take x and split each word into array with each letter into sub array
    const arr = x.split(' ').map(e => e.split(''));

    //double map to go over each letter in each array to cap first letter
    const arrCap = arr.map((e) => e.map((e, i) => {
        if (i === 0) return e.toUpperCase();
        else return e;
    })
        //join sub letters back into words
        .join(''));

    //add '#' to beging of hash
    arrCap.unshift('#');
    //join words back into one string
    const ans = arrCap.join('');

    //check if empty string or too long
    if (ans.length > 140 || ans === '#' || x === '') { return false; }
    else return ans;
}

module.exports = hashtags;
