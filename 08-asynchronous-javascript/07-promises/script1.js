const getUser = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong.');
    }
  }, 1000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => console.log(error));

console.log('Hello from global scope');
