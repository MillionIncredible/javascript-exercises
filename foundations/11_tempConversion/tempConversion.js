const convertToCelsius = function (fahrenheit) {
  return roundToDecimal((fahrenheit - 32) / 1.8);
};

const convertToFahrenheit = function (celsius) {
  return roundToDecimal(celsius * 1.8 + 32);
};

function roundToDecimal(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
