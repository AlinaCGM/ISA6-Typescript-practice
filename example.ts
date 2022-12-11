//add the type for this array by 2 ways

// way 1
type Person = {
  name: string;
  age: number;
  occupation?: string;
  role?: string;
};
// way 2 using union type

// type Person= {
//   name: string;
//   age: number;
//   occupation: string;
//   role?: string;
// } | {
//   name: string;
//   age: number;
//   role: string;
//   occupation?: string;
// };

const personArray: Person[] = [
  {
    name: "Max Mustermann",
    age: 26,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];
