/* eslint-disable for-direction */
//from LeetCode: Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

function reverse(x) {
    const arr = x.toString().split('');
    const ans = [];
    if (arr[0] === '-') {
        arr.shift();
        ans.push('-');
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        ans.push(arr[i]);
    }
    if (Number(ans.join('')) > Math.pow(2, 31) - 1 ||
        Number(ans.join('')) < Math.pow(-2, 31)) {
        return 0;
    }
    return Number(ans.join(''));
}

module.exports = reverse;
