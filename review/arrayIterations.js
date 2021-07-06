const companies = [
    { name: 'company 1', category: 'finanace', start: 1981, end: 2003 },
    { name: 'company 2', category: 'retail', start: 1992, end: 2008 },
    { name: 'company 3', category: 'auto', start: 1999, end: 2007 },
    { name: 'company 4', category: 'retail', start: 1989, end: 2010 },
    { name: 'company 5', category: 'tech', start: 2009, end: 2014 },
    { name: 'company 6', category: 'finanace', start: 1987, end: 2010 },
    { name: 'company 7', category: 'auto', start: 1986, end: 1996 },
    { name: 'company 8', category: 'tech', start: 2011, end: 2016 },
    { name: 'company 9', category: 'retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//standard for loop 
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }

//forEach - loop through array - no return 
// companies.forEach(function (company, index, array) {
//     console.log(company.category);
// });

//FILTER - returns items that meet the filter paramater
// filter long version
const canDrink = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
});

// filter arrow function 
const canDrink2 = ages.filter((age) => age >= 21);
console.log(canDrink2);

const retail = companies.filter(e => e.category === 'retail');
console.log(retail);

const eighties = companies.filter(e => e.start >= 1980 && e.start < 1990);
console.log(eighties);

const ten = companies.filter(e => e.end - e.start >= 10);
console.log(ten);

//MAP - returns a new array of values that meet the paramaters (you can chain map calls)
const coNames = companies.map((e, i) => e.name + ' ' + i);
console.log(coNames);

const tenTimes = ages.map(e => e * 10);
console.log(tenTimes);

//SORT 
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

const sortCos = companies.sort((a, b) => a.start > b.start ? 1 : -1);
console.log(sortCos);

//REDUCE 
// neither of these really need the 0 beacuse they are just adding together 
const ageSum = ages.reduce((acc, age) => {
    return age + acc;
}, 0);

const ageSum2 = ages.reduce((acc, age) => age + acc);
console.log(ageSum, ageSum2);

const totalYears = companies.reduce((acc, e) => acc + (e.end - e.start), 0);
console.log(totalYears);

//COMBINE POWERS 
const combined = ages
    .map(e => e * 2)
    .filter(e => e >= 40)
    .sort((a, b) => a - b)
    .reduce((acc, e) => acc + e);

console.log('wooo', combined);