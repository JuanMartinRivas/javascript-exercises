const convertToCelsius = function (temp) {
  let conversion = (temp - 32) * (5 / 9);
  let result = Math.round(conversion * 10) / 10

  return result
};

const convertToFahrenheit = function (temp) {
  let conversion  = temp * (9/5) + 32;
  let result = Math.round(conversion * 10) / 10

  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
