# Javascript and Java

- java ----> objects are class based

- javascript ----> objects are prototype based

    - prototype has a dynamic inheritance ---> individual objects can ```inherit from different other objects```...

- JavaScript is a very free-form language compared to Java. You do ```not have to declare all variables, classes, and methods.``` You do not have to be concerned with whether methods are ```public, private, or protected, and you do not have to implement interfaces```. Variables, parameters, and function ```return types are not explicitly typed.```

- properties and methods can be added dynamically via prototype mechanism.

- DOM defines how ```document objects are exposed``` to your script. DOM is like a door which opens the way for its own objects. Javascript reaches these objects using DOM...

- In the web console anything written is evaluated with ``` console.log(eval(<expression>))```.

- JS is case sensitive...

- ASI : Automatic Semicolon Insertion

- hashbang -----> ```#!/usr/bin/env node```

end
-------------------------------------------------------


# Declerations

- var -----> declares a variable ----> this can be both ```local (within a function) and global``` depending on the context.

    - example :
	```javascript 
    if (true) {
        var x = 5;
    }
    console.log(x);  // x is 5
    ```

- let -----> declares a block-scoped variable

    - example :
	```javascript 
    if (true) {
        let y = 5;
    }
    console.log(y);  // ReferenceError: y is not defined
    ```

- ```const``` ---> declares a constant variable

- names of variables, functions or properties are called ```identifiers```.

- identifiers can contain ```$, _ and digits``` but ```cant start with a digit```.

- ```sometimes it is possible to parse strings into identifiers```

- ```ISO 8859-1``` letters can be used in variables...

- ```x=44``` ----> undeclared global variable... ---> ```Undeclared global variables can often lead to unexpected behavior```

- in aritmethic operation ```undefined``` causes ```NaN```, ```null``` causes ```0```

- ```hoisting``` is reaching a variable although it's declared after the reach... ---> hoisted variables always return ```undefined```.

- ```let and const``` causes ```ReferenceError``` when hoisted...

- 
```javascript 
/* Function declaration */

foo(); // "bar"

function foo() {          ---------------------> FUNCTION DECLARATION RUNS
  console.log('bar');
}


/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function() {      ---------------------> FUNCTION EXPRESSION CAUSES ERROR
  console.log('bar2');
};

```

- Global variables are properties of the ```global object``` which is ```window``` in web pages. ---> ```window.variable```

- Consequently, you can access global variables declared in one window or frame from another window or frame by ```specifying the window or frame name```. For example, if a variable called ```phoneNumber``` is declared in a document, you can refer to this variable from an iframe as ```parent.phoneNumber```. (parent --> window)

- ```const``` cannot be re-declared or assigned a new value. It should be initialized with a value

- ```const``` objects' properties can be changed...


end
---------------------------------------------------------------


# Data Structures and Types

- There 8 built-in data types in JS:
    - null
    - undefined
    - Boolean
    - String
    - Number
    - BigInt ----> Ex: 9007199254740992n  ---> notice ```n``` at the end.
    - Symbol ----> Instances are unique and immutable
    - Object

- ```Other than object```, all these types are ```primitive and immutable```

- JS is ```dynamically typed```

- 
```
    '37' - 7   // 30
    '37' + 7   // "377"
```


## Converting strings to numbers

- ```parseInt(), parseFloat()``` ---> parseInt(101, 2) [second parameter is the base number system] --> gives 5

- ```+'1.1' + +'1.1'```  // 2.2 ----> plus signs make the strings number

end
---------------------------------------------


# Literals

- Literals are values whose data types are define with the symbols specified within its body.

    - Array literals
    - Boolean literals
    - Floating-point literals
    - Numeric literals
    - Object literals
    - RegExp literals
    - String literals

- ```comma at the end of an array``` literal is omitted.

- ```Do not use an object literal at the beginning of a statement! This will lead to an error (or not behave as you expect), because the { will be interpreted as the beginning of a block.```

- number can be a ```property key``` and another object can be declared inside the object.
```javascript 
// -------> normally variables [cannot start with a number]
var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };   

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

- Object property names can be ```any string```, ```including the empty string```. If the property name would not be a valid JavaScript identifier or number, ```it must be enclosed in quotes.```


## Enhanced Object Literals

- In ES2015, object literals are extended to support ```setting the prototype at construction, shorthand for foo: foo assignments, defining methods, making super calls, and computing property names with expressions.```

	- example :
	```javascript 
	var obj = {
		// __proto__
		__proto__: theProtoObj,
		
		// Shorthand for ‘handler: handler’
		handler,
		
		// Methods
		toString() {
		
			// Super calls
			return 'd ' + super.toString();
		},
		
		// Computed (dynamic) property names
		[ 'prop_' + (() => 42)() ]: 42
	};
	```


## RegExp Literals

- regexp literals are define ```in between forward slashes.``` ----> ```let abc= "/ab+c/"```


## String Literals

- quotes ```recognize the escape characters```

- string literal uses the ```String Object's methods and properties``` then ```discards the object``` created for that purpose.

