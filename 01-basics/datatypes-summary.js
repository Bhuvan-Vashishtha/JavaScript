// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bugNumber = 23674284812834823n;


//Reference (Non primitive)

//Array, Objects, Functions

const heroes = ["ironman","spiderman","batman"]
let myObj = {
    name: "hitesh",
    age: 22,
}
const myFunction = function(){
    console.log("Hello World");
}

/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//**************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "luckyvashishtha"

let anothername = myYoutubename;
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne ={
    email : "user@google.com",
    upi : "user@ybi"
}

let userTwo = userOne;

userTwo.email = "luckyBoi"

console.log(userOne.email);
console.log(userTwo.email);