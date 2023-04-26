// Filter is another high-order function
// The difference between forEach and filter/map is that filter
// along with others actually return something. E.g. Our modified array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// The filter method makes a check (number % 2 ===0) and returns those that pass the check
// into a new array that is returned and saved into the variable we declare. E.g. evenNumbers

// SHORT VERSION

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// SAME WITH FOREACH
// const evenNumbers = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// console.log(evenNumbers);

// The above block of code is the basically same as using the filter method but more complicated.

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retail companies

const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

console.log(retailCompanies);

// Get companies that started/ended 1980-2005

const oldCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);

console.log(oldCompanies);

// Get companies that lasted 10 years or more

const longStandingCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(longStandingCompanies);
