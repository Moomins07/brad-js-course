// setTimeout(changeText, 2000);

// console.log('Hello from global scope');
function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

// Even if we set the time out function to run at 0 seconds(instantly), it still runs after the glocal scope console.log. This is because our setTimeOut function places the callback in the task queue, which checks to see if the callstack is empty, so that it can be placed in the callstack.

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer Cancelled');
});
