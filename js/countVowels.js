const countW = (str) => {
  const words = str.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u"];

  const result = words.filter((char) => {
    return vowels.includes(char);
  });
  return result.length;
};

console.log(countW("hd"));
