//example interview question from Emily Baier used at Acorns
//take in two letters and a sentence, and return the number of times each letter appears in the sentence 

const ltrCount = (a, b, c) => {
    const upperA = a.toUpperCase();
    const upperB = b.toUpperCase();
    const upperC = c.toUpperCase();
    const ans = [];
    const arr = upperC.split('');
    const aCount = arr.filter(e => e === upperA).length;
    ans.push(aCount);
    const bCount = arr.filter(e => e === upperB).length;
    ans.push(bCount);
    return ans;
};

module.exports = ltrCount;
