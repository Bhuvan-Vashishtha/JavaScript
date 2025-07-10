//Primitive

const { useInsertionEffect } = require("react");

// 7 types : String, Number, Boolean, null,undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 34565435346386438n





//Reference (Non primitive)

// Array, objects, Functions, 

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes);

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "inertialGuy"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "bhuvan@gmail.com"
 console.log(userOne.email)
 comsole.log(userTwo.email)