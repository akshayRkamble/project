// Hoisted variable declarations
var num1, num2, operator, result;


function calculate() {
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
     
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by zero";
      }
      break;
    default:
      result = "Invalid operator";
  }
}


num1 = 10;
num2 = 5;
operator = '+';
calculate();
console.log("Result:", result);

num1 = 8;
num2 = 4;
operator = '-';
calculate();
console.log("Result:", result);

num1 = 6;
num2 = 3;
operator = '*';
calculate();
console.log("Result:", result);

num1 = 12;
num2 = 0;
operator = '/';
calculate();
console.log("Result:", result);

