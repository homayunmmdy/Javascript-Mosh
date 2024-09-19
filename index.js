const numbers = [1, 2, 3, 4];

function Myincludes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

console.log(Myincludes(numbers, 4));
