// string concatination
const concatText = (str, str2) => {
  return str.concat(" ", str2);
};

//find string length
const getTextLenght = (str) => {
  return str.length;
};

const slicingString = (str) => {
  return str.slice(0, 6);
};

const subString = (str) => {
  return str.substring(8, -4);
};
const replacingString = (str) => {
  return str.replace(" ", ",");
};
const uppercase = (str) => {
  return str.toUpperCase();
};
const trimming = (str) => {
  return str.trim();
};
const padding = (str) => {
  return str.padStart(4, "0");
};
const paddingEnd = (str) => {
  return str.padEnd(4, "0");
};
const findingChar = (str) => {
  return str.charAt(0);
};

const spliting = (str) => {
  return str.split(" ");
};

module.exports = {
  concatText,
  getTextLenght,
  slicingString,
  subString,
  replacingString,
  uppercase,
  trimming,
  padding,
  paddingEnd,
  findingChar,
  spliting,
};
