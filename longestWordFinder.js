//Finds the longets word in the string passed as the argument to the function and returns the length of that word.
function findLongestWordLength(str) {
  const words = str.split(" ");
  let count = 0
  for (let word of words) {
    if (count < word.length) {
      count = word.length
    }
  }
  return count;
}

const longestWord = findLongestWordLength("You have to give me another chance!");
console.log(`Longest Word Length: ${longestWord}`)
//Longest Word Length: 7
