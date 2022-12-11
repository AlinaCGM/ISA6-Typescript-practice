"use strict";
// 1. write a function to check the length of user input as their name
// function checkLength(name: string): boolean {
//   return name.length > 3;
// }
// console.log(checkLength("Andrea"));
// 2. write a function to compare the number user insert to the number 3 then display the suitable message
// function checkNumber(userGuess: number): string {
//   if (userGuess > 3) {
//     return `this number ${userGuess} is greater than 3`;
//   } else {
//     return `this number ${userGuess} is less than 3`;
//   }
// }
// console.log(checkNumber(6));
// compareNumber (4) => this number 4 is greater than 3
// compareNumber (1) => this number 1 is less than 3
// 3. write a function that take an array as a parameter then check if user has age greater than 3
const users = [
  { name: "andrea", age: 4 },
  { name: "hanna", age: 9 },
];

// 4. write a function takes 2 parameters : an array and userInput to check if the userInput is matched with the user name
function searchName(array, userInput) {
  const result = array.find((user) => user.name === userInput);
  if (result) {
    return `${userInput} is in the users array`;
  } else {
    return `${userInput} is not in the users array`;
  }
}
console.log(userInput);
searchName(users, "andrea");

// searchName(users, "alex"); => alex is not in the users array
// searchName(users, "andrea"); => andrea is in the users array
// type -function
// function NOT return anything => void
// function addNumber(a: number, b: number): number {
//   return a + b;
// }
// return a number
// function addNumber(a: number, b: number) {
//   return a + b;
// }
// console.log(addNumber(1, 2));
