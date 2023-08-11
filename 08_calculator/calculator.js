const add = function (num1, num2) {
  let result = num1 + num2;

  return result
};

const subtract = function (num1, num2) {
  let result = num1 - num2;

  return result
};

const sum = function (nums) {
  let result;

  for (let i = 0; i < nums.length; i++ ) {
    result += nums[i];
  };

  return result
};

const multiply = function (num1, num2) {
  let result = num1 * num2;

  return result
};

const power = function (num1, num2) {
  let result = Math.pow(num1, num2);

  return result
};

const factorial = function (num) {
  let result;

  if (num === 0) {
    result = 1
  } else {
    for (let i = 2; i <= num; i++)
      result = result * i;
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
