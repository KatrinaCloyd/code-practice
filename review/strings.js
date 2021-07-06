const str = 'kowabunga';

//SPLIT breaks on given value into array items 
const bkwards = str.split('')
console.log(bkwards);

//REVERSE
//actually an array method that reverse the order of items in the array 
const bkwdsArray = bkwards.reverse();
console.log(bkwdsArray);

//JOIN 
//an array method that joins items on given value into a string 
const qs = bkwdsArray.join('?');
console.log(qs);


//turn that jibberish back into the word
const word = qs.split('').filter(e => e !== '?').reverse().join('');
console.log(word);