function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

const li = document.createElement('li');
li.textContent = 'Insert me after!';

const firstItem = document.querySelector('li:first-child');

insertAfter(li, firstItem);