- [`] - back tick is also used after ES6

- 
```javascript 
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// String interpolation
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`

// Construct an HTTP request prefix used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```


## Special Characters in Strings

- 

| Character | Meaning |
|-----------|------------|
| \0 | Null Byte |
| \b | Backspace |
| \f | Form feed |
| \n | New line |
| \r | Carriage return |
| \t | Tab |
| \v | Vertical tab |
| \' | Apostrophe or single quote |
| \" | Double quote |
| \\ | Backslash character |
| \XXX | The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377.
For example, \251 is the octal sequence for the copyright symbol. |
| \xXX | The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF.
For example, \xA9 is the hexadecimal sequence for the copyright symbol. |
| \uXXXX | The Unicode character specified by the four hexadecimal digits XXXX.
For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences. |
| \u{XXXXX}	| Unicode code point escapes. For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04. |

end
---------------------------------------------



# Control Flow and Error Handling


## Block Statement

- Statements can be grouped with that...
```javascript 
{
  statement_1;
  statement_2;
  ⋮
  statement_n;
}
```


## Conditional Statements

- There are two conditional statements: ----> ```if and switch```

- 
```javascript 
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
} 
```

- If you need to use assignment operator together with if clause :
```javascript 
// notice the nested parantheses...
if ((x = y)) {    
  /* statements here */
}
```

- Falsy Statements:
	- false
	- undefined
	- null
	- 0
	- NaN
	- the empty string ("")

- All other values ```including all objects``` evaluate to ```true``` when passed to a conditional statement.

- A switch statement
```javascript 
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}
```

- ``` DONT FORGET TO PUT BREAK TO THE CASES```


## Exception Handling

- ```throw statement```
```javascript 
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
```

- If the ```finally block returns a value```, this value ```becomes the return value of the entire try…catch…finally production```, regardless of any return statements in the try and catch blocks:
```javascript 
function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;    // this return statement is suspended
                    // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false;   // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now  
  console.log(5);   // not reachable
}
console.log(f()); // 0, 1, 3, false
```

- nested try-catch blocks can be used...

- Generally errors have a ```name and message``` property...

end
---------------------------------------------


# Loops and Iteration

- Statements in loops:
	- for statement
	- do...while statement
	- while statement
	- labeled statement
	- break statement
	- continue statement
	- for...in statement
	- for...of statement


## for Statement

- outline of for statement 
```javascript 
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```

- if the condition is omitted the overall condition is always ```true```.


## do .. while Statement

- outline :
```javascript 
do
  statement
while (condition);
```

- do..while is at least ```executed once```

- example :
```javascript 
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```


## while Statement

- example :
```javascript 
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
``` 


## Label Statement

- label is used together with ```break and continue```
- example :
```javascript 
markLoop:
while (theMark === true) {
   doSomething();
}
```


## break Statement

- terminates the ```innermost``` loop 

- example with label :
```javascript 
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;       ---------> label here... 
    } else if (z === 10) {
      break;
    }
  }
}
```


## continue Statement

- ```continues with next iteration```.

- example with label :
```javascript 
let i = 0;
let j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) === 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }
```


## for..in Statement

- example :
```javascript 
function dump_props(obj, obj_name) {
  let result = '';
  for (let i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}
```

- when used ```in arrays``` it also iterates over the indexes which are ```not a number```

- ```for..in iterates over the keys```


## for..of Statement

- ```for..of statement iterates over property values``` of ```arrays, maps, sets and function arguments.```

end
---------------------------------------------------


# Functions

- ```primitive parameters are passed to the function by value``` others are ```passed by reference``` 

- ```function (){}``` is an anonymous function...

- functions can be ```passed as a parameter``` to another function

- Calling the function constructor directly can create functions dynamically but suffers from security and similar (but far less significant) performance issues to eval. However, unlike eval, the Function constructor creates functions that execute in the global scope only.

- ```method``` is a function that is also a ```property of an object...```

- ```hoisting``` works with ```functions declarations``` but ```not with function expressions```

- a function defined in the global scope ```can access all variables defined in the global scope```. A function defined ```inside another function``` can also access all variables defined in its ```parent function, and any other variables to which the parent function has access.```



## Recursion

- A function can refer to and call itself. There are ```three ways for a function to refer to itself```:

	- The function's name
	- arguments.callee
	- An in-scope variable that refers to the function

- example :
```javascript 
var foo = function bar() {
   // statements go here        ----------> bar(), arguments.callee(), foo() can produce a recursive func.
}
```


## Nested Functions and Closures

- Nested (inner) function is ```private``` to its containing (outer) function

- example :
```javascript 
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3);  // Think of it like: give me a function that adds 3 to whatever you give
                         // it
result = fn_inside(5);   // returns 8
result1 = outside(3)(5); // returns 8
```

- ```closure``` is the ```scope``` of a function inside another function. Closures can contain ```multiple scopes```.

- Since ```each call provides potentially different arguments```, a ```new closure``` is created ```for each call``` to outside. The memory can be ```freed only when the returned inside is no longer accessible```.

- if there is a name conflict in variable names ```inner-most variable takes precedence```. 

- closures provide an ```encapsulation like environment```.

- example for encapsulation :
```javascript 
var getCode = (function() {
  var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
  
  return function() {
    return apiCode;
  };
})();

getCode();    // Returns the apiCode
```


## Argument Object

- Using the arguments object, you ```can call a function with more arguments than it is formally declared``` to accept.

- it s an array-like object. its properties are numbers.

- ```arguments.length``` is a property of argument object.


## Default Parameters

- In the past, the general ```strategy for setting defaults was to test parameter values in the body of the function``` and assign a value if they are undefined.

- example :
```javascript 
function x (){
    console.log("selam")
}

function x (message){
    console.log(message)
}

x()           ------------> [calls lately defined x function]
```

## Rest Parameters

- example :
```javascript 
function multiply(multiplier, ...theArgs) {         --------> ...theArgs is an array
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```


## Arrow Methods

- It has a ```shorter syntax``` and ```doesn't have this binding.``` ----> NO ```this, super, arguments,   new.target```

- Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, ```undefined in strict mode function calls```, the ```base object if the function is called as an "object method",``` etc.). This proved to be less than ideal with an object-oriented style of programming.

	- so you need to do something like this ```self = this``` and ```use this self object in the inner function.```

	- or you can ```use an arrow function``` which ```doesnt have its own this``` object.

	-   // If you construct the returning function then you can reach its properties. Otherwise its 			   properties are not reachable... They are not exposed to outside world... And you should use this keyword when declaring them...

