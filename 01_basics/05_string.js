const name = "Hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

/* using Backticks (``) - for string interpolation
using this can let you do things on the go in code.
suppose we want to add a method to the variable then we can directly do it
chaning name to upper case useing method directly in console.log */

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

//another way to declare a string : using "new" keyword, basically using object of JS

const gameName = new String('hitesh-hc') //string is an object here, with key value pairs. h=0, c=7 in result you get length and lots of other prototype(methods) and can be conducted on a string

console.log(gameName[0]); //accessing 0th key of object 
console.log(gameName.__proto__); //prototype can also be accessed

console.log(gameName.length); //accessing length method
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //tells what character is at 2nd position
console.log(gameName.indexOf('t')); // what is the index value of character

const newString = gameName.substring(0, 4) //creating a sub-string from string
console.log(newString); //you can't use negative value in substring

const anotherString = gameName.slice(-8, 4) //slicing a string. you can use negative values too then it will slice the string from backwards - "ite"
console.log(anotherString);
/* why "ite"?
Length of string is: 9 characters
Evaluate the slice(-8, 4)
-8 → 9 (length) - 8 = 1
so basically we're running from (1,4) => (-8,4) */

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
