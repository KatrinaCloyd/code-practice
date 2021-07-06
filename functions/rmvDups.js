//a function that removes duplicate values from an array 

function rmvDups(arr) {
    arr.sort();
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1])
            newArr.push(arr[i]);
    }
    return newArr;
}

module.exports = rmvDups;