- examples about this keyword :
```javascript
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this` 
    // as the global object (this should be because of the setInterval function), which is different from the `this` 
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();
```

- In the above example inner this keyword owns this property as its own but here this keyword goes outside and finds the outer this keyword :
```javascript
function Person() {
  var self = this; // Some choose `that` instead of `self`. 
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
```

- An arrow function does not have its own this; the this value of the enclosing execution context is used. Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function:

	- example :
	```javascript
	function Person() {
	this.age = 0;

	setInterval(() => {
		this.age++; // |this| properly refers to the person object
	}, 1000);
	}

	var p = new Person();
	```


## Predefined Methods

- eval()
The eval() method evaluates JavaScript code represented as a string.

- uneval()
The uneval() method creates a string representation of the source code of an Object.

- isFinite()
The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

- isNaN()
The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015, or you can use typeof to determine if the value is Not-A-Number.

- parseFloat()
The parseFloat() function parses a string argument and returns a floating point number.

- parseInt()
The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).


end 
-----------------------------------------------



# Expressions and Operators

- Operator types :
	- Assignment operators
	- Comparison operators
	- Arithmetic operators
	- Bitwise operators
	- Logical operators
	- String operators
	- Conditional (ternary) operator
	- Comma operator
	- Unary operators
	- Relational operators

- ```binary operator``` has two operands and one operator

- ```unary operator``` has a operand and one operator

- [Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)


## Destructuring

- example :
```javascript 
var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;
```


## Comparison Operators

- loose equal ```corces the values to numeric values``` and then checks the comparison

- strict equal doesnt do that 

- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)


## Arithmetic Operators

- 1/0 equals to ```Infinity``` , 1/-0 equals to ```-Infinity```

- [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)



## Bitwise Operators

- operands are treated as they are ```32 bit zeros and ones```

- but the results are ```standard numeric values```

- [Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

- Numbers with ```more than 32 bits get their most significant bits discarded```


## Ternary Operator

- takes three operators

- ```condition ? val1 : val2```


## Comma Operator

- example :
```javascript 
var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)                                
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
```


## delete Operator

- example :                    --------> GIVES TRUE IF SUCCESSFUL...
```javascript 
delete object.property;
delete object[propertyKey];
delete property;                  // legal only within a -----------> "with" statement
```

- example :
```javascript
x = 42; // implicitly creates window.x
var y = 43;
var myobj = {h: 4}; // create object with property h

delete x;       // returns true (can delete if created implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete non-configurable properties)
delete myobj.h; // returns true (can delete user-defined properties)
```

- instead of using delete for array, you should try to ```use Array.prototype.splice() method...```


## typeof Operator

- syntax :
```javascript
typeof operand
typeof (operand)
```

- ```typeof null``` ------> returns "object"

- examples :
```javascript
typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"
```


## void Operator

- syntax :
```javascript
void (expression)
void expression
```

- returns a ```void expression```
 
## in Operator

- syntax :
```javascript
propNameOrNumber in objectName
```

- where ```propNameOrNumber``` is a ```string, numeric, or symbol expression``` representing a ```property name or array index```, and objectName is the name of an object.

- example :
```javascript
// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
var myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true
```

## instanceof Operator

- syntax :
```javascript
objectName instanceof objectType
```

- example :
```javascript
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```


## Operator Precedence

- You can ```override operator precedence by using parentheses```.

- ```logical and``` comes before ```logical or```

- [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)



## Expression

- ```valid code unit``` which resolves to a value


### this Keyword

- ```this``` is called for reaching the ```current object``` withing the context.

- can be used with "." notation and [] notation 

### new Keyword

- ```new functionName()``` creates a function object together with its properties...


### super Keyword

- syntax :

```javascript
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
```

end
--------------------------------------------------


# Numbers

- numbers between ```±2^-1022 and ±2^1023, or about ±10^−308 to ±10^308```, with a numeric precision of 53 bits. Integer ```values up to ±2^53 − 1 can be represented exactly.```

- symbolic numbers ------> ```+Infinity, -Infinity, NaN```

- BigInt is used for big numbers 

- BigInt cannot be used with Numbers

- Math functions cannot be used with BigInt

- typeof <bigint> -----> "bigint"

- when wrapped with Object() ---> gives "object"

- example :
 ```javascript
const theBiggestInt = 9007199254740991n

const alsoHuge = BigInt(9007199254740991)
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991")
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff")
// ↪ 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// ↪ 9007199254740991n
```

- example with leading zeros:
```javascript
0888 // 888 parsed as decimal
0777 // parsed as octal in non-strict mode (511 in decimal)
```

- example with the properties of Number :
```javascript
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

- built-in number methods :
	- Number.parseFloat()	
	- Number.parseInt()
	- Number.isFinite()
	- Number.isInteger()
	- Number.isNaN()
	- Number.isSafeInteger()

- methods of Number.prototype :
	- toExponential()
	- toFixed()
	- toPrecision()

- Math methods :
	- abs(), floor(), ceil(), min(), max(), random(), round(), fround(), trunc(), sqrt(), cbrt(), hypot(), sign(), pow(), exp(), expm1(), log10(), log1p(), log2(), asinh(), acosh(), atanh(), sinh(), cosh(), tanh(), asin(), acos(), atan(), atan2(), sin(), cos(), tan()

	- Math object cannot be created...


end
--------------------------------------------------------------------



# Date 

- There is ```no date data type```.

- The Date object range is ```-100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC.```

- date object :
```javascript
var dateObjectName = new Date([parameters]);
```

