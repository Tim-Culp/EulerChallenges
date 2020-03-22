//2520

/* WHITEBOARD FOR BRAINSTORMING
        20 - 5, 2, 2
19 - 19
    18 - 3, 3, 2
17 - 17
16 - 2, 2, 2, 2
        15 - 5, 3
13 - 13
        12 - 3, 2, 2
11 - 11
        10 - 5, 2
9 - 3, 3
        8 - 2, 2, 2
7 - 7
                6 - 3, 2
5 - 5
                4 - 2, 2
                3 - 3
                2 - 2
if we confirm the some factors, we can rule out the need to confirm other factors
*/

//we start with the multiple of what are determined to be essential factors and go down from there to make sure there are no others
let smallestMultiple;
let startingMultiple = 19n*17n*16n*13n*11n*9n*7n*5n;
console.log("start: ", startingMultiple);
for (let i = startingMultiple; i>0n; i--) {
    if (i % 19n == 0n && i % 17n == 0n && i % 16n == 0n && i % 13n == 0n && i % 11n == 0n && i % 9n == 0n && i % 7n == 0n && i % 5n == 0n) {
        smallestMultiple = i;
        console.log(i);
    }
    //console.log(i);
} 
console.log(smallestMultiple);