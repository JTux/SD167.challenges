/*
### Your Task:
Create an object literal called movie. The movie object should contain the key value pairs with the specified data types seen below.
​
You are welcome to fabricate the data but the structure will need to be the same as below.
​
### Required Properties:
- A 'name' property containing a string (should be the name of a movie)
- A 'runTime' property containing the number of minutes long the movie is
- A 'genre' property containing a string representation of what genre the movie is
- A characters property containing an array with (at minimum) two character objects in it.
These characters should be objects with their own properties:
  - A name property containing a string, representing the character's name
  - An age property containing a number, representing the character's age (doesn't have to be accurate)
  - An items property containing a list of items, these items should be represented by strings (minimum of 3 items in this list)
*/

let movie = {
    // key: value
    name: "Rubber",
    runTime: 85,
    genre: "Action/Thriller",
    characters: [
        {
            name: "Robert the Tire",
            age: 51,
            trivia: [
                "Has destructive telekinetic powers",
                "Is a tire",
                "Doesn't like people"
            ]
        },
        {
            name: "Man in wheelchair",
            age: 63,
            trivia: [
                "Has a wheelchair",
                "Is a man",
                "Played a man in a wheelchair",
                "Is sitting (probably)"
            ]
        }
    ]
}

console.log(movie.characters[1].trivia);