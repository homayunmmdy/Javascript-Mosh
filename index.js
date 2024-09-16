const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.location = "x";
circle.draw = function () {};

delete circle.location;

console.log(circle);
