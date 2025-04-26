//there are total of 4 ways in which a variable can be declared, but not all should be used//
const accountId = 4231  //value of const cannot be changed//
let accountEmail = "diwi@gmail.com" //
var accountPassword = "21319804"
//accountCity = Delhi//
let accountState; //if printed a variable without any value then javascript considers it as undefined

//accountId = 89 // const cannot be changed

console.log(accountId);

console.table([accountId, accountEmail, accountPassword]) //to print in a tabular form

/*
why var is not used? bcz of issue in block scope and functional scope
*/