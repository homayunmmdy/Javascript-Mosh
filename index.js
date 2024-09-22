function interest(principle, rate = 3.5, year = 5) {
  return ((principle * rate) / 100) * year;
}

console.log(interest(10000));