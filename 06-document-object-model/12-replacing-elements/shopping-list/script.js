function replaceFirstItem() {
  const firstItem = document.querySelector('#item-list > li:nth-child(1)');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li><h2>Replaced Second</h2></li>';
  // outerHTML is similar to innerHTML except now we can also change outer tags
}

function replaceAllItems() {
  const list = document.querySelectorAll('li');

  //   list.forEach((item, index) => {
  //     index === 1
  //       ? (item.outerHTML = `<li><h2>Item ${index + 1}</h2></li>`)
  //       : (item.outerHTML = `<li><h2>Replaced ${index + 1}</h2></li>`);
  //   });

  list.forEach(
    (item, index) =>
      (item.outerHTML =
        index === 1
          ? `<li><h2>Item ${index + 1}</h2></li>`
          : `<li><h2>Replaced ${index + 1}</h2></li>`)
  );
}

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List h2';
  header.replaceChild(h2, h1); // newly made h2 replaces h1
}

replaceFirstItem();

replaceSecondItem();

replaceAllItems();

replaceChildHeading();
