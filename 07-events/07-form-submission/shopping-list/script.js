const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  const item = document.getElementById('item-input');
  const priority = document.getElementById('priority-input');

  if (item === '' || priority === '0') {
    item.style.outlineColor = 'red';
    return;
  }

  console.log(item.value, priority.value);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  //   const item = formData.get('item');
  //   const priority = formData.get('priority');

  const entries = formData.entries(); //gives us iterator form that we can loop through
  //   console.log(entries);

  for (let entry of entries) {
    // loop through form iterator
    console.log(entry[1]);
  }

  //   console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);
