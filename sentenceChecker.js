//Checks if the sentence passed as the argument in the function has vowels and returns the amount of vowels in the sentence.
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    char = char.toLowerCase();
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}
