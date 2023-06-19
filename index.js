const {
  concatText,
  getTextLenght,
  replacingString,
  uppercase,
  trimming,
  padding,
  paddingEnd,
  findingChar,
  spliting,
  subString,
  slicingString,
} = require("./string");

// Concat
console.log(concatText("Faisal", "Haroon"));

// text lenght
console.log(getTextLenght("Faisal"));

// slice method
console.log(slicingString("Apple, banana, orange"));

// substring method
console.log(subString("Faisal Haroon"));

// replace method()
console.log(replacingString("apple mango and banana"));

// uppercase method
console.log(uppercase("faisal haroon is a junior developer"));

// trim() method
console.log(trimming("         hello world"));

//padding method
console.log(padding("45"));

// paading from end

console.log(paddingEnd("45"));

// chatat() method
console.log(findingChar("Faisal"));

// split() method
console.log(spliting("Faisal Haroon is a junior developer"));
