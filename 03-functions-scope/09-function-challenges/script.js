const getCelcius = (fahrenheit) => (fahrenheit - 32) * 0.5556;

console.log(getCelcius(70));

const minMax = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return {
    min,
    max,
  };
};

console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

((length, width) => {
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${
      length * width
    }.`
  );
})(10, 5);
