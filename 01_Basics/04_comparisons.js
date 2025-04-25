// console.log("2" > 1); automatically "2" is converted into number
// console.log("02" > 1);
// the answer will be unpredictable bcz comparing two different data types

//comparison should happen in same data type


console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true
/* bcz it is a conversion problem
== & >= > <, work differently in JS
comparison converts null to number treating it as 0
thus the given answer */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
/* all the values will be false */

// === it checks data type and value both

console.log("2" === 2);