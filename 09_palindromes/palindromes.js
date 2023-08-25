const palindromes = function (string) {
    let replacedStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return replacedStr.split("").reverse().join("") == replacedStr;

};

// Do not edit below this line
module.exports = palindromes;