- date object can also be created ```without new keyword```. that gives the ```current date and time.```

- examples of different date initiations :

	- ```No parameter``` creates today's date and time. ```today = new Date();```

	- ```string parameter``` in the format : ```"Month day, year hours:minutes:seconds."``` ```var Xmas95 = new Date("December 25, 1995 13:30:00")``` - If you omit hours, minutes, or seconds, the value will be set to zero.
	
	- ```set of integer parameters``` - ```var Xmas95 = new Date(1995, 11, 25)```
	
	- ```set of integer parameters``` - ```var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);``` - year month day hour minute second

- date methods :

	- ```set methods```, for setting date and time values in Date objects.
	
	- ```get methods```, for getting date and time values from Date objects.

	- ```to methods```, for returning string values from Date objects.

	- ```parse and UTC methods```, for parsing Date strings.

- when setting days ------> consider using ```0 for the first day of the week```

- example :
```javascript
var Xmas95 = new Date('December 25, 1995');
```

- ```getMonth(), setMonth(), getFullYear(), setFullYear(), getTime()-returns miliseconds, setTime()-takes miliseconds,```

- example for parse() :
```javascript
var IPOdate = new Date();
IPOdate.setTime(Date.parse('Aug 9, 1995'));
```

- example for digital clock :
```javascript
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = '' + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = '12';
  temp += ((minute < 10) ? ':0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  temp += (hour >= 12) ? ' P.M.' : ' A.M.';
  return temp;
}
```

end
---------------------------------------------------------------------



# Text Formatting

- String ----> ```16 unsigned integer values```

- '\xA9' ----> number after x is a hexadecimal number which gives a copyright sign

- '\u00A9' ----> unicode require 4 hexadecimal number which gives a copyright sign

- example string with eval :
```javascript
const firstString = '2 + 2'; // Creates a string literal value
const secondString = new String('2 + 2'); // Creates a String object
eval(firstString); // Returns the number 4
eval(secondString); // Returns the string "2 + 2"
```

- string is an immutable array-like object :
```javascript
const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L'; // This has no effect, because strings are immutable
hello[0]; // This returns "H"
```

- ```String.fromCodePoint()``` this is used for characters like chinese or emojis (their unicode number exceeds 4 hexadecimal character) or other normal characters. you can give a ```number as a parameter, you get the character...```


## String Methods

- methods:
	- ```charAt, charCodeAt, codePointAt``` ---> Return the character or character code at the specified position in string.
	- ```indexOf, lastIndexOf```            ---> Return the position of specified substring in the string or last position of specified substring, respectively.
	- ```startsWith, endsWith, includes```  ---> Returns whether or not the string starts, ends or contains a specified string.
	- ```concat```     						---> Combines the text of two strings and returns a new string.
	- ```fromCharCode, fromCodePoint```		---> Constructs a string from the specified sequence of Unicode values. This is a method of the String class, not a String instance.
	- ```split```							---> Splits a String object into an array of strings by separating the string into substrings.
	- ```slice```							---> Extracts a section of a string and returns a new string.
	- ```substring, substr```				---> Return the specified subset of the string, either by specifying the start and end indexes or the start index and a length.
	- ```match, matchAll, replace, replaceAll, search``` ----> Work with regular expressions.
	- ```toLowerCase, toUpperCase``` 		---> Return the string in all lowercase or all uppercase, respectively.
	- ```normalize```						---> Returns the Unicode Normalization Form of the calling string value.
	- ```repeat```							---> Returns a string consisting of the elements of the object repeated the given times.
	- ```trim```							---> Trims whitespace from the beginning and end of the string.

## Template Literals

- Template literals are string literals allowing ```embedded expressions.``` You can use ```multi-line strings``` and ```string interpolation``` features with them.

	- ${expression}



## Internationalization

- The ```Intl object``` is the namespace for the ECMAScript Internationalization API, which provides language sensitive ```string comparison, number formatting, and date and time formatting.``` The constructors for ```Collator, NumberFormat, and DateTimeFormat objects``` are properties of the Intl object.


### Date Time Formatting

- example :
```javascript
const msPerDay = 24 * 60 * 60 * 1000;
 
// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;
 
console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
```

### Number Formatting

- example with currency:
```javascript
const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });
 
console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY' });
 
console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```


### Collation

- it s used for comparing and sorting the strings

- example :
```javascript
const names = ['Hochberg', 'Hönigswald', 'Holzman'];
 
const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');
 
// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '));
// logs "Hochberg, Hönigswald, Holzman"
```

end
---------------------------------------------------------------------


# Regular Expressions

- character combinations or patterns in string

- These patterns are used with the ```exec() and test() methods of RegExp```, and with the ```match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String```.

- regualar expressions can be initiated with both a ```pattern litteral and a constructor```

- examples :
```javascript
let re = /ab+c/;			  // with pattern ----------> NOTICE THAT THERE IS NO QUOTE...
let re = new RegExp('ab+c');  // with constructor
```

- /abc/ --------> looks for a word or a portion of a word ```exactly has "abc"```

- /ab*c/ -------> ```a with 0 or more b's and a c```

- ^ ---------> Matches the ```beginning of input.``` If the multiline flag is set to true, also matches immediately after a line break character. For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".

- $ ---------> Matches the ```end of input.``` If the multiline flag is set to true, also matches immediately before a line break character. For example, /t$/ does not match the "t" in "eater", but does match it in "eat".

- \b --------> one side should be a space

