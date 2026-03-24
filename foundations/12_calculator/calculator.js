const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current)
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	
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
