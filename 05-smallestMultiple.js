/* WHITEBOARD FOR BRAINSTORMING
20 - 5, 2, 2
*19 - 19
18 - 3, 3, 2
*17 - 17
*16 - 2, 2, 2, 2
15 - 5, 3
*13 - 13
12 - 3, 2, 2
*11 - 11
10 - 5, 2
*9 - 3, 3
8 - 2, 2, 2
*7 - 7
6 - 3, 2
*5 - 5
4 - 2, 2
3 - 3
2 - 2

We must confirm whether a number we consider is a multiple of our 20 integers.
If we confirm some factors, we can rule out the need to confirm other factors.
Prime factors are required unless a multiple of them is confirmed.
Because 16 is a multiple of 8, 4, and 2, we don't have to confirm whether our number is divisible by 8, 4, or 2.
Since 2 is confirmed by the confirmation of 16, all other even numbers are confirmed if their halves are confirmed.
3 is confirmed if 9 is confirmed.
18 is confirmed if 9 and 16 are confirmed.
20 is confirmed if 5 and 16 are confirmed.
15 is confirmed if 9 and 5 are confirmed.
*/

//we start with the multiple of the factors that are determined to be essential and go down from there to make sure there are no other smaller multiples
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