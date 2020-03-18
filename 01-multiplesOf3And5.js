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