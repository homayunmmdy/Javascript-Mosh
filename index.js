const numbers = [10, -1, 2, 3];

let sum = 0;
for (let n of numbers) sum += n;

console.log(sum);

// a = 0 , c = 1 => a = 1
// a = 1 , c = -1 => a = 0
// a = 0 , c = 2 => a = 2
// a = 2 , c = 3 => a = 5
const result = numbers.reduce((a, c) => a + c);

console.log(result);
