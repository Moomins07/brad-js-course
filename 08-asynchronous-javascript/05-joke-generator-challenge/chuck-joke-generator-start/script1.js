const button = document.getElementById('joke-btn');
const joke = document.getElementById('joke');

function nextJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // console.log(JSON.parse(this.responseText));

      joke.innerHTML = JSON.parse(this.responseText).value;
    } else {
      joke.innerHTML = 'Something went wrong...';
    }
  };
  xhr.send();
}

button.addEventListener('click', nextJoke);
document.addEventListener('DOMContentLoaded', nextJoke);
