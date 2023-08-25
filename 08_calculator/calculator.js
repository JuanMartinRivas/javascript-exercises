const add = function (num1, num2) {
  let result = num1 + num2;

  return result
};

const subtract = function (num1, num2) {
  let result = num1 - num2;

  return result
};

const sum = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  };

  return result
};

const multiply = function (nums) {
  let result = 1;

  for (let i = 0; i < nums.length; i++) {
    result = result * nums[i];
  };

  return result
};

const power = function (num1, num2) {
  let result = Math.pow(num1, num2);

  return result
};

const factorial = function (num) {
  let result = 1;

  if (num === 0 || num === 1) {
    result = 1
  } else {
    for (let i = num; i >= 1; i--)
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
