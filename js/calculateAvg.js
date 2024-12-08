const calculateAverage = (arr) => {
  const total = arr.reduce((acc, val) => {
    return acc + val;
  }, 0);
  const average = total / arr.length;
  return average;
};

console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3