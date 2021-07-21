function prob1(a, b) {
    // idea below will not work for longer numbers cases because JS cant handle numbers that big
    //      const sum = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    //      return sum.toString(2);

    //reverse strings so it is easier to add like a human
    // const revA = a.split('').reverse().join('');
    // const revB = b.split('').reverse().join('');
    // //index
    // let i = 0;
    // let carry = 0;

    // //construct new binary string as our solution 
    // let ans = '';

    //add numbers in place 
    // while (i < revA.length - 1 && i < revB.length) {
    //     //carry over logic 
    //     //NEEDS TO ACCOUNT FOR CARRY OVER IN ORDER TO WORK CORRECTLY 

    //     //addition logic
    //     if (revA[i] === '1' && revB[i] === '1') {
    //         ans = ans + '0';
    //         carry = 1;
    //     } else if (revA[i] === '1' || revB[i] === '1') {
    //         ans = ans + '1';
    //     } else {
    //         ans = ans + '0';
    //     }
    // }
    //remember to flip answer back around before returning it. 
    return a;
}

module.exports = prob1;
