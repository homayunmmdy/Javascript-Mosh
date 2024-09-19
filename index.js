const movies = [
  { title: "a", year: 2024, rating: 4.5 },
  { title: "b", year: 2024, rating: 4.7 },
  { title: "c", year: 2024, rating: 3 },
  { title: "d", year: 2023, rating: 4.8 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const titles = movies
  .filter((m) => m.year === 2024 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
