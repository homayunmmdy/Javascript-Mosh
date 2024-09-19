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
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle);
```

## dynmaic object

objects are dynamic and you can add or remove property form it.

```javascript
const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.location = "x";
circle.draw = function () {};

delete circle.location;

console.log(circle);
```

## constructor property

every object has constructor property and that refrences the
function was used to create that object

## Function are objects

in javascript function are objects

```javascript
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
```

# Value Types VS Reference Types

value types are

- number
- string
- boolean
- symbol
- undefined
- null

reference

- object
- function
- array

in the example blew the y is store the copy of the x and next line when the x is change the value of the y won't change because it saved
the copy of the x

```javascript
let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);
```

in this example blew we create object that object is not stored in the x variable it's stored somewhere in memeroy and address of that stored in the variable and when we change the object value of x it's renfracer to value the store some where and update that value because of that the value of y is changed too

```javascript
let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x);
console.log(y);
```

<b><mark>Primitives </mark> are copied by their <mark>valuee</mark></b>
<b><mark>Objects </mark> are copied by their <mark>reference</mark></b>

## Enumerating Properties of an Object

object are not iterable so we can not use for of for object we use
for in for objects
also some hidden way to iterate over the objects like this

```javascript
for (let key of Object.keys(circle)) console.log(key);

for (let key of Object.entries(circle)) console.log(key);
```

also for checking the property is exist in the object or not we can use in

```javascript
if ("radius" in circle) console.log("yes");
```

## clone the object

we three way that you see in the code below

```javascript
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//--------- 1 -------------
const another1 = {};

for (let key in circle) another1[key] = circle[key];

//--------- 2 -------------
const another2 = Object.assign(
  {
    color: "yellow",
  },
  circle
);

//--------- 3 -------------
const another3 = { ...circle };

console.log(another3);
```

## Math Object

object that provides mathematical functions and constants

## String Object

used to represent and manipulate a sequence of characters

```javascript
const message = "hi homayoun";

console.log(message.toUpperCase());
console.log(message.length);
```

## template literal

```javascript
const name = "Homayayoun";
const message = `Hi ${name}
How are you`;

console.log(message);
```

## Date Object

represent a single moment in time in a platform-independent format

```javascript
const now = new Date();

const future = now.setFullYear(2026);

console.log(future);
```

### Exercise 1- Address Object

```javascript
const address = {
  street: "Wall Street",
  city: "New York City",
  zipCode: 10001,
};

function ShowAddress(address) {
  for (key in address) console.log(key, address[key]);
}

ShowAddress(address);
```

## Exercise- Factory and Constructor Function

```javascript
const address1 = addressFF("Wall Street", "NYC", 1001);
const address2 = new AddressCF("Wall Street", "NYC", 1001);

function addressFF(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function AddressCF(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}
```

### Exercise 3- Object Equality

```javascript
const address1 = new Address("Wall Street", "NYC", 1001);
const address2 = new Address("Wall Street", "NYC", 1001);
const address3 = address1;

console.log("are Equal", areEqual(address1, address2));
console.log("are Same", areSame(address1, address2));
console.log("are Same2", areSame(address1, address3));

function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}
```

### Exercise 4- Blog Post Object

```javascript
const Post = {
  title: "Biggest Mistake in Tech Industry",
  body: "This is the sample text for the body of this great blog",
  auth: "Homayoun",
  views: 2000,
  comments: [
    { name: "John", body: "Great Article" },
    { name: "Alex", body: "Perfect Article" },
  ],
  isLive: true,
};

console.log(Post);
```

### Exercise 5- Constructor Functions

```javascript
let post = new DraftPost("a", "b", "c");

console.log(post);

function DraftPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comments = [];
  this.isLive = false;
}
```

### Exercise 6- Price Range Objects

```javascript
let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];
```

# Array

## Adding Element

when we declare variable object or anything with const we can't reasign to something else but we can modified them like add or remove something inside of it.

```javascript
const numbers = [3, 4];
// End
numbers.push(5, 6);
// Beginning
numbers.unshift(1, 2);
// Middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);
```

## Finding Elements (Primitives)

```javascript
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(1));
```

## Finding Elements (Reference Types)

```javascript
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

const course = courses.find(function (course) {
  return course.name === "a";
});
const courseIndex = courses.findIndex(function (course) {
  return course.name === "a";
});

console.log(course);
console.log(courseIndex);
```

## Arrow function

short form of the function that dose not have own this and inherit from the parent

```javascript
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

const course = courses.find((course) => course.name === "a");
```

## Removing Element

```javascript
const numbers = [1, 2, 3, 4];

// End
console.log(numbers.pop()); // 4

// Beginning
console.log(numbers.shift()); // 1

// Middle
console.log(numbers.splice(1, 1)); // [3]
```

## Emptying an Array

solution one and two are best and last is the worest

```javascript
let numbers = [1, 2, 3, 4];
let another = numbers;

// solution 1
// number = [];

// solution 2
// numbers.length = 0

// solution 3
// numbers.splice(0,numbers.length)

// solution 4
// while (numbers.length > 0) numbers.pop();

console.log(numbers);
console.log(another);
```

## Combining two array

```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

const slice = combined.slice();

console.log(combined);
console.log(slice);
```

we have better way to copy with spread and you had more flexiablity

```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, "a", ...second, "b"];

console.log(combined);
```

## Iterating an Array

```javascript
const numbers = [1, 2, 3];

for (let number of numbers) console.log(number);

numbers.forEach((number, index) => console.log(index, number));
```

## Joining Arrays

```javascript
const numbers = [1, 2, 3];

console.log(numbers.join(','))

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combine = parts.join('-');
console.log(combine)
```

## sorting array 

```javascript
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

```