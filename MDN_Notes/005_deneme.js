function Person() {
    // The Person() constructor defines `this` as itself.
    
    self = this
    this.age = 0;

    // If you return this function the object Person exposes only its function... 
    // Otherwise the properties are exposed to the constructor of the instance...
    return function growUp() {
      // In nonstrict mode, the growUp() function defines `this` 
      // as the global object, which is different from the `this`
      // defined by the Person() constructor.
      this.age=5
      //return this.age++;
      
    }
}
  
  var p = new Person();
  
  //p.growUp() ----------> gives error || it needs to be bound to parent function's this object
  
  // If you construct the returning function then you can reach its properties. Otherwise its properties are
  // not reachable... They are not exposed to outside world...
  let a = new p() 
  console.log(a.age)

  //const a = { duration: 50 };

//a.duration ??= 10; nullish operator node.js doesnt know about this

console.log(4**3)

console.log(Math.clz32(10))