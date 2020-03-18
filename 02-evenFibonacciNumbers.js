/*
With this problem, we need to start with 1 + 1 in order to even get the thing moving, so we initialize currentNum and previousNum as 1. We add currentNum to previousNum, and then let previousNum become the old currentNum, which is usually currentNum - previousNum. We needed an exemption for the first loop, because at that point currentNum - previousNum would become 0.
*/

const say = function(message) {
    console.log(message);
}

let currentNum;
let previousNum = 1;
let sum = 0;

for (currentNum = 1; currentNum < 4000000; currentNum += previousNum) {

    //line separation between loops for easier viewing
    say(`---------------------`);

    //log the state of things before operating
    console.log(`Start: `+ currentNum, previousNum, sum);

    //exemption for the first loop, but beyond that allow previousNum to become what currentNum used to be.
    if (currentNum > 1) {previousNum = currentNum - previousNum;}

    //if currentNum is even, add it to the sum
    if (currentNum % 2 === 0) {

        sum += currentNum;

        //log when an even number has been found.
        say("Even! Sum: " + sum);
    }

    //log the state of things after operating
    console.log(`End: `+ currentNum, previousNum, sum);
}

//final answer
say(`Sum: ${sum}`);