// from Codewars - Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
//Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cake(a, b) {
    //a is recipe
    //b is what we have
    let count;

    //HOW DO WE COMPARE THE SAME VALUES FROM A AND B if we dont know what they are named?
    //loop through a object, find same key in b then run comparison 

    const recipeKeys = Object.keys(a);

    recipeKeys.forEach(e => {
        //compare a.value to b.value to see if b is greater than a
        if (b[e] && b[e] >= a[e]) {
            //if it is divide b by a and set the count to the number 
            const x = Math.floor(b[e] / a[e]);
            //do this for all values, only resent count if result of division is LESS than what it is right now.
            if (count === undefined || count > x) {
                count = x;
            }
        }
        else count = 0;
    });

    return count;
}

module.exports = cake;
