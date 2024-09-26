// take the input from the user and print it?
// const readline =require("readline-sync");
// let num = readline.questionInt("enter the number : ");
// console.log(num);

// const input =require("readline-sync");
// let num = input.question("enter number:-");
// console.log(num);






const input = require("readline-sync");
function userInput(user){
    user= input.questionInt("enter the digit you wan to print:-");
    console.log(user);
}
userInput();