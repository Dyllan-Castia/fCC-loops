//Passes num variable as argument and returns the factorial for that number.
let num = 5;

function factorialCalculator(num) {
  let result = 1
  for (let i = 1; i <= num; i++) {
  result = result * i
  }
return result;
}

const factorial = factorialCalculator(num);
console.log(factorial)
//120

const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
//Factorial of 5 is 120
