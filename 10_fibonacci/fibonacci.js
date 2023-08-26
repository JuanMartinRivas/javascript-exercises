const fibonacci = function (num) {
    num = Number(num);
    let term1 = 1;
    let term2 = 1;
    let result = 0;

    if (num < 0) {
        result = "OOPS"
    }

    for (let i = 2; i < num; i++) {
        result = term1 + term2;
        term1 = term2;
        term2 = result
    }

    return result
};

// Do not edit below this line
module.exports = fibonacci;
