var myObj = new Object()
		str = 'myString',
		rand = Math.random(),
        obj = new Object();
        
console.log(myObj[str])


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

//Car.doors = "4"
//Car.prototype.constructor = Car
Car.prototype.color = "black";


var car1 = new Car()
let car2 = Object.create(new Car())

//car1.color = 'black';
// car.make = "toyota"
// car.model = "corolla"
// car.year = 1998

console.log("car2:", car2.color)


car1[3] = 33
console.log("car1:",car1.color)
console.log(Object.getOwnPropertyNames(car1))

// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // output: "false"

g = 22

delete g

//console.log(g)

// Two variables, a single object
var fruit = {name: 'apple'};
var fruitbear = new Object(fruit);  // Assign fruit object reference to fruitbear    ------- // shallow copy
console.log(fruitbear);

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true

fruit.name = 'grape';
console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }