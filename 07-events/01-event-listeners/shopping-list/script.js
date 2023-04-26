const clearBtn = document.querySelector('#clear');
const listItems = document.querySelectorAll('ul > li');

// clearBtn.onclick = function () {
//   alert('Clear items');
// };

// addEventListener

function clearAll() {
  const ul = document.querySelector('ul');

  listItems.forEach((items) => items.remove());
}

clearBtn.addEventListener('click', clearAll);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000)

// setTimeout(() => clearBtn.click(), 5000);
