const reverseString = function(string) {
    let array = string.split("");
    let revArr = array.reverse();
    let result = revArr.join("");

    return result;
}

// Do not edit below this line
module.exports = reverseString;
