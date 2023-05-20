const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
};

const { title: newTitle } = todo;

console.log(newTitle);

// Destructuring arrays
const numbers = [23, 67, 33, 49];

const [first, second, ...restOfNumbers] = numbers;

console.log(first, second, restOfNumbers);
