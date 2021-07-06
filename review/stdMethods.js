const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

//PUSH - adds item to end of array
//returns new length of array 
const push = arr.push(10);
console.log(arr);
console.log(push);

//POP removes last item in array 
//returns the item removed 
const pop = arr.pop();
console.log(arr);
console.log(pop);

//SHIFT removes first item in array 
//returns item removed 
const shift = arr.shift();
console.log(arr);
console.log(shift);


//UNSHIFT adds item to begining of array 
//returns new length of array 
const unshift = arr.unshift('shift');
console.log(arr);
console.log(unshift);


//SPLICE ('start', 'number to delete', 'add')
//mutates original 
//start is inclusve - 2 will remove item at index 2
//returns removed items 
const splice = arr.splice(2, 2);
console.log(arr);
console.log(splice);

//SLICE ('start', 'end')
//start is inclusive, end is index before (ex: 2, 3 will only return the value at index 2)
//retruns new array 
//does NOT mutate original 
//returns new array 
const slice = arr.slice(2, 3);
console.log(arr);
console.log(slice);
