const numbers = [1, 2, 3, 1, 4];

const output = expcept(numbers, [1]);

console.log(output);

function expcept(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) output.push(element);
  }
  return output;
}
