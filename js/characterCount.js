var charCount = function (str, char) {
    if (str.trim().length < 0) {
        return 0;
    }
    var newStr = str.toLowerCase();
    var newChar = char.toLowerCase();
    var count = newStr.split("").reduce(function (accum, currChar) {
        return currChar === newChar ? accum + 1 : accum;
    }, 0);
    return count;
};
console.log(charCount("Hello World", "o"));
