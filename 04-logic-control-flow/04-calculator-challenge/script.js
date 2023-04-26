function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case typeof num1 !== 'number' || typeof num2 !== 'number':
      result = `Error! Not a number!`;
      break;
    case operator === '+' || '*' || '-' || '/':
    case '+':
      result = num1 + num2;

      break;
    case '*':
      result = num1 * num2;

      break;
    case '-':
      result = num1 - num2;

      break;
    case '/':
      result = num1 / num2;

      break;
    default:
      result = 'Error! Not an operator!';
  }
  console.log(result);
  return result;
}

calculator(5, 2, '&');
