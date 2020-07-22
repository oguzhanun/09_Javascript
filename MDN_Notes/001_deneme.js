//"use strict";

if (true) {
  y = 5;   // ----> global variable
}

console.log(y);  // ReferenceError: y is not defined

// if (true) {
//   var y = 5;
// }
//console.log(y);  // y prints 5

x=5  // when used with "use strict" it gives x is not defined error...

console.log(x)

const fix = 222

let fix = 33
