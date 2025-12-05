//Define a function that takes an array of arrays (arrs)
function largestOfAll(arrs) {

  let result = [];

  for (let i = 0; i < arrs.length; i++) {
    let biggest = arrs[i][0];

    for (let j = 0; j < arrs[i].length; j++) {
      if (arrs[i][j] > biggest) {
        biggest = arrs[i][j];
      }
    }

    result.push(biggest);
  }

  //Return the array containing the largest number from each sub-array
  return result
}

console.log(largestOfAll([[1, 5, 56, 104], [30, 40, 50, 60], [5, 10, 15, 20]]));
//[ 104, 60, 20 ]
