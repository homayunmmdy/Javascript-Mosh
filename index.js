function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

// this cricle we create below is the same as the another
Circle.call({}, 1);
//also we had apply same as call but instead of passing each of
// them explicity we pass theme in array like this
Circle.apply({}, [1, 2, 3, 4]);

