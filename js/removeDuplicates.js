const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([4, 6, 2, 6, 8]));
