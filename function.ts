// 1. write a function to check the length of user input as their name
function checkLength(name: string): boolean {
  return name.length > 3;
}
console.log(checkLength("Andrea"));
// 2. write a function to compare the number user insert to the number 3 then display the suitable message
function checkNumber(userGuess: number): string {
  if (userGuess > 3) {
    return `this number ${userGuess} is greater than 3`;
  } else {
    return `this number ${userGuess} is less than 3`;
  }
}
console.log(checkNumber(6));

// 3. write a function that take an array as a parameter then check if user has age greater than 3

type Users = {
  name: string;
  age: number;
};

const users = [
  { name: "andrea", age: 4 },
  { name: "hanna", age: 9 },
];

const checkAge = (array: Users[]) => {
  array.filter((pers) =>
    pers.age > 3
      ? console.log(`${pers.age}is greater than 3`)
      : console.log(`${pers.age}is less than 3`)
  );
};
// 4. write a function takes 2 parameters : an array and userInput to check if the userInput is matched with the user name
function searchName(array: Users[], userInput: string): string {
  const result = array.find((user) => user.name === userInput);
  if (result) {
    return `${userInput} is in the users array`;
  } else {
    return `${userInput} is not in the users array`;
  }
}
searchName(users, "andrea");
searchName(users, "alex");
// At least 2 ways  --------I am not sure what second way, so I just changed find to filter
function searchNames(array: Users[], userInput: string) {
  const result = array.filter((user) => user.name === userInput);
  if (result) {
    return `${userInput} is in the users array, second way`;
  } else {
    return `${userInput} is not in the users array`;
  }
}
searchNames(users, "andrea");
searchNames(users, "alex");

// searchName(users, "alex"); => alex is not in the users array
// searchName(users, "andrea"); => andrea is in the users array
