// Primitive Data Types

// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// Reference types (Objects)

// Reference types or 'objects' are a non-primitive value and when assigned to a variable, the variable is given a reference to that value.Object literals, arrays, functions are all reference types.

// Strings
const firstName = 'Sara';

// Numbers
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference types
const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