- [Regular Expression CheatSheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

- \* ---------> gives a litteral * that doesnt produce a special * character

- /  ---------> starts and terminates the pattern...

- example : -------> "C:\" where "C" can be any letter, you'd use /[A-Z]:\\/

- when using RegExp constructor : -----> /a\*b/ becomes new RegExp("a\\*b") create the same expression, which searches for "a" followed by a literal "*" followed by "b".


## String.replace()

- example :
```javascript
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
```

- ```g``` is for global search. it looks the whole string and returns the matched parts...

- () is used for : ----> Parentheses around any part of the regular expression pattern causes ```that part of the matched substring to be remembered.``` Once remembered, the substring can be recalled for other use.

- Methods used with RegExp :

	- exec() ----> Executes a search for a match in a string. It returns an array of information or null on a mismatch.
	- test() ----> Tests for a match in a string. It returns true or false.
	- match() ---> Returns an array containing all of the matches, including capturing groups, or null if no match is found.
	- matchAll()-> Returns an iterator containing all of the matches, including capturing groups.
	- search() --> Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
	- replace()--> Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
	- replaceAll() Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
	- split() ---> Uses a regular expression or a fixed string to break a string into an array of substrings.

- Regular Expression Flags :

	- g	------> Global search.	RegExp.prototype.global
	- i	------> Case-insensitive search.	RegExp.prototype.ignoreCase
	- m	------> Multi-line search.	RegExp.prototype.multiline
	- s	------> Allows "." to match newline characters.	RegExp.prototype.dotAll
	- u	------> "unicode"; treat a pattern as a sequence of unicode code points.	RegExp.prototype.unicode
	- y	------> Perform a "sticky" search that matches starting at the current position in the target string.

- syntax :
```javascript
var re = /pattern/flags;
or
var re = new RegExp('pattern', 'flags');
```

- example :
```javascript
var re = /\w+\s/g;
var str = 'fee fi fo fum';
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

- The behavior associated with the ```g flag``` is different when the ```.exec()``` method is used.

- example :
```javascript
var xArray; while(xArray = re.exec(str)) console.log(xArray);
// produces: 
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
```

- \d{n} -----> n number of digital characters

- (abc) -----> groups the litterals inside paranthesess

- (abc){3}---> "abcabcabc"

- (?:) ------> Non-capturing parentheses group the regex so you can apply regex operators, but do not capture anything. 


end
-------------------------------------------------------------------


# Array Object
- Creating an array :
	
	- new Array()
	- Array()
	- []

- example :
```javascript
// This...
let arr = new Array(arrayLength)

// ...results in the same array as this
let arr = Array(arrayLength)


// This has exactly the same effect
let arr = []
arr.length = arrayLength
```

- new Array(33) or Array(33) gives an array with a length of 33 undefined slots....

- you can populate arrays by assigning a value to an index

- ```Array.hasOwnProperty()``` method looks in the properties of an array

- ```Array.length = 0 ``` deletes all elements..

## Iterating over Arrays

- example :
```javascript
let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color)
})
// red
// green
// blue

// OR 

let colors = ['red', 'green', 'blue']
colors.forEach(color => console.log(color))
// red
// green
// blue

