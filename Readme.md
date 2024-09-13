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
if(hour >= 6 &&  hour < 12) {
    console.log("Good Morning!");
}else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon!")
}else {
    console.log('Good Evening!')
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
for(let i = 0;i < 5;i++) {
    console.log("hi")
}
```

## while loop
```javascript
let i = 0;
while(i <= 5) {
    console.log("Hello");
    i++
}
```

## do while loop
same as while but it will render once even the condition is failed
```javascript
let i  = 9;
do {
    console.log("Hello");
    i++;
}while (i <= 5)
```