const library = [
  {
    title: 'Lorem',
    author: 'Lee Beckett',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Ipsum',
    author: 'Sarah Beckett',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Ipsum',
    author: 'Suzanna Reed',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

for (let i = 0; i < library.length; i++) {
  library[i].status.read = true;
}

const { title: firstBook } = library[0];

const libraryStr = JSON.stringify(library);

console.log(firstBook);
console.log(libraryStr);
