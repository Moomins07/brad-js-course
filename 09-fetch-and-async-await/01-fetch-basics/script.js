// Fetching a JSON file
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/Moomins07')
  .then((response) => response.json())
  .then(
    (data) =>
      (document.querySelector(
        'h1'
      ).innerHTML = `<h6><strong>${data.login}</strong></h6>`)
  );
