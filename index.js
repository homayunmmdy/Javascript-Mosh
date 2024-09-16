const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//--------- 1 -------------
const another1 = {}

for (let key in circle) 
  another1[key] = circle[key]

//--------- 2 -------------
const another2 = Object.assign({
  color: 'yellow'
}, circle);

//--------- 3 -------------
const another3 = {...circle}

console.log(another3)