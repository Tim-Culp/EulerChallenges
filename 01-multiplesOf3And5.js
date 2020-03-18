/*
The variable 'i' is the current number we're considering, and the variable 'sum' is the sum of all numbers that follow the rule. We exhaustively count out the set of numbers from 0 to 1000, and if a number is evenly divisible by either 3 or 5, we add it to the sum.
*/

let sum, i;

sum = 0;

console.log("The set includes:")
for (i = 0; i < 1000; i ++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
        console.log(`${i},`)
    }
}

console.log (`And the sum of them all is ${sum}.`);