```

- Unassigned values are ```not iterated in a forEach loop.``` but are listed when undefined has been manually assigned to the element

- ```Since JavaScript elements are saved as standard object properties, it is not advisable to iterate through JavaScript arrays using for...in loops, because normal elements and all enumerable properties will be listed.```

- ```concat()``` joins two or more arrays and returns a new array.

- ```join(delimiter = ',')``` joins all elements of an array into a string.

- push(), pop()

- ```shift()``` removes the first element from an array and returns that element.

- ```unshift()``` adds one or more elements to the front of an array and returns the new length of the array.

	- example :
	```javascript
	let myArray = new Array('1', '2', '3')
	myArray.unshift('4', '5')
	// myArray becomes ["4", "5", "1", "2", "3"]
	```
- ```slice(start_index, upto_index)``` extracts a section of an array and returns a new array.

- ```splice(index, count_to_remove, addElement1, addElement2, ...)` removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

	- example :
	```javascript
	let myArray = new Array('1', '2', '3', '4', '5')
	myArray.splice(1, 3, 'a', 'b', 'c', 'd')
	// myArray is now ["1", "a", "b", "c", "d", "5"]
	// This code started at index one (or where the "2" was), 
	// removed 3 elements there, and then inserted all consecutive
	// elements in its place.
	```

- ```reverse()``` transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.

	- example :
	```javascript
	let myArray = new Array('1', '2', '3')
	myArray.reverse()
	// transposes the array so that myArray = ["3", "2", "1"]
	```

- ```sort()``` sorts the elements of an array in place, and returns a reference to the array.

	- example with custom sorting function :
	```javascript
	myArray = ["aajsdk","ofjjg", "kalid"]
	let sortFn = function(a, b) {
  	if (a[a.length - 1] < b[b.length - 1]) return -1;
  	if (a[a.length - 1] > b[b.length - 1]) return 1;
  	if (a[a.length - 1] == b[b.length - 1]) return 0;
	}
	myArray.sort(sortFn)
	// sorts the array so that myArray = ["Wind","Fire","Rain"]
	```

- ```indexOf(searchElement[, fromIndex])``` searches the array for searchElement and returns the index of the first match.

	- example :
	```javascript
	let a = ['a', 'b', 'a', 'b', 'a'] 
	console.log(a.indexOf('b'))     // logs 1

	// Now try again, starting from after the last match
	console.log(a.indexOf('b', 2))  // logs 3
	console.log(a.indexOf('z'))     // logs -1, because 'z' was not found
	```

- ```lastIndexOf(searchElement[, fromIndex])``` works like indexOf, but starts at the end and searches backwards.

- ```forEach(callback[, thisObject])``` executes callback on every array item and returns undefined.

- ```map(callback[, thisObject])``` returns a new array of the return value from executing callback on every array item.

	- example :
	```javascript
	let a1 = ['a', 'b', 'c']
	let a2 = a1.map(function(item) { return item.toUpperCase() })
	console.log(a2) // logs ['A', 'B', 'C']
	```

- ```filter(callback[, thisObject])``` returns a new array containing the items for which callback returned true.

	- example :
	```javascript
	let a1 = ['a', 10, 'b', 20, 'c', 30]
	let a2 = a1.filter(function(item) { return typeof item === 'number'; })
	console.log(a2)  // logs [10, 20, 30]
	```

- ```every(callback[, thisObject])``` returns true if callback returns true for every item in the array.

	- example :
	```javascript
	function isNumber(value) {
	return typeof value === 'number' 
	}
	let a1 = [1, 2, 3]
	console.log(a1.every(isNumber))  // logs true
	let a2 = [1, '2', 3] 
	console.log(a2.every(isNumber))  // logs false
	```

- ```some(callback[, thisObject])``` returns true if callback returns true for at least one item in the array.

- ```reduce(callback[, initialValue])``` applies callback(accumulator, currentValue[, currentIndex[, array]]) for each value in the array for the purpose of reducing the list of items down to a single value.  The reduce function returns the final value returned by callback function. 

	- example :
	```javascript
	let a = [10, 20, 30]
	let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
	console.log(total) // Prints 60
	``` 

- ```reduceRight(callback[, initialValue])``` works like reduce(), but starts with the last element.

### Array-Likes 

- example :
```javascript
Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr)
})
```

```javascript
function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}
```

end 
-----------------------------------------------------

# Keyed Collections


## Map

- example :
```javascript
let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0 
```

- Map objects, however, have a few more advantages that make them better maps :

	- The ```keys of an Object``` are ```Strings or Symbols```, where they can be of ```any value for a Map```.

	- You can get the ```size of a Map easily```, while you have to manually keep track of size for an Object.

	- The ```iteration of maps``` is in ```insertion order``` of the elements.

	- An Object has a prototype, so there are default keys in the map. (This can be bypassed using map = Object.create(null).)

- These three tips can help you to decide whether to use a Map or an Object:

	- Use maps over objects ```when keys are unknown until run time```, and when all keys are the same type and all values are the same type.
	
	- Use maps if there is a ```need to store primitive values as keys``` because object treats each key as a string whether it's a number value, boolean value or any other primitive value.
	
	- Use objects ```when there is logic that operates on individual elements```.


## Weak Map

- keys are always objects...

- WeakMap api is the same as Map api...

- WeakMap keys are not enumarable...

- Everything exposed on the instance and prototype is public; everything else is ```inaccessible from the outside world``` because privates is ```not exported``` from the module.

	- example :
	```javascript
	const privates = new WeakMap();

	function Public() {
	const me = {
		// Private data goes here
	};
	privates.set(this, me);
	}

	Public.prototype.method = function () {
	const me = privates.get(this);
	// Do stuff with private data in `me`...
	};
	module.exports = Public;
	```

## Set

- You can iterate its elements in ```insertion order.```

- example :
```javascript
let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```

- NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).

- You can create an ```Array from a Set``` using ```Array.from``` or the ```spread operator```. Also, the ```Set constructor``` accepts an Array to convert in the other direction.


- Both the key equality of Map objects and the value equality of Set objects, are based on the "same-value-zero algorithm":

	- Equality works like the identity comparison operator ===.
	
	- -0 and +0 are considered equal.
	
	- NaN is considered equal to itself (contrary to ===).

end 
---------------------------------------------



# Working with Objects

- ```Unassigned properties``` of an object are undefined (and not null).

- Objects are sometimes called ```associative arrays```, since each property is associated with a ```string``` value that can be used to access it.

- dot notation and bracket notation are used for reaching properties of an object.

- Improper property names can be reach only with bracket notation :

- You can use the bracket notation with ```for...in``` to iterate over all the enumerable properties of an object.

- ```Object.hasOwnProperty()``` function is used to diffrentiate the properties coming from prototype chain


## Enumarate the Property Objects

- There are three ways to iterate over object properties:

	- for...in loops
	This method traverses ```all enumerable properties``` of an object and ```its prototype chain```

	- Object.keys(o)
	This method returns an ```array with all the own``` (not in the prototype chain) enumerable properties' names ("keys") of an object o.

	- Object.getOwnPropertyNames(o)
	This method returns an ```array containing all own properties' names (enumerable or not)``` of an object o.

- enumerable means countable. Custom properties are enumarable. __proto__ and constructor properties are not enumarable.

	- example for changing enumarablity of a property:
	```javascript
	Object.defineProperty(obj, 'someProp', {
    value: 'someValue',
    enumerable: true
	});
	```

- object properties can be an identifier, a number or a string :
```javascript
var obj = { property_1:   value_1,   // property_# may be an identifier...
            2:            value_2,   // or a number...
            // ...,
			'property n': value_n }; // or a string
```

- ({}) -----> this is unassigned object literal...


- To define an object type, create a ```function``` for the object type that specifies its name, properties, and methods
	
	- example :
	```javascript
	function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	}
	```

- you can always add a property to a previously created object but it doesnt affect other objects. To affect all other object you need to add the property to the definition.

- ```Object.create()``` method gives the opportunity to select an object an make changes on this prototype.

	- example :
	```javascript
	// Animal properties and method encapsulation
	var Animal = {
	type: 'Invertebrates', // Default value of properties
	displayType: function() {  // Method which will display type of Animal
		console.log(this.type);
	}
	};

	// Create new animal type called animal1 
	var animal1 = Object.create(Animal);
	animal1.displayType(); // Output:Invertebrates

	// Create new animal type called Fishes
	var fish = Object.create(Animal);
	fish.type = 'Fishes';
	fish.displayType(); // Output:Fishes
	```

