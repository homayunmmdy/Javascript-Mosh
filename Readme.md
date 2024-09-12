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
let selectedColor = null //clear value of variables
```

## Dynamic type
JavaScript is Dynamic type which is type checking takes place at runtime or execution time.

```javascript 
let name = "homayounn"
name = 1
```

in this example we change the string into number and it's worked