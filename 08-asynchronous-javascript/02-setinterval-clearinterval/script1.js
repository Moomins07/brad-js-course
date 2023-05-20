// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1);
  }
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  color = '#' + ('000000' + color).slice(-6);
  console.log(color);
  document.body.style.backgroundColor = `${color}`;
}

function stopChange() {
  clearInterval(intervalID);
  intervalID = null;
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
