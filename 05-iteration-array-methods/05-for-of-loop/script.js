const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Lee' }, { name: 'Chris' }];

// Instead of your typical for-loop to loop
// through the above array, you can use a for-of loop

for (const item of items) {
  console.log(item);
}

console.log(`------ For...of in array of objects -------`);
for (const user of users) {
  const { name: firstName } = user;
  console.log(firstName);
  // Added destructuring here for fun and to test my memory
}

// You can also use for...of loops to loop through strings

let str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// For...of loop through map

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}
