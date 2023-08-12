const removeFromArray = function (arr) {
    let result = arr;
    for (y = 1; y < arguments.length; y++) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === arguments[y]) {
                arr.splice([i], 1);
                result = arr;
            }
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
