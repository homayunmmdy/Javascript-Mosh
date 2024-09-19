const numbers = [2, -1, 3, 1];

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(allPositive)