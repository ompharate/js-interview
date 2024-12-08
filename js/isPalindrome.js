const isPalindrome = (str) => {
  const newStr = str.toLowerCase();
  let r_str = newStr.split("").reverse().join("");
  if (r_str !== newStr) return false;
  return true;
};

console.log(isPalindrome("maam"));
