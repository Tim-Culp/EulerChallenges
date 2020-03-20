/*
Challenge: 
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. 
*/


// function isPalindrome() returns boolean after stringizing its input and checking it against the reverse of its input
function isPalindrome(int) {
    int = int.toString();
    let check = "";
    let isSame = false;

    //for loop builds out the reverse string of the number one character at a time
    for (i = int.length-1; i >= 0; i--) {
        check = check + int[i];
    }

    //if int is the same as its reverse, int is a palindrome
    if (int == check) {
        isSame = true;
    }

    return isSame;

}

let x;
let y;
let possibleAnswers = [];
let answer;

// exhaustively search every possible pair of 3-digit factors and store the palindromatic pairs and their products in possibleAnswers
// search must be exhaustive as the greatest palindrome factors are not the first found
// number of computations = 899^2 * # of operations in isPalindrome()
for (x = 999; x > 99; x--) {
    for (y = 999; y > 99; y--) {
        if (isPalindrome(y*x)) {
            possibleAnswers.push({ factors: [y, x], product: y*x });
        }
    }
}

// bubble sort possibleAnswers by product from least to greatest 
// number of computations = array length ^ 2
for (let i = 0; i < possibleAnswers.length - 1; i++) {
    for (let j = 0; j < possibleAnswers.length - 1; j++) {
        if (possibleAnswers[j].product > possibleAnswers[j + 1].product) {
            let swap = possibleAnswers[j];
            possibleAnswers[j] = possibleAnswers[j + 1];
            possibleAnswers[j + 1] = swap;
        }
    }
}

answer = possibleAnswers[possibleAnswers.length-1];

//log list of possible answers for posterity
for (i of possibleAnswers) {
    console.log("Possible answer: " + i.factors[0], "*", i.factors[1], "=", i.product);
}

//log the greatest possible palindrome created by two triple-digit numbers
console.log("Greatest Possible Palindrome: " + answer.factors[0], "*", answer.factors[1], "=", answer.product);