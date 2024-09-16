# JavaScript Mosh Course Note

## Variables

we use a variable to store data temporarily.
in es6 we have two way to decalre a variable one with
<b>let : </b> when the value can change in future
<b>const : </b> when the value must not be changed

### variable names

- cannot be a reserved keyword like let , if
- should be meaningful not a , b ,x , y , z
- cannot start with number (1name)
- cannot contain a space or hyphen (-)
- are case-sensitive

## Primitive values

data that are stored directly in a variable include

- number
- boolean
- string
- null
- undefined

```javascript
let name = "Homayoun"; // String Literal
let age = 18; // Number Literal
let isApproved = true; //Boolean Literal
let firstName; //undefined
let selectedColor = null; //clear value of variables
```

## Dynamic type

JavaScript is Dynamic type which is type checking takes place at runtime or execution time.

```javascript
let name = "homayounn";
name = 1;
```

in this example we change the string into number and it's worked

## Reference data

dynamic in nature don not have fixed size include

- object
- array
- function

## Object

a collection of properties,

```javascript
let person = {
  name: "Homayoun",
  age: 18,
};

// Do Notation
person.name = "John";

// Bracket Notation
person["name"] = "Mary";

console.log(person);
```

## Array

global object used to store data.

```javascript
let selectedColors = ["red", "blue"];

selectedColors[2] = null;

console.log(selectedColors.length);
```

## function

a set of statements that performs a task or calculates a value

```javascript
// the name in the function is parameter
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Homayoun", "Mohammadi"); //this argumen
```

# Operators

## arithmetic operators

enable the execution of mathematical calculations between variables or values

```javascript
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment(++)
console.log(x++);
// Dcrement(++)
console.log(--x);
```

## assignment Operators

```javascript
let x = 10;

x = x + 5;
// here the short version of code on the top
x += 5;

x = x * 3;
// here the short version of code on the top
x *= 3;
```

## comparison operators

```javascript
let x = 10;

//Relational Operators
console.log(x > 0);
console.log(x >= 10);
console.log(x < 10);
console.log(x <= 10);

// Equality
console.log(x === 10);
console.log(x !== 10);
```

## deference strict and lose equalicy

```javascript
// Strict Equality (Type and value)
console.log(1 === 1);
console.log("1" === 1);

// Lose Equality (value)
console.log(1 === 1);
console.log("1" === 1);
console.log(true === 1);
```

```javascript
// if a customer has more thna 100 points,
// they are a 'gold' customer , otherwise,
// they are a 'silver' customer

let points = 100;
let type = points > 100 ? "gold" : "silver";
console.log(type);
```

## logicla operators

```javascript
// Logical AND (&&)
// Return true if both operands are true
let hightIncome = true;
let goodCreditScore = false;
let credit = hightIncome && goodCreditScore;
console.log(credit);

// Logincal OR (||)
// Return true if one of the operands is true
let eligibleForLoan = hightIncome || credit;
console.log(false || true);

//NOT (!)
// turn true to false and false to true
let applicationRefused = !eligibleForLoan;

console.log(applicationRefused);
```

## Falsy(false)

anything that is not Falsy -> Truthy

```javascript
undefined, null, 0, flase, "", NaN;
```

### short-circuiting

if we had condition like this will return one because condition done and the operation will stop

```javascript
false || 1 || 2;
```

# control flow

## if and esle

```javascript
// Hour
// if is between 6am to 12pm : Good Morning1
// if it is between 12pm and 6pm : Good afternoon!
// otherwise : Good evening!

let hour = 19;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!");
}
```

## switch and case

```javascript
let role = "moderator";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("unkown User");
}
```

# Loops

## For

```javascript
for (let i = 0; i < 5; i++) {
  console.log("hi");
}
```

## while loop

```javascript
let i = 0;
while (i <= 5) {
  console.log("Hello");
  i++;
}
```

## do while loop

same as while but it will render once even the condition is failed

```javascript
let i = 9;
do {
  console.log("Hello");
  i++;
} while (i <= 5);
```

## for in

Loops the properties of an object

```javascript
const person = {
  name: "Homayoun",
  age: 18,
};

for (let key in person) {
  console.log(key, person[key]);
}
```

example in the array we have new for of specificy for arry too

```javascript
const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}
```

## for of

Loops the values of any iterable

```javascript
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
```

## break and continue keywords

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log("The number is " + i);
}
```

### Exercise

write function that takes two numbers and return the
maximum of the two

```javascript
function max(a, b) {
  return a > b ? a : b;
}

let number = max(59, 10);
console.log(number);
```

### isLandscape example

return true if is landscape which mean width is bigger than the heihgts otherwise return false

```javascript
function isLandscape(width, height) {
  return width > height;
}

console.log(isLandscape(500, 400));
```

### Fizz buzz

```javascript
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => input
// Not  a number => "Not a number"
const output = fizzBuzz(15);
console.log(output);
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";

  return input;
}
```

### check speed example

```javascript
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -< suspended
checkSpeed(130);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    console.log("license suspended");
  } else {
    console.log("Points", points);
  }
}
```

### list of the numbers example

```javascript
function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

showNumber(10);
```

### Count Truthy

function get array and chek the truthy elements and return the length of them

```javascript
let array = [1, 2, 3, 0, undefined, null];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
```

### showProperties

this function get object and just return the properties that had
string value

```javascript
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
```

### sum

```javascript
console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  return sum;
}
```

### Exercise - Grade

```javascript
const marks = [90, 70, 80];

console.log(claculateGrade(marks));
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function claculateGrade(mark) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let mark of array) sum += mark;
  return sum / array.length;
}
```

### populare showStart

```javascript
showStart(12);

function showStart(rows) {
  for (let row = 0; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
```

### isPrime example

```javascript
showPrimes(20);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
```

# Objects in details

## Object Literal syantax

object is collections of keys and values are higly related
we call variables inside object properties
and functions inside of the object we called method

```javascript
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};
```

## factory function

function that returns an object. It's called a factory function because it creates and returns a new object each time it's called, just like a factory creates and produces new products.
```javascript
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
```

## Constructor Function 
a special type of function in programming that is used to create objects

```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw")
  }
} 

const circle = new Circle(1);
console.log(circle)
```