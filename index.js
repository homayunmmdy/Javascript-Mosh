const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  // let count = 0;
  // for (element of array) {
  //   if (element === searchElement)  count++;
  // }
  // return count;

  array.reduce((a, c) => {
    const occurrence = c === searchElement ? 1 : 0;
    return a + occurrence
  }, 0);
}
