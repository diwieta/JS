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

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); power not multiplication 2power3
// console.log(2/3);
// console.log(2%3); modulous

let str1 = "hello"
let str2 = " JS"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2); //ans: 12 (a string and number are attached together)
// console.log(1 + "2"); //ans: 12 (a number and string are attached together)
// console.log("1" + 2 + 2); //ans: 122 (when string is first no conversion happens and they are all attached together)
// console.log(1 + 2 + "2"); //ans: 32 (when number is first then it is operated and then attached with the string)

// console.log( (3 + 4) * 5 % 3); //use parenthesis with complex equations to justify which operations need to be performed first

console.log(true); // it will give true
console.log(+true); // "bad code"; ans = 1, why? true is a boolean which is 1 and we have done increment, which didn't happen but it gives it's value as 1
//console.log(true+); // will give an error
console.log(+""); //"bad code";epmty "" give value 0 and + does conversion; tricky conversion but not required

let gameCounter = 100
++gameCounter; //++prefix postfix++
console.log(gameCounter);

