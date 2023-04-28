/* Longest Name Detector
​
Create an array of names. It can be random names, pokemon names, super hero/villain names, etc.
​
Write a loop that goes through (iterates) the array and checks the length of each name.
​
After the loop is complete, log to the console the longest name in the array. If there is a tie log at least one of the longest names. For bonus knowledge, go ahead and log both.
​
To do this you will need to store the length of the previously longest name in order to compare it to the next iteration.
​
Extra challenge: find both the longest and shortest name.
​
Example array:
let heroes = ["Celestial Pacer", "Compudroid", "Galacticdroid", "Ghost Baroness", "Pelt Warrior", "Night Cancellor", "Serpent Shadow", "Barkborn", "Smash Mouth", "Mouth Fool"];
​
Example result:
//Two names have 15 characters (including the space) so I'd either log one or both
[ 'Celestial Pacer', 'Night Cancellor' ]
*/

// BIG NUMBER: 15

// 7 letters
// 5 letters
// 10 letters
// 15 letters
// 8 letters
// 9 letters

// Step 1 is going to be find out how many letters are in each word
// Step 2 is to check for the biggest number
// Step 2a is to check each number and compare it to the current biggest number
// Step 2b is to store the biggest number for later
// Step 3 is once we have the biggest number for sure, log to console

// let is keyword
// heroes is the variable name
// ["string", "string"] is the value (an array with strings in it)
let heroes = ["Celestial Pacer", "Compudroid", "Galacticdroid", "Ghost Baroness", "Pelt Warrior", "Night Cancellor", "Serpent Shadows", "Barkborn", "Smash Mouth", "Mouth Fool", "demo"];

// This variable can be used in and out of the for of loop
let bigNumber = 0;
let biggestWord;

//   declaration of heroName
// for (IteratorDeclaration of ARRAY)
for (const heroName of heroes) {
    // heroName is our iterator variable
    // It represents each individual string inside the heroes array
    // console.log(heroName.length);
    
    console.log(heroName.length, bigNumber);

    if (heroName.length > bigNumber) {
        bigNumber = heroName.length;
        // Assigning the new longest word to our variable
        biggestWord = heroName;
    } else if (heroName.length === bigNumber) {
        console.log("Same length");
        // newValue = [oldValue, currentIteration]
        biggestWord = [biggestWord, heroName].flat();
    }
}

console.log("BIG NUMBER", bigNumber);
console.log("Your biggest name is:", biggestWord);