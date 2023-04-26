//  Reduce is used to 'reduce' something into a single value.
// For example, it is often used to return a total sum

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

//  Using a for...of loop

const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

console.log(sum3());

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 175 },
];

const cartTotal = cart.reduce((acc, product) => acc + product.price, 0);

console.log(cartTotal);
