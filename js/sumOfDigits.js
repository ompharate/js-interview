const sum = (num) => {
  let newArr = Array.from(String(num), Number);
  return newArr.reduce((acc, val) => {
    return acc + val;
  }, 0);
};

console.log(sum(356));
