const btn = document.getElementById('joke-btn');
const joke = document.getElementById('joke');

function fetchJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', ' https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText).value;
      joke.innerHTML = data;
    } else {
      joke.innerHTML = 'Something went wrong!';
    }
  };

  xhr.send();
}

btn.addEventListener('click', fetchJoke);
document.addEventListener('DOMContentLoaded', fetchJoke);
