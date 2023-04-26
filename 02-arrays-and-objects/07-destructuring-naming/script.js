const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

// ABOVE - If the variable names are the same as the key name, then just write the variable names.
console.log(person.age);

//  Destructuring

const todo = {
  id: 1,
  title: 'take out the trash',
  user: {
    name: 'John',
  },
};

const {
  title,
  id: todoId,
  user: { name },
} = todo;
newTitle = `${todoId}: ${name}, ${title} you filthy animal.`;
console.log(newTitle);

// Destructure Arrays
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
