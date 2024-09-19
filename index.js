const numbers = [1, -1, 2, 3];

const items = numbers
  .filter((value) => value >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items);
