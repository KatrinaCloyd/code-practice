//everything is half odd, markdown prices
const prices = [5, 10, 20, 18];
const salePrices = prices.map(e => e / 2);
console.log(salePrices);

//add one to every even number
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map(e => (e % 2 === 0 ? e + 1 : e));
console.log(newNums);

//copy array and change some values 

const arr = [1, 2, 3, 4, 5]
const newArr = arr;

//this way will copy be reference and any changes made to newArr will also change arr
//use a method that will make a copy 

const arr1 = [1, 2, 3, 4, 5];
const newArr1 = arr.slice(0, 5);
console.log(newArr1);
// or const newArr1 = [ ...arr1];


//FIND returns first item that meets paramater 
//find an elements whos value is larger than 3 
const firstLarger = nums.find(e => e > 3);
console.log(firstLarger)


//FIND INDEX returns index of first item that meets paramaters 
//find the index for an elements whos value is larger than 3
const firstLargerIndex = nums.findIndex((e) => e > 2);
console.log(firstLargerIndex);


//FILTER new array of items that meet parameters 
//find all elements larger than 3 
const allLarger = nums.filter(e => e > 3);
console.log(nums);
console.log('##', allLarger);

//filter via standard for loop 
const largerThan3 = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 3) {
        largerThan3.push(nums[i]);
    }
}
console.log('##2', largerThan3);


//INCLUDES returns a boolean 
//does array include this value
const names = ['Joe', 'Dan', 'Bob', 'Mark', 'Mike', 'Nick'];
const hasFernando = names.includes('Fernando');
const hasDan = names.includes('Dan');
console.log('Fernando: ', hasFernando, ' Dan: ', hasDan);


//EVERY checks that all values meet the paramaters 
//returns a boolean 
const allOverThree = arr.every(e => e > 3);
console.log('all over three?', allOverThree);


//SOME so some items meet paramaters 
//returns a boolean 
const someOverThree = arr.some(e => e > 3);
console.log('are some over three?', someOverThree);

//FLAT pulls values out of nested arrays into one array 
//can be called multiple times with param 

const mess = [1, 2, [3, 4, [5, 6]]];

const better = mess.flat();
console.log(better);
const good = mess.flat(2);
console.log(good);

//REDUCE 
//dont forget to retun the accumulator!!!