- you can define property names as indexes ---------> ```myCar[3] = "Honda"``` This indexed property can ```only be declared with a bracket notation```...

- HTML array-like object like a form has both an index and a property name if the ```NAME``` attributes are filled.



## Defining Properties for an Object Type

- You can add a property to a previously defined object type by using the prototype property.

	- this may cause reading a hardship

	- example :
	```javascript
	Car.prototype.color = null;   
	let car1 = new Car()
	car1.color = 'black';
	```


## Using this for Object References

- JavaScript has a special keyword, this, that you can use within a method to refer to the current object. Wherever it s called...

	- example :
	```javascript
		const Manager = {
	name: "John",
	age: 27,
	job: "Software Engineer"
	}
	const Intern= {
	name: "Ben",
	age: 21,
	job: "Software Engineer Intern"
	}

	function sayHi() {
		console.log('Hello, my name is', this.name)
	}

	// add sayHi function to both objects
	Manager.sayHi = sayHi;
	Intern.sayHi = sayHi; 

	Manager.sayHi() // Hello, my name is John'
	Intern.sayHi() // Hello, my name is Ben'
	```

## Getter Setter Methods

- they can be defined either by ```object initializers``` or can be assigned with ```special methods```.

- example :
```javascript
var o = {
  a: 7,
  get b() { 
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- At this point the get b() method is initiated.
o.c = 50;         //   <-- At this point the set c(x) method is initiated
console.log(o.a); // 25
```

- example with Object.defineProperties() :
```javascript
var o = { a: 0 };

Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b); // Runs the getter, which yields a + 1 or 6
```


## Deleting Properties

- example :
```javascript
// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // output: "false"
```

- If not declared with ```var``` you can delete global variables. If declared with var nothing happens. If you delete a global variable which is declared without var, and try to reach it you get ```reference error.```

	- example : ------------> 	// Parentheses can be omitted if the
								// constructor takes no arguments.
	```javascript
	// Creates a new object, myobj, with two properties, a and b.
	var myobj = new Object;
	myobj.a = 5;
	myobj.b = 12;

	// Removes the a property, leaving myobj with only the b property.
	delete myobj.a;
	console.log ('a' in myobj); // output: "false"
	```


## Comparing Objects

- Every object is a different object even if they are produced from the same prototype.

- But if you assign one to another, the comparison state changes..

	- example :
	```javascript
	// Two variables, a single object
	var fruit = {name: 'apple'};
	var fruitbear = fruit;  // Assign fruit object reference to fruitbear

	// Here fruit and fruitbear are pointing to same object
	fruit == fruitbear; // return true
	fruit === fruitbear; // return true

	fruit.name = 'grape';
	console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }
	```

end
-----------------------------------------------



# Details of the Object Model

- JavaScript classes, introduced in ECMAScript 2015, are primarily ```syntactical sugar over JavaScript's existing prototype-based inheritance```. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.


## Prototype Based Inheritance 

- In JavaScript, you add a ```prototypical instance as the value of the prototype property of the constructor function```, then ```override the prototype.constructor``` to the ```constructor function.```

	- example :
	```javascript
	function Manager() {
	Employee.call(this);
	this.reports = [];
	}
	Manager.prototype = Object.create(Employee.prototype);
	Manager.prototype.constructor = Manager;

	function WorkerBee() {
	Employee.call(this);
	this.projects = [];
	}
	WorkerBee.prototype = Object.create(Employee.prototype);
	WorkerBee.prototype.constructor = WorkerBee;
	```

	- example with overriding :
	```javascript
	function SalesPerson() {
	WorkerBee.call(this);
	this.dept = 'sales';   // ----> THIS PROPERTY IS OVERRIDEN. IT WAS ALSO DEFINED IN WORKERBEE
	this.quota = 100;
	}
	SalesPerson.prototype = Object.create(WorkerBee.prototype);
	SalesPerson.prototype.constructor = SalesPerson;

	function Engineer() {
	WorkerBee.call(this);
	this.dept = 'engineering';
	this.machine = '';
	}
	Engineer.prototype = Object.create(WorkerBee.prototype)
	Engineer.prototype.constructor = Engineer;
	```

	- example with parameters :
	```javascript
	function SalesPerson(name, dept, quota) {
	this.base = WorkerBee
	this.base(name,dept,null);  
	this.quota = quota || 0
	}
	SalesPerson.prototype = new WorkerBee;   // THIS PART IS IMPORTANT TO CONSTRUCT THE PROTOTYPE CHAIN

	function Engineer(name, projs, mach) {
	this.base = WorkerBee
	this.base(name, "engineering",projs)
	this.machine = mach || ""
	}
	Engineer.prototype = new WorkerBee      // THIS PART IS IMPORTANT TO CONSTRUCT THE PROTOTYPE CHAIN
	```

	- A BETTER WAY :
	```javascript
	function Engineer(name, projs, mach) {
	// call or apply method can be used... no need for explicitly chaning...
	WorkerBee.call(this, name, 'engineering', projs); 
	this.machine = mach || '';
	}
	```

- ```instanceof method looks up the prototype chain```

- __proto__ and ```prototype``` relation :

	- example :
	```javascript
	chris.__proto__ == Engineer.prototype;
	chris.__proto__.__proto__ == WorkerBee.prototype;
	chris.__proto__.__proto__.__proto__ == Employee.prototype;
	chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype;
	chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null;
	```

- When you create an instance of Employee to use as a prototype, ```you do not supply arguments to the constructor.```

- IMPORTANT!
```javascript
WorkerBee.prototype = Object.create(Employee.prototype);
// instead of WorkerBee.prototype = new Employee
```

