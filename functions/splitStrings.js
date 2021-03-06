//from codewars = Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function splitStrings(str) {
    const ans = [];
    for (let i = 0; i < str.length; i += 2) {
        if (str[i + 1]) {
            ans.push(str[i] + str[i + 1]);
        } else { ans.push(str[i] + '_'); }
    }
    return ans;
}

module.exports = splitStrings;
