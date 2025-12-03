//Function takes an array as first argument and a number as second argument. The function splits the array into smaller arrays
//of length equal to the second argument and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, num) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    let slice = arr.slice(i, i + num);
    result.push(slice);
    i += num;
  }
  return result;
}

let chunk = chunkArrayInGroups(["Muggles", "Witches", "Wizards", "Squibs"], 1);
console.log(chunk);
//[ [ 'Muggles' ], [ 'Witches' ], [ 'Wizards' ], [ 'Squibs' ] ]
