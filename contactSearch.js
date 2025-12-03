///The lookUpProfile function searches the contacts list for a person with a matching first name and returns the value of the requested property. 
//If the person exists but the property does not, it returns “No such property.” If no matching contact is found at all, it returns “No such contact.”
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let person of contacts) {
    if (person.firstName === name) {
      if (person.hasOwnProperty(prop)) {
        return person[prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact"
}

console.log(lookUpProfile("Kristian", "lastName"));
//Vos
