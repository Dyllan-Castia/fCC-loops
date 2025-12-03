//Function that takes an array as its argument, returns true if the string in the first element of the array contains 
//all of the letters of the string in the second element of the array, and false otherwise.
function mutation(arr) {
   let firstWord = arr[0].toLowerCase();
   let secondWord = arr[1].toLowerCase();
  for (let letter of secondWord) {
    if (!firstWord.includes(letter)) {
      return false;
    }
  }
    return true
  }

  console.log(mutation(["Mary", "Army"]));
//true

  console.log(mutation(["hello", "neo"]));
//false
