//charCodeAt() version.
//Pass a section of the alphabet with a character missing as the argument.
function fearNotLetter(str) {
  //loops through the alphabet using char code characters starting with index 0 of the str argument.
  for (let i = 0; i < str.length - 1; i++) {
    //define variables to check with in the if block.
    let current = str.charCodeAt(i);
    let next = str.charCodeAt(i + 1);

    //If the next character in the string is not equal to the next character plus one. Returns the character that should be there.
    if (next !== current + 1) {
      return String.fromCharCode(current + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
//d

console.log(fearNotLetter("abcdefghj"));
//i

console.log(fearNotLetter("abcdefghijklmnp"));
//o

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
//undefined

//Alphabet variable version.
//Defines a variable that contains the alphabet.
function fearNotLetter(str) {
  const alph = "abcdefghijklmnopqrstuvwxyz";

  // Find where the substring starts in the alphabet
  const start = alph.indexOf(str[0]);

  // Slice the alphabet to match the expected length of your string
  const expected = alph.slice(start, start + str.length);

  // Compare expected letters to actual input
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== expected[i]) {
      return expected[i]; // This is the missing letter
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"));
//d

console.log(fearNotLetter("abcdefghj"));
//i

console.log(fearNotLetter("abcdefghijklmnp"));
//o

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
//undefined
