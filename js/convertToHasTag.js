function convertToHas(str) {
    if (str.length > 280 || str.trim().length === 0)
        return false;
    var words = str.trim().split(" ");
    var upperCase = words.map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    });
    return "#" + upperCase.join('');
}
console.log(convertToHas("my name is om pharate"));
