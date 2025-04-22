//let score = 33 //started iwth this, 1st example

//let score = "33"; //if in string //2nd example //it can convert to number

let score = "33abc" //if the value is mix of number and string, then will it convert to just number? 
//result: yes it will convert to number

//let score = Null //if it is null then the result will be "0"
//let score = undefined //if it is undefined then the result will be "NaN"
//let score = true //if it is boolean value then 1 for true and 0 for false
//let score = "diwi" //if it is a string which cannot be converted then it will give NaN


/*we want to know it's type, why? bcz sometimes when we are working on backend, t
he frontend person given the value in a form, maybe it is string or object not number. so always check.*/

//const {score} = req.body //in this we don't know what is the datatype of score
console.log(typeof score);
console.log(typeof (score)); //in the method form

let valueInNumber = Number(score) //converting string to number
console.log(typeof valueInNumber);

console.log(valueInNumber); //when printing valueInNumber to check it's value it gives NaN = Not a Number, but why?
//when you try to convert not a pure number to number, it will convert into number but when checked for the value will give NaN 

//NaN is a specail type

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

//converting number to Boolean
//let isLoggedIn = 1; //case 1: when 1 => true; when 0 => false;
//let isLoggedIn = ""; //case 2: when empty string => false;
let isLoggedIn = "sun"; //case 3: when random string => true; why?

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)
