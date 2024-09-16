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