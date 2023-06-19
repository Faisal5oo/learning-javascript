//---------------Word Counter----------------
module.exports = (str) => {
  let characters = str.length;
  console.log(`Number of characters in a string is ${characters}`);
  let words = str.split(" ").length;
  console.log(` Numbers of words is ${words}`);
  let spaceRemover = str.trimEnd();
  console.log(`${spaceRemover}`);
  let splited = str.replace(/ +/g, "");

  console.log(`words without extra spaces ${splited.length}`);
};
