// const body = document.querySelector('body');
// const boxContainers = document.querySelectorAll('.key');

// function getKeyInfo(e) {
//   key = e.key;
//   keyCode = e.keyCode;
//   code = e.code;

//   const list = Array.from(boxContainers);

//   list.forEach(() => {
//     list[0].innerText = `${key}`;
//     list[1].textContent = `${keyCode}`;
//     list[2].textContent = `${code}`;
//   });
// }

function showKeyCodes(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };

  console.log(keyCodes);

  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keypress', showKeyCodes);