- THERE IS NO MULTIPLE INHERITANCE IN JAVASCRIPT !
```javascript
function Hobbyist(hobby) {
   this.hobby = hobby || 'scuba';
}

function Engineer(name, projs, mach, hobby) {
   this.base1 = WorkerBee;
   this.base1(name, 'engineering', projs);
   this.base2 = Hobbyist;
   this.base2(hobby);
   this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;

var dennis = new Engineer('Doe, Dennis', ['collabra'], 'hugo');
```
we get these ....  but Hobbyist prototype is not tracked... so the changes are not passed to Engineer...

```javascript
dennis.name == 'Doe, Dennis';
dennis.dept == 'engineering';
dennis.projects == ['collabra'];
dennis.machine == 'hugo';
dennis.hobby == 'scuba';
```

end
----------------------------------------------------------------



# Using Promises

- A Promise is ```an object representing the eventual completion or failure``` of an asynchronous operation

- example :
```javascript
const promise = createAudioFileAsync(audioSettings); 
promise.then(successCallback, failureCallback);
```

- IMPORTANT! ----> Always ```return results,``` otherwise callbacks ```won't catch the result of a previous promise``` (with arrow functions () => x is short for () => { return x; }).

- example with ES 2017 - async / await 
```javascript
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch(error) {
    failureCallback(error);
  }
}
```

- A Promise can be created from scratch using its constructor.

- In an ideal world, ```all asynchronous functions would already return promises```. Unfortunately, ```some APIs still expect success and/or failure callbacks``` to be passed in the old way. ----> like ```setTimeout(() => saySomething("10 seconds passed"), 10*1000);```

- ```Promise.resolve() and Promise.reject()``` are shortcuts to manually create an already resolved or rejected promise respectively.

- ```Promise.all() and Promise.race()``` are two composition tools for running asynchronous operations in parallel.

- example :
```javascript
Promise.all([func1(), func2(), func3()])
.then(([result1, result2, result3]) => { /* use result1, result2 and result3 */ });
```

- example when chaining with catches - IMPORTANT! - 
```javascript
doSomethingCritical()
.then(result => doSomethingOptional(result)
  .then(optionalResult => doSomethingExtraNice(optionalResult))
  .catch(e => {})) // Ignore if optional stuff fails; proceed.
.then(() => moreCriticalStuff())
.catch(e => console.error("Critical failure: " + e.message));
```

- example with common mistakes :
```javascript
// Bad example! Spot 3 mistakes!

doSomething().then(function(result) {
  doSomethingElse(result) // Forgot to return promise from inner chain + unnecessary nesting
  .then(newResult => doThirdThing(newResult));
}).then(() => doFourthThing());
// Forgot to terminate chain with a catch!
```

- example - CORRECT WAY - 
```javascript
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(newResult => doThirdThing(newResult))
.then(() => doFourthThing())
.catch(error => console.error(error));
```

end
-------------------------------------------------------------------------



# Iterators and Generators

- StackOverFlow :
```javascript

It's Really Simple, This is how it works

yield keyword simply helps to pause and resume a function in any time asynchronously.
Additionally it helps to return value from a generator function.
Take this simple generator function:

function* process() {
    console.log('Start process 1');
    console.log('Pause process2 until call next()');

    yield;

    console.log('Resumed process2');
    console.log('Pause process3 until call next()');

    let parms = yield {age: 12};
    console.log("Passed by final process next(90): " + parms);

    console.log('Resumed process3');
    console.log('End of the process function');
}
let _process = process();

Until you call the _process.next() it wont execute the first 2 lines of code, then the first yield will pause the function. To resume the function until next pause point (yield keyword) you need to call _process.next().

You can think multiple yields are the breakpoints in a javascript debugger within a single function. Until you tell to navigate next breakpoint it wont execute the code block. (Note: without blocking the whole application)

But while yield performs this pause and resume behaviours it can return some results as well {value: any, done: boolean} according to the previous function we haven't emit any values. If we explore the previous output it will show the same { value: undefined, done: false } with value undefined.

Lets dig in to the yield keyword. Optionally you can add expression and set assign a default optional value. (Official doc syntax)

[rv] = yield [expression];
expression: Value to return from the generator function

yield any;
yield {age: 12};
rv: Returns the optional value that passed to the generator's next() method

Simply you can pass parameters to process() function with this mechanism, to execute different yield parts.

let val = yield 99; 

_process.next(10);
now the val will be 10 
Try It Now

Usages

Lazy evaluation
Infinite sequences
Asynchronous control flows
References:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
http://javascript.tutorialhorizon.com/2015/09/16/generators-and-yield-in-es6/
https://strongloop.com/strongblog/how-to-generators-node-js-yield-use-cases/
```

- Note: A value passed to the first invocation of next() is always ignored.


end 
--------------------------------------------------------------------


# Meta Programming

-  ```Proxy and Reflect objects``` allow you to intercept and define custom behavior for fundamental language operations (e.g. property lookup, assignment, enumeration, function invocation, etc). 

- example : In this example we get the original property from the target, if it doesnt exist we get 42. there is no undefine return.
```javascript
let handler = {
  get: function(target, name) {
    return name in target? target[name] : 42
  }
}

let p = new Proxy({}, handler)
p.a = 1
console.log(p.a, p.b) // 1, 42
```

- [Proxy Page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)


## Reflect 

- Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of the proxy handlers.

- ``` Function.prototype.apply.call(Math.floor, undefined, [1.75])``` With ```Reflect.apply``` this becomes less verbose and easier to understand:
```javascript
Reflect.apply(Math.floor, undefined, [1.75])
// 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index
// 4

Reflect.apply(''.charAt, 'ponies', [3])
// "i"
```


