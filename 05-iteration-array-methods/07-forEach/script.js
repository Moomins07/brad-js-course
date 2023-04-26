// High Order array methods!
// High order methods all work in a similar way, they use a function as an argument (a callback function)
// In that callback function, we can pass in a variable for each item in that array
// A forEach just loops through the array, it does not return anything, like a for loop.

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//   console.log(item);
// });

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// We can also pass named functions into the forEach argument rather than just using anonymous
function logSocials(social, index) {
  console.log(social, index);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));
