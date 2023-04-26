// Challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter((people) => people.age <= 25)
  .map((youngPeople) => {
    return {
      name: `${youngPeople.firstName} ${youngPeople.lastName}`,
      email: `${youngPeople.email}`,
    };
  });

console.log(youngPeople);

// Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((numbers) => numbers > 0)
  .reduce((acc, numbers) => acc + numbers);

console.log(positiveSum);

const words = ['coder', 'programmer', 'developer'];

const capitalisedWords = words.map(
  (item) => `${item[0].toUpperCase()}${item.substring(1)}`
);

console.log(capitalisedWords);
