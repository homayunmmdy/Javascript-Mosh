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

console.log(numbers.join(","));

const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);

const combine = parts.join("-");
console.log(combine);
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

## Testing the Elements of an Array

```javascript
const numbers = [2, -1, 3, 1];

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(allPositive);
```

## filtering the array

```javascript
const numbers = [2, -1, 3, 1];

const filtered = numbers.filter((value) => value >= 0);

console.log(filtered);
```

## Mapping an array

rember map and filter all just create new array and modified that
they not change the main array

```javascript
const numbers = [2, -1, 3, 1];

const filtered = numbers.filter((value) => value >= 0);

const items = filtered.map((n) => "<li>" + n + "<li>");

const html = "<ul>" + items.join("") + "</ul>";

console.log(html);
```

another example

```javascript
const numbers = [1, -1, 2, 3];

const items = numbers
  .filter((value) => value >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items);
```

## Reducing an Array

if you don't provide the second element it will pick the first to starter

```javascript
const numbers = [10, -1, 2, 3];

let sum = 0;
for (let n of numbers) sum += n;

console.log(sum);

// a = 0 , c = 1 => a = 1
// a = 1 , c = -1 => a = 0
// a = 0 , c = 2 => a = 2
// a = 2 , c = 3 => a = 5
const result = numbers.reduce((a, c) => a + c);

console.log(result);
```

## Exercise 1- Array from Range

```javascript
const numbers = arrayFormRage(1, 20);

console.log(numbers);

function arrayFormRage(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}
```

## Exercise 2- Includes

```javascript
const numbers = [1, 2, 3, 4];

function Myincludes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

console.log(Myincludes(numbers, 4));
```

## Exercise 3- Except

```javascript
const numbers = [1, 2, 3, 1, 4];

const output = expcept(numbers, [1]);

console.log(output);

function expcept(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) output.push(element);
  }
  return output;
}
```

## Exercise 4- Moving an Element

```javascript
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -2);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid Offset");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);
  return output;
}
```

## Exercise 5- Count Occurrences

```javascript
const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  // let count = 0;
  // for (element of array) {
  //   if (element === searchElement)  count++;
  // }
  // return count;

  array.reduce((a, c) => {
    const occurrence = c === searchElement ? 1 : 0;
    return a + occurrence;
  }, 0);
}
```

## Exercise 6- Get Max

```javascript
const numbers = [1, 2, 3, 4, 1, 5];

const count = getMax(numbers);

console.log(count);

function getMax(array) {
  if (array.length === 0) return undefined;

  // let max = array[0];
  // for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];

  // return max;

  return array.reduce((a, b) => (a > b ? a : b));
}
```

## Exercise 7- Movies

```javascript
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
```

# Functions

## Function Declaration and Expression

```javascript
// Function Declaration
function walk() {
  console.log("walk");
}

// Function Expression
let run = function () {
  console.log("walk");
};
```

### Difference Function Declaration and Expression

- in function declaration we call it before declration and will hosted by javascript engine it's mean it's move to top.

## Arguments

```javascript
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 19));
```

## Rest Operations

```javascript
function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 19));
```

## Default Parameter

make sure if you add default value your must define for all of the arguments after that

```javascript
function interest(principle, rate = 3.5, year = 5) {
  return ((principle * rate) / 100) * year;
}

console.log(interest(10000));
```

## Getter and Setters

getter method returns its value while a setter method sets or updates its value

```javascript
const person = {
  firstName: "Homayoun",
  lastName: "Mohammadi",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// getter => access properties
// setter => change (mutate) them

person.fullName = "John Smith";

console.log(person.fullName);
```

## Try and Catch

```javascript
const person = {
  firstName: "Homayoun",
  lastName: "Mohammadi",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// getter => access properties
// setter => change (mutate) them

try {
  person.fullName = "";
} catch (e) {
  alert(e);
}

console.log(person.fullName);
```

## Local Vs Global Scope

Variables with global scope are available from all other scopes within the JavaScript code. Variables with local scope are available only within a specific local context and are created by keywords, such as var , let , and const .
avoid create global as much as possible.

```javascript
const color = "red";
function start() {
  const message = "hi";
  const color = "blue";
  console.log(color);
}

function stop() {
  const message = "bye";
}

start();
```

## var vs let

the scope of the var is not limit the scope of the block. It's limited to the function and as an exmaple when we log the i we don't
see any error.

var => function-scoped
let,const => block-scoped

```javascript
function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
}

start();
```

another example now color is visible here

```javascript
function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      var color = "red";
    }
  }

  console.log(color);
}
```

another probles is that when we defined the global variable using var it's attatch to the window object now if we write window.color we will see read in browser

```javascript
var color = "red";
let age = 30;
```

# This in javascript

This reference the Object is excuting the current function
if we call this inside method it's refer to object

```javascript
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};
```

if we use this inside the function it's refer to global value

```javascript
// function -> global (window, global)
function playVideo() {
  console.log(this);
}
```

but in construtcure function it's refer into new object

```javascript
function Video(title) {
  this.title = title;
  console.log(this);
}
```

look at this example

```javascript
const tags = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
    });
  },
};
```

this is refer into global , window becuase it's inside the function but if we rpelace that with arrow function we will get the object because arrow function dose not have own this and it's refer the parent

some other way to access the title and show next to each tag

```javascript
const tags = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};
```

using the callback and second argument of hte forEach and in the second it's refer the object

## Change the value of this

imagine the scond argument of the forEach is not exist
this one way but don't use this approach

```javascript
const tags = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};
```

```javascript
function playVideo(a, b) {
  console.log(this);
}

playVideo.call({ name: "homayoun" }, 1, 2);
playVideo.apply({ name: "homayoun" }, [1, 2]);
playVideo.bind({ name: "homayoun" }, [1, 2]);
```

now in this example we change the refer of this from the global , window into this object the only different of call apply is the way that we pass the data for apply we must pass it as in array.

bind: but this bind dose not call playVideo Function it return new function and put into this function permenetly now matter how we call this allways point the object we decalse ower there.

here is bind method the fix the solution

```javascript
const tags = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

tags.showTags();
```

we can solve it by arrow function because it's inherit from parents

```javascript
const tags = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

tags.showTags();
```

### Exercise 1- Sum of Arguments

```javascript
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0]))
    for (key of items) return key.reduce((a, b) => a + b);
  else return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));
```

### Exercise 2- Area of Circle

```javascript
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area)
```

### Exercise 3- Error Handling

```javascript
try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Inalid array.");

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

```