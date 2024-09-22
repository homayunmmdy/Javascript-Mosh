function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0]))
    for (key of items) return key.reduce((a, b) => a + b);
  else return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));
