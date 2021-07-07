//[1,4,4,4,0,4,3,3,1] => [1,12,0,4,6,1]

const sumDup = (arr) => {
    const newArray = [];
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i];
        if (arr[i] !== arr[i + 1]) {
            newArray.push(acc);
            acc = 0;
        };
    }

    return newArray;
};

module.exports = sumDup;
