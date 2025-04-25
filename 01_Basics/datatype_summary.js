/* data types are categorised into two on the basis of how they are stored and how can be accessed from the memory */

//  Primitive : call by value, so the original datas memory reference is not given but infact copy is given and changes happen there.

/*  7 types : 
String, Number, Boolearn, null, undefined, Symbol, BigInt */

// JS dynamic type or static type?

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3