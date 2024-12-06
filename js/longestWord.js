const findLongestWord = (str) => {
  if (str.trim().length === 0) return false;

  strArr = str.split(" ");
  words = strArr.sort((a, b) => a.length - b.length);
  return words.at(-1)
};

console.log(findLongestWord("watch om pharate and vidoes"));
