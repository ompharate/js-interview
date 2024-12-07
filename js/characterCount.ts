const charCount = (str: String, char: String): Number => {
  if (str.trim().length < 0) {
    return 0;
  }

  const newStr = str.toLowerCase();
  const newChar = char.toLowerCase();

  const count = newStr.split("").reduce((accum, currChar) => {
    return currChar === newChar ? accum + 1 : accum;
  }, 0);

  return count;
};

console.log(charCount("Hello World", "o"));
