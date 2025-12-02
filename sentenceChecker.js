//My solution*
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

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);
//Vowel Count: 7

//freecodecamp.org solution*
//function getVowelCount(sentence) {
  //const vowels = "aeiou";
 // let count = 0;

  //for (const char of sentence.toLowerCase()) {
    //if (vowels.includes(char)) {
      //count++;
   // }
 // }
  //return count;
//}

//My solution*
//Checks how many consonants the sentence has and returns that number.
function getConsonantCount(sentence) {
  const vowels = "aeiou";
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (!vowels.includes(char) && char >= "a" && char <= "z") {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);
//Consonant Count: 7

//freecodecamp.org solution*
//function getConsonantCount(sentence) {
  //const consonants = "bcdfghjklmnpqrstvwxyz";
  //let count = 0;

 // for (const char of sentence.toLowerCase()) {
    //if (consonants.includes(char)) {
     // count++;
   // }
 // }
  //return count;
//}
