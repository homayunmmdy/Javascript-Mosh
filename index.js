const numbers = [2, 3, 1];

console.log(numbers.sort());
console.log(numbers.reverse());

const courses = [
  { id: 1, name: "Nodejs" },
  { id: 2, name: "javaScript" },
];

courses.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toLocaleLowerCase();
  const nameB = b.name.toLocaleLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return;
});

console.log(courses);
