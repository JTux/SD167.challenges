/*
Create an animal object.

The animal should have a minimum of a name, age, species, whether or not it's lazy, and a collection of traits (e.g. Orange, small, clingy, etc.).

Need an object with properties.
- property key -> type
--------------------------
- name         -> string
- age          -> number
- species      -> string
- lazy or not  -> boolean
- traits       -> array

- additional properties (diet, habitat)
*/

/*
Once you have created and initialized your animal object, log a brief description of the animal to your console.

An example of the output might be:
`${name} is a ${age} year old ${species}. It is ${lazy or not} that ${name} is known for being lazy. ${name} is also known for being ${traits}, etc.`

"APOLLO is a 2.5 year old CAT. It is TRUE that APOLLO is known for being lazy. APOLLO is also known for being ORANGE, SMALL, CLINGY, etc."

Emphasis added to where your object properties should go in the string. Make sure not to type the entire string out. It should only be filled out based on what the object contains.
*/

let animal = {
    // key: value
    name: "Apollo",
    age: 2.5,
    species: "cat",
    isLazy: true,
    traits: ["orange", "clingy", "small", "adorable", "dumb", "nice"]
};

let lastIndex = animal.traits.length - 1;
let traits = animal.traits.slice(0, lastIndex).join(", ");
let lastTrait = animal.traits.slice(-1);
let traitList = `${traits}, and ${lastTrait}`;

let output = `${animal.name} is a ${animal.age} year old ${animal.species}. It is ${animal.isLazy} that ${animal.name} is known for being lazy. ${animal.name} is also known for being ${traitList}.`;

console.log(output);

if (animal.isLazy) {
    console.log(`${animal.name} is very lazy!`);
} else {
    console.log(`${animal.name} is very active!`);
}

// if (animal.isLazy === false) { // !animal.isLazy
//     console.log(`${animal.name} is very active!`);
// } 