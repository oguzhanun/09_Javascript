// array = new Array() is also valid...
array = Array()  

array.push("me")

console.log(array)

// 7 = "hello" // gives error (Invalid left hand-side in assignment)

// console.log(7)

let prop_42 = "he"

let obj = {
    ['prop_' + (() => 42)()]: 42,
    [prop_42]:11
}

console.log(obj["he"])
console.log(obj["prop_42"])

console.log("one line \251 another line")
console.log("one line \u00A9 another line")

console.log(`In JavaScript, template strings can run
over multiple lines, but double and single
quoted strings cannot.`)

// throw 'Error2';   // String type
// throw 42;         // Number type
// throw true;       // Boolean type
// throw {toString: function() { return "I'm an object!"; } };

//throw new Object({hey:"I am an error", toString:function(){return this.hey}})

//openMyFile();
try {
  console.log("theData"); // This may throw an error
  throw "errror...."
}// catch(e) {  
//     console.error(e); // If an error occurred, handle it
// } 
finally {
    console.log("close"); // Always close the resource
}