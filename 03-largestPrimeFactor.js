/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

// a prime factor is a factor of a number that is only divisible by itself and 1.
// to find the greatest prime factor of a number, break down that number into its factors, and then find all factors that cannot be divided by any preceding integer. Return the greatest of these.

let dividend = 600851475143;
let factors = [];
let primeFactors = [];
let i;

//for every integer until we hit our dividend, check whether it's a factor of our dividend, and put the integer into factors[];
for (i = 0; i < dividend; i++) {
    if (i > 1 && dividend % i == 0) {
        factors.push(i);
    }
}

//we then check whether each factor in our list of factors is a prime number
for (i = 0; i < factors.length; i++) {

    //we're going to assume the element we're considering is prime until we've found a number that divides into it.
    let prime = true;
    let j;

    //we check whether the element is divisible by any integer less than itself. J is used to count integers.
    for (j = 2; j < factors[i]; j++) {

        //if the element is divisible, then the it is not prime
        if (factors[i] % j == 0) {
            prime = false;
        }
    }

    //if it is prime, it is added to the list of prime factors.
    if (prime == true) {
        primeFactors.push(factors[i]);
    }

}

//log the last element in the prime factors list, which will be the greatest one.

console.log("---------------------------------");
console.log(`Potential Factors:${factors.toString()}`);
console.log(`Prime factors: ${primeFactors.toString()}`);
console.log(`Greatest: ` + primeFactors[primeFactors.length-1]);
console.log("---------------------------------");