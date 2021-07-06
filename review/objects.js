const s = 'hello';

console.log(s.toUpperCase());
console.log(typeof s);

const book1 = {
    title: 'Book One',
    author: 'Jane Jane',
    year: 2013,
    getSummary: function () {
        return `${this.title} by ${this.author}`
    }
};

console.log(book1.getSummary());
console.log(Object.keys(book1));
console.log(Object.values(book1));


