/*
FIZZBUZZ LOOP CHALLENGE
************
- Create a loop that counts to 100.
- Inside the loop write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - prints out the number if none of the above are true.
- Pass each iteration through the conditional and log to the console the appropriate value as determined above.
*/

//  iterator declaration; run condition; increment Expression
for (let i = 0; i <= 100; i++) {
    // i++ -> i = i + 1;
    // Inside the loop -> Add code here
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}