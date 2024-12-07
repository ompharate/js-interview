function convertToHas(str: String) {
  if (str.length > 280 || str.trim().length === 0) return false;
  const words = str.trim().split(" ");
  
  const upperCase = words.map((word)=>{
    return word.replace(word[0],word[0].toUpperCase());
  })


  return "#"+upperCase.join('');

}

console.log(convertToHas("my name is om pharate"));
