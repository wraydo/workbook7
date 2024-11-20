"use strict"

let person = {
    first: "Ed",
    last: "Sheeran",
};


let personAsString = JSON.stringify(person);

let peeps = [
    {
        first: "Ed",
        last: "Sheeran",
    },
    { 
        first: "George",
        last: "Michael"
    },
];

let peepsAsString = JSON.stringify(peeps);
console.log(peepsAsString);

