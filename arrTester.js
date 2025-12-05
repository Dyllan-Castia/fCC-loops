//Loops through an array and tests each item against a function. If function(item) result is true it returns that item.
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
    return arr[i];
    }
  }
  return undefined;
}

const arg1 = [1, 3, 5, 8, 9, 10];

const result = findElement(arg1, function(num) { return num % 2 === 0;});

console.log(result);
//8
