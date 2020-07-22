// The Primitive 
foo = 5;

// Defining a function that should change the Primitive value
function addTwo(num) {
  num += 2;
}
// Another function trying to do the same thing
function addTwo_v2(foo) {
	console.log(global.foo)
  global.foo += 2;
}

// Calling our first function while passing our Primitive as an argument
addTwo(foo);
// Getting the current Primitive value
console.log(foo);   // 5

// Trying again with our second function...
addTwo_v2(foo);
console.log(foo);   // 5