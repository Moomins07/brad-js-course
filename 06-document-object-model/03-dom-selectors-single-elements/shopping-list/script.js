const firstItem = document.querySelector('li:first-child');

// firstItem.textContent = '';
firstItem.style.color = 'blue';

const removeBtn = firstItem.querySelector('.remove-item');

removeBtn.style.color = 'red';

document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title').className;

console.log(title);
