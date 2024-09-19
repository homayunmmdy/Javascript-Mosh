const numbers = arrayFormRage(1, 20);

console.log(numbers);

function arrayFormRage(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}
