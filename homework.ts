// Typescript
// add the type for this variable

let firstName: string = "Andrea";

const randomNumber: number = 3;

let phoneNumber: string = "1-770-736-8031 x56442";

// object

type User = {
  firstName: string;
  age: number;
  address: {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
  };
};
const userName: User = {
  firstName: "Andrea",
  age: 5,
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipCode: "92998-3874",
  },
};

// array
const array: number[] = [1, 2, 3, 4];

const array1: (number | string | {})[] = [
  1,
  2,
  3,
  4,
  "Andrea",
  { age: 3, address: 12 },
];
