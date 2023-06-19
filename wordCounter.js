//---------------Word Counter----------------
module.exports = (str) => {
  let characters = str.length;
  let words = str.split(" ").length;
  let spaceRemover = str.trimEnd();
  let splited = str.replace(/ +/g, "");
  console.log(`Number of characters in a string is ${characters}`);
  console.log(` Numbers of words is ${words}`);
  console.log(`${spaceRemover}`);
  console.log(`words without extra spaces ${splited.length}`);
};
