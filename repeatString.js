//This function repeats a given string the amount of times specified in the second argument without using .repeat() method.
 function repeatStringNumTimes(str, num) {
  
  let result = "";
  
  if (num <= 0) {
    return "";
  }
  
  for (let i = 0; i < num; i++) {
      result += str;
    }
    
    return result;
}

console.log(repeatStringNumTimes("abc", 4));
//abcabcabcabc
