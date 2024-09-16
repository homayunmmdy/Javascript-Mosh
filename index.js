// Factory Funtion
function creaateCircle(radius) {
  return {
    radius,

    draw() {
      console.log("draw");
    },
  };
}

const circle1 = creaateCircle(1);
console.log(circle1);

//Constructor Function 
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw")
  }
} 

const circle = new Circle(1);
console.log(circle)